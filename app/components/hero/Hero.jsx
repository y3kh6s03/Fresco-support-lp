import Image from "next/image"

import styles from "app/styles/components/hero.module.scss"

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__logo}>
                <Image className={styles.hero__logo__img} src={"/images/logo/logo-2.png"} fill sizes="100%" alt="logo" />
            </div>
            <div className={styles.hero__image}>
                <Image className={styles.hero__image__img} src={"/images/hero.jpg"} fill sizes="100%" alt="hero" />
            </div>
            <div className={styles.hero__title}>
                <h1 className={styles.hero__title__h1}>
                    Support service
                    <span className={styles.hero__title__h1__span}>
                        直営給食サポートサービス
                    </span>
                </h1>
            </div>
        </section>
    )
}