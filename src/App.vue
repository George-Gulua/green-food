<template>
  <div id="app">
    <the-header/>
    <router-view/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader/index.vue'
import TheFooter from './components/TheFooter/index.vue'

export default {
  name: 'App',
  components: {TheHeader, TheFooter}
}
</script>

<style lang="scss">
@import 'assets/scss/globals.scss';
</style>
