"use client";
import styles from "@/styles/Header.module.css";
import { useEffect } from "react";


export default function Header() {
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
        </header>
    );
}