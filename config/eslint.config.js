module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
    },
    plugins: ["prettier", "import"],
    rules: {
        "prettier/prettier": "error",
    },
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:prettier/recommended",
    ],
    env: {
        es2020: true,
    },
    overrides: [
        {
            files: ["*.test.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                tsconfigRootDir: ".",
                project: ["./tsconfig.json"],
            },
            plugins: ["@typescript-eslint", "jest"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:import/typescript",
                "plugin:jest/recommended",
            ],
            env: {
                "jest/globals": true,
                node: true,
            },
        },
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                tsconfigRootDir: ".",
                project: ["./tsconfig.json"],
            },
            plugins: ["@typescript-eslint"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:import/typescript",
            ],
        },
        {
            files: ["*.mjs"],
            parserOptions: {
                sourceType: "module",
            },
        },
        {
            files: ["config/**", "scripts/**", "examples/**"],
            env: {
                node: true,
            },
        },
    ],
    ignorePatterns: ["node_modules", "dist"],
};
