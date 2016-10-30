/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Clock_tsx_1 = __webpack_require__(3);
	var Quote_tsx_1 = __webpack_require__(4);
	var Setting_tsx_1 = __webpack_require__(5);
	var Footer_tsx_1 = __webpack_require__(6);
	var root = document.getElementById("ddaom");
	var Ddaom = (function (_super) {
	    __extends(Ddaom, _super);
	    function Ddaom(props) {
	        _super.call(this, props);
	    }
	    Ddaom.prototype.render = function () {
	        return (React.createElement("div", null, 
	            React.createElement(Clock_tsx_1.default, null), 
	            React.createElement(Quote_tsx_1.default, null), 
	            React.createElement(Setting_tsx_1.default, null), 
	            React.createElement(Footer_tsx_1.default, null)));
	    };
	    return Ddaom;
	}(React.Component));
	ReactDOM.render(React.createElement(Ddaom, null), root);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../interfaces.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var weekdays = ['일', '월', '화', '수', '목', '금', '토'];
	var now = new Date();
	var getNow = function () {
	    var hours = now.getHours();
	    var minutes = now.getMinutes();
	    var month = now.getMonth() + 1;
	    var date = now.getDate();
	    var weekday = now.getDay();
	    return {
	        hours: hours,
	        minutes: minutes,
	        month: month,
	        date: date,
	        weekday: weekday
	    };
	};
	var Clock = (function (_super) {
	    __extends(Clock, _super);
	    function Clock(props) {
	        _super.call(this, props);
	        this.state = getNow();
	    }
	    Clock.prototype.render = function () {
	        return (React.createElement("header", null, 
	            React.createElement("p", null, 
	                this.state.hours, 
	                ":", 
	                this.state.minutes), 
	            React.createElement("p", null, 
	                this.state.month, 
	                ". ", 
	                this.state.date, 
	                ". ", 
	                weekdays[this.state.weekday])));
	    };
	    return Clock;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Clock;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Quote = (function (_super) {
	    __extends(Quote, _super);
	    function Quote() {
	        _super.apply(this, arguments);
	    }
	    Quote.prototype.render = function () {
	        return (React.createElement("section", {id: "quote"}, 
	            React.createElement("div", {id: "bg"}, 
	                React.createElement("div", {className: "dim"}), 
	                React.createElement("div", {className: "wrap-quote"}, 
	                    React.createElement("span", {className: "quote-mark"}, "“"), 
	                    React.createElement("pre", {className: "quote-text"}, "명언"), 
	                    React.createElement("p", {className: "quote-from"}, 
	                        "출처1", 
	                        React.createElement("u", null, "출처2")), 
	                    React.createElement("img", {className: "quote-reload"})))
	        ));
	    };
	    return Quote;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Quote;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Setting = (function (_super) {
	    __extends(Setting, _super);
	    function Setting() {
	        _super.apply(this, arguments);
	    }
	    Setting.prototype.render = function () {
	        return (React.createElement("section", {id: "setting"}, 
	            React.createElement("h3", null, "테마"), 
	            React.createElement("select", {id: "setting-theme"}, 
	                React.createElement("option", {value: "white"}, "화이트"), 
	                React.createElement("option", {value: "black"}, "블랙"), 
	                React.createElement("option", {value: "transparent"}, "투명"), 
	                React.createElement("option", {value: "custom"}, "커스텀")), 
	            React.createElement("div", {className: "setting-custom-colorset"}, 
	                React.createElement("h3", null, "말"), 
	                React.createElement("button", {className: "setting-color-text", type: "button"}), 
	                React.createElement("h3", null, "박스"), 
	                React.createElement("button", {className: "setting-color-box", type: "button"}), 
	                React.createElement("h3", null, "테두리"), 
	                React.createElement("button", {className: "setting-color-border", type: "button"})), 
	            React.createElement("h3", null, "말 크기"), 
	            React.createElement("input", {type: "number", value: "40"}), 
	            React.createElement("h3", null, "정렬"), 
	            React.createElement("img", {className: "setting-align-left", src: "#", alt: "left"}), 
	            React.createElement("img", {className: "setting-align-center", src: "#", alt: "center"}), 
	            React.createElement("label", {htmlFor: "setting-show-time"}, "시간"), 
	            React.createElement("input", {id: "setting-show-time", type: "checkbox"}), 
	            React.createElement("label", {htmlFor: "setting-show-date"}, "날짜"), 
	            React.createElement("input", {id: "setting-show-date", type: "checkbox"}), 
	            React.createElement("button", {id: "setting-submit", type: "submit"})));
	    };
	    return Setting;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Setting;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Footer = (function (_super) {
	    __extends(Footer, _super);
	    function Footer() {
	        _super.apply(this, arguments);
	    }
	    Footer.prototype.render = function () {
	        return (React.createElement("footer", null, 
	            React.createElement("a", null, "피드백"), 
	            React.createElement("a", null, "명언 제보"), 
	            React.createElement("p", null, "© 2015 CHRM"), 
	            React.createElement("a", null, "limchrm")));
	    };
	    return Footer;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Footer;
	// <footer>
	// 		<a class="btn btn_feedback track" ng-click="feedback='open'"><img src="img/ic_feedback.svg"><span>피드백</span></a>
	// 		<a class="btn btn_suggest" href="{{your.feeadback.url}}" target="_blank"><img src="img/ic_suggest.svg"><span>명언 제보</span></a>
	// 		<a class="btn btn_setting" ng-click="open=true"><img src="img/ic_setting.svg"></a>
	// 		<p>© 2015 CHRM<a class="profile" href="http://fb.me/limchrm" target="_blank">limchrm</a></p>
	// 	</footer> 


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map