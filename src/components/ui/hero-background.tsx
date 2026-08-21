"use client";

import React, { useEffect, useRef } from "react";
import { assets } from "@/data/assets";

export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = assets.hero.video;

    // Dynamically handle HLS (.m3u8) streams for cross-browser support
    let hlsInstance: any = null;

    import("hls.js").then((HlsModule) => {
      const Hls = HlsModule.default;
      if (Hls.isSupported()) {
        hlsInstance = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
        });
        hlsInstance.loadSource(videoSrc);
        hlsInstance.attachMedia(video);
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoSrc;
        video.addEventListener("loadedmetadata", () => {
          video.play().catch(() => {});
        });
      }
    }).catch(() => {
      // If HLS fails, fallback to direct video src
      video.src = videoSrc;
    });

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#05070a]">
      {/* Background Video (Instant load with HLS + Direct MP4 fallback, no static poster flash) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-300"
      >
        <source src="https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g/high.mp4" type="video/mp4" />
      </video>

      {/* RICH DARK OVERLAY MASK */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/85 via-[#05070a]/50 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#05070a]/50 pointer-events-none z-10" />
    </div>
  );
}
