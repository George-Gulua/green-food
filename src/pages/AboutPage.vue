<template>
  <div class="About">
    <who-we-are />
    <img
      class="Image"
      src="@/assets/images/who-we-are.png"
      alt="Изображение еды"
      height="660"
    />
  </div>
</template>

<script>
import WhoWeAre from '@/components/WhoWeAre.vue'

export default {
  name: 'AboutPage',
  components: { WhoWeAre }
}
</script>

<style lang="scss" scoped>
.Image {
  width: 100%;
}
</style>
