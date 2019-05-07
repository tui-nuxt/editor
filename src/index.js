import { resolve } from 'path';

const defaultOption = {
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
};

const builtInExtensions = [
  'chart',
  'colorSyntax'.toLowerCase(),
  'scrollSync'.toLowerCase(),
  'table',
  'uml'
];

module.exports = function setTuiEditor() {
  const options = this.options.tui || {};
  const editor = options.editor || defaultOption.editor;

  if (editor !== false) {
    const style = { ...{}, ...defaultOption.editor.stylesheet, ...editor.stylesheet };

    this.options.css.push(
      style.codemirror,
      style.editor,
      style.contents,
      style.codeHighlight,
      style.colorPicker
    );

    const extensions = editor.extensions || defaultOption.editor.extensions;
    const extensionPaths = [];

    for (const extension of extensions) {
      if (builtInExtensions.includes(extension.toLowerCase())) {
        extensionPaths.push(`tui-editor/dist/tui-editor-ext${extension}`);
      } else {
        extensionPaths.push(extension);
      }
    }

    this.addPlugin({
      src: resolve(__dirname, 'components/editor.js'),
      fileName: 'tui/components/editor.js'
    });

    this.addPlugin({
      src: resolve(__dirname, 'components/editor-viewer.js'),
      fileName: 'tui/components/editor-viewer.js'
    });

    this.addPlugin({
      src: resolve(__dirname, 'tui-editor.ejs.js'),
      fileName: 'tui/editor.js',
      options: {
        extensions: extensionPaths
      }
    });
  }
};

module.exports.meta = require('../package.json');