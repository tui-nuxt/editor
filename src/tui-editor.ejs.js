/* eslint-disable no-undef, no-unused-vars */
'use strict'

import Vue from 'vue'
import { Editor, Viewer } from '@toast-ui/vue-editor'

Vue.component('TuiEditor', Editor)
Vue.component('TuiEditorViewer', Viewer)

<% for (const extension of options.extensions) { %>
  import('<%=extension%>')
<% } %>
