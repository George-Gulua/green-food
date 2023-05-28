<template>
  <div class="WhoWeAre Container">
    <h2 class="Title">Кто мы есть</h2>
    <p class="Text">
      Мы всегда готовы обеспечить свежайшими продуктами и тех, кому нужен
      кейтеринг для праздничного мероприятия, и тех, кто просто хочет заполнить
      холодильник на неделю. Как ведущий сервис доставки еды в г. Москва, мы
      предлагаем непревзойденное обслуживание по доступным ценам. Сделайте заказ
      онлайн, и мы все доставим точно в срок.
    </p>
  </div>
</template>

<script>
export default {
  name: 'WhoWeAre'
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.WhoWeAre {
  text-align: center;
  color: $secondary-color;
}

.Title {
  text-align: center;
  font-size: 40px;
  margin: 40px 0;
}

.Text {
  font-size: 14px;
  line-height: 24px;
  width: 60%;
  margin: 0 auto 40px;
}
</style>
