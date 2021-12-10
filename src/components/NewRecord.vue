<template>
<div class="crud">
  <!-- Button trigger modal -->
<!--  <button type="button" class="btn btn-dark w-100 btn-lg" data-bs-toggle="modal" data-bs-target="#crud">-->
<!--    <i class="bi bi-plus-square mx-3"></i>  Add New Record-->
<!--  </button>-->

  <!-- Modal -->
  <div class="modal fade" id="crud" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add new book</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

            <div class="mb-3 w-100 text-start">
              <label  class="form-label text-start">Book Title</label>
              <input v-model="details.title" type="text" class="form-control">
            </div>
          <div class="mb-3 w-100 text-start">
              <label  class="form-label text-start">Genre</label>
            <select v-model="details.genre" class="form-select" aria-label="Default select example">
              <option selected>Choose a genre</option>
              <option value="fiction">Fiction</option>
              <option value="memoir" >Memoir</option>
              <option value="mystery">Mystery</option>
              <option value="novel"  >Novel</option>
              <option value="poetry" >Poetry</option>
              <option value="review" >Review</option>

            </select>
            </div>
          <div class="mb-3 w-100 text-start">
              <label  class="form-label text-start">Author</label>
              <input v-model="details.author" type="text" class="form-control">
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Reset</button>
          <button type="button" class="btn btn-primary" @click="storeBook()" data-bs-toggle="modal" data-bs-target="#crud">Save Record</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NewRecord",
  props:["bookId"],
  data(){
    return {
      showModal:true,
      details : {
        title : '',
        genre : '',
        author : ''
      }
    }
  },

  methods : {
      storeBook() {
        console.log(this.bookId)
          this.$store.dispatch('storeRequest', this.details);
      }
  },
  computed: {
     book(){
      return this.$store.state.dataPages.data[this.bookId]
    }
  }
}
</script>

<style scoped>

</style>