<template>
  <div class="tab-pane fade" id="list-service" role="tabpanel">
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-subtitle mb-2 text-muted">Услуги</h5>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputNameService" class="sr-only">Название</label>
            <input type="text" class="form-control" id="inputNameService" style="font-size: 16px" placeholder="Название">
          </div>
          <button type="button" class="btn btn-outline-primary mb-2" @click="test" style="font-size: 16px">
            Добавить услугу
          </button>
        </form>
        <br>
        <table class="table mt-2">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Категория</th>
            <th scope="col">Название</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="service in allServices">
            <th scope="row">{{service.id}}</th>
            <td>{{service.name_categories}}</td>
            <td>{{service.name_service}}</td>
            <td>
              <button type="button" class="btn btn-success">Редактировать</button>
              <button type="button" class="btn btn-danger">Удалить</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "services",
    async created() {
      const resp = await this.$axios.get('http://localhost:3000/api/services/').then(resp => {
        this.allServices = resp.data
      })
    },
    data() {
      return {
        allServices: [],

      }
    },
    methods: {
     async test() {
        const resp = await this.$axios.get('http://localhost:3000/api/services/').then(resp => {
               this.allServices = resp.data
             })
      },
      async addServices() {
        const formData = new FormData()
        const test = await this.$axios.post('http://localhost:3000/api/services/add', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(resp => {
          resp.data.forEach(element => {
            this.allCategories.push(element)
          })
        })

      }
    },
  }
</script>

<style scoped>
  .btn {
    font-size: 16px;
  }
</style>
