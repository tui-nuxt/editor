<template>
  <div id="basic">
    <client-only placeholder="Loading editor...">
      <TuiEditor
        v-model="markdown"
        mode="markdown"
        height="300px"
      />
    </client-only>

    <client-only placeholder="Loading viewer...">
      <TuiEditorViewer :value="markdown" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      markdown: [
        '# Hello World',
        '## Section2',
        '### Section3',
        '**Bold**'
      ].join('\n')
    }
  }
}
</script>

<style>
#basic {
  width: 800px;
  margin: 0 auto;
  padding-top: 30px;
}
</style>
