import styles from "app/styles/components/option.module.scss"
import items from "app/components/option/Option.json"
import Image from "next/image"

export const Option = () => {
    return (
        <>
            <section className={styles.option}>
                <div className={styles.title}>
                    <h3 className={styles.title__h3}>
                        Option
                    </h3>
                    <span className={styles.title__span}>
                        多彩なオプションで、特別な瞬間を彩るトータルサポート
                    </span>
                </div>
                <div className={styles.card__wrapper}>
                    {
                        items.map((item) => {
                            return (
                                <article className={styles.card}>
                                    <div className={styles.card__image}>
                                        <Image className={styles.card__image__img} src={item.image} fill sizes="100%" alt="option image" />
                                    </div>
                                    <div className={styles.card__num}>
                                        <span className={styles.card__num__span}>
                                            {item.num}
                                        </span>
                                    </div>
                                    <div className={styles.card__content}>
                                        <h4 className={styles.card__content__h4}>
                                            {item.title}
                                        </h4>
                                        <span className={styles.card__content__bar}></span>
                                        <p className={styles.card__content__p}>
                                            {item.merit}
                                        </p>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}