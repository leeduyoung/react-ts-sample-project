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
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Index = function () { return React.createElement("h2", null, "Home"); };
var About = function () { return React.createElement("h2", null, "About"); };
var Users = function () { return React.createElement("h2", null, "Users"); };
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainPage.prototype.render = function () {
        return (React.createElement("div", null,
            "desktop main page",
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement("div", null,
                    React.createElement("nav", null,
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/about/" }, "About")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/users/" }, "Users")))),
                    React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Index }),
                    React.createElement(react_router_dom_1.Route, { path: "/about/", component: About }),
                    React.createElement(react_router_dom_1.Route, { path: "/users/", component: Users })))));
    };
    return MainPage;
}(React.Component));
exports.MainPage = MainPage;
