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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevrons-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-plus.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! usehooks-ts */ \"(app-pages-browser)/./node_modules/usehooks-ts/dist/index.js\");\n/* harmony import */ var _user_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-item */ \"(app-pages-browser)/./app/(main)/_components/user-item.tsx\");\n/* harmony import */ var convex_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! convex/react */ \"(app-pages-browser)/./node_modules/convex/dist/esm/react/index.js\");\n/* harmony import */ var _convex_generated_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/convex/_generated/api */ \"(app-pages-browser)/./convex/_generated/api.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/(main)/_components/item.tsx\");\n/* __next_internal_client_entry_do_not_use__ Navigation auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const isMobile = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery)(\"(max-width: 768px)\");\n    const documents = (0,convex_react__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_6__.api.documents.get);\n    const create = (0,convex_react__WEBPACK_IMPORTED_MODULE_5__.useMutation)();\n    const isResizingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);\n    const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const navbarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [isResetting, setIsResetting] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(isMobile);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isMobile) {\n            collapse();\n        } else {\n            resetWidth();\n        }\n    }, [\n        isMobile\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isMobile) {\n            collapse();\n        }\n    }, [\n        pathname,\n        isMobile\n    ]);\n    const handleMouseDown = (event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        isResizingRef.current = true;\n        document.addEventListener(\"mousemove\", handleMouseMove);\n        document.addEventListener(\"mouseup\", handleMouseUp);\n    };\n    const handleMouseMove = (event)=>{\n        if (!isResizingRef.current) return;\n        let newWidth = event.clientX;\n        if (newWidth < 240) newWidth = 240;\n        if (newWidth > 480) newWidth = 480;\n        if (sidebarRef.current && navbarRef.current) {\n            sidebarRef.current.style.width = \"\".concat(newWidth, \"px\");\n            navbarRef.current.style.setProperty(\"left\", \"\".concat(newWidth, \"px\"));\n            navbarRef.current.style.setProperty(\"width\", \"calc(100% - \".concat(newWidth, \"px)\"));\n        }\n    };\n    const handleMouseUp = ()=>{\n        isResizingRef.current = false;\n        document.removeEventListener(\"mousemove\", handleMouseMove);\n        document.removeEventListener(\"mouseup\", handleMouseUp);\n    };\n    const resetWidth = ()=>{\n        if (sidebarRef.current && navbarRef.current) {\n            setIsCollapsed(false);\n            setIsResetting(false);\n            sidebarRef.current.style.width = isMobile ? \"100%\" : \"240px\";\n            navbarRef.current.style.setProperty(\"width\", isMobile ? \"0\" : \"calc(100% - 240px)\");\n            navbarRef.current.style.setProperty(\"left\", isMobile ? \"100%\" : \"240px\");\n            setTimeout(()=>setIsResetting(false), 300);\n        }\n    };\n    const collapse = ()=>{\n        if (sidebarRef.current && navbarRef.current) {\n            setIsCollapsed(true);\n            setIsResetting(true);\n            sidebarRef.current.style.width = \"0\";\n            navbarRef.current.style.setProperty(\"width\", \"100%\");\n            navbarRef.current.style.setProperty(\"left\", \"0\");\n            setTimeout(()=>setIsResetting(false), 300);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                ref: sidebarRef,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]\", isResetting && \"transition-all ease-in-out duration-300\", isMobile && \"w-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: collapse,\n                        role: \"button\",\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"h-6 w-6 text-muted-foreground rounded-small hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition\", isMobile && \"opacity-100\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"h-6 w-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_item__WEBPACK_IMPORTED_MODULE_4__.UserItem, {}, void 0, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_7__.Item, {\n                                onClick: ()=>{},\n                                label: \"New Page\",\n                                icon: _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: documents === null || documents === void 0 ? void 0 : documents.map((document1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: document1.title\n                            }, document1._id, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onMouseDown: handleMouseDown,\n                        onClick: resetWidth,\n                        className: \"opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: navbarRef,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]\", isResetting && \"transition-all ease-in-out duration-300\", isMobile && \"left-0 w-full\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"bg-transparent px-3 py-2 w-full\",\n                    children: isCollapsed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        onClick: resetWidth,\n                        className: \"h-6 w-6 text-muted-foreground\",\n                        role: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"NGnVa3rDvgRf7lRWZ5BFG9lxVR8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery,\n        convex_react__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        convex_react__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNpQztBQUNwQjtBQUN5QjtBQUMzQjtBQUNMO0FBQ2M7QUFDUDtBQUNoQjtBQUV2QixNQUFNZSxhQUFhOztJQUN4QixNQUFNQyxXQUFXWiw0REFBV0E7SUFDNUIsTUFBTWEsV0FBV1IsMERBQWFBLENBQUM7SUFDL0IsTUFBTVMsWUFBWU4sc0RBQVFBLENBQUNDLHNEQUFHQSxDQUFDSyxTQUFTLENBQUNDLEdBQUc7SUFDNUMsTUFBTUMsU0FBU1QseURBQVdBO0lBRTFCLE1BQU1VLGdCQUFnQmQsNkNBQU1BLENBQUM7SUFDN0IsTUFBTWUsYUFBYWYsNkNBQU1BLENBQXNCO0lBQy9DLE1BQU1nQixZQUFZaEIsNkNBQU1BLENBQW9CO0lBQzVDLE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2tCLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFDUztJQUUvQ1gsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxVQUFTO1lBQ1hXO1FBQ0YsT0FBTztZQUNMQztRQUNGO0lBQ0YsR0FBRztRQUFDWjtLQUFTO0lBRWJYLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVcsVUFBVTtZQUNaVztRQUNGO0lBQ0YsR0FBRztRQUFDWjtRQUFVQztLQUFTO0lBRXZCLE1BQU1hLGtCQUFrQixDQUN0QkM7UUFFQUEsTUFBTUMsY0FBYztRQUNwQkQsTUFBTUUsZUFBZTtRQUVyQlosY0FBY2EsT0FBTyxHQUFHO1FBQ3hCQyxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhQztRQUN2Q0YsU0FBU0MsZ0JBQWdCLENBQUMsV0FBV0U7SUFDekM7SUFFQSxNQUFNRCxrQkFBa0IsQ0FBQ047UUFDckIsSUFBRyxDQUFDVixjQUFjYSxPQUFPLEVBQUU7UUFDM0IsSUFBSUssV0FBV1IsTUFB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WEQscURBQVdBOzs7S0FKZkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhtYWluKS9fY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeD9kYjE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgQ2hldnJvbnNMZWZ0LCBNZW51SWNvbiwgUGx1c0NpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IEVsZW1lbnRSZWYsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJ1c2Vob29rcy10c1wiO1xuaW1wb3J0IHsgVXNlckl0ZW0gfSBmcm9tIFwiLi91c2VyLWl0ZW1cIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJjb252ZXgvcmVhY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL2NvbnZleC9fZ2VuZXJhdGVkL2FwaVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDogNzY4cHgpXCIpO1xuICBjb25zdCBkb2N1bWVudHMgPSB1c2VRdWVyeShhcGkuZG9jdW1lbnRzLmdldCk7XG4gIGNvbnN0IGNyZWF0ZSA9IHVzZU11dGF0aW9uKClcblxuICBjb25zdCBpc1Jlc2l6aW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3Qgc2lkZWJhclJlZiA9IHVzZVJlZjxFbGVtZW50UmVmPFwiYXNpZGVcIj4+KG51bGwpO1xuICBjb25zdCBuYXZiYXJSZWYgPSB1c2VSZWY8RWxlbWVudFJlZjxcImRpdlwiPj4obnVsbCk7XG4gIGNvbnN0IFtpc1Jlc2V0dGluZywgc2V0SXNSZXNldHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlKGlzTW9iaWxlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc01vYmlsZSl7XG4gICAgICBjb2xsYXBzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNldFdpZHRoKCk7XG4gICAgfVxuICB9LCBbaXNNb2JpbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgY29sbGFwc2UoKTtcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgaXNNb2JpbGVdKVxuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBcbiAgICBpc1Jlc2l6aW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbn07XG5cbmNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmKCFpc1Jlc2l6aW5nUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBsZXQgbmV3V2lkdGggPSBldmVudC5jbGllbnRYO1xuXG4gICAgaWYobmV3V2lkdGggPCAyNDApIG5ld1dpZHRoID0gMjQwO1xuICAgIGlmKG5ld1dpZHRoID4gNDgwKSBuZXdXaWR0aCA9IDQ4MDtcblxuICAgIGlmIChzaWRlYmFyUmVmLmN1cnJlbnQgJiYgbmF2YmFyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2lkZWJhclJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7bmV3V2lkdGh9cHhgO1xuICAgICAgICBuYXZiYXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImxlZnRcIiwgYCR7bmV3V2lkdGh9cHhgKTtcbiAgICAgICAgbmF2YmFyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBgY2FsYygxMDAlIC0gJHtuZXdXaWR0aH1weClgKTtcbiAgICB9XG5cbn07XG5cbmNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgaXNSZXNpemluZ1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xufVxuXG5jb25zdCByZXNldFdpZHRoID0gKCkgPT4ge1xuICBpZiAoc2lkZWJhclJlZi5jdXJyZW50ICYmIG5hdmJhclJlZi5jdXJyZW50KSB7XG4gICAgc2V0SXNDb2xsYXBzZWQoZmFsc2UpO1xuICAgIHNldElzUmVzZXR0aW5nKGZhbHNlKTtcblxuICAgIHNpZGViYXJSZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IGlzTW9iaWxlID8gXCIxMDAlXCIgOiBcIjI0MHB4XCI7XG4gICAgbmF2YmFyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBpc01vYmlsZSA/IFwiMFwiIDogXCJjYWxjKDEwMCUgLSAyNDBweClcIik7XG4gICAgbmF2YmFyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIGlzTW9iaWxlID8gXCIxMDAlXCIgOiBcIjI0MHB4XCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNSZXNldHRpbmcoZmFsc2UpLCAzMDApOyBcbiAgfVxufTtcblxuY29uc3QgY29sbGFwc2UgPSAoKSA9PiB7XG4gIGlmIChzaWRlYmFyUmVmLmN1cnJlbnQgJiYgbmF2YmFyUmVmLmN1cnJlbnQpIHtcbiAgICBzZXRJc0NvbGxhcHNlZCh0cnVlKTtcbiAgICBzZXRJc1Jlc2V0dGluZyh0cnVlKTtcblxuICAgIHNpZGViYXJSZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIG5hdmJhclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuICAgIG5hdmJhclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLCBcIjBcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1Jlc2V0dGluZyhmYWxzZSksIDMwMCk7XG4gIH1cbn1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YXNpZGVcbiAgICAgICAgcmVmPXtzaWRlYmFyUmVmfVxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiZ3JvdXAvc2lkZWJhciBoLWZ1bGwgYmctc2Vjb25kYXJ5IG92ZXJmbG93LXktYXV0byByZWxhdGl2ZSBmbGV4IHctNjAgZmxleC1jb2wgei1bOTk5OTldXCIsXG4gICAgICAgICAgaXNSZXNldHRpbmcgJiYgXCJ0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIixcbiAgICAgICAgICBpc01vYmlsZSAmJiBcInctMFwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17Y29sbGFwc2V9XG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgIFwiaC02IHctNiB0ZXh0LW11dGVkLWZvcmVncm91bmQgcm91bmRlZC1zbWFsbCBob3ZlcjpiZy1uZXV0cmFsLTMwMCBkYXJrOmhvdmVyOmJnLW5ldXRyYWwtNjAwIGFic29sdXRlIHRvcC0zIHJpZ2h0LTIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyL3NpZGViYXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgaXNNb2JpbGUgJiYgXCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDaGV2cm9uc0xlZnQgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxVc2VySXRlbSAvPlxuICAgICAgICAgIDxJdGVtIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319IFxuICAgICAgICAgICAgbGFiZWw9XCJOZXcgUGFnZVwiIFxuICAgICAgICAgICAgaWNvbj17UGx1c0NpcmNsZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAge2RvY3VtZW50cz8ubWFwKChkb2N1bWVudCkgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtkb2N1bWVudC5faWR9PlxuICAgICAgICAgICAgICB7ZG9jdW1lbnQudGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0V2lkdGh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvc2lkZWJhcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uIGN1cnNvci1ldy1yZXNpemUgYWJzb2x1dGUgaC1mdWxsIHctMSBiZy1wcmltYXJ5LzEwIHJpZ2h0LTAgdG9wLTBcIiBcbiAgICAgICAgLz5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17bmF2YmFyUmVmfVxuICAgICAgICBjbGFzc05hbWU9e2NuKFwiYWJzb2x1dGUgdG9wLTAgei1bOTk5OTldIGxlZnQtNjAgdy1bY2FsYygxMDAlLTI0MHB4KV1cIiwgXG4gICAgICAgICAgaXNSZXNldHRpbmcgJiYgXCJ0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIixcbiAgICAgICAgICBpc01vYmlsZSAmJiBcImxlZnQtMCB3LWZ1bGxcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHB4LTMgcHktMiB3LWZ1bGxcIj5cbiAgICAgICAgICAgIHtpc0NvbGxhcHNlZCAmJiA8TWVudUljb24gb25DbGljaz17cmVzZXRXaWR0aH0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIHJvbGU9XCJidXR0b25cIi8+fVxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjbiIsIkNoZXZyb25zTGVmdCIsIk1lbnVJY29uIiwiUGx1c0NpcmNsZSIsInVzZVBhdGhuYW1lIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZU1lZGlhUXVlcnkiLCJVc2VySXRlbSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJhcGkiLCJJdGVtIiwiTmF2aWdhdGlvbiIsInBhdGhuYW1lIiwiaXNNb2JpbGUiLCJkb2N1bWVudHMiLCJnZXQiLCJjcmVhdGUiLCJpc1Jlc2l6aW5nUmVmIiwic2lkZWJhclJlZiIsIm5hdmJhclJlZiIsImlzUmVzZXR0aW5nIiwic2V0SXNSZXNldHRpbmciLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwiY29sbGFwc2UiLCJyZXNldFdpZHRoIiwiaGFuZGxlTW91c2VEb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwibmV3V2lkdGgiLCJjbGllbnRYIiwic3R5bGUiLCJ3aWR0aCIsInNldFByb3BlcnR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJhc2lkZSIsInJlZiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJyb2xlIiwibGFiZWwiLCJpY29uIiwibWFwIiwicCIsInRpdGxlIiwiX2lkIiwib25Nb3VzZURvd24iLCJuYXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(main)/_components/navigation.tsx\n"));

/***/ })

});