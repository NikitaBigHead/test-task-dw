import React from "react";

export default function BlueFigure({ className }: { className: string }) {
    return (
        <svg
            className={className}
            width="1247"
            height="78"
            viewBox="0 0 1247 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M732.913 53.5282C465 0 82.3517 59.5426 0 66.7599V0H1247C1186.4 92.0203 917.46 90.4002 732.913 53.5282Z"
                fill="url(#paint0_linear_0_5956)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_0_5956"
                    x1="348.013"
                    y1="33.9456"
                    x2="1254.76"
                    y2="33.9456"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FBFDFF" />
                    <stop offset="1" stop-color="#D8EFFF" />
                </linearGradient>
            </defs>
        </svg>
    );
}
