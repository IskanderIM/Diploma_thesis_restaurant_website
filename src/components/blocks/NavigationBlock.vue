<template>

  <div class="navbar">
    <div class="navbar__left">
      <router-link to="/">
        <img src="../../assets/Logo.svg" alt="FoodZero">
      </router-link>
      <button @click="toggleMenu" class="bg-blue-500 text-white p-2">
        Открыть меню
      </button>
    </div>
    <div class="navbar__right">
      <a class="navbar__right__tel" href="tel:+86852346000">+86 852 346 000</a>
      <button @click="toggleBooking" class="heading-five bg-blue-500 text-white p-2">
        Бронирование
      </button>
    </div>
  </div>
    

    <transition name="fade">
      <div v-if="isMenuOpen" 
           class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
           @click="closeMenu">
        <div class="bg-white p-5 rounded shadow-lg" @click.stop>
          <h2 class="text-lg font-bold mb-4">Всплывающее меню</h2>
          <ul>
            <li><a href="#" class="block py-2">Ссылка 1</a></li>
            <li><a href="#" class="block py-2">Ссылка 2</a></li>
            <li><a href="#" class="block py-2">Ссылка 3</a></li>
          </ul>
          <button @click="closeMenu" class="mt-4 bg-red-500 text-white p-2">
            Закрыть меню
          </button>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="isBookingOpen" 
           class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
           @click="closeBooking">
        <div class="bg-white p-5 rounded shadow-lg" @click.stop>
          <h2 class="text-lg font-bold mb-4">Всплывающее меню2</h2>
          <ul>
            <li><a href="#" class="block py-2">Ссылка 1</a></li>
            <li><a href="#" class="block py-2">Ссылка 2</a></li>
            <li><a href="#" class="block py-2">Ссылка 3</a></li>
          </ul>
          <button @click="closeBooking" class="mt-4 bg-red-500 text-white p-2">
            Закрыть меню
          </button>
        </div>
      </div>
    </transition>

</template>
<script>
export default {
  name: 'NavigationBlock',
  data() {
    return {
      isMenuOpen: false,
      isBookingOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    toggleBooking() {
      this.isBookingOpen = !this.isBookingOpen;
    },
    closeBooking() {
      this.isBookingOpen = false;
    }
  }
}
</script>
<style scoped lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active в <2.1.8 */ {
    opacity: 0;
  }
  .navbar {
    min-width: 1680px;
    display: flex;
    justify-content: space-between;
    margin: 46px 0;
    align-items: center;
    &__left {
      display: flex;
    }
    &__right {
      display: flex;
      align-items: center;
      gap: 30px;
      &__tel {
        color: rgb(255, 255, 255);
        font-family: Roboto;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }
</style>