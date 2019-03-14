'use strict'

import Vue from 'vue'
import { Editor, Viewer } from '@toast-ui/vue-editor'

Vue.component('tui-editor', Editor)
Vue.component('tui-editor-viewer', Viewer)


<% for (const ext of options.extensions) { %>
import('<%=ext%>')
<% } %>
