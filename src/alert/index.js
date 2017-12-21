import React from "react";
import "./alert.css";

const Alert = ({ description, type = "" }) => (
    <div className={`flash ${type}`}>{description}</div>
);

const SuccessAlert = ({ description }) => <Alert description={description} />;

const WarningAlert = ({ description }) => (
    <Alert description={description} type="flash-warn" />
);

const ErrorAlert = ({ description }) => (
    <Alert description={description} type="flash-error" />
);

export default {
    Success: SuccessAlert,
    Warning: WarningAlert,
    Error: ErrorAlert
};
