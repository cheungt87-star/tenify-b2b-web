import Image from "next/image";
import type { CSSProperties } from "react";
import {
  BackIcon,
  CameraIcon,
  CheckIcon,
  InfoIcon,
  MicIcon,
  PlusIcon,
  TrashIcon,
} from "./icons";
import ui from "./screen.module.css";
import styles from "./step-screens.module.css";

type Fixture = {
  name: string;
  answer: "yes" | "no";
  /** Seconds into the sequence when this fixture is answered. */
  at: number;
};

const FIXTURES: readonly Fixture[] = [
  { name: "Doors", answer: "yes", at: 2.6 },
  { name: "Windows", answer: "yes", at: 3.2 },
  { name: "Light switches", answer: "yes", at: 3.8 },
  { name: "AC vents", answer: "yes", at: 4.4 },
  { name: "Power outlets", answer: "no", at: 5 },
];

const CHECK_POINTS = [
  "Opens and closes smoothly, without sticking or scraping",
  "Door latches securely when closed",
  "No visible damage to door or frame (dents, cracks, scratches)",
] as const;

const WRONG_CHIPS = ["Not working", "Damaged", "Unable to test"] as const;

const RATE_GUIDE = [
  { score: "5 · Excellent", text: "New or looks brand new, no visible wear or damage, works perfectly." },
  { score: "4 · Very good", text: "Minimal signs of use, light surface wear that doesn't affect how it works." },
  { score: "3 · Good", text: "Noticeable everyday wear but completely functional. No broken parts." },
  { score: "2 · Fair", text: "Functional but with substantial wear or damage: chips, cracks, loose parts." },
  { score: "1 · Poor", text: "Non-functional or unsafe. Major damage, broken parts, or won't work at all." },
] as const;

const KEY_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"] as const;

function FixtureHeader() {
  return (
    <div className={styles.fixtureNav}>
      <span className={styles.fixtureNavBack}>
        <BackIcon />
        Rooms
      </span>
      <span className={styles.fixtureNavTitle}>Lounge/living area</span>
      <span className={styles.fixtureNavSave}>Save &amp; exit</span>
    </div>
  );
}

function RatingCircles() {
  return (
    <>
      <div className={styles.rateCircles}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={styles.rateCircle}>
            {n}
          </span>
        ))}
      </div>
      <div className={styles.rateEnds}>
        <span>Poor</span>
        <span>Excellent</span>
      </div>
    </>
  );
}

