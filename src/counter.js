import React from "react";
import "./styles/counter.css";

const Counter = ({ count, ...rest }) => (
    <span className="Counter" {...rest}>
        {count}
    </span>
);

export default Counter;
