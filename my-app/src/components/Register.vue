<template>
  <div class="register">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <hr />
      <button type="submit">Зарегистрироваться</button>
      <router-link to="/main">Назад</router-link>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    register() {
      if (this.username && this.password) {
        const user = { username: this.username, password: this.password };
        localStorage.setItem('user', JSON.stringify(user));

        this.error = null;
        alert(`Пользователь ${this.username} зарегистрирован!`);
        this.username = '';
        this.password = '';
        this.$router.push('/login');
      } else {
        this.error = 'Пожалуйста, заполните все поля.';
      }
    }
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
}
form{
  padding: 50px;
}
form div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>