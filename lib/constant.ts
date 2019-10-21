import { TUINuxtEditorOptions } from './options'

const defaultOptions: TUINuxtEditorOptions = {
  stylesheet: {
    editor: 'tui-editor/dist/tui-editor.min.css',
    contents: 'tui-editor/dist/tui-editor-contents.min.css',
    codemirror: 'codemirror/lib/codemirror.css',
    highlightJs: 'highlight.js/styles/github.css',
    tuiColorPicker: 'tui-color-picker/dist/tui-color-picker.min.css'
  },
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
  ],
  exts: []
}

export {
  defaultOptions
}
