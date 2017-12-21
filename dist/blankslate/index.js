"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./blankslate.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blankslate = function Blankslate(_ref) {
    var title = _ref.title,
        description = _ref.description,
        _ref$simple = _ref.simple,
        simple = _ref$simple === undefined ? false : _ref$simple;

    var simpleClass = simple ? "blankslate-clean-background" : "";
    return _react2.default.createElement(
        "div",
        { className: "blankslate " + simpleClass },
        title && _react2.default.createElement(
            "h3",
            null,
            title
        ),
        description && _react2.default.createElement(
            "p",
            null,
            description
        )
    );
};

exports.default = Blankslate;