import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(160deg, #2c1f14 0%, #1a1208 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b89060",
            marginBottom: 24,
          }}
        >
          Flooring Contractor · Coquitlam, BC
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f5ede0",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          A&amp;A Flooring
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#c9a87a",
            lineHeight: 1.4,
            maxWidth: 680,
          }}
        >
          Hardwood, vinyl &amp; custom stair treads — Lower Mainland
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 80,
            fontSize: 18,
            color: "#7a6040",
            letterSpacing: "0.1em",
          }}
        >
          aa-flooring.ca
        </div>
      </div>
    ),
    { ...size }
  );
}
