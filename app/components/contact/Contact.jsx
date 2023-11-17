import styles from "app/styles/components/contact.module.scss";

export const Contact = () => {
    return (
        <a href="https://fresco-c.com/WP/contact/" className={styles.contact}>
            <span className={styles.contact__span}>
                お気軽にお問い合わせください。
            </span>
            <div className={styles.contact__name}>
                <p className={styles.contact__name__p}>
                    CONTACT
                </p>
                <span className={styles.contact__name__span}>
                    お問い合わせ
                </span>
            </div>
            <span className={styles.contact__span}></span>
        </a>
    )
}