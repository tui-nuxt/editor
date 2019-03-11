'use strict'

const { resolve } = require('path')

const opt = {
  default: {
    style: {
      editor: 'tui-editor/dist/tui-editor.min.css',
      content: 'tui-editor/dist/tui-editor-contents.min.css',
      codemirror: 'codemirror/lib/codemirror.css'
    },
    extensions: []
  },
  fallback: {
    editor: true
  }
}

module.exports = function () {
  const optEditor = (this.options.tui || {}).editor || opt.fallback.editor

  if (optEditor !== false) {
    /* add stylesheet */
    const optStyle = Object.assign({}, opt.default.style, optEditor.style)
    this.options.css.push(optStyle.codemirror)
    this.options.css.push(optStyle.editor)
    this.options.css.push(optStyle.content)

    /* add plugin */
    this.addPlugin({
      mode: 'client',
      src: resolve(__dirname, 'tui-editor.client.js'),
      options: {
        extensions: optEditor.extensions || []
      }
    })
  }
}

module.exports.meta = require('../package')
