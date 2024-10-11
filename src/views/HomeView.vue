<script setup>
import FooterBlock from "@/components/blocks/FooterBlock.vue";
import HeaderHomeBlock from "@/components/blocks/HeaderHomeBlock.vue"
</script>
<template>
  <HeaderHomeBlock />
  <section class="chef flex justify-center">
    <div class="chef-container flex gap-16 mt-56">
      <img class="basis-7/12" src="@/assets/home/imageChef.png" alt="Chef">
      <article class="chef__text basis-5/12 flex flex-col gap-5">
        <h2 class="chef__text__title">Отличный повар</h2>
        <p class="body-text">Клиент очень важен, за клиентом пойдет клиент. Чистая сеть будет финансировать это. Несчастное желание ультриев теперь является чистым творцом озера.</p>
      </article>
    </div>    
  </section>
  <FooterBlock />
</template>
<script>
export default {
  components: { HeaderHomeBlock, FooterBlock },
  name: 'HomeView'
}
</script>
<style lang="scss" scoped>
  .chef {
    // display: flex;
    // flex-direction: row;
    background-image: url('@/assets/home/backgroundChef.svg');
    &-container {
      max-width: 1680px;
    }
  }
</style>