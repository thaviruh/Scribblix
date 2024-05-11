"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/layout",{

/***/ "(app-pages-browser)/./app/(main)/_components/navigation.tsx":
/*!***********************************************!*\
  !*** ./app/(main)/_components/navigation.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevrons-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-plus.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! usehooks-ts */ \"(app-pages-browser)/./node_modules/usehooks-ts/dist/index.js\");\n/* harmony import */ var _user_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-item */ \"(app-pages-browser)/./app/(main)/_components/user-item.tsx\");\n/* harmony import */ var convex_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! convex/react */ \"(app-pages-browser)/./node_modules/convex/dist/esm/react/index.js\");\n/* harmony import */ var _convex_generated_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/convex/_generated/api */ \"(app-pages-browser)/./convex/_generated/api.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/(main)/_components/item.tsx\");\n/* __next_internal_client_entry_do_not_use__ Navigation auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const isMobile = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery)(\"(max-width: 768px)\");\n    const documents = (0,convex_react__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_6__.api.documents.get);\n    const create = (0,convex_react__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_6__.api.documents.create);\n    const isResizingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);\n    const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const navbarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [isResetting, setIsResetting] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(isMobile);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isMobile) {\n            collapse();\n        } else {\n            resetWidth();\n        }\n    }, [\n        isMobile\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isMobile) {\n            collapse();\n        }\n    }, [\n        pathname,\n        isMobile\n    ]);\n    const handleMouseDown = (event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        isResizingRef.current = true;\n        document.addEventListener(\"mousemove\", handleMouseMove);\n        document.addEventListener(\"mouseup\", handleMouseUp);\n    };\n    const handleMouseMove = (event)=>{\n        if (!isResizingRef.current) return;\n        let newWidth = event.clientX;\n        if (newWidth < 240) newWidth = 240;\n        if (newWidth > 480) newWidth = 480;\n        if (sidebarRef.current && navbarRef.current) {\n            sidebarRef.current.style.width = \"\".concat(newWidth, \"px\");\n            navbarRef.current.style.setProperty(\"left\", \"\".concat(newWidth, \"px\"));\n            navbarRef.current.style.setProperty(\"width\", \"calc(100% - \".concat(newWidth, \"px)\"));\n        }\n    };\n    const handleMouseUp = ()=>{\n        isResizingRef.current = false;\n        document.removeEventListener(\"mousemove\", handleMouseMove);\n        document.removeEventListener(\"mouseup\", handleMouseUp);\n    };\n    const resetWidth = ()=>{\n        if (sidebarRef.current && navbarRef.current) {\n            setIsCollapsed(false);\n            setIsResetting(false);\n            sidebarRef.current.style.width = isMobile ? \"100%\" : \"240px\";\n            navbarRef.current.style.setProperty(\"width\", isMobile ? \"0\" : \"calc(100% - 240px)\");\n            navbarRef.current.style.setProperty(\"left\", isMobile ? \"100%\" : \"240px\");\n            setTimeout(()=>setIsResetting(false), 300);\n        }\n    };\n    const collapse = ()=>{\n        if (sidebarRef.current && navbarRef.current) {\n            setIsCollapsed(true);\n            setIsResetting(true);\n            sidebarRef.current.style.width = \"0\";\n            navbarRef.current.style.setProperty(\"width\", \"100%\");\n            navbarRef.current.style.setProperty(\"left\", \"0\");\n            setTimeout(()=>setIsResetting(false), 300);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                ref: sidebarRef,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]\", isResetting && \"transition-all ease-in-out duration-300\", isMobile && \"w-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: collapse,\n                        role: \"button\",\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"h-6 w-6 text-muted-foreground rounded-small hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition\", isMobile && \"opacity-100\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"h-6 w-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_item__WEBPACK_IMPORTED_MODULE_4__.UserItem, {}, void 0, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_7__.Item, {\n                                onClick: ()=>{},\n                                label: \"New Page\",\n                                icon: _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: documents === null || documents === void 0 ? void 0 : documents.map((document1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: document1.title\n                            }, document1._id, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onMouseDown: handleMouseDown,\n                        onClick: resetWidth,\n                        className: \"opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: navbarRef,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]\", isResetting && \"transition-all ease-in-out duration-300\", isMobile && \"left-0 w-full\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"bg-transparent px-3 py-2 w-full\",\n                    children: isCollapsed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        onClick: resetWidth,\n                        className: \"h-6 w-6 text-muted-foreground\",\n                        role: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"NGnVa3rDvgRf7lRWZ5BFG9lxVR8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery,\n        convex_react__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        convex_react__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNpQztBQUNwQjtBQUN5QjtBQUMzQjtBQUNMO0FBQ2M7QUFDUDtBQUNoQjtBQUV2QixNQUFNZSxhQUFhOztJQUN4QixNQUFNQyxXQUFXWiw0REFBV0E7SUFDNUIsTUFBTWEsV0FBV1IsMERBQWFBLENBQUM7SUFDL0IsTUFBTVMsWUFBWU4sc0RBQVFBLENBQUNDLHNEQUFHQSxDQUFDSyxTQUFTLENBQUNDLEdBQUc7SUFDNUMsTUFBTUMsU0FBU1QseURBQVdBLENBQUNFLHNEQUFHQSxDQUFDSyxTQUFTLENBQUNFLE1BQU07SUFFL0MsTUFBTUMsZ0JBQWdCZCw2Q0FBTUEsQ0FBQztJQUM3QixNQUFNZSxhQUFhZiw2Q0FBTUEsQ0FBc0I7SUFDL0MsTUFBTWdCLFlBQVloQiw2Q0FBTUEsQ0FBb0I7SUFDNUMsTUFBTSxDQUFDaUIsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDa0IsYUFBYUMsZUFBZSxHQUFHbkIsK0NBQVFBLENBQUNTO0lBRS9DWCxnREFBU0EsQ0FBQztRQUNSLElBQUlXLFVBQVM7WUFDWFc7UUFDRixPQUFPO1lBQ0xDO1FBQ0Y7SUFDRixHQUFHO1FBQUNaO0tBQVM7SUFFYlgsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxVQUFVO1lBQ1pXO1FBQ0Y7SUFDRixHQUFHO1FBQUNaO1FBQVVDO0tBQVM7SUFFdkIsTUFBTWEsa0JBQWtCLENBQ3RCQztRQUVBQSxNQUFNQyxjQUFjO1FBQ3BCRCxNQUFNRSxlQUFlO1FBRXJCWixjQUFjYSxPQUFPLEdBQUc7UUFDeEJDLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFDO1FBQ3ZDRixTQUFTQyxnQkFBZ0IsQ0FBQyxXQUFXRTtJQUN6QztJQUVBLE1BQU1ELGtCQUFrQixDQUFDTjtRQUNyQixJQUFHLENBQUNWLGNB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REFBV0E7UUFDWEssc0RBQWFBO1FBQ1pHLGtEQUFRQTtRQUNYRCxxREFBV0E7OztLQUpmSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKG1haW4pL19jb21wb25lbnRzL25hdmlnYXRpb24udHN4P2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBDaGV2cm9uc0xlZnQsIE1lbnVJY29uLCBQbHVzQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgRWxlbWVudFJlZiwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcInVzZWhvb2tzLXRzXCI7XG5pbXBvcnQgeyBVc2VySXRlbSB9IGZyb20gXCIuL3VzZXItaXRlbVwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcImNvbnZleC9yZWFjdFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIkAvY29udmV4L19nZW5lcmF0ZWQvYXBpXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkoXCIobWF4LXdpZHRoOiA3NjhweClcIik7XG4gIGNvbnN0IGRvY3VtZW50cyA9IHVzZVF1ZXJ5KGFwaS5kb2N1bWVudHMuZ2V0KTtcbiAgY29uc3QgY3JlYXRlID0gdXNlTXV0YXRpb24oYXBpLmRvY3VtZW50cy5jcmVhdGUpO1xuXG4gIGNvbnN0IGlzUmVzaXppbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBzaWRlYmFyUmVmID0gdXNlUmVmPEVsZW1lbnRSZWY8XCJhc2lkZVwiPj4obnVsbCk7XG4gIGNvbnN0IG5hdmJhclJlZiA9IHVzZVJlZjxFbGVtZW50UmVmPFwiZGl2XCI+PihudWxsKTtcbiAgY29uc3QgW2lzUmVzZXR0aW5nLCBzZXRJc1Jlc2V0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUoaXNNb2JpbGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTW9iaWxlKXtcbiAgICAgIGNvbGxhcHNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0V2lkdGgoKTtcbiAgICB9XG4gIH0sIFtpc01vYmlsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICBjb2xsYXBzZSgpO1xuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBpc01vYmlsZV0pXG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIFxuICAgIGlzUmVzaXppbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xufTtcblxuY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYoIWlzUmVzaXppbmdSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGxldCBuZXdXaWR0aCA9IGV2ZW50LmNsaWVudFg7XG5cbiAgICBpZihuZXdXaWR0aCA8IDI0MCkgbmV3V2lkdGggPSAyNDA7XG4gICAgaWYobmV3V2lkdGggPiA0ODApIG5ld1dpZHRoID0gNDgwO1xuXG4gICAgaWYgKHNpZGViYXJSZWYuY3VycmVudCAmJiBuYXZiYXJSZWYuY3VycmVudCkge1xuICAgICAgICBzaWRlYmFyUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtuZXdXaWR0aH1weGA7XG4gICAgICAgIG5hdmJhclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLCBgJHtuZXdXaWR0aH1weGApO1xuICAgICAgICBuYXZiYXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIGBjYWxjKDEwMCUgLSAke25ld1dpZHRofXB4KWApO1xuICAgIH1cblxufTtcblxuY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICBpc1Jlc2l6aW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG59XG5cbmNvbnN0IHJlc2V0V2lkdGggPSAoKSA9PiB7XG4gIGlmIChzaWRlYmFyUmVmLmN1cnJlbnQgJiYgbmF2YmFyUmVmLmN1cnJlbnQpIHtcbiAgICBzZXRJc0NvbGxhcHNlZChmYWxzZSk7XG4gICAgc2V0SXNSZXNldHRpbmcoZmFsc2UpO1xuXG4gICAgc2lkZWJhclJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gaXNNb2JpbGUgPyBcIjEwMCVcIiA6IFwiMjQwcHhcIjtcbiAgICBuYXZiYXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIGlzTW9iaWxlID8gXCIwXCIgOiBcImNhbGMoMTAwJSAtIDI0MHB4KVwiKTtcbiAgICBuYXZiYXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImxlZnRcIiwgaXNNb2JpbGUgPyBcIjEwMCVcIiA6IFwiMjQwcHhcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1Jlc2V0dGluZyhmYWxzZSksIDMwMCk7IFxuICB9XG59O1xuXG5jb25zdCBjb2xsYXBzZSA9ICgpID0+IHtcbiAgaWYgKHNpZGViYXJSZWYuY3VycmVudCAmJiBuYXZiYXJSZWYuY3VycmVudCkge1xuICAgIHNldElzQ29sbGFwc2VkKHRydWUpO1xuICAgIHNldElzUmVzZXR0aW5nKHRydWUpO1xuXG4gICAgc2lkZWJhclJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgbmF2YmFyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG4gICAgbmF2YmFyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIFwiMFwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzUmVzZXR0aW5nKGZhbHNlKSwgMzAwKTtcbiAgfVxufVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhc2lkZVxuICAgICAgICByZWY9e3NpZGViYXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJncm91cC9zaWRlYmFyIGgtZnVsbCBiZy1zZWNvbmRhcnkgb3ZlcmZsb3cteS1hdXRvIHJlbGF0aXZlIGZsZXggdy02MCBmbGV4LWNvbCB6LVs5OTk5OV1cIixcbiAgICAgICAgICBpc1Jlc2V0dGluZyAmJiBcInRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiLFxuICAgICAgICAgIGlzTW9iaWxlICYmIFwidy0wXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXtjb2xsYXBzZX1cbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgXCJoLTYgdy02IHRleHQtbXV0ZWQtZm9yZWdyb3VuZCByb3VuZGVkLXNtYWxsIGhvdmVyOmJnLW5ldXRyYWwtMzAwIGRhcms6aG92ZXI6YmctbmV1dHJhbC02MDAgYWJzb2x1dGUgdG9wLTMgcmlnaHQtMiBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvc2lkZWJhcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICBpc01vYmlsZSAmJiBcIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPENoZXZyb25zTGVmdCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFVzZXJJdGVtIC8+XG4gICAgICAgICAgPEl0ZW0gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX0gXG4gICAgICAgICAgICBsYWJlbD1cIk5ldyBQYWdlXCIgXG4gICAgICAgICAgICBpY29uPXtQbHVzQ2lyY2xlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICB7ZG9jdW1lbnRzPy5tYXAoKGRvY3VtZW50KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2RvY3VtZW50Ll9pZH0+XG4gICAgICAgICAgICAgIHtkb2N1bWVudC50aXRsZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgICAgb25DbGljaz17cmVzZXRXaWR0aH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMCBncm91cC1ob3Zlci9zaWRlYmFyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gY3Vyc29yLWV3LXJlc2l6ZSBhYnNvbHV0ZSBoLWZ1bGwgdy0xIGJnLXByaW1hcnkvMTAgcmlnaHQtMCB0b3AtMFwiIFxuICAgICAgICAvPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtuYXZiYXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXCJhYnNvbHV0ZSB0b3AtMCB6LVs5OTk5OV0gbGVmdC02MCB3LVtjYWxjKDEwMCUtMjQwcHgpXVwiLCBcbiAgICAgICAgICBpc1Jlc2V0dGluZyAmJiBcInRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiLFxuICAgICAgICAgIGlzTW9iaWxlICYmIFwibGVmdC0wIHctZnVsbFwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgcHgtMyBweS0yIHctZnVsbFwiPlxuICAgICAgICAgICAge2lzQ29sbGFwc2VkICYmIDxNZW51SWNvbiBvbkNsaWNrPXtyZXNldFdpZHRofSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgcm9sZT1cImJ1dHRvblwiLz59XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNuIiwiQ2hldnJvbnNMZWZ0IiwiTWVudUljb24iLCJQbHVzQ2lyY2xlIiwidXNlUGF0aG5hbWUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlTWVkaWFRdWVyeSIsIlVzZXJJdGVtIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsImFwaSIsIkl0ZW0iLCJOYXZpZ2F0aW9uIiwicGF0aG5hbWUiLCJpc01vYmlsZSIsImRvY3VtZW50cyIsImdldCIsImNyZWF0ZSIsImlzUmVzaXppbmdSZWYiLCJzaWRlYmFyUmVmIiwibmF2YmFyUmVmIiwiaXNSZXNldHRpbmciLCJzZXRJc1Jlc2V0dGluZyIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJjb2xsYXBzZSIsInJlc2V0V2lkdGgiLCJoYW5kbGVNb3VzZURvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJuZXdXaWR0aCIsImNsaWVudFgiLCJzdHlsZSIsIndpZHRoIiwic2V0UHJvcGVydHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImFzaWRlIiwicmVmIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsInJvbGUiLCJsYWJlbCIsImljb24iLCJtYXAiLCJwIiwidGl0bGUiLCJfaWQiLCJvbk1vdXNlRG93biIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(main)/_components/navigation.tsx\n"));

/***/ })

});