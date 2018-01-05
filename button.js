"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonGroup = exports.OutlineButton = exports.DangerButton = exports.TertiaryButton = exports.SecondaryButton = exports.PrimaryButton = exports.DefaultButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./styles/button.css");

var _counter = require("./counter");

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
    var type = _ref.type,
        text = _ref.text,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled,
        count = _ref.count,
        small = _ref.small,
        _ref$groupItem = _ref.groupItem,
        groupItem = _ref$groupItem === undefined ? false : _ref$groupItem,
        rest = _objectWithoutProperties(_ref, ["type", "text", "disabled", "count", "small", "groupItem"]);

    var smallClass = small ? "btn-sm" : "";
    var disabledClass = disabled ? "disabled" : "";
    var groupItemClass = groupItem ? "BtnGroup-item" : "";
    return _react2.default.createElement(
        "button",
        _extends({
            className: "btn " + type + " " + smallClass + " " + disabledClass + " " + groupItemClass
        }, rest),
        text,
        !!count && _react2.default.createElement(_counter2.default, { count: count })
    );
};

var DefaultButton = exports.DefaultButton = function DefaultButton(_ref2) {
    var text = _ref2.text,
        disabled = _ref2.disabled,
        count = _ref2.count,
        small = _ref2.small,
        groupItem = _ref2.groupItem,
        onClick = _ref2.onClick;
    return _react2.default.createElement(Button, {
        onClick: onClick,
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
        onClick = _ref3.onClick;
    return _react2.default.createElement(Button, {
        onClick: onClick,
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
        onClick = _ref4.onClick;
    return _react2.default.createElement(Button, {
        onClick: onClick,
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
        onClick = _ref5.onClick;
    return _react2.default.createElement(Button, {
        onClick: onClick,
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
        onClick = _ref6.onClick;
    return _react2.default.createElement(Button, {
        onClick: onClick,
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
        onClick = _ref7.onClick;
    return _react2.default.createElement(Button, {
        onClick: onClick,
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