import Image from "next/image"

import styles from "app/styles/components/service.module.scss"
import items from "app/components/service/Service.json"

export const Service = () => {
    return (
        <section className={styles.service__container}>
            {items.map((item, index) => {
                return (
                    <article key={index} className={styles.service}>
                        <div className={styles.service__inner}>
                            <span className={styles.service__inner__span}>
                                service {item.num}
                            </span>
                            <h3 className={styles.service__inner__h3}>
                                {item.headline}
                            </h3>
                            <p className={styles.service__inner__p}>
                                {item.description}
                            </p>
                        </div>

                        <div className={styles.service__image}>
                            <Image className={styles.service__image__img} src={item.image} fill sizes="100%" alt="service-image" />
                        </div>
                    </article>
                )
            })}
            <div className={styles.service__svg}>
                <Image src={"/svgs/arrow.svg"} fill sizes="100%"/>
            </div>
        </section>
    )
}