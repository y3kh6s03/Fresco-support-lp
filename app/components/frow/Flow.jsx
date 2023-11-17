import styles from "app/styles/components/flow.module.scss";
import items from "app/components/frow/flow.json";
import Image from "next/image";

export const Flow = () => {

    return (
        <section className={styles.flow}>
            <h3 className={styles.title__h3}>
                スムーズなスタート!
                <span className={styles.title__h3__span}>
                    サービスの利用方法
                </span>
            </h3>
            <article className={styles.flow__inner}>
                <div className={styles.sign}>
                    <div className={styles.sign__image}>
                        <Image className={styles.sign__image__img} src={"/images/chopstick.png"} fill sizes="100%" alt="sign image" />
                    </div>
                </div>
                <ul className={styles.container}>
                    {
                        items.map((item, index) => {
                            return (
                                <li key={index} className={styles.container__inner}>
                                    <span className={styles.container__inner__num}>
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
                                </li>
                            )
                        })
                    }
                </ul>
            </article>
        </section>
    )
}