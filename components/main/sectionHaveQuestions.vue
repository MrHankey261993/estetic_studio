<template>
  <div class="section">
    <div class="container">
      <div class="lazyload section questions mouse"
           style="background-image: url('css/img/Permanent_0281.jpg');">
        <div class="mouse__light"></div>
        <div class="questions__container container">
          <div class="section__title section__title--left"><h2>Остались вопросы?</h2>
            <p>Мы ответим на все интересующие вопросы и поможем в любых даже самых сложных случаях!</p></div>
          <div role="form" class="wpcf7" id="wpcf7-f565-o1" lang="ru-RU" dir="ltr">
            <div class="screen-reader-response" role="alert" aria-live="polite"></div>
            <form action="/#wpcf7-f565-o1" method="post" class="wpcf7-form init form flex middle"
                  novalidate="novalidate">
              <div style="display: none;">
                <input type="hidden" name="_wpcf7" value="565">
                <input type="hidden" name="_wpcf7_version" value="5.2.2">
                <input type="hidden" name="_wpcf7_locale" value="ru_RU">
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f565-o1">
                <input type="hidden" name="_wpcf7_container_post" value="0">
                <input type="hidden" name="_wpcf7_posted_data_hash" value="">
              </div>
              <span class="wpcf7-form-control-wrap page_info">
                <input type="hidden" name="page_info" value="Главная" size="40" class="wpcf7-form-control wpcf7dtx-dynamictext wpcf7-dynamichidden" aria-invalid="false">
              </span>
              <div class="form__input">
                <span class="wpcf7-form-control-wrap user_name">
                  <input type="text" name="user_name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                         aria-required="true" aria-invalid="false" placeholder="Ваше имя">
                </span>
              </div>
              <div class="form__input">
                <span class="wpcf7-form-control-wrap mask-446">
                  <input type="tel" name="mask-446" value="" class="wpcf7-form-control wpcf7mf-mask wpcf7-mask wpcf7-validates-as-required"
                         size="40" aria-required="1" placeholder="Ваш телефон" data-mask="+375 (__) ___-__-__">
                </span>
              </div>
              <input type="submit" value="Отправить" class="wpcf7-form-control wpcf7-submit form__btn btn">
              <p class="form__text">
                <span class="icon-lock"></span>Обращаясь к нам вы получаете не только
                профессиональную
                работу, но и абсолютную конфиденциальность информации!
              </p>
              <div class="wpcf7-response-output" role="alert" aria-hidden="true"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sectionHaveQuestions"
    }
</script>

<style scoped>

</style>
