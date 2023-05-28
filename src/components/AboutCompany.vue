<template>
  <div class="About Container">
    <h2 class="Title">«GREENFOOD»</h2>
    <p class="Text">
      Всё началось в 2000 году, когда директор нашей компании заметил, что у
      жителей г. Москва есть незакрытая потребность, и с этим определенно нужно
      было что-то делать. Компания «GreenFood» появилась, чтобы решить эту
      задачу инновационным способом, ставя интересы людей во главу угла.
    </p>
    <p class="Text">
      Мало кто мог ожидать в тот момент, что наш(а, е) Доставка еды завоюет
      доверие стольких клиентов. Усердный труд, преданность делу и
      профессионализм каждого члена команды позволили нашему бизнесу стать
      успешным. Но мы не собираемся почивать на лаврах. Наша компания будет и
      дальше расширять ассортимент предложений и повышать качество обслуживания.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutCompany'
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.About {
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