export function StepTwoScreen() {
  return (
    <div
      className={`${ui.root} ${styles.stepTwoRoot}`}
      role="img"
      aria-label="Tenify inspecting the lounge and living area: check what to look for on doors, answer yes for doors, windows, light switches and AC vents, answer no for power outlets, mark damaged, add the note face plate is loose with a photo, then rate the furnishings"
    >
      {/* Scene 1: Fixtures checklist */}
      <section className={`${styles.s2Scene} ${styles.fixturesScene}`}>
        <FixtureHeader />
        <div className={`${styles.fixtureTabs} ${ui.enter}`} style={{ "--i": 0 } as CSSProperties}>
          <span className={`${styles.fixtureTab} ${styles.fixtureTabActive}`}>Fixtures · 0/5</span>
          <span className={styles.fixtureTab}>Furnishings · 0/5</span>
        </div>

        <div className={styles.fixtureScroller}>
          <div className={styles.fixtureScrollInner}>
            <div className={`${styles.guideCard} ${ui.enter}`} style={{ "--i": 1 } as CSSProperties}>
              <p className={styles.guideTitle}>For every fixture:</p>
              <p className={styles.guideStep}>
                <b>1</b> Examine it
              </p>
              <p className={styles.guideStep}>
                <b>2</b>
                <span>
                  Answer <strong>Yes</strong> only if it works as expected <strong>and</strong> has
                  no visible damage
                </span>
              </p>
            </div>
            <p className={`${styles.guideHelper} ${ui.enter}`} style={{ "--i": 2 } as CSSProperties}>
              Unsure what to look for? Tap the <InfoIcon /> next to the fixture name.
            </p>
            <div className={`${styles.fixtureActions} ${ui.enter}`} style={{ "--i": 3 } as CSSProperties}>
              <span className={styles.selectBtn2}>
                <CheckIcon />
                Select
              </span>
              <span className={styles.addBtn2}>
                <PlusIcon />
                Add
              </span>
            </div>

            <div className={styles.fixtureList}>
              {FIXTURES.map((fixture, index) => (
                <div key={fixture.name}>
                  <div
                    className={`${styles.fixtureRow} ${fixture.name === "Doors" ? styles.fixtureRowInfo : ""} ${ui.enter}`}
                    style={{ "--i": 3.5 + index * 0.5, "--t": `${fixture.at}s` } as CSSProperties}
                  >
                    <span className={styles.fixtureName}>{fixture.name}</span>
                    <span
                      className={`${styles.fixtureInfo} ${fixture.name === "Doors" ? styles.infoActive : ""}`}
                    >
                      <InfoIcon />
                    </span>
                    <span className={styles.yesNo}>
                      <b className={styles.yesBtn}>Yes</b>
                      <b className={styles.noBtn}>No</b>
                      <b className={fixture.answer === "yes" ? styles.yesSelected : styles.noSelected}>
                        {fixture.answer === "yes" ? "Yes" : "No"}
                      </b>
                    </span>
                    <span className={styles.fixtureTrash}>
                      <TrashIcon />
                    </span>
                  </div>

                  {fixture.name === "Doors" ? (
                    <div className={styles.checkPanel}>
                      <p className={styles.checkTitle}>What to check:</p>
                      {CHECK_POINTS.map((point) => (
                        <p key={point} className={styles.checkPoint}>
                          <i />
                          {point}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {fixture.name === "Power outlets" ? (
                    <>
                      <div className={styles.wrongBlock}>
                        <p className={styles.wrongTitle}>What&apos;s wrong?</p>
                        <div className={styles.wrongChips}>
                          {WRONG_CHIPS.map((chip) => (
                            <span
                              key={chip}
                              className={`${styles.wrongChip} ${chip === "Damaged" ? styles.wrongChipActive : ""}`}
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className={styles.issuePanel}>
                        <div className={styles.noteField}>
                          <span className={styles.notePlaceholder}>What&apos;s wrong?</span>
                          <span className={styles.noteValue}>
                            Face plate is loose
                            <i className={styles.caret} />
                          </span>
                          <span className={styles.noteMic}>
                            <MicIcon />
                          </span>
                        </div>
                        <div className={styles.photoSwap}>
                          <span className={styles.photoAdd}>
                            Add a photo
                            <span className={styles.photoCamBtn}>
                              <CameraIcon />
                            </span>
                          </span>
                          <span className={styles.photoDone}>
                            1 of 3 photos
                            <span className={styles.photoThumbMini}>
                              <Image
                                src="/how-it-works/outlet-photo.webp"
                                alt=""
                                fill
                                sizes="26px"
                              />
                            </span>
                            <span className={styles.photoCamBtn}>
                              <CameraIcon />
                            </span>
                          </span>
                        </div>
                        <p className={styles.requiredNote}>Note and photo are required</p>
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.continueBtn}>Continue</div>

        <div className={styles.keyboard2}>
          <div className={styles.kbToolbar}>
            <span>&ldquo;loose&rdquo;</span>
            <span>looser</span>
            <span>loosely</span>
            <span className={styles.kbCheck}>✓</span>
          </div>
          {KEY_ROWS.map((row) => (
            <div key={row} className={styles.kbRow}>
              {row.split("").map((key) => (
                <span key={key} className={styles.kbKey}>
                  {key}
                </span>
              ))}
            </div>
          ))}
          <div className={styles.kbRow}>
            <span className={`${styles.kbKey} ${styles.kbKeyWide}`}>123</span>
            <span className={`${styles.kbKey} ${styles.kbSpace}`} />
            <span className={`${styles.kbKey} ${styles.kbKeyWide}`}>⏎</span>
          </div>
        </div>
      </section>

      {/* Scene 2: Camera — live viewfinder, capture, then confirm */}
      <section className={`${styles.s2Scene} ${styles.cameraScene}`}>
        <div className={styles.cameraPhoto}>
          <Image
            src="/how-it-works/outlet-photo.webp"
            alt=""
            fill
            sizes="300px"
            className={styles.cameraImg}
          />
        </div>
        <div className={styles.viewfinder}>
          <i className={`${styles.focusCorner} ${styles.focusTl}`} />
          <i className={`${styles.focusCorner} ${styles.focusTr}`} />
          <i className={`${styles.focusCorner} ${styles.focusBl}`} />
          <i className={`${styles.focusCorner} ${styles.focusBr}`} />
          <span className={styles.focusSquare} />
        </div>
        <div className={styles.cameraControls}>
          <span className={styles.cameraThumb}>
            <Image src="/how-it-works/outlet-photo.webp" alt="" fill sizes="30px" />
          </span>
          <span className={styles.shutterBtn}>
            <i />
          </span>
          <span className={styles.flipBtn}>
            <CameraIcon />
          </span>
        </div>
        <div className={styles.cameraFlash} />
        <div className={styles.cameraBar}>
          <span>Retake</span>
          <span>Use Photo</span>
        </div>
      </section>

      {/* Scene 3: Furnishings, rate condition */}
      <section className={`${styles.s2Scene} ${styles.furnishingsScene}`}>
        <FixtureHeader />
        <div className={styles.fixtureTabs}>
          <span className={styles.fixtureTab}>Fixtures · 5/5</span>
          <span className={`${styles.fixtureTab} ${styles.fixtureTabActive}`}>Furnishings · 0/5</span>
        </div>
        <div className={styles.fixtureActions}>
          <span className={styles.selectBtn2}>
            <CheckIcon />
            Select
          </span>
          <span className={styles.addBtn2}>
            <PlusIcon />
            Add
          </span>
        </div>

        <div className={styles.furnishCard}>
          <div className={styles.furnishHead}>
            <span className={styles.fixtureName}>Sofa/Couch</span>
            <span className={`${styles.fixtureInfo} ${styles.infoActive}`}>
              <InfoIcon />
            </span>
            <span className={styles.fixtureTrash}>
              <TrashIcon />
            </span>
          </div>
          <div className={styles.rateGuide}>
            {RATE_GUIDE.map((line) => (
              <p key={line.score} className={styles.rateLine}>
                <b>{line.score}</b> {line.text}
              </p>
            ))}
          </div>
          <p className={styles.rateLabel}>
            1. Rate condition <b>*</b>
          </p>
          <RatingCircles />
          <p className={styles.rateLabel}>
            2. Photos (1 to 3) <b>*</b>
          </p>
          <div className={styles.furnishFoot}>
            <span className={styles.addPhotoBox}>
              <CameraIcon />
              Add a photo
            </span>
            <span className={styles.faultyLink}>Item is faulty</span>
          </div>
        </div>

        <div className={styles.furnishCard}>
          <div className={styles.furnishHead}>
            <span className={styles.fixtureName}>Coffee table</span>
            <span className={styles.fixtureInfo}>
              <InfoIcon />
            </span>
            <span className={styles.fixtureTrash}>
              <TrashIcon />
            </span>
          </div>
          <p className={styles.rateLabel}>
            1. Rate condition <b>*</b>
          </p>
          <RatingCircles />
          <p className={styles.rateLabel}>
            2. Photos (1 to 3) <b>*</b>
          </p>
        </div>

        <div className={styles.continuePale}>Continue</div>
      </section>
    </div>
  );
}
