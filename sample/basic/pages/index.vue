<template>
  <div id="index">
    <TuiEditorViewer
        :value="content"
      />

    <h2> Markdown</h2>
    <TuiEditor
      mode="markdown"
      preview-style="vertical"
      height="300px"
    />

    <h2>WYSIWYG</h2>
    <TuiEditor
      mode="wysiwyg"
      height="300px"
    />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => {
    return {
      content: [
        '# 🍞📝 TOAST UI Editor for Nuxt.JS',
        '[**TOAST UI Editor for Vue**](https://github.com/nhn/toast-ui.vue-editor) wrapping module',
        ' \
          ![version](https://img.shields.io/npm/v/@nuxt-tui/editor.svg?style=flat-square) \
          ![License](https://img.shields.io/github/license/nuxt-tui/editor.svg?style=flat-square) \
          ![Code style](https://img.shields.io/badge/code%20style-airbnb-success.svg?style=flat-square) \
        ',
      ].join('\n')
    }
  }
}
</script>
