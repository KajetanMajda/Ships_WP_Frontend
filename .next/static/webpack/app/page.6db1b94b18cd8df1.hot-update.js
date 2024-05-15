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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameBoardCopy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/gameBoard copy/main.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Ship = (param)=>{\n    let { size } = param;\n    _s();\n    const [isVertical, setIsVertical] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOrientation = ()=>{\n        setIsVertical(!isVertical);\n    };\n    const handleDragStart = (event)=>{\n        event.dataTransfer.setData(\"shipSize\", size.toString());\n        event.dataTransfer.setData(\"shipOrientation\", isVertical ? \"vertical\" : \"horizontal\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ship \".concat(isVertical ? \"vertical\" : \"\"),\n        onClick: toggleOrientation,\n        draggable: true,\n        onDragStart: handleDragStart,\n        children: Array(size).fill(null).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mast\"\n            }, i, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Ship, \"iCcvOSkc8yP6hLUTInqXgS/NHaA=\");\n_c = Ship;\nfunction GameBoardCopy() {\n    _s1();\n    const boardSize = 10;\n    const board = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    const [ships, setShips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        4: 1,\n        3: 2,\n        2: 3,\n        1: 4\n    });\n    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(10).fill(Array(10).fill(null)));\n    const handleDrop = (event)=>{\n        event.preventDefault();\n        // Pobierz rozmiar statku i orientację z danych przeciągnięcia\n        const shipSize = parseInt(event.dataTransfer.getData(\"shipSize\"));\n        const shipOrientation = event.dataTransfer.getData(\"shipOrientation\");\n        // Pobierz pozycję, na którą statek został upuszczony\n        const target = event.target;\n        const rowIndex = Number(target.getAttribute(\"data-row-index\"));\n        const columnIndex = Number(target.getAttribute(\"data-column-index\"));\n        // Zaktualizuj stan statków\n        setShips((prevShips)=>({\n                ...prevShips,\n                [shipSize]: prevShips[shipSize] - 1\n            }));\n        // Zaktualizuj stan mapy\n        setMap((prevMap)=>{\n            const newMap = [\n                ...prevMap\n            ];\n            // Dodaj statek do mapy w zależności od orientacji\n            if (shipOrientation === \"vertical\") {\n                for(let i = 0; i < shipSize; i++){\n                    newMap[rowIndex + i][columnIndex] = \"ship\";\n                }\n            } else {\n                for(let i = 0; i < shipSize; i++){\n                    newMap[rowIndex][columnIndex + i] = \"ship\";\n                }\n            }\n            return newMap;\n        });\n    };\n    const handleDragOver = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"gameBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, this),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, this),\n            board.map((row, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: i + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, this),\n                        row.map((cell, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell\"\n                            }, j, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shipsDeploying-main-container\",\n                onDrop: handleDrop,\n                onDragOver: handleDragOver,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ships\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Dostępne statki\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ship-row\",\n                            children: [\n                                Array(ships[4]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: 4\n                                }, void 0, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 47\n                                }, this)),\n                                Array(ships[3]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: 3\n                                }, void 0, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 47\n                                }, this)),\n                                Array(ships[2]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: 2\n                                }, void 0, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 47\n                                }, this)),\n                                Array(ships[1]).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ship, {\n                                    size: 1\n                                }, void 0, false, {\n                                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 47\n                                }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/gameBoard copy/index.tsx\",\n        lineNumber: 100,\n        columnNumber: 9\n    }, this);\n}\n_s1(GameBoardCopy, \"njrHC398BU828uKclipB4anIlxg=\");\n_c1 = GameBoardCopy;\nvar _c, _c1;\n$RefreshReg$(_c, \"Ship\");\n$RefreshReg$(_c1, \"GameBoardCopy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFDckI7QUFjbkIsTUFBTUUsT0FBNEI7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNSyxvQkFBb0I7UUFDdEJELGNBQWMsQ0FBQ0Q7SUFDbkI7SUFFQSxNQUFNRyxrQkFBa0IsQ0FBQ0M7UUFDckJBLE1BQU1DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVlQLEtBQUtRLFFBQVE7UUFDcERILE1BQU1DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQk4sYUFBYSxhQUFhO0lBQzVFO0lBRUEscUJBQ0ksOERBQUNRO1FBQ0dDLFdBQVcsUUFBcUMsT0FBN0JULGFBQWEsYUFBYTtRQUM3Q1UsU0FBU1I7UUFDVFMsU0FBUztRQUNUQyxhQUFhVDtrQkFFWlUsTUFBTWQsTUFBTWUsSUFBSSxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDNUIsOERBQUNUO2dCQUFZQyxXQUFVO2VBQWJROzs7Ozs7Ozs7O0FBSTFCO0dBeEJNbkI7S0FBQUE7QUEwQlMsU0FBU29COztJQUNwQixNQUFNQyxZQUFZO0lBQ2xCLE1BQU1DLFFBQVFQLE1BQU1NLFdBQVdMLElBQUksQ0FBQyxNQUFNQyxHQUFHLENBQUMsSUFBTUYsTUFBTU0sV0FBV0wsSUFBSSxDQUFDO0lBQzFFLE1BQU1PLGVBQWU7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztLQUFJO0lBR3ZFLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHMUIsK0NBQVFBLENBQWE7UUFDM0MsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNQO0lBRUEsTUFBTSxDQUFDa0IsS0FBS1MsT0FBTyxHQUFHM0IsK0NBQVFBLENBQUNnQixNQUFNLElBQUlDLElBQUksQ0FBQ0QsTUFBTSxJQUFJQyxJQUFJLENBQUM7SUFFN0QsTUFBTVcsYUFBYSxDQUFDckI7UUFDaEJBLE1BQU1zQixjQUFjO1FBRXBCLDhEQUE4RDtRQUM5RCxNQUFNQyxXQUFXQyxTQUFTeEIsTUFBTUMsWUFBWSxDQUFDd0IsT0FBTyxDQUFDO1FBQ3JELE1BQU1DLGtCQUFrQjFCLE1BQU1DLFlBQVksQ0FBQ3dCLE9BQU8sQ0FBQztRQUVuRCxxREFBcUQ7UUFDckQsTUFBTUUsU0FBUzNCLE1BQU0yQixNQUFNO1FBQzNCLE1BQU1DLFdBQVdDLE9BQU9GLE9BQU9HLFlBQVksQ0FBQztRQUM1QyxNQUFNQyxjQUFjRixPQUFPRixPQUFPRyxZQUFZLENBQUM7UUFFL0MsMkJBQTJCO1FBQzNCWCxTQUFTYSxDQUFBQSxZQUFjO2dCQUNuQixHQUFHQSxTQUFTO2dCQUNaLENBQUNULFNBQVMsRUFBRVMsU0FBUyxDQUFDVCxTQUFTLEdBQUc7WUFDdEM7UUFFQSx3QkFBd0I7UUFDeEJILE9BQU9hLENBQUFBO1lBQ0gsTUFBTUMsU0FBUzttQkFBSUQ7YUFBUTtZQUMzQixrREFBa0Q7WUFDbEQsSUFBSVAsb0JBQW9CLFlBQVk7Z0JBQ2hDLElBQUssSUFBSWIsSUFBSSxHQUFHQSxJQUFJVSxVQUFVVixJQUFLO29CQUMvQnFCLE1BQU0sQ0FBQ04sV0FBV2YsRUFBRSxDQUFDa0IsWUFBWSxHQUFHO2dCQUN4QztZQUNKLE9BQU87Z0JBQ0gsSUFBSyxJQUFJbEIsSUFBSSxHQUFHQSxJQUFJVSxVQUFVVixJQUFLO29CQUMvQnFCLE1BQU0sQ0FBQ04sU0FBUyxDQUFDRyxjQUFjbEIsRUFBRSxHQUFHO2dCQUN4QztZQUNKO1lBQ0EsT0FBT3FCO1FBQ1g7SUFDSjtJQUVBLE1BQU1DLGlCQUFpQixDQUFDbkM7UUFDcEJBLE1BQU1zQixjQUFjO0lBQ3hCO0lBSUEscUJBQ0ksOERBQUNsQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O29CQUNkWSxhQUFhTixHQUFHLENBQUMsQ0FBQ3lCLE9BQU92QixrQkFDdEIsOERBQUNUOzRCQUFZQyxXQUFVO3NDQUFTK0I7MkJBQXRCdkI7Ozs7Ozs7Ozs7O1lBR2pCRyxNQUFNTCxHQUFHLENBQUMsQ0FBQzBCLEtBQUt4QixrQkFDYiw4REFBQ1Q7b0JBQVlDLFdBQVU7O3NDQUNuQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQVNRLElBQUk7Ozs7Ozt3QkFDM0J3QixJQUFJMUIsR0FBRyxDQUFDLENBQUMyQixNQUFNQyxrQkFDWiw4REFBQ25DO2dDQUFZQyxXQUFVOytCQUFia0M7Ozs7OzttQkFIUjFCOzs7OzswQkFRZCw4REFBQ1Q7Z0JBQUlDLFdBQVU7Z0JBQWdDbUMsUUFBUW5CO2dCQUFZb0IsWUFBWU47MEJBQzNFLDRFQUFDL0I7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDcUM7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ3RDOzRCQUFJQyxXQUFVOztnQ0FDVkksTUFBTVMsS0FBSyxDQUFDLEVBQUUsRUFBRVIsSUFBSSxlQUFDLDhEQUFDaEI7b0NBQUtDLE1BQU07Ozs7OztnQ0FDakNjLE1BQU1TLEtBQUssQ0FBQyxFQUFFLEVBQUVSLElBQUksZUFBQyw4REFBQ2hCO29DQUFLQyxNQUFNOzs7Ozs7Z0NBQ2pDYyxNQUFNUyxLQUFLLENBQUMsRUFBRSxFQUFFUixJQUFJLGVBQUMsOERBQUNoQjtvQ0FBS0MsTUFBTTs7Ozs7O2dDQUNqQ2MsTUFBTVMsS0FBSyxDQUFDLEVBQUUsRUFBRVIsSUFBSSxlQUFDLDhEQUFDaEI7b0NBQUtDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFEO0lBdkZ3Qm1CO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZUJvYXJkIGNvcHkvaW5kZXgudHN4PzZiYTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vbWFpbi5jc3MnXG5cbmludGVyZmFjZSBTaGlwUHJvcHMge1xuICAgIHNpemU6IG51bWJlcjtcbn1cblxudHlwZSBTaGlwc1N0YXRlID0ge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlcjtcbiAgICA0OiBudW1iZXI7XG4gICAgMzogbnVtYmVyO1xuICAgIDI6IG51bWJlcjtcbiAgICAxOiBudW1iZXI7XG59O1xuXG5jb25zdCBTaGlwOiBSZWFjdC5GQzxTaGlwUHJvcHM+ID0gKHsgc2l6ZSB9KSA9PiB7XG4gICAgY29uc3QgW2lzVmVydGljYWwsIHNldElzVmVydGljYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldElzVmVydGljYWwoIWlzVmVydGljYWwpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnc2hpcFNpemUnLCBzaXplLnRvU3RyaW5nKCkpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnc2hpcE9yaWVudGF0aW9uJywgaXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BzaGlwICR7aXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlT3JpZW50YXRpb259XG4gICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXtoYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtBcnJheShzaXplKS5maWxsKG51bGwpLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtYXN0XCI+PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVCb2FyZENvcHkoKSB7XG4gICAgY29uc3QgYm9hcmRTaXplID0gMTA7XG4gICAgY29uc3QgYm9hcmQgPSBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKSk7XG4gICAgY29uc3QgY29sdW1uTGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cblxuICAgIGNvbnN0IFtzaGlwcywgc2V0U2hpcHNdID0gdXNlU3RhdGU8U2hpcHNTdGF0ZT4oe1xuICAgICAgICA0OiAxLFxuICAgICAgICAzOiAyLFxuICAgICAgICAyOiAzLFxuICAgICAgICAxOiA0XG4gICAgfSk7XG5cbiAgICBjb25zdCBbbWFwLCBzZXRNYXBdID0gdXNlU3RhdGUoQXJyYXkoMTApLmZpbGwoQXJyYXkoMTApLmZpbGwobnVsbCkpKTtcblxuICAgIGNvbnN0IGhhbmRsZURyb3AgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFBvYmllcnogcm96bWlhciBzdGF0a3UgaSBvcmllbnRhY2rEmSB6IGRhbnljaCBwcnplY2nEhWduacSZY2lhXG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gcGFyc2VJbnQoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NoaXBTaXplJykpO1xuICAgICAgICBjb25zdCBzaGlwT3JpZW50YXRpb24gPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcE9yaWVudGF0aW9uJyk7XG5cbiAgICAgICAgLy8gUG9iaWVyeiBwb3p5Y2rEmSwgbmEga3TDs3LEhSBzdGF0ZWsgem9zdGHFgiB1cHVzemN6b255XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yb3ctaW5kZXgnKSk7XG4gICAgICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uLWluZGV4JykpO1xuXG4gICAgICAgIC8vIFpha3R1YWxpenVqIHN0YW4gc3RhdGvDs3dcbiAgICAgICAgc2V0U2hpcHMocHJldlNoaXBzID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U2hpcHMsXG4gICAgICAgICAgICBbc2hpcFNpemVdOiBwcmV2U2hpcHNbc2hpcFNpemVdIC0gMVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gWmFrdHVhbGl6dWogc3RhbiBtYXB5XG4gICAgICAgIHNldE1hcChwcmV2TWFwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcCA9IFsuLi5wcmV2TWFwXTtcbiAgICAgICAgICAgIC8vIERvZGFqIHN0YXRlayBkbyBtYXB5IHcgemFsZcW8bm/Fm2NpIG9kIG9yaWVudGFjamlcbiAgICAgICAgICAgIGlmIChzaGlwT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TWFwW3Jvd0luZGV4ICsgaV1bY29sdW1uSW5kZXhdID0gJ3NoaXAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hcFtyb3dJbmRleF1bY29sdW1uSW5kZXggKyBpXSA9ICdzaGlwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3TWFwO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lQm9hcmQtbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5MYWJlbHMubWFwKChsYWJlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtib2FyZC5tYXAoKHJvdywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPntpICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3Jvdy5tYXAoKGNlbGwsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqfSBjbGFzc05hbWU9XCJjZWxsXCIgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBzRGVwbG95aW5nLW1haW4tY29udGFpbmVyXCIgb25Ecm9wPXtoYW5kbGVEcm9wfSBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RG9zdMSZcG5lIHN0YXRraTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheShzaGlwc1s0XSkuZmlsbCg8U2hpcCBzaXplPXs0fSAvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkoc2hpcHNbM10pLmZpbGwoPFNoaXAgc2l6ZT17M30gLz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5KHNoaXBzWzJdKS5maWxsKDxTaGlwIHNpemU9ezJ9IC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheShzaGlwc1sxXSkuZmlsbCg8U2hpcCBzaXplPXsxfSAvPil9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNoaXAiLCJzaXplIiwiaXNWZXJ0aWNhbCIsInNldElzVmVydGljYWwiLCJ0b2dnbGVPcmllbnRhdGlvbiIsImhhbmRsZURyYWdTdGFydCIsImV2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJHYW1lQm9hcmRDb3B5IiwiYm9hcmRTaXplIiwiYm9hcmQiLCJjb2x1bW5MYWJlbHMiLCJzaGlwcyIsInNldFNoaXBzIiwic2V0TWFwIiwiaGFuZGxlRHJvcCIsInByZXZlbnREZWZhdWx0Iiwic2hpcFNpemUiLCJwYXJzZUludCIsImdldERhdGEiLCJzaGlwT3JpZW50YXRpb24iLCJ0YXJnZXQiLCJyb3dJbmRleCIsIk51bWJlciIsImdldEF0dHJpYnV0ZSIsImNvbHVtbkluZGV4IiwicHJldlNoaXBzIiwicHJldk1hcCIsIm5ld01hcCIsImhhbmRsZURyYWdPdmVyIiwibGFiZWwiLCJyb3ciLCJjZWxsIiwiaiIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/gameBoard copy/index.tsx\n"));

/***/ })

});