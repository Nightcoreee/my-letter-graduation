import styles from "@/styles/Celendar.module.css";
import Image from "next/image";

const MONTH = 3;
const YEAR = 2026;
const HIGHLIGHT_DAY = 14; 

const DAY_HEADERS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];



function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  const day = new Date(year, month - 1, 1).getDay();
  return day === 0 ? 6 : day - 1;
}
export default function Celendar() {
    const totalDays = getDaysInMonth(MONTH, YEAR);
    const firstDay = getFirstDayOfMonth(MONTH, YEAR);

    const cells: (number | null)[] = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: totalDays }, (_, i) => i + 1),
     ];

    while (cells.length % 7 !== 0) cells.push(null);
    
    return (
        <div className={styles.section}>
        <div className={styles.celendarItem}>
            <Image
                src="/img/celendar/celendar.jpg"
                alt="graduation schedule"
                fill
                className={styles.celendarImage}
            />
            <div className={styles.calendarOverlay}>

                {/* Title */}
                <h2 className={styles.title}>Lịch Tốt Nghiệp</h2>
                <p className={styles.subtitle}>Tháng 03 năm 2026</p>

                {/* Grid lịch */}
                <div className={styles.grid}>

                    {/* Headers T2 → CN */}
                    {DAY_HEADERS.map((d) => (
                        <div
                            key={d}
                            className={`${styles.dayHeader} ${d === "CN" ? styles.sunday : ""}`}
                        >
                            {d}
                        </div>
                    ))}

                    {/* Các ô ngày */}
                    {cells.map((day, i) => {
                        const isSunday = i % 7 === 6;
                        const isHighlight = day === HIGHLIGHT_DAY;

                        return (
                            <div
                                key={i}
                                className={`
                                    ${styles.dayCell}
                                    ${isSunday ? styles.sunday : ""}
                                    ${isHighlight ? styles.highlight : ""}
                                `}
                            >
                                {isHighlight ? (
                                    <div className={styles.starWrapper}>
                                        <svg
                                            className={styles.starSvg}
                                            viewBox="0 0 58 58"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M29 4 L34.5 20.5 L52 20.5 L38.5 31 L43.5 47.5 L29 37.5 L14.5 47.5 L19.5 31 L6 20.5 L23.5 20.5 Z"
                                                stroke="#c0392b"
                                                strokeWidth="2.5"
                                                fill="none"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className={styles.starNumber}>{day}</span>
                                    </div>
                                ) : (
                                    day
                                )}
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}