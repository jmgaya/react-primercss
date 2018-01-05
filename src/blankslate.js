import React from "react";
import "./styles/blankslate.css";

const Blankslate = ({ title, description, simple = false, ...rest }) => {
    const simpleClass = simple ? "blankslate-clean-background" : "";
    return (
        <div className={`blankslate ${simpleClass}`} {...rest}>
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
        </div>
    );
};

export default Blankslate;
