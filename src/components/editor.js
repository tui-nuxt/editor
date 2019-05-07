const meta = {
  name: 'TuiEditor'
};

if (process.client) meta.extends = require('@toast-ui/vue-editor').Editor;

export default meta;
