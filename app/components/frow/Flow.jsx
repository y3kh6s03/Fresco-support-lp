import styles from "app/styles/components/flow.module.scss";
import items from "app/components/frow/Flow.json";
import Image from "next/image";
import { useContext } from "react";
import { FontsContext } from "@/app/page";

export const Flow = () => {

    const [Noto,Num] = useContext(FontsContext)

    return (
        <section className={styles.flow}>
            <h3 className={`${Noto.className} ${styles.title__h3}`}>
                How to use
                <span className={styles.title__h3__span}>
                    サービスの利用方法
                </span>
            </h3>
            <article className={styles.flow__inner}>
                <ul className={styles.container}>
                    {
                        items.map((item, index) => {
                            return (
                                <li key={index} className={styles.container__inner}>
                                    <span className={`${Num.className} ${styles.container__inner__num}`}>
                                        {item.num}
                                    </span>
                                    <div className={styles.container__inner__text}>
                                        <div className={styles.container__inner__text__headline}>
                                            <h4 className={styles.container__inner__text__headline__h3}>
                                                {item.headline}
                                            </h4>
                                        </div>
                                        <p className={styles.container__inner__text__description}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className={styles.container__inner__image}>
                                        <Image className={styles.container__inner__image__img} src={item.image} fill sizes="100%" alt="flow image"/>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </article>
        </section>
    )
}