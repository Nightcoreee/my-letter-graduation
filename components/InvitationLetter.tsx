import styles from "@/styles/InvitationLetter.module.css";
import Image from "next/image";

export default function InvitationLetter() {
  return (
    <div className={styles.section}>
        <div className={styles.content}>
            <h2 
                className={styles.title}>
                    Hoàn thành hành trình học tập 
            </h2>

            <p 
                className={styles.subtitle}>
                    Lời cảm ơn chân thành đến tất cả những người đã đồng hành cùng mình trong suốt quãng thời gian học tập. 
            </p>
        </div>

        <div className={styles.avatarSection}>
            <div className={styles.avatar}>
                <Image
                    src="/img/avatar/avt.jpg"
                    alt="avatar"
                    fill
                    className="object-cover object-top"
                />
            </div>

            <div className={styles.avatarText}>
                <p>
                    Khoảnh khắc nhận bằng tốt nghiệp sắp tới là cả một hành trình dài được gói gọn. 
                    Mình xin gửi lời tri ân chân thành nhất đến gia đình là điểm tựa vững chắc nhất, 
                    luôn hy sinh và tin tưởng tuyệt đối. Cảm ơn thầy cô đã dẫn dắt, truyền đạt kiến thức quý giá. 
                    Và cảm ơn bạn bè, những người đồng đội không thể thiếu. 
                    Mọi thành quả ngày hôm nay đều là nhờ sự đồng hành của mọi người. 
                    Chiếc áo cử nhân này không phải là dấu chấm hết, mà là lời hứa cho một sự khởi đầu mới đầy tự tin và lòng biết ơn..
                </p>
            </div>
        </div>


        <div className={styles.letterWrapper}>
            <div className={styles.letter}>
                <Image
                    src="/img/bg/cloud1.jpg"
                    alt="letter"
                    fill
                    className="object-cover object-top"
                />
                <div className={styles.letterOverlay}/>
                <div className={styles.letterContent}>
                    <div className={styles.body}>
                        <h2 
                            className="text-[52px] font-bold center text-center"
                            style={{color: "#FFFFFF"}}>
                            Thư mời
                        </h2>
                        <p><strong>Xin chào cả nhà thân yêu</strong></p>

                        <p>
                            Khoảnh khắc này cuối cùng cũng đã tới! Ngày <strong>14/03/2026</strong> này
                            đánh dấu việc mình chính thức hoàn thành chặng đường đại học và bước sang
                            một chương mới của cuộc đời!
                        </p>

                        <p>
                            Mình biết để có được thành quả này, ngoài nỗ lực của bản thân, không thể thiếu
                            những lời động viên, những buổi cà phê và đi ăn xả stress cùng các cậu. 
                            Cảm ơn tất cả mọi người thật nhiều!
                        </p>

                        <p>
                            Mình sẽ có mặt tại khu vực sảnh chờ sau khi kết thúc buổi lễ.
                            Đây sẽ là dịp tuyệt vời để chúng ta gặp gỡ,{" "}
                            chụp thật nhiều ảnh kỷ niệm lưu giữ khoảnh khắc này và cùng
                            nhau chia sẻ niềm vui tốt nghiệp.
                        </p>

                        <p><strong>Thông tin Lễ Tốt Nghiệp:</strong></p>

                        <ul className={styles.list}>
                            <li><strong>Thời gian:</strong> <strong>14 giờ</strong>, <strong>Ngày 14/03/2026</strong></li>
                            <li><strong>Địa điểm:</strong> Khu vực <strong>Sảnh Hội Trường A</strong> tại <strong>Trường Đại học Sài Gòn</strong></li>
                            <li><strong>Địa chỉ:</strong> 273 An Dương Vương, Phường Chợ Quán, Tp.HCM.</li>
                        </ul>

                        <p>
                            Không cần quà cáp hay quá cầu kỳ đâu, chỉ cần các cậu đến chung vui, tặng mình
                            một cái ôm và chụp ảnh là mình vui rồi. Các cậu cứ thoải mái sắp xếp thời gian
                            ghé qua nhé!
                        </p>

                        <p>Hẹn gặp mọi người tại sảnh chờ nhé! ❤️</p>
                    
                        <p className={styles.signature}>Hà</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}