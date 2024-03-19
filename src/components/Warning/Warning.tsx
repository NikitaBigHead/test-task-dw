import React from "react";
import styles from "./Warning.module.css";
export default function Warning({ text }: { text: string }) {
    return <section className={styles.warning_section}>{text}</section>;
}
