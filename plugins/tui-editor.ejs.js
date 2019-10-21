import Vue from 'vue'
import { Editor, Viewer } from '@toast-ui/vue-editor'

Vue.component(Editor.name, {
  extends: Editor,
  computed: {
    editorOptions: function () {
      const options = Object.assign({}, JSON.parse('<%=options.options%>'), this.options)
      options.initialValue = this.value
      options.initialEditType = this.mode
      options.height = this.height
      options.previewStyle = this.previewStyle

      return options
    }
  }
})

Vue.component(Viewer.name, Viewer)

<% for (const extension of options.exts) { %>
import('<%=extension%>')
<% } %>
