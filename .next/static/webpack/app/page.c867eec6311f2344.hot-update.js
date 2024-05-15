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

/***/ "(app-pages-browser)/./components/gameBoard copy 2/index.tsx":
/*!***********************************************!*\
  !*** ./components/gameBoard copy 2/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoardCopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard copy 2/main.css\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Ship = (param)=>{\n    let { id, size } = param;\n    _s();\n    const [isVertical, setIsVertical] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOrientation = ()=>{\n        setIsVertical(!isVertical);\n    };\n    const handleDragStart = (event)=>{\n        event.dataTransfer.setData(\"shipId\", id);\n        event.dataTransfer.setData(\"shipSize\", size.toString());\n        event.dataTransfer.setData(\"shipOrientation\", isVertical ? \"vertical\" : \"horizontal\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ship \".concat(isVertical ? \"vertical\" : \"\"),\n        onClick: toggleOrientation,\n        draggable: true,\n        onDragStart: handleDragStart,\n        children: Array(size).fill(null).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mast\"\n            }, i, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Ship, \"iCcvOSkc8yP6hLUTInqXgS/NHaA=\");\n_c = Ship;\nfunction GameBoardCopy() {\n    _s1();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const initialShips = [\n        {\n            id: \"1\",\n            size: 4\n        },\n        {\n            id: \"2\",\n            size: 3\n        },\n        {\n            id: \"3\",\n            size: 3\n        },\n        {\n            id: \"4\",\n            size: 2\n        },\n        {\n            id: \"5\",\n            size: 2\n        },\n        {\n            id: \"6\",\n            size: 2\n        },\n        {\n            id: \"7\",\n            size: 1\n        },\n        {\n            id: \"8\",\n            size: 1\n        },\n        {\n            id: \"9\",\n            size: 1\n        },\n        {\n            id: \"10\",\n            size: 1\n        }\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    const [availableShips, setAvailableShips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialShips);\n    const [draggedShip, setDraggedShip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleDrop = (event, rowIndex, columnIndex)=>{\n        event.preventDefault();\n        if (draggedShip) {\n            const shipId = draggedShip.id;\n            const shipSize = draggedShip.size;\n            const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n            const canPlaceShip = canPlaceShipAt(rowIndex, columnIndex, shipSize, shipOrientation);\n            if (canPlaceShip) {\n                const newBoard = [\n                    ...board\n                ];\n                for(let i = 0; i < shipSize; i++){\n                    if (shipOrientation === \"horizontal\") {\n                        newBoard[rowIndex][columnIndex + i] = \"ship\";\n                    } else {\n                        newBoard[rowIndex + i][columnIndex] = \"ship\";\n                    }\n                }\n                setBoard(newBoard);\n                setAvailableShips(availableShips.filter((ship)=>ship.id !== shipId));\n            } else {\n                console.log(\"Nie można postawić statku tutaj.\");\n            }\n            setDraggedShip(null);\n        }\n    };\n    const canPlaceShipAt = (rowIndex, columnIndex, shipSize, shipOrientation)=>{\n        const newBoard = [\n            ...board\n        ];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                if (columnIndex + i >= boardSize) {\n                    return false;\n                }\n                if (newBoard[rowIndex][columnIndex + i] === \"ship\") {\n                    return false;\n                }\n            } else {\n                if (rowIndex + i >= boardSize) {\n                    return false;\n                }\n                if (newBoard[rowIndex + i][columnIndex] === \"ship\") {\n                    return false;\n                }\n            }\n        }\n        return true;\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, this),\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 21\n                        }, this),\n                        row.map((cell, columnIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell === \"ship\" ? \"ship-cell\" : \"\"),\n                                onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n                                onDragOver: handleDragOver\n                            }, columnIndex, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, rowIndex, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shipsDeploying-main-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ships\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Dostepne statki\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ship-row\",\n                            children: availableShips.map((ship, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    id: ship.id,\n                                    size: ship.size\n                                }, index, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n                lineNumber: 133,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy 2/index.tsx\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, this);\n}\n_s1(GameBoardCopy, \"0umnVjJXF7ydK83PpMHl3h7CLSc=\");\n_c1 = GameBoardCopy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Ship\");\n$RefreshReg$(_c1, \"GameBoardCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkgMi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNyQjtBQU9uQixNQUFNRSxPQUE0QjtRQUFDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFOztJQUMzQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTU0sb0JBQW9CO1FBQ3RCRCxjQUFjLENBQUNEO0lBQ25CO0lBRUEsTUFBTUcsa0JBQWtCLENBQUNDO1FBQ3JCQSxNQUFNQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVUjtRQUNyQ00sTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsWUFBWVAsS0FBS1EsUUFBUTtRQUNwREgsTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CTixhQUFhLGFBQWE7SUFDNUU7SUFFQSxxQkFDSSw4REFBQ1E7UUFDR0MsV0FBVyxRQUFxQyxPQUE3QlQsYUFBYSxhQUFhO1FBQzdDVSxTQUFTUjtRQUNUUyxTQUFTO1FBQ1RDLGFBQWFUO2tCQUVaVSxNQUFNZCxNQUFNZSxJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUM1Qiw4REFBQ1Q7Z0JBQVlDLFdBQVU7ZUFBYlE7Ozs7Ozs7Ozs7QUFJMUI7R0F6Qk1wQjtLQUFBQTtBQTJCUyxTQUFTcUI7O0lBQ3BCLE1BQU1DLFlBQVk7SUFDbEIsTUFBTUMsZUFBZTtRQUFDO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFDdkUsTUFBTUMsZUFBZTtRQUNqQjtZQUFFdkIsSUFBSTtZQUFLQyxNQUFNO1FBQUU7UUFDbkI7WUFBRUQsSUFBSTtZQUFLQyxNQUFNO1FBQUU7UUFDbkI7WUFBRUQsSUFBSTtZQUFLQyxNQUFNO1FBQUU7UUFDbkI7WUFBRUQsSUFBSTtZQUFLQyxNQUFNO1FBQUU7UUFDbkI7WUFBRUQs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LElBQUkvQixHQUFHLENBQUMsQ0FBQ2dDLE1BQU1oQiw0QkFDWiw4REFBQ3ZCO2dDQUVHQyxXQUFXLFFBQTJDLE9BQW5Dc0MsU0FBUyxTQUFTLGNBQWM7Z0NBQ25EQyxRQUFRLENBQUM1QyxRQUFVeUIsV0FBV3pCLE9BQU8wQixVQUFVQztnQ0FDL0NrQixZQUFZTDsrQkFIUGI7Ozs7OzttQkFKUEQ7Ozs7OzBCQWFkLDhEQUFDdEI7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ3lDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUMxQzs0QkFBSUMsV0FBVTtzQ0FDVmdCLGVBQWVWLEdBQUcsQ0FBQyxDQUFDMEIsTUFBTVUsc0JBQ3ZCLDhEQUFDdEQ7b0NBQWlCQyxJQUFJMkMsS0FBSzNDLEVBQUU7b0NBQUVDLE1BQU0wQyxLQUFLMUMsSUFBSTttQ0FBbkNvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZDO0lBOUd3QmpDO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkgMi9pbmRleC50c3g/MDFkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vbWFpbi5jc3MnXG5cbmludGVyZmFjZSBTaGlwUHJvcHMge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgc2l6ZTogbnVtYmVyO1xufVxuXG5jb25zdCBTaGlwOiBSZWFjdC5GQzxTaGlwUHJvcHM+ID0gKHsgaWQsIHNpemUgfSkgPT4ge1xuICAgIGNvbnN0IFtpc1ZlcnRpY2FsLCBzZXRJc1ZlcnRpY2FsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1ZlcnRpY2FsKCFpc1ZlcnRpY2FsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NoaXBJZCcsIGlkKTsgXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdzaGlwU2l6ZScsIHNpemUudG9TdHJpbmcoKSk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdzaGlwT3JpZW50YXRpb24nLCBpc1ZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BzaGlwICR7aXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnJ31gfSBcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9yaWVudGF0aW9ufVxuICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICBvbkRyYWdTdGFydD17aGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICA+XG4gICAgICAgICAgICB7QXJyYXkoc2l6ZSkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibWFzdFwiPjwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmRDb3B5KCkge1xuICAgIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuICAgIGNvbnN0IGNvbHVtbkxhYmVscyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IGluaXRpYWxTaGlwcyA9IFtcbiAgICAgICAgeyBpZDogJzEnLCBzaXplOiA0IH0sXG4gICAgICAgIHsgaWQ6ICcyJywgc2l6ZTogMyB9LFxuICAgICAgICB7IGlkOiAnMycsIHNpemU6IDMgfSxcbiAgICAgICAgeyBpZDogJzQnLCBzaXplOiAyIH0sXG4gICAgICAgIHsgaWQ6ICc1Jywgc2l6ZTogMiB9LFxuICAgICAgICB7IGlkOiAnNicsIHNpemU6IDIgfSxcbiAgICAgICAgeyBpZDogJzcnLCBzaXplOiAxIH0sXG4gICAgICAgIHsgaWQ6ICc4Jywgc2l6ZTogMSB9LFxuICAgICAgICB7IGlkOiAnOScsIHNpemU6IDEgfSxcbiAgICAgICAgeyBpZDogJzEwJywgc2l6ZTogMSB9XG4gICAgXTtcblxuICAgIGNvbnN0IGVtcHR5Qm9hcmQgPSBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKSk7XG4gICAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShlbXB0eUJvYXJkKTtcbiAgICBjb25zdCBbYXZhaWxhYmxlU2hpcHMsIHNldEF2YWlsYWJsZVNoaXBzXSA9IHVzZVN0YXRlKGluaXRpYWxTaGlwcyk7XG4gICAgY29uc3QgW2RyYWdnZWRTaGlwLCBzZXREcmFnZ2VkU2hpcF0gPSB1c2VTdGF0ZTx7IGlkOiBzdHJpbmc7IHNpemU6IG51bWJlciB9IHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVEcm9wID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQsIHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGRyYWdnZWRTaGlwKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwSWQgPSBkcmFnZ2VkU2hpcC5pZDsgXG4gICAgICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IGRyYWdnZWRTaGlwLnNpemU7XG4gICAgICAgICAgICBjb25zdCBzaGlwT3JpZW50YXRpb24gPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcE9yaWVudGF0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FuUGxhY2VTaGlwID0gY2FuUGxhY2VTaGlwQXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCBzaGlwU2l6ZSwgc2hpcE9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNhblBsYWNlU2hpcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0JvYXJkID0gWy4uLmJvYXJkXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXggKyBpXSA9ICdzaGlwJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW3Jvd0luZGV4ICsgaV1bY29sdW1uSW5kZXhdID0gJ3NoaXAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcbiAgICAgICAgICAgICAgICBzZXRBdmFpbGFibGVTaGlwcyhhdmFpbGFibGVTaGlwcy5maWx0ZXIoc2hpcCA9PiBzaGlwLmlkICE9PSBzaGlwSWQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOaWUgbW/FvG5hIHBvc3Rhd2nEhyBzdGF0a3UgdHV0YWouXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0RHJhZ2dlZFNoaXAobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNhblBsYWNlU2hpcEF0ID0gKHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIsIHNoaXBTaXplOiBudW1iZXIsIHNoaXBPcmllbnRhdGlvbjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0JvYXJkID0gWy4uLmJvYXJkXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ICsgaSA+PSBib2FyZFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3Qm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4ICsgaV0gPT09ICdzaGlwJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggKyBpID49IGJvYXJkU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXdCb2FyZFtyb3dJbmRleCArIGldW2NvbHVtbkluZGV4XSA9PT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmQtbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5MYWJlbHMubWFwKChsYWJlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93SW5kZXh9IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e3Jvd0luZGV4ICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGNvbHVtbkluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uSW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNlbGwgJHtjZWxsID09PSAnc2hpcCcgPyAnc2hpcC1jZWxsJyA6ICcnfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiBoYW5kbGVEcm9wKGV2ZW50LCByb3dJbmRleCwgY29sdW1uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwc0RlcGxveWluZy1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRvc3RlcG5lIHN0YXRraTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVTaGlwcy5tYXAoKHNoaXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoaXAga2V5PXtpbmRleH0gaWQ9e3NoaXAuaWR9IHNpemU9e3NoaXAuc2l6ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNoaXAiLCJpZCIsInNpemUiLCJpc1ZlcnRpY2FsIiwic2V0SXNWZXJ0aWNhbCIsInRvZ2dsZU9yaWVudGF0aW9uIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsIkdhbWVCb2FyZENvcHkiLCJib2FyZFNpemUiLCJjb2x1bW5MYWJlbHMiLCJpbml0aWFsU2hpcHMiLCJlbXB0eUJvYXJkIiwiYm9hcmQiLCJzZXRCb2FyZCIsImF2YWlsYWJsZVNoaXBzIiwic2V0QXZhaWxhYmxlU2hpcHMiLCJkcmFnZ2VkU2hpcCIsInNldERyYWdnZWRTaGlwIiwiaGFuZGxlRHJvcCIsInJvd0luZGV4IiwiY29sdW1uSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNoaXBJZCIsInNoaXBTaXplIiwic2hpcE9yaWVudGF0aW9uIiwiZ2V0RGF0YSIsImNhblBsYWNlU2hpcCIsImNhblBsYWNlU2hpcEF0IiwibmV3Qm9hcmQiLCJmaWx0ZXIiLCJzaGlwIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURyYWdPdmVyIiwibGFiZWwiLCJyb3ciLCJjZWxsIiwib25Ecm9wIiwib25EcmFnT3ZlciIsImgyIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard copy 2/index.tsx\n"));

/***/ })

});