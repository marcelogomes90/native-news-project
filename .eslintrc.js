module.exports = {
  extends: [
    "expo",
    "universe",
    "universe/native",
    "universe/web",
    "universe/shared/typescript-analysis",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts", "*.js", "*.jsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  plugins: ["react-hooks"],
  rules: {
    "import/order": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  env: {
    node: true,
  },
};
