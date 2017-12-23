"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./styles/counter.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = function Counter(_ref) {
  var count = _ref.count;
  return _react2.default.createElement(
    "span",
    { className: "Counter" },
    count
  );
};

exports.default = Counter;