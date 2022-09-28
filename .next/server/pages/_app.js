module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions/getTheme.js":
/*!*******************************!*\
  !*** ./functions/getTheme.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getTheme = () => {\n  const theme = localStorage.getItem('psm-theme');\n  return theme;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mdW5jdGlvbnMvZ2V0VGhlbWUuanM/ZTRkMiJdLCJuYW1lcyI6WyJnZXRUaGVtZSIsInRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFkO0FBQ0EsU0FBT0YsS0FBUDtBQUNELENBSEQ7O0FBS2VELHVFQUFmIiwiZmlsZSI6Ii4vZnVuY3Rpb25zL2dldFRoZW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BzbS10aGVtZScpO1xuICByZXR1cm4gdGhlbWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRUaGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./functions/getTheme.js\n");

/***/ }),

/***/ "./functions/setTheme.js":
/*!*******************************!*\
  !*** ./functions/setTheme.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setTheme = theme => {\n  localStorage.setItem('psm-theme', JSON.stringify(theme));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mdW5jdGlvbnMvc2V0VGhlbWUuanM/MjA5MSJdLCJuYW1lcyI6WyJzZXRUaGVtZSIsInRoZW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUJDLGNBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixFQUFrQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLEtBQWYsQ0FBbEM7QUFDRCxDQUZEOztBQUllRCx1RUFBZiIsImZpbGUiOiIuL2Z1bmN0aW9ucy9zZXRUaGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNldFRoZW1lID0gKHRoZW1lKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwc20tdGhlbWUnLCBKU09OLnN0cmluZ2lmeSh0aGVtZSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./functions/setTheme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-socks */ \"react-socks\");\n/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_socks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _theme_dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/dark */ \"./theme/dark.js\");\n/* harmony import */ var _theme_light__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/light */ \"./theme/light.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/globalStyles */ \"./styles/globalStyles.js\");\n/* harmony import */ var _public_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/1.png */ \"./public/1.png\");\n/* harmony import */ var _public_1_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_1_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/2.png */ \"./public/2.png\");\n/* harmony import */ var _public_2_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_2_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/3.png */ \"./public/3.png\");\n/* harmony import */ var _public_3_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_3_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/4.png */ \"./public/4.png\");\n/* harmony import */ var _public_4_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_4_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _public_5_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/5.png */ \"./public/5.png\");\n/* harmony import */ var _public_5_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_5_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _public_6_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/6.png */ \"./public/6.png\");\n/* harmony import */ var _public_6_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_6_png__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _functions_setTheme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../functions/setTheme */ \"./functions/setTheme.js\");\n/* harmony import */ var _functions_getTheme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../functions/getTheme */ \"./functions/getTheme.js\");\n\nvar _jsxFileName = \"/Users/caiobueno/Developer/psm/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable require-jsdoc */\n\n\n\n // STYLED COMPONENTS SETUP\n\n\n\n\n // FAVICON\n\n\n\n\n\n\n\nconst faviconArray = [_public_1_png__WEBPACK_IMPORTED_MODULE_9___default.a, _public_2_png__WEBPACK_IMPORTED_MODULE_10___default.a, _public_3_png__WEBPACK_IMPORTED_MODULE_11___default.a, _public_4_png__WEBPACK_IMPORTED_MODULE_12___default.a, _public_5_png__WEBPACK_IMPORTED_MODULE_13___default.a, _public_6_png__WEBPACK_IMPORTED_MODULE_14___default.a]; // FUNCTIONS IMPORT\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: theme,\n    1: setTheme\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: favicon,\n    1: setFavicon\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_public_2_png__WEBPACK_IMPORTED_MODULE_10___default.a);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    getTheme();\n    setInterval(animateFavicon, 500);\n  }, []);\n\n  const handleThemeChange = () => {\n    Object(_functions_setTheme__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(!theme);\n    setTheme(!theme);\n  };\n\n  const getTheme = () => {\n    const theme = Object(_functions_getTheme__WEBPACK_IMPORTED_MODULE_16__[\"default\"])();\n    const parsedTheme = JSON.parse(theme);\n    setTheme(parsedTheme);\n  };\n\n  let i = 0;\n\n  const animateFavicon = () => {\n    if (i > faviconArray.length) {\n      setFavicon(faviconArray[0]);\n      i = 0;\n    } else {\n      setFavicon(faviconArray[i + 1]);\n      i = i + 1;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_socks__WEBPACK_IMPORTED_MODULE_3__[\"BreakpointProvider\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: favicon,\n        type: \"image/gif\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"ThemeProvider\"], {\n      theme: theme ? _theme_dark__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _theme_light__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n        setTheme: handleThemeChange,\n        theme: theme\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiZmF2aWNvbkFycmF5IiwiZmF2aWNvbjAiLCJmYXZpY29uMSIsImZhdmljb24yIiwiZmF2aWNvbjMiLCJmYXZpY29uNCIsImZhdmljb242IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJmYXZpY29uIiwic2V0RmF2aWNvbiIsInVzZUVmZmVjdCIsImdldFRoZW1lIiwic2V0SW50ZXJ2YWwiLCJhbmltYXRlRmF2aWNvbiIsImhhbmRsZVRoZW1lQ2hhbmdlIiwic2V0VGhlbWVGdW5jdGlvbiIsImdldFRoZW1lRnVuY3Rpb24iLCJwYXJzZWRUaGVtZSIsIkpTT04iLCJwYXJzZSIsImkiLCJsZW5ndGgiLCJkYXJrVGhlbWUiLCJsaWdodFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFlBQVksR0FBRyxDQUFDQyxvREFBRCxFQUFXQyxxREFBWCxFQUFxQkMscURBQXJCLEVBQStCQyxxREFBL0IsRUFBeUNDLHFEQUF6QyxFQUFtREMscURBQW5ELENBQXJCLEMsQ0FFQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQ1YscURBQUQsQ0FBdEM7QUFFQWEseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFlBQVE7QUFDUkMsZUFBVyxDQUFDQyxjQUFELEVBQWlCLEdBQWpCLENBQVg7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUOztBQUtBLFFBQU1DLGlCQUFpQixHQUFHLE1BQU07QUFDOUJDLHdFQUFnQixDQUFDLENBQUNWLEtBQUYsQ0FBaEI7QUFDQUMsWUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNELEdBSEQ7O0FBS0EsUUFBTU0sUUFBUSxHQUFHLE1BQU07QUFDckIsVUFBTU4sS0FBSyxHQUFHVyxvRUFBZ0IsRUFBOUI7QUFDQSxVQUFNQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXZCxLQUFYLENBQXBCO0FBQ0FDLFlBQVEsQ0FBQ1csV0FBRCxDQUFSO0FBQ0QsR0FKRDs7QUFNQSxNQUFJRyxDQUFDLEdBQUcsQ0FBUjs7QUFFQSxRQUFNUCxjQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFJTyxDQUFDLEdBQUd6QixZQUFZLENBQUMwQixNQUFyQixFQUE2QjtBQUMzQlosZ0JBQVUsQ0FBQ2QsWUFBWSxDQUFDLENBQUQsQ0FBYixDQUFWO0FBQ0F5QixPQUFDLEdBQUcsQ0FBSjtBQUNELEtBSEQsTUFJSztBQUNIWCxnQkFBVSxDQUFDZCxZQUFZLENBQUN5QixDQUFDLEdBQUcsQ0FBTCxDQUFiLENBQVY7QUFDQUEsT0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBUjtBQUNEO0FBQ0YsR0FURDs7QUFXQSxzQkFFRSxxRUFBQyw4REFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUVaLE9BQXZCO0FBQWdDLFlBQUksRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsK0RBQUQ7QUFBZSxXQUFLLEVBQUVILEtBQUssR0FBR2lCLG1EQUFILEdBQWVDLG9EQUExQztBQUFBLDhCQUNFLHFFQUFDLFNBQUQsa0NBQWVuQixTQUFmO0FBQTBCLGdCQUFRLEVBQUVVLGlCQUFwQztBQUF1RCxhQUFLLEVBQUVUO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQWFEOztBQUVjSCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNvY2tzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbi8vIFNUWUxFRCBDT01QT05FTlRTIFNFVFVQXG5pbXBvcnQgZGFya1RoZW1lIGZyb20gJy4uL3RoZW1lL2RhcmsnO1xuaW1wb3J0IGxpZ2h0VGhlbWUgZnJvbSAnLi4vdGhlbWUvbGlnaHQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2dsb2JhbFN0eWxlcyc7XG5cbi8vIEZBVklDT05cbmltcG9ydCBmYXZpY29uMCBmcm9tICcuLi9wdWJsaWMvMS5wbmcnO1xuaW1wb3J0IGZhdmljb24xIGZyb20gJy4uL3B1YmxpYy8yLnBuZyc7XG5pbXBvcnQgZmF2aWNvbjIgZnJvbSAnLi4vcHVibGljLzMucG5nJztcbmltcG9ydCBmYXZpY29uMyBmcm9tICcuLi9wdWJsaWMvNC5wbmcnO1xuaW1wb3J0IGZhdmljb240IGZyb20gJy4uL3B1YmxpYy81LnBuZyc7XG5pbXBvcnQgZmF2aWNvbjYgZnJvbSAnLi4vcHVibGljLzYucG5nJztcbmNvbnN0IGZhdmljb25BcnJheSA9IFtmYXZpY29uMCwgZmF2aWNvbjEsIGZhdmljb24yLCBmYXZpY29uMywgZmF2aWNvbjQsIGZhdmljb242XTtcblxuLy8gRlVOQ1RJT05TIElNUE9SVFxuaW1wb3J0IHNldFRoZW1lRnVuY3Rpb24gZnJvbSAnLi4vZnVuY3Rpb25zL3NldFRoZW1lJztcbmltcG9ydCBnZXRUaGVtZUZ1bmN0aW9uIGZyb20gJy4uL2Z1bmN0aW9ucy9nZXRUaGVtZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZmF2aWNvbiwgc2V0RmF2aWNvbl0gPSB1c2VTdGF0ZShmYXZpY29uMSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUaGVtZSgpO1xuICAgIHNldEludGVydmFsKGFuaW1hdGVGYXZpY29uLCA1MDApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlVGhlbWVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0VGhlbWVGdW5jdGlvbighdGhlbWUpO1xuICAgIHNldFRoZW1lKCF0aGVtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhlbWUgPSBnZXRUaGVtZUZ1bmN0aW9uKCk7XG4gICAgY29uc3QgcGFyc2VkVGhlbWUgPSBKU09OLnBhcnNlKHRoZW1lKTtcbiAgICBzZXRUaGVtZShwYXJzZWRUaGVtZSk7XG4gIH07XG5cbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGFuaW1hdGVGYXZpY29uID0gKCkgPT4ge1xuICAgIGlmIChpID4gZmF2aWNvbkFycmF5Lmxlbmd0aCkge1xuICAgICAgc2V0RmF2aWNvbihmYXZpY29uQXJyYXlbMF0pO1xuICAgICAgaSA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0RmF2aWNvbihmYXZpY29uQXJyYXlbaSArIDFdKTtcbiAgICAgIGkgPSBpICsgMTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxCcmVha3BvaW50UHJvdmlkZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2Zhdmljb259IHR5cGU9XCJpbWFnZS9naWZcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lID8gZGFya1RoZW1lIDogbGlnaHRUaGVtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gc2V0VGhlbWU9e2hhbmRsZVRoZW1lQ2hhbmdlfSB0aGVtZT17dGhlbWV9IC8+XG4gICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0JyZWFrcG9pbnRQcm92aWRlcj5cbiAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/1.png":
