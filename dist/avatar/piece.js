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
exports.AvatarStyle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var clothes_1 = require("./clothes");
var Graphics_1 = require("./clothes/Graphics");
var accessories_1 = require("./top/accessories");
var facialHair_1 = require("./top/facialHair");
var top_1 = require("./top");
var eyes_1 = require("./face/eyes");
var eyebrow_1 = require("./face/eyebrow");
var mouth_1 = require("./face/mouth");
var nose_1 = require("./face/nose");
var Skin_1 = require("./Skin");
var AvatarStyle;
(function (AvatarStyle) {
    AvatarStyle["Circle"] = "Circle";
    AvatarStyle["Transparent"] = "Transparent";
})(AvatarStyle = exports.AvatarStyle || (exports.AvatarStyle = {}));
var PieceComponent = /** @class */ (function (_super) {
    __extends(PieceComponent, _super);
    function PieceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieceComponent.prototype.render = function () {
        return (jsx_runtime_1.jsxs("svg", __assign({ style: this.props.style, width: this.props.pieceSize + "px", height: this.props.pieceSize + "px", viewBox: this.props.viewBox || "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, { children: [this.props.pieceType === 'top' && jsx_runtime_1.jsx(top_1.default, {}, void 0), this.props.pieceType === 'clothe' && jsx_runtime_1.jsx(clothes_1.default, {}, void 0), this.props.pieceType === 'graphics' && jsx_runtime_1.jsx(Graphics_1.default, { maskID: "1234" }, void 0), (this.props.pieceType === 'accessories' ||
                    this.props.pieceType === 'accesories') && jsx_runtime_1.jsx(accessories_1.default, {}, void 0), this.props.pieceType === 'facialHair' && jsx_runtime_1.jsx(facialHair_1.default, {}, void 0), this.props.pieceType === 'eyes' && jsx_runtime_1.jsx(eyes_1.default, {}, void 0), this.props.pieceType === 'eyebrows' && jsx_runtime_1.jsx(eyebrow_1.default, {}, void 0), this.props.pieceType === 'mouth' && jsx_runtime_1.jsx(mouth_1.default, {}, void 0), this.props.pieceType === 'nose' && jsx_runtime_1.jsx(nose_1.default, {}, void 0), this.props.pieceType === 'skin' && jsx_runtime_1.jsx(Skin_1.default, { maskID: "5678" }, void 0)] }), void 0));
    };
    return PieceComponent;
}(React.Component));
exports.default = PieceComponent;
