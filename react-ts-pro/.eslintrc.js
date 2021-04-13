const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = {
    env: {
        'browser': true,
        'es6': true
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            'jsx': true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks',
        'typescript',
        '@typescript-eslint'
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        "no-trailing-spaces": 1,
        'quotes': [2, 'single'],
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'no-console': 1,
        'no-alert': 1,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'curly': [2, 'all'],
        'no-catch-shadow': 0,
        'no-label-var': 2,
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'lines-around-comment': [2, {
            'beforeBlockComment': true
        }],
        'newline-after-var': 0,
        'no-lonely-if': 0,
        'no-multiple-empty-lines': [2, {
            'max': 2
        }],
        'arrow-parens': 2,
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
    },
    overrides: [
        {
            files: ['**/*.ts'],
            plugins: ['@typescript-eslint'],
            rules: {
                ...tsPlugin.configs['eslint-recommended'].overrides.rules,
                ...tsPlugin.configs.recommended.rules,
                'no-redeclare': 'off',
                '@typescript-eslint/ban-types': 'off',
                '@typescript-eslint/require-await': 'off',
            },
        },
    ],
    settings: {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,// default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            { "property": "freeze", "object": "Object" },
            { "property": "myFavoriteWrapper" }
        ],
        "linkComponents": [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            { "name": "Link", "linkAttribute": "to" }
        ]
    }
};
