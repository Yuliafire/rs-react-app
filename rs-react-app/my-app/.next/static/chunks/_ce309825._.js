(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/src/components/ui/Button/Button.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({
          button: 'Button-module-scss-module__VLzsWq__button',
        });
      },
    '[project]/src/components/ui/Button/Button.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/ui/Button/Button.module.scss.module.css [app-client] (css module)'
          );
        ('use client');
        const Button = (param) => {
          let {
            children = null,
            onClick,
            type = 'button',
            disabled = false,
          } = param;
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'button',
            {
              type: type,
              className:
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                  'default'
                ].button,
              onClick: onClick,
              disabled: disabled,
              children: children,
            },
            void 0,
            false,
            {
              fileName: '[project]/src/components/ui/Button/Button.tsx',
              lineNumber: 20,
              columnNumber: 5,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _c = Button;
        const __TURBOPACK__default__export__ = Button;
        var _c;
        __turbopack_context__.k.register(_c, 'Button');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/shared/services/storageService.ts [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            useStorage: () => useStorage,
          });
          const RICKMORTY_SEARCH_KEY = 'rickmorty-search-term';
          const RICKMORTY_HISTORY_KEY = 'rickmorty-search-history';
          const useStorage = () => {
            const getSearchTerm = () => {
              try {
                const term = localStorage.getItem(RICKMORTY_SEARCH_KEY);
                return term ? JSON.parse(term) : '';
              } catch (error) {
                console.error(
                  'Error reading from the multiverse database:',
                  error
                );
                return '';
              }
            };
            const saveSearchTerm = (term) => {
              try {
                localStorage.setItem(
                  RICKMORTY_SEARCH_KEY,
                  JSON.stringify(term)
                );
                const history = getSearchHistory();
                if (term && !history.includes(term)) {
                  const newHistory = [term, ...history].slice(0, 10);
                  localStorage.setItem(
                    RICKMORTY_HISTORY_KEY,
                    JSON.stringify(newHistory)
                  );
                }
              } catch (error) {
                console.error('Error saving to portal gun memory:', error);
              }
            };
            const clearSearchTerm = () => {
              try {
                localStorage.removeItem(RICKMORTY_SEARCH_KEY);
              } catch (error) {
                console.error('Error clearing dimension cache:', error);
              }
            };
            const getSearchHistory = () => {
              try {
                const history = localStorage.getItem(RICKMORTY_HISTORY_KEY);
                return history ? JSON.parse(history) : [];
              } catch (error) {
                console.error(
                  'Error accessing interdimensional records:',
                  error
                );
                return [];
              }
            };
            const clearSearchHistory = () => {
              try {
                localStorage.removeItem(RICKMORTY_HISTORY_KEY);
              } catch (error) {
                console.error('Error purging multiverse logs:', error);
              }
            };
            return {
              getSearchTerm,
              saveSearchTerm,
              clearSearchTerm,
              getSearchHistory,
              clearSearchHistory,
            };
          };
          if (
            typeof globalThis.$RefreshHelpers$ === 'object' &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    '[project]/src/pages/home/Home.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        // 'use client';
        // import { useState, useCallback } from 'react';
        // import { useParams } from 'next/navigation';
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
        //   const initialPage = parseInt(pageParam, 10) || 1;
        //   const [currentPage, setCurrentPage] = useState(initialPage);
        //   const [results, setResults] = useState<CharacterDetails[]>([]);
        //   const [totalPages, setTotalPages] = useState(1);
        //   const [loading, setLoading] = useState(false);
        //   const [error, setError] = useState<string | null>(null);
        //   const handleSearchResults = useCallback(
        //     (searchResults: CharacterDetails[] | null, searchTerm: string, pages: number) => {
        //       setResults(searchResults || []);
        //       setTotalPages(pages);
        //       if (searchTerm && pages > 0) {
        //         setCurrentPage(1); // Reset to first page on new search
        //       }
        //     },
        //     []
        //   );
        //   const handlePageChange = useCallback((newPage: number) => {
        //     if (newPage >= 1 && newPage <= totalPages) {
        //       setCurrentPage(newPage);
        //     }
        //   }, [totalPages]);
        //   const handleCardClick = useCallback((cardId: number) => {
        //     // Placeholder for card click navigation
        //     console.log('Card clicked:', cardId);
        //   }, []);
        //   return (
        //     <div className={`${styles.home} ${styles[theme]}`}>
        //       <div className={styles.container}>
        //         <SearchSection
        //           onSearchResults={handleSearchResults}
        //           onLoadingChange={setLoading}
        //           onErrorChange={setError}
        //           currentPage={currentPage}
        //           setCurrentPage={setCurrentPage}
        //         />
        //         <div className={styles.searchResults}>
        //           <div className={styles.resultsBox}>
        //             <ResultsSection
        //               results={results}
        //               loading={loading}
        //               error={error}
        //               onCardClick={handleCardClick}
        //             />
        //           </div>
        //           {totalPages > 1 && (
        //             <Pagination
        //               currentPage={currentPage}
        //               totalPages={totalPages}
        //               onPageChange={handlePageChange}
        //               loading={loading}
        //             />
        //           )}
        //         </div>
        //       </div>
        //     </div>
        //   );
        // };
        // export default Home;
        // 'use client';
        // import { useState, useCallback, useEffect } from 'react';
        // import { useParams, useRouter } from 'next/navigation';
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
        //   const router = useRouter();
        //   const initialPage = parseInt(pageParam, 10) || 1;
        //   const [currentPage, setCurrentPage] = useState(initialPage);
        //   const [results, setResults] = useState<CharacterDetails[]>([]);
        //   const [totalPages, setTotalPages] = useState(1);
        //   const [loading, setLoading] = useState(false);
        //   const [error, setError] = useState<string | null>(null);
        //   const [lastSearchTerm, setLastSearchTerm] = useState<string>(''); // Track the last search term
        //   const handleSearchResults = useCallback(
        //     (searchResults: CharacterDetails[] | null, searchTerm: string, pages: number) => {
        //       setResults(searchResults || []);
        //       setTotalPages(pages);
        //       // Only reset to page 1 if the search term is new
        //       if (searchTerm && pages > 0 && searchTerm !== lastSearchTerm) {
        //         setCurrentPage(1);
        //         setLastSearchTerm(searchTerm); // Update the last search term
        //       }
        //     },
        //     [lastSearchTerm]
        //   );
        //   const handlePageChange = useCallback((newPage: number) => {
        //     if (newPage >= 1 && newPage <= totalPages) {
        //       setCurrentPage(newPage);
        //       router.push(`/en/characters/${newPage}`); // Sync URL with page change
        //     }
        //   }, [totalPages, router]);
        //   const handleCardClick = useCallback((cardId: number) => {
        //     console.log('Card clicked:', cardId);
        //   }, []);
        //   // Sync currentPage with URL params
        //   useEffect(() => {
        //     const newPage = parseInt(pageParam, 10) || 1;
        //     if (newPage !== currentPage) {
        //       setCurrentPage(newPage);
        //     }
        //   }, [pageParam, currentPage]);
        //   return (
        //     <div className={`${styles.home} ${styles[theme]}`}>
        //       <div className={styles.container}>
        //         <SearchSection
        //           onSearchResults={handleSearchResults}
        //           onLoadingChange={setLoading}
        //           onErrorChange={setError}
        //           currentPage={currentPage}
        //           setCurrentPage={setCurrentPage}
        //         />
        //         <div className={styles.searchResults}>
        //           <div className={styles.resultsBox}>
        //             <ResultsSection
        //               results={results}
        //               loading={loading}
        //               error={error}
        //               onCardClick={handleCardClick}
        //             />
        //           </div>
        //           {totalPages > 1 && (
        //             <Pagination
        //               currentPage={currentPage}
        //               totalPages={totalPages}
        //               onPageChange={handlePageChange}
        //               loading={loading}
        //             />
        //           )}
        //         </div>
        //       </div>
        //     </div>
        //   );
        // };
        // export default Home;
        __turbopack_context__.s({
          default: () => SearchSection,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/navigation.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/store/apiSlice.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>'
          );
        (() => {
          const e = new Error(
            "Cannot find module './SearchSection.module.scss'"
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/ui/Button/Button.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$services$2f$storageService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/shared/services/storageService.ts [app-client] (ecmascript)'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        function SearchSection(param) {
          let {
            onSearchResults,
            onLoadingChange,
            onErrorChange,
            currentPage,
            setCurrentPage,
          } = param;
          _s();
          const { theme } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useTheme'
          ])();
          const t = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
            'useTranslations'
          ])('Search');
          const searchParams = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useSearchParams'
          ])();
          const pathname = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'usePathname'
          ])();
          const { replace } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useRouter'
          ])();
          const { getSearchTerm, saveSearchTerm } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$services$2f$storageService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useStorage'
          ])();
          const initialQuery = getSearchTerm() || '';
          const [inputValue, setInputValue] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(initialQuery);
          const { data, isLoading, error, refetch } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useSearchCharactersQuery'
          ])({
            query: inputValue.trim(),
            page: currentPage,
          });
          const handleSearch = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useDebouncedCallback'
          ])(
            {
              'SearchSection.useDebouncedCallback[handleSearch]': function (
                term
              ) {
                let isPageChange =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : false;
                console.log(
                  'handleSearch triggered with term:',
                  term,
                  'page:',
                  currentPage,
                  'isPageChange:',
                  isPageChange
                );
                const params = new URLSearchParams(searchParams || undefined);
                params.set('page', currentPage.toString());
                if (term && !isPageChange) {
                  params.set('query', term);
                  saveSearchTerm(term);
                } else if (!term && !isPageChange) {
                  params.delete('query');
                  saveSearchTerm('');
                }
                replace(''.concat(pathname, '?').concat(params.toString()));
              },
            }['SearchSection.useDebouncedCallback[handleSearch]'],
            300
          );
          // Trigger re-fetch for page changes without treating it as a new search
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'SearchSection.useEffect': () => {
                handleSearch(inputValue.trim(), true); // Pass true to indicate a page change
              },
            }['SearchSection.useEffect'],
            [currentPage, handleSearch, inputValue]
          );
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'SearchSection.useEffect': () => {
                onLoadingChange(isLoading);
              },
            }['SearchSection.useEffect'],
            [isLoading, onLoadingChange]
          );
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'SearchSection.useEffect': () => {
                if (error) {
                  const errorMessage =
                    isFetchBaseQueryError(error) && error.data
                      ? typeof error.data === 'object' &&
                        'message' in error.data
                        ? String(error.data.message)
                        : t('unknownError')
                      : t('unknownError');
                  onErrorChange(errorMessage);
                } else {
                  onErrorChange(null);
                }
              },
            }['SearchSection.useEffect'],
            [error, onErrorChange, t]
          );
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'SearchSection.useEffect': () => {
                var _data_info;
                // Use inputValue.trim() as searchTerm only for initial search, not pagination
                const searchTerm = inputValue.trim();
                onSearchResults(
                  data ? data.data || null : null,
                  searchTerm,
                  (data === null || data === void 0
                    ? void 0
                    : (_data_info = data.info) === null || _data_info === void 0
                      ? void 0
                      : _data_info.pages) || 1
                );
              },
            }['SearchSection.useEffect'],
            [data, inputValue, onSearchResults]
          );
          const handleInputChange = (e) => {
            setInputValue(e.target.value);
            handleSearch(e.target.value.trim());
          };
          const handleSubmit = (e) => {
            e.preventDefault();
            refetch();
          };
          const handleForceRefresh = () => {
            refetch();
          };
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'section',
            {
              className: ''
                .concat(styles.searchSection, ' ')
                .concat(styles[theme]),
              'data-testid': 'search-section',
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'form',
                  {
                    onSubmit: handleSubmit,
                    className: styles.searchForm,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'input',
                        {
                          type: 'text',
                          value: inputValue,
                          onChange: handleInputChange,
                          placeholder: t('placeholder'),
                          className: styles.searchInput,
                          disabled: isLoading,
                          'aria-label': t('placeholder'),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/src/pages/home/Home.tsx',
                          lineNumber: 284,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          type: 'submit',
                          disabled: isLoading,
                          'aria-label': isLoading
                            ? t('searching')
                            : t('search'),
                          children: isLoading ? t('searching') : t('search'),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/src/pages/home/Home.tsx',
                          lineNumber: 293,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/pages/home/Home.tsx',
                    lineNumber: 283,
                    columnNumber: 7,
                  },
                  this
                ),
                error &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'div',
                    {
                      className: styles.error,
                      children: [
                        t('error'),
                        ': ',
                        isFetchBaseQueryError(error) &&
                        error.data &&
                        typeof error.data === 'object' &&
                        'message' in error.data
                          ? String(error.data.message)
                          : t('unknownError'),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: '[project]/src/pages/home/Home.tsx',
                      lineNumber: 302,
                      columnNumber: 9,
                    },
                    this
                  ),
                data &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {
                      onClick: handleForceRefresh,
                      disabled: isLoading,
                      'aria-label': isLoading
                        ? t('refreshing')
                        : t('forceRefresh'),
                      children: isLoading ? t('refreshing') : t('forceRefresh'),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/src/pages/home/Home.tsx',
                      lineNumber: 307,
                      columnNumber: 9,
                    },
                    this
                  ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/pages/home/Home.tsx',
              lineNumber: 279,
              columnNumber: 5,
            },
            this
          );
        }
        _s(SearchSection, 'G5bD6ySooB8vfTaaYquXaQo62TA=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'useTranslations'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSearchParams'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'usePathname'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRouter'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$services$2f$storageService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useStorage'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSearchCharactersQuery'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useDebouncedCallback'
            ],
          ];
        });
        _c = SearchSection;
        function isFetchBaseQueryError(error) {
          return (
            typeof error === 'object' &&
            error != null &&
            'status' in error &&
            ('data' in error || 'error' in error)
          );
        }
        var _c;
        __turbopack_context__.k.register(_c, 'SearchSection');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        __turbopack_context__.s({
          useDebounce: () => a,
          useDebouncedCallback: () => c,
          useThrottledCallback: () => o,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        function c(e, u, c, i) {
          var a = this,
            o = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(null),
            f = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(0),
            l = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(0),
            v = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(null),
            m = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])([]),
            d = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(),
            g = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(),
            p = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(e),
            w = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(!0);
          p.current = e;
          var s = 'undefined' != typeof window,
            x = !u && 0 !== u && s;
          if ('function' != typeof e)
            throw new TypeError('Expected a function');
          u = +u || 0;
          var h = !!(c = c || {}).leading,
            y = !('trailing' in c) || !!c.trailing,
            F = 'maxWait' in c,
            A = 'debounceOnServer' in c && !!c.debounceOnServer,
            D = F ? Math.max(+c.maxWait || 0, u) : null;
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(function () {
            return (
              (w.current = !0),
              function () {
                w.current = !1;
              }
            );
          }, []);
          var T = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useMemo'
          ])(
            function () {
              var r = function (r) {
                  var n = m.current,
                    t = d.current;
                  return (
                    (m.current = d.current = null),
                    (f.current = r),
                    (l.current = l.current || r),
                    (g.current = p.current.apply(t, n))
                  );
                },
                n = function (r, n) {
                  (x && cancelAnimationFrame(v.current),
                    (v.current = x
                      ? requestAnimationFrame(r)
                      : setTimeout(r, n)));
                },
                t = function (r) {
                  if (!w.current) return !1;
                  var n = r - o.current;
                  return (
                    !o.current || n >= u || n < 0 || (F && r - f.current >= D)
                  );
                },
                e = function (n) {
                  return (
                    (v.current = null),
                    y && m.current
                      ? r(n)
                      : ((m.current = d.current = null), g.current)
                  );
                },
                c = function r() {
                  var c = Date.now();
                  if ((h && l.current === f.current && T(), t(c))) return e(c);
                  if (w.current) {
                    var i = u - (c - o.current),
                      a = F ? Math.min(i, D - (c - f.current)) : i;
                    n(r, a);
                  }
                },
                T = function () {
                  i && i({});
                },
                W = function () {
                  if (s || A) {
                    var e = Date.now(),
                      i = t(e);
                    if (
                      ((m.current = [].slice.call(arguments)),
                      (d.current = a),
                      (o.current = e),
                      i)
                    ) {
                      if (!v.current && w.current)
                        return (
                          (f.current = o.current),
                          n(c, u),
                          h ? r(o.current) : g.current
                        );
                      if (F) return (n(c, u), r(o.current));
                    }
                    return (v.current || n(c, u), g.current);
                  }
                };
              return (
                (W.cancel = function () {
                  (v.current &&
                    (x
                      ? cancelAnimationFrame(v.current)
                      : clearTimeout(v.current)),
                    (f.current = 0),
                    (m.current = o.current = d.current = v.current = null));
                }),
                (W.isPending = function () {
                  return !!v.current;
                }),
                (W.flush = function () {
                  return v.current ? e(Date.now()) : g.current;
                }),
                W
              );
            },
            [h, F, u, D, y, x, s, A, i]
          );
          return T;
        }
        function i(r, n) {
          return r === n;
        }
        function a(n, t, a) {
          var o = (a && a.equalityFn) || i,
            f = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(n),
            l = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useState'
            ])({})[1],
            v = c(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useCallback'
              ])(
                function (r) {
                  ((f.current = r), l({}));
                },
                [l]
              ),
              t,
              a,
              l
            ),
            m = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useRef'
            ])(n);
          return (o(m.current, n) || (v(n), (m.current = n)), [f.current, v]);
        }
        function o(r, n, t) {
          var e = void 0 === t ? {} : t,
            u = e.leading,
            i = e.trailing;
          return c(r, n, {
            maxWait: n,
            leading: void 0 === u || u,
            trailing: void 0 === i || i,
          });
        }
        //# sourceMappingURL=index.module.js.map
      },
  },
]);

//# sourceMappingURL=_ce309825._.js.map
