import styles from "app/styles/components/message.module.scss";
import items from "app/components/message/Message.json";

export const Message = () => {
    return (
        <section className={styles.message}>
            <div className={styles.main}>
                <h2 className={styles.main__h2}>
                    食事提供の負担を減らして<br />
                    本格レシピ×栄養バランスを実現
                </h2>
                <p className={styles.main__p}>
                    直営給食サポートは、グループホームなどの小規模施設や、社員食堂・学生食堂、保育園・幼稚園などへ、給食の献立、レシピ、食材をお届けする食事提供のフルサポートサービスです。管理栄養士監修の栄養満点の献立を、料理人がつくるかんたんレシピで調理。施設のサービス品質を向上しながら、職員の業務負担を軽減できます。
                </p>
            </div>

            <div className={styles.container}>
                {items.map((item, index) => {
                    return (
                        <div key={index} className={styles.container__inner}>
                            <h3 className={styles.container__inner__h3}>
                                {item.headline}
                            </h3>
                            <p className={styles.container__inner__p}>
                                {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}