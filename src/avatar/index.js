import React from "react";
import "./avatar.css";

const SquareAvatar = ({ src, height, width, child = null, alt = "Avatar" }) => {
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

// TODO
export const AvatarGroup = () => (
    <div className="AvatarStack AvatarStack--three-plus">
        <div
            className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
            aria-label="octocat, octocat, and octocat"
        >
            <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
            />
            <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
            />
            <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
            />
        </div>
    </div>
);

export default {
    Square: SquareAvatar,
    Group: AvatarGroup
};
