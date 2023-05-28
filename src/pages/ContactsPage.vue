<template>
  <div class="Contacts">
    <contact-us />
    <location-map />
  </div>
</template>

<script>
import ContactUs from '@/components/ContactUs.vue'
import LocationMap from '@/components/LocationMap.vue'

export default {
  name: 'ContactsPage',
  components: { ContactUs, LocationMap }
}
</script>

<style lang="scss" scoped></style>
