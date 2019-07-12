<h1 align="center">🍞📝 TOAST UI Editor for Nuxt.JS</h1>
<p align="center">
  <a href="https://github.com/nhn/toast-ui.vue-editor"><b>TOAST UI Editor for Vue</b></a> wrapping module
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@tui-nuxt/editor">
      <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@tui-nuxt/editor.svg?style=flat-square">
  </a>
  <a href="./LICENSE">
      <img alt="GitHub" src="https://img.shields.io/github/license/tui-nuxt/editor.svg?style=flat-square">
  </a>
  <img alt="Code style is airbnb" src="https://img.shields.io/badge/code%20style-airbnb-success.svg?style=flat-square" />
  <a href="https://lgtm.com/projects/g/tui-nuxt/editor/alerts/">
    <img src="https://img.shields.io/lgtm/grade/javascript/g/tui-nuxt/editor.svg?style=flat-square" />
  </a>
</p>
<p align="center">
  <a href="https://www.codefactor.io/repository/github/tui-nuxt/editor">
    <img src="https://www.codefactor.io/repository/github/tui-nuxt/editor/badge" alt="CodeFactor" />
  </a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fnuxt-tui%2Feditor?ref=badge_shield" alt="FOSSA Status">
    <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fnuxt-tui%2Feditor.svg?type=shield"/>
  </a>
</p>
<p align="center">
  <b>
    ⚠️This project is still under development and should not be used in a production environment. <br />
    If you want to use tui-editor please refer to the issue
    <a href="https://github.com/nhn/toast-ui.vue-editor/issues/24#issuecomment-485347493">
      nhn/toast-ui.vue-editor#24
    </a>
    ⚠️
  </b>
</p>

## 🚩Table of Contents
- [🔰Getting Started](#getting-started)
  - [💿Installation](#installation)
  - [🔌Configuration](#configuration)
  - [👋Hello world!](#hello-world)
- [✒️Editor](#️editor)
- [📃Viewer](#viewer)
- [✅Options](#options)

## 🔰Getting Started
### 💿Installation
yarn:
```bash
$ yarn add @tui-nuxt/editor
```

npm:
```bash
$ npm install --save @tui-nuxt/editor
```

### 🔌Configuration
```javascript
// nuxt.config.js
module.exports = {
  // ...
  modules: ['@tui-nuxt/editor'],
  tui: {
    editor: {}
  }
};
```

### 👋Hello world!
```html
<template>
  <div id="top">
    <!-- Text Editor -->
    <TuiEditor
      mode="markdown"
      preview-style="vertical"
      height="300px"
    />

    <!-- Markdown Viewer -->
    <TuiEditorViewer
      :value="content"
    />
  </div>
</template>

<script>
export default {
  data: ({
    content: 'Hello World!'
  })
};
</script>
```

[![TOAST UI Editor for Nuxt.JS basic demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/tui-nuxt/editor/tree/master/sample/basic?fontsize=14&module=%2Fpages%2Findex.vue)

## ✒️Editor
```html
<template>
  <TuiEditor />
</template>
```
See the [toast-ui.vue-editor document](https://github.com/nhn/toast-ui.vue-editor#props) for options used in the ```<TuiEditor />```.

## 📃Viewer
```html
<template>
  <TuiEditorViwer />
</template>
```
See the [toast-ui.vue-editor document](https://github.com/nhn/toast-ui.vue-editor#props-1) for options used in the ```<TuiEditorViewer />```.

## 🔠Internationalization
```@tui-nuxt/editor``` detects the ```nuxt-i18n``` module and automatically sets it to the language of the current page.
However, if you do not use nuxt-i18n or want to use a different language, please refer to [options.language](#language)

## ✅Options

### tui.editor
 - type: ```boolean``` or ```object```
 - default: ```{}```

The root configuration object for ```@tui-nuxt/editor```. If false, module is disabled.

```javascript
// nuxt.config.js
module.exports = {
  tui: {
    editor: false, // disable module
    // or
    editor: {}
  }
}
```

#### language
 - type: String
 - default:
   - enable ```nuxt-i18n```: current language
   - other: ```en_US```

editor language ISO code. See more [support language](https://github.com/nhn/tui.editor/tree/master/src/js/langs)

#### exts
 - type: array
 - default: ```[]```

Declares extension of tui-editor. builit in extension is ```chart```, ```colorSyntax```, ```scrollSync```, ```table```, ```uml```
```javascript
{
  tui: {
    editor: {
      exts: []
    }
  }
}
```

#### stylesheet
  - type: object

Custom stylesheet path. for more information, see [Nuxt.js css property](https://nuxtjs.org/api/configuration-css)

default:
```javascript
  {
    tui: {
      editor: {
        stylesheet: {
          editor: 'tui-editor/dist/tui-editor.min.css',
          contents: 'tui-editor/dist/tui-editor-contents.min.css',
          codemirror: 'codemirror/lib/codemirror.css',
          codeHighlight: 'highlight.js/styles/github.css',
          colorPicker: 'tui-color-picker/dist/tui-color-picker.min.css'
        }
      }
    }
  }
  ```

##### stylesheet.editor
 - type: string
 - default: ```tui-editor/dist/tui-editor.min.css```

```<TuiEditor />``` stylesheet path


##### stylesheet.contents
  - type: string
  - default: ```tui-editor/dist/tui-editor-contents.min.css```

```<TuiEditorViewer />``` & wiziwig mode preview stylesheet path


##### stylesheet.codemirror
  - type: string
  - default: ```codemirror/lib/codemirror.css```

Markdown mode preview stylesheet path

##### stylesheet.codehightlight
  - type: string
  - default: ```highlight.js/styles/github.css```

Codeblock's code highlight stylesheet path

##### stylesheet.colorPicker
  - type: string
  - default: ```tui-color-picker/dist/tui-color-picker.min.css```

```tui-color-picker``` stylesheet path
