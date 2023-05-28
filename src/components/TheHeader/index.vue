<template>
  <div class="Header">
    <div class="Container">
      <h1 class="Logotype"><a href="/">GreenFood</a></h1>
      <nav class="Nav">
        <router-link class="Link" to="/">Главная</router-link>
        <router-link class="Link" to="/about">О нас</router-link>
        <router-link class="Link" to="/contacts">Связаться с нами</router-link>
        <router-link class="Link" to="/menu">Меню</router-link>
        <router-link v-if="!isAuth" class="Link" to="/registration">Зарегистрироваться</router-link>
        <hr/>
        <router-link v-if="!isAuth" class="Link" to="/login">Войти</router-link>
        <div @click="handleSubmit" v-if="isAuth" class="Link">Выйти</div>
      </nav>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: 'NavMenu',
  methods: {
    handleSubmit() {
      localStorage.removeItem('token')
      this.$store.dispatch('isAuth', null)
    }
  },
  computed: {
    ...mapGetters(['isAuth'])
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.Header {
  padding: 20px 0;
}

.Container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.Logotype {
  color: $secondary-color;
}

.Nav {
  display: flex;
  gap: 20px;
}

.Link {
  color: $secondary-color;
  cursor: pointer;

  &:hover {
    color: $section-title;
    transition: 0.3s;
  }
}
</style>
