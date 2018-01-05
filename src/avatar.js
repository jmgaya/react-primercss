import React from "react";
import "./styles/avatar.css";

export const SquareAvatar = ({
    src,
    height,
    width,
    child = null,
    alt = "Avatar",
    ...rest
}) => {
    if (!child)
        return (
            <img
                alt={alt}
                className="avatar"
                src={src}
                width={width}
                height={height}
                {...rest}
            />
        );

    return (
        <div className="avatar-parent-child float-left">
            <img
                className="avatar"
                alt={alt}
                src={src}
                width={width}
                height={height}
                {...rest}
            />
            <img
                className="avatar avatar-child"
                alt={alt}
                src={child}
                width={width / 3}
                height={height / 3}
            />
        </div>
    );
};

export const AvatarGroup = ({ children, ...rest }) => (
    <div className="AvatarStack AvatarStack--three-plus" {...rest}>
        <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1">
            {children}
        </div>
    </div>
);

export const AvatarGroupItem = ({
    src,
    alt = "@avatarItem",
    height = "20",
    width = "20",
    ...rest
}) => (
    <img
        className="avatar"
        height={height}
        width={width}
        alt={alt}
        src={src}
        {...rest}
    />
);

export default {
    Square: SquareAvatar,
    Group: AvatarGroup,
    GroupItem: AvatarGroupItem
};
