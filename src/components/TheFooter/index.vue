<template>
  <div class="Footer Container">
    <h1 class="Logotype"><a href="/">GreenFood</a></h1>
    <p>info@mysite.com</p>
    <p>© GreenFood, 2023</p>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.Footer {
  padding: 40px 0;
}

.Container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color: $secondary-color;
}
</style>
