import React from "react";
import styles from "./RecomendationCard.module.css";
export default function RecomendationCard({ text }: { text: String }) {
    return (
        <section className={styles.recomendation_section}>
            <span className={styles.text}>{text}</span>
        </section>
    );
}
