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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard/main.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GameBoard() {\n    _s();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    // const handleDrop = (event: React.DragEvent, rowIndex: number, columnIndex: number) => {\n    //     event.preventDefault();\n    //     const shipSize = parseInt(event.dataTransfer.getData('shipSize'));\n    //     const shipOrientation = event.dataTransfer.getData('shipOrientation');\n    //     const newBoard = [...board];\n    //     for (let i = 0; i < shipSize; i++) {\n    //         if (shipOrientation === 'horizontal') {\n    //             newBoard[rowIndex][columnIndex + i] = 'ship';\n    //         } else {\n    //             newBoard[rowIndex + i][columnIndex] = 'ship';\n    //         }\n    //     }\n    //     setBoard(newBoard);\n    // };\n    // const handleDrop = (event: React.DragEvent, rowIndex: number, columnIndex: number) => {\n    //     event.preventDefault();\n    //     const shipSize = parseInt(event.dataTransfer.getData('shipSize'));\n    //     const shipOrientation = event.dataTransfer.getData('shipOrientation');\n    //     const newBoard = [...board];\n    //     // Calculate the start position of the ship based on the cursor position\n    //     const startRow = shipOrientation === 'horizontal' ? rowIndex : rowIndex - Math.floor(shipSize / 2);\n    //     const startColumn = shipOrientation === 'horizontal' ? columnIndex - Math.floor(shipSize / 2) : columnIndex;\n    //     for (let i = 0; i < shipSize; i++) {\n    //         if (shipOrientation === 'horizontal') {\n    //             newBoard[startRow][startColumn + i] = 'ship';\n    //         } else {\n    //             newBoard[startRow + i][startColumn] = 'ship';\n    //         }\n    //     }\n    //     setBoard(newBoard);\n    // };\n    // const handleDragOver = (event: React.DragEvent) => {\n    //     event.preventDefault();\n    // };\n    const handleDragEnter = (event, rowIndex1, columnIndex1)=>{\n        event.preventDefault();\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        // Calculate the cells that the ship would occupy\n        const shipCells = [];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                shipCells.push([\n                    rowIndex1,\n                    columnIndex1 + i\n                ]);\n            } else {\n                shipCells.push([\n                    rowIndex1 + i,\n                    columnIndex1\n                ]);\n            }\n        }\n        // Update the board state to show the ship preview\n        const newBoard = [\n            ...board\n        ];\n        for (const [row, column] of shipCells){\n            newBoard[row][column] = \"preview\";\n        }\n        setBoard(newBoard);\n    };\n    const handleDragLeave = (event, rowIndex1, columnIndex1)=>{\n        event.preventDefault();\n        // Update the board state to remove the ship preview\n        const newBoard = [\n            ...board\n        ];\n        for(let i = 0; i < newBoard.length; i++){\n            for(let j = 0; j < newBoard[i].length; j++){\n                if (newBoard[i][j] === \"preview\") {\n                    newBoard[i][j] = null;\n                }\n            }\n        }\n        setBoard(newBoard);\n    };\n    // In your render method:\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cell \".concat(cell === \"ship\" ? \"ship-cell\" : cell === \"preview\" ? \"preview-cell\" : \"\"),\n        onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n        onDragOver: handleDragOver,\n        onDragEnter: (event)=>handleDragEnter(event, rowIndex, columnIndex),\n        onDragLeave: handleDragLeave\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n        lineNumber: 89,\n        columnNumber: 1\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this),\n            board.map((row, rowIndex1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex1 + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, this),\n                        row.map((cell1, columnIndex1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell1 === \"ship\" ? \"ship-cell\" : \"\"),\n                                onDrop: (event)=>handleDrop(event, rowIndex1, columnIndex1),\n                                onDragOver: handleDragOver\n                            }, columnIndex1, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, rowIndex1, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard/index.tsx\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, this);\n} // const coordMe = (rowIndex: number, columnIndex: number) => {\n //     const rowLabel = rowIndex + 1;\n //     const columnLabel = columnLabels[columnIndex];\n //     console.log(`${columnLabel}${rowLabel}`);\n // }\n // <div key={j} className=\"cell\" onClick={() => coordMe(i,j)} ></div>\n_s(GameBoard, \"7/qo8VnofRNtpG+d2vnbVNr5ztA=\");\n_c = GameBoard;\nvar _c;\n$RefreshReg$(_c, \"GameBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ3JCO0FBRUosU0FBU0U7O0lBQ3BCLE1BQU1DLFlBQVk7SUFDbEIsTUFBTUMsZUFBZTtRQUFDO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFFdkUsTUFBTUMsYUFBYUMsTUFBTUgsV0FBV0ksSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxJQUFNRixNQUFNSCxXQUFXSSxJQUFJLENBQUM7SUFDL0UsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDSTtJQUVuQywwRkFBMEY7SUFDMUYsOEJBQThCO0lBQzlCLHlFQUF5RTtJQUN6RSw2RUFBNkU7SUFDN0UsbUNBQW1DO0lBQ25DLDJDQUEyQztJQUMzQyxrREFBa0Q7SUFDbEQsNERBQTREO0lBQzVELG1CQUFtQjtJQUNuQiw0REFBNEQ7SUFDNUQsWUFBWTtJQUNaLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsS0FBSztJQUVMLDBGQUEwRjtJQUMxRiw4QkFBOEI7SUFDOUIseUVBQXlFO0lBQ3pFLDZFQUE2RTtJQUM3RSxtQ0FBbUM7SUFFbkMsK0VBQStFO0lBQy9FLDBHQUEwRztJQUMxRyxtSEFBbUg7SUFFbkgsMkNBQTJDO0lBQzNDLGtEQUFrRDtJQUNsRCw0REFBNEQ7SUFDNUQsbUJBQW1CO0lBQ25CLDREQUE0RDtJQUM1RCxZQUFZO0lBQ1osUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixLQUFLO0lBRUwsdURBQXVEO0lBQ3ZELDhCQUE4QjtJQUM5QixLQUFLO0lBQ1QsTUFBTU0sa0JBQWtCLENBQUNDLE9BQXdCQyxXQUFrQkM7UUFDL0RGLE1BQU1HLGNBQWM7UUFDcEIsTUFBTUMsV0FBV0MsU0FBU0wsTUFBTU0sWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDckQsTUFBTUMsa0JBQWtCUixNQUFNTSxZQUFZLENBQUNDLE9BQU8sQ0FBQztRQUVuRCxpREFBaUQ7UUFDakQsTUFBTUUsWUFBWSxFQUFFO1FBQ3BCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJTixVQUFVTSxJQUFLO1lBQy9CLElBQUlGLG9CQUFvQixjQUFjO2dCQUNsQ0MsVUFBVUUsSUFBSSxDQUFDO29CQUFDVjtvQkFBVUMsZUFBY1E7aUJBQUU7WUFDOUMsT0FBTztnQkFDSEQsVUFBVUUsSUFBSSxDQUFDO29CQUFDVixZQUFXUztvQkFBR1I7aUJBQVk7WUFDOUM7UUFDSjtRQUVBLGtEQUFrRDtRQUNsRCxNQUFNVSxXQUFXO2VBQUlmO1NBQU07UUFDM0IsS0FBSyxNQUFNLENBQUNnQixLQUFLQyxPQUFPLElBQUlMLFVBQVc7WUFDbkNHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEdBQUc7UUFDNUI7UUFDQWhCLFNBQVNjO0lBQ2I7SUFFQSxNQUFNRyxrQkFBa0IsQ0FBQ2YsT0FBd0JDLFdBQWtCQztRQUMvREYsTUFBTUcsY0FBYztRQUVwQixvREFBb0Q7UUFDcEQsTUFBTVMsV0FBVztlQUFJZjtTQUFNO1FBQzNCLElBQUssSUFBSWEsSUFBSSxHQUFHQSxJQUFJRSxTQUFTSSxNQUFNLEVBQUVOLElBQUs7WUFDdEMsSUFBSyxJQUFJTyxJQUFJLEdBQUdBLElBQUlMLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDTSxNQUFNLEVBQUVDLElBQUs7Z0JBQ3pDLElBQUlMLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDTyxFQUFFLEtBQUssV0FBVztvQkFDOUJMLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDTyxFQUFFLEdBQUc7Z0JBQ3JCO1lBQ0o7UUFDSjtRQUNBbkIsU0FBU2M7SUFDYjtJQUVBLHlCQUF5QjtrQkFDekIsOERBQUNNO1FBQ0dDLFdBQVcsUUFBaUYsT0FBekVDLFNBQVMsU0FBUyxjQUFjQSxTQUFTLFlBQVksaUJBQWlCO1FBQ3pGQyxRQUFRLENBQUNyQixRQUFVc0IsV0FBV3RCLE9BQU9DLFVBQVVDO1FBQy9DcUIsWUFBWUM7UUFDWkMsYUFBYSxDQUFDekIsUUFBVUQsZ0JBQWdCQyxPQUFPQyxVQUFVQztRQUN6RHdCLGFBQWFYOzs7Ozs7SUFFYixxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztvQkFDZDNCLGFBQWFJLEdBQUcsQ0FBQyxDQUFDK0IsT0FBT2pCLGtCQUN0Qiw4REFBQ1E7NEJBQVlDLFdBQVU7c0NBQVNROzJCQUF0QmpCOzs7Ozs7Ozs7OztZQUdqQmIsTUFBTUQsR0FBRyxDQUFDLENBQUNpQixLQUFLWiwwQkFDYiw4REFBQ2lCO29CQUFtQkMsV0FBVTs7c0NBQzFCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBU2xCLFlBQVc7Ozs7Ozt3QkFDbENZLElBQUlqQixHQUFHLENBQUMsQ0FBQ3dCLE9BQU1sQiw2QkFDWiw4REFBQ2dCO2dDQUVHQyxXQUFXLFFBQTJDLE9BQW5DQyxVQUFTLFNBQVMsY0FBYztnQ0FDbkRDLFFBQVEsQ0FBQ3JCLFFBQVVzQixXQUFXdEIsT0FBT0MsV0FBVUM7Z0NBQy9DcUIsWUFBWUM7K0JBSFB0Qjs7Ozs7O21CQUpQRDs7Ozs7Ozs7Ozs7QUFjMUIsRUFFQSwrREFBK0Q7Q0FDdkQscUNBQXFDO0NBQ3JDLHFEQUFxRDtDQUNyRCxnREFBZ0Q7Q0FDaEQsSUFBSTtDQUdKLHFFQUFxRTtHQTNIckRYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkL2luZGV4LnRzeD82ZjRjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL21haW4uY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmRTaXplID0gMTA7XG4gICAgY29uc3QgY29sdW1uTGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbiAgICBjb25zdCBlbXB0eUJvYXJkID0gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkpO1xuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoZW1wdHlCb2FyZCk7XG5cbiAgICAvLyBjb25zdCBoYW5kbGVEcm9wID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQsIHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgY29uc3Qgc2hpcFNpemUgPSBwYXJzZUludChldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcFNpemUnKSk7XG4gICAgLy8gICAgIGNvbnN0IHNoaXBPcmllbnRhdGlvbiA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwT3JpZW50YXRpb24nKTtcbiAgICAvLyAgICAgY29uc3QgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAvLyAgICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIC8vICAgICAgICAgICAgIG5ld0JvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleCArIGldID0gJ3NoaXAnO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBuZXdCb2FyZFtyb3dJbmRleCArIGldW2NvbHVtbkluZGV4XSA9ICdzaGlwJztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBzZXRCb2FyZChuZXdCb2FyZCk7XG4gICAgLy8gfTtcblxuICAgIC8vIGNvbnN0IGhhbmRsZURyb3AgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCwgcm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBjb25zdCBzaGlwU2l6ZSA9IHBhcnNlSW50KGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwU2l6ZScpKTtcbiAgICAvLyAgICAgY29uc3Qgc2hpcE9yaWVudGF0aW9uID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBPcmllbnRhdGlvbicpO1xuICAgIC8vICAgICBjb25zdCBuZXdCb2FyZCA9IFsuLi5ib2FyZF07XG4gICAgXG4gICAgLy8gICAgIC8vIENhbGN1bGF0ZSB0aGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHNoaXAgYmFzZWQgb24gdGhlIGN1cnNvciBwb3NpdGlvblxuICAgIC8vICAgICBjb25zdCBzdGFydFJvdyA9IHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gcm93SW5kZXggOiByb3dJbmRleCAtIE1hdGguZmxvb3Ioc2hpcFNpemUgLyAyKTtcbiAgICAvLyAgICAgY29uc3Qgc3RhcnRDb2x1bW4gPSBzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGNvbHVtbkluZGV4IC0gTWF0aC5mbG9vcihzaGlwU2l6ZSAvIDIpIDogY29sdW1uSW5kZXg7XG4gICAgXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemU7IGkrKykge1xuICAgIC8vICAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgLy8gICAgICAgICAgICAgbmV3Qm9hcmRbc3RhcnRSb3ddW3N0YXJ0Q29sdW1uICsgaV0gPSAnc2hpcCc7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIG5ld0JvYXJkW3N0YXJ0Um93ICsgaV1bc3RhcnRDb2x1bW5dID0gJ3NoaXAnO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIH07XG5jb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCwgcm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2hpcFNpemUgPSBwYXJzZUludChldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcFNpemUnKSk7XG4gICAgY29uc3Qgc2hpcE9yaWVudGF0aW9uID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBPcmllbnRhdGlvbicpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBjZWxscyB0aGF0IHRoZSBzaGlwIHdvdWxkIG9jY3VweVxuICAgIGNvbnN0IHNoaXBDZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemU7IGkrKykge1xuICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHNoaXBDZWxscy5wdXNoKFtyb3dJbmRleCwgY29sdW1uSW5kZXggKyBpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQ2VsbHMucHVzaChbcm93SW5kZXggKyBpLCBjb2x1bW5JbmRleF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBib2FyZCBzdGF0ZSB0byBzaG93IHRoZSBzaGlwIHByZXZpZXdcbiAgICBjb25zdCBuZXdCb2FyZCA9IFsuLi5ib2FyZF07XG4gICAgZm9yIChjb25zdCBbcm93LCBjb2x1bW5dIG9mIHNoaXBDZWxscykge1xuICAgICAgICBuZXdCb2FyZFtyb3ddW2NvbHVtbl0gPSAncHJldmlldyc7XG4gICAgfVxuICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcbn07XG5cbmNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChldmVudDogUmVhY3QuRHJhZ0V2ZW50LCByb3dJbmRleDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgYm9hcmQgc3RhdGUgdG8gcmVtb3ZlIHRoZSBzaGlwIHByZXZpZXdcbiAgICBjb25zdCBuZXdCb2FyZCA9IFsuLi5ib2FyZF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0JvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAobmV3Qm9hcmRbaV1bal0gPT09ICdwcmV2aWV3Jykge1xuICAgICAgICAgICAgICAgIG5ld0JvYXJkW2ldW2pdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRCb2FyZChuZXdCb2FyZCk7XG59O1xuXG4vLyBJbiB5b3VyIHJlbmRlciBtZXRob2Q6XG48ZGl2IFxuICAgIGNsYXNzTmFtZT17YGNlbGwgJHtjZWxsID09PSAnc2hpcCcgPyAnc2hpcC1jZWxsJyA6IGNlbGwgPT09ICdwcmV2aWV3JyA/ICdwcmV2aWV3LWNlbGwnIDogJyd9YH0gXG4gICAgb25Ecm9wPXsoZXZlbnQpID0+IGhhbmRsZURyb3AoZXZlbnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCl9IFxuICAgIG9uRHJhZ092ZXI9e2hhbmRsZURyYWdPdmVyfVxuICAgIG9uRHJhZ0VudGVyPXsoZXZlbnQpID0+IGhhbmRsZURyYWdFbnRlcihldmVudCwgcm93SW5kZXgsIGNvbHVtbkluZGV4KX1cbiAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxuPjwvZGl2PlxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZUJvYXJkLW1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7Y29sdW1uTGFiZWxzLm1hcCgobGFiZWwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Ym9hcmQubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0luZGV4fSBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPntyb3dJbmRleCArIDF9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtyb3cubWFwKChjZWxsLCBjb2x1bW5JbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbkluZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjZWxsICR7Y2VsbCA9PT0gJ3NoaXAnID8gJ3NoaXAtY2VsbCcgOiAnJ31gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3A9eyhldmVudCkgPT4gaGFuZGxlRHJvcChldmVudCwgcm93SW5kZXgsIGNvbHVtbkluZGV4KX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8vIGNvbnN0IGNvb3JkTWUgPSAocm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3Qgcm93TGFiZWwgPSByb3dJbmRleCArIDE7XG4gICAgICAgIC8vICAgICBjb25zdCBjb2x1bW5MYWJlbCA9IGNvbHVtbkxhYmVsc1tjb2x1bW5JbmRleF07XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgJHtjb2x1bW5MYWJlbH0ke3Jvd0xhYmVsfWApO1xuICAgICAgICAvLyB9XG5cblxuICAgICAgICAvLyA8ZGl2IGtleT17an0gY2xhc3NOYW1lPVwiY2VsbFwiIG9uQ2xpY2s9eygpID0+IGNvb3JkTWUoaSxqKX0gPjwvZGl2PiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR2FtZUJvYXJkIiwiYm9hcmRTaXplIiwiY29sdW1uTGFiZWxzIiwiZW1wdHlCb2FyZCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImJvYXJkIiwic2V0Qm9hcmQiLCJoYW5kbGVEcmFnRW50ZXIiLCJldmVudCIsInJvd0luZGV4IiwiY29sdW1uSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNoaXBTaXplIiwicGFyc2VJbnQiLCJkYXRhVHJhbnNmZXIiLCJnZXREYXRhIiwic2hpcE9yaWVudGF0aW9uIiwic2hpcENlbGxzIiwiaSIsInB1c2giLCJuZXdCb2FyZCIsInJvdyIsImNvbHVtbiIsImhhbmRsZURyYWdMZWF2ZSIsImxlbmd0aCIsImoiLCJkaXYiLCJjbGFzc05hbWUiLCJjZWxsIiwib25Ecm9wIiwiaGFuZGxlRHJvcCIsIm9uRHJhZ092ZXIiLCJoYW5kbGVEcmFnT3ZlciIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard/index.tsx\n"));

/***/ })

});