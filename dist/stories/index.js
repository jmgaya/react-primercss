"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("../button");

var _button2 = _interopRequireDefault(_button);

var _buttonLink = require("../button-link");

var _buttonLink2 = _interopRequireDefault(_buttonLink);

var _blankslate = require("../blankslate");

var _blankslate2 = _interopRequireDefault(_blankslate);

var _alert = require("../alert");

var _alert2 = _interopRequireDefault(_alert);

var _avatar = require("../avatar");

var _avatar2 = _interopRequireDefault(_avatar);

var _icon = require("../icon");

var Icons = _interopRequireWildcard(_icon);

var _react3 = require("@storybook/react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconsList = Object.values(Icons);

(0, _react3.storiesOf)("Icon", module).add("all", function () {
    return iconsList.map(function (I, idx) {
        return _react2.default.createElement(I, { key: idx, height: "32" });
    });
}).add("with color", function () {
    return _react2.default.createElement(Icons.IcnLogoGithub, { height: "64", color: "#28A745" });
}).add("with custom size", function () {
    return _react2.default.createElement(Icons.IcnLogoGithub, { height: "256" });
});

(0, _react3.storiesOf)("Button", module).add("default", function () {
    return _react2.default.createElement(_button2.default.Default, { text: "Default" });
}).add("primary", function () {
    return _react2.default.createElement(_button2.default.Primary, { text: "Primary" });
}).add("secondary", function () {
    return _react2.default.createElement(_button2.default.Secondary, { text: "Secondary" });
}).add("tertiary", function () {
    return _react2.default.createElement(_button2.default.Tertiary, { text: "Tertiary" });
}).add("danger", function () {
    return _react2.default.createElement(_button2.default.Danger, { text: "Danger" });
}).add("outline", function () {
    return _react2.default.createElement(_button2.default.Outline, { text: "Outline" });
}).add("disabled", function () {
    return _react2.default.createElement(_button2.default.Primary, { text: "Disabled", disabled: true });
}).add("with counter", function () {
    return _react2.default.createElement(_button2.default.Outline, { text: "Counter", count: 12 });
}).add("small", function () {
    return _react2.default.createElement(_button2.default.Primary, { text: "Small", small: true });
}).add("group", function () {
    return _react2.default.createElement(
        _button2.default.Group,
        null,
        _react2.default.createElement(_button2.default.Default, { text: "This" }),
        _react2.default.createElement(_button2.default.Default, { text: "is" }),
        _react2.default.createElement(_button2.default.Default, { text: "a" }),
        _react2.default.createElement(_button2.default.Default, { text: "Group" })
    );
});

(0, _react3.storiesOf)("Button Link", module).add("default", function () {
    return _react2.default.createElement(_buttonLink2.default.Default, { text: "Default" });
}).add("primary", function () {
    return _react2.default.createElement(_buttonLink2.default.Primary, { text: "Primary" });
}).add("secondary", function () {
    return _react2.default.createElement(_buttonLink2.default.Secondary, { text: "Secondary" });
}).add("tertiary", function () {
    return _react2.default.createElement(_buttonLink2.default.Tertiary, { text: "Tertiary" });
}).add("danger", function () {
    return _react2.default.createElement(_buttonLink2.default.Danger, { text: "Danger" });
}).add("outline", function () {
    return _react2.default.createElement(_buttonLink2.default.Outline, { text: "Outline" });
}).add("disabled", function () {
    return _react2.default.createElement(_buttonLink2.default.Primary, { text: "Disabled", disabled: true });
}).add("with counter", function () {
    return _react2.default.createElement(_buttonLink2.default.Outline, { text: "Counter", count: 12 });
}).add("small", function () {
    return _react2.default.createElement(_buttonLink2.default.Primary, { text: "Small", small: true });
}).add("group", function () {
    return _react2.default.createElement(
        _buttonLink2.default.Group,
        null,
        _react2.default.createElement(_buttonLink2.default.Default, { text: "This" }),
        _react2.default.createElement(_buttonLink2.default.Default, { text: "is" }),
        _react2.default.createElement(_buttonLink2.default.Default, { text: "a" }),
        _react2.default.createElement(_buttonLink2.default.Default, { text: "Group" })
    );
});

(0, _react3.storiesOf)("Blankslate", module).add("default", function () {
    return _react2.default.createElement(_blankslate2.default, { title: "title", description: "description" });
}).add("simple", function () {
    return _react2.default.createElement(_blankslate2.default, {
        title: "Simple \uD83D\uDC4F",
        description: "blankslate \uD83D\uDD76",
        simple: true
    });
});

(0, _react3.storiesOf)("Alert", module).add("success", function () {
    return _react2.default.createElement(_alert2.default.Success, { description: "This is a success alert!" });
}).add("warning", function () {
    return _react2.default.createElement(_alert2.default.Warning, { description: "This is a warning alert!" });
}).add("error", function () {
    return _react2.default.createElement(_alert2.default.Error, { description: "This is an error alert!" });
});

(0, _react3.storiesOf)("Avatars", module).add("square", function () {
    return _react2.default.createElement(_avatar2.default.Square, {
        src: "https://avatars3.githubusercontent.com/u/9919?v=3&s=144",
        width: "42"
    });
}).add("square with child", function () {
    return _react2.default.createElement(_avatar2.default.Square, {
        src: "https://avatars3.githubusercontent.com/u/9919?v=3&s=144",
        child: "https://avatars3.githubusercontent.com/u/9919?v=3&s=40",
        width: "72"
    });
}).add("group", function () {
    return _react2.default.createElement(_avatar2.default.Group, null);
});