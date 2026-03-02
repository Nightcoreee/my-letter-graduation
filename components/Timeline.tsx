import styles from "@/styles/Timeline.module.css";

const events = [
  {
    time: "12:00 - 12:30",
    desc: "Buổi trưa các bạn chuẩn bị phương tiện để di chuyển đến trường Đại Học Sài Gòn theo đúng địa chỉ mà mình đã ghi ở bên trên.",
    imgSide: "left",
  },
  {
    time: "13:30 - 14:00",
    desc: 'Mình và các bạn hẹn gặp ở sảnh trong khuôn viên trường sau đó chúng ta cùng chụp hình lưu để lưu lại khoảng khắc này. Sau đó các bạn sẽ ra về.',
    imgSide: "right",
  },
  {
    time: "15:30 - 17:00",
    desc: "Sau khi tạm biệt các bạn, mình sẽ ở lại trường để tham gia buổi lễ tốt nghiệp cho đến khi kết thúc.",
    imgSide: "left",
  },
  {
    time: "Ăn liên hoan",
    desc: "Sau khi lễ tốt nghiệp kết thúc mình sẽ thông báo giờ giấc và ngày ăn liên hoan cho các bạn sau nhé.",
    imgSide: "right",
  },
];

function DateBox({ time }: { time: string }) {
  return (
    <div className={styles.imgWrapper}>
      <div className={styles.dateDay}>{time}</div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Lịch trình</h2>
      </div>

      <div className={styles.timeline}>
        {/* Đường thẳng giữa */}
        <div className={styles.line} />

        <div className={styles.eventList}>
          {events.map((event, i) => (
            <div key={i} className={styles.row}>

              {/* Dot mũ tốt nghiệp giữa */}
              <div className={styles.dotWrapper}>
                <div className={styles.dot}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
                    <path d="M22 10v6"/>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
                  </svg>
                </div>
              </div>

              {/* Cột trái */}
              <div className={styles.col}>
                {event.imgSide === "left" ? (
                  <DateBox time={event.time} />
                ) : (
                  // Card bên trái (text-right)
                  <div
                    className={`${styles.card} ${styles.cardRight}`}
                    style={{ backgroundImage: "url('/img/note/note2.jpg')" }}
                  >
                    
                    <div className={styles.cardBody}>
                      <p>{event.desc}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Cột phải */}
              <div className={styles.col}>
                {event.imgSide === "right" ? (
                  <DateBox time={event.time} />
                ) : (
                  // Card bên phải (text-left)
                  <div
                    className={`${styles.card} ${styles.cardLeft}`}
                    style={{ backgroundImage: "url('/img/note/note2.jpg')" }}
                  >
                    
                    <div className={styles.cardBody}>
                      <p>{event.desc}</p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}