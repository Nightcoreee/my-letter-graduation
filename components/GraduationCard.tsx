"use client";

import { useState } from "react";
import styles from "@/styles/GraduationCard.module.css";
import Celendar from "@/components/Celendar";
import InvitationLetter from "@/components/InvitationLetter";

export default function GraduationCard() {
  const [bgColor] = useState("#faf6ed");
  const [bgImg] = useState<string | null>(null);

  

  return (
    <>
      {/* Full-screen card */}
      <div
        className={styles.card}
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
            className={styles.bgImage}
            style={{ backgroundImage: `url('${bgImg}')`, opacity: 0.45 }}
          />
        )}
        {/* Soft overlay so text stays readable */}
        <div
          className={styles.overlay}
          style={{ background: `${bgColor}88` }}
        />

        {/* ── Decorative layers ── */}
       

        {/* ── Main content ── */}
        <div className={styles.mainContent}>

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

      <div className="celender-item">
        <Celendar />
      </div>

      <div className="Letter-item">
        <InvitationLetter />
      </div>
    </>
  );
}