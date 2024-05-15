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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoardCopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard copy/main.css\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Ship = (param)=>{\n    let { id, size, onShipPlaced } = param;\n    _s();\n    const [isVertical, setIsVertical] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOrientation = ()=>{\n        setIsVertical(!isVertical);\n    };\n    const handleDragStart = (event)=>{\n        event.dataTransfer.setData(\"shipId\", id); // Ustawienie id statku w danych przeciągania\n        event.dataTransfer.setData(\"shipSize\", size.toString());\n        event.dataTransfer.setData(\"shipOrientation\", isVertical ? \"vertical\" : \"horizontal\");\n    };\n    // const handleClick = () => {\n    //     onShipPlaced(); // Usunięcie statku z planszy\n    //     setIsVertical(false); // Przywrócenie orientacji na wartość domyślną\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ship \".concat(isVertical ? \"vertical\" : \"\"),\n        onClick: toggleOrientation,\n        draggable: true,\n        onDragStart: handleDragStart,\n        children: Array(size).fill(null).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mast\"\n            }, i, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Ship, \"iCcvOSkc8yP6hLUTInqXgS/NHaA=\");\n_c = Ship;\nfunction GameBoardCopy() {\n    _s1();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const initialShips = [\n        {\n            id: \"1\",\n            size: 4\n        },\n        {\n            id: \"2\",\n            size: 3\n        },\n        {\n            id: \"3\",\n            size: 3\n        },\n        {\n            id: \"4\",\n            size: 2\n        },\n        {\n            id: \"5\",\n            size: 2\n        },\n        {\n            id: \"6\",\n            size: 2\n        },\n        {\n            id: \"7\",\n            size: 1\n        },\n        {\n            id: \"8\",\n            size: 1\n        },\n        {\n            id: \"9\",\n            size: 1\n        },\n        {\n            id: \"10\",\n            size: 1\n        }\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    const [availableShips, setAvailableShips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialShips);\n    const handleDrop = (event, rowIndex, columnIndex)=>{\n        event.preventDefault();\n        const shipId = event.dataTransfer.getData(\"shipId\");\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        // Sprawdzenie, czy na planszy nie ma statków w obszarze wokół miejsca, gdzie chcemy postawić statek\n        const canPlaceShip = canPlaceShipAt(rowIndex, columnIndex, shipSize, shipOrientation);\n        if (canPlaceShip) {\n            const newBoard = [\n                ...board\n            ];\n            for(let i = 0; i < shipSize; i++){\n                if (shipOrientation === \"horizontal\") {\n                    newBoard[rowIndex][columnIndex + i] = \"ship\";\n                } else {\n                    newBoard[rowIndex + i][columnIndex] = \"ship\";\n                }\n            }\n            setBoard(newBoard);\n            setAvailableShips(availableShips.filter((ship)=>ship.id !== shipId));\n        } else {\n            // Jeśli nie można postawić statku na wybranym miejscu, możesz obsłużyć to w jakiś sposób, np. wyświetlając komunikat\n            console.log(\"Nie można postawić statku tutaj.\");\n        }\n    };\n    // Funkcja sprawdzająca, czy można postawić statek w danym miejscu na planszy\n    const canPlaceShipAt = (rowIndex, columnIndex, shipSize, shipOrientation)=>{\n        const newBoard = [\n            ...board\n        ];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                // Sprawdzenie, czy pole nie wychodzi poza planszę\n                if (columnIndex + i >= boardSize) {\n                    return false;\n                }\n                // Sprawdzenie, czy pole nie jest zajęte przez inny statek\n                if (newBoard[rowIndex][columnIndex + i] === \"ship\") {\n                    return false;\n                }\n                // Sprawdzenie obszaru wokół pola\n                if (rowIndex > 0 && newBoard[rowIndex - 1][columnIndex + i] === \"ship\" || rowIndex < boardSize - 1 && newBoard[rowIndex + 1][columnIndex + i] === \"ship\" || columnIndex > 0 && newBoard[rowIndex][columnIndex + i - 1] === \"ship\" || columnIndex + i < boardSize - 1 && newBoard[rowIndex][columnIndex + i + 1] === \"ship\" || rowIndex > 0 && columnIndex > 0 && newBoard[rowIndex - 1][columnIndex + i - 1] === \"ship\" || rowIndex > 0 && columnIndex + i < boardSize - 1 && newBoard[rowIndex - 1][columnIndex + i + 1] === \"ship\" || rowIndex < boardSize - 1 && columnIndex > 0 && newBoard[rowIndex + 1][columnIndex + i - 1] === \"ship\" || rowIndex < boardSize - 1 && columnIndex + i < boardSize - 1 && newBoard[rowIndex + 1][columnIndex + i + 1] === \"ship\") {\n                    return false;\n                }\n            } else {\n                if (rowIndex + i >= boardSize) {\n                    return false;\n                }\n                if (newBoard[rowIndex + i][columnIndex] === \"ship\") {\n                    return false;\n                }\n                if (rowIndex > 0 && newBoard[rowIndex + i - 1][columnIndex] === \"ship\" || rowIndex + i < boardSize - 1 && newBoard[rowIndex + i + 1][columnIndex] === \"ship\" || columnIndex > 0 && newBoard[rowIndex + i][columnIndex - 1] === \"ship\" || columnIndex < boardSize - 1 && newBoard[rowIndex + i][columnIndex + 1] === \"ship\" || rowIndex > 0 && columnIndex > 0 && newBoard[rowIndex + i - 1][columnIndex - 1] === \"ship\" || rowIndex + i < boardSize - 1 && columnIndex > 0 && newBoard[rowIndex + i + 1][columnIndex - 1] === \"ship\" || rowIndex > 0 && columnIndex + 1 < boardSize - 1 && newBoard[rowIndex + i - 1][columnIndex + 1] === \"ship\" || rowIndex + i < boardSize - 1 && columnIndex + 1 < boardSize - 1 && newBoard[rowIndex + i + 1][columnIndex + 1] === \"ship\") {\n                    return false;\n                }\n            }\n        }\n        return true;\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    const handleClickOnShip = (shipId)=>{\n        // Usunięcie statku z planszy\n        setBoard(board.map((row)=>row.map((cell)=>cell === shipId ? null : cell)));\n        // Przywrócenie statku do listy dostępnych statków\n        const shipToAddBack = availableShips.find((ship)=>ship.id === shipId);\n        if (shipToAddBack) {\n            setAvailableShips([\n                ...availableShips,\n                shipToAddBack\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 159,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, this),\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 164,\n                            columnNumber: 21\n                        }, this),\n                        row.map((cell, columnIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell === \"ship\" ? \"ship-cell\" : \"\"),\n                                onClick: ()=>{\n                                    if (cell === \"ship\") {\n                                        handleClickOnShip(cell);\n                                    }\n                                },\n                                onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n                                onDragOver: handleDragOver\n                            }, columnIndex, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, rowIndex, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 163,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shipsDeploying-main-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ships\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Dostepne statki\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 183,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ship-row\",\n                            children: availableShips.map((ship, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    id: ship.id,\n                                    size: ship.size,\n                                    onShipPlaced: ()=>setAvailableShips(availableShips.filter((s)=>s.id !== ship.id))\n                                }, index, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 186,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 184,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 182,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 181,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 155,\n        columnNumber: 9\n    }, this);\n}\n_s1(GameBoardCopy, \"ldrXb7PcW5kY9GtWkYZoSZbiHAU=\");\n_c1 = GameBoardCopy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Ship\");\n$RefreshReg$(_c1, \"GameBoardCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDckI7QUFRbkIsTUFBTUUsT0FBNEI7UUFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFOztJQUN6RCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MsTUFBTU8sb0JBQW9CO1FBQ3RCRCxjQUFjLENBQUNEO0lBQ25CO0lBRUEsTUFBTUcsa0JBQWtCLENBQUNDO1FBQ3JCQSxNQUFNQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVVCxLQUFLLDZDQUE2QztRQUN2Rk8sTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsWUFBWVIsS0FBS1MsUUFBUTtRQUNwREgsTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CTixhQUFhLGFBQWE7SUFDNUU7SUFFQSw4QkFBOEI7SUFDOUIsb0RBQW9EO0lBQ3BELDJFQUEyRTtJQUMzRSxLQUFLO0lBRUwscUJBQ0ksOERBQUNRO1FBQ0dDLFdBQVcsUUFBcUMsT0FBN0JULGFBQWEsYUFBYTtRQUM3Q1UsU0FBU1I7UUFDVFMsU0FBUztRQUNUQyxhQUFhVDtrQkFFWlUsTUFBTWYsTUFBTWdCLElBQUksQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQzVCLDhEQUFDVDtnQkFBWUMsV0FBVTtlQUFiUTs7Ozs7Ozs7OztBQUkxQjtHQTlCTXJCO0tBQUFBO0FBZ0NTLFNBQVNzQjs7SUFDcEIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxlQUFlO1FBQUM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUN2RSxNQUFNQyxlQUFlO1FBQ2pCO1lBQUV4QixJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQU1DLE1BQU07UUFBRTtLQUN2QjtJQUVELE1BQU13QixhQUFhVCxNQUFNTSxXQUFXTCxJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLElBQU1GLE1BQU1NLFdBQVdMLElBQUksQ0FBQztJQUMvRSxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBRzdCLCtDQUFRQSxDQUFDMkI7SUFDbkMsTUFBTSxDQUFDRyxnQkFBZ0JDLGtCQUFrQixHQUFHL0IsK0NBQVFBLENBQUMwQjtJQUVyRCxNQUFNTSxhQUFhLENBQUN2QixPQUF3QndCLFVBQWtCQztRQUMxRHpCLE1BQU0wQixjQUFjO1FBQ3BCLE1BQU1DLFNBQVMzQixNQUFNQyxZQUFZLENBQUMyQixPQUFPLENBQUM7UUFDMUMsTUFBTUMsV0FBV0MsU0FBUzlCLE1BQU1DLFlBQVksQ0FBQzJCLE9BQU8sQ0FBQztRQUNyRCxNQUFNRyxrQkFBa0IvQixNQUFNQyxZQUFZLENBQUMyQixPQUFPLENBQUM7UUFFbkQsb0dBQW9HO1FBQ3BHLE1BQU1JLGVBQWVDLGVBQWVULFVBQVVDLGFBQWFJLFVBQVVFO1FBRXJFLElBQUlDLGNBQWM7WUFDZCxNQUFNRSxXQUFXO21CQUFJZjthQUFNO1lBQzNCLElBQUssSUFBSU4sSUFBSSxHQUFHQSxJQUFJZ0IsVUFBVWhCLElBQUs7Z0JBQy9CLElBQUlrQixvQkFBb0IsY0FBYztvQkFDbENHLFFBQVEsQ0FBQ1YsU0FBUyxDQUFDQyxjQUFjWixFQUFFLEdBQUc7Z0JBQzFDLE9BQU87b0JBQ0hxQixRQUFRLENBQUNWLFdBQVdYLEVBQUUsQ0FBQ1ksWUFBWSxHQUFHO2dCQUMxQztZQUNKO1lBQ0FMLFNBQVNjO1lBQ1RaLGtCQUFrQkQsZUFBZWMsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLM0MsRUFBRSxLQUFLa0M7UUFDaEUsT0FBTztZQUNILHFIQUFxSDtZQUNySFUsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0o7SUFFQSw2RUFBNkU7SUFDN0UsTUFBTUwsaUJBQWlCLENBQUNULFVBQWtCQyxhQUFxQkksVUFBa0JFO1FBQzdFLE1BQU1HLFdBQVc7ZUFBSWY7U0FBTTtRQUUzQixJQUFLLElBQUlOLElBQUksR0FBR0EsSUFBSWdCLFVBQVVoQixJQUFLO1lBQy9CLElBQUlrQixvQkFBb0IsY0FBYztnQkFDbEMsa0RBQWtEO2dCQUNsRCxJQUFJTixjQUFjWixLQUFLRSxXQUFXO29CQUM5QixPQUFPO2dCQUNYO2dCQUNBLDBEQUEwRDtnQkFDMUQsSUFBSW1CLFFBQVEsQ0FBQ1YsU0FBUyxDQUFDQyxjQUFjWixFQUFFLEtBQUssUUFBUTtvQkFDaEQsT0FBTztnQkFDWDtnQkFDQSxpQ0FBaUM7Z0JBQ2pDLElBQ0ksV0FBWSxLQUFLcUIsUUFBUSxDQUFDVixXQUFXLEVBQUUsQ0FBQ0MsY0FBY1osRUFBRSxLQUFLLFVBQzVEVyxXQUFXVCxZQUFZLEtBQUttQixRQUFRLENBQUNWLFdBQVcsRUFBRSxDQUFDQyxjQUFjWixFQUFFLEtBQUssVUFDeEVZLGNBQWMsS0FBS1MsUUFBUSxDQUFDVixTQUFTLENBQUNDLGNBQWNaLElBQUksRUFBRSxLQUFLLFVBQy9EWSxjQUFjWixJQUFJRSxZQUFZLEtBQUttQixRQUFRLENBQUNWLFNBQVMsQ0FBQ0MsY0FBY1osSUFBSSxFQUFFLEtBQUssVUFDL0VXLFdBQVcsS0FBS0MsY0FBYyxLQUFLUyxRQUFRLENBQUNWLFdBQVcsRUFBRSxDQUFDQyxjQUFjWixJQUFJLEVBQUUsS0FBSyxVQUNuRlcsV0FBVyxLQUFLQyxjQUFjWixJQUFJRSxZQUFZLEtBQUttQixRQUFRLENBQUNWLFdBQVcsRUFBRSxDQUFDQyxjQUFjWixJQUFJLEVBQUUsS0FBSyxVQUNuR1csV0FBV1QsWUFBWSxLQUFLVSxjQUFjLEtBQUtTLFFBQVEsQ0FBQ1YsV0FBVyxFQUFFLENBQUNDLGNBQWNaLElBQUksRUFBRSxLQUFLLFVBQy9GVyxXQUFXVCxZQUFZLEtBQUtVLGNBQWNaLElBQUlFLFlBQVksS0FBS21CLFFBQVEsQ0FBQ1YsV0FBVyxFQUFFLENBQUNDLGNBQWNaLElBQUksRUFBRSxLQUFLLFFBQ2xIO29CQUNFLE9BQU87Z0JBQ1g7WUFDSixPQUFPO2dCQUNILElBQUlXLFdBQVdYLEtBQUtFLFdBQVc7b0JBQzNCLE9BQU87Z0JBQ1g7Z0JBQ0EsSUFBSW1CLFFBQVEsQ0FBQ1YsV0FBV1gsRUFBRSxDQUFDWSxZQUFZLEtBQUssUUFBUTtvQkFDaEQsT0FBTztnQkFDWDtnQkFDQSxJQUNJLFdBQVksS0FBS1MsUUFBUSxDQUFDVixXQUFXWCxJQUFJLEVBQUUsQ0FBQ1ksWUFBWSxLQUFLLFVBQzVERCxXQUFXWCxJQUFJRSxZQUFZLEtBQUttQixRQUFRLENBQUNWLFdBQVdYLElBQUksRUFBRSxDQUFDWSxZQUFZLEtBQUssVUFDNUVBLGNBQWMsS0FBS1MsUUFBUSxDQUFDVixXQUFXWCxFQUFFLENBQUNZLGNBQWMsRUFBRSxLQUFLLFVBQy9EQSxjQUFjVixZQUFZLEtBQUttQixRQUFRLENBQUNWLFdBQVdYLEVBQUUsQ0FBQ1ksY0FBYyxFQUFFLEtBQUssVUFDM0VELFdBQVcsS0FBS0MsY0FBYyxLQUFLUyxRQUFRLENBQUNWLFdBQVdYLElBQUksRUFBRSxDQUFDWSxjQUFjLEVBQUUsS0FBSyxVQUNuRkQsV0FBV1gsSUFBSUUsWUFBWSxLQUFLVSxjQUFjLEtBQUtTLFFBQVEsQ0FBQ1YsV0FBV1gsSUFBSSxFQUFFLENBQUNZLGNBQWMsRUFBRSxLQUFLLFVBQ25HRCxXQUFXLEtBQUtDLGNBQWMsSUFBSVYsWUFBWSxLQUFLbUIsUUFBUSxDQUFDVixXQUFXWCxJQUFJLEVBQUUsQ0FBQ1ksY0FBYyxFQUFFLEtBQUssVUFDbkdELFdBQVdYLElBQUlFLFlBQVksS0FBS1UsY0FBYyxJQUFJVixZQUFZLEtBQUttQixRQUFRLENBQUNWLFdBQVdYLElBQUksRUFBRSxDQUFDWSxjQUFjLEVBQUUsS0FBSyxRQUN0SDtvQkFDRSxPQUFPO2dCQUNYO1lBQ0o7UUFDSjtRQUNBLE9BQU87SUFDWDtJQUVBLE1BQU1jLGlCQUFpQixDQUFDdkM7UUFDcEJBLE1BQU0wQixjQUFjO0lBQ3hCO0lBRUEsTUFBTWMsb0JBQW9CLENBQUNiO1FBQ3ZCLDZCQUE2QjtRQUM3QlAsU0FBU0QsTUFBTVIsR0FBRyxDQUFDOEIsQ0FBQUEsTUFBT0EsSUFBSTlCLEdBQUcsQ0FBQytCLENBQUFBLE9BQVFBLFNBQVNmLFNBQVMsT0FBT2U7UUFFbkUsa0RBQWtEO1FBQ2xELE1BQU1DLGdCQUFnQnRCLGVBQWV1QixJQUFJLENBQUNSLENBQUFBLE9BQVFBLEtBQUszQyxFQUFFLEtBQUtrQztRQUM5RCxJQUFJZ0IsZUFBZTtZQUNmckIsa0JBQWtCO21CQUFJRDtnQkFBZ0JzQjthQUFjO1FBQ3hEO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ3ZDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7b0JBQ2RXLGFBQWFMLEdBQUcsQ0FBQyxDQUFDa0MsT0FBT2hDLGtCQUN0Qiw4REFBQ1Q7NEJBQVlDLFdBQVU7c0NBQVN3QzsyQkFBdEJoQzs7Ozs7Ozs7Ozs7WUFHakJNLE1BQU1SLEdBQUcsQ0FBQyxDQUFDOEIsS0FBS2pCLHlCQUNiLDhEQUFDcEI7b0JBQW1CQyxXQUFVOztzQ0FDMUIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFTbUIsV0FBVzs7Ozs7O3dCQUNsQ2lCLElBQUk5QixHQUFHLENBQUMsQ0FBQytCLE1BQU1qQiw0QkFDWiw4REFBQ3JCO2dDQUVHQyxXQUFXLFFBQTJDLE9BQW5DcUMsU0FBUyxTQUFTLGNBQWM7Z0NBQ25EcEMsU0FBUztvQ0FDTCxJQUFJb0MsU0FBUyxRQUFRO3dDQUNqQkYsa0JBQWtCRTtvQ0FDdEI7Z0NBQ0o7Z0NBQ0FJLFFBQVEsQ0FBQzlDLFFBQVV1QixXQUFXdkIsT0FBT3dCLFVBQVVDO2dDQUMvQ3NCLFlBQVlSOytCQVJQZDs7Ozs7O21CQUpQRDs7Ozs7MEJBa0JkLDhEQUFDcEI7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQzJDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUM1Qzs0QkFBSUMsV0FBVTtzQ0FDVmdCLGVBQWVWLEdBQUcsQ0FBQyxDQUFDeUIsTUFBTWEsc0JBQ3ZCLDhEQUFDekQ7b0NBQWlCQyxJQUFJMkMsS0FBSzNDLEVBQUU7b0NBQUVDLE1BQU0wQyxLQUFLMUMsSUFBSTtvQ0FBRUMsY0FBYyxJQUFNMkIsa0JBQWtCRCxlQUFlYyxNQUFNLENBQUNlLENBQUFBLElBQUtBLEVBQUV6RCxFQUFFLEtBQUsyQyxLQUFLM0MsRUFBRTttQ0FBdEh3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZDO0lBeEp3Qm5DO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4PzZiYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL21haW4uY3NzJ1xuXG5pbnRlcmZhY2UgU2hpcFByb3BzIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBvblNoaXBQbGFjZWQ6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNoaXA6IFJlYWN0LkZDPFNoaXBQcm9wcz4gPSAoeyBpZCwgc2l6ZSwgb25TaGlwUGxhY2VkIH0pID0+IHtcbiAgICBjb25zdCBbaXNWZXJ0aWNhbCwgc2V0SXNWZXJ0aWNhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNWZXJ0aWNhbCghaXNWZXJ0aWNhbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChldmVudDogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdzaGlwSWQnLCBpZCk7IC8vIFVzdGF3aWVuaWUgaWQgc3RhdGt1IHcgZGFueWNoIHByemVjacSFZ2FuaWFcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NoaXBTaXplJywgc2l6ZS50b1N0cmluZygpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NoaXBPcmllbnRhdGlvbicsIGlzVmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKTtcbiAgICB9O1xuXG4gICAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gICAgIG9uU2hpcFBsYWNlZCgpOyAvLyBVc3VuacSZY2llIHN0YXRrdSB6IHBsYW5zenlcbiAgICAvLyAgICAgc2V0SXNWZXJ0aWNhbChmYWxzZSk7IC8vIFByenl3csOzY2VuaWUgb3JpZW50YWNqaSBuYSB3YXJ0b8WbxIcgZG9tecWbbG7EhVxuICAgIC8vIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hpcCAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJyd9YH0gXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcmllbnRhdGlvbn1cbiAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgICAgPlxuICAgICAgICAgICAge0FycmF5KHNpemUpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1hc3RcIj48L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkQ29weSgpIHtcbiAgICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgICBjb25zdCBjb2x1bW5MYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBpbml0aWFsU2hpcHMgPSBbXG4gICAgICAgIHsgaWQ6ICcxJywgc2l6ZTogNCB9LFxuICAgICAgICB7IGlkOiAnMicsIHNpemU6IDMgfSxcbiAgICAgICAgeyBpZDogJzMnLCBzaXplOiAzIH0sXG4gICAgICAgIHsgaWQ6ICc0Jywgc2l6ZTogMiB9LFxuICAgICAgICB7IGlkOiAnNScsIHNpemU6IDIgfSxcbiAgICAgICAgeyBpZDogJzYnLCBzaXplOiAyIH0sXG4gICAgICAgIHsgaWQ6ICc3Jywgc2l6ZTogMSB9LFxuICAgICAgICB7IGlkOiAnOCcsIHNpemU6IDEgfSxcbiAgICAgICAgeyBpZDogJzknLCBzaXplOiAxIH0sXG4gICAgICAgIHsgaWQ6ICcxMCcsIHNpemU6IDEgfVxuICAgIF07XG5cbiAgICBjb25zdCBlbXB0eUJvYXJkID0gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkpO1xuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoZW1wdHlCb2FyZCk7XG4gICAgY29uc3QgW2F2YWlsYWJsZVNoaXBzLCBzZXRBdmFpbGFibGVTaGlwc10gPSB1c2VTdGF0ZShpbml0aWFsU2hpcHMpO1xuXG4gICAgY29uc3QgaGFuZGxlRHJvcCA9IChldmVudDogUmVhY3QuRHJhZ0V2ZW50LCByb3dJbmRleDogbnVtYmVyLCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNoaXBJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwSWQnKTsgXG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gcGFyc2VJbnQoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBTaXplJykpO1xuICAgICAgICBjb25zdCBzaGlwT3JpZW50YXRpb24gPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcE9yaWVudGF0aW9uJyk7XG4gICAgXG4gICAgICAgIC8vIFNwcmF3ZHplbmllLCBjenkgbmEgcGxhbnN6eSBuaWUgbWEgc3RhdGvDs3cgdyBvYnN6YXJ6ZSB3b2vDs8WCIG1pZWpzY2EsIGdkemllIGNoY2VteSBwb3N0YXdpxIcgc3RhdGVrXG4gICAgICAgIGNvbnN0IGNhblBsYWNlU2hpcCA9IGNhblBsYWNlU2hpcEF0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgc2hpcFNpemUsIHNoaXBPcmllbnRhdGlvbik7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2FuUGxhY2VTaGlwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdCb2FyZCA9IFsuLi5ib2FyZF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Qm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4ICsgaV0gPSAnc2hpcCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Qm9hcmRbcm93SW5kZXggKyBpXVtjb2x1bW5JbmRleF0gPSAnc2hpcCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xuICAgICAgICAgICAgc2V0QXZhaWxhYmxlU2hpcHMoYXZhaWxhYmxlU2hpcHMuZmlsdGVyKHNoaXAgPT4gc2hpcC5pZCAhPT0gc2hpcElkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBKZcWbbGkgbmllIG1vxbxuYSBwb3N0YXdpxIcgc3RhdGt1IG5hIHd5YnJhbnltIG1pZWpzY3UsIG1vxbxlc3ogb2JzxYJ1xbx5xIcgdG8gdyBqYWtpxZsgc3Bvc8OzYiwgbnAuIHd5xZt3aWV0bGFqxIVjIGtvbXVuaWthdFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOaWUgbW/FvG5hIHBvc3Rhd2nEhyBzdGF0a3UgdHV0YWouXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvLyBGdW5rY2phIHNwcmF3ZHphasSFY2EsIGN6eSBtb8W8bmEgcG9zdGF3acSHIHN0YXRlayB3IGRhbnltIG1pZWpzY3UgbmEgcGxhbnN6eVxuICAgIGNvbnN0IGNhblBsYWNlU2hpcEF0ID0gKHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIsIHNoaXBTaXplOiBudW1iZXIsIHNoaXBPcmllbnRhdGlvbjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0JvYXJkID0gWy4uLmJvYXJkXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemU7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgLy8gU3ByYXdkemVuaWUsIGN6eSBwb2xlIG5pZSB3eWNob2R6aSBwb3phIHBsYW5zesSZXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ICsgaSA+PSBib2FyZFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTcHJhd2R6ZW5pZSwgY3p5IHBvbGUgbmllIGplc3QgemFqxJl0ZSBwcnpleiBpbm55IHN0YXRla1xuICAgICAgICAgICAgICAgIGlmIChuZXdCb2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXggKyBpXSA9PT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3ByYXdkemVuaWUgb2JzemFydSB3b2vDs8WCIHBvbGFcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA+IDAgJiYgbmV3Qm9hcmRbcm93SW5kZXggLSAxXVtjb2x1bW5JbmRleCArIGldID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA8IGJvYXJkU2l6ZSAtIDEgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyAxXVtjb2x1bW5JbmRleCArIGldID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChjb2x1bW5JbmRleCA+IDAgJiYgbmV3Qm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4ICsgaSAtIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChjb2x1bW5JbmRleCArIGkgPCBib2FyZFNpemUgLSAxICYmIG5ld0JvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleCArIGkgKyAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPiAwICYmIGNvbHVtbkluZGV4ID4gMCAmJiBuZXdCb2FyZFtyb3dJbmRleCAtIDFdW2NvbHVtbkluZGV4ICsgaSAtIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA+IDAgJiYgY29sdW1uSW5kZXggKyBpIDwgYm9hcmRTaXplIC0gMSAmJiBuZXdCb2FyZFtyb3dJbmRleCAtIDFdW2NvbHVtbkluZGV4ICsgaSArIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA8IGJvYXJkU2l6ZSAtIDEgJiYgY29sdW1uSW5kZXggPiAwICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgMV1bY29sdW1uSW5kZXggKyBpIC0gMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4IDwgYm9hcmRTaXplIC0gMSAmJiBjb2x1bW5JbmRleCArIGkgPCBib2FyZFNpemUgLSAxICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgMV1bY29sdW1uSW5kZXggKyBpICsgMV0gPT09ICdzaGlwJylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ICsgaSA+PSBib2FyZFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3Qm9hcmRbcm93SW5kZXggKyBpXVtjb2x1bW5JbmRleF0gPT09ICdzaGlwJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ID4gMCAmJiBuZXdCb2FyZFtyb3dJbmRleCArIGkgLSAxXVtjb2x1bW5JbmRleF0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ICsgaSA8IGJvYXJkU2l6ZSAtIDEgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyBpICsgMV1bY29sdW1uSW5kZXhdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChjb2x1bW5JbmRleCA+IDAgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyBpXVtjb2x1bW5JbmRleCAtIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChjb2x1bW5JbmRleCA8IGJvYXJkU2l6ZSAtIDEgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyBpXVtjb2x1bW5JbmRleCArIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA+IDAgJiYgY29sdW1uSW5kZXggPiAwICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgaSAtIDFdW2NvbHVtbkluZGV4IC0gMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ICsgaSA8IGJvYXJkU2l6ZSAtIDEgJiYgY29sdW1uSW5kZXggPiAwICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgaSArIDFdW2NvbHVtbkluZGV4IC0gMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ID4gMCAmJiBjb2x1bW5JbmRleCArIDEgPCBib2FyZFNpemUgLSAxICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgaSAtIDFdW2NvbHVtbkluZGV4ICsgMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ICsgaSA8IGJvYXJkU2l6ZSAtIDEgJiYgY29sdW1uSW5kZXggKyAxIDwgYm9hcmRTaXplIC0gMSAmJiBuZXdCb2FyZFtyb3dJbmRleCArIGkgKyAxXVtjb2x1bW5JbmRleCArIDFdID09PSAnc2hpcCcpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPblNoaXAgPSAoc2hpcElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gVXN1bmnEmWNpZSBzdGF0a3UgeiBwbGFuc3p5XG4gICAgICAgIHNldEJvYXJkKGJvYXJkLm1hcChyb3cgPT4gcm93Lm1hcChjZWxsID0+IGNlbGwgPT09IHNoaXBJZCA/IG51bGwgOiBjZWxsKSkpO1xuICAgIFxuICAgICAgICAvLyBQcnp5d3LDs2NlbmllIHN0YXRrdSBkbyBsaXN0eSBkb3N0xJlwbnljaCBzdGF0a8Ozd1xuICAgICAgICBjb25zdCBzaGlwVG9BZGRCYWNrID0gYXZhaWxhYmxlU2hpcHMuZmluZChzaGlwID0+IHNoaXAuaWQgPT09IHNoaXBJZCk7XG4gICAgICAgIGlmIChzaGlwVG9BZGRCYWNrKSB7XG4gICAgICAgICAgICBzZXRBdmFpbGFibGVTaGlwcyhbLi4uYXZhaWxhYmxlU2hpcHMsIHNoaXBUb0FkZEJhY2tdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVCb2FyZC1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge2NvbHVtbkxhYmVscy5tYXAoKGxhYmVsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2JvYXJkLm1hcCgocm93LCByb3dJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3dJbmRleH0gY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj57cm93SW5kZXggKyAxfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW5JbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2VsbCAke2NlbGwgPT09ICdzaGlwJyA/ICdzaGlwLWNlbGwnIDogJyd9YH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbCA9PT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGlja09uU2hpcChjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZXZlbnQpID0+IGhhbmRsZURyb3AoZXZlbnQsIHJvd0luZGV4LCBjb2x1bW5JbmRleCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2hhbmRsZURyYWdPdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBzRGVwbG95aW5nLW1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RG9zdGVwbmUgc3RhdGtpPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZVNoaXBzLm1hcCgoc2hpcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hpcCBrZXk9e2luZGV4fSBpZD17c2hpcC5pZH0gc2l6ZT17c2hpcC5zaXplfSBvblNoaXBQbGFjZWQ9eygpID0+IHNldEF2YWlsYWJsZVNoaXBzKGF2YWlsYWJsZVNoaXBzLmZpbHRlcihzID0+IHMuaWQgIT09IHNoaXAuaWQpKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNoaXAiLCJpZCIsInNpemUiLCJvblNoaXBQbGFjZWQiLCJpc1ZlcnRpY2FsIiwic2V0SXNWZXJ0aWNhbCIsInRvZ2dsZU9yaWVudGF0aW9uIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsIkdhbWVCb2FyZENvcHkiLCJib2FyZFNpemUiLCJjb2x1bW5MYWJlbHMiLCJpbml0aWFsU2hpcHMiLCJlbXB0eUJvYXJkIiwiYm9hcmQiLCJzZXRCb2FyZCIsImF2YWlsYWJsZVNoaXBzIiwic2V0QXZhaWxhYmxlU2hpcHMiLCJoYW5kbGVEcm9wIiwicm93SW5kZXgiLCJjb2x1bW5JbmRleCIsInByZXZlbnREZWZhdWx0Iiwic2hpcElkIiwiZ2V0RGF0YSIsInNoaXBTaXplIiwicGFyc2VJbnQiLCJzaGlwT3JpZW50YXRpb24iLCJjYW5QbGFjZVNoaXAiLCJjYW5QbGFjZVNoaXBBdCIsIm5ld0JvYXJkIiwiZmlsdGVyIiwic2hpcCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZUNsaWNrT25TaGlwIiwicm93IiwiY2VsbCIsInNoaXBUb0FkZEJhY2siLCJmaW5kIiwibGFiZWwiLCJvbkRyb3AiLCJvbkRyYWdPdmVyIiwiaDIiLCJpbmRleCIsInMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard copy/index.tsx\n"));

/***/ })

});