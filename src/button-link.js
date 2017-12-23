import React from "react";
import "./styles/button-link.css";
import Counter from "./counter";

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
            {!!count && <Counter count={count} />}
        </a>
    );
};

export const DefaultButton = ({
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