/*!**********************!*\
  !*** ./public/1.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/1-12569e823cd451acab778367ac1fc4af.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvMS5wbmc/N2U4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy8xLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8xLTEyNTY5ZTgyM2NkNDUxYWNhYjc3ODM2N2FjMWZjNGFmLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/1.png\n");

/***/ }),

/***/ "./public/2.png":
/*!**********************!*\
  !*** ./public/2.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/2-0574be60edf8e4f733e10a95eb8cd658.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvMi5wbmc/MTIyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy8yLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8yLTA1NzRiZTYwZWRmOGU0ZjczM2UxMGE5NWViOGNkNjU4LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/2.png\n");

/***/ }),

/***/ "./public/3.png":
/*!**********************!*\
  !*** ./public/3.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/3-877e89a62ab19333f579c95f3b43d438.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvMy5wbmc/OGVkZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy8zLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8zLTg3N2U4OWE2MmFiMTkzMzNmNTc5Yzk1ZjNiNDNkNDM4LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/3.png\n");

/***/ }),

/***/ "./public/4.png":
/*!**********************!*\
  !*** ./public/4.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/4-fd14f98b9bd8400439c658ea2ead109c.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvNC5wbmc/MDYwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy80LnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy80LWZkMTRmOThiOWJkODQwMDQzOWM2NThlYTJlYWQxMDljLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/4.png\n");

/***/ }),

