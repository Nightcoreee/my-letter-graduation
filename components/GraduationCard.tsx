"use client";
import { useState } from "react";
import styles from "@/styles/GraduationCard.module.css";
import Calendar from "@/components/Calendar";
import InvitationLetter from "@/components/InvitationLetter";
import Location from "@/components/Location";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import { useEffect } from "react";

export default function GraduationCard() {
  useEffect(() => {
    const scrollFunction = () => {
      const myButton = document.getElementById("myBtn");
      if (!myButton) return;

      if (document.documentElement.scrollTop > 0) {
        myButton.classList.add(styles.show);
      } else {
        myButton.classList.remove(styles.show);
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);


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

       

        {/* ── Main content ── */}
        <div className={styles.content}>
          {/* Info */}
          <div className={styles.info}>
            {/* "Graduation Ceremony" script label */}
            <p
              className={styles.graduationLabel}
            >
              Graduation Ceremony
            </p>

            {/* Name */}
            <h1
              className={styles.name}
            >
              Đào Ngọc Hà
            </h1>

            {/* Date */}
            <p className={styles.date}>
              14 <span className="mx-2 text-gray-400"> |</span> 
              Tháng 3 <span className="mx-2 text-gray-400">|</span>
              2026
            </p>

          </div>
        </div>
      </div>

      <div className="Calender-item">
        <Calendar />
      </div>

      <div className="Letter-item">
        <InvitationLetter />
      </div>

      <div className="Location-item">
        <Location />
      </div>

      <div className="Timeline-item">
        <Timeline />
      </div>
      
      <div id="myBtn" className={styles.btntoTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Image 
          src="/angle-double-up-solid.svg" 
          alt="icon-back-to-top" 
          width={20} 
          height={20} 
          style={{ opacity: 0.5 }}
          />
      </div>

    </>
  );
}