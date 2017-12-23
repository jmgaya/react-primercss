"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavigationTabItem = exports.NavigationTabs = exports.NavigationUnderlineActionGroup = exports.NavigationUnderlineItem = exports.NavigationUnderline = exports.NavigationMenuItem = exports.NavigationMenu = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./styles/navigation.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationMenu = exports.NavigationMenu = function NavigationMenu(_ref) {
    var _ref$ariaLabel = _ref.ariaLabel,
        ariaLabel = _ref$ariaLabel === undefined ? "Navigation" : _ref$ariaLabel,
        children = _ref.children;
    return _react2.default.createElement(
        "nav",
        { className: "menu", "aria-label": ariaLabel },
        children
    );
};

var NavigationMenuItem = exports.NavigationMenuItem = function NavigationMenuItem(_ref2) {
    var children = _ref2.children,
        href = _ref2.href,
        _ref2$current = _ref2.current,
        current = _ref2$current === undefined ? false : _ref2$current;
    return _react2.default.createElement(
        "a",
        {
            className: "menu-item " + (current ? "selected" : ""),
            href: href,
            "aria-current": "" + (current ? "page" : "")
        },
        children
    );
};

var NavigationUnderline = exports.NavigationUnderline = function NavigationUnderline(_ref3) {
    var _ref3$ariaLabel = _ref3.ariaLabel,
        ariaLabel = _ref3$ariaLabel === undefined ? "Navigation" : _ref3$ariaLabel,
        children = _ref3.children,
        _ref3$alignRight = _ref3.alignRight,
        alignRight = _ref3$alignRight === undefined ? false : _ref3$alignRight;
    return _react2.default.createElement(
        "nav",
        {
            className: "UnderlineNav " + (alignRight ? "UnderlineNav--right" : ""),
            "aria-label": ariaLabel
        },
        _react2.default.createElement(
            "div",
            { className: "UnderlineNav-body" },
            children
        )
    );
};

var NavigationUnderlineItem = exports.NavigationUnderlineItem = function NavigationUnderlineItem(_ref4) {
    var title = _ref4.title,
        children = _ref4.children,
        href = _ref4.href,
        _ref4$current = _ref4.current,
        current = _ref4$current === undefined ? false : _ref4$current;
    return _react2.default.createElement(
        "a",
        {
            className: "UnderlineNav-item " + (current ? "selected" : ""),
            href: href,
            role: "tab",
            title: title
        },
        children
    );
};

var NavigationUnderlineActionGroup = exports.NavigationUnderlineActionGroup = function NavigationUnderlineActionGroup(_ref5) {
    var children = _ref5.children;
    return _react2.default.createElement(
        "div",
        { className: "UnderlineNav-actions" },
        children
    );
};

var NavigationTabs = exports.NavigationTabs = function NavigationTabs(_ref6) {
    var children = _ref6.children,
        _ref6$ariaLabel = _ref6.ariaLabel,
        ariaLabel = _ref6$ariaLabel === undefined ? "Navigation" : _ref6$ariaLabel;
    return _react2.default.createElement(
        "div",
        { className: "tabnav" },
        _react2.default.createElement(
            "nav",
            { className: "tabnav-tabs", "aria-label": ariaLabel },
            children
        )
    );
};

var NavigationTabItem = exports.NavigationTabItem = function NavigationTabItem(_ref7) {
    var children = _ref7.children,
        href = _ref7.href,
        _ref7$current = _ref7.current,
        current = _ref7$current === undefined ? false : _ref7$current;
    return _react2.default.createElement(
        "a",
        {
            href: href,
            className: "tabnav-tab selected",
            "aria-current": "" + (current ? "page" : "")
        },
        children
    );
};

exports.default = {
    Menu: NavigationMenu,
    MenuItem: NavigationMenuItem,
    Underline: NavigationUnderline,
    UnderlineItem: NavigationUnderlineItem,
    UnderlineActionGroup: NavigationUnderlineActionGroup,
    Tabs: NavigationTabs,
    TabItem: NavigationTabItem
};