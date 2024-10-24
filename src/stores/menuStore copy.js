import { defineStore } from 'pinia';
import axios from 'axios';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: [], // Здесь будут храниться данные меню
  }),

  actions: {
    async fetchMenu() {
      try {
        const response = await axios.get('http://localhost:3000/api/menu');
        this.menu = response.data;
      } catch (error) {
        console.error('Ошибка загрузки меню:', error);
      }
    },

    // Получаем уникальные случайные блюда
    getRandomDishes() {
      // Функция для получения уникального случайного элемента
      const getRandomUniqueItem = (items, usedItems) => {
        const filteredItems = items.filter(item => !usedItems.includes(item));
        if (filteredItems.length === 0) return null;
        const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];
        usedItems.push(randomItem); // Добавляем выбранный элемент в список использованных
        return randomItem;
      };

      const usedDishes = []; // Массив для хранения выбранных блюд, чтобы избежать дублирования

      const hotDishes = this.menu.find(section => section.title === 'Горячие блюда');
      const starters = this.menu.find(section => section.title === 'Закуски');
      const pastriesDrinks = this.menu.find(section => section.title === 'Выпечка и напитки');

      return {
        hotDish1: hotDishes ? getRandomUniqueItem(hotDishes.dishes, usedDishes) : null,
        hotDish2: hotDishes ? getRandomUniqueItem(hotDishes.dishes, usedDishes) : null,
        starterDish: starters ? getRandomUniqueItem(starters.dishes, usedDishes) : null,
        pastryDrinkDish: pastriesDrinks ? getRandomUniqueItem(pastriesDrinks.dishes, usedDishes) : null,
      };
    },
  },
});