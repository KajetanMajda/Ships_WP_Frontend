"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/shipsDeploying/index.tsx":
/*!*********************************************!*\
  !*** ./components/shipsDeploying/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShipsDeploying; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/shipsDeploying/main.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Ship = (param)=>{\n    let { size } = param;\n    _s();\n    const [isVertical, setIsVertical] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOrientation = ()=>{\n        setIsVertical(!isVertical);\n    };\n    const handleDragStart = (event)=>{\n        event.dataTransfer.setData(\"shipSize\", size.toString());\n        event.dataTransfer.setData(\"shipOrientation\", isVertical ? \"vertical\" : \"horizontal\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ship \".concat(isVertical ? \"vertical\" : \"\"),\n        onClick: toggleOrientation,\n        draggable: true,\n        onDragStart: handleDragStart,\n        children: Array(size).fill(null).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mast\"\n            }, i, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Ship, \"iCcvOSkc8yP6hLUTInqXgS/NHaA=\");\n_c = Ship;\nfunction ShipsDeploying() {\n    _s1();\n    const [ships, setShips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        4: 1,\n        3: 2,\n        2: 3,\n        1: 4\n    });\n    const handleDrop = (event)=>{\n        event.preventDefault();\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        setShips((prevShips)=>({\n                ...prevShips,\n                [shipSize]: prevShips[shipSize] - 1\n            }));\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shipsDeploying-main-container\",\n        onDrop: handleDrop,\n        onDragOver: handleDragOver,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"ships\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Dostępne statki\"\n                }, void 0, false, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ship-row\",\n                    children: [\n                        Array(ships[4]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                            size: 4\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 43\n                        }, this)),\n                        Array(ships[3]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                            size: 3\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 43\n                        }, this)),\n                        Array(ships[2]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                            size: 2\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 43\n                        }, this)),\n                        Array(ships[1]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                            size: 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 43\n                        }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/shipsDeploying/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s1(ShipsDeploying, \"QJIV8ZTklhOuhvmByFoLd6XQVoA=\");\n_c1 = ShipsDeploying;\nvar _c, _c1;\n$RefreshReg$(_c, \"Ship\");\n$RefreshReg$(_c1, \"ShipsDeploying\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hpcHNEZXBsb3lpbmcvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFDckI7QUFNbkIsTUFBTUUsT0FBNEI7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNSyxvQkFBb0I7UUFDdEJELGNBQWMsQ0FBQ0Q7SUFDbkI7SUFFQSxNQUFNRyxrQkFBa0IsQ0FBQ0M7UUFDckJBLE1BQU1DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVlQLEtBQUtRLFFBQVE7UUFDcERILE1BQU1DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQk4sYUFBYSxhQUFhO0lBQzVFO0lBRUEscUJBQ0ksOERBQUNRO1FBQ0dDLFdBQVcsUUFBcUMsT0FBN0JULGFBQWEsYUFBYTtRQUM3Q1UsU0FBU1I7UUFDVFMsU0FBUztRQUNUQyxhQUFhVDtrQkFFWlUsTUFBTWQsTUFBTWUsSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDNUIsOERBQUNUO2dCQUFZQyxXQUFVO2VBQWJROzs7Ozs7Ozs7O0FBSTFCO0dBeEJNbkI7S0FBQUE7QUEwQlMsU0FBU29COztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3ZCLCtDQUFRQSxDQUFDO1FBQy9CLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7SUFDUDtJQUVBLE1BQU13QixhQUFhLENBQUNqQjtRQUNoQkEsTUFBTWtCLGNBQWM7UUFDcEIsTUFBTUMsV0FBV0MsU0FBU3BCLE1BQU1DLFlBQVksQ0FBQ29CLE9BQU8sQ0FBQztRQUNyREwsU0FBU00sQ0FBQUEsWUFBYztnQkFDbkIsR0FBR0EsU0FBUztnQkFDWixDQUFDSCxTQUFTLEVBQUVHLFNBQVMsQ0FBQ0gsU0FBUyxHQUFHO1lBQ3RDO0lBQ0o7SUFFQSxNQUFNSSxpQkFBaUIsQ0FBQ3ZCO1FBQ3BCQSxNQUFNa0IsY0FBYztJQUN4QjtJQUVBLHFCQUNJLDhEQUFDZDtRQUFJQyxXQUFVO1FBQWdDbUIsUUFBUVA7UUFBWVEsWUFBWUY7a0JBQzNFLDRFQUFDbkI7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNxQjs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDdEI7b0JBQUlDLFdBQVU7O3dCQUNWSSxNQUFNTSxLQUFLLENBQUMsRUFBRSxFQUFFTCxJQUFJLGVBQUMsOERBQUNoQjs0QkFBS0MsTUFBTTs7Ozs7O3dCQUNqQ2MsTUFBTU0sS0FBSyxDQUFDLEVBQUUsRUFBRUwsSUFBSSxlQUFDLDhEQUFDaEI7NEJBQUtDLE1BQU07Ozs7Ozt3QkFDakNjLE1BQU1NLEtBQUssQ0FBQyxFQUFFLEVBQUVMLElBQUksZUFBQyw4REFBQ2hCOzRCQUFLQyxNQUFNOzs7Ozs7d0JBQ2pDYyxNQUFNTSxLQUFLLENBQUMsRUFBRSxFQUFFTCxJQUFJLGVBQUMsOERBQUNoQjs0QkFBS0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEQ7SUFsQ3dCbUI7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGlwc0RlcGxveWluZy9pbmRleC50c3g/ZmM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9tYWluLmNzcydcblxuaW50ZXJmYWNlIFNoaXBQcm9wcyB7XG4gICAgc2l6ZTogbnVtYmVyO1xufVxuXG5jb25zdCBTaGlwOiBSZWFjdC5GQzxTaGlwUHJvcHM+ID0gKHsgc2l6ZSB9KSA9PiB7XG4gICAgY29uc3QgW2lzVmVydGljYWwsIHNldElzVmVydGljYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldElzVmVydGljYWwoIWlzVmVydGljYWwpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnc2hpcFNpemUnLCBzaXplLnRvU3RyaW5nKCkpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnc2hpcE9yaWVudGF0aW9uJywgaXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hpcCAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJyd9YH0gXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcmllbnRhdGlvbn1cbiAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgICAgPlxuICAgICAgICAgICAge0FycmF5KHNpemUpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1hc3RcIj48L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcHNEZXBsb3lpbmcoKSB7XG4gICAgY29uc3QgW3NoaXBzLCBzZXRTaGlwc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIDQ6IDEsXG4gICAgICAgIDM6IDIsXG4gICAgICAgIDI6IDMsXG4gICAgICAgIDE6IDRcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZURyb3AgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IHBhcnNlSW50KGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwU2l6ZScpKTtcbiAgICAgICAgc2V0U2hpcHMocHJldlNoaXBzID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U2hpcHMsXG4gICAgICAgICAgICBbc2hpcFNpemVdOiBwcmV2U2hpcHNbc2hpcFNpemVdIC0gMVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwc0RlcGxveWluZy1tYWluLWNvbnRhaW5lclwiIG9uRHJvcD17aGFuZGxlRHJvcH0gb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9PiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHNcIj5cbiAgICAgICAgICAgICAgICA8aDI+RG9zdMSZcG5lIHN0YXRraTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbNF0pLmZpbGwoPFNoaXAgc2l6ZT17NH0gLz4pfVxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbM10pLmZpbGwoPFNoaXAgc2l6ZT17M30gLz4pfVxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbMl0pLmZpbGwoPFNoaXAgc2l6ZT17Mn0gLz4pfVxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbMV0pLmZpbGwoPFNoaXAgc2l6ZT17MX0gLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTaGlwIiwic2l6ZSIsImlzVmVydGljYWwiLCJzZXRJc1ZlcnRpY2FsIiwidG9nZ2xlT3JpZW50YXRpb24iLCJoYW5kbGVEcmFnU3RhcnQiLCJldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiU2hpcHNEZXBsb3lpbmciLCJzaGlwcyIsInNldFNoaXBzIiwiaGFuZGxlRHJvcCIsInByZXZlbnREZWZhdWx0Iiwic2hpcFNpemUiLCJwYXJzZUludCIsImdldERhdGEiLCJwcmV2U2hpcHMiLCJoYW5kbGVEcmFnT3ZlciIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shipsDeploying/index.tsx\n"));

/***/ })

});