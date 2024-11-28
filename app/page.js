"use client";

import BuildingTerminus from "@/Components/Home/BuildingTerminus";
import FirstSection from "@/Components/Home/FirstSection";

// Add this line at the very top

export default function Home() {
  return (
    <>
      <div className="relative flex justify-center items-center h-[800px]  overflow-hidden ">
        {/* Fullscreen video */}
        <video
          src="/assets/videos/homeBg.mp4"
          autoPlay
          loop
          muted
          controls={false}
          playsInline
          style={{
            position: "absolute", // Make it a background element
            top: 0,
            left: 0,
            width: "100vw", // Full width of the viewport
            height: "800px", // Full height of the viewport
            objectFit: "cover", // Ensure the video covers the entire screen
            opacity: 1,
            // transform: "rotate(270deg)", // Rotate 270 degrees
            zIndex: -1, // Keep the video in the background
          }}
        />
        {/* Text content */}

        <FirstSection />
      </div>
      <BuildingTerminus />
    </>
  );
}
