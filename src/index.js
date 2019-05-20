import { resolve } from 'path'

const defaultTui = {
  usagesStatistics: true,
  editor: {
    stylesheet: {
      editor: 'tui-editor/dist/tui-editor.min.css',
      contents: 'tui-editor/dist/tui-editor-contents.min.css',
      codemirror: 'codemirror/lib/codemirror.css',
      codeHighlight: 'highlight.js/styles/github.css',
      colorPicker: 'tui-color-picker/dist/tui-color-picker.min.css'
    },
    extensions: []
  }
}

const builtInExtensions = [
  'chart',
  'colorSyntax'.toLowerCase(),
  'scrollSync'.toLowerCase(),
  'table',
  'uml'
]

module.exports = function setTuiEditor() {
  const tui = this.options.tui || {}
  const editor = merge(defaultTui.editor, tui.editor)
  console.log(editor)
  if (editor !== false) {
    this.options.css.push(
      editor.stylesheet.codemirror,
      editor.stylesheet.editor,
      editor.stylesheet.contents,
      editor.stylesheet.codeHighlight,
      editor.stylesheet.colorPicker
    )

    const extensions = []
    for (const extension of editor.extensions) {
      if (builtInExtensions.includes(extension.toLowerCase())) {
        extensions.push(`tui-editor/dist/tui-editor-ext${extension}`)
      } else {
        extensions.push(extension)
      }
    }

    this.addPlugin({
      mode: 'client',
      src: resolve(__dirname, 'tui-editor.ejs.js'),
      fileName: 'tui/editor.client.js',
      options: {
        extensions
      }
    })
  }
}

module.exports.meta = require('../package.json')

function merge(defaultOption, userOption) {
  if (userOption == null) return defaultOption

  const object = {}

  for (let key of Object.keys(defaultOption)) {
    if (typeof userOption[key] === 'undefined' || userOption[key] == null) {
      object[key] = defaultOption[key] // 기본 값 입력
    } else {
      const value = userOption[key]

      if (value instanceof Array || value instanceof Function) {
        object[key] = value
      } else if (value instanceof Object) {
        object[key] = merge(defaultOption[key], value)
      } else {
        object[key] = value
      }
    }
  }

  return object
}
