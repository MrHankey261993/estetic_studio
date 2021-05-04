<template>
  <div>
    <div class="preload flex center middle">
      <img class="lazyload"
           src='data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E'
           data-src="css\img\header\logo_preload.svg" alt="">
    </div>
    <!-- Шапка на главной странице -->
    <main-section/>

    
  </div>

</template>

<script>
  import mainSection from '~/components/main/sectionMainId'
  import sectionYourServic from '~/components/main/sectionYourServic'
  import sectionYourEquipment from '~/components/main/sectionYourEquipment'
  import sectionYourDrugs from '~/components/main/sectionYourDrugs'
  import sectionAbout from '~/components/main/sectionAbout'
  import sectionWhyMe from '~/components/main/sectionWhyMe'
  import sectionHaveQuestions from '~/components/main/sectionHaveQuestions'
  import sectionContacts from '~/components/main/sectionContacts'

  export default {
    async asyncData({$axios}) {
      const test = await $axios.get('http://localhost:3000/api/users')
      return {
        test: test.data
      }
    },
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


