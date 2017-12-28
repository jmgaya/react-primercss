import React from "react";
import { SuccessAlert, WarningAlert, ErrorAlert } from "../alert";
import { render } from "enzyme";

test("SuccessAlert contains expected class", () => {
    expect(render(<SuccessAlert />).hasClass("flash")).toBe(true);
});

test("SuccessAlert renders description", () => {
    const expectedText = "foo";
    expect(render(<SuccessAlert description={expectedText} />).text()).toBe(
        expectedText
    );
});

test("WarningAlert contains expected classes", () => {
    expect(render(<WarningAlert />).hasClass("flash")).toBe(true);
    expect(render(<WarningAlert />).hasClass("flash-warn")).toBe(true);
});

test("WarningAlert renders description", () => {
    const expectedText = "foo";
    expect(render(<WarningAlert description={expectedText} />).text()).toBe(
        expectedText
    );
});

test("ErrorAlert contains expected classes", () => {
    expect(render(<ErrorAlert />).hasClass("flash")).toBe(true);
    expect(render(<ErrorAlert />).hasClass("flash-error")).toBe(true);
});

test("ErrorAlert renders description", () => {
    const expectedText = "foo";
    expect(render(<ErrorAlert description={expectedText} />).text()).toBe(
        expectedText
    );
});