/***/ "./public/5.png":
/*!**********************!*\
  !*** ./public/5.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/5-7b7e30e54e0033b7501218b8b830a629.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvNS5wbmc/OWI0NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy81LnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy81LTdiN2UzMGU1NGUwMDMzYjc1MDEyMThiOGI4MzBhNjI5LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/5.png\n");

/***/ }),

/***/ "./public/6.png":
/*!**********************!*\
  !*** ./public/6.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/6-b786d2d9f7b449639415fd1b9f2175d2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvNi5wbmc/NTMwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3B1YmxpYy82LnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy82LWI3ODZkMmQ5ZjdiNDQ5NjM5NDE1ZmQxYjlmMjE3NWQyLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/6.png\n");

/***/ }),

/***/ "./public/darkCursor.png":
/*!*******************************!*\
  !*** ./public/darkCursor.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgBrZTvTcMwEMXfOWlBBaGyQTsB3QA2ADYoIzBB2wkoE9ANKCOwARskfORTIpEUUTs+fOF/VCVV45/kRLHiu8vl3iNsgDnp6/fOOAzUKROPwBjIPgFP7hpbtg9h93CBbTAmvyh0lhQ659pl8siss3H1vPpXmV7dEOPeVdFvSixVE9Ed67fJ3236DZZPLDDFDijQnDq965+AUrpkQwuYisswPFqWAaUf341vQarC9TAoqwON0Z59o9WL+3w6hycU0Zki8ACeoAAnJDMFjyh4xvUQMTwh0lTMok8/WItnZQt+hC+IlyTOYk03co/N+q0NRnEQ9oZudI5TJ5srtIStncm9/MuiQQt7ix1xpjLb6I9av04bfbCytM7mtdlE24VZRVsES8SMq+epLrDo/FOaNPp6O5Yxk8no7B0snOWl1XMf/pX5NAJdeXIAAAAASUVORK5CYII=\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGFya0N1cnNvci5wbmc/Y2RhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUMiLCJmaWxlIjoiLi9wdWJsaWMvZGFya0N1cnNvci5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZFU1VSQlZIZ0JyWlR2VGNNd0VNWGZPV2xCQmFHeVFUc0IzUUEyQURZb0l6QkIyd2tvRTlBTktDT3dBUnNrZk9SVElwRVVVVHMrZk9GL1ZDVlY0NS9rUkxIaXU4dmwzaU5zZ0RucDYvZk9PQXpVS1JPUHdCaklQZ0ZQN2hwYnRnOWg5M0NCYlRBbXZ5aDBsaFE2NTlwbDhzaXNzM0gxdlBwWG1WN2RFT1BlVmRGdlNpeFZFOUVkNjdmSjMyMzZEWlpQTERERkRpalFuRHE5NjUrQVVycGtRd3VZaXNzd1BGcVdBYVVmMzQxdlFhckM5VEFvcXdPTjBaNTlvOVdMKzN3Nmh5Y1UwWmtpOEFDZW9BQW5KRE1GanloNHh2VVFNVHdoMGxUTW9rOC9XSXRuWlF0K2hDK0lseVRPWWswM2NvL04rcTBOUm5FUTlvWnVkSTVUSjVzcnRJU3RuY205L011aVFRdDdpeDF4cGpMYjZJOWF2MDRiZmJDeXRNN210ZGxFMjRWWlJWc0VTOFNNcStlcExyRG8vRk9hTlBwNk81WXhrOG5vN0Iwc25PV2wxWE1mL3BYNU5BSmRlWElBQUFBQVNVVk9SSzVDWUlJPVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/darkCursor.png\n");

/***/ }),

