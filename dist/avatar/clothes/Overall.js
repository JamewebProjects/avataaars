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
var lodash_1 = require("lodash");
var Colors_1 = require("./Colors");
var Overall = /** @class */ (function (_super) {
    __extends(Overall, _super);
    function Overall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    Overall.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (jsx_runtime_1.jsxs("g", __assign({ id: 'Clothing/Overall', transform: 'translate(0.000000, 170.000000)' }, { children: [jsx_runtime_1.jsx("defs", { children: jsx_runtime_1.jsx("path", { d: 'M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z', id: path1 }, void 0) }, void 0), jsx_runtime_1.jsx("mask", __assign({ id: mask1, fill: 'white' }, { children: jsx_runtime_1.jsx("use", { xlinkHref: '#' + path1 }, void 0) }), void 0), jsx_runtime_1.jsx("use", { id: 'Overall', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }, void 0), jsx_runtime_1.jsx(Colors_1.default, { maskID: mask1 }, void 0), jsx_runtime_1.jsx("circle", { id: 'Button', fill: '#F4F4F4', fillRule: 'evenodd', cx: '81', cy: '83', r: '5' }, void 0), jsx_runtime_1.jsx("circle", { id: 'Button', fill: '#F4F4F4', fillRule: 'evenodd', cx: '183', cy: '83', r: '5' }, void 0)] }), void 0));
    };
    Overall.optionValue = 'Overall';
    return Overall;
}(React.Component));
exports.default = Overall;
