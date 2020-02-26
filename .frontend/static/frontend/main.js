/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/components/App.js":
/*!****************************************!*\
  !*** ./frontend/src/components/App.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\frontend\\\\src\\\\components\\\\App.js: Unexpected token (7:12)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m        ( \\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mAplikacja\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m            )\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7017:17)\\n    at Parser.unexpected (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8395:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9673:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9259:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9239:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9109:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9082:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9037:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9814:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9594:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9259:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9239:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9109:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9082:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9037:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8989:23)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10819:23)\\n    at Parser.parseStatement (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10690:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11264:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11251:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11235:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10252:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10222:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10187:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11668:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11585:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11527:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11482:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10565:14)\\n    at Parser.parseClassBody (C:\\\\Users\\\\Michal\\\\atrakcje\\\\atrakcje\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11459:10)\");\n\n//# sourceURL=webpack:///./frontend/src/components/App.js?");

/***/ }),

/***/ "./frontend/src/index.js":
/*!*******************************!*\
  !*** ./frontend/src/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./frontend/src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./frontend/src/index.js?");

/***/ })

/******/ });