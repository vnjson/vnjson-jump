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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


vnjs.on('jump', function (pathname) {
  var ctx = this.ctx,
      next = this.next,
      setScene = this.setScene,
      setLabel = this.setLabel,
      config = this.config,
      game = this.game,
      parse = this.parse,
      emit = this.emit,
      fetch = this.fetch;


  function getScene(sceneName, labelName, num) {
    var scenesDir = config.scenesDir;

    fetch(scenesDir + '/' + sceneName + '.json').then(function (r) {
      return r.json();
    }).then(function (data) {
      setScene(sceneName, data, labelName, num);
    });
  }

  function isNum(num) {
    return (/[0-9]/.test(+num)
    );
  };
  function isScene(pathname) {
    var arr = pathname.split('/');
    if (arr.length === 3) {
      return true;
    } else if (arr.length === 2) {

      return !isNum(arr[1]);
    }
  };

  function getName(pathname) {
    /*
      Сделать проверку num
      что бы можно было сделать так
      jump(scene/label/44)
    */
    var pathArr = pathname.split('/');

    var scene = pathArr[0];
    var label = pathArr[1];
    var num = pathArr[2] || 0;
    return { label: label, scene: scene, num: num };
  };

  var obj = getName(pathname);

  if (isScene(pathname)) {
    emit('preload');
    getScene(obj.scene, obj.label, obj.num);
  } else {
    emit('chengelabel');
    setLabel(pathname, ctx.scene[pathname], obj.num);
  }
});

/***/ })
/******/ ]);