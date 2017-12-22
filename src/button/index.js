import React from "react";
import "./button.css";
import Counter from "../counter";

const Button = ({
    type,
    text,
    disabled = false,
    count,
    small,
    groupItem = false,
    onClick = () => {}
}) => {
    const smallClass = small ? "btn-sm" : "";
    const disabledClass = disabled ? "disabled" : "";
    const groupItemClass = groupItem ? "BtnGroup-item" : "";
    return (
        <button
            className={`btn ${type} ${smallClass} ${disabledClass} ${
                groupItemClass
            }`}
            onClick={onClick}
        >
            {text}
            {!!count && <Counter count={count} />}
        </button>
    );
};

export const DefaultButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    onClick
}) => (
    <Button
        onClick={onClick}
        text={text}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const PrimaryButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    onClick
}) => (
    <Button
        onClick={onClick}
        text={text}
        type={"btn-primary"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const SecondaryButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    onClick
}) => (
    <Button
        onClick={onClick}
        text={text}
        type={"btn-purple"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const TertiaryButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    onClick
}) => (
    <Button
        onClick={onClick}
        text={text}
        type={"btn-blue"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const DangerButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    onClick
}) => (
    <Button
        onClick={onClick}
        text={text}
        type={"btn-danger"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const OutlineButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    onClick
}) => (
    <Button
        onClick={onClick}
        text={text}
        type={"btn-outline"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);
export const ButtonGroup = ({ children }) => (
    <div className="BtnGroup">
        {React.Children.map(children, child =>
            React.cloneElement(child, { groupItem: true })
        )}
    </div>
);

export default {
    Default: DefaultButton,
    Primary: PrimaryButton,
    Secondary: SecondaryButton,
    Tertiary: TertiaryButton,
    Danger: DangerButton,
    Outline: OutlineButton,
    Group: ButtonGroup
};
