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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevrons-left.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-plus.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsLeft,MenuIcon,PlusCircle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! usehooks-ts */ \"(app-pages-browser)/./node_modules/usehooks-ts/dist/index.js\");\n/* harmony import */ var _user_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-item */ \"(app-pages-browser)/./app/(main)/_components/user-item.tsx\");\n/* harmony import */ var convex_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! convex/react */ \"(app-pages-browser)/./node_modules/convex/dist/esm/react/index.js\");\n/* harmony import */ var _convex_generated_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/convex/_generated/api */ \"(app-pages-browser)/./convex/_generated/api.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/(main)/_components/item.tsx\");\n/* __next_internal_client_entry_do_not_use__ Navigation auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const isMobile = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery)(\"(max-width: 768px)\");\n    const documents = (0,convex_react__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_6__.api.documents.get);\n    const create = (0,convex_react__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_6__.api.documents.create);\n    const isResizingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);\n    const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const navbarRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [isResetting, setIsResetting] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(isMobile);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isMobile) {\n            collapse();\n        } else {\n            resetWidth();\n        }\n    }, [\n        isMobile\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isMobile) {\n            collapse();\n        }\n    }, [\n        pathname,\n        isMobile\n    ]);\n    const handleMouseDown = (event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        isResizingRef.current = true;\n        document.addEventListener(\"mousemove\", handleMouseMove);\n        document.addEventListener(\"mouseup\", handleMouseUp);\n    };\n    const handleMouseMove = (event)=>{\n        if (!isResizingRef.current) return;\n        let newWidth = event.clientX;\n        if (newWidth < 240) newWidth = 240;\n        if (newWidth > 480) newWidth = 480;\n        if (sidebarRef.current && navbarRef.current) {\n            sidebarRef.current.style.width = \"\".concat(newWidth, \"px\");\n            navbarRef.current.style.setProperty(\"left\", \"\".concat(newWidth, \"px\"));\n            navbarRef.current.style.setProperty(\"width\", \"calc(100% - \".concat(newWidth, \"px)\"));\n        }\n    };\n    const handleMouseUp = ()=>{\n        isResizingRef.current = false;\n        document.removeEventListener(\"mousemove\", handleMouseMove);\n        document.removeEventListener(\"mouseup\", handleMouseUp);\n    };\n    const resetWidth = ()=>{\n        if (sidebarRef.current && navbarRef.current) {\n            setIsCollapsed(false);\n            setIsResetting(false);\n            sidebarRef.current.style.width = isMobile ? \"100%\" : \"240px\";\n            navbarRef.current.style.setProperty(\"width\", isMobile ? \"0\" : \"calc(100% - 240px)\");\n            navbarRef.current.style.setProperty(\"left\", isMobile ? \"100%\" : \"240px\");\n            setTimeout(()=>setIsResetting(false), 300);\n        }\n    };\n    const collapse = ()=>{\n        if (sidebarRef.current && navbarRef.current) {\n            setIsCollapsed(true);\n            setIsResetting(true);\n            sidebarRef.current.style.width = \"0\";\n            navbarRef.current.style.setProperty(\"width\", \"100%\");\n            navbarRef.current.style.setProperty(\"left\", \"0\");\n            setTimeout(()=>setIsResetting(false), 300);\n        }\n    };\n    const handleCreate = ()=>{\n        const promise = create({\n            title\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                ref: sidebarRef,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]\", isResetting && \"transition-all ease-in-out duration-300\", isMobile && \"w-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: collapse,\n                        role: \"button\",\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"h-6 w-6 text-muted-foreground rounded-small hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition\", isMobile && \"opacity-100\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"h-6 w-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_item__WEBPACK_IMPORTED_MODULE_4__.UserItem, {}, void 0, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_7__.Item, {\n                                onClick: ()=>{},\n                                label: \"New Page\",\n                                icon: _barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: documents === null || documents === void 0 ? void 0 : documents.map((document1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: document1.title\n                            }, document1._id, false, {\n                                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onMouseDown: handleMouseDown,\n                        onClick: resetWidth,\n                        className: \"opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: navbarRef,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]\", isResetting && \"transition-all ease-in-out duration-300\", isMobile && \"left-0 w-full\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"bg-transparent px-3 py-2 w-full\",\n                    children: isCollapsed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsLeft_MenuIcon_PlusCircle_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        onClick: resetWidth,\n                        className: \"h-6 w-6 text-muted-foreground\",\n                        role: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/navigation.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"NGnVa3rDvgRf7lRWZ5BFG9lxVR8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery,\n        convex_react__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        convex_react__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNpQztBQUNwQjtBQUN5QjtBQUMzQjtBQUNMO0FBQ2M7QUFDUDtBQUNoQjtBQUV2QixNQUFNZSxhQUFhOztJQUN4QixNQUFNQyxXQUFXWiw0REFBV0E7SUFDNUIsTUFBTWEsV0FBV1IsMERBQWFBLENBQUM7SUFDL0IsTUFBTVMsWUFBWU4sc0RBQVFBLENBQUNDLHNEQUFHQSxDQUFDSyxTQUFTLENBQUNDLEdBQUc7SUFDNUMsTUFBTUMsU0FBU1QseURBQVdBLENBQUNFLHNEQUFHQSxDQUFDSyxTQUFTLENBQUNFLE1BQU07SUFFL0MsTUFBTUMsZ0JBQWdCZCw2Q0FBTUEsQ0FBQztJQUM3QixNQUFNZSxhQUFhZiw2Q0FBTUEsQ0FBc0I7SUFDL0MsTUFBTWdCLFlBQVloQiw2Q0FBTUEsQ0FBb0I7SUFDNUMsTUFBTSxDQUFDaUIsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDa0IsYUFBYUMsZUFBZSxHQUFHbkIsK0NBQVFBLENBQUNTO0lBRS9DWCxnREFBU0EsQ0FBQztRQUNSLElBQUlXLFVBQVM7WUFDWFc7UUFDRixPQUFPO1lBQ0xDO1FBQ0Y7SUFDRixHQUFHO1FBQUNaO0tBQVM7SUFFYlgsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxVQUFVO1lBQ1pXO1FBQ0Y7SUFDRixHQUFHO1FBQUNaO1FBQVVDO0tBQVM7SUFFdkIsTUFBTWEsa0JBQWtCLENBQ3RCQztRQUVBQSxNQUFNQyxjQUFjO1FBQ3BCRCxNQUFNRSxlQUFlO1FBRXJCWixjQUFjYSxPQUFPLEdBQUc7UUFDeEJDLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFDO1FBQ3ZDRixTQUFTQyxnQkFBZ0IsQ0FBQyxXQUFXRTtJQUN6QztJQUVBLE1BQU1ELGtCQUFrQixDQUFDTjtRQUNyQixJQUFHLENBQUNWLGNB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QkFBZ0NHLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRCxFQUFFO0dBOUlXdkM7O1FBQ01YLHdEQUFXQTtRQUNYSyxzREFBYUE7UUFDWkcsa0RBQVFBO1FBQ1hELHFEQUFXQTs7O0tBSmZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3g/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IENoZXZyb25zTGVmdCwgTWVudUljb24sIFBsdXNDaXJjbGUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyBFbGVtZW50UmVmLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwidXNlaG9va3MtdHNcIjtcbmltcG9ydCB7IFVzZXJJdGVtIH0gZnJvbSBcIi4vdXNlci1pdGVtXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiY29udmV4L3JlYWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9jb252ZXgvX2dlbmVyYXRlZC9hcGlcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6IDc2OHB4KVwiKTtcbiAgY29uc3QgZG9jdW1lbnRzID0gdXNlUXVlcnkoYXBpLmRvY3VtZW50cy5nZXQpO1xuICBjb25zdCBjcmVhdGUgPSB1c2VNdXRhdGlvbihhcGkuZG9jdW1lbnRzLmNyZWF0ZSk7XG5cbiAgY29uc3QgaXNSZXNpemluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IHNpZGViYXJSZWYgPSB1c2VSZWY8RWxlbWVudFJlZjxcImFzaWRlXCI+PihudWxsKTtcbiAgY29uc3QgbmF2YmFyUmVmID0gdXNlUmVmPEVsZW1lbnRSZWY8XCJkaXZcIj4+KG51bGwpO1xuICBjb25zdCBbaXNSZXNldHRpbmcsIHNldElzUmVzZXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ29sbGFwc2VkLCBzZXRJc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZShpc01vYmlsZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNNb2JpbGUpe1xuICAgICAgY29sbGFwc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzZXRXaWR0aCgpO1xuICAgIH1cbiAgfSwgW2lzTW9iaWxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgIGNvbGxhcHNlKCk7XG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIGlzTW9iaWxlXSlcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgXG4gICAgaXNSZXNpemluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG59O1xuXG5jb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZighaXNSZXNpemluZ1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgbGV0IG5ld1dpZHRoID0gZXZlbnQuY2xpZW50WDtcblxuICAgIGlmKG5ld1dpZHRoIDwgMjQwKSBuZXdXaWR0aCA9IDI0MDtcbiAgICBpZihuZXdXaWR0aCA+IDQ4MCkgbmV3V2lkdGggPSA0ODA7XG5cbiAgICBpZiAoc2lkZWJhclJlZi5jdXJyZW50ICYmIG5hdmJhclJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNpZGViYXJSZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IGAke25ld1dpZHRofXB4YDtcbiAgICAgICAgbmF2YmFyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIGAke25ld1dpZHRofXB4YCk7XG4gICAgICAgIG5hdmJhclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgYGNhbGMoMTAwJSAtICR7bmV3V2lkdGh9cHgpYCk7XG4gICAgfVxuXG59O1xuXG5jb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgIGlzUmVzaXppbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbn1cblxuY29uc3QgcmVzZXRXaWR0aCA9ICgpID0+IHtcbiAgaWYgKHNpZGViYXJSZWYuY3VycmVudCAmJiBuYXZiYXJSZWYuY3VycmVudCkge1xuICAgIHNldElzQ29sbGFwc2VkKGZhbHNlKTtcbiAgICBzZXRJc1Jlc2V0dGluZyhmYWxzZSk7XG5cbiAgICBzaWRlYmFyUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBpc01vYmlsZSA/IFwiMTAwJVwiIDogXCIyNDBweFwiO1xuICAgIG5hdmJhclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwid2lkdGhcIiwgaXNNb2JpbGUgPyBcIjBcIiA6IFwiY2FsYygxMDAlIC0gMjQwcHgpXCIpO1xuICAgIG5hdmJhclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLCBpc01vYmlsZSA/IFwiMTAwJVwiIDogXCIyNDBweFwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzUmVzZXR0aW5nKGZhbHNlKSwgMzAwKTsgXG4gIH1cbn07XG5cbmNvbnN0IGNvbGxhcHNlID0gKCkgPT4ge1xuICBpZiAoc2lkZWJhclJlZi5jdXJyZW50ICYmIG5hdmJhclJlZi5jdXJyZW50KSB7XG4gICAgc2V0SXNDb2xsYXBzZWQodHJ1ZSk7XG4gICAgc2V0SXNSZXNldHRpbmcodHJ1ZSk7XG5cbiAgICBzaWRlYmFyUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICBuYXZiYXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIFwiMTAwJVwiKTtcbiAgICBuYXZiYXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImxlZnRcIiwgXCIwXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNSZXNldHRpbmcoZmFsc2UpLCAzMDApO1xuICB9XG59XG5cbmNvbnN0IGhhbmRsZUNyZWF0ZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvbWlzZSA9IGNyZWF0ZSAoe1xuICAgIHRpdGxlXG4gIH0pXG59XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGFzaWRlXG4gICAgICAgIHJlZj17c2lkZWJhclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcImdyb3VwL3NpZGViYXIgaC1mdWxsIGJnLXNlY29uZGFyeSBvdmVyZmxvdy15LWF1dG8gcmVsYXRpdmUgZmxleCB3LTYwIGZsZXgtY29sIHotWzk5OTk5XVwiLFxuICAgICAgICAgIGlzUmVzZXR0aW5nICYmIFwidHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCIsXG4gICAgICAgICAgaXNNb2JpbGUgJiYgXCJ3LTBcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e2NvbGxhcHNlfVxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICBcImgtNiB3LTYgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHJvdW5kZWQtc21hbGwgaG92ZXI6YmctbmV1dHJhbC0zMDAgZGFyazpob3ZlcjpiZy1uZXV0cmFsLTYwMCBhYnNvbHV0ZSB0b3AtMyByaWdodC0yIG9wYWNpdHktMCBncm91cC1ob3Zlci9zaWRlYmFyOm9wYWNpdHktMTAwIHRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIGlzTW9iaWxlICYmIFwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2hldnJvbnNMZWZ0IGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VXNlckl0ZW0gLz5cbiAgICAgICAgICA8SXRlbSBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fSBcbiAgICAgICAgICAgIGxhYmVsPVwiTmV3IFBhZ2VcIiBcbiAgICAgICAgICAgIGljb249e1BsdXNDaXJjbGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIHtkb2N1bWVudHM/Lm1hcCgoZG9jdW1lbnQpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17ZG9jdW1lbnQuX2lkfT5cbiAgICAgICAgICAgICAge2RvY3VtZW50LnRpdGxlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgICBvbkNsaWNrPXtyZXNldFdpZHRofVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS0wIGdyb3VwLWhvdmVyL3NpZGViYXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbiBjdXJzb3ItZXctcmVzaXplIGFic29sdXRlIGgtZnVsbCB3LTEgYmctcHJpbWFyeS8xMCByaWdodC0wIHRvcC0wXCIgXG4gICAgICAgIC8+XG4gICAgICA8L2FzaWRlPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e25hdmJhclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbihcImFic29sdXRlIHRvcC0wIHotWzk5OTk5XSBsZWZ0LTYwIHctW2NhbGMoMTAwJS0yNDBweCldXCIsIFxuICAgICAgICAgIGlzUmVzZXR0aW5nICYmIFwidHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCIsXG4gICAgICAgICAgaXNNb2JpbGUgJiYgXCJsZWZ0LTAgdy1mdWxsXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBweC0zIHB5LTIgdy1mdWxsXCI+XG4gICAgICAgICAgICB7aXNDb2xsYXBzZWQgJiYgPE1lbnVJY29uIG9uQ2xpY2s9e3Jlc2V0V2lkdGh9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiByb2xlPVwiYnV0dG9uXCIvPn1cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY24iLCJDaGV2cm9uc0xlZnQiLCJNZW51SWNvbiIsIlBsdXNDaXJjbGUiLCJ1c2VQYXRobmFtZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiVXNlckl0ZW0iLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiYXBpIiwiSXRlbSIsIk5hdmlnYXRpb24iLCJwYXRobmFtZSIsImlzTW9iaWxlIiwiZG9jdW1lbnRzIiwiZ2V0IiwiY3JlYXRlIiwiaXNSZXNpemluZ1JlZiIsInNpZGViYXJSZWYiLCJuYXZiYXJSZWYiLCJpc1Jlc2V0dGluZyIsInNldElzUmVzZXR0aW5nIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsImNvbGxhcHNlIiwicmVzZXRXaWR0aCIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsIm5ld1dpZHRoIiwiY2xpZW50WCIsInN0eWxlIiwid2lkdGgiLCJzZXRQcm9wZXJ0eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ3JlYXRlIiwicHJvbWlzZSIsInRpdGxlIiwiYXNpZGUiLCJyZWYiLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwicm9sZSIsImxhYmVsIiwiaWNvbiIsIm1hcCIsInAiLCJfaWQiLCJvbk1vdXNlRG93biIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(main)/_components/navigation.tsx\n"));

/***/ })

});