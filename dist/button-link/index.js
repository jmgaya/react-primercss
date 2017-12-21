"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonGroup = exports.OutlineButton = exports.DangerButton = exports.TertiaryButton = exports.SecondaryButton = exports.PrimaryButton = exports.DefaultButton = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonLink = function ButtonLink(_ref) {
    var type = _ref.type,
        text = _ref.text,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        count = _ref.count,
        small = _ref.small,
        _ref$groupItem = _ref.groupItem,
        groupItem = _ref$groupItem === undefined ? false : _ref$groupItem,
        _ref$link = _ref.link,
        link = _ref$link === undefined ? "#" : _ref$link;

    var smallClass = small ? "btn-sm" : "";
    var disabledClass = disabled ? "disabled" : "";
    var groupItemClass = groupItem ? "BtnGroup-item" : "";
    return _react2.default.createElement(
        "a",
        {
            className: "btn " + type + " " + smallClass + " " + disabledClass + " " + groupItemClass,
            href: link,
            role: "button"
        },
        text,
        !!count && _react2.default.createElement(
            "span",
            { className: "Counter" },
            count
        )
    );
};

var DefaultButton = exports.DefaultButton = function DefaultButton(_ref2) {
    var text = _ref2.text,
        disabled = _ref2.disabled,
        count = _ref2.count,
        small = _ref2.small,
        groupItem = _ref2.groupItem,
        link = _ref2.link;
    return _react2.default.createElement(ButtonLink, {
        link: link,
        text: text,
        disabled: disabled,
        count: count,
        small: small,
        groupItem: groupItem
    });
};

var PrimaryButton = exports.PrimaryButton = function PrimaryButton(_ref3) {
    var text = _ref3.text,
        disabled = _ref3.disabled,
        count = _ref3.count,
        small = _ref3.small,
        groupItem = _ref3.groupItem,
        link = _ref3.link;
    return _react2.default.createElement(ButtonLink, {
        link: link,
        text: text,
        type: "btn-primary",
        disabled: disabled,
        count: count,
        small: small,
        groupItem: groupItem
    });
};

var SecondaryButton = exports.SecondaryButton = function SecondaryButton(_ref4) {
    var text = _ref4.text,
        disabled = _ref4.disabled,
        count = _ref4.count,
        small = _ref4.small,
        groupItem = _ref4.groupItem,
        link = _ref4.link;
    return _react2.default.createElement(ButtonLink, {
        link: link,
        text: text,
        type: "btn-purple",
        disabled: disabled,
        count: count,
        small: small,
        groupItem: groupItem
    });
};

var TertiaryButton = exports.TertiaryButton = function TertiaryButton(_ref5) {
    var text = _ref5.text,
        disabled = _ref5.disabled,
        count = _ref5.count,
        small = _ref5.small,
        groupItem = _ref5.groupItem,
        link = _ref5.link;
    return _react2.default.createElement(ButtonLink, {
        link: link,
        text: text,
        type: "btn-blue",
        disabled: disabled,
        count: count,
        small: small,
        groupItem: groupItem
    });
};

var DangerButton = exports.DangerButton = function DangerButton(_ref6) {
    var text = _ref6.text,
        disabled = _ref6.disabled,
        count = _ref6.count,
        small = _ref6.small,
        groupItem = _ref6.groupItem,
        link = _ref6.link;
    return _react2.default.createElement(ButtonLink, {
        link: link,
        text: text,
        type: "btn-danger",
        disabled: disabled,
        count: count,
        small: small,
        groupItem: groupItem
    });
};

var OutlineButton = exports.OutlineButton = function OutlineButton(_ref7) {
    var text = _ref7.text,
        disabled = _ref7.disabled,
        count = _ref7.count,
        small = _ref7.small,
        groupItem = _ref7.groupItem,
        link = _ref7.link;
    return _react2.default.createElement(ButtonLink, {
        link: link,
        text: text,
        type: "btn-outline",
        disabled: disabled,
        count: count,
        small: small,
        groupItem: groupItem
    });
};
var ButtonGroup = exports.ButtonGroup = function ButtonGroup(_ref8) {
    var children = _ref8.children;
    return _react2.default.createElement(
        "div",
        { className: "BtnGroup" },
        _react2.default.Children.map(children, function (child) {
            return _react2.default.cloneElement(child, { groupItem: true });
        })
    );
};

exports.default = {
    Default: DefaultButton,
    Primary: PrimaryButton,
    Secondary: SecondaryButton,
    Tertiary: TertiaryButton,
    Danger: DangerButton,
    Outline: OutlineButton,
    Group: ButtonGroup
};