/***/ "./public/lightCursor.png":
/*!********************************!*\
  !*** ./public/lightCursor.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFwSURBVHgBrZS/TsJQFMa/c4GIcalS9poI1ElHNrsKA6xu+BZuhiewPoE8Ag74Z4M3wK0UE8to0iYshjDY472NQfmjBNrfcm9Pe7/e3Pudj7ACw7C0nd29BkI+A+EUIEPVmdEnsBcS7ofOQ2vVWlosFIvndUqJOzA0/I8XgpuLwqnfD6Xj6g0R2XKaxXo0AtVzegGBP+wtCRbNyrX84AobItdYer6oSdHnmaBpVhrylY3tKecOjl6C4NWJzrBkVt/kYCAOhPF08nGY+t5dA/HJpjPpd8EsakiKkCzBYANJQXQiKDJuYhgCCSMF2UNSEPoCLPpIipBHAoJ7SAgZGm0xnWRaypSIj6eCQnhee8yfdImYqORRY9TLQeA6er60L6dlbIEMiKbrdOyZYCTqu095vaR628ImMN8OBp1ZSs3loe+73bxeGMl/KrNra7Y15jC8cN1He778Byo0mESNQzZ+ukl6lpTNuCeTpeV53aXL/AJtNH7c7mAUxQAAAABJRU5ErkJggg==\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbGlnaHRDdXJzb3IucG5nPzFlMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDIiwiZmlsZSI6Ii4vcHVibGljL2xpZ2h0Q3Vyc29yLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBRndTVVJCVkhnQnJaUy9Uc0pRRk1hL2M0R0ljYWxTOXBvSTFFbEhOcnNLQTZ4dStCWnVoaWV3UG9FOEFnNzRaNE0zd0swVUU4dG8waVlzaGpEWTQ3Mk5RZm1qQk5yZmNtOVBlNy9lM1B1ZGo3QUN3N0MwbmQyOUJrSStBK0VVSUVQVm1kRW5zQmNTN29mT1EydlZXbG9zRkl2bmRVcUpPekEwL0k4WGdwdUx3cW5mRDZYajZnMFIyWEtheFhvMEF0VnplZ0dCUCt3dENSYk55clg4NEFvYkl0ZFllcjZvU2RIbm1hQnBWaHJ5bFkzdEtlY09qbDZDNE5XSnpyQmtWdC9rWUNBT2hQRjA4bkdZK3Q1ZEEvSEpwalBwZDhFc2FraUtrQ3pCWUFOSlFYUWlLREp1WWhnQ0NTTUYyVU5TRVBvQ0xQcElpcEJIQW9KN1NBZ1pHbTB4bldSYXlwU0lqNmVDUW5oZWU4eWZkSW1ZcU9SUlk5VExRZUE2ZXI2MEw2ZGxiSUVNaUticmRPeVpZQ1RxdTA5NXZhUjYyOEltTU44T0JwMVpTczNsb2UrNzNieGVHTWwvS3JOcmE3WTE1akM4Y04xSGU3NzhCeW8wbUVTTlF6Wit1a2w2bHBUTnVDZVRwZVY1M2FYTC9BSnROSDdjN21BVXhRQUFBQUJKUlU1RXJrSmdnZz09XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/lightCursor.png\n");

/***/ }),

