<template>
  <div class="section">
    <div class="container">
      <div class="section__title"><h2>Наши услуги</h2>
        <p>Мы поможем Вам поддерживать Вашу естественную красоту, проведем быструю реабилитацию после проведения
          пластических операций, избавим Вас от нежелательных волос, проведем коррекцию фигуры, не прибегая к
          операции.</p></div>
      <div class="cells flex">
        <template v-for="post in posts">
          <a class="cells__item" :href="post.name">
            <img class="cells__img lazyload" :src="post.imgLitle" alt="">
            <div class="cells__info flex_column end">
              <h3 class="cells__title">{{post.mainTitle}}</h3>
              <p class="cells__text">{{post.shortDescription}}</p>
              <span class="icon-plus"></span>
            </div>
            <div class="cells__hover flex_column end">
              <span class="icon-icon6"></span>
              <h3 class="cells__title">{{post.mainTitle}}</h3>
            </div>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sectionYourServic",
    data() {
      return {
        posts: null,
      }
    },
    created() {
      this.posts = this.$store.getters['data/getPosts'];
    },

  }
</script>

<style scoped>

</style>
