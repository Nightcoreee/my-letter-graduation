import styles from "@/styles/InvitationLetter.module.css";
import Image from "next/image";

export default function InvitationLetter() {
  return (
    <div className={styles.section}>
        <div className="content">
            <h2 
                    className={styles.title}>
                    Hoàn thành hành trình học tập 
            </h2>

            <p 
                className={styles.subtitle}>
                    Lời cảm ơn chân thành đến tất cả những người đã đồng hành cùng mình trong suốt quãng thời gian học tập. 
            </p>
        </div>

        <div
            style={{
                position: "relative",
                width: "500px",
                height: "400px",
                maskImage: "url('/img/masks/mask1.png')",
                WebkitMaskImage: "url('/img/masks/mask1.png')",
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
            }}
            >
            <Image
                src="/img/avatar/avatar.jpg"
                alt="avatar"
                fill
                className="object-cover object-top"
            />
        </div>
    </div>
  );
}