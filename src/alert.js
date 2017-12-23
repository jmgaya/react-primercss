import React from "react";
import "./styles/alert.css";

const Alert = ({ description, type = "" }) => (
    <div className={`flash ${type}`}>{description}</div>
);

export const SuccessAlert = ({ description }) => <Alert description={description} />;

export const WarningAlert = ({ description }) => (
    <Alert description={description} type="flash-warn" />
);

export const ErrorAlert = ({ description }) => (
    <Alert description={description} type="flash-error" />
);

export default {
    Success: SuccessAlert,
    Warning: WarningAlert,
    Error: ErrorAlert
};
