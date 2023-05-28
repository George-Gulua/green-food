<template>
  <div>
    <h2 class="SectionTitle">«Пакеты»</h2>
    <div class="OrderType">
      <img
        class="Image"
        src="@/assets/images/type-family.png"
        alt="Изображение курьера"
      />
      <div class="Info">
        <h2 class="Title">ПАКЕТ «СЕМЕЙНЫЙ»</h2>
        <span class="Price">От 2800 руб.</span>
        <p class="Text">
          В рамках такой услуги, как Пакет «Семейный» все блюда готовятся на
          заказ и только из самых лучших ингредиентов. Вы можете составить меню
          сами или обратиться к нашим экспертам, чтобы они создали для вас
          что-то по-настоящему особенное. Правильного ответа нет. Все зависит от
          ваших пожеланий по срокам и количеству еды.
        </p>
      </div>
    </div>
    <div class="OrderType">
      <div class="Info">
        <h2 class="Title">ПАКЕТ ДЛЯ ВЕЧЕРИНОК</h2>
        <span class="Price">От 3000 рублей.</span>
        <p class="Text">
          Пакет для вечеринок — опция, которая пользуется самым большим спросом.
          Наше меню составлено только из свежих натуральных ингредиентов и
          включает интересные дополнения, которые придутся по вкусу всем гостям.
        </p>
      </div>
      <img
        class="Image"
        src="@/assets/images/type-party.png"
        alt="Изображение курьера"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderType'
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.OrderType {
  display: flex;
}

.Image {
  width: 50%;
  height: 540px;
}

.Info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: $secondary-color;
}

.SectionTitle {
  text-align: center;
  font-size: 40px;
  margin: 40px 0;
  color: $secondary-color;
}

.Title {
  font-size: 24px;
  width: 40%;
  margin: 0 auto;
}

.Price {
  width: 40%;
  margin: 12px auto;
}

.Text {
  font-size: 14px;
  line-height: 24px;
  width: 40%;
  margin: 0 auto 40px;
}
</style>
