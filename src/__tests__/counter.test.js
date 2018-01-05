import React from "react";
import Counter from "../counter";
import { render } from "enzyme";

const ANY_INTEGER = 123;

test("Counter contains expected class", () => {
    expect(render(<Counter />).hasClass("Counter")).toBe(true);
});

test("Counter works with integer", () => {
    const expectedCount = ANY_INTEGER;
    const component = render(<Counter count={expectedCount} />);

    expect(component.text()).toBe(String(expectedCount));
});

test("Counter works with string", () => {
    const expectedCount = String(ANY_INTEGER);
    const component = render(<Counter count={expectedCount} />);

    expect(component.text()).toBe(expectedCount);
});
