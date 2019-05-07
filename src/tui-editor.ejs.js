'use strict';

import Vue from 'vue';

import TuiEditor from './components/editor';
import TuiEditorViewer from './components/editor-viewer';

Vue.component('TuiEditor', TuiEditor);
Vue.component('TuiEditorViewer', TuiEditorViewer);

<% for (const extension of options.extensions) { %>
import('<%=extension%>');
<% } %>
