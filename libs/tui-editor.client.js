'use strict'

import Vue from 'vue'
import { Editor, Viewer } from '@toast-ui/vue-editor'

Vue.component('tui-editor', Editor)
Vue.component('tui-editor-viewer', Viewer)

<% for (extension of options.extensions) { %>
require('tui-editor/dist/tui-editor-ext<%= extension %>')
<% } %>
