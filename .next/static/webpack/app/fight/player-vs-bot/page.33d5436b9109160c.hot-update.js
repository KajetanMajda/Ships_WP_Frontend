"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/fight/player-vs-bot/page",{

/***/ "(app-pages-browser)/./components/playerVsBot/index.tsx":
/*!******************************************!*\
  !*** ./components/playerVsBot/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayerVsBot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"(app-pages-browser)/./components/playerVsBot/main.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst PlayerBoard = ()=>{\n    const boardSize = 10;\n    const board = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"playerBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            board.map((row, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: i + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined),\n                        row.map((cell, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell\"\n                            }, j, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, undefined))\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Plansza: \",\n                    nick\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_c = PlayerBoard;\nconst BotBoard = ()=>{\n    const boardSize = 10;\n    const board = Array(boardSize).fill(null).map(()=>Array(boardSize).fill(null));\n    const columnLabels = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"botBoard-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"labels\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    columnLabels.map((label, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: label\n                        }, i, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            board.map((row, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"label\",\n                            children: i + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        row.map((cell, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cell player-cell\"\n                            }, j, false, {\n                                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined))\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Plansza: \",\n                    opponent\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = BotBoard;\nfunction PlayerVsBot() {\n    _s();\n    const [gameStatus, setGameStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [nick1, setNick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [opponent1, setOpponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [oppShots, setOppShots] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [shouldFire, setShouldFire] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            fetch(\"http://localhost:8080/api/gameData\").then((response)=>response.json()).then((data)=>{\n                setGameStatus(data.game_status);\n                setNick(data.nick);\n                setOpponent(data.opponent);\n                setOppShots(data.opp_shots);\n                setShouldFire(data.should_fire);\n                setTimer(data.timer);\n                console.log(data);\n            }).catch((error)=>console.error(\"Error:\", error));\n        }, 2000);\n        // Clean up function\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"playerVsBot-main-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: timer\n                }, void 0, false, {\n                    fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BotBoard, {}, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerBoard, {}, void 0, false, {\n                fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kajetan/Documents/Tajne rzczy Kajetana/WP/project_ships_wp/Ships_WP_Frontend/components/playerVsBot/index.tsx\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, this);\n}\n_s(PlayerVsBot, \"lAsRxrqEsf/JTK0UwTSe/W7YJus=\");\n_c2 = PlayerVsBot;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PlayerBoard\");\n$RefreshReg$(_c1, \"BotBoard\");\n$RefreshReg$(_c2, \"PlayerVsBot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGxheWVyVnNCb3QvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDaEM7QUFJbkIsTUFBTUcsY0FBYztJQUNoQixNQUFNQyxZQUFZO0lBQ2xCLE1BQU1DLFFBQVFDLE1BQU1GLFdBQVdHLElBQUksQ0FBQyxNQUFNQyxHQUFHLENBQUMsSUFBTUYsTUFBTUYsV0FBV0csSUFBSSxDQUFDO0lBQzFFLE1BQU1FLGVBQWU7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRXZFLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O29CQUNkRixhQUFhRCxHQUFHLENBQUMsQ0FBQ0ksT0FBT0Msa0JBQ3RCLDhEQUFDSDs0QkFBWUMsV0FBVTtzQ0FBU0M7MkJBQXRCQzs7Ozs7Ozs7Ozs7WUFHakJSLE1BQU1HLEdBQUcsQ0FBQyxDQUFDTSxLQUFLRCxrQkFDYiw4REFBQ0g7b0JBQVlDLFdBQVU7O3NDQUNuQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQVNFLElBQUk7Ozs7Ozt3QkFDM0JDLElBQUlOLEdBQUcsQ0FBQyxDQUFDTyxNQUFNQyxrQkFDWiw4REFBQ047Z0NBQVlDLFdBQVU7K0JBQWJLOzs7Ozs7bUJBSFJIOzs7OzswQkFRZCw4REFBQ0k7O29CQUFHO29CQUFVQzs7Ozs7Ozs7Ozs7OztBQUcxQjtLQXpCTWY7QUE0Qk4sTUFBTWdCLFdBQVc7SUFDYixNQUFNZixZQUFZO0lBQ2xCLE1BQU1DLFFBQVFDLE1BQU1GLFdBQVdHLElBQUksQ0FBQyxNQUFNQyxHQUFHLENBQUMsSUFBTUYsTUFBTUYsV0FBV0csSUFBSSxDQUFDO0lBQzFFLE1BQU1FLGVBQWU7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRXZFLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O29CQUNkRixhQUFhRCxHQUFHLENBQUMsQ0FBQ0ksT0FBT0Msa0JBQ3RCLDhEQUFDSDs0QkFBWUMsV0FBVTtzQ0FBU0M7MkJBQXRCQzs7Ozs7Ozs7Ozs7WUFHakJSLE1BQU1HLEdBQUcsQ0FBQyxDQUFDTSxLQUFLRCxrQkFDYiw4REFBQ0g7b0JBQVlDLFdBQVU7O3NDQUNuQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQVNFLElBQUk7Ozs7Ozt3QkFDM0JDLElBQUlOLEdBQUcsQ0FBQyxDQUFDTyxNQUFNQyxrQkFDWiw4REFBQ047Z0NBQVlDLFdBQVU7K0JBQWJLOzs7Ozs7bUJBSFJIOzs7OzswQkFPZCw4REFBQ0k7O29CQUFHO29CQUFVRzs7Ozs7Ozs7Ozs7OztBQUcxQjtNQXhCTUQ7QUEyQlMsU0FBU0U7O0lBRXBCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHdEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDaUIsT0FBTU0sUUFBUSxHQUFHdkIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDbUIsV0FBVUssWUFBWSxHQUFHeEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDeUIsVUFBVUMsWUFBWSxHQUFHMUIsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUMyQixZQUFZQyxjQUFjLEdBQUc1QiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUM2QixPQUFPQyxTQUFTLEdBQUc5QiwrQ0FBUUEsQ0FBQztJQUVuQ0MsZ0RBQVNBLENBQUM7UUFDTixNQUFNOEIsV0FBV0MsWUFBWTtZQUN6QkMsTUFBTSxzQ0FDREMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO2dCQUNGZixjQUFjZSxLQUFLQyxXQUFXO2dCQUM5QmYsUUFBUWMsS0FBS3BCLElBQUk7Z0JBQ2pCTyxZQUFZYSxLQUFLbEIsUUFBUTtnQkFDekJPLFlBQVlXLEtBQUtFLFNBQVM7Z0JBQzFCWCxjQUFjUyxLQUFLRyxXQUFXO2dCQUM5QlYsU0FBU08sS0FBS1IsS0FBSztnQkFDbkJZLFFBQVFDLEdBQUcsQ0FBQ0w7WUFDaEIsR0FDQ00sS0FBSyxDQUFDQyxDQUFBQSxRQUFTSCxRQUFRRyxLQUFLLENBQUMsVUFBVUE7UUFDaEQsR0FBRztRQUVILG9CQUFvQjtRQUNwQixPQUFPO1lBQ0hDLGNBQWNkO1FBQ2xCO0lBQ0osR0FBRyxFQUFFO0lBRUQscUJBQ0ksOERBQUN0QjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7MEJBQ0csNEVBQUNPOzhCQUFJYTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNYOzs7OzswQkFDRCw4REFBQ2hCOzs7Ozs7Ozs7OztBQUdiO0dBeEN3QmtCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGxheWVyVnNCb3QvaW5kZXgudHN4P2E5NjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9tYWluLmNzcydcblxuXG5cbmNvbnN0IFBsYXllckJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuICAgIGNvbnN0IGJvYXJkID0gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkpO1xuICAgIGNvbnN0IGNvbHVtbkxhYmVscyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJCb2FyZC1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge2NvbHVtbkxhYmVscy5tYXAoKGxhYmVsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2JvYXJkLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e2kgKyAxfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2p9IGNsYXNzTmFtZT1cImNlbGxcIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgIDxoMT5QbGFuc3phOiB7bmlja308L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbmNvbnN0IEJvdEJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkU2l6ZSA9IDEwO1xuICAgIGNvbnN0IGJvYXJkID0gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkpO1xuICAgIGNvbnN0IGNvbHVtbkxhYmVscyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3RCb2FyZC1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge2NvbHVtbkxhYmVscy5tYXAoKGxhYmVsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2JvYXJkLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e2kgKyAxfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cm93Lm1hcCgoY2VsbCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2p9IGNsYXNzTmFtZT1cImNlbGwgcGxheWVyLWNlbGxcIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8aDE+UGxhbnN6YToge29wcG9uZW50fTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyVnNCb3QoKSB7XG5cbiAgICBjb25zdCBbZ2FtZVN0YXR1cywgc2V0R2FtZVN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbmNvbnN0IFtuaWNrLCBzZXROaWNrXSA9IHVzZVN0YXRlKFwiXCIpO1xuY29uc3QgW29wcG9uZW50LCBzZXRPcHBvbmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcbmNvbnN0IFtvcHBTaG90cywgc2V0T3BwU2hvdHNdID0gdXNlU3RhdGUoW10pO1xuY29uc3QgW3Nob3VsZEZpcmUsIHNldFNob3VsZEZpcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgwKTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZ2FtZURhdGEnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0R2FtZVN0YXR1cyhkYXRhLmdhbWVfc3RhdHVzKTtcbiAgICAgICAgICAgICAgICBzZXROaWNrKGRhdGEubmljayk7XG4gICAgICAgICAgICAgICAgc2V0T3Bwb25lbnQoZGF0YS5vcHBvbmVudCk7XG4gICAgICAgICAgICAgICAgc2V0T3BwU2hvdHMoZGF0YS5vcHBfc2hvdHMpO1xuICAgICAgICAgICAgICAgIHNldFNob3VsZEZpcmUoZGF0YS5zaG91bGRfZmlyZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZXIoZGF0YS50aW1lcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7XG4gICAgfSwgMjAwMCk7XG5cbiAgICAvLyBDbGVhbiB1cCBmdW5jdGlvblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG59LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyVnNCb3QtbWFpbi1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e3RpbWVyfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCb3RCb2FyZCAvPlxuICAgICAgICAgICAgPFBsYXllckJvYXJkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQbGF5ZXJCb2FyZCIsImJvYXJkU2l6ZSIsImJvYXJkIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiY29sdW1uTGFiZWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpIiwicm93IiwiY2VsbCIsImoiLCJoMSIsIm5pY2siLCJCb3RCb2FyZCIsIm9wcG9uZW50IiwiUGxheWVyVnNCb3QiLCJnYW1lU3RhdHVzIiwic2V0R2FtZVN0YXR1cyIsInNldE5pY2siLCJzZXRPcHBvbmVudCIsIm9wcFNob3RzIiwic2V0T3BwU2hvdHMiLCJzaG91bGRGaXJlIiwic2V0U2hvdWxkRmlyZSIsInRpbWVyIiwic2V0VGltZXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdhbWVfc3RhdHVzIiwib3BwX3Nob3RzIiwic2hvdWxkX2ZpcmUiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/playerVsBot/index.tsx\n"));

/***/ })

});