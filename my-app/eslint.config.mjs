import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve the current file and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extends the base ESLint configuration for Next.js with TypeScript support
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Disable the react/no-unescaped-entities rule
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disables the specific rule
    },
  },
];

export default eslintConfig;
