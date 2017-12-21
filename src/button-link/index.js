import React from "react";
import "./button.css";

const ButtonLink = ({
    type,
    text,
    disabled = false,
    count,
    small,
    groupItem = false,
    link = "#"
}) => {
    const smallClass = small ? "btn-sm" : "";
    const disabledClass = disabled ? "disabled" : "";
    const groupItemClass = groupItem ? "BtnGroup-item" : "";
    return (
        <a
            className={`btn ${type} ${smallClass} ${disabledClass} ${
                groupItemClass
            }`}
            href={link}
            role="button"
        >
            {text}
            {!!count && <span className="Counter">{count}</span>}
        </a>
    );
};

export const DefaultButton = ({
    type,
    text,
    disabled,
    count,
    small,
    groupItem,
    link
}) => (
    <ButtonLink
        link={link}
        text={text}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const PrimaryButton = ({
    type,
    text,
    disabled,
    count,
    small,
    groupItem,
    link
}) => (
    <ButtonLink
        link={link}
        text={text}
        type={"btn-primary"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const SecondaryButton = ({
    type,
    text,
    disabled,
    count,
    small,
    groupItem,
    link
}) => (
    <ButtonLink
        link={link}
        text={text}
        type={"btn-purple"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const TertiaryButton = ({
    type,
    text,
    disabled,
    count,
    small,
    groupItem,
    link
}) => (
    <ButtonLink
        link={link}
        text={text}
        type={"btn-blue"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const DangerButton = ({
    type,
    text,
    disabled,
    count,
    small,
    groupItem,
    link
}) => (
    <ButtonLink
        link={link}
        text={text}
        type={"btn-danger"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
    />
);

export const OutlineButton = ({
    type,
    text,
    disabled,
    count,
    small,
    groupItem,
    link
}) => (
    <ButtonLink
        link={link}
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
