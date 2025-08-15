module.exports = {
  '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/next-server/app-page-turbo.runtime.dev.js',
          () =>
            require('next/dist/compiled/next-server/app-page-turbo.runtime.dev.js')
        );

        module.exports = mod;
      }
    },
  '[project]/src/context/themeContext.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      ThemeContext: () => ThemeContext,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)'
      );
    ('use theme');
    const ThemeContext = /*#__PURE__*/ (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
      'createContext'
    ])(undefined);
  },
  '[project]/src/context/ThemeProvider.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      ThemeProvider: () => ThemeProvider,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/context/themeContext.ts [app-ssr] (ecmascript)'
      );
    ('use client');
    const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useState'
      ])('dark');
      const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
      };
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'ThemeContext'
        ].Provider,
        {
          value: {
            theme,
            toggleTheme,
          },
          'data-testid': 'theme-provider',
          children: children,
        },
        void 0,
        false,
        {
          fileName: '[project]/src/context/ThemeProvider.tsx',
          lineNumber: 18,
          columnNumber: 5,
        },
        ('TURBOPACK compile-time value', void 0)
      );
    };
  },
  '[project]/src/store/charactersSlice.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      addCharacter: () => addCharacter,
      default: () => __TURBOPACK__default__export__,
      removeAllCharacters: () => removeAllCharacters,
      removeCharacter: () => removeCharacter,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>'
      );
    const initialState = {
      selectedCharacters: [],
    };
    const charactersSlice = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      'createSlice'
    ])({
      name: 'characters',
      initialState,
      reducers: {
        addCharacter(state, action) {
          const itemExists = state.selectedCharacters.some(
            (item) => item.id === action.payload.id
          );
          if (!itemExists) {
            state.selectedCharacters.push(action.payload);
          }
        },
        removeCharacter(state, action) {
          state.selectedCharacters = state.selectedCharacters.filter(
            (item) => item.id !== action.payload
          );
        },
        removeAllCharacters(state) {
          state.selectedCharacters = [];
        },
      },
    });
    const { addCharacter, removeCharacter, removeAllCharacters } =
      charactersSlice.actions;
    const __TURBOPACK__default__export__ = charactersSlice.reducer;
  },
  '[project]/src/store/apiSlice.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
      rickAndMortyApi: () => rickAndMortyApi,
      useFetchInitialCharactersQuery: () => useFetchInitialCharactersQuery,
      useGetCharacterQuery: () => useGetCharacterQuery,
      useSearchCharactersQuery: () => useSearchCharactersQuery,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)'
      );
    const baseUrl =
      ('TURBOPACK compile-time value', 'https://rickandmortyapi.com/api');
    const customBaseQuery = async (args, api, extraOptions) => {
      const maxRetries = 1;
      const retryDelay = 500;
      let retryCount = 0;
      while (retryCount <= maxRetries) {
        try {
          await new Promise((resolve) =>
            setTimeout(resolve, retryDelay * retryCount)
          );
          const response = await (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'fetchBaseQuery'
          ])({
            baseUrl,
          })(args, api, extraOptions);
          if (
            response.error &&
            'status' in response.error &&
            typeof response.error.status === 'number' &&
            response.error.status === 429 &&
            retryCount < maxRetries
          ) {
            console.log(
              `Attempt ${retryCount + 1}/${maxRetries + 1} for ${args}, retrying due to 429`
            );
            retryCount++;
            continue;
          }
          return response;
        } catch (error) {
          if (retryCount < maxRetries) {
            console.log(
              `Attempt ${retryCount + 1}/${maxRetries + 1} for ${args}, retrying due to error`
            );
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
                message,
              },
            },
          };
        }
      }
      return {
        error: {
          status: 500,
          data: {
            message: 'Max retries exceeded',
          },
        },
      };
    };
    const rickAndMortyApi = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      'createApi'
    ])({
      reducerPath: 'rickAndMortyApi',
      baseQuery: customBaseQuery,
      tagTypes: ['Character', 'CharacterList'],
      endpoints: (builder) => ({
        fetchInitialCharacters: builder.query({
          query: (page) => `/character?page=${page}`,
          transformResponse: (response) => {
            if (typeof response !== 'object' || response === null)
              throw new Error('Invalid response format');
            const resp = response;
            return {
              status: 'success',
              data: resp.results,
              ...(resp.info && {
                info: resp.info,
              }),
            };
          },
          transformErrorResponse: (baseQueryReturnValue) => {
            const status =
              typeof baseQueryReturnValue.status === 'number'
                ? baseQueryReturnValue.status
                : 500;
            return {
              status: 'error',
              data: [],
              message: getErrorMessage(status),
            };
          },
          providesTags: (_result, _error, page) => [
            {
              type: 'CharacterList',
              id: `PAGE_${page}`,
            },
          ],
        }),
        searchCharacters: builder.query({
          query: ({ query, page }) =>
            query.trim()
              ? `/character/?name=${encodeURIComponent(query.trim())}&page=${page}`
              : `/character?page=${page}`,
          transformResponse: (response) => {
            if (typeof response !== 'object' || response === null)
              throw new Error('Invalid response format');
            const resp = response;
            return {
              status: 'success',
              data: resp.results,
              ...(resp.info && {
                info: resp.info,
              }),
            };
          },
          transformErrorResponse: (baseQueryReturnValue) => {
            const status =
              typeof baseQueryReturnValue.status === 'number'
                ? baseQueryReturnValue.status
                : 500;
            return {
              status: 'error',
              data: [],
              message: getErrorMessage(status),
            };
          },
          providesTags: (_result, _error, { query, page }) => [
            {
              type: 'CharacterList',
              id: `SEARCH_${query}_PAGE_${page}`,
            },
          ],
        }),
        getCharacter: builder.query({
          query: (id) => `/character/${id}`,
          transformResponse: (response) => {
            if (typeof response !== 'object' || response === null)
              throw new Error('Invalid response format');
            const resp = response;
            return {
              status: 'success',
              data: resp,
            };
          },
          transformErrorResponse: (baseQueryReturnValue) => {
            const status =
              typeof baseQueryReturnValue.status === 'number'
                ? baseQueryReturnValue.status
                : 500;
            return {
              status: 'error',
              data: {},
              message: getErrorMessage(status),
            };
          },
          providesTags: (_result, _error, id) => [
            {
              type: 'Character',
              id: `CHAR_${id}`,
            },
          ],
        }),
      }),
    });
    const getErrorMessage = (status) => {
      const messages = {
        400: 'Invalid search parameters',
        404: 'No characters found',
        429: 'Too many requests, retrying once...',
        500: 'Server error',
      };
      return messages[status] || `API error (${status})`;
    };
    const {
      useFetchInitialCharactersQuery,
      useSearchCharactersQuery,
      useGetCharacterQuery,
    } = rickAndMortyApi;
    const __TURBOPACK__default__export__ = rickAndMortyApi;
  },
  '[project]/src/store/store.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      store: () => store,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/store/charactersSlice.ts [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/store/apiSlice.ts [app-ssr] (ecmascript)'
      );
    const store = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
      'configureStore'
    ])({
      reducer: {
        characters:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$charactersSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'default'
          ],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'default'
        ].reducerPath]:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'default'
          ].reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apiSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'default'
          ].middleware
        ),
    });
  },
  '[project]/src/shared/hooks/useTheme.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      useTheme: () => useTheme,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/context/themeContext.ts [app-ssr] (ecmascript)'
      );
    const useTheme = () => {
      const context = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useContext'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'ThemeContext'
        ]
      );
      if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
      }
      return context;
    };
  },
  '[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/action-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/action-async-storage.external.js')
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/work-unit-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/work-unit-async-storage.external.js')
        );

        module.exports = mod;
      }
    },
  '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/server/app-render/work-async-storage.external.js',
          () =>
            require('next/dist/server/app-render/work-async-storage.external.js')
        );

        module.exports = mod;
      }
    },
  '[project]/src/components/ui/NavBar/NavBar.module.scss.module.css [app-ssr] (css module)':
    (__turbopack_context__) => {
      __turbopack_context__.v({
        dark: 'NavBar-module-scss-module__r2fG6a__dark',
        light: 'NavBar-module-scss-module__r2fG6a__light',
        link: 'NavBar-module-scss-module__r2fG6a__link',
        list: 'NavBar-module-scss-module__r2fG6a__list',
        listItem: 'NavBar-module-scss-module__r2fG6a__listItem',
        nav: 'NavBar-module-scss-module__r2fG6a__nav',
      });
    },
  '[project]/src/i18n/routing.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      routing: () => routing,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript) <export default as defineRouting>'
      );
    const routing = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__[
      'defineRouting'
    ])({
      locales: ['en', 'ru'],
      defaultLocale: 'en',
    });
  },
  '[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      Link: () => Link,
      getPathname: () => getPathname,
      redirect: () => redirect,
      usePathname: () => usePathname,
      useRouter: () => useRouter,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/i18n/routing.ts [app-ssr] (ecmascript)'
      );
    const { Link, redirect, usePathname, useRouter, getPathname } = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__[
      'createNavigation'
    ])(
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'routing'
      ]
    );
  },
  '[project]/src/components/ui/NavBar/NavBar.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      NavBar: () => NavBar,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ =
      __turbopack_context__.i(
        '[project]/src/components/ui/NavBar/NavBar.module.scss.module.css [app-ssr] (css module)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/shared/hooks/useTheme.ts [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)'
      );
    ('use client');
    const NavBar = () => {
      const { theme, toggleTheme } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useTheme'
      ])();
      const t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
        'useTranslations'
      ])('NavBar');
      const locale = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useLocale'
      ])();
      const pathname = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'usePathname'
      ])();
      const searchParams = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useSearchParams'
      ])();
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useRouter'
      ])();
      const changeTheme = () => {
        toggleTheme();
      };
      const switchLanguage = () => {
        const queryParams = searchParams
          ? Object.fromEntries(searchParams.entries())
          : {};
        router.replace(
          {
            pathname,
            query: queryParams,
          },
          {
            locale: locale === 'en' ? 'ru' : 'en',
          }
        );
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'nav',
        {
          className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__['default'].nav} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__['default'][theme]}`,
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'ul',
            {
              className:
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
                  'default'
                ].list,
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'li',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
                        'default'
                      ].listItem,
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'Link'
                      ],
                      {
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
                            'default'
                          ].link,
                        href: '/about',
                        children: [' ', ' ', t('AboutLink')],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          '[project]/src/components/ui/NavBar/NavBar.tsx',
                        lineNumber: 35,
                        columnNumber: 17,
                      },
                      ('TURBOPACK compile-time value', void 0)
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/components/ui/NavBar/NavBar.tsx',
                    lineNumber: 34,
                    columnNumber: 13,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'li',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
                        'default'
                      ].listItem,
                    onClick: changeTheme,
                    children:
                      theme === 'light' ? t('darkTheme') : t('lightTheme'),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/components/ui/NavBar/NavBar.tsx',
                    lineNumber: 42,
                    columnNumber: 13,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'li',
                  {
                    className:
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
                        'default'
                      ].listItem,
                    onClick: switchLanguage,
                    children: t('switchLanguage'),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/components/ui/NavBar/NavBar.tsx',
                    lineNumber: 45,
                    columnNumber: 13,
                  },
                  ('TURBOPACK compile-time value', void 0)
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/components/ui/NavBar/NavBar.tsx',
              lineNumber: 33,
              columnNumber: 9,
            },
            ('TURBOPACK compile-time value', void 0)
          ),
        },
        void 0,
        false,
        {
          fileName: '[project]/src/components/ui/NavBar/NavBar.tsx',
          lineNumber: 32,
          columnNumber: 5,
        },
        ('TURBOPACK compile-time value', void 0)
      );
    };
  },
  '[project]/src/components/layout/Header/Header.module.scss.module.css [app-ssr] (css module)':
    (__turbopack_context__) => {
      __turbopack_context__.v({
        active: 'Header-module-scss-module__klcqGG__active',
        dark: 'Header-module-scss-module__klcqGG__dark',
        header: 'Header-module-scss-module__klcqGG__header',
        light: 'Header-module-scss-module__klcqGG__light',
        nav: 'Header-module-scss-module__klcqGG__nav',
        themeToggle: 'Header-module-scss-module__klcqGG__themeToggle',
      });
    },
  '[project]/src/components/layout/Header/Header.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    // import { NavLink } from 'react-router-dom';
    __turbopack_context__.s({
      default: () => __TURBOPACK__default__export__,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/shared/hooks/useTheme.ts [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>'
      );
    // import Link from 'next/link';
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/components/ui/NavBar/NavBar.tsx [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ =
      __turbopack_context__.i(
        '[project]/src/components/layout/Header/Header.module.scss.module.css [app-ssr] (css module)'
      );
    const Header = () => {
      const { theme, toggleTheme } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useTheme'
      ])();
      const t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
        'useTranslations'
      ])('Header');
      const pathname = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'usePathname'
      ])();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'header',
        {
          className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__['default'].header} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__['default'][theme]}`,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'h1',
              {
                children: t('title'),
              },
              void 0,
              false,
              {
                fileName: '[project]/src/components/layout/Header/Header.tsx',
                lineNumber: 18,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'nav',
              {
                className:
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
                    'default'
                  ].nav,
              },
              void 0,
              false,
              {
                fileName: '[project]/src/components/layout/Header/Header.tsx',
                lineNumber: 19,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavBar$2f$NavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'NavBar'
              ],
              {},
              void 0,
              false,
              {
                fileName: '[project]/src/components/layout/Header/Header.tsx',
                lineNumber: 34,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: '[project]/src/components/layout/Header/Header.tsx',
          lineNumber: 17,
          columnNumber: 5,
        },
        ('TURBOPACK compile-time value', void 0)
      );
    };
    const __TURBOPACK__default__export__ = Header;
  },
  '[project]/src/app/ClientProviders.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      default: () => ClientProviders,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/context/ThemeProvider.tsx [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/store/store.ts [app-ssr] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/components/layout/Header/Header.tsx [app-ssr] (ecmascript)'
      );
    ('use client');
    function ClientProviders({ children }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Provider'
        ],
        {
          store:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'store'
            ],
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'ThemeProvider'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'default'
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/app/ClientProviders.tsx',
                    lineNumber: 19,
                    columnNumber: 17,
                  },
                  this
                ),
                children,
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'default'
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/app/ClientProviders.tsx',
                    lineNumber: 21,
                    columnNumber: 17,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/app/ClientProviders.tsx',
              lineNumber: 18,
              columnNumber: 13,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: '[project]/src/app/ClientProviders.tsx',
          lineNumber: 17,
          columnNumber: 9,
        },
        this
      );
    }
  },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__0f7c15d4._.js.map
