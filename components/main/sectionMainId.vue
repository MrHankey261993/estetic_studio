<template>
  <div>
    <btns-group />

    <div
      class="lazyload main_service"

      :style="
        'background-image: url('+post.img+')'
      "
    >
      <div class="container">
        <div class="main_service__info">
          <h1 class="main_service__title">{{ post.mainTitle }}</h1>
          <p class="main_service__text">{{ post.shortDescription }}</p>
          <p class="main_service__price"></p>
          <div class="main_service__btns flex middle">
            <a
              class="btn"
              href="#form1"
              data-object="Аппаратное омоложение кожи"
              data-modal=""
              >Записаться на прием</a
            >
            <a class="link_more no_icon" href="#end_scroll">Узнать больше</a>
          </div>
          <div class="description flex middle"></div>
        </div>
      </div>
    </div>

    <div class="section" id="end_scroll">
      <div class="container">
        <div class="section__text">
          <h2>{{ post.secondTitle }}</h2>
        </div>
        <div class="tabs tabs--margin">
          <ul class="tabs__title flex middle">
            <li
              v-for="itemDesc in post.fullDescription"
              v-bind:key="itemDesc.id"
            >
              {{ itemDesc.nameDescription }}
            </li>
          </ul>
          <div class="tabs__body">
            <li
              v-for="itemDesc in post.fullDescription"
              v-bind:key="itemDesc.id"
            >
              <div class="section__text section__text--tabs">
                <p>
                  {{ itemDesc.description }}
                </p>
              </div>
            </li>
          </div>
        </div>

        <div class="section__text">
          <h2>Фотогалерея</h2>
        </div>
        <div class="tabs tabs--margin">
          <ul class="tabs__title flex middle"></ul>
          <div class="tabs__body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnsGroup from "./btnsGroup.vue";
export default {
  name: "sectionMainId",
  props: ['post'],
  components: {
    BtnsGroup,
  },
};
</script>

<style scoped>
.main_service {
  background-image: url("../../static/css/img/permanent_0300.jpg");
}
</style>
