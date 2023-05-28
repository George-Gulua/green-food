<template>
  <div>
    <iframe
      class="Map"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A330e6b7d6986242b6e38927a6f8d35c2c3634e32a6f0ec1fd8507326af7ea3fb&amp;source=constructor"
    />
  </div>
</template>

<script>
export default {
  name: 'LocationMap'
}
</script>

<style lang="scss" scoped>
.Map {
  width: 100%;
  height: 470px;
  border: 0;
}
</style>
