<template>
  <div class="orders">
    <h2>Оформленные заказы</h2>
    <div v-if="orders.length === 0" class="empty-orders">
      У вас пока нет оформленных заказов.
    </div>
    <div v-else>
      <div v-for="(order, index) in orders" :key="index" class="order-item">
        <h3>Заказ #{{ index + 1 }}</h3>
        <ul>
          <li v-for="item in order.items" :key="item.id" class="order-product">
            <span>{{ item.name }} ({{ item.quantity }} шт.) - {{ item.price * item.quantity }} ₽</span>
          </li>
        </ul>
        <p><strong>Итого: {{ order.total }} ₽</strong></p>
      </div>
    </div>
    <router-link to="/main">Назад</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.state.orders;
    }
  },
  methods: {
    goBack() {
      this.$router.push('/main');
    }
  }
};
</script>

<style scoped>
.orders {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
}

.back-button:hover {
  background-color: #0056b3;
}

.empty-orders {
  font-size: 18px;
  color: gray;
  text-align: center;
}

.order-item {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
}

.order-product {
  list-style-type: none;
  margin: 5px 0;
}

.order-product span {
  display: block;
  font-size: 14px;
}
</style>