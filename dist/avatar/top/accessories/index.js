"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var Blank_1 = require("./Blank");
var Kurt_1 = require("./Kurt");
var Prescription01_1 = require("./Prescription01");
var Prescription02_1 = require("./Prescription02");
var Round_1 = require("./Round");
var Sunglasses_1 = require("./Sunglasses");
var Wayfarers_1 = require("./Wayfarers");
var options_1 = require("../../../options");
var Accessories = /** @class */ (function (_super) {
    __extends(Accessories, _super);
    function Accessories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accessories.prototype.render = function () {
        return (jsx_runtime_1.jsxs(options_1.Selector, __assign({ defaultOption: Blank_1.default, option: options_1.AccessoriesOption }, { children: [jsx_runtime_1.jsx(Blank_1.default, {}, void 0), jsx_runtime_1.jsx(Kurt_1.default, {}, void 0), jsx_runtime_1.jsx(Prescription01_1.default, {}, void 0), jsx_runtime_1.jsx(Prescription02_1.default, {}, void 0), jsx_runtime_1.jsx(Round_1.default, {}, void 0), jsx_runtime_1.jsx(Sunglasses_1.default, {}, void 0), jsx_runtime_1.jsx(Wayfarers_1.default, {}, void 0)] }), void 0));
    };
    return Accessories;
}(React.Component));
exports.default = Accessories;
