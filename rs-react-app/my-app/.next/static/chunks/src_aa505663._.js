(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/src/components/SearchSection/SearchSection.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({
          dark: 'SearchSection-module-scss-module__1Dck_G__dark',
          error: 'SearchSection-module-scss-module__1Dck_G__error',
          gradientBorder:
            'SearchSection-module-scss-module__1Dck_G__gradientBorder',
          light: 'SearchSection-module-scss-module__1Dck_G__light',
          searchForm: 'SearchSection-module-scss-module__1Dck_G__searchForm',
          searchInput: 'SearchSection-module-scss-module__1Dck_G__searchInput',
          searchInputContainer:
            'SearchSection-module-scss-module__1Dck_G__searchInputContainer',
          searchSection:
            'SearchSection-module-scss-module__1Dck_G__searchSection',
        });
      },
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
    '[project]/src/components/SearchSection/SearchSection.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
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
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/SearchSection/SearchSection.module.scss.module.css [app-client] (css module)'
            );
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
                'SearchSection.useDebouncedCallback[handleSearch]': (term) => {
                  console.log(
                    'handleSearch triggered with term:',
                    term,
                    'page:',
                    currentPage
                  );
                  const params = new URLSearchParams(searchParams || undefined);
                  params.set('page', currentPage.toString());
                  if (term) {
                    params.set('query', term);
                    saveSearchTerm(term);
                  } else {
                    params.delete('query');
                    saveSearchTerm('');
                  }
                  replace(''.concat(pathname, '?').concat(params.toString()));
                },
              }['SearchSection.useDebouncedCallback[handleSearch]'],
              300
            );
            // Trigger re-fetch when currentPage changes
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useEffect'
            ])(
              {
                'SearchSection.useEffect': () => {
                  handleSearch(inputValue.trim());
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
                  onSearchResults(
                    data ? data.data || null : null,
                    inputValue.trim(),
                    (data === null || data === void 0
                      ? void 0
                      : (_data_info = data.info) === null ||
                          _data_info === void 0
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
                  .concat(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ].searchSection,
                    ' '
                  )
                  .concat(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ][theme]
                  ),
                'data-testid': 'search-section',
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'form',
                    {
                      onSubmit: handleSubmit,
                      className:
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                          'default'
                        ].searchForm,
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
                            className:
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                'default'
                              ].searchInput,
                            disabled: isLoading,
                            'aria-label': t('placeholder'),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/SearchSection/SearchSection.tsx',
                            lineNumber: 109,
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
                            fileName:
                              '[project]/src/components/SearchSection/SearchSection.tsx',
                            lineNumber: 118,
                            columnNumber: 9,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        '[project]/src/components/SearchSection/SearchSection.tsx',
                      lineNumber: 108,
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
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].error,
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
                        fileName:
                          '[project]/src/components/SearchSection/SearchSection.tsx',
                        lineNumber: 127,
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
                        children: isLoading
                          ? t('refreshing')
                          : t('forceRefresh'),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/SearchSection/SearchSection.tsx',
                        lineNumber: 132,
                        columnNumber: 9,
                      },
                      this
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  '[project]/src/components/SearchSection/SearchSection.tsx',
                lineNumber: 104,
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
    '[project]/src/components/ResultsSection/ResultsSection.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({});
      },
    '[project]/src/components/ui/Loader/Loader.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({
          dark: 'Loader-module-scss-module__De3Giq__dark',
          fadeIn: 'Loader-module-scss-module__De3Giq__fadeIn',
          light: 'Loader-module-scss-module__De3Giq__light',
          loaderContainer: 'Loader-module-scss-module__De3Giq__loaderContainer',
          loaderSpinner: 'Loader-module-scss-module__De3Giq__loaderSpinner',
          loaderText: 'Loader-module-scss-module__De3Giq__loaderText',
          spin: 'Loader-module-scss-module__De3Giq__spin',
          visible: 'Loader-module-scss-module__De3Giq__visible',
        });
      },
    '[project]/src/utils/timerService.ts [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)'
          );
        class TimerService {
          setTimeout(callback, delay) {
            const timerId = window.setTimeout(callback, delay);
            this.timers.push(timerId);
            return timerId;
          }
          clearAll() {
            this.timers.forEach((timerId) => clearTimeout(timerId));
            this.timers = [];
          }
          constructor() {
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              '_'
            ])(this, 'timers', []);
          }
        }
        const __TURBOPACK__default__export__ = new TimerService();
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
    '[project]/src/components/ui/Loader/Loader.tsx [app-client] (ecmascript)': (
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/ui/Loader/Loader.module.scss.module.css [app-client] (css module)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/utils/timerService.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        const Loader = (param) => {
          let { minDisplayTime = 2000 } = param;
          _s();
          const [shouldRender, setShouldRender] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false);
          const [isVisible, setIsVisible] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false);
          const { theme } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useTheme'
          ])();
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'Loader.useEffect': () => {
                let mounted = true;
                const timers = [];
                timers.push(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'default'
                  ].setTimeout(
                    {
                      'Loader.useEffect': () => {
                        if (mounted) {
                          setShouldRender(true);
                          timers.push(
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'default'
                            ].setTimeout(
                              {
                                'Loader.useEffect': () => {
                                  setIsVisible(true);
                                },
                              }['Loader.useEffect'],
                              minDisplayTime
                            )
                          );
                        }
                      },
                    }['Loader.useEffect'],
                    100
                  )
                );
                return {
                  'Loader.useEffect': () => {
                    mounted = false;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$timerService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'default'
                    ].clearAll();
                  },
                }['Loader.useEffect'];
              },
            }['Loader.useEffect'],
            [minDisplayTime]
          );
          if (!shouldRender) {
            return null;
          }
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: ''
                .concat(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ].loaderWrapper,
                  ' '
                )
                .concat(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ][theme]
                ),
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: ''
                    .concat(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].loaderContainer,
                      ' '
                    )
                    .concat(
                      isVisible
                        ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].visible
                        : ''
                    ),
                  'aria-busy': 'true',
                  'aria-live': 'polite',
                  'data-testid': 'loader',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].loaderSpinner,
                        role: 'status',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/ui/Loader/Loader.tsx',
                        lineNumber: 53,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'p',
                      {
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].loaderText,
                        children: 'Loading...',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/ui/Loader/Loader.tsx',
                        lineNumber: 54,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/src/components/ui/Loader/Loader.tsx',
                  lineNumber: 47,
                  columnNumber: 7,
                },
                ('TURBOPACK compile-time value', void 0)
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/src/components/ui/Loader/Loader.tsx',
              lineNumber: 46,
              columnNumber: 5,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _s(Loader, 'Sv5Oi4GLpEMycyl8+e65bCcAu1g=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ],
          ];
        });
        _c = Loader;
        const __TURBOPACK__default__export__ = Loader;
        var _c;
        __turbopack_context__.k.register(_c, 'Loader');
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
    '[project]/src/components/ui/Card/Card.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({
          alive: 'Card-module-scss-module__DHQCkG__alive',
          card: 'Card-module-scss-module__DHQCkG__card',
          cardContent: 'Card-module-scss-module__DHQCkG__cardContent',
          cardImage: 'Card-module-scss-module__DHQCkG__cardImage',
          dark: 'Card-module-scss-module__DHQCkG__dark',
          dead: 'Card-module-scss-module__DHQCkG__dead',
          details: 'Card-module-scss-module__DHQCkG__details',
          episodes: 'Card-module-scss-module__DHQCkG__episodes',
          flag: 'Card-module-scss-module__DHQCkG__flag',
          light: 'Card-module-scss-module__DHQCkG__light',
          statusBadge: 'Card-module-scss-module__DHQCkG__statusBadge',
          unknown: 'Card-module-scss-module__DHQCkG__unknown',
        });
      },
    '[project]/src/components/ui/Card/Card.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        // 'use client';
        // import Image from 'next/image';
        // import { useParams } from 'next/navigation';
        // import { useTranslations } from 'next-intl';
        // import styles from './Card.module.scss';
        // import type { CharacterDetails } from '../../../types/types';
        // import { useSelector, useDispatch } from 'react-redux';
        // import { addCharacter, removeCharacter } from '../../../store/charactersSlice';
        // import type { RootState, AppDispatch } from '../../../store/store';
        // import { useTheme } from '../../../shared/hooks/useTheme';
        // interface CardProps {
        //   character: CharacterDetails;
        //   onCardClick: () => void;
        // }
        // const Card = ({ character, onCardClick }: CardProps) => {
        //   const t = useTranslations('Card');
        //   const { theme } = useTheme();
        //   const params = useParams<{ page: string }>();
        //   const page = params?.page ?? '1';
        //   const dispatch = useDispatch<AppDispatch>();
        //   const selectedCharacters = useSelector(
        //     (state: RootState) => state.characters.selectedCharacters
        //   );
        //   if (!character) {
        //     return null;
        //   }
        //   const isSelected = selectedCharacters?.some(
        //     (item) => item?.id === character.id
        //   );
        //   const handleCheckboxChange = () => {
        //     if (isSelected) {
        //       dispatch(removeCharacter(character.id));
        //     } else {
        //       const payload = {
        //         id: character.id,
        //         name: character.name,
        //         species: character.species,
        //         status: character.status,
        //         detailsUrl: `/character/${page}/${character.id}`,
        //       };
        //       dispatch(addCharacter(payload));
        //     }
        //   };
        //   const handleCardClick = () => {
        //     onCardClick();
        //   };
        //   return (
        //     <div
        //       className={`${styles.card} ${styles[theme]}`}
        //       onClick={handleCardClick}
        //       data-testid="card"
        //       role="button"
        //       tabIndex={0}
        //       aria-label={t('viewDetailsAria', { name: character.name || t('unknown') })}
        //     >
        //       <div className={styles.cardImage}>
        //         {character.image ? (
        //           <Image
        //             src={character.image}
        //             alt={character.name || t('unknown')}
        //             width={200}
        //             height={200}
        //           />
        //         ) : (
        //           <span>{t('noImage')}</span>
        //         )}
        //         <span
        //           className={`${styles.statusBadge} ${styles[character.status?.toLowerCase()]}`}
        //           data-testid="status-badge"
        //         >
        //           {character.status
        //             ? t(`status.${character.status.toLowerCase()}`)
        //             : t('unknown')}
        //         </span>
        //       </div>
        //       <div className={styles.cardContent}>
        //         <h3>{character.name || t('unknown')}</h3>
        //         <div className={styles.details}>
        //           <p>
        //             <strong>{t('species')}:</strong>{' '}
        //             {character.species || t('unknown')}
        //           </p>
        //           <p>
        //             <strong>{t('gender')}:</strong> {character.gender || t('unknown')}
        //           </p>
        //           <p>
        //             <strong>{t('origin')}:</strong>{' '}
        //             {character.origin?.name || t('unknown')}
        //           </p>
        //           <p>
        //             <strong>{t('location')}:</strong>{' '}
        //             {character.location?.name || t('unknown')}
        //           </p>
        //         </div>
        //         <div className={styles.episodes}>
        //           {t('episodes')}: {character.episode?.length || t('unknown')}
        //         </div>
        //       </div>
        //       <input
        //         className={styles.flag}
        //         type="checkbox"
        //         checked={isSelected}
        //         onChange={handleCheckboxChange}
        //         onClick={(e) => e.stopPropagation()}
        //         aria-label={t(isSelected ? 'deselectAria' : 'selectAria', {
        //           name: character.name || t('unknown'),
        //         })}
        //       />
        //     </div>
        //   );
        // };
        // export default Card;
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/image.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/navigation.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/ui/Card/Card.module.scss.module.css [app-client] (css module)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/store/charactersSlice.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        const Card = (param) => {
          let { character, onCardClick } = param;
          var _character_status,
            _character_origin,
            _character_location,
            _character_episode;
          _s();
          const t = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
            'useTranslations'
          ])('Card');
          const { theme } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useTheme'
          ])();
          const params = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useParams'
          ])();
          var _params_page;
          const page =
            (_params_page =
              params === null || params === void 0 ? void 0 : params.page) !==
              null && _params_page !== void 0
              ? _params_page
              : '1';
          const dispatch = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useDispatch'
          ])();
          const selectedCharacters = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useSelector'
          ])(
            {
              'Card.useSelector[selectedCharacters]': (state) =>
                state.characters.selectedCharacters,
            }['Card.useSelector[selectedCharacters]']
          );
          if (!character) {
            return null;
          }
          const isSelected =
            selectedCharacters === null || selectedCharacters === void 0
              ? void 0
              : selectedCharacters.some(
                  (item) =>
                    (item === null || item === void 0 ? void 0 : item.id) ===
                    character.id
                );
          const handleCheckboxChange = () => {
            if (isSelected) {
              dispatch(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'removeCharacter'
                ])(character.id)
              );
            } else {
              const payload = {
                id: character.id,
                name: character.name,
                species: character.species,
                status: character.status,
                detailsUrl: '/characters/'
                  .concat(character.id, '/')
                  .concat(page),
              };
              dispatch(
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'addCharacter'
                ])(payload)
              );
            }
          };
          const handleCardClick = () => {
            onCardClick();
          };
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: ''
                .concat(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ].card,
                  ' '
                )
                .concat(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ][theme]
                ),
              onClick: handleCardClick,
              'data-testid': 'card',
              role: 'button',
              tabIndex: 0,
              'aria-label': t('viewDetailsAria', {
                name: character.name || t('unknown'),
              }),
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].cardImage,
                    children: [
                      character.image
                        ? /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'default'
                            ],
                            {
                              src: character.image,
                              alt: character.name || t('unknown'),
                              width: 200,
                              height: 200,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/src/components/ui/Card/Card.tsx',
                              lineNumber: 189,
                              columnNumber: 11,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          )
                        : /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'span',
                            {
                              children: t('noImage'),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/src/components/ui/Card/Card.tsx',
                              lineNumber: 196,
                              columnNumber: 11,
                            },
                            ('TURBOPACK compile-time value', void 0)
                          ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'span',
                        {
                          className: ''
                            .concat(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                'default'
                              ].statusBadge,
                              ' '
                            )
                            .concat(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                'default'
                              ][
                                (_character_status = character.status) ===
                                  null || _character_status === void 0
                                  ? void 0
                                  : _character_status.toLowerCase()
                              ]
                            ),
                          'data-testid': 'status-badge',
                          children: character.status
                            ? t(
                                'status.'.concat(character.status.toLowerCase())
                              )
                            : t('unknown'),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/src/components/ui/Card/Card.tsx',
                          lineNumber: 198,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/ui/Card/Card.tsx',
                    lineNumber: 187,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].cardContent,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'h3',
                        {
                          children: character.name || t('unknown'),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/src/components/ui/Card/Card.tsx',
                          lineNumber: 208,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className:
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                              'default'
                            ].details,
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'p',
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'strong',
                                    {
                                      children: [t('species'), ':'],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/src/components/ui/Card/Card.tsx',
                                      lineNumber: 211,
                                      columnNumber: 13,
                                    },
                                    ('TURBOPACK compile-time value', void 0)
                                  ),
                                  ' ',
                                  character.species || t('unknown'),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/src/components/ui/Card/Card.tsx',
                                lineNumber: 210,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'p',
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'strong',
                                    {
                                      children: [t('gender'), ':'],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/src/components/ui/Card/Card.tsx',
                                      lineNumber: 215,
                                      columnNumber: 13,
                                    },
                                    ('TURBOPACK compile-time value', void 0)
                                  ),
                                  ' ',
                                  character.gender || t('unknown'),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/src/components/ui/Card/Card.tsx',
                                lineNumber: 214,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'p',
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'strong',
                                    {
                                      children: [t('origin'), ':'],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/src/components/ui/Card/Card.tsx',
                                      lineNumber: 218,
                                      columnNumber: 13,
                                    },
                                    ('TURBOPACK compile-time value', void 0)
                                  ),
                                  ' ',
                                  ((_character_origin = character.origin) ===
                                    null || _character_origin === void 0
                                    ? void 0
                                    : _character_origin.name) || t('unknown'),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/src/components/ui/Card/Card.tsx',
                                lineNumber: 217,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'p',
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'strong',
                                    {
                                      children: [t('location'), ':'],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        '[project]/src/components/ui/Card/Card.tsx',
                                      lineNumber: 222,
                                      columnNumber: 13,
                                    },
                                    ('TURBOPACK compile-time value', void 0)
                                  ),
                                  ' ',
                                  ((_character_location =
                                    character.location) === null ||
                                  _character_location === void 0
                                    ? void 0
                                    : _character_location.name) || t('unknown'),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/src/components/ui/Card/Card.tsx',
                                lineNumber: 221,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/src/components/ui/Card/Card.tsx',
                          lineNumber: 209,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className:
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                              'default'
                            ].episodes,
                          children: [
                            t('episodes'),
                            ': ',
                            ((_character_episode = character.episode) ===
                              null || _character_episode === void 0
                              ? void 0
                              : _character_episode.length) || t('unknown'),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/src/components/ui/Card/Card.tsx',
                          lineNumber: 226,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/ui/Card/Card.tsx',
                    lineNumber: 207,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'input',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].flag,
                    type: 'checkbox',
                    checked: isSelected,
                    onChange: handleCheckboxChange,
                    onClick: (e) => e.stopPropagation(),
                    'aria-label': t(
                      isSelected ? 'deselectAria' : 'selectAria',
                      {
                        name: character.name || t('unknown'),
                      }
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/components/ui/Card/Card.tsx',
                    lineNumber: 230,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/components/ui/Card/Card.tsx',
              lineNumber: 179,
              columnNumber: 5,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _s(Card, 'Ldi+9yDwfoLguWcbidjkyQ09w+Y=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'useTranslations'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useParams'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useDispatch'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSelector'
            ],
          ];
        });
        _c = Card;
        const __TURBOPACK__default__export__ = Card;
        var _c;
        __turbopack_context__.k.register(_c, 'Card');
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
    '[project]/src/components/ui/CardList/CardList.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({
          cardList: 'CardList-module-scss-module__Z-0B2q__cardList',
        });
      },
    '[project]/src/components/ui/CardList/CardList.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
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
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/ui/Card/Card.tsx [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/ui/CardList/CardList.module.scss.module.css [app-client] (css module)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)'
            );
          var _s = __turbopack_context__.k.signature();
          ('use client');
          const CardList = (param) => {
            let { characters, onCardClick } = param;
            _s();
            const { theme } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ])();
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: ''
                  .concat(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ].cardList,
                    ' '
                  )
                  .concat(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ][theme]
                  ),
                role: 'list',
                children: characters.map((character) =>
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {
                      character: character,
                      onCardClick: () => {
                        onCardClick(character.id);
                      },
                    },
                    character.id,
                    false,
                    {
                      fileName:
                        '[project]/src/components/ui/CardList/CardList.tsx',
                      lineNumber: 18,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  )
                ),
              },
              void 0,
              false,
              {
                fileName: '[project]/src/components/ui/CardList/CardList.tsx',
                lineNumber: 16,
                columnNumber: 5,
              },
              ('TURBOPACK compile-time value', void 0)
            );
          };
          _s(CardList, 'JkSxfi8+JQlqgIgDOc3wQN+nVIw=', false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useTheme'
              ],
            ];
          });
          _c = CardList;
          const __TURBOPACK__default__export__ = CardList;
          var _c;
          __turbopack_context__.k.register(_c, 'CardList');
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
    '[project]/src/components/ResultsSection/ResultsSection.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
        'use strict';

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => ResultsSection,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/ResultsSection/ResultsSection.module.scss.module.css [app-client] (css module)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/ui/Loader/Loader.tsx [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/ui/CardList/CardList.tsx [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>'
            );
          var _s = __turbopack_context__.k.signature();
          ('use client');
          function ResultsSection(param) {
            let { loading, error, results, onCardClick } = param;
            _s();
            const { theme } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ])();
            const t = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'useTranslations'
            ])('Results');
            if (error) {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'section',
                {
                  className: ''
                    .concat(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].resultsSectionError,
                      ' '
                    )
                    .concat(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ][theme]
                    ),
                  'aria-live': 'polite',
                  'data-testid': 'results-section',
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'p',
                    {
                      role: 'paragraph',
                      children: t('error', {
                        message: error,
                      }),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/ResultsSection/ResultsSection.tsx',
                      lineNumber: 32,
                      columnNumber: 9,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/ResultsSection/ResultsSection.tsx',
                  lineNumber: 27,
                  columnNumber: 7,
                },
                this
              );
            }
            if (!results.length) {
              return /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'p',
                {
                  className: ''
                    .concat(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].noResults,
                      ' '
                    )
                    .concat(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ][theme]
                    ),
                  'aria-live': 'polite',
                  'data-testid': 'results-section',
                  children: t('noResults'),
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/src/components/ResultsSection/ResultsSection.tsx',
                  lineNumber: 39,
                  columnNumber: 7,
                },
                this
              );
            }
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'section',
              {
                className: ''
                  .concat(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ].resultsSection,
                    ' '
                  )
                  .concat(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ][theme]
                  ),
                children: loading
                  ? /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: ''
                          .concat(
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                              'default'
                            ].loaderContainer,
                            ' '
                          )
                          .concat(
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                              'default'
                            ][theme]
                          ),
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'default'
                          ],
                          {
                            minDisplayTime: 2000,
                            'data-testid': 'loader',
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/src/components/ResultsSection/ResultsSection.tsx',
                            lineNumber: 53,
                            columnNumber: 11,
                          },
                          this
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/ResultsSection/ResultsSection.tsx',
                        lineNumber: 52,
                        columnNumber: 9,
                      },
                      this
                    )
                  : /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CardList$2f$CardList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'default'
                      ],
                      {
                        characters: results,
                        onCardClick: onCardClick,
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/src/components/ResultsSection/ResultsSection.tsx',
                        lineNumber: 56,
                        columnNumber: 9,
                      },
                      this
                    ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/src/components/ResultsSection/ResultsSection.tsx',
                lineNumber: 50,
                columnNumber: 5,
              },
              this
            );
          }
          _s(
            ResultsSection,
            'kMKfwyYxvoVytIH729G6pij+eH8=',
            false,
            function () {
              return [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'useTheme'
                ],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
                  'useTranslations'
                ],
              ];
            }
          );
          _c = ResultsSection;
          var _c;
          __turbopack_context__.k.register(_c, 'ResultsSection');
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
    '[project]/src/components/Pagination/Pagination.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({
          active: 'Pagination-module-scss-module__1pE-0G__active',
          dark: 'Pagination-module-scss-module__1pE-0G__dark',
          ellipsis: 'Pagination-module-scss-module__1pE-0G__ellipsis',
          light: 'Pagination-module-scss-module__1pE-0G__light',
          pageItem: 'Pagination-module-scss-module__1pE-0G__pageItem',
          pagination: 'Pagination-module-scss-module__1pE-0G__pagination',
        });
      },
    '[project]/src/components/Pagination/Pagination.tsx [app-client] (ecmascript)':
      (__turbopack_context__) => {
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
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
            __turbopack_context__.i(
              '[project]/src/components/Pagination/Pagination.module.scss.module.css [app-client] (css module)'
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)'
            );
          var _s = __turbopack_context__.k.signature();
          ('use client');
          const Pagination = (param) => {
            let { currentPage, totalPages, onPageChange, loading } = param;
            _s();
            const handlePageClick = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useCallback'
            ])(
              {
                'Pagination.useCallback[handlePageClick]': (page) => {
                  if (page >= 1 && page <= totalPages && !loading) {
                    onPageChange(page);
                  }
                },
              }['Pagination.useCallback[handlePageClick]'],
              [onPageChange, totalPages, loading]
            );
            const { theme } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ])();
            const getPageNumbers = () => {
              const delta = 2;
              const range = [];
              const left = Math.max(1, currentPage - delta);
              const right = Math.min(totalPages, currentPage + delta);
              if (left > 2) range.push(1);
              if (left > 3) range.push('...');
              for (let i = left; i <= right; i++) range.push(i);
              if (right < totalPages - 2) range.push('...');
              if (right < totalPages - 1) range.push(totalPages);
              return range;
            };
            if (totalPages <= 1) return null;
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: ''
                  .concat(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ].pagination,
                    ' '
                  )
                  .concat(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ][theme]
                  ),
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'button',
                    {
                      onClick: () => handlePageClick(currentPage - 1),
                      disabled: currentPage === 1 || loading,
                      'aria-label': 'Previous page',
                      children: 'Previous',
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/Pagination/Pagination.tsx',
                      lineNumber: 50,
                      columnNumber: 7,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  getPageNumbers().map((page, index) =>
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'span',
                      {
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].pageItem,
                        children:
                          page === '...'
                            ? /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'span',
                                {
                                  className:
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                      'default'
                                    ].ellipsis,
                                  children: '...',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/components/Pagination/Pagination.tsx',
                                  lineNumber: 60,
                                  columnNumber: 13,
                                },
                                ('TURBOPACK compile-time value', void 0)
                              )
                            : /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'button',
                                {
                                  onClick: () => handlePageClick(page),
                                  className:
                                    currentPage === page
                                      ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                          'default'
                                        ].active
                                      : '',
                                  disabled: loading,
                                  'aria-current':
                                    currentPage === page ? 'page' : undefined,
                                  'aria-label': 'Page '.concat(page),
                                  children: page,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/components/Pagination/Pagination.tsx',
                                  lineNumber: 62,
                                  columnNumber: 13,
                                },
                                ('TURBOPACK compile-time value', void 0)
                              ),
                      },
                      index,
                      false,
                      {
                        fileName:
                          '[project]/src/components/Pagination/Pagination.tsx',
                        lineNumber: 58,
                        columnNumber: 9,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    )
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'button',
                    {
                      onClick: () => handlePageClick(currentPage + 1),
                      disabled: currentPage === totalPages || loading,
                      'aria-label': 'Next page',
                      role: 'button',
                      children: 'Next',
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/src/components/Pagination/Pagination.tsx',
                      lineNumber: 74,
                      columnNumber: 7,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: '[project]/src/components/Pagination/Pagination.tsx',
                lineNumber: 49,
                columnNumber: 5,
              },
              ('TURBOPACK compile-time value', void 0)
            );
          };
          _s(Pagination, 'qfhCP8FDmrUUKT0s9aaQzPrKQP8=', false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'useTheme'
              ],
            ];
          });
          _c = Pagination;
          const __TURBOPACK__default__export__ = Pagination;
          var _c;
          __turbopack_context__.k.register(_c, 'Pagination');
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
    '[project]/src/pages/home/Home.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({
          container: 'Home-module-scss-module__h_BGcG__container',
          dark: 'Home-module-scss-module__h_BGcG__dark',
          home: 'Home-module-scss-module__h_BGcG__home',
          light: 'Home-module-scss-module__h_BGcG__light',
          pagination: 'Home-module-scss-module__h_BGcG__pagination',
          resultsBox: 'Home-module-scss-module__h_BGcG__resultsBox',
          searchResults: 'Home-module-scss-module__h_BGcG__searchResults',
          searchSection: 'Home-module-scss-module__h_BGcG__searchSection',
          wrapper: 'Home-module-scss-module__h_BGcG__wrapper',
        });
      },
    '[project]/src/components/Flyout/Flyout.module.scss.module.css [app-client] (css module)':
      (__turbopack_context__) => {
        __turbopack_context__.v({
          button: 'Flyout-module-scss-module__XrxFjG__button',
          buttonContainer: 'Flyout-module-scss-module__XrxFjG__buttonContainer',
          dark: 'Flyout-module-scss-module__XrxFjG__dark',
          flyout: 'Flyout-module-scss-module__XrxFjG__flyout',
          light: 'Flyout-module-scss-module__XrxFjG__light',
          title: 'Flyout-module-scss-module__XrxFjG__title',
        });
      },
    '[project]/src/components/Flyout/Flyout.tsx [app-client] (ecmascript)': (
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/store/charactersSlice.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/Flyout/Flyout.module.scss.module.css [app-client] (css module)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        const Flyout = () => {
          _s();
          const t = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
            'useTranslations'
          ])('Flyout');
          const { theme } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useTheme'
          ])();
          const selectedCharacters = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useSelector'
          ])(
            {
              'Flyout.useSelector[selectedCharacters]': (state) =>
                state.characters.selectedCharacters,
            }['Flyout.useSelector[selectedCharacters]']
          );
          const dispatch = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useDispatch'
          ])();
          if (!selectedCharacters || selectedCharacters.length === 0)
            return null;
          const handleDownloadCSV = () => {
            const csvContent = [
              ['ID', 'Name', 'Species', 'Status', 'Details URL'],
              ...selectedCharacters.map((item) => [
                item.id,
                '"'.concat(item.name.replace(/"/g, '""'), '"'),
                item.species,
                item.status,
                item.detailsUrl,
              ]),
            ]
              .map((row) => row.join(','))
              .join('\n');
            const blob = new Blob(['\uFEFF', csvContent], {
              type: 'text/csv;charset=utf-8',
            });
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'saveAs'
            ])(blob, ''.concat(selectedCharacters.length, '_items.csv'));
          };
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: ''
                .concat(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ].flyout,
                  ' '
                )
                .concat(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ][theme]
                ),
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].title,
                    children: [t('selected'), ' ', selectedCharacters.length],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/Flyout/Flyout.tsx',
                    lineNumber: 43,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].buttonContainer,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'button',
                        {
                          className:
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                              'default'
                            ].button,
                          onClick: () =>
                            dispatch(
                              (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'removeAllCharacters'
                              ])()
                            ),
                          'aria-label': t('unselectAll'),
                          children: t('unselectAll'),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/Flyout/Flyout.tsx',
                          lineNumber: 48,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'button',
                        {
                          className:
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                              'default'
                            ].button,
                          onClick: handleDownloadCSV,
                          'aria-label': t('download'),
                          children: t('download'),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/src/components/Flyout/Flyout.tsx',
                          lineNumber: 55,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/Flyout/Flyout.tsx',
                    lineNumber: 47,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/components/Flyout/Flyout.tsx',
              lineNumber: 42,
              columnNumber: 5,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _s(Flyout, 'vshwS/VdUb/GyLZrn+4FzMJjER8=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'useTranslations'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useSelector'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useDispatch'
            ],
          ];
        });
        _c = Flyout;
        const __TURBOPACK__default__export__ = Flyout;
        var _c;
        __turbopack_context__.k.register(_c, 'Flyout');
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
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
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
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/SearchSection/SearchSection.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/ResultsSection/ResultsSection.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/Pagination/Pagination.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
          __turbopack_context__.i(
            '[project]/src/pages/home/Home.module.scss.module.css [app-client] (css module)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/shared/hooks/useTheme.ts [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/Flyout/Flyout.tsx [app-client] (ecmascript)'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        const Home = () => {
          _s();
          const { theme } = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useTheme'
          ])();
          const params = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useParams'
          ])();
          const { page: pageParam } = params;
          const initialPage = parseInt(pageParam, 10) || 1;
          const [currentPage, setCurrentPage] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(initialPage);
          const [results, setResults] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])([]);
          const [totalPages, setTotalPages] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(1);
          const [loading, setLoading] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false);
          const [error, setError] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(null);
          const [lastSearchTerm, setLastSearchTerm] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])('');
          const handleSearchResults = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useCallback'
          ])(
            {
              'Home.useCallback[handleSearchResults]': (
                searchResults,
                searchTerm,
                pages
              ) => {
                setResults(searchResults || []);
                setTotalPages(pages);
                if (searchTerm && pages > 0 && searchTerm !== lastSearchTerm) {
                  setCurrentPage(1);
                  setLastSearchTerm(searchTerm);
                }
              },
            }['Home.useCallback[handleSearchResults]'],
            [lastSearchTerm]
          );
          const handlePageChange = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useCallback'
          ])(
            {
              'Home.useCallback[handlePageChange]': (newPage) => {
                if (newPage >= 1 && newPage <= totalPages) {
                  setCurrentPage(newPage);
                }
              },
            }['Home.useCallback[handlePageChange]'],
            [totalPages]
          );
          const handleCardClick = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useCallback'
          ])(
            {
              'Home.useCallback[handleCardClick]': (cardId) => {
                console.log('Card clicked:', cardId);
              },
            }['Home.useCallback[handleCardClick]'],
            []
          );
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'div',
            {
              className: ''
                .concat(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ].home,
                  ' '
                )
                .concat(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ][theme]
                ),
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                        'default'
                      ].container,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchSection$2f$SearchSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          onSearchResults: handleSearchResults,
                          onLoadingChange: setLoading,
                          onErrorChange: setError,
                          currentPage: currentPage,
                          setCurrentPage: setCurrentPage,
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/src/pages/home/Home.tsx',
                          lineNumber: 52,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className:
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                              'default'
                            ].searchResults,
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className:
                                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$Home$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                    'default'
                                  ].resultsBox,
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultsSection$2f$ResultsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'default'
                                  ],
                                  {
                                    results: results,
                                    loading: loading,
                                    error: error,
                                    onCardClick: handleCardClick,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/pages/home/Home.tsx',
                                    lineNumber: 61,
                                    columnNumber: 13,
                                  },
                                  ('TURBOPACK compile-time value', void 0)
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: '[project]/src/pages/home/Home.tsx',
                                lineNumber: 60,
                                columnNumber: 11,
                              },
                              ('TURBOPACK compile-time value', void 0)
                            ),
                            totalPages > 1 &&
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'default'
                                ],
                                {
                                  currentPage: currentPage,
                                  totalPages: totalPages,
                                  onPageChange: handlePageChange,
                                  loading: loading,
                                },
                                void 0,
                                false,
                                {
                                  fileName: '[project]/src/pages/home/Home.tsx',
                                  lineNumber: 69,
                                  columnNumber: 13,
                                },
                                ('TURBOPACK compile-time value', void 0)
                              ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/src/pages/home/Home.tsx',
                          lineNumber: 59,
                          columnNumber: 9,
                        },
                        ('TURBOPACK compile-time value', void 0)
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/pages/home/Home.tsx',
                    lineNumber: 51,
                    columnNumber: 7,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flyout$2f$Flyout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'default'
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/pages/home/Home.tsx',
                    lineNumber: 78,
                    columnNumber: 9,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/pages/home/Home.tsx',
              lineNumber: 50,
              columnNumber: 5,
            },
            ('TURBOPACK compile-time value', void 0)
          );
        };
        _s(Home, 'eLGljTg1SFWNvxTJ0m4ioSp5QL8=', false, function () {
          return [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useTheme'
            ],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'useParams'
            ],
          ];
        });
        _c = Home;
        const __TURBOPACK__default__export__ = Home;
        var _c;
        __turbopack_context__.k.register(_c, 'Home');
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
  },
]);

//# sourceMappingURL=src_aa505663._.js.map
