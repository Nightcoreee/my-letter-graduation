"use client";
import styles from "@/styles/Header.module.css";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
   const [isDark, setIsDark] = useState(() => {
       if (typeof window !== "undefined") {
           const saved = localStorage.getItem("theme");
           return saved === "dark";
       }
       return false;
   });

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const navbar = document.getElementById("navbar");
            if (!navbar) return;

            if (currentScrollY <= 0) {
                navbar.classList.remove(styles.pinned, styles.unpinned);
            } else if (currentScrollY < lastScrollY) {
                navbar.classList.remove(styles.unpinned);
                navbar.classList.add(styles.pinned);
            } else {
                navbar.classList.remove(styles.pinned);
                navbar.classList.add(styles.unpinned);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header id="navbar" className={styles.header}>
            <div className={styles.text}>
                🎓 Thư Mời Tốt Nghiệp của Ngọc Hà ~~
            </div>

            <div className={styles.toggleMode}>
                <button
                    aria-label="Toggle dark mode"
                    onClick={() => setIsDark(!isDark)}
                >
                    {isDark ? (
                        <Moon width={20} height={20} />
                    ) : (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#sun-clip)">
                            <path d="M8 1.11133V2.00022" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.8711 3.12891L12.2427 3.75735" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.8889 8H14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.8711 12.8711L12.2427 12.2427" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 14.8889V14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.12891 12.8711L3.75735 12.2427" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.11133 8H2.00022" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.12891 3.12891L3.75735 3.75735" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.00043 11.7782C10.0868 11.7782 11.7782 10.0868 11.7782 8.00043C11.7782 5.91402 10.0868 4.22266 8.00043 4.22266C5.91402 4.22266 4.22266 5.91402 4.22266 8.00043C4.22266 10.0868 5.91402 11.7782 8.00043 11.7782Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="sun-clip">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )}
                </button>
            </div>
        </header>
    );
}