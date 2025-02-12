<template>
  <div class="home">
    <div class="hero-section">
      <img src="@/assets/default-product.jpg" alt="Приветственная картинка" class="hero-image" />
      <div class="welcome-text">
        <h1>Добро пожаловать в магазин "Просто купить"!</h1>
        <p>
          Здесь вы найдете широкий ассортимент товаров высокого качества по доступным ценам.
          Мы ценим каждого клиента и стремимся обеспечить лучший сервис.
        </p>
        <router-link to="/products" class="shop-now-button">Перейти к каталогу</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
img {
  display: none;
}
.home {
  text-align: center;
}
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color: #f9f9f9;
}
.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.welcome-text {
  margin-top: 20px;
  max-width: 600px;
  text-align: center;
}
.welcome-text h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}
.welcome-text p {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}
.shop-now-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.shop-now-button:hover {
  background-color: #0056b3;
}
</style>