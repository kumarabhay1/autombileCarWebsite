"use client";

import React, { useRef, useCallback, useState, useEffect } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxX?: number;
  tiltMaxY?: number;
  glareEnabled?: boolean;
}

export function TiltCard({
  children,
  className = "",
  tiltMaxX = 10,
  tiltMaxY = 10,
  glareEnabled = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const rafId = useRef<number | null>(null);

  // Cached DOM references to prevent querySelectorAll on every mouse frame
  const imgsRef = useRef<HTMLElement[]>([]);
  const contentsRef = useRef<HTMLElement[]>([]);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const isCachedRef = useRef(false);

  const updateCachedRefs = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    imgsRef.current = Array.from(card.querySelectorAll<HTMLElement>("[data-parallax-img]"));
    contentsRef.current = Array.from(card.querySelectorAll<HTMLElement>("[data-parallax-content]"));
    glareRef.current = card.querySelector<HTMLDivElement>("[data-tilt-glare]");
    isCachedRef.current = true;
  }, []);

  useEffect(() => {
    const reducedMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkState = () => {
      setIsDisabled(reducedMotionMq.matches);
    };

    checkState();
    reducedMotionMq.addEventListener("change", checkState);

    return () => {
      reducedMotionMq.removeEventListener("change", checkState);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const applyTilt = useCallback(
    (clientX: number, clientY: number) => {
      if (isDisabled) return;
      const card = cardRef.current;
      if (!card) return;

      if (!isCachedRef.current) {
        updateCachedRefs();
      }

      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Ensure within bounds
      if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const rotateX = percentY * -tiltMaxX;
      const rotateY = percentX * tiltMaxY;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = "transform 0.1s ease-out";

        // 3D Parallax shift for Image layers using cached refs
        imgsRef.current.forEach((img) => {
          const moveX = percentX * -12;
          const moveY = percentY * -12;
          img.style.transform = `scale(1.12) translate3d(${moveX}px, ${moveY}px, 0px)`;
          img.style.transition = "transform 0.1s ease-out";
        });

        // 3D Parallax float for Content layers using cached refs
        contentsRef.current.forEach((content) => {
          content.style.transform = `translateZ(25px)`;
          content.style.transition = "transform 0.1s ease-out";
        });

        // Move glare reflection using cached ref
        const glare = glareRef.current;
        if (glare) {
          const glareX = (x / rect.width) * 100;
          const glareY = (y / rect.height) * 100;
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
          glare.style.opacity = "1";
        }
      });
    },
    [tiltMaxX, tiltMaxY, isDisabled, updateCachedRefs]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      applyTilt(e.clientX, e.clientY);
    },
    [applyTilt]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches[0]) {
        applyTilt(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    [applyTilt]
  );

  const handleReset = useCallback(() => {
    if (isDisabled) return;
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const card = cardRef.current;
    if (!card) return;

    rafId.current = requestAnimationFrame(() => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      card.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";

      imgsRef.current.forEach((img) => {
        img.style.transform = "scale(1) translate3d(0px, 0px, 0px)";
        img.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      });

      contentsRef.current.forEach((content) => {
        content.style.transform = "translateZ(0px)";
        content.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      });

      const glare = glareRef.current;
      if (glare) {
        glare.style.opacity = "0";
      }
      isCachedRef.current = false;
    });
  }, [isDisabled]);

  return (
    <div
      ref={cardRef}
      className={`relative transform-gpu will-change-transform ${className}`}
      onMouseEnter={updateCachedRefs}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      onTouchStart={updateCachedRefs}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {/* Glare reflection overlay */}
      {glareEnabled && (
        <div
          data-tilt-glare
          className="absolute inset-0 z-30 pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-300"
        />
      )}
    </div>
  );
}
