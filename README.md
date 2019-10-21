# 🍞📝 TOAST UI Editor for Nuxt.JS
[![npm version badge][BADGE_NPM]][LINK_NPM]
[![npm bundle size badge][BADGE_BUNDLE_SIZE]][LINK_NPM]
[![npm download count badge][BADGE_DOWNLOAD]][LINK_NPM]
[![MIT License badge][BADGE_LICENSE]][LINK_LICENSE]

[![code style badge][BADGE_CODE_STYLE]][LINK_CODE_STYLE]
[![code of conduct][BADGE_CODE_OF_CONDUCT]][LINK_CODE_OF_CONDUCT]
[![Conventional Commits][BADGE_CONVENTION_COMMIT]][LINK_CONVENTION_COMMIT]
[![semantic-release][BADGE_RELEASE]][LINK_RELEASE]

> Easy integration on **TOAST UI Editor** for **Nuxt.JS**

<div style="text-align: center;">
    🚧 This project is still under development and should not be used in a production environment.
    If you want to use tui-editor please refer to the issue 
    <a href="https://github.com/nhn/toast-ui.vue-editor/issues/24#issuecomment-485347493">
        nhn/toast-ui.vue-editor#24
    </a>
</div>

\
[📖 Release Notes](./CHANGELOG.md)


## 🏗 Setup
1. Add `@tui-nuxt/editor` dependency to your project
    ```bash
    $ npm install --save @tui-nuxt/editor
    # or
    $ yarn add @tui-nuxt/editor
    ```
1. Add `@tui-nuxt/editor` to the `modules` section of `nuxt.config.js`
    ```javascript
    // nuxt.config.js
    const config = {
      modules: ['@tui-nuxt/editor']
    }
    ```
1. Add `<TuiEditor>` or `<TuiEditorViewer>` tag for your source
    ```vue
    <template>
      <!-- wysiwyg editor -->
      <TuiEditor mode="wysiwyg" />
      
      <!-- markdown viewer -->
      <TuiEditorViewer :value="message" />
    </template>
    
    <script>
    export default {
      data () {
       return { message: '# Hello World' }
      }
    }
    </script>
    ```

[🔼Top][HASH_TOP]

## ✨ Development
1. Clone this repository
2. Install dependencies (using `yarn install` or `npm install`)
3. Start development server (using `yarn dev` or `npm run dev`)

[🔼Top][HASH_TOP]

## 👥 Contributing
Any contribute is welcome!

[🔼Top][HASH_TOP]

## 🤝 License
This project is [MIT License](./LICENSE)

[🔼Top][HASH_TOP]

<!-- link variables -->
[BADGE_NPM]: https://img.shields.io/npm/v/@tui-nuxt/editor?style=flat-square
[BADGE_BUNDLE_SIZE]: https://img.shields.io/bundlephobia/min/@tui-nuxt/editor?style=flat-square
[BADGE_DOWNLOAD]: https://img.shields.io/npm/dt/@tui-nuxt/editor?style=flat-square
[BADGE_LICENSE]: https://img.shields.io/npm/l/@tui-nuxt/editor?style=flat-square
[BADGE_CODE_STYLE]: https://img.shields.io/badge/codestyle-standard-brightgreen?style=flat-square
[BADGE_CODE_OF_CONDUCT]: https://img.shields.io/badge/Contributor_Covenant-1.4-blueviolet?style=flat-square
[BADGE_CONVENTION_COMMIT]: https://img.shields.io/badge/Conventional%20Commits-1.0.0--beta.4-yellow.svg?style=flat-square
[BADGE_RELEASE]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-sqaure

[LINK_NPM]: https://www.npmjs.com/package/@tui-nuxt/editor
[LINK_LICENSE]: ./LICENSE
[LINK_CODE_STYLE]: https://standardjs.com/
[LINK_CODE_OF_CONDUCT]: ./docs/CODE_OF_CONDUCT.md
[LINK_CONVENTION_COMMIT]: ./docs/CONVENTION_COMMIT.md
[LINK_RELEASE]: https://github.com/semantic-release/semantic-release

[HASH_TOP]: #-toast-ui-editor-for-nuxtjs
