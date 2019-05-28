import { resolve } from 'path'

const defaultTui = {
  editor: {
    // @tui-nuxt option
    stylesheet: {
      editor: 'tui-editor/dist/tui-editor.min.css',
      contents: 'tui-editor/dist/tui-editor-contents.min.css',
      codemirror: 'codemirror/lib/codemirror.css',
      codeHighlight: 'highlight.js/styles/github.css',
      colorPicker: 'tui-color-picker/dist/tui-color-picker.min.css'
    },
    exts: [],
    // tui-editor option
    usagesStatistics: true,
    minHeight: '200px',
    useCommandShortcut: true,
    useDefaultHTMLSanitizer: true,
    hideModeSwitch: false,
    toolbarItems: [
      'heading',
      'bold',
      'italic',
      'strike',

      'divider', // |

      'hr',
      'quote',

      'divider', // |

      'ul',
      'ol',
      'task',
      'indent',
      'outdent',

      'divider', // |
      'table',
      'image',
      'link',

      'divider', // |

      'code',
      'codeblock'
    ]
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
  const options = merge(defaultTui.editor, tui.editor)

  if (options !== false) {
    this.options.css.push(
      options.stylesheet.codemirror,
      options.stylesheet.editor,
      options.stylesheet.contents,
      options.stylesheet.codeHighlight,
      options.stylesheet.colorPicker
    )

    const exts = []
    for (const extension of options.exts) {
      if (builtInExtensions.includes(extension.toLowerCase())) {
        exts.push(`tui-editor/dist/tui-editor-ext${extension}`)
      } else {
        exts.push(extension)
      }
    }

    const editorOption = Object.assign(options)
    delete editorOption.stylesheet

    this.addPlugin({
      mode: 'client',
      src: resolve(__dirname, 'tui-editor.ejs.js'),
      fileName: 'tui/editor.client.js',
      options: {
        exts,
        editorOption: JSON.stringify(editorOption)
      }
    })
  }
}

module.exports.meta = require('../package.json')

function merge(defaultOption, userOption) {
  if (userOption == null) return defaultOption

  const resultObj = {}

  for (let key of Object.keys(defaultOption)) {
    if (typeof userOption[key] === 'undefined' || userOption[key] == null) {
      resultObj[key] = defaultOption[key] // set default value
    } else {
      const value = userOption[key]

      if (value instanceof Array || value instanceof Function) {
        resultObj[key] = value
      } else if (value instanceof Object) {
        resultObj[key] = merge(defaultOption[key], value)
      } else {
        resultObj[key] = value
      }
    }
  }

  return resultObj
}
