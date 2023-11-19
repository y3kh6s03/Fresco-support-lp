import Image from "next/image"

import styles from "app/styles/components/service.module.scss"
import items from "app/components/service/Service.json"
import { useContext } from "react"
import { FontsContext } from "@/app/page"

export const Service = () => {
    const [, Num] = useContext(FontsContext);

    return (
        <section className={styles.container}>
            {items.map((item, index) => {
                return (
                    <article key={index} className={styles.service}>
                        <div className={styles.inner}>
                            <div className={styles.inner__num}>
                                <span className={styles.inner__num__span}>
                                    service
                                </span>
                                <span className={`${Num.className} ${styles.inner__num__span}`}>
                                    {item.num}
                                </span>
                            </div>
                            <h3 className={styles.inner__h3}>
                                {item.headline}
                            </h3>
                            <p className={styles.inner__p}>
                                {item.description}
                            </p>
                        </div>

                        <div className={styles.image}>
                            <Image className={styles.image__img} src={item.image} fill sizes="100%" alt="service-image" />
                        </div>
                    </article>
                )
            })}
            <div className={styles.svg}>
                <Image src={"/svgs/arrow.svg"} fill sizes="100%" alt="bottom-arrow" />
            </div>
        </section>
    )
}