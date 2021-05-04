<template>
  <div>
    <btns-group/>
    
    <div class="main mouse">
      <div class="mouse__light"></div>
      <div class="main__img">
        <div class="lazyload main__img_item"></div>
      </div>

      <div class="main__list">
        <div class="main__list_item">
          <div class="main__list_container container flex middle">
            <div class="main__list_info">
              <h1 class="main__list_title">ESTETIC STUDIO</h1>
              <p class="main__list_text">
                Раскроем вашу природную красоту и покажем путь к совершенству
              </p>
              <a class="link_more" href="akcii\skidki-50\index.htm"
                ><span class="icon-plus"></span>Записаться</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="main__controls controls flex middle">
        <img class="controls__prev" src="css\img\main\prev.svg" alt="" />
        <img class="controls__next" src="css\img\main\next.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import BtnsGroup from './btnsGroup.vue';
export default {
  name: "sectionMain",
  components: {
    BtnsGroup
    
  }
};
</script>

<style scoped>
.main__img_item {
  background-image: url("../../static/css/img/permanent_0300.jpg");
}
</style>
