import { configure } from "@storybook/react";

function loadStories() {
    require("../src/_stories");
}

configure(loadStories, module);
