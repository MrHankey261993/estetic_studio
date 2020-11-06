<template>
  <div>
    <div class="preload flex center middle">
      <img class="lazyload"
           src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E'
           data-src="css\img\header\logo_preload.svg" alt="">
    </div>
    <!-- Шапка на главной странице -->
    <main-section/>

    <div class="section">
      <!--
      <div class="container">
        <div class="section__title"><h2>Акции центра</h2></div>
        <div class="slider">
          <div class="slider__list col_3">
            <div class="col_3__item"><a class="card" href="akcii\skidki-50\index.htm">
              <noscript><img src="assets\uploads\2020\01\miniatjura-4-456x650.png" alt=""></noscript>
              <img class="lazyload"
                   src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E'
                   data-src="https://skinlux.by/wp-content/uploads/2020/01/miniatjura-4-456x650.png" alt="">
              <div class="card__info"><p class="card__date">2020.09.30 - 2020.10.31</p>
                <h3 class="card__title">Скидки до 50% в октябре!</h3></div>
            </a></div>
            <div class="col_3__item"><a class="card" href="akcii\inekcionnaja-kosmetologija-so-skidkoj-do-23\index.htm">
              <noscript><img src="assets\uploads\2020\01\miniatjura-2-456x650.png" alt=""></noscript>
              <img class="lazyload"
                   src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E'
                   data-src="https://skinlux.by/wp-content/uploads/2020/01/miniatjura-2-456x650.png" alt="">
              <div class="card__info"><p class="card__date">2020.08.31 - 2020.09.30</p>
                <h3 class="card__title">Инъекционная косметология со&nbsp;скидкой до 20%</h3></div>
            </a></div>
          </div>
          <div class="slider__controls flex middle">
            <noscript><img class="slider__prev" src="css\img\main\prev.svg" alt="">
            </noscript>
            <img class="lazyload slider__prev"
                 src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E'
                 data-src="https://skinlux.by/wp-content/themes/skinlux/assets/img/main/prev.svg" alt="">
            <noscript><img class="slider__next" src="css\img\main\next.svg" alt="">
            </noscript>
            <img class="lazyload slider__next"
                 src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E'
                 data-src="https://skinlux.by/wp-content/themes/skinlux/assets/img/main/next.svg" alt=""> <a
            class="slider__link link_all" href="akcii\index.htm">Все акции и скидки</a></div>
        </div>
      </div>
    -->
    </div>

    <!-- Наши услуги -->
    <section-your-servic/>

    <!-- Наше оборудование -->
    <section-your-equipment/>

    <!-- Препараты, которые мы используем -->
    <section-your-drugs/>

    <!-- О нас -->
    <section-about/>
    <!-- Почему выберают нас -->
    <section-why-me/>

    <section-have-questions/>

    <sectionContacts/>

    <div class="modal" id="form1"><a class="modal__close" href="#" rel="modal:close"><span
      class="icon-close"></span></a>
      <h3 class="modal__title">Записаться на прием</h3>
      <p class="modal__text">Оставьте заявку и мы свяжемся с вами и уточним дату и время приема, а так-же детали.</p>
      <div role="form" class="wpcf7" id="wpcf7-f575-o2" lang="ru-RU" dir="ltr">
        <div class="screen-reader-response" role="alert" aria-live="polite"></div>
        <form action="/#wpcf7-f575-o2" method="post" class="wpcf7-form init form form--modal flex middle"
              novalidate="novalidate">
          <div style="display: none;"><input type="hidden" name="_wpcf7" value="575"> <input type="hidden"
                                                                                             name="_wpcf7_version"
                                                                                             value="5.2.2"> <input
            type="hidden" name="_wpcf7_locale" value="ru_RU"> <input type="hidden" name="_wpcf7_unit_tag"
                                                                     value="wpcf7-f575-o2"> <input type="hidden"
                                                                                                   name="_wpcf7_container_post"
                                                                                                   value="0"> <input
            type="hidden" name="_wpcf7_posted_data_hash" value=""></div>
          <input type="hidden" name="page_info" value="" class="wpcf7-form-control wpcf7-hidden">
          <div class="form__input"><span class="wpcf7-form-control-wrap user_name"><input type="text" name="user_name"
                                                                                          value="" size="40"
                                                                                          class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                          aria-required="true"
                                                                                          aria-invalid="false"
                                                                                          placeholder="Ваше имя"></span>
          </div>
          <div class="form__input"><span class="wpcf7-form-control-wrap mask-904"><input type="tel" name="mask-904"
                                                                                         value=""
                                                                                         class="wpcf7-form-control wpcf7mf-mask wpcf7-mask wpcf7-validates-as-required"
                                                                                         size="40" aria-required="1"
                                                                                         placeholder="Ваш номер"
                                                                                         data-mask="+375 (__) ___-__-__"></span>
          </div>
          <select class="form__select" name="activities">
            <option value="Аппаратная косметология">Аппаратная косметология</option>
            <option value="Дерматология">Дерматология</option>
            <option value="Инъекционная косметология">Инъекционная косметология</option>
            <option value="Коррекция фигуры">Коррекция фигуры</option>
            <option value="Лазерная косметология">Лазерная косметология</option>
            <option value="Удаление новообразований">Удаление новообразований</option>
            <option value="Эстетическая косметология">Эстетическая косметология</option>
          </select> <input type="submit" value="Отправить" class="wpcf7-form-control wpcf7-submit form__btn btn">
          <p class="form__text"><span class="icon-lock"></span>Обращаясь к нам вы получаете не только профессиональную
            работу но и абсолютную конфиденциальность информации!</p>
          <div class="wpcf7-response-output" role="alert" aria-hidden="true"></div>
        </form>
      </div>
    </div>
    <div class="modal modal--callback" id="callback"><a class="modal__close" href="#" rel="modal:close"><span
      class="icon-close"></span></a>
      <h3 class="modal__title">Заказ обратного звонка</h3>
      <div role="form" class="wpcf7" id="wpcf7-f581-o3" lang="ru-RU" dir="ltr">
        <div class="screen-reader-response" role="alert" aria-live="polite"></div>
        <form action="/#wpcf7-f581-o3" method="post"
              class="wpcf7-form init form form--modal form--callback flex middle"
              novalidate="novalidate">
          <div style="display: none;"><input type="hidden" name="_wpcf7" value="581"> <input type="hidden"
                                                                                             name="_wpcf7_version"
                                                                                             value="5.2.2"> <input
            type="hidden" name="_wpcf7_locale" value="ru_RU"> <input type="hidden" name="_wpcf7_unit_tag"
                                                                     value="wpcf7-f581-o3"> <input type="hidden"
                                                                                                   name="_wpcf7_container_post"
                                                                                                   value="0"> <input
            type="hidden" name="_wpcf7_posted_data_hash" value=""></div>
          <span class="wpcf7-form-control-wrap page_info"><input type="hidden" name="page_info" value="Главная"
                                                                 size="40"
                                                                 class="wpcf7-form-control wpcf7dtx-dynamictext wpcf7-dynamichidden"
                                                                 aria-invalid="false"></span>
          <div class="form__input"><span class="wpcf7-form-control-wrap user_name"><input type="text" name="user_name"
                                                                                          value="" size="40"
                                                                                          class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                          aria-required="true"
                                                                                          aria-invalid="false"
                                                                                          placeholder="Ваше имя"></span>
          </div>
          <div class="form__input"><span class="wpcf7-form-control-wrap mask-221"><input type="tel" name="mask-221"
                                                                                         value=""
                                                                                         class="wpcf7-form-control wpcf7mf-mask wpcf7-mask wpcf7-validates-as-required"
                                                                                         size="40" aria-required="1"
                                                                                         placeholder="Ваш телефон"
                                                                                         data-mask="+375 (__) ___-__-__"></span>
          </div>
          <input type="submit" value="Отправить" class="wpcf7-form-control wpcf7-submit form__btn btn">
          <p class="form__text"><span class="icon-lock"></span>Обращаясь к нам вы получаете не только профессиональную
            работу но и абсолютную конфиденциальность информации!</p>
          <div class="wpcf7-response-output" role="alert" aria-hidden="true"></div>
        </form>
      </div>
    </div>
    <div class="modal modal--thanks" id="thanks"><a class="modal__close" href="#" rel="modal:close"><span
      class="icon-close"></span></a>
      <h3 class="modal__title">Спасибо за вашу заявку!</h3>
      <p class="modal__text">Мы свяжемся с вами в ближайшее время и уточним дату и время приема, а так-же детали. <br>А
        пока
        вы можете <a href="blog\index.htm">почитать наш блог</a>.</p></div>

    <!-- Dynamic page generated in 0.522 seconds. -->
    <!-- Cached page generated by WP-Super-Cache on 2020-10-19 09:00:36 -->

    <!-- Compression = gzip -->
  </div>

</template>

<script>
  import mainSection from '~/components/main/sectionMain'
  import sectionYourServic from '~/components/main/sectionYourServic'
  import sectionYourEquipment from '~/components/main/sectionYourEquipment'
  import sectionYourDrugs from '~/components/main/sectionYourDrugs'
  import sectionAbout from '~/components/main/sectionAbout'
  import sectionWhyMe from '~/components/main/sectionWhyMe'
  import sectionHaveQuestions from '~/components/main/sectionHaveQuestions'
  import sectionContacts from '~/components/main/sectionContacts'

  export default {
    components: {
      mainSection,
      sectionYourServic,
      sectionYourEquipment,
      sectionYourDrugs,
      sectionAbout,
      sectionWhyMe,
      sectionHaveQuestions,
      sectionContacts
    }
  }
</script>
<style src="../static/css/index.css">
</style>


