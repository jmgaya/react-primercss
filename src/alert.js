import React from "react";
import "./styles/alert.css";

const Alert = ({ description, type = "", ...rest }) => (
    <div className={`flash ${type}`} {...rest}>
        {description}
    </div>
);

export const SuccessAlert = ({ description, ...rest }) => (
    <Alert description={description} {...rest} />
);

export const WarningAlert = ({ description, ...rest }) => (
    <Alert description={description} type="flash-warn" {...rest} />
);

export const ErrorAlert = ({ description, ...rest }) => (
    <Alert description={description} type="flash-error" {...rest} />
);

export default {
    Success: SuccessAlert,
    Warning: WarningAlert,
    Error: ErrorAlert
};
