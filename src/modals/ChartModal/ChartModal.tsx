import React from "react";
import styles from "./ChartModal.module.css";
import Image from "next/image";
export default function ChartModal({
    paragraphs,
    onClose,
}: {
    paragraphs: JSX.Element[];
    onClose: () => void;
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
                <div className={styles.text}>{paragraphs}</div>
                <Image
                    className={styles.chart}
                    src={"/images/Group 44.png"}
                    alt="chart"
                    fill
                />
            </section>
        </div>
    );
}
