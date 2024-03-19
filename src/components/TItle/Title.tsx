import React from "react";
import styles from "./Title.module.css";
export default function Title({ title }: { title: string }) {
    return (
        <section className={styles.title_section}>
            <h1 className={styles.title}>{title}</h1>
            <svg
                className={styles.title_svg}
                width="1335"
                height="110"
                viewBox="0 0 1335 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M571.578 88.1982C407.818 77.0991 122.293 98.1081 0 110V0H1335C1245.01 151.622 776.278 102.072 571.578 88.1982Z"
                    fill="url(#paint0_linear_0_5965)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_0_5965"
                        x1="-1.17867e-06"
                        y1="55.932"
                        x2="1346.52"
                        y2="55.932"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FBFDFF" />
                        <stop offset="1" stop-color="#D8EFFF" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
}