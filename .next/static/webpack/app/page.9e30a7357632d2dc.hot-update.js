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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard/main.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GameBoard() {\n    _s();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    // const handleDrop = (event: React.DragEvent, rowIndex: number, columnIndex: number) => {\n    //     event.preventDefault();\n    //     const shipSize = parseInt(event.dataTransfer.getData('shipSize'));\n    //     const shipOrientation = event.dataTransfer.getData('shipOrientation');\n    //     const newBoard = [...board];\n    //     for (let i = 0; i < shipSize; i++) {\n    //         if (shipOrientation === 'horizontal') {\n    //             newBoard[rowIndex][columnIndex + i] = 'ship';\n    //         } else {\n    //             newBoard[rowIndex + i][columnIndex] = 'ship';\n    //         }\n    //     }\n    //     setBoard(newBoard);\n    // };\n    // const handleDrop = (event: React.DragEvent, rowIndex: number, columnIndex: number) => {\n    //     event.preventDefault();\n    //     const shipSize = parseInt(event.dataTransfer.getData('shipSize'));\n    //     const shipOrientation = event.dataTransfer.getData('shipOrientation');\n    //     const newBoard = [...board];\n    //     // Calculate the start position of the ship based on the cursor position\n    //     const startRow = shipOrientation === 'horizontal' ? rowIndex : rowIndex - Math.floor(shipSize / 2);\n    //     const startColumn = shipOrientation === 'horizontal' ? columnIndex - Math.floor(shipSize / 2) : columnIndex;\n    //     for (let i = 0; i < shipSize; i++) {\n    //         if (shipOrientation === 'horizontal') {\n    //             newBoard[startRow][startColumn + i] = 'ship';\n    //         } else {\n    //             newBoard[startRow + i][startColumn] = 'ship';\n    //         }\n    //     }\n    //     setBoard(newBoard);\n    // };\n    // const handleDragOver = (event: React.DragEvent) => {\n    //     event.preventDefault();\n    // };\n    const [previewBoard, setPreviewBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    const handleDragOver = (event, rowIndex, columnIndex)=>{\n        event.preventDefault();\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        // Calculate the start position of the ship based on the cursor position\n        const startRow = shipOrientation === \"horizontal\" ? rowIndex : rowIndex - Math.floor(shipSize / 2);\n        const startColumn = shipOrientation === \"horizontal\" ? columnIndex - Math.floor(shipSize / 2) : columnIndex;\n        // Create a preview of the board with the ship\n        const newPreviewBoard = [\n            ...board\n        ];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                newPreviewBoard[startRow][startColumn + i] = \"preview\";\n            } else {\n                newPreviewBoard[startRow + i][startColumn] = \"preview\";\n            }\n        }\n        setPreviewBoard(newPreviewBoard);\n    };\n    const handleDragLeave = (event)=>{\n        event.preventDefault();\n        // Clear the preview when the ship is dragged off the cell\n        setPreviewBoard(board);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            \"// In your render method, use the previewBoard state to show a preview of the ship\",\n            previewBoard.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        }, this),\n                        row.map((cell, columnIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell === \"ship\" ? \"ship-cell\" : \"\", \" \").concat(cell === \"preview\" ? \"preview-cell\" : \"\"),\n                                onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n                                onDragOver: (event)=>handleDragOver(event, rowIndex, columnIndex),\n                                onDragLeave: handleDragLeave\n                            }, columnIndex, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, rowIndex, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 5\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n} // const coordMe = (rowIndex: number, columnIndex: number) => {\n //     const rowLabel = rowIndex + 1;\n //     const columnLabel = columnLabels[columnIndex];\n //     console.log(`${columnLabel}${rowLabel}`);\n // }\n // <div key={j} className=\"cell\" onClick={() => coordMe(i,j)} ></div>\n_s(GameBoard, \"WqnsMDeLg6MLiQB7Q1Ij2ME42EY=\");\n_c = GameBoard;\nvar _c;\n$RefreshReg$(_c, \"GameBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ3JCO0FBRUosU0FBU0U7O0lBQ3BCLE1BQU1DLFlBQVk7SUFDbEIsTUFBTUMsZUFBZTtRQUFDO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFdkUsTUFBTUMsYUFBYUMsTUFBTUgsV0FBV0ksSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxJQUFNRixNQUFNSCxXQUFXSSxJQUFJLENBQUM7SUFDL0UsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDSTtJQUVuQywwRkFBMEY7SUFDMUYsOEJBQThCO0lBQzlCLHlFQUF5RTtJQUN6RSw2RUFBNkU7SUFDN0UsbUNBQW1DO0lBQ25DLDJDQUEyQztJQUMzQyxrREFBa0Q7SUFDbEQsNERBQTREO0lBQzVELG1CQUFtQjtJQUNuQiw0REFBNEQ7SUFDNUQsWUFBWTtJQUNaLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsS0FBSztJQUVMLDBGQUEwRjtJQUMxRiw4QkFBOEI7SUFDOUIseUVBQXlFO0lBQ3pFLDZFQUE2RTtJQUM3RSxtQ0FBbUM7SUFFbkMsK0VBQStFO0lBQy9FLDBHQUEwRztJQUMxRyxtSEFBbUg7SUFFbkgsMkNBQTJDO0lBQzNDLGtEQUFrRDtJQUNsRCw0REFBNEQ7SUFDNUQsbUJBQW1CO0lBQ25CLDREQUE0RDtJQUM1RCxZQUFZO0lBQ1osUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixLQUFLO0lBRUwsdURBQXVEO0lBQ3ZELDhCQUE4QjtJQUM5QixLQUFLO0lBRUwsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUNJO0lBRXJELE1BQU1RLGlCQUFpQixDQUFDQyxPQUF3QkMsVUFBa0JDO1FBQzlERixNQUFNRyxjQUFjO1FBQ3BCLE1BQU1DLFdBQVdDLFNBQVNMLE1BQU1NLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQ3JELE1BQU1DLGtCQUFrQlIsTUFBTU0sWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFFbkQsd0VBQXdFO1FBQ3hFLE1BQU1FLFdBQVdELG9CQUFvQixlQUFlUCxXQUFXQSxXQUFXUyxLQUFLQyxLQUFLLENBQUNQLFdBQVc7UUFDaEcsTUFBTVEsY0FBY0osb0JBQW9CLGVBQWVOLGNBQWNRLEtBQUtDLEtBQUssQ0FBQ1AsV0FBVyxLQUFLRjtRQUVoRyw4Q0FBOEM7UUFDOUMsTUFBTVcsa0JBQWtCO2VBQUlsQjtTQUFNO1FBQ2xDLElBQUssSUFBSW1CLElBQUksR0FBR0EsSUFBSVYsVUFBVVUsSUFBSztZQUMvQixJQUFJTixvQkFBb0IsY0FBYztnQkFDbENLLGVBQWUsQ0FBQ0osU0FBUyxDQUFDRyxjQUFjRSxFQUFFLEdBQUc7WUFDakQsT0FBTztnQkFDSEQsZUFBZSxDQUFDSixXQUFXSyxFQUFFLENBQUNGLFlBQVksR0FBRztZQUNqRDtRQUNKO1FBQ0FkLGdCQUFnQmU7SUFDcEI7SUFFQSxNQUFNRSxrQkFBa0IsQ0FBQ2Y7UUFDckJBLE1BQU1HLGNBQWM7UUFDcEIsMERBQTBEO1FBQzFETCxnQkFBZ0JIO0lBQ3BCO0lBRUkscUJBQ0ksOERBQUNxQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O29CQUNkM0IsYUFBYUksR0FBRyxDQUFDLENBQUN3QixPQUFPSixrQkFDdEIsOERBQUNFOzRCQUFZQyxXQUFVO3NDQUFTQzsyQkFBdEJKOzs7Ozs7Ozs7OztZQUVaO1lBRWpCakIsYUFBYUgsR0FBRyxDQUFDLENBQUN5QixLQUFLbEIseUJBQ3BCLDhEQUFDZTtvQkFBbUJDLFdBQVU7O3NDQUMxQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQVNoQixXQUFXOzs7Ozs7d0JBQ2xDa0IsSUFBSXpCLEdBQUcsQ0FBQyxDQUFDMEIsTUFBTWxCLDRCQUNaLDhEQUFDYztnQ0FFR0MsV0FBVyxRQUE4Q0csT0FBdENBLFNBQVMsU0FBUyxjQUFjLElBQUcsS0FBNEMsT0FBekNBLFNBQVMsWUFBWSxpQkFBaUI7Z0NBQy9GQyxRQUFRLENBQUNyQixRQUFVc0IsV0FBV3RCLE9BQU9DLFVBQVVDO2dDQUMvQ3FCLFlBQVksQ0FBQ3ZCLFFBQVVELGVBQWVDLE9BQU9DLFVBQVVDO2dDQUN2RHNCLGFBQWFUOytCQUpSYjs7Ozs7O21CQUpQRDs7Ozs7Ozs7Ozs7QUFlZCxFQUVBLCtEQUErRDtDQUN2RCxxQ0FBcUM7Q0FDckMscURBQXFEO0NBQ3JELGdEQUFnRDtDQUNoRCxJQUFJO0NBR0oscUVBQXFFO0dBN0dyRGI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lQm9hcmQvaW5kZXgudHN4PzZmNGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vbWFpbi5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgICBjb25zdCBjb2x1bW5MYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuICAgIGNvbnN0IGVtcHR5Qm9hcmQgPSBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKSk7XG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShlbXB0eUJvYXJkKTtcblxuICAgIC8vIGNvbnN0IGhhbmRsZURyb3AgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCwgcm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBjb25zdCBzaGlwU2l6ZSA9IHBhcnNlSW50KGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwU2l6ZScpKTtcbiAgICAvLyAgICAgY29uc3Qgc2hpcE9yaWVudGF0aW9uID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBPcmllbnRhdGlvbicpO1xuICAgIC8vICAgICBjb25zdCBuZXdCb2FyZCA9IFsuLi5ib2FyZF07XG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemU7IGkrKykge1xuICAgIC8vICAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgLy8gICAgICAgICAgICAgbmV3Qm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4ICsgaV0gPSAnc2hpcCc7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIG5ld0JvYXJkW3Jvd0luZGV4ICsgaV1bY29sdW1uSW5kZXhdID0gJ3NoaXAnO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc3QgaGFuZGxlRHJvcCA9IChldmVudDogUmVhY3QuRHJhZ0V2ZW50LCByb3dJbmRleDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGNvbnN0IHNoaXBTaXplID0gcGFyc2VJbnQoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBTaXplJykpO1xuICAgIC8vICAgICBjb25zdCBzaGlwT3JpZW50YXRpb24gPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcE9yaWVudGF0aW9uJyk7XG4gICAgLy8gICAgIGNvbnN0IG5ld0JvYXJkID0gWy4uLmJvYXJkXTtcbiAgICBcbiAgICAvLyAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgc2hpcCBiYXNlZCBvbiB0aGUgY3Vyc29yIHBvc2l0aW9uXG4gICAgLy8gICAgIGNvbnN0IHN0YXJ0Um93ID0gc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyByb3dJbmRleCA6IHJvd0luZGV4IC0gTWF0aC5mbG9vcihzaGlwU2l6ZSAvIDIpO1xuICAgIC8vICAgICBjb25zdCBzdGFydENvbHVtbiA9IHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gY29sdW1uSW5kZXggLSBNYXRoLmZsb29yKHNoaXBTaXplIC8gMikgOiBjb2x1bW5JbmRleDtcbiAgICBcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgLy8gICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAvLyAgICAgICAgICAgICBuZXdCb2FyZFtzdGFydFJvd11bc3RhcnRDb2x1bW4gKyBpXSA9ICdzaGlwJztcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgbmV3Qm9hcmRbc3RhcnRSb3cgKyBpXVtzdGFydENvbHVtbl0gPSAnc2hpcCc7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xuICAgIC8vIH07XG5cbiAgICAvLyBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChldmVudDogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfTtcblxuICAgIGNvbnN0IFtwcmV2aWV3Qm9hcmQsIHNldFByZXZpZXdCb2FyZF0gPSB1c2VTdGF0ZShlbXB0eUJvYXJkKTtcblxuY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCwgcm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2hpcFNpemUgPSBwYXJzZUludChldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcFNpemUnKSk7XG4gICAgY29uc3Qgc2hpcE9yaWVudGF0aW9uID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBPcmllbnRhdGlvbicpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgc2hpcCBiYXNlZCBvbiB0aGUgY3Vyc29yIHBvc2l0aW9uXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IHJvd0luZGV4IDogcm93SW5kZXggLSBNYXRoLmZsb29yKHNoaXBTaXplIC8gMik7XG4gICAgY29uc3Qgc3RhcnRDb2x1bW4gPSBzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGNvbHVtbkluZGV4IC0gTWF0aC5mbG9vcihzaGlwU2l6ZSAvIDIpIDogY29sdW1uSW5kZXg7XG5cbiAgICAvLyBDcmVhdGUgYSBwcmV2aWV3IG9mIHRoZSBib2FyZCB3aXRoIHRoZSBzaGlwXG4gICAgY29uc3QgbmV3UHJldmlld0JvYXJkID0gWy4uLmJvYXJkXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBuZXdQcmV2aWV3Qm9hcmRbc3RhcnRSb3ddW3N0YXJ0Q29sdW1uICsgaV0gPSAncHJldmlldyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdQcmV2aWV3Qm9hcmRbc3RhcnRSb3cgKyBpXVtzdGFydENvbHVtbl0gPSAncHJldmlldyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UHJldmlld0JvYXJkKG5ld1ByZXZpZXdCb2FyZCk7XG59O1xuXG5jb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gQ2xlYXIgdGhlIHByZXZpZXcgd2hlbiB0aGUgc2hpcCBpcyBkcmFnZ2VkIG9mZiB0aGUgY2VsbFxuICAgIHNldFByZXZpZXdCb2FyZChib2FyZCk7XG59O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmQtbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5MYWJlbHMubWFwKChsYWJlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vIEluIHlvdXIgcmVuZGVyIG1ldGhvZCwgdXNlIHRoZSBwcmV2aWV3Qm9hcmQgc3RhdGUgdG8gc2hvdyBhIHByZXZpZXcgb2YgdGhlIHNoaXBcbntwcmV2aWV3Qm9hcmQubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXG4gICAgPGRpdiBrZXk9e3Jvd0luZGV4fSBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPntyb3dJbmRleCArIDF9PC9kaXY+XG4gICAgICAgIHtyb3cubWFwKChjZWxsLCBjb2x1bW5JbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbkluZGV4fSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjZWxsICR7Y2VsbCA9PT0gJ3NoaXAnID8gJ3NoaXAtY2VsbCcgOiAnJ30gJHtjZWxsID09PSAncHJldmlldycgPyAncHJldmlldy1jZWxsJyA6ICcnfWB9IFxuICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiBoYW5kbGVEcm9wKGV2ZW50LCByb3dJbmRleCwgY29sdW1uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZXZlbnQpID0+IGhhbmRsZURyYWdPdmVyKGV2ZW50LCByb3dJbmRleCwgY29sdW1uSW5kZXgpfVxuICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8vIGNvbnN0IGNvb3JkTWUgPSAocm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3Qgcm93TGFiZWwgPSByb3dJbmRleCArIDE7XG4gICAgICAgIC8vICAgICBjb25zdCBjb2x1bW5MYWJlbCA9IGNvbHVtbkxhYmVsc1tjb2x1bW5JbmRleF07XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgJHtjb2x1bW5MYWJlbH0ke3Jvd0xhYmVsfWApO1xuICAgICAgICAvLyB9XG5cblxuICAgICAgICAvLyA8ZGl2IGtleT17an0gY2xhc3NOYW1lPVwiY2VsbFwiIG9uQ2xpY2s9eygpID0+IGNvb3JkTWUoaSxqKX0gPjwvZGl2PiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR2FtZUJvYXJkIiwiYm9hcmRTaXplIiwiY29sdW1uTGFiZWxzIiwiZW1wdHlCb2FyZCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImJvYXJkIiwic2V0Qm9hcmQiLCJwcmV2aWV3Qm9hcmQiLCJzZXRQcmV2aWV3Qm9hcmQiLCJoYW5kbGVEcmFnT3ZlciIsImV2ZW50Iiwicm93SW5kZXgiLCJjb2x1bW5JbmRleCIsInByZXZlbnREZWZhdWx0Iiwic2hpcFNpemUiLCJwYXJzZUludCIsImRhdGFUcmFuc2ZlciIsImdldERhdGEiLCJzaGlwT3JpZW50YXRpb24iLCJzdGFydFJvdyIsIk1hdGgiLCJmbG9vciIsInN0YXJ0Q29sdW1uIiwibmV3UHJldmlld0JvYXJkIiwiaSIsImhhbmRsZURyYWdMZWF2ZSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwicm93IiwiY2VsbCIsIm9uRHJvcCIsImhhbmRsZURyb3AiLCJvbkRyYWdPdmVyIiwib25EcmFnTGVhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard/index.tsx\n"));

/***/ })

});