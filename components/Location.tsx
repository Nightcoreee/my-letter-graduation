import styles from "@/styles/Location.module.css";

export default function Location() {
    return (
        <div className={styles.section}>
            <div className={styles.location}>
                <h2 className={styles.title}>Địa điểm</h2>
                
                <div className={styles.mapWrapper}>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6697269767596!2d106.67967801284205!3d10.759917089343592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2s!4v1772327000990!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className={styles.mapInfo}>
                    <p><strong>Địa điểm:</strong> Sảnh hội trường A Trường Đại Học Sài Gòn</p>
                    <p><strong>Địa chỉ:</strong> 273 An Dương Vương, Phường Chợ Quán, Tp.Hồ Chí Minh</p>

                    <a
                        href="https://maps.google.com/?q=Trường+Đại+học+Sài+Gòn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mapButton}
                    >
                    📍 Mở Google Maps
                    </a>

                    <p>Nếu bạn có đi xe đến, dưới đây là một số địa điểm để gửi xe:</p>
                    <ul className={styles.parkingList}>
                        <li><strong>Cổng sau ĐH Sài Gòn:</strong> <a href="https://maps.google.com/?q=Trung+tâm+Đào+tạo+Quốc+tế+Trường+Đại+học+Sài+Gòn" target="_blank" rel="noopener noreferrer"><span className={styles.address}>4 Nguyễn Trãi, Phường Chợ Quán, TP.HCM</span></a></li>
                        <li><strong>Trường ĐHSP HCM:</strong> <a href="https://maps.google.com/?q=Đại+Học+Sư+Phạm+-+280+An+Dương+Vương" target="_blank" rel="noopener noreferrer"><span className={styles.address}>280 An Dương Vương, Phường Chợ Quán, Tp.HCM</span></a></li>
                    </ul>

                    <p>Một số thông tin liên lạc với mình: </p>
                    <ul className={styles.contactList}>
                        <li><strong>Số điện thoại:</strong> <a href="tel:+84942786604" className={styles.contactLink}>0942786604</a></li>
                        <li><strong>Facebook: <a href="https://www.facebook.com/wishhh2003" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Đào Ngọc Hà</a></strong></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}