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

/***/ "(app-pages-browser)/./components/gameBoard/index.tsx":
/*!****************************************!*\
  !*** ./components/gameBoard/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard/main.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GameBoard() {\n    _s();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    const handleDrop = (event, rowIndex, columnIndex)=>{\n        event.preventDefault();\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        // Update the board state to place the ship\n        const newBoard = [\n            ...board\n        ];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                newBoard[rowIndex][columnIndex + i] = \"ship\";\n            } else {\n                newBoard[rowIndex + i][columnIndex] = \"ship\";\n            }\n        }\n        setBoard(newBoard);\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this),\n                        row.map((cell, columnIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell === \"ship\" ? \"ship-cell\" : \"\"),\n                                onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n                                onDragOver: handleDragOver\n                            }, columnIndex, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, rowIndex, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n} // const coordMe = (rowIndex: number, columnIndex: number) => {\n //     const rowLabel = rowIndex + 1;\n //     const columnLabel = columnLabels[columnIndex];\n //     console.log(`${columnLabel}${rowLabel}`);\n // }\n // <div key={j} className=\"cell\" onClick={() => coordMe(i,j)} ></div>\n_s(GameBoard, \"7/qo8VnofRNtpG+d2vnbVNr5ztA=\");\n_c = GameBoard;\nvar _c;\n$RefreshReg$(_c, \"GameBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ3JCO0FBRUosU0FBU0U7O0lBQ3BCLE1BQU1DLFlBQVk7SUFDbEIsTUFBTUMsZUFBZTtRQUFDO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFdkUsTUFBTUMsYUFBYUMsTUFBTUgsV0FBV0ksSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxJQUFNRixNQUFNSCxXQUFXSSxJQUFJLENBQUM7SUFDL0UsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDSTtJQUVuQyxNQUFNTSxhQUFhLENBQUNDLE9BQXdCQyxVQUFrQkM7UUFDMURGLE1BQU1HLGNBQWM7UUFDcEIsTUFBTUMsV0FBV0MsU0FBU0wsTUFBTU0sWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDckQsTUFBTUMsa0JBQWtCUixNQUFNTSxZQUFZLENBQUNDLE9BQU8sQ0FBQztRQUVuRCwyQ0FBMkM7UUFDM0MsTUFBTUUsV0FBVztlQUFJWjtTQUFNO1FBQzNCLElBQUssSUFBSWEsSUFBSSxHQUFHQSxJQUFJTixVQUFVTSxJQUFLO1lBQy9CLElBQUlGLG9CQUFvQixjQUFjO2dCQUNsQ0MsUUFBUSxDQUFDUixTQUFTLENBQUNDLGNBQWNRLEVBQUUsR0FBRztZQUMxQyxPQUFPO2dCQUNIRCxRQUFRLENBQUNSLFdBQVdTLEVBQUUsQ0FBQ1IsWUFBWSxHQUFHO1lBQzFDO1FBQ0o7UUFDQUosU0FBU1c7SUFDYjtJQUVBLE1BQU1FLGlCQUFpQixDQUFDWDtRQUNwQkEsTUFBTUcsY0FBYztJQUN4QjtJQUVBLHFCQUNJLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O29CQUNkckIsYUFBYUksR0FBRyxDQUFDLENBQUNrQixPQUFPSixrQkFDdEIsOERBQUNFOzRCQUFZQyxXQUFVO3NDQUFTQzsyQkFBdEJKOzs7Ozs7Ozs7OztZQUdqQmIsTUFBTUQsR0FBRyxDQUFDLENBQUNtQixLQUFLZCx5QkFDYiw4REFBQ1c7b0JBQW1CQyxXQUFVOztzQ0FDMUIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFTWixXQUFXOzs7Ozs7d0JBQ2xDYyxJQUFJbkIsR0FBRyxDQUFDLENBQUNvQixNQUFNZCw0QkFDWiw4REFBQ1U7Z0NBRUdDLFdBQVcsUUFBMkMsT0FBbkNHLFNBQVMsU0FBUyxjQUFjO2dDQUNuREMsUUFBUSxDQUFDakIsUUFBVUQsV0FBV0MsT0FBT0MsVUFBVUM7Z0NBQy9DZ0IsWUFBWVA7K0JBSFBUOzs7Ozs7bUJBSlBEOzs7Ozs7Ozs7OztBQWMxQixFQUVBLCtEQUErRDtDQUN2RCxxQ0FBcUM7Q0FDckMscURBQXFEO0NBQ3JELGdEQUFnRDtDQUNoRCxJQUFJO0NBR0oscUVBQXFFO0dBNURyRFg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lQm9hcmQvaW5kZXgudHN4PzZmNGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vbWFpbi5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgICBjb25zdCBjb2x1bW5MYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuICAgIGNvbnN0IGVtcHR5Qm9hcmQgPSBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKSk7XG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShlbXB0eUJvYXJkKTtcblxuICAgIGNvbnN0IGhhbmRsZURyb3AgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCwgcm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IHBhcnNlSW50KGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwU2l6ZScpKTtcbiAgICAgICAgY29uc3Qgc2hpcE9yaWVudGF0aW9uID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBPcmllbnRhdGlvbicpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgYm9hcmQgc3RhdGUgdG8gcGxhY2UgdGhlIHNoaXBcbiAgICAgICAgY29uc3QgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIG5ld0JvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleCArIGldID0gJ3NoaXAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdCb2FyZFtyb3dJbmRleCArIGldW2NvbHVtbkluZGV4XSA9ICdzaGlwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRCb2FyZChuZXdCb2FyZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmQtbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5MYWJlbHMubWFwKChsYWJlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93SW5kZXh9IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e3Jvd0luZGV4ICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGNvbHVtbkluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uSW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNlbGwgJHtjZWxsID09PSAnc2hpcCcgPyAnc2hpcC1jZWxsJyA6ICcnfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiBoYW5kbGVEcm9wKGV2ZW50LCByb3dJbmRleCwgY29sdW1uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy8gY29uc3QgY29vcmRNZSA9IChyb3dJbmRleDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCByb3dMYWJlbCA9IHJvd0luZGV4ICsgMTtcbiAgICAgICAgLy8gICAgIGNvbnN0IGNvbHVtbkxhYmVsID0gY29sdW1uTGFiZWxzW2NvbHVtbkluZGV4XTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGAke2NvbHVtbkxhYmVsfSR7cm93TGFiZWx9YCk7XG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIC8vIDxkaXYga2V5PXtqfSBjbGFzc05hbWU9XCJjZWxsXCIgb25DbGljaz17KCkgPT4gY29vcmRNZShpLGopfSA+PC9kaXY+Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHYW1lQm9hcmQiLCJib2FyZFNpemUiLCJjb2x1bW5MYWJlbHMiLCJlbXB0eUJvYXJkIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiYm9hcmQiLCJzZXRCb2FyZCIsImhhbmRsZURyb3AiLCJldmVudCIsInJvd0luZGV4IiwiY29sdW1uSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNoaXBTaXplIiwicGFyc2VJbnQiLCJkYXRhVHJhbnNmZXIiLCJnZXREYXRhIiwic2hpcE9yaWVudGF0aW9uIiwibmV3Qm9hcmQiLCJpIiwiaGFuZGxlRHJhZ092ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInJvdyIsImNlbGwiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard/index.tsx\n"));

/***/ })

});