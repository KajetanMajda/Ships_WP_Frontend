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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard copy/main.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst initialShips = [\n    {\n        size: 4\n    },\n    {\n        size: 3\n    },\n    {\n        size: 3\n    },\n    {\n        size: 2\n    },\n    {\n        size: 2\n    },\n    {\n        size: 2\n    },\n    {\n        size: 1\n    },\n    {\n        size: 1\n    },\n    {\n        size: 1\n    },\n    {\n        size: 1\n    }\n];\nconst Ship = (param)=>{\n    let { id, size, removeShip } = param;\n    _s();\n    const [isVertical, setIsVertical] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOrientation = ()=>{\n        setIsVertical(!isVertical);\n    };\n    const handleDragStart = (event)=>{\n        event.dataTransfer.setData(\"shipId\", id);\n        event.dataTransfer.setData(\"shipSize\", size.toString());\n        event.dataTransfer.setData(\"shipOrientation\", isVertical ? \"vertical\" : \"horizontal\");\n        removeShip(size);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ship \".concat(isVertical ? \"vertical\" : \"\"),\n        onClick: toggleOrientation,\n        draggable: true,\n        onDragStart: handleDragStart,\n        children: Array(size).fill(null).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mast\"\n            }, i, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Ship, \"iCcvOSkc8yP6hLUTInqXgS/NHaA=\");\n_c = Ship;\nconst GameBoardCopy = ()=>{\n    _s1();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    const [availableShips, setAvailableShips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialShips);\n    const removeShip = (id)=>{\n        setAvailableShips(availableShips.filter((ship)=>ship.id !== id));\n    };\n    const handleDrop = (event, rowIndex, columnIndex)=>{\n        event.preventDefault();\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        // Update the board state to place the ship\n        const newBoard = [\n            ...board\n        ];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                newBoard[rowIndex][columnIndex + i] = \"ship\";\n            } else {\n                newBoard[rowIndex + i][columnIndex] = \"ship\";\n            }\n        }\n        const id = event.dataTransfer.getData(\"shipId\");\n        removeShip(id);\n        setBoard(newBoard);\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined),\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined),\n                        row.map((cell, columnIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell === \"ship\" ? \"ship-cell\" : \"\"),\n                                onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n                                onDragOver: handleDragOver\n                            }, columnIndex, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 25\n                            }, undefined))\n                    ]\n                }, rowIndex, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shipsDeploying-main-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ships\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Dostepne statki\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ship-row\",\n                            children: availableShips.map((ship, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: ship.size,\n                                    removeShip: removeShip\n                                }, i, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(GameBoardCopy, \"ldrXb7PcW5kY9GtWkYZoSZbiHAU=\");\n_c1 = GameBoardCopy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoardCopy);\nvar _c, _c1;\n$RefreshReg$(_c, \"Ship\");\n$RefreshReg$(_c1, \"GameBoardCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDckI7QUFTbkIsTUFBTUUsZUFBZTtJQUNqQjtRQUFFQyxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7SUFDVjtRQUFFQSxNQUFNO0lBQUU7Q0FDYjtBQUVELE1BQU1DLE9BQTRCO1FBQUMsRUFBRUMsRUFBRSxFQUFFRixJQUFJLEVBQUVHLFVBQVUsRUFBRTs7SUFDdkQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1RLG9CQUFvQjtRQUN0QkQsY0FBYyxDQUFDRDtJQUNuQjtJQUVBLE1BQU1HLGtCQUFrQixDQUFDQztRQUNyQkEsTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVVI7UUFDckNNLE1BQU1DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVlWLEtBQUtXLFFBQVE7UUFDcERILE1BQU1DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQk4sYUFBYSxhQUFhO1FBQ3hFRCxXQUFXSDtJQUNmO0lBRUEscUJBQ0ksOERBQUNZO1FBQ0dDLFdBQVcsUUFBcUMsT0FBN0JULGFBQWEsYUFBYTtRQUM3Q1UsU0FBU1I7UUFDVFMsU0FBUztRQUNUQyxhQUFhVDtrQkFFWlUsTUFBTWpCLE1BQU1rQixJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUM1Qiw4REFBQ1Q7Z0JBQVlDLFdBQVU7ZUFBYlE7Ozs7Ozs7Ozs7QUFJMUI7R0ExQk1wQjtLQUFBQTtBQTRCTixNQUFNcUIsZ0JBQTBCOztJQUM1QixNQUFNQyxZQUFZO0lBQ2xCLE1BQU1DLGVBQWU7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztLQUFJO0lBR3ZFLE1BQU1DLGFBQWFSLE1BQU1NLFdBQVdMLElBQUksQ0FBQyxNQUFNQyxHQUFHLENBQUMsSUFBTUYsTUFBTU0sV0FBV0wsSUFBSSxDQUFDO0lBQy9FLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHN0IsK0NBQVFBLENBQUMyQjtJQUVuQyxNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUcvQiwrQ0FBUUEsQ0FBQ0M7SUFFckQsTUFBTUksYUFBYSxDQUFDRDtRQUNoQjJCLGtCQUFrQkQsZUFBZUUsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLN0IsRUFBRSxLQUFLQTtJQUNoRTtJQUVBLE1BQU04QixhQUFhLENBQUN4QixPQUF3QnlCLFVBQWtCQztRQUMxRDFCLE1BQU0yQixjQUFjO1FBQ3BCLE1BQU1DLFdBQVdDLFNBQVM3QixNQUFNQyxZQUFZLENBQUM2QixPQUFPLENBQUM7UUFDckQsTUFBTUMsa0JBQWtCL0IsTUFBTUMsWUFBWSxDQUFDNkIsT0FBTyxDQUFDO1FBRW5ELDJDQUEyQztRQUMzQyxNQUFNRSxXQUFXO2VBQUlkO1NBQU07UUFDM0IsSUFBSyxJQUFJTCxJQUFJLEdBQUdBLElBQUllLFVBQVVmLElBQUs7WUFDL0IsSUFBSWtCLG9CQUFvQixjQUFjO2dCQUNsQ0MsUUFBUSxDQUFDUCxTQUFTLENBQUNDLGNBQWNiLEVBQUUsR0FBRztZQUMxQyxPQUFPO2dCQUNIbUIsUUFBUSxDQUFDUCxXQUFXWixFQUFFLENBQUNhLFlBQVksR0FBRztZQUMxQztRQUNKO1FBRUEsTUFBTWhDLEtBQUtNLE1BQU1DLFlBQVksQ0FBQzZCLE9BQU8sQ0FBQztRQUN0Q25DLFdBQVdEO1FBQ1h5QixTQUFTYTtJQUNiO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNqQztRQUNwQkEsTUFBTTJCLGNBQWM7SUFDeEI7SUFFQSxxQkFDSSw4REFBQ3ZCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7b0JBQ2RXLGFBQWFMLEdBQUcsQ0FBQyxDQUFDdUIsT0FBT3JCLGtCQUN0Qiw4REFBQ1Q7NEJBQVlDLFdBQVU7c0NBQVM2QjsyQkFBdEJyQjs7Ozs7Ozs7Ozs7WUFHakJLLE1BQU1QLEdBQUcsQ0FBQyxDQUFDd0IsS0FBS1YseUJBQ2IsOERBQUNyQjtvQkFBbUJDLFdBQVU7O3NDQUMxQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQVNvQixXQUFXOzs7Ozs7d0JBQ2xDVSxJQUFJeEIsR0FBRyxDQUFDLENBQUN5QixNQUFNViw0QkFDWiw4REFBQ3RCO2dDQUVHQyxXQUFXLFFBQTJDLE9BQW5DK0IsU0FBUyxTQUFTLGNBQWM7Z0NBQ25EQyxRQUFRLENBQUNyQyxRQUFVd0IsV0FBV3hCLE9BQU95QixVQUFVQztnQ0FDL0NZLFlBQVlMOytCQUhQUDs7Ozs7O21CQUpQRDs7Ozs7MEJBYWQsOERBQUNyQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDa0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ25DOzRCQUFJQyxXQUFVO3NDQUNWZSxlQUFlVCxHQUFHLENBQUMsQ0FBQ1ksTUFBTVYsa0JBQ3ZCLDhEQUFDcEI7b0NBQWFELE1BQU0rQixLQUFLL0IsSUFBSTtvQ0FBRUcsWUFBWUE7bUNBQWhDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QztJQXpFTUM7TUFBQUE7QUEyRU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lQm9hcmQgY29weS9pbmRleC50c3g/NmJhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9tYWluLmNzcydcblxuaW50ZXJmYWNlIFNoaXBQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgcmVtb3ZlU2hpcDogKHNpemU6IG51bWJlcikgPT4gdm9pZDtcbiAgICBcbn1cblxuY29uc3QgaW5pdGlhbFNoaXBzID0gW1xuICAgIHsgc2l6ZTogNCB9LFxuICAgIHsgc2l6ZTogMyB9LFxuICAgIHsgc2l6ZTogMyB9LFxuICAgIHsgc2l6ZTogMiB9LFxuICAgIHsgc2l6ZTogMiB9LFxuICAgIHsgc2l6ZTogMiB9LFxuICAgIHsgc2l6ZTogMSB9LFxuICAgIHsgc2l6ZTogMSB9LFxuICAgIHsgc2l6ZTogMSB9LFxuICAgIHsgc2l6ZTogMSB9XG5dO1xuXG5jb25zdCBTaGlwOiBSZWFjdC5GQzxTaGlwUHJvcHM+ID0gKHsgaWQsIHNpemUsIHJlbW92ZVNoaXAgfSkgPT4ge1xuICAgIGNvbnN0IFtpc1ZlcnRpY2FsLCBzZXRJc1ZlcnRpY2FsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1ZlcnRpY2FsKCFpc1ZlcnRpY2FsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NoaXBJZCcsIGlkKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NoaXBTaXplJywgc2l6ZS50b1N0cmluZygpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NoaXBPcmllbnRhdGlvbicsIGlzVmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKTtcbiAgICAgICAgcmVtb3ZlU2hpcChzaXplKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hpcCAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9yaWVudGF0aW9ufVxuICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICA+XG4gICAgICAgICAgICB7QXJyYXkoc2l6ZSkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibWFzdFwiPjwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCBHYW1lQm9hcmRDb3B5OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgICBjb25zdCBjb2x1bW5MYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuXG4gICAgY29uc3QgZW1wdHlCb2FyZCA9IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpKTtcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKGVtcHR5Qm9hcmQpO1xuXG4gICAgY29uc3QgW2F2YWlsYWJsZVNoaXBzLCBzZXRBdmFpbGFibGVTaGlwc10gPSB1c2VTdGF0ZShpbml0aWFsU2hpcHMpO1xuICAgIFxuICAgIGNvbnN0IHJlbW92ZVNoaXAgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRBdmFpbGFibGVTaGlwcyhhdmFpbGFibGVTaGlwcy5maWx0ZXIoc2hpcCA9PiBzaGlwLmlkICE9PSBpZCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEcm9wID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQsIHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2hpcFNpemUgPSBwYXJzZUludChldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcFNpemUnKSk7XG4gICAgICAgIGNvbnN0IHNoaXBPcmllbnRhdGlvbiA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwT3JpZW50YXRpb24nKTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGJvYXJkIHN0YXRlIHRvIHBsYWNlIHRoZSBzaGlwXG4gICAgICAgIGNvbnN0IG5ld0JvYXJkID0gWy4uLmJvYXJkXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBuZXdCb2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXggKyBpXSA9ICdzaGlwJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Qm9hcmRbcm93SW5kZXggKyBpXVtjb2x1bW5JbmRleF0gPSAnc2hpcCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwSWQnKTtcbiAgICAgICAgcmVtb3ZlU2hpcChpZCk7XG4gICAgICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVCb2FyZC1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge2NvbHVtbkxhYmVscy5tYXAoKGxhYmVsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2JvYXJkLm1hcCgocm93LCByb3dJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3dJbmRleH0gY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj57cm93SW5kZXggKyAxfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbkluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNlbGwgJHtjZWxsID09PSAnc2hpcCcgPyAnc2hpcC1jZWxsJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZXZlbnQpID0+IGhhbmRsZURyb3AoZXZlbnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHNEZXBsb3lpbmctbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Eb3N0ZXBuZSBzdGF0a2k8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXAtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlU2hpcHMubWFwKChzaGlwLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoaXAga2V5PXtpfSBzaXplPXtzaGlwLnNpemV9IHJlbW92ZVNoaXA9e3JlbW92ZVNoaXB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkQ29weTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImluaXRpYWxTaGlwcyIsInNpemUiLCJTaGlwIiwiaWQiLCJyZW1vdmVTaGlwIiwiaXNWZXJ0aWNhbCIsInNldElzVmVydGljYWwiLCJ0b2dnbGVPcmllbnRhdGlvbiIsImhhbmRsZURyYWdTdGFydCIsImV2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJHYW1lQm9hcmRDb3B5IiwiYm9hcmRTaXplIiwiY29sdW1uTGFiZWxzIiwiZW1wdHlCb2FyZCIsImJvYXJkIiwic2V0Qm9hcmQiLCJhdmFpbGFibGVTaGlwcyIsInNldEF2YWlsYWJsZVNoaXBzIiwiZmlsdGVyIiwic2hpcCIsImhhbmRsZURyb3AiLCJyb3dJbmRleCIsImNvbHVtbkluZGV4IiwicHJldmVudERlZmF1bHQiLCJzaGlwU2l6ZSIsInBhcnNlSW50IiwiZ2V0RGF0YSIsInNoaXBPcmllbnRhdGlvbiIsIm5ld0JvYXJkIiwiaGFuZGxlRHJhZ092ZXIiLCJsYWJlbCIsInJvdyIsImNlbGwiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard copy/index.tsx\n"));

/***/ })

});