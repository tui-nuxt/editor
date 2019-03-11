<template>
  <div id="index">
    <ul>
      <li v-for="nav in navs" :key="nav.to">
        <nuxt-link :to="nav.to">
          {{ nav.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TestIndex',
  data: () => ({
    navs: [
      { to: '/demo', name: 'Demo' },
      { to: '/basic', name: 'Basic' },
      { to: '/viewer/basic', name: 'Viewer Basic' },
      { to: '/extensions/scroll-sync', name: 'Scroll Sync' }
    ]
  })
}
</script>
