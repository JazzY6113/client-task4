<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-section">
        <h3>О нас</h3>
        <p>
          Добро пожаловать на наш сайт «Просто купить»!
          Мы предоставляем высококачественные товары по доступным ценам.
          Наша команда работает круглосуточно, чтобы обеспечить вам лучший сервис.
        </p>
      </div>
      <div class="copyright">
        <p>&copy; 2025 "Просто купить". Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
  border-radius: 15px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-section {
  flex: 1;
  min-width: 300px;
  margin-bottom: 20px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.contact-list,
.social-links {
  list-style: none;
  padding: 0;
}

.contact-list li {
  margin-bottom: 5px;
}

.social-links li {
  margin-bottom: 10px;
}

.social-links a {
  color: white;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}

.copyright {
  clear: both;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>