/***/ "./styles/globalStyles.js":
/*!********************************!*\
  !*** ./styles/globalStyles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  body {\n    cursor: ${props => props.theme.cursor};\n    background-color: ${props => props.theme.primary};\n    overflow-x: hidden;\n  }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsU3R5bGVzLmpzP2JkMDEiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJjdXJzb3IiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0EsY0FBZUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBTztBQUM1Qyx3QkFBeUJGLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlFLE9BQVE7QUFDdkQ7QUFDQTtBQUNBLENBTkE7QUFRZUwsMEVBQWYiLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsU3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBib2R5IHtcbiAgICBjdXJzb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jdXJzb3J9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5wcmltYXJ5fTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/globalStyles.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ "./theme/dark.js":
/*!***********************!*\
  !*** ./theme/dark.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_darkCursor_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/darkCursor.png */ \"./public/darkCursor.png\");\n/* harmony import */ var _public_darkCursor_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_darkCursor_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_lightCursor_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/lightCursor.png */ \"./public/lightCursor.png\");\n/* harmony import */ var _public_lightCursor_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_lightCursor_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst dark = {\n  primary: '#17182F',\n  secundary: '#FDFBF5',\n  timeColor: '#FDFBF5',\n  cursor: `url(${_public_darkCursor_png__WEBPACK_IMPORTED_MODULE_0___default.a}) 6 6, auto`,\n  invertedCursor: `url(${_public_lightCursor_png__WEBPACK_IMPORTED_MODULE_1___default.a}) 6 6, auto`\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dark);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS9kYXJrLmpzP2I1MTgiXSwibmFtZXMiOlsiZGFyayIsInByaW1hcnkiLCJzZWN1bmRhcnkiLCJ0aW1lQ29sb3IiLCJjdXJzb3IiLCJkYXJrQ3Vyc29yIiwiaW52ZXJ0ZWRDdXJzb3IiLCJsaWdodEN1cnNvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUc7QUFDWEMsU0FBTyxFQUFFLFNBREU7QUFFWEMsV0FBUyxFQUFFLFNBRkE7QUFHWEMsV0FBUyxFQUFFLFNBSEE7QUFJWEMsUUFBTSxFQUFHLE9BQU1DLDZEQUFXLGFBSmY7QUFLWEMsZ0JBQWMsRUFBRyxPQUFNQyw4REFBWTtBQUx4QixDQUFiO0FBUWVQLG1FQUFmIiwiZmlsZSI6Ii4vdGhlbWUvZGFyay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXJrQ3Vyc29yIGZyb20gJy4uL3B1YmxpYy9kYXJrQ3Vyc29yLnBuZyc7XG5pbXBvcnQgbGlnaHRDdXJzb3IgZnJvbSAnLi4vcHVibGljL2xpZ2h0Q3Vyc29yLnBuZyc7XG5cbmNvbnN0IGRhcmsgPSB7XG4gIHByaW1hcnk6ICcjMTcxODJGJyxcbiAgc2VjdW5kYXJ5OiAnI0ZERkJGNScsXG4gIHRpbWVDb2xvcjogJyNGREZCRjUnLFxuICBjdXJzb3I6IGB1cmwoJHtkYXJrQ3Vyc29yfSkgNiA2LCBhdXRvYCxcbiAgaW52ZXJ0ZWRDdXJzb3I6IGB1cmwoJHtsaWdodEN1cnNvcn0pIDYgNiwgYXV0b2AsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXJrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme/dark.js\n");

