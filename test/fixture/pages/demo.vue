<template>
  <div id="demo">
    <h2>Demo Editor</h2>
    <p>All Extension</p>
    <tui-editor
      :options="options"
      :value="content"
      mode="markdown"
      preview-style="vertical"
      height="400px"
    />
  </div>
</template>

<script>
export default {
  name: 'TestDemo',
  data: () => ({
    content: [
      '| @cols=2:merged |',
      '| --- | --- |',
      '| table | table |',
      '```uml',
      'partition Conductor {',
      '  (*) --> "Climbs on Platform"',
      '  --> === S1 ===',
      '  --> Bows',
      '}',
      '',
      'partition Audience #LightSkyBlue {',
      '  === S1 === --> Applauds',
      '}',
      '',
      'partition Conductor {',
      '  Bows --> === S2 ===',
      '  --> WavesArmes',
      '  Applauds --> === S2 ===',
      '}',
      '',
      'partition Orchestra #CCCCEE {',
      '  WavesArmes --> Introduction',
      '  --> "Play music"',
      '}',
      '```',
      '```chart',
      ',category1,category2',
      'Jan,21,23',
      'Feb,31,17',
      '',
      'type: column',
      'title: Monthly Revenue',
      'x.title: Amount',
      'y.title: Month',
      'y.min: 1',
      'y.max: 40',
      'y.suffix: $',
      '```'
    ].join('\n'),
    options: {
      useCommandShortcut: true,
      usageStatistics: false,
      exts: [
        {
          name: 'chart',
          minWidth: 100,
          maxWidth: 600,
          minHeight: 100,
          maxHeight: 300
        },
        'scrollSync',
        'colorSyntax',
        'uml',
        'mark',
        'table'
      ]
    }
  })
}
</script>
