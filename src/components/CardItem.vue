<template>
  <div class="Card">
    <img class="Image" :src="`data:image/png;base64,${image}`" alt="Фотография еды"/>
    <h2 class="Title">{{ title }}</h2>
    <p class="Description">{{ description }}</p>
    <span class="Price">${{ price }}</span>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    title: {
      type: String,
      require: false
    },
    image: {
      type: String,
      require: false
    },
    description: {
      type: String,
      require: false
    },
    price: {
      type: Number,
      require: false
    }
  },
}
</script>

<style lang="scss" scoped>
.Card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc(100% / 3 - 40px / 3)
}

.Image {
  aspect-ratio: 1;
}

.Title {
}

.Description {
}

.Price {
}
</style>
