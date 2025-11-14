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
var ShirtScoopNeck = /** @class */ (function (_super) {
    __extends(ShirtScoopNeck, _super);
    function ShirtScoopNeck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    ShirtScoopNeck.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (jsx_runtime_1.jsxs("g", __assign({ id: 'Clothing/Shirt-Scoop-Neck', transform: 'translate(0.000000, 170.000000)' }, { children: [jsx_runtime_1.jsx("defs", { children: jsx_runtime_1.jsx("path", { d: 'M181.544255,32.3304167 C210.784209,41.4878872 232,68.7921987 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3969699 53.7388273,40.8195914 83.5340368,32.0020332 C83.182234,33.4201865 83,34.8712315 83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9849859 181.844766,33.6439396 181.544255,32.3304167 Z', id: path1 }, void 0) }, void 0), jsx_runtime_1.jsx("mask", __assign({ id: mask1, fill: 'white' }, { children: jsx_runtime_1.jsx("use", { xlinkHref: '#' + path1 }, void 0) }), void 0), jsx_runtime_1.jsx("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }, void 0), jsx_runtime_1.jsx(Colors_1.default, { maskID: mask1 }, void 0)] }), void 0));
    };
    ShirtScoopNeck.optionValue = 'ShirtScoopNeck';
    return ShirtScoopNeck;
}(React.Component));
exports.default = ShirtScoopNeck;
