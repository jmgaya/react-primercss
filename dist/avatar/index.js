"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AvatarGroup = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./avatar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SquareAvatar = function SquareAvatar(_ref) {
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

// TODO
var AvatarGroup = exports.AvatarGroup = function AvatarGroup() {
    return _react2.default.createElement(
        "div",
        { className: "AvatarStack AvatarStack--three-plus" },
        _react2.default.createElement(
            "div",
            {
                className: "AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1",
                "aria-label": "octocat, octocat, and octocat"
            },
            _react2.default.createElement("img", {
                className: "avatar",
                height: "20",
                alt: "@octocat",
                src: "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png",
                width: "20"
            }),
            _react2.default.createElement("img", {
                className: "avatar",
                height: "20",
                alt: "@octocat",
                src: "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png",
                width: "20"
            }),
            _react2.default.createElement("img", {
                className: "avatar",
                height: "20",
                alt: "@octocat",
                src: "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png",
                width: "20"
            })
        )
    );
};

exports.default = {
    Square: SquareAvatar,
    Group: AvatarGroup
};