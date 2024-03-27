"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _toggleVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleVisible */ "./src/toggleVisible.js");



const menuButton = document.querySelectorAll('.open-menu');
menuButton.forEach(element => {
  element.addEventListener('click', () => {
    (0,_toggleVisible__WEBPACK_IMPORTED_MODULE_2__["default"])(element.nextElementSibling);
  });
});

/***/ }),

/***/ "./src/toggleVisible.js":
/*!******************************!*\
  !*** ./src/toggleVisible.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleVisible)
/* harmony export */ });
function toggleVisible(menu) {
  const menuItems = [...menu.children];
  const check = menuItems.every(item => item.classList.contains('visible'));
  if (check) {
    menuItems.map(item => item.classList.remove('visible'));
  } else {
    menuItems.map(item => item.classList.add('visible'));
  }
}

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXFCO0FBQ0U7QUFDd0I7QUFFL0MsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztBQUMxREYsVUFBVSxDQUFDRyxPQUFPLENBQUVDLE9BQU8sSUFBSztFQUM1QkEsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUN4Q04sMERBQWdCLENBQUNLLE9BQU8sQ0FBQ0Usa0JBQWtCLENBQUM7RUFDNUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1RhLFNBQVNDLGFBQWFBLENBQUNDLElBQUksRUFBRTtFQUN4QyxNQUFNQyxTQUFTLEdBQUcsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLFFBQVEsQ0FBQztFQUNwQyxNQUFNQyxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0csS0FBSyxDQUFFQyxJQUFJLElBQUtBLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDM0UsSUFBSUosS0FBSyxFQUFFO0lBQ1BGLFNBQVMsQ0FBQ08sR0FBRyxDQUFFSCxJQUFJLElBQUtBLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDN0QsQ0FBQyxNQUFNO0lBQ0hSLFNBQVMsQ0FBQ08sR0FBRyxDQUFFSCxJQUFJLElBQUtBLElBQUksQ0FBQ0MsU0FBUyxDQUFDSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDMUQ7QUFDSjs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdG9nZ2xlVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwibm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IHRvZ2dsZVZpc2liaWxpdHkgZnJvbSAnLi90b2dnbGVWaXNpYmxlJztcblxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLW1lbnUnKTtcbm1lbnVCdXR0b24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlVmlzaWJpbGl0eShlbGVtZW50Lm5leHRFbGVtZW50U2libGluZyk7XG4gICAgfSk7XG59KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVWaXNpYmxlKG1lbnUpIHtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBbLi4ubWVudS5jaGlsZHJlbl07XG4gICAgY29uc3QgY2hlY2sgPSBtZW51SXRlbXMuZXZlcnkoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpO1xuICAgIGlmIChjaGVjaykge1xuICAgICAgICBtZW51SXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJykpO1xuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsidG9nZ2xlVmlzaWJpbGl0eSIsIm1lbnVCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0b2dnbGVWaXNpYmxlIiwibWVudSIsIm1lbnVJdGVtcyIsImNoaWxkcmVuIiwiY2hlY2siLCJldmVyeSIsIml0ZW0iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm1hcCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=