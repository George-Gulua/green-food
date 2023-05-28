<template>
  <div class="ContactUs Container">
    <div class="Contacts">
      <h2 class="Title">СВЯЖИТЕСЬ С НАМИ</h2>
      <p class="Text">
        500 Terry Francois Street, 6th Floor. San Francisco, CA 94158
      </p>
      <p class="Text">info@mysite.com</p>
      <p class="Text">123-456-7890</p>
    </div>
    <form-item />
  </div>
</template>

<script>
import FormItem from '@/components/FormItem.vue'

export default {
  name: 'ContactUs',
  components: { FormItem }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.ContactUs {
  display: flex;
  margin: 40px auto;
  gap: 400px;
}

.Contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 50%;
  color: $secondary-color;
}

.Title {
  font-size: 32px;
}

.Text {
  font-size: 14px;
}
</style>
