"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom");
var ReactUtil = /** @class */ (function () {
    function ReactUtil() {
    }
    Object.defineProperty(ReactUtil, "MAIN_DIV", {
        get: function () {
            return ReactUtil.get_element("main_div");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactUtil, "MODAL_DIV", {
        get: function () {
            return ReactUtil.get_element("modal_div");
        },
        enumerable: true,
        configurable: true
    });
    ReactUtil.get_element = function (id) {
        return document.getElementById(id);
    };
    ReactUtil.get_input_value = function (id) {
        var elem = ReactUtil.get_element(id);
        return elem ? elem.value : "";
    };
    return ReactUtil;
}());
exports.ReactUtil = ReactUtil;
(function (ReactUtil) {
    function render(element, container) {
        return new Promise(function (resolve) {
            ReactDOM.render(element, container, resolve);
        });
    }
    ReactUtil.render = render;
    function refresh(component) {
        return new Promise(function (resolve) {
            component.setState({}, resolve);
        });
    }
    ReactUtil.refresh = refresh;
    function is_mobile() {
        if (is_mobile_ != null)
            return is_mobile_;
        var agent = navigator.userAgent;
        is_mobile_ = /Android/i.test(agent)
            || /BlackBerry/i.test(agent)
            || /iPhone|iPad|iPod/i.test(agent)
            || /Opera Mini/i.test(agent)
            || /IEMobile/i.test(agent);
        return is_mobile_;
    }
    ReactUtil.is_mobile = is_mobile;
    function is_ios() {
        if (is_ios_ != null)
            return is_ios_;
        var agent = navigator.userAgent;
        is_ios_ = /iPhone|iPad|iPod/i.test(agent);
        return is_ios_;
    }
    ReactUtil.is_ios = is_ios;
    function close_modal() {
        return ReactUtil.render(null, ReactUtil.MODAL_DIV);
    }
    ReactUtil.close_modal = close_modal;
    var is_mobile_ = null;
    var is_ios_ = null;
})(ReactUtil = exports.ReactUtil || (exports.ReactUtil = {}));
exports.ReactUtil = ReactUtil;
