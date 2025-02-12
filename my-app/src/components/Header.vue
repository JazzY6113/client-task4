<template>
  <nav class="navbar">
    <a href="">Просто купить</a>
    <ul class="nav-list">
      <li><router-link to="/main">Главная</router-link></li>
      <li><router-link to="/products">Каталог товаров</router-link></li>
      <li><router-link to="/signup">Регистрация</router-link></li>
      <li><router-link to="/login">Вход в систему</router-link></li>
      <li>
        <router-link to="/cart">
          Корзина
          <span v-if="cartItemCount" class="cart-count">{{ cartItemCount }}</span>
        </router-link>
      </li>
      <li><router-link to="/orders">Оформленные заказы</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    cartItemCount() {
      return this.$store.state.cart.reduce((total, item) => total + item.quantity, 0);
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
  border-radius: 15px;
}

.nav-list {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

.nav-list li {
  color: white;
  text-decoration: none;
  padding: 10px;
  position: relative;
}

.nav-list li a {
  color: white;
  text-decoration: none;
}

.nav-list li a:hover {
  color: wheat;
}

.cart-count {
  background-color: red;
  color: white;
  border-radius: 10%;
  padding: 4px 8px;
  font-size: 12px;
  min-width: 10px;
  text-align: center;
  position: absolute;
  right: -20px;
}
.navbar > a {
  text-decoration: none;
  color: white;
  font-size: 24pt;
}
</style>