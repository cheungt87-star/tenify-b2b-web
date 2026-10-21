/**
 * Hero video playback: resume after OS pause + muted autoplay / gesture fallback.
 *
 * Run: node --experimental-strip-types repro-hero-video-resume.test.mjs
 */

import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function loadPlaybackModule() {
  return import(
    pathToFileURL(join(__dirname, "lib/hero-video-playback.ts")).href
  );
}

function createMockVideo({
  initiallyPaused = false,
  rejectPlay = false,
} = {}) {
  let paused = initiallyPaused;
  let muted = false;
  let defaultMuted = false;
  const attributes = new Map();

  return {
    get paused() {
      return paused;
    },
    get muted() {
      return muted;
    },
    set muted(value) {
      muted = value;
    },
    get defaultMuted() {
      return defaultMuted;
    },
    set defaultMuted(value) {
      defaultMuted = value;
    },
    setAttribute(name, value) {
      attributes.set(name, value);
    },
    getAttribute(name) {
      return attributes.get(name);
    },
    async play() {
      if (rejectPlay) {
        throw new Error("NotAllowedError");
      }
      paused = false;
    },
    pause() {
      paused = true;
    },
    simulateUnexpectedPause() {
      paused = true;
    },
    allowPlay() {
      rejectPlay = false;
    },
  };
}

async function main() {
  const {
    syncVideoPlayback,
    shouldBePlaying,
    prepareMutedInlinePlayback,
  } = await loadPlaybackModule();

  // Case 1: unexpected OS pause while hero is still on screen
  const video = createMockVideo({ initiallyPaused: false });
  const intent = { inView: true, pageVisible: true };

  assert.equal(shouldBePlaying(intent), true);
  assert.equal(video.paused, false);

  video.simulateUnexpectedPause();
  assert.equal(video.paused, true, "precondition: OS paused the video");

  const action = await syncVideoPlayback(video, intent);
  assert.equal(
    action,
    "play",
    "must attempt play() after unexpected pause while still intended to play",
  );
  assert.equal(
    video.paused,
    false,
    "video must be playing again after sync (mobile resume)",
  );

  // Case 2: tab hidden → pause; visible again → resume
  const video2 = createMockVideo({ initiallyPaused: false });
  await syncVideoPlayback(video2, { inView: true, pageVisible: false });
  assert.equal(video2.paused, true);

  await syncVideoPlayback(video2, { inView: true, pageVisible: true });
  assert.equal(video2.paused, false);

  // Case 3: scrolled out → pause; back in view → play
  const video3 = createMockVideo({ initiallyPaused: false });
  await syncVideoPlayback(video3, { inView: false, pageVisible: true });
  assert.equal(video3.paused, true);

  await syncVideoPlayback(video3, { inView: true, pageVisible: true });
  assert.equal(video3.paused, false);

  // Case 4: muted / playsInline prepared before play
  const video4 = createMockVideo({ initiallyPaused: true });
  prepareMutedInlinePlayback(video4);
  assert.equal(video4.muted, true, "muted property must be true");
  assert.equal(video4.defaultMuted, true, "defaultMuted must be true");
  assert.equal(video4.getAttribute("muted"), "");
  assert.equal(video4.getAttribute("playsinline"), "");
  assert.equal(video4.getAttribute("webkit-playsinline"), "");

  const playAction = await syncVideoPlayback(video4, {
    inView: true,
    pageVisible: true,
  });
  assert.equal(playAction, "play");
  assert.equal(video4.muted, true, "muted must remain set through play()");

  // Case 5: play() rejection → blocked (autoplay blocked on mobile)
  const video5 = createMockVideo({ initiallyPaused: true, rejectPlay: true });
  const blocked = await syncVideoPlayback(video5, {
    inView: true,
    pageVisible: true,
  });
  assert.equal(blocked, "blocked", "must report blocked when play() rejects");
  assert.equal(video5.paused, true);
  assert.equal(video5.muted, true, "still prepares muted before rejected play");

  // Case 6: gesture retry after blocked autoplay succeeds
  const video6 = createMockVideo({ initiallyPaused: true, rejectPlay: true });
  assert.equal(
    await syncVideoPlayback(video6, { inView: true, pageVisible: true }),
    "blocked",
  );
  video6.allowPlay();
  const resumed = await syncVideoPlayback(video6, {
    inView: true,
    pageVisible: true,
  });
  assert.equal(resumed, "play", "gesture-driven retry must succeed");
  assert.equal(video6.paused, false);

  // Case 7: user pressed pause → stays paused, never auto-resumed
  const video7 = createMockVideo({ initiallyPaused: false });
  const userPausedIntent = { inView: true, pageVisible: true, userPaused: true };
  assert.equal(shouldBePlaying(userPausedIntent), false);
  assert.equal(await syncVideoPlayback(video7, userPausedIntent), "pause");
  assert.equal(video7.paused, true);
  assert.equal(
    await syncVideoPlayback(video7, userPausedIntent),
    "noop",
    "must not resume while the user has paused",
  );

  console.log(
    "PASS: hero video resume, muted prep, blocked autoplay, gesture retry, and user pause",
  );
}

main().catch((err) => {
  console.error("FAIL:", err.message);
  process.exit(1);
});
