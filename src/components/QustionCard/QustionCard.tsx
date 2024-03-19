import React from "react";
import styles from "./QustionCard.module.css";
import Image from "next/image";

export enum colorsPickers {
    blue,
    green,
}
export enum icons {
    man,
    arrow,
}

let iconsSrcs: string[] = ["man_icon.svg", "arrow_icon.svg"];

let colorsPickersSrcs: string[] = [
    "pointer_click_blue.svg",
    "pointer_click_green.svg",
];
export default function QustionCard({
    qustion,
    description,
    icon,
    pickColor,
    onClick,
}: {
    qustion: JSX.Element;
    description: string;
    icon: icons;
    pickColor: colorsPickers;
    onClick: () => void;
}) {
    return (
        <section className={styles.card} onClick={() => onClick()}>
            <div className={styles.card_section}>
                <div className={styles.card_block}>
                    <Image
                        className={styles.icon}
                        src={`/images/${iconsSrcs[icon]}`}
                        fill
                        alt="image"
                    />
                    <section className={styles.qustion_section}>
                        <Image
                            className={styles.qustion_background}
                            src={"images/pointer_area.svg"}
                            fill
                            alt="image"
                        />
                        <span className={styles.qustion_text}>{qustion}</span>
                    </section>
                </div>
                <span className={styles.description}>{description}</span>
            </div>

            <Image
                className={styles.pointer}
                src={`/images/${colorsPickersSrcs[pickColor]}`}
                fill
                alt="image"
            />
        </section>
    );
}
