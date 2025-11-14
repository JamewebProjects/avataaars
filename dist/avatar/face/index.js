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
var eyebrow_1 = require("./eyebrow");
var eyes_1 = require("./eyes");
var mouth_1 = require("./mouth");
var Default_1 = require("./nose/Default");
var Face = /** @class */ (function (_super) {
    __extends(Face, _super);
    function Face() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Face.prototype.render = function () {
        return (jsx_runtime_1.jsxs("g", __assign({ id: 'Face', transform: 'translate(76.000000, 82.000000)', fill: '#000000' }, { children: [jsx_runtime_1.jsx(mouth_1.default, {}, void 0), jsx_runtime_1.jsx(Default_1.default, {}, void 0), jsx_runtime_1.jsx(eyes_1.default, {}, void 0), jsx_runtime_1.jsx(eyebrow_1.default, {}, void 0)] }), void 0));
    };
    return Face;
}(React.Component));
exports.default = Face;
