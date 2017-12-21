import React from "react";
import "./blankslate.css";

const Blankslate = ({ title, description, simple = false }) => {
    const simpleClass = simple ? "blankslate-clean-background" : "";
    return (
        <div className={`blankslate ${simpleClass}`}>
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
        </div>
    );
};

export default Blankslate;
