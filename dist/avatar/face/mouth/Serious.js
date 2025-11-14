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
var Serious = /** @class */ (function (_super) {
    __extends(Serious, _super);
    function Serious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Serious.prototype.render = function () {
        return (jsx_runtime_1.jsx("g", __assign({ id: 'Mouth/Serious', transform: 'translate(2.000000, 52.000000)', fill: '#000000', fillOpacity: '0.699999988' }, { children: jsx_runtime_1.jsx("rect", { id: 'Why-so-serious?', x: '42', y: '18', width: '24', height: '6', rx: '3' }, void 0) }), void 0));
    };
    Serious.optionValue = 'Serious';
    return Serious;
}(React.Component));
exports.default = Serious;
