"use strict";
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
exports.useOptionContext = exports.OptionContextProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var OptionContextReactContext = React.createContext(null);
var OptionContextProvider = function (_a) {
    var optionContext = _a.optionContext, children = _a.children;
    return (jsx_runtime_1.jsx(OptionContextReactContext.Provider, __assign({ value: optionContext }, { children: children }), void 0));
};
exports.OptionContextProvider = OptionContextProvider;
var useOptionContext = function () {
    var context = React.useContext(OptionContextReactContext);
    if (!context) {
        throw new Error('useOptionContext must be used within OptionContextProvider');
    }
    return context;
};
exports.useOptionContext = useOptionContext;
exports.default = OptionContextReactContext;
