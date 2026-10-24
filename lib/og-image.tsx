import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Default 1200x630 social card: brand green, wordmark and tagline. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#077b5c",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: -2 }}>Tenify</div>
        <div style={{ fontSize: 52, marginTop: 24, lineHeight: 1.2 }}>
          Move in with confidence.
        </div>
        <div style={{ fontSize: 32, marginTop: 28, opacity: 0.85 }}>
          Property condition reports, room by room, with photos.
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
