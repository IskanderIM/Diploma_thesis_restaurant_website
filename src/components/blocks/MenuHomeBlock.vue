<template>
  <section class="menu-home-block flex flex-col">
    <div class="flex">
      <div class="menu-home-block__title basis-4/12">
        <h2>Попробуйте наше меню</h2>
        <p class="body-text">Это раздел вашего меню. Дайте краткое описание вашего раздела</p>
      </div>
      <div class="basis-8/12"></div>    
    </div>    
    <div class="random-dishes basis-full">
      <!-- Первое горячее блюдо -->
      <div v-if="randomDishes.hotDish1" class="dish-block">
        <h3>Горячее блюдо</h3>
        <p>{{ randomDishes.hotDish1.name }}</p>
        <p>{{ randomDishes.hotDish1.description }}</p>
        <p class="price">{{ randomDishes.hotDish1.price }} руб.</p>
      </div>

      <!-- Второе горячее блюдо -->
      <div v-if="randomDishes.hotDish2" class="dish-block">
        <h3>Горячее блюдо</h3>
        <p>{{ randomDishes.hotDish2.name }}</p>
        <p>{{ randomDishes.hotDish2.description }}</p>
        <p class="price">{{ randomDishes.hotDish2.price }} руб.</p>
      </div>
      
      <!-- Закуска -->
      <div v-if="randomDishes.starterDish" class="dish-block">
        <h3>Закуска</h3>
        <p>{{ randomDishes.starterDish.name }}</p>
        <p>{{ randomDishes.starterDish.description }}</p>
        <p class="price">{{ randomDishes.starterDish.price }} руб.</p>
      </div>

      <!-- Выпечка или напиток -->
      <div v-if="randomDishes.pastryDrinkDish" class="dish-block">
        <h3>Выпечка или напиток</h3>
        <p>{{ randomDishes.pastryDrinkDish.name }}</p>
        <p>{{ randomDishes.pastryDrinkDish.description }}</p>
        <p class="price">{{ randomDishes.pastryDrinkDish.price }} руб.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useMenuStore } from '@/stores/menuStore'; // Подключаем Pinia Store

// Инициализация Store
const menuStore = useMenuStore();
const randomDishes = ref({});

// Загружаем данные меню и получаем случайные блюда
onMounted(async () => {
  await menuStore.fetchMenu(); // Загружаем данные меню
  randomDishes.value = menuStore.getRandomDishes(); // Получаем уникальные случайные блюда
});
</script>

<style scoped>
.menu-home-block {
  padding: 20px;
  text-align: center;
}

.random-dishes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.dish-block {
  width: 300px;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  border-radius: 8px;
}

.dish-block h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.dish-block p {
  margin: 5px 0;
}

.price {
  font-weight: bold;
  margin-top: 10px;
}
</style>