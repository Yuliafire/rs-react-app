(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/themeContext.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeContext": ()=>ThemeContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use theme';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/ThemeProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": ()=>ThemeProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/themeContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeProvider = (param)=>{
    let { children } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === 'light' ? 'dark' : 'light');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            document.documentElement.setAttribute('data-theme', theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"].Provider, {
        value: {
            theme,
            toggleTheme
        },
        "data-testid": "theme-provider",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ThemeProvider.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "D0ekClnfIGVExrH5c3Ka+aWcxxE=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/charactersSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addCharacter": ()=>addCharacter,
    "default": ()=>__TURBOPACK__default__export__,
    "removeAllCharacters": ()=>removeAllCharacters,
    "removeCharacter": ()=>removeCharacter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    selectedCharacters: []
};
const charactersSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'characters',
    initialState,
    reducers: {
        addCharacter (state, action) {
            const itemExists = state.selectedCharacters.some((item)=>item.id === action.payload.id);
            if (!itemExists) {
                state.selectedCharacters.push(action.payload);
            }
        },
        removeCharacter (state, action) {
            state.selectedCharacters = state.selectedCharacters.filter((item)=>item.id !== action.payload);
        },
        removeAllCharacters (state) {
            state.selectedCharacters = [];
        }
    }
});
const { addCharacter, removeCharacter, removeAllCharacters } = charactersSlice.actions;
const __TURBOPACK__default__export__ = charactersSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/apiSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "rickAndMortyApi": ()=>rickAndMortyApi,
    "useFetchInitialCharactersQuery": ()=>useFetchInitialCharactersQuery,
    "useGetCharacterQuery": ()=>useGetCharacterQuery,
    "useSearchCharactersQuery": ()=>useSearchCharactersQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const baseUrl = ("TURBOPACK compile-time value", "https://rickandmortyapi.com/api");
