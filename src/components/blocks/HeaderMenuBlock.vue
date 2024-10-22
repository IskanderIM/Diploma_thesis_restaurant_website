<script setup>
  import NavigationBlock from './NavigationBlock.vue';
</script>
<template>
  <header class="headerHome">
    <NavigationBlock />
    <section class="headerHome__container mb-[273px]">
      <article class="headerHome__headline">
        <div class="headerHome__headline-text">
          <h1 class="header__title">
            Посмотреть наше новое меню
          </h1>
          <h6>
            Самые свежие ингредиенты для вас каждый день
          </h6>
        </div>
      </article>
      <article class="headerHome__headlineImage">
        <!-- <img src='@/assets/headerHome/Image.jpeg' alt=""> -->
      </article>
      <!-- <article class="headerHome__headlineScroll">
        
      </article>
      <article class="headerHome__headlineImages">
        
      </article>
      <article class="headerHome__imageBox">
        <figure class="headerHome__imageBox-one">
          <img src="@/assets/headerHome/ImageBox1.jpeg" alt="">
          <h4 class="text-white">Начните планировать свой рацион сегодня</h4>
          <figcaption class="body-text text-white">Клиент очень важен, за клиентом пойдет клиент. Ни домашнее задание по луку</figcaption>
        </figure>
      </article>
      <article class="headerHome__imageBox">
        <figure class="headerHome__imageBox-two">
          <figcaption class="body-text text-white">Клиент очень важен, за клиентом пойдет клиент. Ни домашнее задание по луку</figcaption>
          <img src="@/assets/headerHome/ImageBox2.jpeg" alt="">
        </figure>
      </article> -->
    </section>
    
  </header>
</template>
<script>
  export default {
    name: 'HeaderMenuBlock'
  }
</script>
<style scoped lang="scss">
  header {
    background-color: #2F3300;
    background-image: url("../../assets/menuView/Image.jpg");
    background-size: cover;
  }
  .header {
    &__title {
      margin-top: 142px;
      margin-bottom: 50px;
    }
  }
  .headerHome {
    min-width: 1680px;
    background-color: #2F3300;
    display: flex;
    flex-direction: column;
    align-items: center;
    & article {
      width: 794px;
    }
    &__container {
      // display: flex;
      // flex-wrap: wrap;
      // justify-content: center;
      // align-items: flex-start;
      // gap: 60px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      // gap: 56px;
      max-width: 1644px;
      justify-content: space-between;
    }
    &__headline {
      width: 794px;      
    }
    &__headline-text {
    }
    &__headlineImage {
      width: 794px;
    }
    // &__headlineScroll {
    //   // width: 794px;
    //   display: flex;
    //   width: 65px!important;
    //   align-content: space-between;
    //   justify-content: center;
    // }
    // &__headlineImages {
    //   width: 794px;
    // }
    // &__imageBox {
    //   margin-top: 280px;
    //   margin-bottom: 255px;
    //   &-one {
    //     display: flex;
    //     flex-direction: column;
    //     gap: 54px;
    //     & h4 {
    //       width: 500px;
    //     }
    //     & figcaption {
    //       width: 500px;
    //     }
    //   }
    //   &-two {
    //     display: flex;
    //     flex-direction: column;
    //     gap: 84px;
    //     width: 500px;
    //     margin: 0 0 0 auto;
    //   }
    // }
  }
</style>