import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import astro from 'eslint-plugin-astro'
import vueA11y from 'eslint-plugin-vuejs-accessibility'
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // ============================================
  // Global ignores
  // ============================================

  {
    ignores: ['dist/', '.astro/', 'node_modules/']
  },

  // ============================================
  // JavaScript / TypeScript
  // ============================================

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],

    languageOptions: {
      globals: globals.browser
    },

    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    rules: {
      // Variables
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': false,
          'ts-check': false,
          minimumDescriptionLength: 5
        }
      ],

      // Code quality
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],

      // Debugging
      'no-debugger': 'error',
      'no-console': 'warn',

      // Naming
      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: false,
          ignoreImports: false
        }
      ]
    }
  },

  // ============================================
  // Vue
  // ============================================

  {
    files: ['**/*.vue'],

    extends: [
      ...vue.configs['flat/recommended'],
      ...vueA11y.configs['flat/recommended']
    ],

    languageOptions: {
      globals: globals.browser
    },

    rules: {
      // Component naming
      'vue/multi-word-component-names': 'error',

      // Vue best practices
      'vue/no-unused-components': 'error',
      'vue/no-unused-vars': 'error',
      'vue/no-mutating-props': 'error',
      'vue/no-side-effects-in-computed-properties': 'error',

      // Template
      'vue/attributes-order': 'warn',

      // Accessibility
      'vuejs-accessibility/alt-text': 'error',
      'vuejs-accessibility/anchor-has-content': 'error',
      'vuejs-accessibility/button-has-type': 'error',
      'vuejs-accessibility/heading-has-content': 'error',
      'vuejs-accessibility/iframe-has-title': 'error',
      'vuejs-accessibility/interactive-supports-focus': 'error',
      'vuejs-accessibility/label-has-for': 'error',
      'vuejs-accessibility/media-has-caption': 'warn'
    }
  },

  // ============================================
  // Astro
  // ============================================

  {
    files: ['**/*.astro'],

    extends: [...astro.configs['flat/recommended']],

    languageOptions: {
      globals: globals.browser
    }
  },

  // ============================================
  // Prettier
  // ============================================

  prettier
])
