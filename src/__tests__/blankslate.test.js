import React from "react";
import Blankslate from "../blankslate";
import { render } from "enzyme";

const ANY_TITLE = "Any title";
const ANY_DESCRIPTION = "Any description";

test("Blankslate contains expected class", () => {
    expect(render(<Blankslate />).hasClass("blankslate")).toBe(true);
});

test("simple Blankslate contains expected classes", () => {
    const component = render(<Blankslate simple />);

    expect(component.hasClass("blankslate")).toBe(true);
    expect(component.hasClass("blankslate-clean-background")).toBe(true);
});

test("Blankslate displays both title and description", () => {
    const expectedTitle = ANY_TITLE;
    const expectedDescription = ANY_DESCRIPTION;
    const component = render(
        <Blankslate title={expectedTitle} description={expectedDescription} />
    );

    expect(component.find("h3").text()).toBe(expectedTitle);
    expect(component.find("p").text()).toBe(expectedDescription);
});
