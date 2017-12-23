import React from "react";
import "./styles/avatar.css";

export const SquareAvatar = ({
    src,
    height,
    width,
    child = null,
    alt = "Avatar"
}) => {
    if (!child)
        return (
            <img
                alt={alt}
                className="avatar"
                src={src}
                width={width}
                height={height}
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

export const AvatarGroup = ({ children }) => (
    <div className="AvatarStack AvatarStack--three-plus">
        <div
            className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
            aria-label="octocat, octocat, and octocat"
        >
            {children}
        </div>
    </div>
);

export const AvatarGroupItem = ({
    src,
    alt = "@avatarItem",
    height = "20",
    width = "20"
}) => (
    <img className="avatar" height={height} width={width} alt={alt} src={src} />
);

export default {
    Square: SquareAvatar,
    Group: AvatarGroup,
    GroupItem: AvatarGroupItem
};
