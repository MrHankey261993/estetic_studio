<template>
  <div class="row" style="font-size: 16px">
    <div class="col-4">
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active" id="list-categories-list"
           @click="activeTab('list-categories-list')">Категории</a>
        <a class="list-group-item list-group-item-action" id="list-service-list"
           @click="activeTab('list-service-list')">Услуги</a>
        <a class="list-group-item list-group-item-action" id="list-price-list" @click="activeTab('list-price-list')">Цены</a>
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <index-categories/>
        <index-services/>
        <div class="tab-pane fade" id="list-price">...</div>
      </div>
    </div>
  </div>
</template>

<script>
  import IndexCategories from '~/components/admin/settings/categories'
  import IndexServices from '~/components/admin/settings/services'

  export default {
    name: "index",
    layout: 'admin',
    components: {
      IndexCategories,
      IndexServices
    },
    methods: {
      activeTab(idElemt) {
        let activeElLi = document.getElementsByClassName('list-group-item list-group-item-action active')
        activeElLi[0].classList.remove('active')
        let futActiveElLi = document.getElementById(idElemt)
        futActiveElLi.classList.add('active')

        let activeElBlock = document.getElementsByClassName('tab-pane fade show active')
        activeElBlock[0].classList.remove('show', 'active')

        document.getElementById(idElemt.split('-list')[0]).classList.add('show', 'active')
      }
    }
  }
</script>

<style src="bootstrap/dist/css/bootstrap.min.css">

</style>
