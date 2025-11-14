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
var EyeRoll = /** @class */ (function (_super) {
    __extends(EyeRoll, _super);
    function EyeRoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EyeRoll.prototype.render = function () {
        return (jsx_runtime_1.jsxs("g", __assign({ id: 'Eyes/Eye-Roll-\uD83D\uDE44', transform: 'translate(0.000000, 8.000000)' }, { children: [jsx_runtime_1.jsx("circle", { id: 'Eyeball', fill: '#FFFFFF', cx: '30', cy: '22', r: '14' }, void 0), jsx_runtime_1.jsx("circle", { id: 'The-white-stuff', fill: '#FFFFFF', cx: '82', cy: '22', r: '14' }, void 0), jsx_runtime_1.jsx("circle", { id: 'Eye', fillOpacity: '0.699999988', fill: '#000000', cx: '30', cy: '14', r: '6' }, void 0), jsx_runtime_1.jsx("circle", { id: 'Eye', fillOpacity: '0.699999988', fill: '#000000', cx: '82', cy: '14', r: '6' }, void 0)] }), void 0));
    };
    EyeRoll.optionValue = 'EyeRoll';
    return EyeRoll;
}(React.Component));
exports.default = EyeRoll;
