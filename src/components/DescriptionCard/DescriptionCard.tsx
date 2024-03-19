import React from "react";
import styles from "./DescriptionCard.module.css";
import Image from "next/image";
export default function DescriptionCard({
    count,
    title,
    description,
}: {
    count: number;
    title: JSX.Element;
    description: JSX.Element;
}) {
    return (
        <section className={styles.card_section}>
            <div className={styles.inhaler_count}>
                <Image
                    className={styles.inhaler_img}
                    src={"/images/inhaler.svg"}
                    fill
                    alt="inhaler"
                />
                <div className={styles.circle_count}>
                    <Image
                        className={styles.circle_img}
                        src={"/images/circle.svg"}
                        fill
                        alt="circle"
                    />
                    <span className={styles.count}>{count}</span>
                </div>
            </div>
            <span className={styles.card_title}>{title}</span>
            <span className={styles.card_description}>{description}</span>
        </section>
    );
}
