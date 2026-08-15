import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          borderRadius: 7,
          fontFamily: "serif",
          fontSize: 21,
          fontWeight: 600,
          fontStyle: "italic",
          color: "#d99b3f",
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
