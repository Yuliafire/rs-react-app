(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  'chunks/[root-of-the-server]__dc15d093._.js',
  {
    '[externals]/node:buffer [external] (node:buffer, cjs)': (
      __turbopack_context__
    ) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x('node:buffer', () =>
          require('node:buffer')
        );

        module.exports = mod;
      }
    },
    '[externals]/node:async_hooks [external] (node:async_hooks, cjs)': (
      __turbopack_context__
    ) => {
      var { m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x('node:async_hooks', () =>
          require('node:async_hooks')
        );

        module.exports = mod;
      }
    },
    '[project]/src/middleware.ts [middleware-edge] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)'
        );
      const __TURBOPACK__default__export__ =
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__[
          'default'
        ];
    },
  },
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__dc15d093._.js.map
