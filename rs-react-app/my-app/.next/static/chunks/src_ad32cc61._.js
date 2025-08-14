(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/SearchSection/SearchSection.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "dark": "SearchSection-module-scss-module__1Dck_G__dark",
  "error": "SearchSection-module-scss-module__1Dck_G__error",
  "gradientBorder": "SearchSection-module-scss-module__1Dck_G__gradientBorder",
  "light": "SearchSection-module-scss-module__1Dck_G__light",
  "searchForm": "SearchSection-module-scss-module__1Dck_G__searchForm",
  "searchInput": "SearchSection-module-scss-module__1Dck_G__searchInput",
  "searchInputContainer": "SearchSection-module-scss-module__1Dck_G__searchInputContainer",
  "searchSection": "SearchSection-module-scss-module__1Dck_G__searchSection",
});
}),
"[project]/src/components/ui/Button/Button.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Button-module-scss-module__VLzsWq__button",
});
}),
"[project]/src/components/ui/Button/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button/Button.module.scss.module.css [app-client] (css module)");
'use client';
;
;
const Button = (param)=>{
    let { children = null, onClick, type = 'button', disabled = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
        onClick: onClick,
        disabled: disabled,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button/Button.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SearchSection/SearchSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { useDebouncedCallback } from 'use-debounce';
// import { useSearchCharactersQuery } from '../../store/apiSlice';
// import type { CharacterDetails } from '../../types/types';
// import { useTheme } from '../../shared/hooks/useTheme';
// import { useTranslations } from 'next-intl';
// import styles from './SearchSection.module.scss';
// import Button from '../ui/Button/Button';
// import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
// interface SearchSectionProps {
//   onSearchResults: (
//     results: CharacterDetails[] | null,
//     searchTerm: string,
//     totalPages: number
//   ) => void;
//   onLoadingChange: (loading: boolean) => void;
//   onErrorChange: (error: string | null) => void;
//   currentPage: number;
//   setCurrentPage: (page: number) => void;
// }
// export default function SearchSection({
//   onSearchResults,
//   onLoadingChange,
//   onErrorChange,
//   currentPage,
//   setCurrentPage,
// }: SearchSectionProps) {
//   const { theme } = useTheme();
//   const t = useTranslations('Search');
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();
//   const initialQuery =
//     searchParams?.get('query') ||
//     (typeof window !== 'undefined' ? localStorage.getItem('searchTerm') || '' : '');
//   const [inputValue, setInputValue] = useState(initialQuery);
//   const { data, isLoading, error, refetch } = useSearchCharactersQuery({
//     query: inputValue.trim(),
//     page: currentPage,
//   });
//   const handleSearch = useDebouncedCallback((term: string) => {
//     const params = new URLSearchParams(searchParams || undefined);
//     params.set('page', '1');
//     if (term) {
//       params.set('query', term);
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('searchTerm', term);
//       }
//     } else {
//       params.delete('query');
//       if (typeof window !== 'undefined') {
//         localStorage.removeItem('searchTerm');
//       }
//     }
//     setCurrentPage(1);
//     replace(`${pathname}?${params.toString()}`);
//   }, 300);
//   useEffect(() => {
//     onLoadingChange(isLoading);
//     if (error) {
//       const errorMessage = isFetchBaseQueryError(error) && error.data && typeof error.data === 'object' && 'message' in error.data
//         ? String(error.data.message)
//         : t('unknownError');
//       onErrorChange(errorMessage);
//     } else {
//       onErrorChange(null);
//     }
//     onSearchResults(data?.data || null, inputValue.trim(), data?.info?.pages || 1);
//   }, [data, isLoading, error, inputValue, onSearchResults, onLoadingChange, onErrorChange, t]);
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//     handleSearch(e.target.value.trim());
//   };
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     refetch();
//   };
//   const handleForceRefresh = () => {
//     refetch();
//   };
//   return (
//     <section
//       className={`${styles.searchSection} ${styles[theme]}`}
//       data-testid="search-section"
//     >
//       <form onSubmit={handleSubmit} className={styles.searchForm}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder={t('placeholder')}
//           className={styles.searchInput}
//           disabled={isLoading}
//           aria-label={t('placeholder')}
//         />
//         <Button
//           type="submit"
//           disabled={isLoading}
//           aria-label={isLoading ? t('searching') : t('search')}
//         >
//           {isLoading ? t('searching') : t('search')}
//         </Button>
//       </form>
//       {error && (
//         <div className={styles.error}>
//           {t('error')}: {isFetchBaseQueryError(error) && error.data && typeof error.data === 'object' && 'message' in error.data ? String(error.data.message) : t('unknownError')}
//         </div>
//       )}
//       {data && (
//         <Button
//           onClick={handleForceRefresh}
//           disabled={isLoading}
//           aria-label={isLoading ? t('refreshing') : t('forceRefresh')}
//         >
//           {isLoading ? t('refreshing') : t('forceRefresh')}
//         </Button>
//       )}
//     </section>
//   );
// }
// function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
//   return (
//     typeof error === 'object' &&
//     error != null &&
//     'status' in error &&
//     ('data' in error || 'error' in error)
//   );
// }
// 'use client';
// import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { useDebouncedCallback } from 'use-debounce';
// import { useSearchCharactersQuery } from '../../store/apiSlice';
// import type { CharacterDetails } from '../../types/types';
// import { useTheme } from '../../shared/hooks/useTheme';
// import { useTranslations } from 'next-intl';
// import styles from './SearchSection.module.scss';
// import Button from '../ui/Button/Button';
// import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
// interface SearchSectionProps {
//   onSearchResults: (
//     results: CharacterDetails[] | null,
//     searchTerm: string,
//     totalPages: number
//   ) => void;
//   onLoadingChange: (loading: boolean) => void;
//   onErrorChange: (error: string | null) => void;
//   currentPage: number;
//   setCurrentPage: (page: number) => void;
// }
// export default function SearchSection({
//   onSearchResults,
//   onLoadingChange,
//   onErrorChange,
//   currentPage,
//   setCurrentPage,
// }: SearchSectionProps) {
//   const { theme } = useTheme();
//   const t = useTranslations('Search');
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();
//   const initialQuery =
//     searchParams?.get('query') ||
//     (typeof window !== 'undefined' ? localStorage.getItem('searchTerm') || '' : '');
//   const [inputValue, setInputValue] = useState(initialQuery);
//   const { data, isLoading, error, refetch } = useSearchCharactersQuery({
//     query: inputValue.trim(),
//     page: currentPage,
//   });
//   const handleSearch = useDebouncedCallback((term: string) => {
//     const params = new URLSearchParams(searchParams || undefined);
//     params.set('page', currentPage.toString());
//     if (term) {
//       params.set('query', term);
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('searchTerm', term);
//       }
//     } else {
//       params.delete('query');
//       if (typeof window !== 'undefined') {
//         localStorage.removeItem('searchTerm');
//       }
//     }
//     replace(`${pathname}?${params.toString()}`);
//   }, 300);
//   useEffect(() => {
//     onLoadingChange(isLoading);
//     if (error) {
//       const errorMessage = isFetchBaseQueryError(error) && error.data
//         ? typeof error.data === 'object' && 'message' in error.data
//           ? String(error.data.message)
//           : t('unknownError')
//         : t('unknownError');
//       onErrorChange(errorMessage);
//     } else {
//       onErrorChange(null);
//     }
//     // Use the latest inputValue from state, avoiding it as a dependency to prevent re-triggering
//     onSearchResults(data ? data.data || null : null, inputValue.trim(), data?.info?.pages || 1);
//   }, [data, isLoading, error, onLoadingChange, onErrorChange, onSearchResults, t]); // Removed inputValue from dependencies
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//     handleSearch(e.target.value.trim());
//   };
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     refetch();
//   };
//   const handleForceRefresh = () => {
//     refetch();
//   };
//   return (
//     <section
//       className={`${styles.searchSection} ${styles[theme]}`}
//       data-testid="search-section"
//     >
//       <form onSubmit={handleSubmit} className={styles.searchForm}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder={t('placeholder')}
//           className={styles.searchInput}
//           disabled={isLoading}
//           aria-label={t('placeholder')}
//         />
//         <Button
//           type="submit"
//           disabled={isLoading}
//           aria-label={isLoading ? t('searching') : t('search')}
//         >
//           {isLoading ? t('searching') : t('search')}
//         </Button>
//       </form>
//       {error && (
//         <div className={styles.error}>
//           {t('error')}: {isFetchBaseQueryError(error) && error.data && typeof error.data === 'object' && 'message' in error.data ? String(error.data.message) : t('unknownError')}
//         </div>
//       )}
//       {data && (
//         <Button
//           onClick={handleForceRefresh}
//           disabled={isLoading}
//           aria-label={isLoading ? t('refreshing') : t('forceRefresh')}
//         >
//           {isLoading ? t('refreshing') : t('forceRefresh')}
//         </Button>
//       )}
//     </section>
//   );
// }
// function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
//   return (
//     typeof error === 'object' &&
//     error != null &&
//     'status' in error &&
//     ('data' in error || 'error' in error)
//   );
// }
// 'use client';
// import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { useDebouncedCallback } from 'use-debounce';
// import { useSearchCharactersQuery } from '../../store/apiSlice';
// import type { CharacterDetails } from '../../types/types';
// import { useTheme } from '../../shared/hooks/useTheme';
// import { useTranslations } from 'next-intl';
// import styles from './SearchSection.module.scss';
// import Button from '../ui/Button/Button';
// import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
// interface SearchSectionProps {
//   onSearchResults: (
//     results: CharacterDetails[] | null,
//     searchTerm: string,
//     totalPages: number
//   ) => void;
//   onLoadingChange: (loading: boolean) => void;
//   onErrorChange: (error: string | null) => void;
//   currentPage: number;
//   setCurrentPage: (page: number) => void;
// }
// export default function SearchSection({
//   onSearchResults,
//   onLoadingChange,
//   onErrorChange,
//   currentPage,
//   setCurrentPage,
// }: SearchSectionProps) {
//   const { theme } = useTheme();
//   const t = useTranslations('Search');
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();
//   const initialQuery =
//     searchParams?.get('query') ||
//     (typeof window !== 'undefined' ? localStorage.getItem('searchTerm') || '' : '');
//   const [inputValue, setInputValue] = useState(initialQuery);
//   const { data, isLoading, error, refetch } = useSearchCharactersQuery({
//     query: inputValue.trim(),
//     page: currentPage,
//   });
//   const handleSearch = useDebouncedCallback((term: string) => {
//     const params = new URLSearchParams(searchParams || undefined);
//     params.set('page', currentPage.toString());
//     if (term) {
//       params.set('query', term);
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('searchTerm', term);
//       }
//     } else {
//       params.delete('query');
//       if (typeof window !== 'undefined') {
//         localStorage.removeItem('searchTerm');
//       }
//     }
//     replace(`${pathname}?${params.toString()}`);
//   }, 300);
//   // Separate effect for loading state
//   useEffect(() => {
//     onLoadingChange(isLoading);
//   }, [isLoading, onLoadingChange]);
//   // Separate effect for error state
//   useEffect(() => {
//     if (error) {
//       const errorMessage = isFetchBaseQueryError(error) && error.data
//         ? typeof error.data === 'object' && 'message' in error.data
//           ? String(error.data.message)
//           : t('unknownError')
//         : t('unknownError');
//       onErrorChange(errorMessage);
//     } else {
//       onErrorChange(null);
//     }
//   }, [error, onErrorChange, t]);
//   // Separate effect for data results
//   useEffect(() => {
//     onSearchResults(data ? data.data || null : null, inputValue.trim(), data?.info?.pages || 1);
//   }, [data, inputValue, onSearchResults]);
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//     handleSearch(e.target.value.trim());
//   };
//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     refetch();
//   };
//   const handleForceRefresh = () => {
//     refetch();
//   };
//   return (
//     <section
//       className={`${styles.searchSection} ${styles[theme]}`}
//       data-testid="search-section"
//     >
//       <form onSubmit={handleSubmit} className={styles.searchForm}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder={t('placeholder')}
//           className={styles.searchInput}
//           disabled={isLoading}
//           aria-label={t('placeholder')}
//         />
//         <Button
//           type="submit"
//           disabled={isLoading}
//           aria-label={isLoading ? t('searching') : t('search')}
//         >
//           {isLoading ? t('searching') : t('search')}
//         </Button>
//       </form>
//       {error && (
//         <div className={styles.error}>
//           {t('error')}: {isFetchBaseQueryError(error) && error.data && typeof error.data === 'object' && 'message' in error.data ? String(error.data.message) : t('unknownError')}
//         </div>
//       )}
//       {data && (
//         <Button
//           onClick={handleForceRefresh}
//           disabled={isLoading}
//           aria-label={isLoading ? t('refreshing') : t('forceRefresh')}
//         >
//           {isLoading ? t('refreshing') : t('forceRefresh')}
//         </Button>
//       )}
//     </section>
//   );
// }
// function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
//   return (
//     typeof error === 'object' &&
//     error != null &&
//     'status' in error &&
//     ('data' in error || 'error' in error)
//   );
// }
__turbopack_context__.s({
    "default": ()=>SearchSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/apiSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SearchSection/SearchSection.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button/Button.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../shared/services/'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function SearchSection(param) {
    let { onSearchResults, onLoadingChange, onErrorChange, currentPage, setCurrentPage } = param;
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('Search');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { replace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { getSearchTerm, saveSearchTerm } = useStorage();
    const initialQuery = getSearchTerm() || '';
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const { data, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchCharactersQuery"])({
        query: inputValue.trim(),
        page: currentPage
    });
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])({
        "SearchSection.useDebouncedCallback[handleSearch]": (term)=>{
            console.log('handleSearch triggered with term:', term, 'page:', currentPage);
            const params = new URLSearchParams(searchParams || undefined);
            params.set('page', currentPage.toString());
            if (term) {
                params.set('query', term);
                saveSearchTerm(term);
            } else {
                params.delete('query');
                saveSearchTerm('');
            }
            replace("".concat(pathname, "?").concat(params.toString()));
        }
    }["SearchSection.useDebouncedCallback[handleSearch]"], 300);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchSection.useEffect": ()=>{
            onLoadingChange(isLoading);
        }
    }["SearchSection.useEffect"], [
        isLoading,
        onLoadingChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchSection.useEffect": ()=>{
            if (error) {
                const errorMessage = isFetchBaseQueryError(error) && error.data ? typeof error.data === 'object' && 'message' in error.data ? String(error.data.message) : t('unknownError') : t('unknownError');
                onErrorChange(errorMessage);
            } else {
                onErrorChange(null);
            }
        }
    }["SearchSection.useEffect"], [
        error,
        onErrorChange,
        t
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchSection.useEffect": ()=>{
            var _data_info;
            onSearchResults(data ? data.data || null : null, inputValue.trim(), (data === null || data === void 0 ? void 0 : (_data_info = data.info) === null || _data_info === void 0 ? void 0 : _data_info.pages) || 1);
        }
    }["SearchSection.useEffect"], [
        data,
        inputValue,
        onSearchResults
    ]);
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
        handleSearch(e.target.value.trim());
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        refetch();
    };
    const handleForceRefresh = ()=>{
        refetch();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchSection, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
        "data-testid": "search-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchForm,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputValue,
                        onChange: handleInputChange,
                        placeholder: t('placeholder'),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput,
                        disabled: isLoading,
                        "aria-label": t('placeholder')
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchSection/SearchSection.tsx",
                        lineNumber: 547,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "submit",
                        disabled: isLoading,
                        "aria-label": isLoading ? t('searching') : t('search'),
                        children: isLoading ? t('searching') : t('search')
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchSection/SearchSection.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchSection/SearchSection.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                children: [
                    t('error'),
                    ": ",
                    isFetchBaseQueryError(error) && error.data && typeof error.data === 'object' && 'message' in error.data ? String(error.data.message) : t('unknownError')
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchSection/SearchSection.tsx",
                lineNumber: 565,
                columnNumber: 9
            }, this),
            data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: handleForceRefresh,
                disabled: isLoading,
                "aria-label": isLoading ? t('refreshing') : t('forceRefresh'),
                children: isLoading ? t('refreshing') : t('forceRefresh')
            }, void 0, false, {
                fileName: "[project]/src/components/SearchSection/SearchSection.tsx",
                lineNumber: 570,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchSection/SearchSection.tsx",
        lineNumber: 542,
        columnNumber: 5
    }, this);
}
_s(SearchSection, "HzFbYALOb6Wwwsvydlvo5gmTuT8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        useStorage,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchCharactersQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"]
    ];
});
_c = SearchSection;
function isFetchBaseQueryError(error) {
    return typeof error === 'object' && error != null && 'status' in error && ('data' in error || 'error' in error);
}
var _c;
__turbopack_context__.k.register(_c, "SearchSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ResultsSection/ResultsSection.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "dark": "ResultsSection-module-scss-module__3xws1W__dark",
  "light": "ResultsSection-module-scss-module__3xws1W__light",
  "loaderContainer": "ResultsSection-module-scss-module__3xws1W__loaderContainer",
  "noResults": "ResultsSection-module-scss-module__3xws1W__noResults",
  "pagination": "ResultsSection-module-scss-module__3xws1W__pagination",
  "paginationButton": "ResultsSection-module-scss-module__3xws1W__paginationButton",
  "paginationInfo": "ResultsSection-module-scss-module__3xws1W__paginationInfo",
  "resultsSection": "ResultsSection-module-scss-module__3xws1W__resultsSection",
  "resultsSectionError": "ResultsSection-module-scss-module__3xws1W__resultsSectionError",
});
}),
"[project]/src/components/ui/Loader/Loader.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "dark": "Loader-module-scss-module__De3Giq__dark",
  "fadeIn": "Loader-module-scss-module__De3Giq__fadeIn",
  "light": "Loader-module-scss-module__De3Giq__light",
  "loaderContainer": "Loader-module-scss-module__De3Giq__loaderContainer",
  "loaderSpinner": "Loader-module-scss-module__De3Giq__loaderSpinner",
  "loaderText": "Loader-module-scss-module__De3Giq__loaderText",
  "spin": "Loader-module-scss-module__De3Giq__spin",
  "visible": "Loader-module-scss-module__De3Giq__visible",
});
}),
"[project]/src/utils/timerService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class TimerService {
    setTimeout(callback, delay) {
        const timerId = window.setTimeout(callback, delay);
        this.timers.push(timerId);
        return timerId;
    }
    clearAll() {
        this.timers.forEach((timerId)=>clearTimeout(timerId));
        this.timers = [];
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "timers", []);
    }
}
const __TURBOPACK__default__export__ = new TimerService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Loader/Loader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Loader/Loader.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/timerService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Loader = (param)=>{
    let { minDisplayTime = 2000 } = param;
    _s();
    const [shouldRender, setShouldRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Loader.useEffect": ()=>{
            let mounted = true;
            const timers = [];
            timers.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setTimeout({
                "Loader.useEffect": ()=>{
                    if (mounted) {
                        setShouldRender(true);
                        timers.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setTimeout({
                            "Loader.useEffect": ()=>{
                                setIsVisible(true);
                            }
                        }["Loader.useEffect"], minDisplayTime));
                    }
                }
            }["Loader.useEffect"], 100));
            return ({
                "Loader.useEffect": ()=>{
                    mounted = false;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clearAll();
                }
            })["Loader.useEffect"];
        }
    }["Loader.useEffect"], [
        minDisplayTime
    ]);
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loaderWrapper, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loaderContainer, " ").concat(isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : ''),
            "aria-busy": "true",
            "aria-live": "polite",
            "data-testid": "loader",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loaderSpinner,
                    role: "status"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Loader/Loader.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loaderText,
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Loader/Loader.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Loader/Loader.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Loader/Loader.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Loader, "Sv5Oi4GLpEMycyl8+e65bCcAu1g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Card/Card.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "alive": "Card-module-scss-module__DHQCkG__alive",
  "card": "Card-module-scss-module__DHQCkG__card",
  "cardContent": "Card-module-scss-module__DHQCkG__cardContent",
  "cardImage": "Card-module-scss-module__DHQCkG__cardImage",
  "dark": "Card-module-scss-module__DHQCkG__dark",
  "dead": "Card-module-scss-module__DHQCkG__dead",
  "details": "Card-module-scss-module__DHQCkG__details",
  "episodes": "Card-module-scss-module__DHQCkG__episodes",
  "flag": "Card-module-scss-module__DHQCkG__flag",
  "light": "Card-module-scss-module__DHQCkG__light",
  "statusBadge": "Card-module-scss-module__DHQCkG__statusBadge",
  "unknown": "Card-module-scss-module__DHQCkG__unknown",
});
}),
"[project]/src/components/ui/Card/Card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card/Card.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/charactersSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const Card = (param)=>{
    let { character, onCardClick } = param;
    var _character_status, _character_origin, _character_location, _character_episode;
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('Card');
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var _params_page;
    const page = (_params_page = params === null || params === void 0 ? void 0 : params.page) !== null && _params_page !== void 0 ? _params_page : '1';
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const selectedCharacters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Card.useSelector[selectedCharacters]": (state)=>state.characters.selectedCharacters
    }["Card.useSelector[selectedCharacters]"]);
    if (!character) {
        return null;
    }
    const isSelected = selectedCharacters === null || selectedCharacters === void 0 ? void 0 : selectedCharacters.some((item)=>(item === null || item === void 0 ? void 0 : item.id) === character.id);
    const handleCheckboxChange = ()=>{
        if (isSelected) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeCharacter"])(character.id));
        } else {
            const payload = {
                id: character.id,
                name: character.name,
                species: character.species,
                status: character.status,
                detailsUrl: "/character/".concat(page, "/").concat(character.id)
            };
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCharacter"])(payload));
        }
    };
    const handleCardClick = ()=>{
        onCardClick();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
        onClick: handleCardClick,
        "data-testid": "card",
        role: "button",
        tabIndex: 0,
        "aria-label": t('viewDetailsAria', {
            name: character.name || t('unknown')
        }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImage,
                children: [
                    character.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: character.image,
                        alt: character.name || t('unknown'),
                        width: 200,
                        height: 200
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: t('noImage')
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][(_character_status = character.status) === null || _character_status === void 0 ? void 0 : _character_status.toLowerCase()]),
                        "data-testid": "status-badge",
                        children: character.status ? t("status.".concat(character.status.toLowerCase())) : t('unknown')
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Card/Card.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: character.name || t('unknown')
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            t('species'),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ' ',
                                    character.species || t('unknown')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Card/Card.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            t('gender'),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    character.gender || t('unknown')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Card/Card.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            t('origin'),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ' ',
                                    ((_character_origin = character.origin) === null || _character_origin === void 0 ? void 0 : _character_origin.name) || t('unknown')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Card/Card.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            t('location'),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ' ',
                                    ((_character_location = character.location) === null || _character_location === void 0 ? void 0 : _character_location.name) || t('unknown')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Card/Card.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].episodes,
                        children: [
                            t('episodes'),
                            ": ",
                            ((_character_episode = character.episode) === null || _character_episode === void 0 ? void 0 : _character_episode.length) || t('unknown')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Card/Card.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Card/Card.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flag,
                type: "checkbox",
                checked: isSelected,
                onChange: handleCheckboxChange,
                onClick: (e)=>e.stopPropagation(),
                "aria-label": t(isSelected ? 'deselectAria' : 'selectAria', {
                    name: character.name || t('unknown')
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card/Card.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Card/Card.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Card, "Ldi+9yDwfoLguWcbidjkyQ09w+Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/CardList/CardList.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardList": "CardList-module-scss-module__Z-0B2q__cardList",
});
}),
"[project]/src/components/ui/CardList/CardList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/CardList/CardList.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CardList = (param)=>{
    let { characters, onCardClick } = param;
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardList, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
        role: "list",
        children: characters.map((character)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                character: character,
                onCardClick: ()=>{
                    onCardClick(character.id);
                }
            }, character.id, false, {
                fileName: "[project]/src/components/ui/CardList/CardList.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/CardList/CardList.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardList, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = CardList;
const __TURBOPACK__default__export__ = CardList;
var _c;
__turbopack_context__.k.register(_c, "CardList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ResultsSection/ResultsSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ResultsSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ResultsSection/ResultsSection.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Loader/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CardList/CardList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ResultsSection(param) {
    let { loading, error, results, onCardClick } = param;
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('Results');
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultsSectionError, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
            "aria-live": "polite",
            "data-testid": "results-section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "paragraph",
                children: t('error', {
                    message: error
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ResultsSection/ResultsSection.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ResultsSection/ResultsSection.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    if (!results.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noResults, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
            "aria-live": "polite",
            "data-testid": "results-section",
            children: t('noResults')
        }, void 0, false, {
            fileName: "[project]/src/components/ResultsSection/ResultsSection.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultsSection, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loaderContainer, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                minDisplayTime: 2000,
                "data-testid": "loader"
            }, void 0, false, {
                fileName: "[project]/src/components/ResultsSection/ResultsSection.tsx",
                lineNumber: 53,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ResultsSection/ResultsSection.tsx",
            lineNumber: 52,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            characters: results,
            onCardClick: onCardClick
        }, void 0, false, {
            fileName: "[project]/src/components/ResultsSection/ResultsSection.tsx",
            lineNumber: 56,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ResultsSection/ResultsSection.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ResultsSection, "kMKfwyYxvoVytIH729G6pij+eH8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = ResultsSection;
var _c;
__turbopack_context__.k.register(_c, "ResultsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Pagination/Pagination.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Pagination-module-scss-module__1pE-0G__active",
  "dark": "Pagination-module-scss-module__1pE-0G__dark",
  "ellipsis": "Pagination-module-scss-module__1pE-0G__ellipsis",
  "light": "Pagination-module-scss-module__1pE-0G__light",
  "pageItem": "Pagination-module-scss-module__1pE-0G__pageItem",
  "pagination": "Pagination-module-scss-module__1pE-0G__pagination",
});
}),
"[project]/src/components/Pagination/Pagination.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Pagination/Pagination.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Pagination = (param)=>{
    let { currentPage, totalPages, onPageChange, loading } = param;
    _s();
    const handlePageClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Pagination.useCallback[handlePageClick]": (page)=>{
            if (page >= 1 && page <= totalPages && !loading) {
                onPageChange(page);
            }
        }
    }["Pagination.useCallback[handlePageClick]"], [
        onPageChange,
        totalPages,
        loading
    ]);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const getPageNumbers = ()=>{
        const delta = 2;
        const range = [];
        const left = Math.max(1, currentPage - delta);
        const right = Math.min(totalPages, currentPage + delta);
        if (left > 2) range.push(1);
        if (left > 3) range.push('...');
        for(let i = left; i <= right; i++)range.push(i);
        if (right < totalPages - 2) range.push('...');
        if (right < totalPages - 1) range.push(totalPages);
        return range;
    };
    if (totalPages <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pagination, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handlePageClick(currentPage - 1),
                disabled: currentPage === 1 || loading,
                "aria-label": "Previous page",
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/src/components/Pagination/Pagination.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            getPageNumbers().map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageItem,
                    children: page === '...' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ellipsis,
                        children: "..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Pagination/Pagination.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handlePageClick(page),
                        className: currentPage === page ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : '',
                        disabled: loading,
                        "aria-current": currentPage === page ? 'page' : undefined,
                        "aria-label": "Page ".concat(page),
                        children: page
                    }, void 0, false, {
                        fileName: "[project]/src/components/Pagination/Pagination.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/src/components/Pagination/Pagination.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handlePageClick(currentPage + 1),
                disabled: currentPage === totalPages || loading,
                "aria-label": "Next page",
                role: "button",
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/components/Pagination/Pagination.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Pagination/Pagination.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Pagination, "qfhCP8FDmrUUKT0s9aaQzPrKQP8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Pagination;
const __TURBOPACK__default__export__ = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/home/Home.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Home-module-scss-module__h_BGcG__container",
  "dark": "Home-module-scss-module__h_BGcG__dark",
  "home": "Home-module-scss-module__h_BGcG__home",
  "light": "Home-module-scss-module__h_BGcG__light",
  "pagination": "Home-module-scss-module__h_BGcG__pagination",
  "resultsBox": "Home-module-scss-module__h_BGcG__resultsBox",
  "searchResults": "Home-module-scss-module__h_BGcG__searchResults",
  "wrapper": "Home-module-scss-module__h_BGcG__wrapper",
});
}),
"[project]/src/pages/home/Home.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import { useState, useRef, useCallback, useEffect } from 'react';
// import {
//   useSearchParams,
//   useParams,
//   useNavigate,
//   Outlet,
//   useLocation,
// } from 'react-router-dom';
// // import { useSearchParams, useParams, usePathname, useRouter} from 'next/navigate';
// import SearchSection from '../../components/SearchSection/SearchSection';
// import ResultsSection from '../../components/ResultsSection/ResultsSection';
// import Pagination from '../../components/Pagination/Pagination';
// import styles from './Home.module.scss';
// import type { CharacterDetails } from '../../types/types';
// import { useTheme } from '../../shared/hooks/useTheme';
// const Home = () => {
//   const { theme } = useTheme();
//   const { page: pageParam, id: idParam } = useParams<{
//     page?: string;
//     id?: string;
//   }>();
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const initialPage = !isNaN(parseInt(pageParam || '1', 10))
//     ? parseInt(pageParam || '1', 10)
//     : 1;
//   const id = idParam ? parseInt(idParam, 10) : undefined;
//   const queryParam = searchParams.get('query') || '';
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [query, setQuery] = useState(queryParam);
//   const [selectedId, setSelectedId] = useState<number | undefined>(id);
//   const [results, setResults] = useState<CharacterDetails[]>([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const mainPanelRef = useRef<HTMLDivElement>(null);
//   const navigationTimeout = useRef<NodeJS.Timeout | null>(null);
//   const performNavigation = useCallback(
//     (path: string) => {
//       if (navigationTimeout.current) clearTimeout(navigationTimeout.current);
//       navigationTimeout.current = setTimeout(() => navigate(path), 100);
//     },
//     [navigate]
//   );
//   useEffect(() => {
//     if (location.pathname.startsWith('/about')) {
//       return;
//     }
//     setSelectedId(id);
//   }, [id, location.pathname]);
//   useEffect(() => {
//     if (location.pathname.startsWith('/about')) return;
//     setCurrentPage(initialPage);
//   }, [initialPage, location.pathname]);
//   useEffect(() => {
//     if (location.pathname.startsWith('/about')) return;
//     setQuery(queryParam);
//   }, [queryParam, location.pathname]);
//   useEffect(() => {
//     if (location.pathname.startsWith('/about')) return;
//     if (navigationTimeout.current) {
//       clearTimeout(navigationTimeout.current);
//       navigationTimeout.current = null;
//     }
//   }, [location.pathname, location.search]);
//   const handleSearchResults = (
//     searchResults: CharacterDetails[] | null,
//     searchTerm: string,
//     pages: number
//   ) => {
//     if (location.pathname.startsWith('/about')) return;
//     if (searchResults === null) throw new Error('Search results are null');
//     setResults(searchResults);
//     setTotalPages(pages);
//     if (searchTerm !== query) {
//       setCurrentPage(1);
//       const path = `/${1}${searchTerm ? `?query=${encodeURIComponent(searchTerm)}` : ''}`;
//       performNavigation(path);
//     } else {
//       const path = id ? `/${currentPage}/${id}` : `/${currentPage}`;
//       performNavigation(
//         `${path}${query ? `?query=${encodeURIComponent(query)}` : ''}`
//       );
//     }
//     setQuery(searchTerm);
//   };
//   const handleCardClick = (cardId: number) => {
//     if (location.pathname.startsWith('/about')) return;
//     setSelectedId(cardId);
//     const path = `/${currentPage}/${cardId}${query ? `?query=${encodeURIComponent(query)}` : ''}`;
//     performNavigation(path);
//   };
//   const handlePageChange = (newPage: number) => {
//     if (location.pathname.startsWith('/about')) return;
//     if (newPage < 1 || newPage > totalPages) return;
//     setCurrentPage(newPage);
//     const path = selectedId ? `/${newPage}/${selectedId}` : `/${newPage}`;
//     performNavigation(
//       `${path}${query ? `?query=${encodeURIComponent(query)}` : ''}`
//     );
//   };
//   return (
//     <div className={`${styles.home} ${styles[theme]}`} ref={mainPanelRef}>
//       <div className={styles.container}>
//         <SearchSection
//           onSearchResults={handleSearchResults}
//           onLoadingChange={setLoading}
//           onErrorChange={setError}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//         <div className="wrapper">
//           <div className={styles.searchResults}>
//             <div className="resultsBox">
//               <ResultsSection
//                 results={results}
//                 loading={loading}
//                 error={error}
//                 onCardClick={handleCardClick}
//               />
//             </div>
//             {totalPages > 1 && (
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//                 loading={loading}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// };
// export default Home;
// 'use client';
// import { useState, useRef, useCallback, useEffect } from 'react';
// import { useSearchParams, useParams, useRouter } from 'next/navigation';
// import SearchSection from '../../components/SearchSection/SearchSection';
// import ResultsSection from '../../components/ResultsSection/ResultsSection';
// import Pagination from '../../components/Pagination/Pagination';
// import styles from './Home.module.scss';
// import type { CharacterDetails } from '../../types/types';
// import { useTheme } from '../../shared/hooks/useTheme';
// const Home = () => {
//   const { theme } = useTheme();
//   const { page: pageParam } = useParams<{ page: string }>();
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   // const pathname = usePathname();
//   const initialPage = !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;
//   const queryParam = searchParams?.get('query') || '';
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [query, setQuery] = useState(queryParam);
//   const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
//   const [results, setResults] = useState<CharacterDetails[]>([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const mainPanelRef = useRef<HTMLDivElement>(null);
//   const performNavigation = useCallback(
//     (path: string) => {
//       router.push(path);
//     },
//     [router]
//   );
//   useEffect(() => {
//     setCurrentPage(initialPage);
//   }, [initialPage]);
//   useEffect(() => {
//     setQuery(queryParam);
//   }, [queryParam]);
//   const handleSearchResults = (
//     searchResults: CharacterDetails[] | null,
//     searchTerm: string,
//     pages: number
//   ) => {
//     if (searchResults === null) throw new Error('Search results are null');
//     setResults(searchResults);
//     setTotalPages(pages);
//     if (searchTerm !== query) {
//       setCurrentPage(1);
//       const params = new URLSearchParams(searchParams || undefined);
//       params.set('page', '1');
//       if (searchTerm) {
//         params.set('query', searchTerm);
//       } else {
//         params.delete('query');
//       }
//       performNavigation(`/characters/1${params.toString() ? `?${params.toString()}` : ''}`);
//     } else {
//       const params = new URLSearchParams(searchParams || undefined);
//       params.set('page', currentPage.toString());
//       if (query) {
//         params.set('query', query);
//       } else {
//         params.delete('query');
//       }
//       performNavigation(`/characters/${currentPage}${params.toString() ? `?${params.toString()}` : ''}`);
//     }
//     setQuery(searchTerm);
//   };
//   const handleCardClick = (cardId: number) => {
//     setSelectedId(cardId);
//     const params = new URLSearchParams(searchParams || undefined);
//     if (query) {
//       params.set('query', query);
//     } else {
//       params.delete('query');
//     }
//     performNavigation(`/character/${currentPage}/${cardId}${params.toString() ? `?${params.toString()}` : ''}`);
//   };
//   const handlePageChange = (newPage: number) => {
//     if (newPage < 1 || newPage > totalPages) return;
//     setCurrentPage(newPage);
//     const params = new URLSearchParams(searchParams || undefined);
//     params.set('page', newPage.toString());
//     if (query) {
//       params.set('query', query);
//     } else {
//       params.delete('query');
//     }
//     const path = selectedId ? `/character/${newPage}/${selectedId}` : `/characters/${newPage}`;
//     performNavigation(`${path}${params.toString() ? `?${params.toString()}` : ''}`);
//   };
//   return (
//     <div className={`${styles.home} ${styles[theme]}`} ref={mainPanelRef}>
//       <div className={styles.container}>
//         <SearchSection
//           onSearchResults={handleSearchResults}
//           onLoadingChange={setLoading}
//           onErrorChange={setError}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//         <div className="wrapper">
//           <div className={styles.searchResults}>
//             <div className="resultsBox">
//               <ResultsSection
//                 results={results}
//                 loading={loading}
//                 error={error}
//                 onCardClick={handleCardClick}
//               />
//             </div>
//             {totalPages > 1 && (
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//                 loading={loading}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;
// 'use client';
// import { useState, useRef, useCallback, useEffect } from 'react';
// import { useSearchParams, useParams, useRouter } from 'next/navigation';
// import SearchSection from '../../components/SearchSection/SearchSection';
// import ResultsSection from '../../components/ResultsSection/ResultsSection';
// import Pagination from '../../components/Pagination/Pagination';
// import styles from './Home.module.scss';
// import type { CharacterDetails } from '../../types/types';
// import { useTheme } from '../../shared/hooks/useTheme';
// const Home = () => {
//   const { theme } = useTheme();
//   const params = useParams() as { page: string };
//   const { page: pageParam } = params;
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const initialPage = parseInt(pageParam, 10) || 1;
//   const queryParam = searchParams?.get('query') || '';
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [query, setQuery] = useState(queryParam);
//   const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
//   const [results, setResults] = useState<CharacterDetails[]>([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const mainPanelRef = useRef<HTMLDivElement>(null);
//   const performNavigation = useCallback(
//     (path: string) => {
//       router.push(path);
//     },
//     [router]
//   );
//   useEffect(() => {
//     setCurrentPage(initialPage);
//   }, [initialPage]);
//   useEffect(() => {
//     setQuery(queryParam);
//   }, [queryParam]);
//   const handleSearchResults = (
//     searchResults: CharacterDetails[] | null,
//     searchTerm: string,
//     pages: number
//   ) => {
//     setResults(searchResults || []);
//     setTotalPages(pages);
//     if (searchTerm !== query) {
//       setCurrentPage(1);
//       setSelectedId(undefined); // Reset selectedId when search term changes
//       const params = new URLSearchParams(searchParams || undefined);
//       params.set('page', '1');
//       if (searchTerm) {
//         params.set('query', searchTerm);
//       } else {
//         params.delete('query');
//       }
//       performNavigation(`/characters/1${params.toString() ? `?${params.toString()}` : ''}`);
//     } else {
//       const params = new URLSearchParams(searchParams || undefined);
//       params.set('page', currentPage.toString());
//       if (query) {
//         params.set('query', query);
//       } else {
//         params.delete('query');
//       }
//       performNavigation(`/characters/${currentPage}${params.toString() ? `?${params.toString()}` : ''}`);
//     }
//     setQuery(searchTerm);
//   };
//   const handleCardClick = (cardId: number) => {
//     setSelectedId(cardId);
//     const params = new URLSearchParams(searchParams || undefined);
//     if (query) {
//       params.set('query', query);
//     } else {
//       params.delete('query');
//     }
//     performNavigation(`/character/${currentPage}/${cardId}${params.toString() ? `?${params.toString()}` : ''}`);
//   };
//   const handlePageChange = (newPage: number) => {
//     if (newPage < 1 || newPage > totalPages) return;
//     setCurrentPage(newPage);
//     setSelectedId(undefined); // Reset selectedId when changing pages
//     const params = new URLSearchParams(searchParams || undefined);
//     params.set('page', newPage.toString());
//     if (query) {
//       params.set('query', query);
//     } else {
//       params.delete('query');
//     }
//     performNavigation(`/characters/${newPage}${params.toString() ? `?${params.toString()}` : ''}`);
//   };
//   return (
//     <div className={`${styles.home} ${styles[theme]}`} ref={mainPanelRef}>
//       <div className={styles.container}>
//         <SearchSection
//           onSearchResults={handleSearchResults}
//           onLoadingChange={setLoading}
//           onErrorChange={setError}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//         <div className="wrapper">
//           <div className={styles.searchResults}>
//             <div className="resultsBox">
//               <ResultsSection
//                 results={results}
//                 loading={loading}
//                 error={error}
//                 onCardClick={handleCardClick}
//               />
//             </div>
//             {totalPages > 1 && (
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//                 loading={loading}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchSection/SearchSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResultsSection/ResultsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Pagination/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/home/Home.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const Home = ()=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { page: pageParam } = params;
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const initialPage = parseInt(pageParam, 10) || 1;
    const queryParam = (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get('query')) || '';
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPage);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(queryParam);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mainPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const performNavigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[performNavigation]": (path)=>{
            router.push(path);
        }
    }["Home.useCallback[performNavigation]"], [
        router
    ]);
    // Sync currentPage with URL param changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const newPage = parseInt(pageParam, 10) || 1;
            if (newPage !== currentPage) {
                setCurrentPage(newPage);
            }
        }
    }["Home.useEffect"], [
        pageParam,
        currentPage
    ]);
    // Sync query with URL param changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const newQuery = (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get('query')) || '';
            if (newQuery !== query) {
                setQuery(newQuery);
            }
        }
    }["Home.useEffect"], [
        searchParams,
        query
    ]);
    const handleSearchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSearchResults]": (searchResults, searchTerm, pages)=>{
            setResults(searchResults || []);
            setTotalPages(pages);
            if (searchTerm !== query) {
                setCurrentPage(1);
                setSelectedId(undefined); // Reset selectedId when search term changes
                const params = new URLSearchParams(searchParams || undefined);
                params.set('page', '1');
                if (searchTerm) {
                    params.set('query', searchTerm);
                } else {
                    params.delete('query');
                }
                performNavigation("/characters/1".concat(params.toString() ? "?".concat(params.toString()) : ''));
            }
        }
    }["Home.useCallback[handleSearchResults]"], [
        query,
        searchParams,
        performNavigation
    ]);
    const handleCardClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleCardClick]": (cardId)=>{
            setSelectedId(cardId);
            const params = new URLSearchParams(searchParams || undefined);
            if (query) {
                params.set('query', query);
            } else {
                params.delete('query');
            }
            performNavigation("/character/".concat(currentPage, "/").concat(cardId).concat(params.toString() ? "?".concat(params.toString()) : ''));
        }
    }["Home.useCallback[handleCardClick]"], [
        currentPage,
        query,
        searchParams,
        performNavigation
    ]);
    const handlePageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handlePageChange]": (newPage)=>{
            if (newPage < 1 || newPage > totalPages) return;
            setCurrentPage(newPage);
            setSelectedId(undefined); // Reset selectedId when changing pages
            const params = new URLSearchParams(searchParams || undefined);
            params.set('page', newPage.toString());
            if (query) {
                params.set('query', query);
            } else {
                params.delete('query');
            }
            performNavigation("/characters/".concat(newPage).concat(params.toString() ? "?".concat(params.toString()) : ''));
        }
    }["Home.useCallback[handlePageChange]"], [
        totalPages,
        query,
        searchParams,
        performNavigation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].home, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][theme]),
        ref: mainPanelRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSearchResults: handleSearchResults,
                    onLoadingChange: setLoading,
                    onErrorChange: setError,
                    currentPage: currentPage,
                    setCurrentPage: setCurrentPage
                }, void 0, false, {
                    fileName: "[project]/src/pages/home/Home.tsx",
                    lineNumber: 555,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchResults,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "resultsBox",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    results: results,
                                    loading: loading,
                                    error: error,
                                    onCardClick: handleCardClick
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/home/Home.tsx",
                                    lineNumber: 565,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/home/Home.tsx",
                                lineNumber: 564,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                currentPage: currentPage,
                                totalPages: totalPages,
                                onPageChange: handlePageChange,
                                loading: loading
                            }, void 0, false, {
                                fileName: "[project]/src/pages/home/Home.tsx",
                                lineNumber: 573,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/home/Home.tsx",
                        lineNumber: 563,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/home/Home.tsx",
                    lineNumber: 562,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/home/Home.tsx",
            lineNumber: 554,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/pages/home/Home.tsx",
        lineNumber: 553,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Home, "5AuPfTk2CxXPQlf52am3oavIzm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ad32cc61._.js.map