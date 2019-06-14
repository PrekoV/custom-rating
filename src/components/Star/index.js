import React from "react";

export default function Star({ color }) {
    return (
        <div className="Star">
            <svg height="25" width="21">
                <polygon
                    points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                    style={{ fill: color || "lightgrey" }}
                />
            </svg>
        </div>
    );
}
