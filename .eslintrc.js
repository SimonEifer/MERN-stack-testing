module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended", // Integrates Prettier with ESLint
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				tabWidth: 4, // 4 tabs for indentation
				printWidth: 80,
				trailingComma: "es5",
			},
		],
	},
};
