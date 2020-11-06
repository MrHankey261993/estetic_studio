<template>
    <div class="container" style="background: #e6e8ef">
      <shapka></shapka>
      <hr>
      <Nuxt />
    </div>

</template>

<script>
import shapka from '~/components/admin/footer'
export default {
name: "admin",
  components: {
  shapka
  },
}
</script>

<style scoped>

</style>
