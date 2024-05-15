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

/***/ "(app-pages-browser)/./components/gameBoard copy/index.tsx":
/*!*********************************************!*\
  !*** ./components/gameBoard copy/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard copy/main.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GameBoard() {\n    _s();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    const handleDrop = (event, rowIndex, columnIndex)=>{\n        event.preventDefault();\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        const newBoard = [\n            ...board\n        ];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                newBoard[rowIndex][columnIndex + i] = \"ship\";\n            } else {\n                newBoard[rowIndex + i][columnIndex] = \"ship\";\n            }\n        }\n        setBoard(newBoard);\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this),\n                        row.map((cell, columnIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell === \"ship\" ? \"ship-cell\" : \"\"),\n                                onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n                                onDragOver: handleDragOver\n                            }, columnIndex, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, rowIndex, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shipsDeploying-main-container\",\n                onDrop: handleDrop,\n                onDragOver: handleDragOver,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ships\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Dostępne statki\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ship-row\",\n                            children: [\n                                Array(ships[4]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: 4\n                                }, void 0, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 43\n                                }, this)),\n                                Array(ships[3]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: 3\n                                }, void 0, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 43\n                                }, this)),\n                                Array(ships[2]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: 2\n                                }, void 0, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 43\n                                }, this)),\n                                Array(ships[1]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: 1\n                                }, void 0, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 43\n                                }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(GameBoard, \"7/qo8VnofRNtpG+d2vnbVNr5ztA=\");\n_c = GameBoard;\nvar _c;\n$RefreshReg$(_c, \"GameBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDb0Q7QUFDakM7QUFFSixTQUFTRTs7SUFDcEIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxlQUFlO1FBQUM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUV2RSxNQUFNQyxhQUFhQyxNQUFNSCxXQUFXSSxJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLElBQU1GLE1BQU1ILFdBQVdJLElBQUksQ0FBQztJQUMvRSxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUNJO0lBRW5DLE1BQU1NLGFBQWEsQ0FBQ0MsT0FBd0JDLFVBQWtCQztRQUMxREYsTUFBTUcsY0FBYztRQUNwQixNQUFNQyxXQUFXQyxTQUFTTCxNQUFNTSxZQUFZLENBQUNDLE9BQU8sQ0FBQztRQUNyRCxNQUFNQyxrQkFBa0JSLE1BQU1NLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBR25ELE1BQU1FLFdBQVc7ZUFBSVo7U0FBTTtRQUMzQixJQUFLLElBQUlhLElBQUksR0FBR0EsSUFBSU4sVUFBVU0sSUFBSztZQUMvQixJQUFJRixvQkFBb0IsY0FBYztnQkFDbENDLFFBQVEsQ0FBQ1IsU0FBUyxDQUFDQyxjQUFjUSxFQUFFLEdBQUc7WUFDMUMsT0FBTztnQkFDSEQsUUFBUSxDQUFDUixXQUFXUyxFQUFFLENBQUNSLFlBQVksR0FBRztZQUMxQztRQUNKO1FBQ0FKLFNBQVNXO0lBQ2I7SUFFQSxNQUFNRSxpQkFBaUIsQ0FBQ1g7UUFDcEJBLE1BQU1HLGNBQWM7SUFDeEI7SUFFQSxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztvQkFDZHJCLGFBQWFJLEdBQUcsQ0FBQyxDQUFDa0IsT0FBT0osa0JBQ3RCLDhEQUFDRTs0QkFBWUMsV0FBVTtzQ0FBU0M7MkJBQXRCSjs7Ozs7Ozs7Ozs7WUFHakJiLE1BQU1ELEdBQUcsQ0FBQyxDQUFDbUIsS0FBS2QseUJBQ2IsOERBQUNXO29CQUFtQkMsV0FBVTs7c0NBQzFCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBU1osV0FBVzs7Ozs7O3dCQUNsQ2MsSUFBSW5CLEdBQUcsQ0FBQyxDQUFDb0IsTUFBTWQsNEJBQ1osOERBQUNVO2dDQUVHQyxXQUFXLFFBQTJDLE9BQW5DRyxTQUFTLFNBQVMsY0FBYztnQ0FDbkRDLFFBQVEsQ0FBQ2pCLFFBQVVELFdBQVdDLE9BQU9DLFVBQVVDO2dDQUMvQ2dCLFlBQVlQOytCQUhQVDs7Ozs7O21CQUpQRDs7Ozs7MEJBYTFCLDhEQUFDVztnQkFBSUMsV0FBVTtnQkFBZ0NJLFFBQVFsQjtnQkFBWW1CLFlBQVlQOzBCQUNuRSw0RUFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDTTtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDUDs0QkFBSUMsV0FBVTs7Z0NBQ1ZuQixNQUFNMEIsS0FBSyxDQUFDLEVBQUUsRUFBRXpCLElBQUksZUFBQyw4REFBQzBCO29DQUFLQyxNQUFNOzs7Ozs7Z0NBQ2pDNUIsTUFBTTBCLEtBQUssQ0FBQyxFQUFFLEVBQUV6QixJQUFJLGVBQUMsOERBQUMwQjtvQ0FBS0MsTUFBTTs7Ozs7O2dDQUNqQzVCLE1BQU0wQixLQUFLLENBQUMsRUFBRSxFQUFFekIsSUFBSSxlQUFDLDhEQUFDMEI7b0NBQUtDLE1BQU07Ozs7OztnQ0FDakM1QixNQUFNMEIsS0FBSyxDQUFDLEVBQUUsRUFBRXpCLElBQUksZUFBQyw4REFBQzBCO29DQUFLQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RDtHQS9Ed0JoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWVCb2FyZCBjb3B5L2luZGV4LnRzeD82YmExIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL21haW4uY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmRTaXplID0gMTA7XG4gICAgY29uc3QgY29sdW1uTGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbiAgICBjb25zdCBlbXB0eUJvYXJkID0gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkpO1xuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoZW1wdHlCb2FyZCk7XG5cbiAgICBjb25zdCBoYW5kbGVEcm9wID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQsIHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2hpcFNpemUgPSBwYXJzZUludChldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcFNpemUnKSk7XG4gICAgICAgIGNvbnN0IHNoaXBPcmllbnRhdGlvbiA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwT3JpZW50YXRpb24nKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIG5ld0JvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleCArIGldID0gJ3NoaXAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdCb2FyZFtyb3dJbmRleCArIGldW2NvbHVtbkluZGV4XSA9ICdzaGlwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRCb2FyZChuZXdCb2FyZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmQtbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5MYWJlbHMubWFwKChsYWJlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93SW5kZXh9IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e3Jvd0luZGV4ICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGNvbHVtbkluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uSW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNlbGwgJHtjZWxsID09PSAnc2hpcCcgPyAnc2hpcC1jZWxsJyA6ICcnfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiBoYW5kbGVEcm9wKGV2ZW50LCByb3dJbmRleCwgY29sdW1uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuPGRpdiBjbGFzc05hbWU9XCJzaGlwc0RlcGxveWluZy1tYWluLWNvbnRhaW5lclwiIG9uRHJvcD17aGFuZGxlRHJvcH0gb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9PiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHNcIj5cbiAgICAgICAgICAgICAgICA8aDI+RG9zdMSZcG5lIHN0YXRraTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbNF0pLmZpbGwoPFNoaXAgc2l6ZT17NH0gLz4pfVxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbM10pLmZpbGwoPFNoaXAgc2l6ZT17M30gLz4pfVxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbMl0pLmZpbGwoPFNoaXAgc2l6ZT17Mn0gLz4pfVxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbMV0pLmZpbGwoPFNoaXAgc2l6ZT17MX0gLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR2FtZUJvYXJkIiwiYm9hcmRTaXplIiwiY29sdW1uTGFiZWxzIiwiZW1wdHlCb2FyZCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImJvYXJkIiwic2V0Qm9hcmQiLCJoYW5kbGVEcm9wIiwiZXZlbnQiLCJyb3dJbmRleCIsImNvbHVtbkluZGV4IiwicHJldmVudERlZmF1bHQiLCJzaGlwU2l6ZSIsInBhcnNlSW50IiwiZGF0YVRyYW5zZmVyIiwiZ2V0RGF0YSIsInNoaXBPcmllbnRhdGlvbiIsIm5ld0JvYXJkIiwiaSIsImhhbmRsZURyYWdPdmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJyb3ciLCJjZWxsIiwib25Ecm9wIiwib25EcmFnT3ZlciIsImgyIiwic2hpcHMiLCJTaGlwIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard copy/index.tsx\n"));

/***/ })

});