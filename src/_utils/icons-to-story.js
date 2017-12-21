var icons = require("../icon");

(() => {
    let result = "";
    for (let icn in icons) {
        result += `<${icn} height="32"/>`;
        result += "\n\n";
    }

    // eslint-disable-next-line
    console.log(result);
})();
