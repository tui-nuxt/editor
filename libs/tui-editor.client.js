'use strict'

import Vue from 'vue'
import { Editor, Viewer } from '@toast-ui/vue-editor'

Vue.component('tui-editor', Editor)
Vue.component('tui-editor-viewer', Viewer)

<% for (const ext of options.extensions.offical) { %>
import('tui-editor/dist/tui-editor-ext<%=ext%>')
<% } %>

<% for (const ext of options.extensions.local) { %>
import(ext)
<% } %>
