"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom");
var React = require("react");
var ReactUtil_1 = require("./utils/ReactUtil");
var MobileMainPage_1 = require("./mobile/pages/MobileMainPage");
var MainPage_1 = require("./desktop/pages/MainPage");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var is_mobile = ReactUtil_1.ReactUtil.is_mobile();
        return (is_mobile
            ? React.createElement(MobileMainPage_1.MobileMainPage, null)
            : React.createElement(MainPage_1.MainPage, null));
    };
    return App;
}(React.Component));
exports.App = App;
(function (App) {
    function main() {
        ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
    }
    App.main = main;
})(App = exports.App || (exports.App = {}));
exports.App = App;
window.onload = App.main;
