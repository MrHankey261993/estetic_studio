<template>
  <div class="tab-pane fade show active" id="list-categories" role="tabpanel" aria-labelledby="list-home-list">
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-subtitle mb-2 text-muted">Категории</h5>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputName" class="sr-only">Название</label>
            <input type="text" class="form-control" id="inputName" style="font-size: 16px" v-model="name"
                   placeholder="Название">
          </div>
          <button type="button" class="btn btn-outline-primary mb-2" @click="addCategory" style="font-size: 16px">
            Добавить категорию
          </button>
        </form>
        <br>
        <table class="table mt-2">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="category in allCategories">
            <th scope="row">{{category.id}}</th>
            <td>{{category.name_categories}}</td>
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
    name: "categories",
    async created() {
      if (this.$store.getters['settings/allCategories'] == null) {
        await this.$store.dispatch('settings/getCategories')
        this.allCategories = this.$store.getters['settings/allCategories']
      } else {
        this.allCategories = this.$store.getters['settings/allCategories']
      }
    },
    data() {
      return {
        allCategories: [],
        name: null,
        test: null
      }
    },
    methods: {
      async addCategory() {
        const formData = new FormData()
        formData.append("name", this.name);
        const test = await this.$axios.post('http://localhost:3000/api/categories/add', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(resp => {
          this.$store.commit('settings/setNewCategory', resp.data)

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
