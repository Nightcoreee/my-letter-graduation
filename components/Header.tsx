import styles from "@/styles/Header.module.css";

export default function Header() {
    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.text}`}>
                🎓 Thư Mời Tốt Nghiệp của Ngọc Hà ~~
            </div>
        </header>
    );
}