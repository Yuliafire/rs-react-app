module.exports = {
  '[project]/src/pages/about/About.module.scss.module.css [app-rsc] (css module)':
    (__turbopack_context__) => {
      __turbopack_context__.v({
        about: 'About-module-scss-module__vDsVia__about',
        backLink: 'About-module-scss-module__vDsVia__backLink',
        dark: 'About-module-scss-module__vDsVia__dark',
        light: 'About-module-scss-module__vDsVia__light',
      });
    },
  '[project]/src/context/themeContext.ts [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      ThemeContext: () => ThemeContext,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)'
      );
    ('use theme');
    const ThemeContext = /*#__PURE__*/ (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      'createContext'
    ])(undefined);
  },
  '[project]/src/shared/hooks/useTheme.ts [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    __turbopack_context__.s({
      useTheme: () => useTheme,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/context/themeContext.ts [app-rsc] (ecmascript)'
      );
    const useTheme = () => {
      const context = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'useContext'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'ThemeContext'
        ]
      );
      if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
      }
      return context;
    };
  },
  '[project]/src/pages/about/About.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    // 'use client';
    __turbopack_context__.s({
      About: () => About,
    });
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$about$2f$About$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ =
      __turbopack_context__.i(
        '[project]/src/pages/about/About.module.scss.module.css [app-rsc] (css module)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/shared/hooks/useTheme.ts [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next-intl/dist/esm/development/react-server/useTranslations.js [app-rsc] (ecmascript) <export default as useTranslations>'
      );
    const About = () => {
      const { theme } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'useTheme'
      ])();
      const t = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__[
        'useTranslations'
      ])('About');
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'div',
        {
          className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$about$2f$About$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__['default'].about} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$about$2f$About$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__['default'][theme]}`,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'h2',
              {
                children: t('subtitle'),
              },
              void 0,
              false,
              {
                fileName: '[project]/src/pages/about/About.tsx',
                lineNumber: 14,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'section',
              {
                className:
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$about$2f$About$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
                    'default'
                  ].authorInfo,
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'h3',
                    {
                      children: t('heading'),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/src/pages/about/About.tsx',
                      lineNumber: 17,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'p',
                    {
                      children: t('author'),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/src/pages/about/About.tsx',
                      lineNumber: 18,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'p',
                    {
                      children: [
                        'GitHub:',
                        ' ',
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'a',
                          {
                            href: 'https://github.com/Yuliafire',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            children: '@Yuliafire',
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/src/pages/about/About.tsx',
                            lineNumber: 21,
                            columnNumber: 11,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: '[project]/src/pages/about/About.tsx',
                      lineNumber: 19,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: '[project]/src/pages/about/About.tsx',
                lineNumber: 16,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'section',
              {
                className:
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$about$2f$About$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
                    'default'
                  ].courseInfo,
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'h3',
                    {
                      children: t('courseInfo'),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/src/pages/about/About.tsx',
                      lineNumber: 32,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'p',
                    {
                      children: [
                        t('description'),
                        ' ',
                        ' ',
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            'default'
                          ],
                          {
                            href: 'https://rs.school/courses/reactjs',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            children: t('courseName'),
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/src/pages/about/About.tsx',
                            lineNumber: 35,
                            columnNumber: 11,
                          },
                          ('TURBOPACK compile-time value', void 0)
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: '[project]/src/pages/about/About.tsx',
                      lineNumber: 33,
                      columnNumber: 9,
                    },
                    ('TURBOPACK compile-time value', void 0)
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: '[project]/src/pages/about/About.tsx',
                lineNumber: 31,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'default'
              ],
              {
                href: '/',
                className:
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$about$2f$About$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__[
                    'default'
                  ].backLink,
                role: 'link',
                children: ['← ', t('back'), ' '],
              },
              void 0,
              true,
              {
                fileName: '[project]/src/pages/about/About.tsx',
                lineNumber: 45,
                columnNumber: 7,
              },
              ('TURBOPACK compile-time value', void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: '[project]/src/pages/about/About.tsx',
          lineNumber: 13,
          columnNumber: 5,
        },
        ('TURBOPACK compile-time value', void 0)
      );
    }; // 'use client';
    // import Link from 'next/link';
    // import { useTranslations } from 'next-intl';
    // import { useTheme } from '../../shared/hooks/useTheme';
    // import styles from './About.module.scss';
    // const About = () => {
    //   const { theme } = useTheme();
    //   const t = useTranslations('About');
    //   return (
    //     <div className={`${styles.about} ${styles[theme]}`}>
    //       <h2>{t('title')}</h2>
    //       <section>
    //         <h3>{t('subtitle')}</h3>
    //         <p>{t('description')} <Link href="https://rs.school/react/" target="_blank">{t('link')} {t('courseName')}</Link>.</p>
    //       </section>
    //       <section>
    //         <h3>{t('heading')}</h3>
    //         <p>{t('author')}.</p>
    //       </section>
    //       <Link href="/" className={styles.backLink}>
    //         {t('back')}
    //       </Link>
    //     </div>
    //   );
    // };
    // export default About;
  },
  '[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    /* __next_internal_action_entry_do_not_use__ [{"001f1a39636da38b4259471b19104beb78af53a494":"default"},"",""] */ __turbopack_context__.s(
      {
        default: () => AboutPage,
      }
    );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$about$2f$About$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/src/pages/about/About.tsx [app-rsc] (ecmascript)'
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)'
      );
    async function AboutPage() {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$about$2f$About$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'About'
        ],
        {},
        void 0,
        false,
        {
          fileName: '[project]/src/app/[locale]/page.tsx',
          lineNumber: 6,
          columnNumber: 12,
        },
        this
      );
    }
    (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      'ensureServerEntryExports'
    ])([AboutPage]);
    (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      'registerServerReference'
    ])(AboutPage, '001f1a39636da38b4259471b19104beb78af53a494', null);
  },
  '[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({});
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)'
        );
    },
  '[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({});
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ =
        __turbopack_context__.i(
          '[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>'
        );
    },
  '[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({
        '001f1a39636da38b4259471b19104beb78af53a494': () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'default'
          ],
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ =
        __turbopack_context__.i(
          '[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>'
        );
    },
  '[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      __turbopack_context__.s({
        '001f1a39636da38b4259471b19104beb78af53a494': () =>
          __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__[
            '001f1a39636da38b4259471b19104beb78af53a494'
          ],
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ =
        __turbopack_context__.i(
          '[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ =
        __turbopack_context__.i(
          '[project]/.next-internal/server/app/[locale]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>'
        );
    },
  '[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)':
    (__turbopack_context__) => {
      __turbopack_context__.n(
        __turbopack_context__.i(
          '[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)'
        )
      );
    },
  '[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)':
    (__turbopack_context__) => {
      __turbopack_context__.n(
        __turbopack_context__.i(
          '[project]/src/app/layout.tsx [app-rsc] (ecmascript)'
        )
      );
    },
  '[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)':
    (__turbopack_context__) => {
      __turbopack_context__.n(
        __turbopack_context__.i(
          '[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)'
        )
      );
    },
  '[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)':
    (__turbopack_context__) => {
      __turbopack_context__.n(
        __turbopack_context__.i(
          '[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)'
        )
      );
    },
  '[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)':
    (__turbopack_context__) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/shared/lib/no-fallback-error.external.js',
          () => require('next/dist/shared/lib/no-fallback-error.external.js')
        );

        module.exports = mod;
      }
    },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__c5f53085._.js.map
