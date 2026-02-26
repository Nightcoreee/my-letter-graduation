"use client";

import { useState } from "react";


export default function GraduationCard() {
  const [bgColor, setBgColor] = useState("#faf6ed");
  const [bgImg, setBgImg] = useState<string | null>(null);

  const handleChangeBg = (color: string, img: string | null) => {
    setBgColor(color);
    setBgImg(img);
  };

  return (
    <>
      {/* Full-screen card */}
      <div
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
        style={{ 
            backgroundColor: bgColor,
            backgroundImage: "url('/img/bg/cloud1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
      >
        {/* Background image layer */}
        {bgImg && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{ backgroundImage: `url('${bgImg}')`, opacity: 0.45 }}
          />
        )}
        {/* Soft overlay so text stays readable */}
        <div
          className="absolute inset-0 transition-colors duration-500"
          style={{ background: `${bgColor}88` }}
        />

        {/* ── Decorative layers ── */}
       

        {/* ── Main content ── */}
        <div className="relative z-20 flex items-center gap-16 animate-fade-up">

          {/* Avatar */}

          {/* Info */}
          <div className="flex flex-col gap-4 center text-center">
            {/* "Graduation Ceremony" script label */}
            <p
              className="text-[52px] font-bold animate-fade-up-1"
              style={{ color: "#27AE60", fontFamily: "var(--font-agbalumo)" }}
            >
              Graduation Ceremony
            </p>

            {/* Name */}
            <h1
              className="text-[52px] font-bold leading-tight tracking-tight animate-fade-up-2"
              style={{ color: "#E74C3C", fontFamily: "var(--font-shantell)" }}
            >
              Đào Ngọc Hà
            </h1>

            {/* Date */}
            <p className="text-[40px] font-bold text-gray-500 tracking-wide animate-fade-up-3"
              style={{ fontFamily: "var(--font-itim)" }}>
              14 <span className="mx-2 text-gray-400"> |</span> 
              Tháng 3 <span className="mx-2 text-gray-400">|</span>
              2026
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
