<template>
  <div class="login">
    <h1>Вход</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Войти</button><br>
    </form>
    <router-link to="/main">Назад</router-link>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    login() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === this.username && user.password === this.password) {
        alert(`Добро пожаловать, ${this.username}!`);
        this.error = null;
        this.$router.push('/main');
      } else {
        this.error = 'Неверное имя пользователя или пароль.';
      }
    },
  },
};
</script>

<style scoped>
form {
  padding: 50px;
}
.login {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
.login input, button {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>