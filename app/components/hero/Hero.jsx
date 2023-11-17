import Image from "next/image"
import { useContext } from "react"

import styles from "app/styles/components/hero.module.scss"
import { FontsContext } from "@/app/page";

export const Hero = () => {

    const [Noto] = useContext(FontsContext)

    return (
        <section className={styles.hero}>
            <div className={styles.logo}>
                <Image className={styles.logo__img} src={"/images/logo/logo-2.png"} fill sizes="100%" alt="logo" />
            </div>
            <div className={styles.image}>
                <Image className={styles.image__img} src={"/images/hero.jpg"} fill sizes="100%" priority={true} alt="hero" />
            </div>
            <div className={styles.title}>
                <h1 className={`${Noto.className} ${styles.title__h1}`}>
                    Support <br />
                    service
                </h1>
                <span className={styles.title__h1__span}>
                    直営給食サポートサービス
                </span>
            </div>
        </section>
    )
}