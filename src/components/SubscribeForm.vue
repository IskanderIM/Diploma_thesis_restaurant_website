<script setup>
import { ref } from 'vue';
import { useSubscriptionStore } from '@/stores/subscription'; // Импортируем Pinia store
</script>
<template>
  <div class="subscribe-form">
    <h2>Подписаться на рассылку</h2>
    <form @submit.prevent="submitForm">
      <div>
        <input
          type="email"
          v-model="email"
          placeholder="Введите ваш email"
          required
        />
      </div>
      <button type="submit">Подписаться</button>
    </form>
    <p v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'SubscribeForm',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};

const email = ref('');
const successMessage = ref('');
const subscriptionStore = useSubscriptionStore();

const submitForm = async () => {
  if (email.value) {
    try {
      await subscriptionStore.subscribe(email.value); // Вызываем метод из Pinia
      successMessage.value = 'Вы успешно подписались на рассылку!';
    } catch (error) {
      console.error('Ошибка при подписке:', error);
      successMessage.value = 'Произошла ошибка. Попробуйте еще раз.';
    }
  }
};
</script>

<style scoped>
.subscribe-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
