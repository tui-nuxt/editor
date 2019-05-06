<h1 align="center">🍞📝 TOAST UI Editor for Nuxt.JS</h1>
<p align="center">
    <a href="https://github.com/nhn/toast-ui.vue-editor"><b>TOAST UI Editor for Vue</b></a> wrapping module
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/@nuxt-tui/editor">
        <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@nuxt-tui/editor.svg?style=flat-square">
    </a>
    <a href="./LICENSE">
        <img alt="GitHub" src="https://img.shields.io/github/license/nuxt-tui/editor.svg?style=flat-square">
    </a>
    <img alt="Code style is airbnb" src="https://img.shields.io/badge/code%20style-airbnb-success.svg?style=flat-square" />
    <a href="https://www.codefactor.io/repository/github/nuxt-tui/editor">
      <img src="https://www.codefactor.io/repository/github/nuxt-tui/editor/badge" alt="CodeFactor" />
    </a>
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fnuxt-tui%2Feditor?ref=badge_shield" alt="FOSSA Status">
      <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fnuxt-tui%2Feditor.svg?type=shield"/>
    </a>
</p>

## Install
```bash
$ yarn add @nuxt-tui/editor
# or
$ npm install --save @nuxt-tui/editor
```

## Setup
```javascript
// nuxt.config.js
module.exports = {
  // ...
  modules: ['@nuxt-tui/editor']
  tui: {
    editor: true // or options
  }
}
```

## Usage
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
    content: [
      'Hello World'
    ]
  })
};
</script
```
[![Edit Editor basic sample](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xpyvk5wzwz?fontsize=14&module=%2Fpages%2Findex.vue)

## Options
### stylesheet
 - type: object

Editor custom stylesheet. [read more](https://nuxtjs.org/api/configuration-css)

default:
```javascript
export default {
  tui: {
    editor: {
      stylesheet: {
          editor: 'tui-editor/dist/tui-editor.min.css',
          contents: 'tui-editor/dist/tui-editor-contents.min.css',
          codemirror: 'codemirror/lib/codemirror.css',
          codeHighlight: 'highlight.js/styles/github.css',
          colorPicker: 'tui-color-picker/dist/tui-color-picker.min.css'
        },
        // ...
    }
  }
}
```

#### stylesheet.editor
 - type: string

editor stylesheet

#### stylesheet.contents
 - type: string

viewer stylesheet

#### stylesheet.codemirror
 - type: string

wysiwyg editor style

#### stylesheet.codeHighlight
 - type: string

code block style

#### stylesheet.colorPicker
 - type: string

tui-color-picker style

### extensions
 - type: array
    - item: string

tui-editor extension list

default:
```javascript
export default {
  tui: {
    editor: {
      // ...
      extensions: []
    }
  }
}
```
