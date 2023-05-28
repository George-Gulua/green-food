<template>
  <div class="Registration Container">
    <h2 class="Title">Регистрация</h2>
    <form class="Form">
      <div class="Input">
        <span class="Sign">Имя</span>
        <input v-model="name" class="Field" type="text" placeholder="Введите ваше имя"/>
      </div>
      <div class="Input">
        <span class="Sign">Логин</span>
        <input v-model="login" class="Field" type="text" placeholder="Введите логин"/>
      </div>
      <div class="Input">
        <span class="Sign">Пароль</span>
        <input v-model="password" class="Field" type="password" placeholder="Введите пароль"/>
      </div>
    </form>
    <button class="Button" @click="handleSubmit">Зарегистрироваться</button>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: 'RegistrationPage',
  data() {
    return {
      name: '',
      login: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      axios.post('https://website.up.railway.app/api/auth/register', {
        name: this.name,
        login: this.login,
        password: this.password
      })

      router.push({path: '/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.Registration {
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
