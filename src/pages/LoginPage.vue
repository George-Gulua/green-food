<template>
  <div class="Login Container">
    <h2 class="Title">Вход</h2>
    <form class="Form">
      <div class="Input">
        <span class="Sign">Логин</span>
        <input v-model="login" class="Field" type="text" placeholder="Введите логин"/>
      </div>
      <div class="Input">
        <span class="Sign">Пароль</span>
        <input v-model="password" class="Field" type="password" placeholder="Введите пароль"/>
      </div>
    </form>
    <button @click="handleSubmit" class="Button">Войти</button>
  </div>
</template>

<script>


import axios from "axios";
import router from "@/router";

export default {
  name: 'LoginPage',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      const {data} = await axios.post('https://website.up.railway.app/api/auth/authenticate', {
        login: this.login,
        password: this.password
      })

      console.log(data.token)

      localStorage.setItem('token', data.token)
      await this.$store.dispatch('isAuth', localStorage.getItem('token'))
      await router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.Login {
  width: 30%;
}

.Title {
  text-align: center;
  color: $secondary-color;
  margin-bottom: 40px;
}

.Input {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: $secondary-color;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
}

.Sign {
  padding-left: 4px;
}

.Field {
  font-size: 16px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid $secondary-color;
  color: $secondary-color;
  padding: 0 4px 12px;
}

.Button {
  font-size: 18px;
  border: none;
  width: 100%;
  padding: 12px 20px;
  cursor: pointer;
}
</style>
