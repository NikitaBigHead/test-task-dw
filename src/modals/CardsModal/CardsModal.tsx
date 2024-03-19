import React from "react";
import styles from "./CardsModal.module.css";
import Image from "next/image";
export enum modalClasses {
    heart = "heart_img",
    bladder = "bladder_img",
    cough = "cough_img",
}
export enum modalImages {
    heart = "heart_icon.svg",
    bladder = "bladder_icon.svg",
    cough = "cough_icon.svg",
}
export default function CardsModal({
    paragraphs,
    title,
    onClose,
    cards,
}: {
    paragraphs: JSX.Element[];
    title: string;
    onClose: () => void;
    cards: {
        name: modalClasses;
        image: modalImages;
        precent: string;
        title: JSX.Element;
        description: string;
    }[];
}) {
    return (
        <div
            className={styles.modal_area}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    e.stopPropagation();
                    onClose();
                }
            }}
        >
            <section className={styles.modal}>
                <div className={styles.paragraphs}>{paragraphs}</div>
                <section className={styles.info}>
                    <span className={styles.title}>{title}</span>
                    <div className={styles.cards}>
                        {cards.map(
                            ({ image, precent, title, description, name }) => (
                                <div className={styles.card}>
                                    <Image
                                        className={styles[`${name}`]}
                                        src={`/images/${image}`}
                                        alt="card"
                                        fill
                                    />
                                    <span className={styles.card_precent}>
                                        {precent}
                                    </span>
                                    <span className={styles.card_title}>
                                        {title}
                                    </span>
                                    <span className={styles.card_description}>
                                        {description}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </section>
            </section>
        </div>
    );
}
