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
var Angry_1 = require("./Angry");
var AngryNatural_1 = require("./AngryNatural");
var Default_1 = require("./Default");
var DefaultNatural_1 = require("./DefaultNatural");
var FlatNatural_1 = require("./FlatNatural");
var RaisedExcited_1 = require("./RaisedExcited");
var RaisedExcitedNatural_1 = require("./RaisedExcitedNatural");
var SadConcerned_1 = require("./SadConcerned");
var SadConcernedNatural_1 = require("./SadConcernedNatural");
var UnibrowNatural_1 = require("./UnibrowNatural");
var UpDown_1 = require("./UpDown");
var UpDownNatural_1 = require("./UpDownNatural");
var options_1 = require("../../../options");
var Eyebrow = /** @class */ (function (_super) {
    __extends(Eyebrow, _super);
    function Eyebrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eyebrow.prototype.render = function () {
        return (jsx_runtime_1.jsxs(options_1.Selector, __assign({ defaultOption: Default_1.default, option: options_1.EyebrowOption }, { children: [jsx_runtime_1.jsx(Angry_1.default, {}, void 0), jsx_runtime_1.jsx(AngryNatural_1.default, {}, void 0), jsx_runtime_1.jsx(Default_1.default, {}, void 0), jsx_runtime_1.jsx(DefaultNatural_1.default, {}, void 0), jsx_runtime_1.jsx(FlatNatural_1.default, {}, void 0), jsx_runtime_1.jsx(RaisedExcited_1.default, {}, void 0), jsx_runtime_1.jsx(RaisedExcitedNatural_1.default, {}, void 0), jsx_runtime_1.jsx(SadConcerned_1.default, {}, void 0), jsx_runtime_1.jsx(SadConcernedNatural_1.default, {}, void 0), jsx_runtime_1.jsx(UnibrowNatural_1.default, {}, void 0), jsx_runtime_1.jsx(UpDown_1.default, {}, void 0), jsx_runtime_1.jsx(UpDownNatural_1.default, {}, void 0)] }), void 0));
    };
    return Eyebrow;
}(React.Component));
exports.default = Eyebrow;
