const meta = {
  name: 'TuiEditorViewer'
};

if (process.client) meta.extends = require('@toast-ui/vue-editor').Viewer;

export default meta;