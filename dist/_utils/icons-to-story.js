"use strict";

var icons = require("../icon");

(function () {
    var result = "";
    for (var icn in icons) {
        result += "<" + icn + " height=\"32\"/>";
        result += "\n\n";
    }

    // eslint-disable-next-line
    console.log(result);
})();