<template>
  <div>

    <!-- Шапка на главной странице -->
    <main-section :post="post"/>


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
    async created() {
      this.post = await this.$store.getters["data/getPostByName"](
        this.$route.path
      );
      if (typeof this.post === "undefined") {
        this.$router.push("/");
      }
    },
    data() {
      return {
        post: {},
      };
    },
    title () {
      return this.posts.mainTitle
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


