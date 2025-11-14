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
var ShirtCrewNeck = /** @class */ (function (_super) {
    __extends(ShirtCrewNeck, _super);
    function ShirtCrewNeck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    ShirtCrewNeck.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (jsx_runtime_1.jsxs("g", __assign({ id: 'Clothing/Shirt-Crew-Neck', transform: 'translate(0.000000, 170.000000)' }, { children: [jsx_runtime_1.jsx("defs", { children: jsx_runtime_1.jsx("path", { d: 'M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z', id: path1 }, void 0) }, void 0), jsx_runtime_1.jsx("mask", __assign({ id: mask1, fill: 'white' }, { children: jsx_runtime_1.jsx("use", { xlinkHref: '#' + path1 }, void 0) }), void 0), jsx_runtime_1.jsx("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }, void 0), jsx_runtime_1.jsx(Colors_1.default, { maskID: mask1 }, void 0), jsx_runtime_1.jsx("g", __assign({ id: 'Shadowy', opacity: '0.599999964', strokeWidth: '1', fillRule: 'evenodd', mask: "url(#" + mask1 + ")", fillOpacity: '0.16', fill: '#000000' }, { children: jsx_runtime_1.jsx("g", __assign({ transform: 'translate(92.000000, 4.000000)', id: 'Hola-\uD83D\uDC4B\uD83C\uDFFC' }, { children: jsx_runtime_1.jsx("ellipse", { cx: '40.5', cy: '27.8476251', rx: '39.6351047', ry: '26.9138272' }, void 0) }), void 0) }), void 0)] }), void 0));
    };
    ShirtCrewNeck.optionValue = 'ShirtCrewNeck';
    return ShirtCrewNeck;
}(React.Component));
exports.default = ShirtCrewNeck;
