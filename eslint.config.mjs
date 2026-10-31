import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  // Ignorar pastas de build e dependências
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
  },

  // Configurações recomendadas do JS e TypeScript
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierPlugin,

  // Regras personalizadas para o NestJS
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);