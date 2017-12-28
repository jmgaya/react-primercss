"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _alert = require("../alert");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("SuccessAlert contains expected class", function () {
    expect((0, _enzyme.render)(_react2.default.createElement(_alert.SuccessAlert, null)).hasClass("flash")).toBe(true);
});

test("SuccessAlert renders description", function () {
    var expectedText = "foo";
    expect((0, _enzyme.render)(_react2.default.createElement(_alert.SuccessAlert, { description: expectedText })).text()).toBe(expectedText);
});

test("WarningAlert contains expected classes", function () {
    expect((0, _enzyme.render)(_react2.default.createElement(_alert.WarningAlert, null)).hasClass("flash")).toBe(true);
    expect((0, _enzyme.render)(_react2.default.createElement(_alert.WarningAlert, null)).hasClass("flash-warn")).toBe(true);
});

test("WarningAlert renders description", function () {
    var expectedText = "foo";
    expect((0, _enzyme.render)(_react2.default.createElement(_alert.WarningAlert, { description: expectedText })).text()).toBe(expectedText);
});

test("ErrorAlert contains expected classes", function () {
    expect((0, _enzyme.render)(_react2.default.createElement(_alert.ErrorAlert, null)).hasClass("flash")).toBe(true);
    expect((0, _enzyme.render)(_react2.default.createElement(_alert.ErrorAlert, null)).hasClass("flash-error")).toBe(true);
});

test("ErrorAlert renders description", function () {
    var expectedText = "foo";
    expect((0, _enzyme.render)(_react2.default.createElement(_alert.ErrorAlert, { description: expectedText })).text()).toBe(expectedText);
});