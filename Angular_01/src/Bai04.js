"use strict";
var Color;
(function (Color) {
    Color["RED"] = "\u0110\u1ECF";
    Color["GREEN"] = "Xanh l\u00E1";
    Color["BLUE"] = "Xanh n\u01B0\u1EDBc bi\u1EC3n";
})(Color || (Color = {}));
function getColor(color) {
    console.log(color);
}
getColor(Color.RED);
