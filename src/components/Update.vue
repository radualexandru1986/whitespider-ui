<template>
<div class="row w-75 mx-auto">
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

  <div class="mb-3 w-100 text-start">
    <label  class="form-label text-start">Availability</label>
    <select v-model="details.available" class="form-select" aria-label="Default select example">
      <option value="false">Not Available</option>
      <option value="true">Available</option>

    </select>
  </div>

  <div class="col-4 text-start">
    <button class="btn w-75 btn-info" @click="update()">
      <i class="bi mx-2 bi-arrow-clockwise"></i> Update
    </button>
  </div>

  <div class="col-4">

  </div>
  <div class="col-4 text-end">
    <button class="btn w-75 border-danger" @click="destroy()"> <i class="bi bi-trash mx-2"></i> Delete</button>
  </div>

</div>
</template>

<script>
export default {
  name: "Update",
  props:['id' ,'title', 'genre', 'author', 'available'],
  data(){
    return{
      details : {
        id: this.id,
        title : this.title,
        genre : this.genre,
        author : this.author,
        available:this.available
      }
    }
  },
  methods :{
    update(){

      this.$store.dispatch('updateRequest', this.details)
    },
    destroy() {
      const result = window.confirm('Are you sure you want to delete this book?');
      if(result){
        this.$store.dispatch('deleteRequest', this.details)
      }
    }
  }
}
</script>

<style scoped>

</style>