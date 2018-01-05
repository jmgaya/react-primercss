import React from "react";
import "./styles/button.css";
import Counter from "./counter";

const Button = ({
    type,
    text,
    disabled = false,
    count,
    small,
    groupItem = false,
    ...rest
}) => {
    const smallClass = small ? "btn-sm" : "";
    const disabledClass = disabled ? "disabled" : "";
    const groupItemClass = groupItem ? "BtnGroup-item" : "";
    return (
        <button
            className={`btn ${type} ${smallClass} ${disabledClass} ${
                groupItemClass
            }`}
            {...rest}
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
    ...rest
}) => (
    <Button
        text={text}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
        {...rest}
    />
);

export const PrimaryButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    ...rest
}) => (
    <Button
        text={text}
        type={"btn-primary"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
        {...rest}
    />
);

export const SecondaryButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    ...rest
}) => (
    <Button
        text={text}
        type={"btn-purple"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
        {...rest}
    />
);

export const TertiaryButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    ...rest
}) => (
    <Button
        text={text}
        type={"btn-blue"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
        {...rest}
    />
);

export const DangerButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    ...rest
}) => (
    <Button
        text={text}
        type={"btn-danger"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
        {...rest}
    />
);

export const OutlineButton = ({
    text,
    disabled,
    count,
    small,
    groupItem,
    ...rest
}) => (
    <Button
        text={text}
        type={"btn-outline"}
        disabled={disabled}
        count={count}
        small={small}
        groupItem={groupItem}
        {...rest}
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
