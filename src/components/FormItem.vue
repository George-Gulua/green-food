<template>
  <form class="Form">
    <div class="InputList">
      <div class="Input">
        <span class="Sign">Имя *</span>
        <input v-model="name" class="Field" type="text" placeholder="Введите свое имя"/>
      </div>
      <div class="Input">
        <span class="Sign">Эл. Почта *</span>
        <input v-model="mail" class="Field" type="text" placeholder="Добавьте эл. почту"/>
      </div>
    </div>
    <div class="InputList">
      <div class="Input">
        <span class="Sign">Телефон</span>
        <input
            v-model="phone"
            class="Field"
            type="text"
            placeholder="Добавьте номер телефона"
        />
      </div>
      <div class="Input">
        <span class="Sign">Адрес</span>
        <input v-model="address" class="Field" type="text" placeholder="Добавьте адрес"/>
      </div>
    </div>
    <div class="Input">
      <span class="Sign">Тема</span>
      <input v-model="theme" class="Field" type="text" placeholder="Укажите тему"/>
    </div>
    <div class="Input">
      <span class="Sign">Сообщение</span>
      <input
          v-model="message"
          class="Field Message"
          type="text"
          placeholder="Добавьте сообщение"
      />
    </div>
    <button class="Button">Отправить</button>
  </form>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: 'FormItem',
  data() {
    return {
      name: '',
      mail: '',
      phone: '',
      address: '',
      theme: '',
      message: ''
    }
  },
  methods: {
    handleSubmit() {
      axios.post('https://website.up.railway.app/api/auth/register', {
        name: this.name,
        mail: this.mail,
        phone: this.phone,
        address: this.address,
        theme: this.theme,
        message: this.message
      })
      router.push({path: '/login'})
    }
  }

}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.Form {
  width: 50%;
}

.InputList {
  display: flex;
  gap: 12px;
  width: 100%;
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

.Message {
  padding-bottom: 60px;
}

.Button {
  font-size: 18px;
  border: none;
  width: 100%;
  padding: 12px 20px;
  cursor: pointer;
}
</style>