/***/ }),

/***/ "./theme/light.js":
/*!************************!*\
  !*** ./theme/light.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_lightCursor_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/lightCursor.png */ \"./public/lightCursor.png\");\n/* harmony import */ var _public_lightCursor_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_lightCursor_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_darkCursor_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/darkCursor.png */ \"./public/darkCursor.png\");\n/* harmony import */ var _public_darkCursor_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_darkCursor_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst light = {\n  primary: '#FDFBF5',\n  secundary: '#17182F',\n  timeColor: '#000000',\n  cursor: `url(${_public_lightCursor_png__WEBPACK_IMPORTED_MODULE_0___default.a}) 6 6, auto`,\n  invertedCursor: `url(${_public_darkCursor_png__WEBPACK_IMPORTED_MODULE_1___default.a}) 6 6, auto`\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (light);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS9saWdodC5qcz9iNWQzIl0sIm5hbWVzIjpbImxpZ2h0IiwicHJpbWFyeSIsInNlY3VuZGFyeSIsInRpbWVDb2xvciIsImN1cnNvciIsImxpZ2h0Q3Vyc29yIiwiaW52ZXJ0ZWRDdXJzb3IiLCJkYXJrQ3Vyc29yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBRztBQUNaQyxTQUFPLEVBQUUsU0FERztBQUVaQyxXQUFTLEVBQUUsU0FGQztBQUdaQyxXQUFTLEVBQUUsU0FIQztBQUlaQyxRQUFNLEVBQUcsT0FBTUMsOERBQVksYUFKZjtBQUtaQyxnQkFBYyxFQUFHLE9BQU1DLDZEQUFXO0FBTHRCLENBQWQ7QUFRZVAsb0VBQWYiLCJmaWxlIjoiLi90aGVtZS9saWdodC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsaWdodEN1cnNvciBmcm9tICcuLi9wdWJsaWMvbGlnaHRDdXJzb3IucG5nJztcbmltcG9ydCBkYXJrQ3Vyc29yIGZyb20gJy4uL3B1YmxpYy9kYXJrQ3Vyc29yLnBuZyc7XG5cbmNvbnN0IGxpZ2h0ID0ge1xuICBwcmltYXJ5OiAnI0ZERkJGNScsXG4gIHNlY3VuZGFyeTogJyMxNzE4MkYnLFxuICB0aW1lQ29sb3I6ICcjMDAwMDAwJyxcbiAgY3Vyc29yOiBgdXJsKCR7bGlnaHRDdXJzb3J9KSA2IDYsIGF1dG9gLFxuICBpbnZlcnRlZEN1cnNvcjogYHVybCgke2RhcmtDdXJzb3J9KSA2IDYsIGF1dG9gLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./theme/light.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-socks":
/*!******************************!*\
  !*** external "react-socks" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-socks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zb2Nrc1wiP2NmMDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3Qtc29ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zb2Nrc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-socks\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });