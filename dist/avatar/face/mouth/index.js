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
var Concerned_1 = require("./Concerned");
var Default_1 = require("./Default");
var Disbelief_1 = require("./Disbelief");
var Eating_1 = require("./Eating");
var Grimace_1 = require("./Grimace");
var Sad_1 = require("./Sad");
var ScreamOpen_1 = require("./ScreamOpen");
var Serious_1 = require("./Serious");
var Smile_1 = require("./Smile");
var Tongue_1 = require("./Tongue");
var Twinkle_1 = require("./Twinkle");
var Vomit_1 = require("./Vomit");
var options_1 = require("../../../options");
var Mouth = /** @class */ (function (_super) {
    __extends(Mouth, _super);
    function Mouth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouth.prototype.render = function () {
        return (jsx_runtime_1.jsxs(options_1.Selector, __assign({ defaultOption: Default_1.default, option: options_1.MouthOption }, { children: [jsx_runtime_1.jsx(Concerned_1.default, {}, void 0), jsx_runtime_1.jsx(Default_1.default, {}, void 0), jsx_runtime_1.jsx(Disbelief_1.default, {}, void 0), jsx_runtime_1.jsx(Eating_1.default, {}, void 0), jsx_runtime_1.jsx(Grimace_1.default, {}, void 0), jsx_runtime_1.jsx(Sad_1.default, {}, void 0), jsx_runtime_1.jsx(ScreamOpen_1.default, {}, void 0), jsx_runtime_1.jsx(Serious_1.default, {}, void 0), jsx_runtime_1.jsx(Smile_1.default, {}, void 0), jsx_runtime_1.jsx(Tongue_1.default, {}, void 0), jsx_runtime_1.jsx(Twinkle_1.default, {}, void 0), jsx_runtime_1.jsx(Vomit_1.default, {}, void 0)] }), void 0));
    };
    return Mouth;
}(React.Component));
exports.default = Mouth;
