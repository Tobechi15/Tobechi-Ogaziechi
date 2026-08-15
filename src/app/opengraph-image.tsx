import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          color: "#ededec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#bcbcb4",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#4f9c74",
              display: "flex",
            }}
          />
          Software Engineer &amp; Product Builder
        </div>
        <div style={{ display: "flex", fontSize: 96, marginTop: 28, fontWeight: 600 }}>
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 24,
            maxWidth: 900,
            color: "#d99b3f",
          }}
        >
          Fintech infrastructure · Trading systems · Full-stack products
        </div>
      </div>
    ),
    { ...size }
  );
}
