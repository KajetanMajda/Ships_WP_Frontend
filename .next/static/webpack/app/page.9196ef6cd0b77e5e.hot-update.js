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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoardCopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard copy/main.css\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Ship = (param)=>{\n    let { id, size, onShipPlaced } = param;\n    _s();\n    const [isVertical, setIsVertical] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOrientation = ()=>{\n        setIsVertical(!isVertical);\n    };\n    const handleDragStart = (event)=>{\n        event.dataTransfer.setData(\"shipId\", id); // Ustawienie id statku w danych przeciągania\n        event.dataTransfer.setData(\"shipSize\", size.toString());\n        event.dataTransfer.setData(\"shipOrientation\", isVertical ? \"vertical\" : \"horizontal\");\n    };\n    // const handleClick = () => {\n    //     onShipPlaced(); // Usunięcie statku z planszy\n    //     setIsVertical(false); // Przywrócenie orientacji na wartość domyślną\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ship \".concat(isVertical ? \"vertical\" : \"\"),\n        onClick: toggleOrientation,\n        draggable: true,\n        onDragStart: handleDragStart,\n        children: Array(size).fill(null).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mast\"\n            }, i, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Ship, \"iCcvOSkc8yP6hLUTInqXgS/NHaA=\");\n_c = Ship;\nfunction GameBoardCopy() {\n    _s1();\n    const boardSize = 10;\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const initialShips = [\n        {\n            id: \"1\",\n            size: 4\n        },\n        {\n            id: \"2\",\n            size: 3\n        },\n        {\n            id: \"3\",\n            size: 3\n        },\n        {\n            id: \"4\",\n            size: 2\n        },\n        {\n            id: \"5\",\n            size: 2\n        },\n        {\n            id: \"6\",\n            size: 2\n        },\n        {\n            id: \"7\",\n            size: 1\n        },\n        {\n            id: \"8\",\n            size: 1\n        },\n        {\n            id: \"9\",\n            size: 1\n        },\n        {\n            id: \"10\",\n            size: 1\n        }\n    ];\n    const emptyBoard = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(emptyBoard);\n    const [availableShips, setAvailableShips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialShips);\n    // Funkcja handleDrop\n    const handleDrop = (event, rowIndex, columnIndex)=>{\n        event.preventDefault();\n        const shipId = event.dataTransfer.getData(\"shipId\");\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        // Sprawdzenie, czy na planszy nie ma statków w obszarze wokół miejsca, gdzie chcemy postawić statek\n        const canPlaceShip = canPlaceShipAt(rowIndex, columnIndex, shipSize, shipOrientation);\n        if (canPlaceShip) {\n            const newBoard = [\n                ...board\n            ];\n            for(let i = 0; i < shipSize; i++){\n                if (shipOrientation === \"horizontal\") {\n                    newBoard[rowIndex][columnIndex + i] = {\n                        id: shipId,\n                        size: shipSize\n                    };\n                } else {\n                    newBoard[rowIndex + i][columnIndex] = {\n                        id: shipId,\n                        size: shipSize\n                    };\n                }\n            }\n            setBoard(newBoard);\n            setAvailableShips(availableShips.filter((ship)=>ship.id !== shipId));\n        } else {\n            console.log(\"Nie można postawić statku tutaj.\");\n        }\n    };\n    // Funkcja sprawdzająca, czy można postawić statek w danym miejscu na planszy\n    const canPlaceShipAt = (rowIndex, columnIndex, shipSize, shipOrientation)=>{\n        const newBoard = [\n            ...board\n        ];\n        for(let i = 0; i < shipSize; i++){\n            if (shipOrientation === \"horizontal\") {\n                // Sprawdzenie, czy pole nie wychodzi poza planszę\n                if (columnIndex + i >= boardSize) {\n                    return false;\n                }\n                // Sprawdzenie, czy pole nie jest zajęte przez inny statek\n                if (newBoard[rowIndex][columnIndex + i] === \"ship\") {\n                    return false;\n                }\n                // Sprawdzenie obszaru wokół pola\n                if (rowIndex > 0 && newBoard[rowIndex - 1][columnIndex + i] === \"ship\" || rowIndex < boardSize - 1 && newBoard[rowIndex + 1][columnIndex + i] === \"ship\" || columnIndex > 0 && newBoard[rowIndex][columnIndex + i - 1] === \"ship\" || columnIndex + i < boardSize - 1 && newBoard[rowIndex][columnIndex + i + 1] === \"ship\" || rowIndex > 0 && columnIndex > 0 && newBoard[rowIndex - 1][columnIndex + i - 1] === \"ship\" || rowIndex > 0 && columnIndex + i < boardSize - 1 && newBoard[rowIndex - 1][columnIndex + i + 1] === \"ship\" || rowIndex < boardSize - 1 && columnIndex > 0 && newBoard[rowIndex + 1][columnIndex + i - 1] === \"ship\" || rowIndex < boardSize - 1 && columnIndex + i < boardSize - 1 && newBoard[rowIndex + 1][columnIndex + i + 1] === \"ship\") {\n                    return false;\n                }\n            } else {\n                if (rowIndex + i >= boardSize) {\n                    return false;\n                }\n                if (newBoard[rowIndex + i][columnIndex] === \"ship\") {\n                    return false;\n                }\n                if (rowIndex > 0 && newBoard[rowIndex + i - 1][columnIndex] === \"ship\" || rowIndex + i < boardSize - 1 && newBoard[rowIndex + i + 1][columnIndex] === \"ship\" || columnIndex > 0 && newBoard[rowIndex + i][columnIndex - 1] === \"ship\" || columnIndex < boardSize - 1 && newBoard[rowIndex + i][columnIndex + 1] === \"ship\" || rowIndex > 0 && columnIndex > 0 && newBoard[rowIndex + i - 1][columnIndex - 1] === \"ship\" || rowIndex + i < boardSize - 1 && columnIndex > 0 && newBoard[rowIndex + i + 1][columnIndex - 1] === \"ship\" || rowIndex > 0 && columnIndex + 1 < boardSize - 1 && newBoard[rowIndex + i - 1][columnIndex + 1] === \"ship\" || rowIndex + i < boardSize - 1 && columnIndex + 1 < boardSize - 1 && newBoard[rowIndex + i + 1][columnIndex + 1] === \"ship\") {\n                    return false;\n                }\n            }\n        }\n        return true;\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    const handleClickOnShip = (shipId)=>{\n        // Usunięcie statku z planszy\n        setBoard(board.map((row)=>row.map((cell)=>cell && cell.id === shipId ? null : cell)));\n        // Przywrócenie statku do listy dostępnych statków\n        const shipToAddBack = availableShips.find((ship)=>ship.id === shipId);\n        if (shipToAddBack) {\n            setAvailableShips([\n                ...availableShips,\n                shipToAddBack\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 159,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, this),\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: rowIndex + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 164,\n                            columnNumber: 21\n                        }, this),\n                        row.map((cell, columnIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell \".concat(cell && cell.id ? \"ship-cell\" : \"\"),\n                                onClick: ()=>{\n                                    if (cell === \"ship\") {\n                                        handleClickOnShip(cell);\n                                    }\n                                },\n                                onDrop: (event)=>handleDrop(event, rowIndex, columnIndex),\n                                onDragOver: handleDragOver\n                            }, columnIndex, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, rowIndex, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 163,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shipsDeploying-main-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ships\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Dostepne statki\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 183,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ship-row\",\n                            children: availableShips.map((ship, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    id: ship.id,\n                                    size: ship.size,\n                                    onShipPlaced: ()=>setAvailableShips(availableShips.filter((s)=>s.id !== ship.id))\n                                }, index, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 186,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 184,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 182,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 181,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 155,\n        columnNumber: 9\n    }, this);\n}\n_s1(GameBoardCopy, \"ldrXb7PcW5kY9GtWkYZoSZbiHAU=\");\n_c1 = GameBoardCopy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Ship\");\n$RefreshReg$(_c1, \"GameBoardCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDckI7QUFRbkIsTUFBTUUsT0FBNEI7UUFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFOztJQUN6RCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MsTUFBTU8sb0JBQW9CO1FBQ3RCRCxjQUFjLENBQUNEO0lBQ25CO0lBRUEsTUFBTUcsa0JBQWtCLENBQUNDO1FBQ3JCQSxNQUFNQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVVCxLQUFLLDZDQUE2QztRQUN2Rk8sTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsWUFBWVIsS0FBS1MsUUFBUTtRQUNwREgsTUFBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CTixhQUFhLGFBQWE7SUFDNUU7SUFFQSw4QkFBOEI7SUFDOUIsb0RBQW9EO0lBQ3BELDJFQUEyRTtJQUMzRSxLQUFLO0lBRUwscUJBQ0ksOERBQUNRO1FBQ0dDLFdBQVcsUUFBcUMsT0FBN0JULGFBQWEsYUFBYTtRQUM3Q1UsU0FBU1I7UUFDVFMsU0FBUztRQUNUQyxhQUFhVDtrQkFFWlUsTUFBTWYsTUFBTWdCLElBQUksQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQzVCLDhEQUFDVDtnQkFBWUMsV0FBVTtlQUFiUTs7Ozs7Ozs7OztBQUkxQjtHQTlCTXJCO0tBQUFBO0FBZ0NTLFNBQVNzQjs7SUFDcEIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxlQUFlO1FBQUM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7S0FBSTtJQUN2RSxNQUFNQyxlQUFlO1FBQ2pCO1lBQUV4QixJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZQUFFRCxJQUFJO1lBQUtDLE1BQU07UUFBRTtRQUNuQjtZ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QyxXQUFXLFFBQTJDLE9BQW5DcUMsUUFBUUEsS0FBS2pELEVBQUUsR0FBRyxjQUFjO2dDQUNuRGEsU0FBUztvQ0FDTCxJQUFJb0MsU0FBUyxRQUFRO3dDQUNqQkYsa0JBQWtCRTtvQ0FDdEI7Z0NBQ0o7Z0NBQ0FJLFFBQVEsQ0FBQzlDLFFBQVV1QixXQUFXdkIsT0FBT3dCLFVBQVVDO2dDQUMvQ3NCLFlBQVlSOytCQVJQZDs7Ozs7O21CQUpQRDs7Ozs7MEJBa0JkLDhEQUFDcEI7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQzJDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUM1Qzs0QkFBSUMsV0FBVTtzQ0FDVmdCLGVBQWVWLEdBQUcsQ0FBQyxDQUFDeUIsTUFBTWEsc0JBQ3ZCLDhEQUFDekQ7b0NBQWlCQyxJQUFJMkMsS0FBSzNDLEVBQUU7b0NBQUVDLE1BQU0wQyxLQUFLMUMsSUFBSTtvQ0FBRUMsY0FBYyxJQUFNMkIsa0JBQWtCRCxlQUFlYyxNQUFNLENBQUNlLENBQUFBLElBQUtBLEVBQUV6RCxFQUFFLEtBQUsyQyxLQUFLM0MsRUFBRTttQ0FBdEh3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZDO0lBeEp3Qm5DO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4PzZiYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL21haW4uY3NzJ1xuXG5pbnRlcmZhY2UgU2hpcFByb3BzIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBvblNoaXBQbGFjZWQ6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNoaXA6IFJlYWN0LkZDPFNoaXBQcm9wcz4gPSAoeyBpZCwgc2l6ZSwgb25TaGlwUGxhY2VkIH0pID0+IHtcbiAgICBjb25zdCBbaXNWZXJ0aWNhbCwgc2V0SXNWZXJ0aWNhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNWZXJ0aWNhbCghaXNWZXJ0aWNhbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWdTdGFydCA9IChldmVudDogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdzaGlwSWQnLCBpZCk7IC8vIFVzdGF3aWVuaWUgaWQgc3RhdGt1IHcgZGFueWNoIHByemVjacSFZ2FuaWFcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NoaXBTaXplJywgc2l6ZS50b1N0cmluZygpKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NoaXBPcmllbnRhdGlvbicsIGlzVmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKTtcbiAgICB9O1xuXG4gICAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gICAgIG9uU2hpcFBsYWNlZCgpOyAvLyBVc3VuacSZY2llIHN0YXRrdSB6IHBsYW5zenlcbiAgICAvLyAgICAgc2V0SXNWZXJ0aWNhbChmYWxzZSk7IC8vIFByenl3csOzY2VuaWUgb3JpZW50YWNqaSBuYSB3YXJ0b8WbxIcgZG9tecWbbG7EhVxuICAgIC8vIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2hpcCAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJyd9YH0gXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcmllbnRhdGlvbn1cbiAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgICAgPlxuICAgICAgICAgICAge0FycmF5KHNpemUpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1hc3RcIj48L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkQ29weSgpIHtcbiAgICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgICBjb25zdCBjb2x1bW5MYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBpbml0aWFsU2hpcHMgPSBbXG4gICAgICAgIHsgaWQ6ICcxJywgc2l6ZTogNCB9LFxuICAgICAgICB7IGlkOiAnMicsIHNpemU6IDMgfSxcbiAgICAgICAgeyBpZDogJzMnLCBzaXplOiAzIH0sXG4gICAgICAgIHsgaWQ6ICc0Jywgc2l6ZTogMiB9LFxuICAgICAgICB7IGlkOiAnNScsIHNpemU6IDIgfSxcbiAgICAgICAgeyBpZDogJzYnLCBzaXplOiAyIH0sXG4gICAgICAgIHsgaWQ6ICc3Jywgc2l6ZTogMSB9LFxuICAgICAgICB7IGlkOiAnOCcsIHNpemU6IDEgfSxcbiAgICAgICAgeyBpZDogJzknLCBzaXplOiAxIH0sXG4gICAgICAgIHsgaWQ6ICcxMCcsIHNpemU6IDEgfVxuICAgIF07XG5cbiAgICBjb25zdCBlbXB0eUJvYXJkID0gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkpO1xuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoZW1wdHlCb2FyZCk7XG4gICAgY29uc3QgW2F2YWlsYWJsZVNoaXBzLCBzZXRBdmFpbGFibGVTaGlwc10gPSB1c2VTdGF0ZShpbml0aWFsU2hpcHMpO1xuXG4gICAgLy8gRnVua2NqYSBoYW5kbGVEcm9wXG5jb25zdCBoYW5kbGVEcm9wID0gKGV2ZW50OiBSZWFjdC5EcmFnRXZlbnQsIHJvd0luZGV4OiBudW1iZXIsIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNoaXBJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdzaGlwSWQnKTsgXG4gICAgY29uc3Qgc2hpcFNpemUgPSBwYXJzZUludChldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcFNpemUnKSk7XG4gICAgY29uc3Qgc2hpcE9yaWVudGF0aW9uID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBPcmllbnRhdGlvbicpO1xuXG4gICAgLy8gU3ByYXdkemVuaWUsIGN6eSBuYSBwbGFuc3p5IG5pZSBtYSBzdGF0a8OzdyB3IG9ic3phcnplIHdva8OzxYIgbWllanNjYSwgZ2R6aWUgY2hjZW15IHBvc3Rhd2nEhyBzdGF0ZWtcbiAgICBjb25zdCBjYW5QbGFjZVNoaXAgPSBjYW5QbGFjZVNoaXBBdChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHNoaXBTaXplLCBzaGlwT3JpZW50YXRpb24pO1xuICAgIFxuICAgIGlmIChjYW5QbGFjZVNoaXApIHtcbiAgICAgICAgY29uc3QgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIG5ld0JvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleCArIGldID0geyBpZDogc2hpcElkLCBzaXplOiBzaGlwU2l6ZSB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdCb2FyZFtyb3dJbmRleCArIGldW2NvbHVtbkluZGV4XSA9IHsgaWQ6IHNoaXBJZCwgc2l6ZTogc2hpcFNpemUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRCb2FyZChuZXdCb2FyZCk7XG4gICAgICAgIHNldEF2YWlsYWJsZVNoaXBzKGF2YWlsYWJsZVNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAuaWQgIT09IHNoaXBJZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmllIG1vxbxuYSBwb3N0YXdpxIcgc3RhdGt1IHR1dGFqLlwiKTtcbiAgICB9XG59O1xuICAgIFxuICAgIC8vIEZ1bmtjamEgc3ByYXdkemFqxIVjYSwgY3p5IG1vxbxuYSBwb3N0YXdpxIcgc3RhdGVrIHcgZGFueW0gbWllanNjdSBuYSBwbGFuc3p5XG4gICAgY29uc3QgY2FuUGxhY2VTaGlwQXQgPSAocm93SW5kZXg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlciwgc2hpcFNpemU6IG51bWJlciwgc2hpcE9yaWVudGF0aW9uOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3QgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBTcHJhd2R6ZW5pZSwgY3p5IHBvbGUgbmllIHd5Y2hvZHppIHBvemEgcGxhbnN6xJlcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggKyBpID49IGJvYXJkU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNwcmF3ZHplbmllLCBjenkgcG9sZSBuaWUgamVzdCB6YWrEmXRlIHByemV6IGlubnkgc3RhdGVrXG4gICAgICAgICAgICAgICAgaWYgKG5ld0JvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleCArIGldID09PSAnc2hpcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTcHJhd2R6ZW5pZSBvYnN6YXJ1IHdva8OzxYIgcG9sYVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ID4gMCAmJiBuZXdCb2FyZFtyb3dJbmRleCAtIDFdW2NvbHVtbkluZGV4ICsgaV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4IDwgYm9hcmRTaXplIC0gMSAmJiBuZXdCb2FyZFtyb3dJbmRleCArIDFdW2NvbHVtbkluZGV4ICsgaV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKGNvbHVtbkluZGV4ID4gMCAmJiBuZXdCb2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXggKyBpIC0gMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKGNvbHVtbkluZGV4ICsgaSA8IGJvYXJkU2l6ZSAtIDEgJiYgbmV3Qm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4ICsgaSArIDFdID09PSAnc2hpcCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIChyb3dJbmRleCA+IDAgJiYgY29sdW1uSW5kZXggPiAwICYmIG5ld0JvYXJkW3Jvd0luZGV4IC0gMV1bY29sdW1uSW5kZXggKyBpIC0gMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ID4gMCAmJiBjb2x1bW5JbmRleCArIGkgPCBib2FyZFNpemUgLSAxICYmIG5ld0JvYXJkW3Jvd0luZGV4IC0gMV1bY29sdW1uSW5kZXggKyBpICsgMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4IDwgYm9hcmRTaXplIC0gMSAmJiBjb2x1bW5JbmRleCA+IDAgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyAxXVtjb2x1bW5JbmRleCArIGkgLSAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPCBib2FyZFNpemUgLSAxICYmIGNvbHVtbkluZGV4ICsgaSA8IGJvYXJkU2l6ZSAtIDEgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyAxXVtjb2x1bW5JbmRleCArIGkgKyAxXSA9PT0gJ3NoaXAnKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggKyBpID49IGJvYXJkU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXdCb2FyZFtyb3dJbmRleCArIGldW2NvbHVtbkluZGV4XSA9PT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPiAwICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgaSAtIDFdW2NvbHVtbkluZGV4XSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggKyBpIDwgYm9hcmRTaXplIC0gMSAmJiBuZXdCb2FyZFtyb3dJbmRleCArIGkgKyAxXVtjb2x1bW5JbmRleF0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKGNvbHVtbkluZGV4ID4gMCAmJiBuZXdCb2FyZFtyb3dJbmRleCArIGldW2NvbHVtbkluZGV4IC0gMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKGNvbHVtbkluZGV4IDwgYm9hcmRTaXplIC0gMSAmJiBuZXdCb2FyZFtyb3dJbmRleCArIGldW2NvbHVtbkluZGV4ICsgMV0gPT09ICdzaGlwJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJvd0luZGV4ID4gMCAmJiBjb2x1bW5JbmRleCA+IDAgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyBpIC0gMV1bY29sdW1uSW5kZXggLSAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggKyBpIDwgYm9hcmRTaXplIC0gMSAmJiBjb2x1bW5JbmRleCA+IDAgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyBpICsgMV1bY29sdW1uSW5kZXggLSAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggPiAwICYmIGNvbHVtbkluZGV4ICsgMSA8IGJvYXJkU2l6ZSAtIDEgJiYgbmV3Qm9hcmRbcm93SW5kZXggKyBpIC0gMV1bY29sdW1uSW5kZXggKyAxXSA9PT0gJ3NoaXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAocm93SW5kZXggKyBpIDwgYm9hcmRTaXplIC0gMSAmJiBjb2x1bW5JbmRleCArIDEgPCBib2FyZFNpemUgLSAxICYmIG5ld0JvYXJkW3Jvd0luZGV4ICsgaSArIDFdW2NvbHVtbkluZGV4ICsgMV0gPT09ICdzaGlwJylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja09uU2hpcCA9IChzaGlwSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBVc3VuacSZY2llIHN0YXRrdSB6IHBsYW5zenlcbiAgICAgICAgc2V0Qm9hcmQoYm9hcmQubWFwKHJvdyA9PiByb3cubWFwKGNlbGwgPT4gY2VsbCAmJiBjZWxsLmlkID09PSBzaGlwSWQgPyBudWxsIDogY2VsbCkpKTtcbiAgICBcbiAgICAgICAgLy8gUHJ6eXdyw7NjZW5pZSBzdGF0a3UgZG8gbGlzdHkgZG9zdMSZcG55Y2ggc3RhdGvDs3dcbiAgICAgICAgY29uc3Qgc2hpcFRvQWRkQmFjayA9IGF2YWlsYWJsZVNoaXBzLmZpbmQoc2hpcCA9PiBzaGlwLmlkID09PSBzaGlwSWQpO1xuICAgICAgICBpZiAoc2hpcFRvQWRkQmFjaykge1xuICAgICAgICAgICAgc2V0QXZhaWxhYmxlU2hpcHMoWy4uLmF2YWlsYWJsZVNoaXBzLCBzaGlwVG9BZGRCYWNrXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmQtbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5MYWJlbHMubWFwKChsYWJlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93SW5kZXh9IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e3Jvd0luZGV4ICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGNvbHVtbkluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uSW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNlbGwgJHtjZWxsICYmIGNlbGwuaWQgPyAnc2hpcC1jZWxsJyA6ICcnfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwgPT09ICdzaGlwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tPblNoaXAoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiBoYW5kbGVEcm9wKGV2ZW50LCByb3dJbmRleCwgY29sdW1uSW5kZXgpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwc0RlcGxveWluZy1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRvc3RlcG5lIHN0YXRraTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVTaGlwcy5tYXAoKHNoaXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoaXAga2V5PXtpbmRleH0gaWQ9e3NoaXAuaWR9IHNpemU9e3NoaXAuc2l6ZX0gb25TaGlwUGxhY2VkPXsoKSA9PiBzZXRBdmFpbGFibGVTaGlwcyhhdmFpbGFibGVTaGlwcy5maWx0ZXIocyA9PiBzLmlkICE9PSBzaGlwLmlkKSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTaGlwIiwiaWQiLCJzaXplIiwib25TaGlwUGxhY2VkIiwiaXNWZXJ0aWNhbCIsInNldElzVmVydGljYWwiLCJ0b2dnbGVPcmllbnRhdGlvbiIsImhhbmRsZURyYWdTdGFydCIsImV2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJHYW1lQm9hcmRDb3B5IiwiYm9hcmRTaXplIiwiY29sdW1uTGFiZWxzIiwiaW5pdGlhbFNoaXBzIiwiZW1wdHlCb2FyZCIsImJvYXJkIiwic2V0Qm9hcmQiLCJhdmFpbGFibGVTaGlwcyIsInNldEF2YWlsYWJsZVNoaXBzIiwiaGFuZGxlRHJvcCIsInJvd0luZGV4IiwiY29sdW1uSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNoaXBJZCIsImdldERhdGEiLCJzaGlwU2l6ZSIsInBhcnNlSW50Iiwic2hpcE9yaWVudGF0aW9uIiwiY2FuUGxhY2VTaGlwIiwiY2FuUGxhY2VTaGlwQXQiLCJuZXdCb2FyZCIsImZpbHRlciIsInNoaXAiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVDbGlja09uU2hpcCIsInJvdyIsImNlbGwiLCJzaGlwVG9BZGRCYWNrIiwiZmluZCIsImxhYmVsIiwib25Ecm9wIiwib25EcmFnT3ZlciIsImgyIiwiaW5kZXgiLCJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard copy/index.tsx\n"));

/***/ })

});