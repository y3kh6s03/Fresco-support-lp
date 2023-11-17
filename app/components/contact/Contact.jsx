import styles from "app/styles/components/contact.module.scss";

export const Contact = () => {
    return (
        <a href="https://fresco-c.com/WP/contact/" className={styles.contact}>
            <span className={styles.span}>
                お気軽にお問い合わせください。
            </span>
            <div className={styles.name}>
                <p className={styles.name__p}>
                    CONTACT
                </p>
                <span className={styles.name__span}>
                    お問い合わせ
                </span>
            </div>
            <span className={styles.span}></span>
        </a>
    )
}