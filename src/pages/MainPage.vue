<template>
  <div class="Main">
    <img
      class="Image"
      src="@/assets/images/main-bg.png"
      alt="Изображение еды"
      height="660"
    />
    <about-company />
    <img
      class="Image"
      src="@/assets/images/delivery.png"
      alt="Изображение доставки"
      height="660"
    />
    <order-type />
    <contact-us />
    <location-map />
  </div>
</template>

<script>
import OrderType from '@/components/OrderType.vue'
import AboutCompany from '@/components/AboutCompany.vue'
import ContactUs from '@/components/ContactUs.vue'
import LocationMap from '@/components/LocationMap.vue'

export default {
  name: 'MainPage',
  components: { OrderType, AboutCompany, ContactUs, LocationMap }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.Image {
  width: 100%;
}
</style>
