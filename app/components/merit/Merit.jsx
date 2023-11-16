import styles from "app/styles/components/merit.module.scss";
import items from "app/components/merit/Merit.json"

export const Merit = () => {
    return (
        <section className={styles.merit}>
            {items.map((item, index) => {
                return (
                    <article key={index} className={styles.merit__inner}>

                        <div className={styles.merit__inner__headline}>
                            <h3 className={styles.merit__inner__headline__h3}>
                                {item.headline}
                            </h3>
                        </div>
                        <div className={styles.merit__inner__description}>
                            <p className={styles.merit__inner__description__p}>
                                {item.description}
                            </p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}