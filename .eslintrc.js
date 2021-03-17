module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-unused-vars': 'warn',
        'no-multiple-empty-lines': 'warn',
        'no-trailing-spaces': 'warn',
        'prefer-destructuring': 'warn',
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-plusplus': 'off',
        'max-len': 'off',
        indent: ['error', 4, { ignoredNodes: ['TemplateLiteral'], SwitchCase: 1 }],
        'padded-blocks': 'off',
        'linebreak-style': 'off',
        'import/no-unresolved': 'off',
        'template-curly-spacing': 'off',
        'import/order': 'off',
        'vue/valid-v-slot': 'off',
        'vue/no-unused-components': 'warn',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