const customBaseQuery = async (args, api, extraOptions)=>{
    const maxRetries = 1;
    const retryDelay = 500;
    let retryCount = 0;
    while(retryCount <= maxRetries){
        try {
            await new Promise((resolve)=>setTimeout(resolve, retryDelay * retryCount));
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
                baseUrl
            })(args, api, extraOptions);
            if (response.error && 'status' in response.error && typeof response.error.status === 'number' && response.error.status === 429 && retryCount < maxRetries) {
                console.log("Attempt ".concat(retryCount + 1, "/").concat(maxRetries + 1, " for ").concat(args, ", retrying due to 429"));
                retryCount++;
                continue;
            }
            return response;
        } catch (error) {
            if (retryCount < maxRetries) {
                console.log("Attempt ".concat(retryCount + 1, "/").concat(maxRetries + 1, " for ").concat(args, ", retrying due to error"));
                retryCount++;
                continue;
            }
            let message;
            if (error instanceof Error) {
                message = error.message;
            } else {
                message = 'Network error';
            }
            return {
                error: {
                    status: 'FETCH_ERROR',
                    data: {
                        message
                    }
                }
            };
        }
    }
    return {
        error: {
            status: 500,
            data: {
                message: 'Max retries exceeded'
            }
        }
    };
};
const rickAndMortyApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'rickAndMortyApi',
    baseQuery: customBaseQuery,
    tagTypes: [
        'Character',
        'CharacterList'
    ],
    endpoints: (builder)=>({
            fetchInitialCharacters: builder.query({
                query: (page)=>"/character?page=".concat(page),
                transformResponse: (response)=>{
                    if (typeof response !== 'object' || response === null) throw new Error('Invalid response format');
                    const resp = response;
                    return {
                        status: 'success',
                        data: resp.results,
                        ...resp.info && {
                            info: resp.info
                        }
                    };
                },
                transformErrorResponse: (baseQueryReturnValue)=>{
                    const status = typeof baseQueryReturnValue.status === 'number' ? baseQueryReturnValue.status : 500;
                    return {
                        status: 'error',
                        data: [],
                        message: getErrorMessage(status)
                    };
                },
                providesTags: (_result, _error, page)=>[
                        {
                            type: 'CharacterList',
                            id: "PAGE_".concat(page)
                        }
                    ]
            }),
            searchCharacters: builder.query({
                query: (param)=>{
                    let { query, page } = param;
                    return query.trim() ? "/character/?name=".concat(encodeURIComponent(query.trim()), "&page=").concat(page) : "/character?page=".concat(page);
                },
                transformResponse: (response)=>{
                    if (typeof response !== 'object' || response === null) throw new Error('Invalid response format');
                    const resp = response;
                    return {
                        status: 'success',
                        data: resp.results,
                        ...resp.info && {
                            info: resp.info
                        }
                    };
                },
                transformErrorResponse: (baseQueryReturnValue)=>{
                    const status = typeof baseQueryReturnValue.status === 'number' ? baseQueryReturnValue.status : 500;
                    return {
                        status: 'error',
                        data: [],
                        message: getErrorMessage(status)
                    };
                },
                providesTags: (_result, _error, param)=>{
                    let { query, page } = param;
                    return [
                        {
                            type: 'CharacterList',
                            id: "SEARCH_".concat(query, "_PAGE_").concat(page)
                        }
                    ];
                }
            }),
            getCharacter: builder.query({
                query: (id)=>"/character/".concat(id),
                transformResponse: (response)=>{
                    if (typeof response !== 'object' || response === null) throw new Error('Invalid response format');
                    const resp = response;
                    return {
                        status: 'success',
                        data: resp
                    };
                },
                transformErrorResponse: (baseQueryReturnValue)=>{
                    const status = typeof baseQueryReturnValue.status === 'number' ? baseQueryReturnValue.status : 500;
                    return {
                        status: 'error',
                        data: {},
                        message: getErrorMessage(status)
                    };
                },
                providesTags: (_result, _error, id)=>[
                        {
                            type: 'Character',
                            id: "CHAR_".concat(id)
                        }
                    ]
            })
        })
});
const getErrorMessage = (status)=>{
    const messages = {
        400: 'Invalid search parameters',
        404: 'No characters found',
        429: 'Too many requests, retrying once...',
        500: 'Server error'
    };
    return messages[status] || "API error (".concat(status, ")");
};
const { useFetchInitialCharactersQuery, useSearchCharactersQuery, useGetCharacterQuery } = rickAndMortyApi;
const __TURBOPACK__default__export__ = rickAndMortyApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/charactersSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/apiSlice.ts [app-client] (ecmascript)");
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        characters: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].middleware)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/Header/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
// // import { NavLink } from 'react-router-dom';
// import { useTheme } from '../../../shared/hooks/useTheme';
// import { useTranslations } from 'next-intl';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// import { NavBar } from '../../ui/NavBar/NavBar';
// import styles from './Header.module.scss';
// const Header = () => {
//   const { theme, toggleTheme } = useTheme();
//   const t = useTranslations('Header');
//   // const pathname = usePathname();
//   return (
//     <header className={`${styles.header} ${styles[theme]}`}>
//       <h1>{t('title')}</h1>
//       <nav className={styles.nav}>
//         {/* <Link
//           href="/about"
//           className={pathname === '/about' ? styles.active : ''}
//         >
//           {t('about')}
//         </Link> */}
//       </nav>
//       {/* <button
//         onClick={toggleTheme}
//         aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
//         className={styles.themeToggle}
//       >
//         {theme === 'light' ? 'Dark' : 'Light'}
//       </button> */}
//       <NavBar />
//     </header>
//   );
// };
// export default Header;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/ClientProviders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ClientProviders
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header/Header.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function ClientProviders(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ClientProviders.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ClientProviders.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ClientProviders.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ClientProviders.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = ClientProviders;
var _c;
__turbopack_context__.k.register(_c, "ClientProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_10982015._.js.map