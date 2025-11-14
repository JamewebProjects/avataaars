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
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var ShortHairTheCaesarSidePart = /** @class */ (function (_super) {
    __extends(ShortHairTheCaesarSidePart, _super);
    function ShortHairTheCaesarSidePart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = lodash_1.uniqueId('react-filter-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    ShortHairTheCaesarSidePart.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (jsx_runtime_1.jsxs("g", __assign({ id: 'Top', strokeWidth: '1', fillRule: 'evenodd' }, { children: [jsx_runtime_1.jsxs("defs", { children: [jsx_runtime_1.jsx("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }, void 0), jsx_runtime_1.jsx("path", { d: 'M82.0179468,24.3784638 C74.9860629,23.6847351 66.6573358,23.2514721 58.3126144,23.245568 C39.0082164,23.2319099 19.618222,25.4833872 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407122,26.7763475 92.7526689,25.6101897 85.3587425,24.7390449 L89,16 L82.0179468,24.3784638 Z', id: path2 }, void 0), jsx_runtime_1.jsxs("filter", __assign({ x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 }, { children: [jsx_runtime_1.jsx("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }, void 0), jsx_runtime_1.jsx("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }, void 0), jsx_runtime_1.jsxs("feMerge", { children: [jsx_runtime_1.jsx("feMergeNode", { in: 'shadowMatrixOuter1' }, void 0), jsx_runtime_1.jsx("feMergeNode", { in: 'SourceGraphic' }, void 0)] }, void 0)] }), void 0)] }, void 0), jsx_runtime_1.jsx("mask", __assign({ id: mask1, fill: 'white' }, { children: jsx_runtime_1.jsx("use", { xlinkHref: '#' + path1 }, void 0) }), void 0), jsx_runtime_1.jsx("g", { id: 'Mask' }, void 0), jsx_runtime_1.jsx("g", __assign({ id: 'Top/Short-Hair/The-Caesar-+-Side-Part', mask: "url(#" + mask1 + ")" }, { children: jsx_runtime_1.jsxs("g", __assign({ transform: 'translate(-1.000000, 0.000000)' }, { children: [jsx_runtime_1.jsx(facialHair_1.default, {}, void 0), jsx_runtime_1.jsxs("g", __assign({ id: 'Hair', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(75.000000, 34.000000)' }, { children: [jsx_runtime_1.jsx("mask", __assign({ id: mask2, fill: 'white' }, { children: jsx_runtime_1.jsx("use", { xlinkHref: '#' + path2 }, void 0) }), void 0), jsx_runtime_1.jsx("use", { id: 'Caesar', fill: '#28354B', xlinkHref: '#' + path2 }, void 0), jsx_runtime_1.jsx(HairColor_1.default, { maskID: mask2 }, void 0)] }), void 0), this.props.children] }), void 0) }), void 0)] }), void 0));
    };
    ShortHairTheCaesarSidePart.optionValue = 'ShortHairTheCaesarSidePart';
    return ShortHairTheCaesarSidePart;
}(React.Component));
exports.default = ShortHairTheCaesarSidePart;
