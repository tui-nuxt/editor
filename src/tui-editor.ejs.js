/* eslint-disable no-undef, no-unused-vars */
'use strict'

import Vue from 'vue'
import { Editor, Viewer } from '@toast-ui/vue-editor'

Vue.component('TuiEditor', {
  extends: Editor,
  computed: {
    editorOptions: function() {
      let defaultOption = JSON.parse('<%=options.editorOption%>')

      if (this.$metaInfo != null) {
        const defaultLanguage = {
          language: this.$metaInfo.meta.find((e) => e.hid === 'og:locale').content || 'en_US'
        }

        defaultOption = Object.assign({}, defaultLanguage, defaultOption)
      }

      const options = Object.assign({}, defaultOption, this.options)
      options.initialValue = this.value
      options.initialEditType = this.mode
      options.height = this.height
      options.previewStyle = this.previewStyle

      return options
    }
  }
})
Vue.component('TuiEditorViewer', Viewer)

<% for (const extension of options.exts) { %>
  import('<%=extension%>')
<% } %>
