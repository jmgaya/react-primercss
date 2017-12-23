"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AvatarGroupItem = exports.AvatarGroup = exports.SquareAvatar = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./styles/avatar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SquareAvatar = exports.SquareAvatar = function SquareAvatar(_ref) {
    var src = _ref.src,
        height = _ref.height,
        width = _ref.width,
        _ref$child = _ref.child,
        child = _ref$child === undefined ? null : _ref$child,
        _ref$alt = _ref.alt,
        alt = _ref$alt === undefined ? "Avatar" : _ref$alt;

    if (!child) return _react2.default.createElement("img", {
        alt: alt,
        className: "avatar",
        src: src,
        width: width,
        height: height
    });

    return _react2.default.createElement(
        "div",
        { className: "avatar-parent-child float-left" },
        _react2.default.createElement("img", {
            className: "avatar",
            alt: alt,
            src: src,
            width: width,
            height: height
        }),
        _react2.default.createElement("img", {
            className: "avatar avatar-child",
            alt: alt,
            src: child,
            width: width / 3,
            height: height / 3
        })
    );
};

var AvatarGroup = exports.AvatarGroup = function AvatarGroup(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
        "div",
        { className: "AvatarStack AvatarStack--three-plus" },
        _react2.default.createElement(
            "div",
            {
                className: "AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1",
                "aria-label": "octocat, octocat, and octocat"
            },
            children
        )
    );
};

var AvatarGroupItem = exports.AvatarGroupItem = function AvatarGroupItem(_ref3) {
    var src = _ref3.src,
        _ref3$alt = _ref3.alt,
        alt = _ref3$alt === undefined ? "@avatarItem" : _ref3$alt,
        _ref3$height = _ref3.height,
        height = _ref3$height === undefined ? "20" : _ref3$height,
        _ref3$width = _ref3.width,
        width = _ref3$width === undefined ? "20" : _ref3$width;
    return _react2.default.createElement("img", { className: "avatar", height: height, width: width, alt: alt, src: src });
};

exports.default = {
    Square: SquareAvatar,
    Group: AvatarGroup,
    GroupItem: AvatarGroupItem
};