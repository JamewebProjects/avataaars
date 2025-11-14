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
var Concerned = /** @class */ (function (_super) {
    __extends(Concerned, _super);
    function Concerned() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    Concerned.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (jsx_runtime_1.jsxs("g", __assign({ id: 'Mouth/Concerned', transform: 'translate(2.000000, 52.000000)' }, { children: [jsx_runtime_1.jsx("defs", { children: jsx_runtime_1.jsx("path", { d: 'M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z', id: path1 }, void 0) }, void 0), jsx_runtime_1.jsx("mask", __assign({ id: mask1, fill: 'white' }, { children: jsx_runtime_1.jsx("use", { xlinkHref: '#' + path1, transform: 'translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) ' }, void 0) }), void 0), jsx_runtime_1.jsx("use", { id: 'Mouth', fillOpacity: '0.699999988', fill: '#000000', fillRule: 'evenodd', transform: 'translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) ', xlinkHref: '#' + path1 }, void 0), jsx_runtime_1.jsx("rect", { id: 'Teeth', fill: '#FFFFFF', fillRule: 'evenodd', mask: "url(#" + mask1 + ")", x: '39', y: '2', width: '31', height: '16', rx: '5' }, void 0), jsx_runtime_1.jsx("g", __assign({ id: 'Tongue', strokeWidth: '1', fillRule: 'evenodd', mask: "url(#" + mask1 + ")", fill: '#FF4F6D' }, { children: jsx_runtime_1.jsxs("g", __assign({ transform: 'translate(38.000000, 24.000000)' }, { children: [jsx_runtime_1.jsx("circle", { id: 'friend?', cx: '11', cy: '11', r: '11' }, void 0), jsx_runtime_1.jsx("circle", { id: 'How-you-doing', cx: '21', cy: '11', r: '11' }, void 0)] }), void 0) }), void 0)] }), void 0));
    };
    Concerned.optionValue = 'Concerned';
    return Concerned;
}(React.Component));
exports.default = Concerned;
