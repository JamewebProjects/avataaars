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
var Squint = /** @class */ (function (_super) {
    __extends(Squint, _super);
    function Squint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    Squint.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, mask1 = _a.mask1, mask2 = _a.mask2;
        return (jsx_runtime_1.jsxs("g", __assign({ id: 'Eyes/Squint-\uD83D\uDE0A', transform: 'translate(0.000000, 8.000000)' }, { children: [jsx_runtime_1.jsxs("defs", { children: [jsx_runtime_1.jsx("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path1 }, void 0), jsx_runtime_1.jsx("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path2 }, void 0)] }, void 0), jsx_runtime_1.jsxs("g", __assign({ id: 'Eye', transform: 'translate(16.000000, 13.000000)' }, { children: [jsx_runtime_1.jsx("mask", __assign({ id: mask1, fill: 'white' }, { children: jsx_runtime_1.jsx("use", { xlinkHref: '#' + path1 }, void 0) }), void 0), jsx_runtime_1.jsx("use", { id: 'The-white-stuff', fill: '#FFFFFF', xlinkHref: '#' + path1 }, void 0), jsx_runtime_1.jsx("circle", { fillOpacity: '0.699999988', fill: '#000000', mask: "url(#" + mask1 + ")", cx: '14', cy: '10', r: '6' }, void 0)] }), void 0), jsx_runtime_1.jsxs("g", __assign({ id: 'Eye', transform: 'translate(68.000000, 13.000000)' }, { children: [jsx_runtime_1.jsx("mask", __assign({ id: mask2, fill: 'white' }, { children: jsx_runtime_1.jsx("use", { xlinkHref: '#' + path2 }, void 0) }), void 0), jsx_runtime_1.jsx("use", { id: 'Eyeball-Mask', fill: '#FFFFFF', xlinkHref: '#' + path2 }, void 0), jsx_runtime_1.jsx("circle", { fillOpacity: '0.699999988', fill: '#000000', mask: "url(#" + mask2 + ")", cx: '14', cy: '10', r: '6' }, void 0)] }), void 0)] }), void 0));
    };
    Squint.optionValue = 'Squint';
    return Squint;
}(React.Component));
exports.default = Squint;
