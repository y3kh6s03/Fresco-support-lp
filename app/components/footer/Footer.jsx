import styles from "app/styles/components/footer.module.scss"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.bg__image}>
                <Image className={styles.bg__image__img} src={"/images/footer-bg.jpg"} fill sizes="100%" alt="image" />
            </div>

            <div className={styles.logo}>
                <Image className={styles.logo__img} src={"/images/logo/logo-2.png"} fill sizes="100%" alt="logo" />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__ul}>
                    <li className={styles.nav__ul__li}>
                        <Link className={styles.nav__ul__li__a} href={"https://fresco-c.com/"}>
                            Corporate
                        </Link>
                        <span className={styles.nav__ul__li__span}>コーポレート</span>
                    </li>
                    <li className={styles.nav__ul__li}>
                        <Link className={styles.nav__ul__li__a} href={"https://fresco-recruit2025.netlify.app/"}>
                            Recruit
                        </Link>
                        <span className={styles.nav__ul__li__span}>リクルート</span>
                    </li>
                    <li className={styles.nav__ul__li}>
                        <Link className={styles.nav__ul__li__a} href={"https://fresco-catering.netlify.app/"}>
                            Catering
                        </Link>
                        <span className={styles.nav__ul__li__span}>ケータリング</span>
                    </li>
                </ul>
            </nav>
            <small className={styles.small}>&copy;2023 Fresco company .All rights reserved.</small>
        </div>
    )
}