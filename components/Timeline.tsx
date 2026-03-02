import styles from "@/styles/Timeline.module.css";

const events = [
  {
    time: "08:00",
    title: "Ngày Đầu Tiên Lạc Lối",
    desc: "Bước chân vào cánh cổng đại học, cảm thấy vừa hồi hộp vừa choáng ngợp. Cả nhóm bạn bây giờ đã gặp nhau trong buổi học định hướng đầu tiên, ai nấy đều ngơ ngác và lạc đường tìm phòng học, tạo nên tràng cười đầu tiên!",
    imgSide: "left",
  },
  {
    time: "03:00",
    title: 'Cú Đêm "Chốt" Đồ Án',
    desc: 'Đèn phòng máy vẫn sáng trưng lúc 3 giờ sáng. Cả team gần như kiệt sức sau những ngày "cày cuốc" liên tục, nhưng cuối cùng cũng nhấn nút Gửi đồ án tốt nghiệp thành công!',
    imgSide: "right",
  },
  {
    time: "12:00",
    title: "Căn-tin Hẹn Ước Cuối",
    desc: "Buổi trưa cuối cùng cả nhóm tụ họp tại căn-tin quen thuộc. Không còn deadline, chỉ có những lời tâm sự về tương lai. Khoảnh khắc chia tay không chính thức, đầy bùi ngùi nhưng ấm áp.",
    imgSide: "left",
  },
  {
    time: "14:00",
    title: "Ngày Tốt Nghiệp",
    desc: "Bước lên bục nhận bằng. Khoảnh khắc xúc động nhất là khi nhìn xuống, thấy giọt nước mắt tự hào lấp lánh trong mắt bố mẹ. Chiếc mũ tung bay, là lời cảm ơn trọn vẹn.",
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
                      <p><strong>{event.title}:</strong> {event.desc}</p>
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
                      <p><strong>{event.title}:</strong> {event.desc}</p>
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