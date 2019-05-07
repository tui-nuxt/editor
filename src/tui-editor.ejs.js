'use strict';

import Vue from 'vue';

import TuiEditor from './components/editor.vue';
import TuiEditorViewer from './components/editor-viewer.vue';

Vue.component('TuiEditor', TuiEditor);
Vue.component('TuiEditorViewer', TuiEditorViewer);

<% for (const extension of options.extensions) { %>
import('<%=extension%>');
<% } %>
