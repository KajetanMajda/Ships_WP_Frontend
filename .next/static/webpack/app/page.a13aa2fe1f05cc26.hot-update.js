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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoardCopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard copy/main.css\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Ship = (param)=>{\n    let { id, size, onShipPlaced } = param;\n    _s();\n    const [isVertical, setIsVertical] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOrientation = ()=>{\n        setIsVertical(!isVertical);\n    };\n    const handleDragStart = (event)=>{\n        event.dataTransfer.setData(\"shipId\", id); // Ustawienie id statku w danych przeciągania\n        event.dataTransfer.setData(\"shipSize\", size.toString());\n        event.dataTransfer.setData(\"shipOrientation\", isVertical ? \"vertical\" : \"horizontal\");\n    };\n    // const handleClick = () => {\n    //     onShipPlaced(); // Usunięcie statku z planszy\n    //     setIsVertical(false); // Przywrócenie orientacji na wartość domyślną\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ship \".concat(isVertical ? \"vertical\" : \"\"),\n        onClick: toggleOrientation,\n        draggable: true,\n        onDragStart: handleDragStart,\n        children: Array(size).fill(null).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mast\"\n            }, i, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Ship, \"iCcvOSkc8yP6hLUTInqXgS/NHaA=\");\n_c = Ship;\nfunction GameBoardCopy() {\n    _s1();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const initialShips = [\n        {\n            id: \"1\",\n            size: 4\n        },\n        {\n            id: \"2\",\n            size: 3\n        },\n        {\n            id: \"3\",\n            size: 3\n        },\n        {\n            id: \"4\",\n            size: 2\n        },\n        {\n            id: \"5\",\n            size: 2\n        },\n        {\n            id: \"6\",\n            size: 2\n        },\n        {\n            id: \"7\",\n            size: 1\n        },\n        {\n            id: \"8\",\n            size: 1\n        },\n        {\n            id: \"9\",\n            size: 1\n        },\n        {\n            id: \"10\",\n            size: 1\n        }\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    const [availableShips, setAvailableShips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialShips);\n    const handleDrop = (event, rowIndex, columnIndex)=>{\n        event.preventDefault();\n        const shipId = event.dataTransfer.getData(\"shipId\");\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        // Sprawdzenie, czy na planszy nie ma statków w obszarze wokół miejsca, gdzie chcemy postawić statek\n        const canPlaceShip = canPlaceShipAt(rowIndex, columnIndex, shipSize, shipOrientation);\n        if (canPlaceShip) {\n            const newBoard = [\n                ...board\n            ];\n            for(let i = 0; i < shipSize; i++){\n                if (shipOrientation === \"horizontal\") {\n                    newBoard[rowIndex][columnIndex + i] = \"ship\";\n                } else {\n                    newBoard[rowIndex + i][columnIndex] = \"ship\";\n                }\n            }\n            setBoard(newBoard);\n            setAvailableShips(availableShips.filter((ship)=>ship.id !== shipId));\n        } else {\n            // Jeśli nie można postawić statku na wybranym miejscu, możesz obsłużyć to w jakiś sposób, np. wyświetlając komunikat\n            console.log(\"Nie można postawić statku tutaj.\");\n        }\n    };\n    // Funkcja sprawdzająca, czy można postawić statek w danym miejscu na planszy\n    const canPlaceShipAt = (rowIndex, columnIndex, shipSize, shipOrientation)=>{\n        const newBoard = [\n            ...board\n        ];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                // Sprawdzenie, czy pole nie wychodzi poza planszę\n                if (columnIndex + i >= boardSize) {\n                    return false;\n                }\n                // Sprawdzenie, czy pole nie jest zajęte przez inny statek\n                if (newBoard[rowIndex][columnIndex + i] === \"ship\") {\n                    return false;\n                }\n                // Sprawdzenie obszaru wokół pola\n                if (rowIndex > 0 && newBoard[rowIndex - 1][columnIndex + i] === \"ship\" || rowIndex < boardSize - 1 && newBoard[rowIndex + 1][columnIndex + i] === \"ship\" || columnIndex > 0 && newBoard[rowIndex][columnIndex + i - 1] === \"ship\" || columnIndex + i < boardSize - 1 && newBoard[rowIndex][columnIndex + i + 1] === \"ship\" || rowIndex > 0 && columnIndex > 0 && newBoard[rowIndex - 1][columnIndex + i - 1] === \"ship\" || rowIndex > 0 && columnIndex + i < boardSize - 1 && newBoard[rowIndex - 1][columnIndex + i + 1] === \"ship\" || rowIndex < boardSize - 1 && columnIndex > 0 && newBoard[rowIndex + 1][columnIndex + i - 1] === \"ship\" || rowIndex < boardSize - 1 && columnIndex + i < boardSize - 1 && newBoard[rowIndex + 1][columnIndex + i + 1] === \"ship\") {\n                    return false;\n                }\n            } else {\n                if (rowIndex + i >= boardSize) {\n                    return false;\n                }\n                if (newBoard[rowIndex + i][columnIndex] === \"ship\") {\n                    return false;\n                }\n                if (rowIndex > 0 && newBoard[rowIndex + i - 1][columnIndex] === \"ship\" || rowIndex + i < boardSize - 1 && newBoard[rowIndex + i + 1][columnIndex] === \"ship\" || columnIndex > 0 && newBoard[rowIndex + i][columnIndex - 1] === \"ship\" || columnIndex < boardSize - 1 && newBoard[rowIndex + i][columnIndex + 1] === \"ship\" || rowIndex > 0 && columnIndex > 0 && newBoard[rowIndex + i - 1][columnIndex - 1] === \"ship\" || rowIndex + i < boardSize - 1 && columnIndex > 0 && newBoard[rowIndex + i + 1][columnIndex - 1] === \"ship\" || rowIndex > 0 && columnIndex + 1 < boardSize - 1 && newBoard[rowIndex + i - 1][columnIndex + 1] === \"ship\" || rowIndex + i < boardSize - 1 && columnIndex + 1 < boardSize - 1 && newBoard[rowIndex + i + 1][columnIndex + 1] === \"ship\") {\n                    return false;\n                }\n            }\n        }\n        return true;\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    const handleClickOnShip = (shipId)=>{\n        // Usunięcie statku z planszy\n        setBoard(board.map((row)=>row.map((cell)=>cell.includes(shipId) ? null : cell)));\n        // Przywrócenie statku do listy dostępnych statków\n        const shipToAddBack = availableShips.find((ship)=>ship.id === shipId);\n        if (shipToAddBack) {\n            setAvailableShips([\n                ...availableShips,\n                shipToAddBack\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 157,\n                columnNumber: 13\n            }, this),\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 165,\n                            columnNumber: 21\n                        }, this),\n                        row.map((cell, columnIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell === \"ship\" ? \"ship-cell\" : \"\"),\n                                onClick: ()=>{\n                                    if (cell === \"ship\") {\n                                        handleClickOnShip(cell);\n                                    }\n                                },\n                                onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n                                onDragOver: handleDragOver\n                            }, columnIndex, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                lineNumber: 167,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, rowIndex, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 164,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shipsDeploying-main-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ships\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Dostepne statki\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 184,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ship-row\",\n                            children: availableShips.map((ship, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    id: ship.id,\n                                    size: ship.size,\n                                    onShipPlaced: ()=>setAvailableShips(availableShips.filter((s)=>s.id !== ship.id))\n                                }, index, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 187,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 185,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 183,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 182,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 156,\n        columnNumber: 9\n    }, this);\n}\n_s1(GameBoardCopy, \"ldrXb7PcW5kY9GtWkYZoSZbiHAU=\");\n_c1 = GameBoardCopy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Ship\");\n$RefreshReg$(_c1, \"GameBoardCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDckI7QUFRbkIsTUFBTUUsT0FBNEI7UUFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFOztJQUN6RCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MsTUFBTU8sb0JBQW9CO1FBQ3RCRCxjQUFjLENBQUNEO0lBQ25CO0lBRUEsTUFBTUcsa0JBQWtCLENBQUNDO1FBQ3JCQSxNQUFNQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVVCxLQUFLLDZDQUE2QztRQUN2Rk8sTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsWUFBWVIsS0FBS1MsUUFBUTtRQUNwREgsTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CTixhQUFhLGFBQWE7SUFDNUU7SUFFQSw4QkFBOEI7SUFDOUIsb0RBQW9EO0lBQ3BELDJFQUEyRTtJQUMzRSxLQUFLO0lBRUwscUJBQ0ksOERBQUNRO1FBQ0dDLFdBQVcsUUFBcUMsT0FBN0JULGFBQWEsYUFBYTtRQUM3Q1UsU0FBU1I7UUFDVFMsU0FBUztRQUNUQyxhQUFhVDtrQkFFWlUsTUFBTWYsTUFBTWdCLElBQUksQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQzVCLDhEQUFDVDtnQkFBWUMsV0FBVTtlQUFiUTs7Ozs7Ozs7OztBQUkxQjtHQTlCTXJCO0tBQUFBO0FBZ0NTLFNBQVNzQjs7SUFDcEIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxlQUFlO1FBQUM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUN2RSxNQUFNQyxlQUFlO1FBQ2pCO1lBQUV4QixJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZ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QkYsa0JBQWtCRTtvQ0FDdEI7Z0NBQ0o7Z0NBQ0FLLFFBQVEsQ0FBQy9DLFFBQVV1QixXQUFXdkIsT0FBT3dCLFVBQVVDO2dDQUMvQ3VCLFlBQVlUOytCQVJQZDs7Ozs7O21CQUpQRDs7Ozs7MEJBa0JkLDhEQUFDcEI7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQzRDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUM3Qzs0QkFBSUMsV0FBVTtzQ0FDVmdCLGVBQWVWLEdBQUcsQ0FBQyxDQUFDeUIsTUFBTWMsc0JBQ3ZCLDhEQUFDMUQ7b0NBQWlCQyxJQUFJMkMsS0FBSzNDLEVBQUU7b0NBQUVDLE1BQU0wQyxLQUFLMUMsSUFBSTtvQ0FBRUMsY0FBYyxJQUFNMkIsa0JBQWtCRCxlQUFlYyxNQUFNLENBQUNnQixDQUFBQSxJQUFLQSxFQUFFMUQsRUFBRSxLQUFLMkMsS0FBSzNDLEVBQUU7bUNBQXRIeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QztJQXpKd0JwQztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWVCb2FyZCBjb3B5L2luZGV4LnRzeD82YmExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9tYWluLmNzcydcblxuaW50ZXJmYWNlIFNoaXBQcm9wcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBzaXplOiBudW1iZXI7XG4gICAgb25TaGlwUGxhY2VkOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTaGlwOiBSZWFjdC5GQzxTaGlwUHJvcHM+ID0gKHsgaWQsIHNpemUsIG9uU2hpcFBsYWNlZCB9KSA9PiB7XG4gICAgY29uc3QgW2lzVmVydGljYWwsIHNldElzVmVydGljYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldElzVmVydGljYWwoIWlzVmVydGljYWwpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnc2hpcElkJywgaWQpOyAvLyBVc3Rhd2llbmllIGlkIHN0YXRrdSB3IGRhbnljaCBwcnplY2nEhWdhbmlhXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdzaGlwU2l6ZScsIHNpemUudG9TdHJpbmcoKSk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdzaGlwT3JpZW50YXRpb24nLCBpc1ZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyk7XG4gICAgfTtcblxuICAgIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vICAgICBvblNoaXBQbGFjZWQoKTsgLy8gVXN1bmnEmWNpZSBzdGF0a3UgeiBwbGFuc3p5XG4gICAgLy8gICAgIHNldElzVmVydGljYWwoZmFsc2UpOyAvLyBQcnp5d3LDs2NlbmllIG9yaWVudGFjamkgbmEgd2FydG/Fm8SHIGRvbXnFm2xuxIVcbiAgICAvLyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNoaXAgJHtpc1ZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICcnfWB9IFxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlT3JpZW50YXRpb259XG4gICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtBcnJheShzaXplKS5maWxsKG51bGwpLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtYXN0XCI+PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVCb2FyZENvcHkoKSB7XG4gICAgY29uc3QgYm9hcmRTaXplID0gMTA7XG4gICAgY29uc3QgY29sdW1uTGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgY29uc3QgaW5pdGlhbFNoaXBzID0gW1xuICAgICAgICB7IGlkOiAnMScsIHNpemU6IDQgfSxcbiAgICAgICAgeyBpZDogJzInLCBzaXplOiAzIH0sXG4gICAgICAgIHsgaWQ6ICczJywgc2l6ZTogMyB9LFxuICAgICAgICB7IGlkOiAnNCcsIHNpemU6IDIgfSxcbiAgICAgICAgeyBpZDogJzUnLCBzaXplOiAyIH0sXG4gICAgICAgIHsgaWQ6ICc2Jywgc2l6ZTogMiB9LFxuICAgICAgICB7IGlkOiAnNycsIHNpemU6IDEgfSxcbiAgICAgICAgeyBpZDogJzgnLCBzaXplOiAxIH0sXG4gICAgICAgIHsgaWQ6ICc5Jywgc2l6ZTogMSB9LFxuICAgICAgICB7IGlkOiAnMTAnLCBzaXplOiAxIH1cbiAgICBdO1xuXG4gICAgY29uc3QgZW1wdHlCb2FyZCA9IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpKTtcbiAgICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKGVtcHR5Qm9hcmQpO1xuICAgIGNvbnN0IFthdmFpbGFibGVTaGlwcywgc2V0QXZhaWxhYmxlU2hpcHNdID0gdXNlU3RhdGUoaW5pdGlhbFNoaXBzKTtcblxuICAgIGNvbnN0IGhhbmRsZURyb3AgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCwgcm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzaGlwSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcElkJyk7IFxuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IHBhcnNlSW50KGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwU2l6ZScpKTtcbiAgICAgICAgY29uc3Qgc2hpcE9yaWVudGF0aW9uID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBPcmllbnRhdGlvbicpO1xuICAgIFxuICAgICAgICAvLyBTcHJhd2R6ZW5pZSwgY3p5IG5hIHBsYW5zenkgbmllIG1hIHN0YXRrw7N3IHcgb2JzemFyemUgd29rw7PFgiBtaWVqc2NhLCBnZHppZSBjaGNlbXkgcG9zdGF3acSHIHN0YXRla1xuICAgICAgICBjb25zdCBjYW5QbGFjZVNoaXAgPSBjYW5QbGFjZVNoaXBBdChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHNoaXBTaXplLCBzaGlwT3JpZW50YXRpb24pO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNhblBsYWNlU2hpcCkge1xuICAgICAgICAgICAgY29uc3QgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleCArIGldID0gJ3NoaXAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW3Jvd0luZGV4ICsgaV1bY29sdW1uSW5kZXhdID0gJ3NoaXAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcbiAgICAgICAgICAgIHNldEF2YWlsYWJsZVNoaXBzKGF2YWlsYWJsZVNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAuaWQgIT09IHNoaXBJZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSmXFm2xpIG5pZSBtb8W8bmEgcG9zdGF3acSHIHN0YXRrdSBuYSB3eWJyYW55bSBtaWVqc2N1LCBtb8W8ZXN6IG9ic8WCdcW8ecSHIHRvIHcgamFracWbIHNwb3PDs2IsIG5wLiB3ecWbd2lldGxhasSFYyBrb211bmlrYXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmllIG1vxbxuYSBwb3N0YXdpxIcgc3RhdGt1IHR1dGFqLlwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy8gRnVua2NqYSBzcHJhd2R6YWrEhWNhLCBjenkgbW/FvG5hIHBvc3Rhd2nEhyBzdGF0ZWsgdyBkYW55bSBtaWVqc2N1IG5hIHBsYW5zenlcbiAgICBjb25zdCBjYW5QbGFjZVNoaXBBdCA9IChyb3dJbmRleDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyLCBzaGlwU2l6ZTogbnVtYmVyLCBzaGlwT3JpZW50YXRpb246IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgICBjb25zdCBuZXdCb2FyZCA9IFsuLi5ib2FyZF07XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIC8vIFNwcmF3ZHplbmllLCBjenkgcG9sZSBuaWUgd3ljaG9kemkgcG96YSBwbGFuc3rEmVxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCArIGkgPj0gYm9hcmRTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3ByYXdkemVuaWUsIGN6eSBwb2xlIG5pZSBqZXN0IHphasSZdGUgcHJ6ZXogaW5ueSBzdGF0ZWtcbiAgICAgICAgICAgICAgICBpZiAobmV3Qm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4ICsgaV0gPT09ICdzaGlwJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNwcmF3ZHplbmllIG9ic3phcnUgd29rw7PFgiBwb2xhXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPiAwICYmIG5ld0JvYXJkW3Jvd0luZGV4IC0gMV1bY29sdW1uSW5kZXggKyBpXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPCBib2FyZFNpemUgLSAxICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgMV1bY29sdW1uSW5kZXggKyBpXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAoY29sdW1uSW5kZXggPiAwICYmIG5ld0JvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleCArIGkgLSAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAoY29sdW1uSW5kZXggKyBpIDwgYm9hcmRTaXplIC0gMSAmJiBuZXdCb2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXggKyBpICsgMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ID4gMCAmJiBjb2x1bW5JbmRleCA+IDAgJiYgbmV3Qm9hcmRbcm93SW5kZXggLSAxXVtjb2x1bW5JbmRleCArIGkgLSAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPiAwICYmIGNvbHVtbkluZGV4ICsgaSA8IGJvYXJkU2l6ZSAtIDEgJiYgbmV3Qm9hcmRbcm93SW5kZXggLSAxXVtjb2x1bW5JbmRleCArIGkgKyAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPCBib2FyZFNpemUgLSAxICYmIGNvbHVtbkluZGV4ID4gMCAmJiBuZXdCb2FyZFtyb3dJbmRleCArIDFdW2NvbHVtbkluZGV4ICsgaSAtIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA8IGJvYXJkU2l6ZSAtIDEgJiYgY29sdW1uSW5kZXggKyBpIDwgYm9hcmRTaXplIC0gMSAmJiBuZXdCb2FyZFtyb3dJbmRleCArIDFdW2NvbHVtbkluZGV4ICsgaSArIDFdID09PSAnc2hpcCcpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCArIGkgPj0gYm9hcmRTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5ld0JvYXJkW3Jvd0luZGV4ICsgaV1bY29sdW1uSW5kZXhdID09PSAnc2hpcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA+IDAgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyBpIC0gMV1bY29sdW1uSW5kZXhdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCArIGkgPCBib2FyZFNpemUgLSAxICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgaSArIDFdW2NvbHVtbkluZGV4XSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAoY29sdW1uSW5kZXggPiAwICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgaV1bY29sdW1uSW5kZXggLSAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAoY29sdW1uSW5kZXggPCBib2FyZFNpemUgLSAxICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgaV1bY29sdW1uSW5kZXggKyAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPiAwICYmIGNvbHVtbkluZGV4ID4gMCAmJiBuZXdCb2FyZFtyb3dJbmRleCArIGkgLSAxXVtjb2x1bW5JbmRleCAtIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCArIGkgPCBib2FyZFNpemUgLSAxICYmIGNvbHVtbkluZGV4ID4gMCAmJiBuZXdCb2FyZFtyb3dJbmRleCArIGkgKyAxXVtjb2x1bW5JbmRleCAtIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA+IDAgJiYgY29sdW1uSW5kZXggKyAxIDwgYm9hcmRTaXplIC0gMSAmJiBuZXdCb2FyZFtyb3dJbmRleCArIGkgLSAxXVtjb2x1bW5JbmRleCArIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCArIGkgPCBib2FyZFNpemUgLSAxICYmIGNvbHVtbkluZGV4ICsgMSA8IGJvYXJkU2l6ZSAtIDEgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyBpICsgMV1bY29sdW1uSW5kZXggKyAxXSA9PT0gJ3NoaXAnKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnT3ZlciA9IChldmVudDogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT25TaGlwID0gKHNoaXBJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIFVzdW5pxJljaWUgc3RhdGt1IHogcGxhbnN6eVxuICAgICAgICBzZXRCb2FyZChib2FyZC5tYXAocm93ID0+IHJvdy5tYXAoY2VsbCA9PiBjZWxsLmluY2x1ZGVzKHNoaXBJZCkgPyBudWxsIDogY2VsbCkpKTtcbiAgICBcbiAgICAgICAgLy8gUHJ6eXdyw7NjZW5pZSBzdGF0a3UgZG8gbGlzdHkgZG9zdMSZcG55Y2ggc3RhdGvDs3dcbiAgICAgICAgY29uc3Qgc2hpcFRvQWRkQmFjayA9IGF2YWlsYWJsZVNoaXBzLmZpbmQoc2hpcCA9PiBzaGlwLmlkID09PSBzaGlwSWQpO1xuICAgICAgICBpZiAoc2hpcFRvQWRkQmFjaykge1xuICAgICAgICAgICAgc2V0QXZhaWxhYmxlU2hpcHMoWy4uLmF2YWlsYWJsZVNoaXBzLCBzaGlwVG9BZGRCYWNrXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmQtbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5MYWJlbHMubWFwKChsYWJlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93SW5kZXh9IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e3Jvd0luZGV4ICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGNvbHVtbkluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uSW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNlbGwgJHtjZWxsID09PSAnc2hpcCcgPyAnc2hpcC1jZWxsJyA6ICcnfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwgPT09ICdzaGlwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tPblNoaXAoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiBoYW5kbGVEcm9wKGV2ZW50LCByb3dJbmRleCwgY29sdW1uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwc0RlcGxveWluZy1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRvc3RlcG5lIHN0YXRraTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVTaGlwcy5tYXAoKHNoaXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoaXAga2V5PXtpbmRleH0gaWQ9e3NoaXAuaWR9IHNpemU9e3NoaXAuc2l6ZX0gb25TaGlwUGxhY2VkPXsoKSA9PiBzZXRBdmFpbGFibGVTaGlwcyhhdmFpbGFibGVTaGlwcy5maWx0ZXIocyA9PiBzLmlkICE9PSBzaGlwLmlkKSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTaGlwIiwiaWQiLCJzaXplIiwib25TaGlwUGxhY2VkIiwiaXNWZXJ0aWNhbCIsInNldElzVmVydGljYWwiLCJ0b2dnbGVPcmllbnRhdGlvbiIsImhhbmRsZURyYWdTdGFydCIsImV2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJHYW1lQm9hcmRDb3B5IiwiYm9hcmRTaXplIiwiY29sdW1uTGFiZWxzIiwiaW5pdGlhbFNoaXBzIiwiZW1wdHlCb2FyZCIsImJvYXJkIiwic2V0Qm9hcmQiLCJhdmFpbGFibGVTaGlwcyIsInNldEF2YWlsYWJsZVNoaXBzIiwiaGFuZGxlRHJvcCIsInJvd0luZGV4IiwiY29sdW1uSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNoaXBJZCIsImdldERhdGEiLCJzaGlwU2l6ZSIsInBhcnNlSW50Iiwic2hpcE9yaWVudGF0aW9uIiwiY2FuUGxhY2VTaGlwIiwiY2FuUGxhY2VTaGlwQXQiLCJuZXdCb2FyZCIsImZpbHRlciIsInNoaXAiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVDbGlja09uU2hpcCIsInJvdyIsImNlbGwiLCJpbmNsdWRlcyIsInNoaXBUb0FkZEJhY2siLCJmaW5kIiwibGFiZWwiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwiaDIiLCJpbmRleCIsInMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard copy/index.tsx\n"));

/***/ })

});