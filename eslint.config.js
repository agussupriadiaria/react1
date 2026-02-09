import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  // 1. Gunakan rekomendasi dasar Javascript
  js.configs.recommended,

  // 2. Gunakan rekomendasi dasar React
  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // 3. Matikan aturan 'import React' (Penting untuk React 19)
      "react/react-in-jsx-scope": "off",
      // 4. Tambahkan aturan agar memperingatkan jika ada prop-types yang kurang
      "react/prop-types": "warn",
    },
  },
];
