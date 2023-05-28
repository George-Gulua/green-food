<template>
  <div class="Menu Container">
    <h2 class="Title">Lunch Menu</h2>
    <h3 class="Subtitle">Served daily between 12-5pm</h3>
    <h2 class="SectionTitle">STARTERS</h2>
    <p class="Text">
      This is a section of your menu, customize it any way you want.
    </p>
    <div class="CardList">
      <card-item
          v-for="product in products"
          :key="product.productId"
          :title="product.title"
          :description="product.description"
          :price="product.price"
          :image="product.image"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardItem from "@/components/CardItem.vue";

export default {
  name: 'MenuPage',
  components: {CardItem},
  data() {
    return {
      products: null
    }
  },
  async mounted() {
    const {data} = await axios.get('https://website.up.railway.app/products')
    console.log(data)
    this.products = data
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.Menu {
  color: $secondary-color;
}

.Title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
}

.Subtitle {
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 60px;
}

.SectionTitle {
  width: 20%;
  margin: 0 auto;
  text-align: center;
  color: $section-title;
  border-bottom: 1px solid $section-title;
  padding-bottom: 12px;
}

.Text {
  text-align: center;
  margin: 40px 0;
}

.CardList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
