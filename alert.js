"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./styles/alert.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(_ref) {
    var description = _ref.description,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? "" : _ref$type;
    return _react2.default.createElement(
        "div",
        { className: "flash " + type },
        description
    );
};

var SuccessAlert = function SuccessAlert(_ref2) {
    var description = _ref2.description;
    return _react2.default.createElement(Alert, { description: description });
};

var WarningAlert = function WarningAlert(_ref3) {
    var description = _ref3.description;
    return _react2.default.createElement(Alert, { description: description, type: "flash-warn" });
};

var ErrorAlert = function ErrorAlert(_ref4) {
    var description = _ref4.description;
    return _react2.default.createElement(Alert, { description: description, type: "flash-error" });
};

exports.default = {
    Success: SuccessAlert,
    Warning: WarningAlert,
    Error: ErrorAlert
};