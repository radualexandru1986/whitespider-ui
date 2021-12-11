<template>
<div class="container">
  <div class="btn-group btn-group-toggle btn-group-lg w-100 my-3" data-toggle="buttons">
    <label class="btn btn-secondary" :class="by == 'title' ? 'active':''"  @click="orderBy('title')">
      Order By Title
    </label>
    <label class="btn btn-secondary" :class="by == 'genre_id' ? 'active':''" @click="orderBy('genre_id')">
      Order By Genre
    </label>
    <label class="btn btn-secondary" :class="by == 'author' ? 'active':''" @click="orderBy('author')">
      Order By Author
    </label>
  </div>

    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="collapsed w-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <div class="row d-flex flex-row">
              <div class="col ">
               <strong>#</strong>
              </div>
              <div class="col text-start">
                <strong>Book Title</strong>
              </div>

              <div class="col text-start">
               <strong>Genre</strong>
              </div>

              <div class="col text-start">
                <strong>Author</strong>
              </div>

              <div class="col">
                <strong>Available</strong>
              </div>

            </div>
          </button>
        </h2>
      </div>
      <div class="accordion-item" v-for="(book, index) in books" :key="index">
        <h2 class="accordion-header" :id="'flush-headingOne'+index">
          <button class=" w-100 collapsed py-3"  data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne'+index" aria-expanded="false" aria-controls="flush-collapseOne">
           <div class="row d-flex flex-row">
             <div class="col">
               {{book.id}}
             </div>
             <div class="col text-start">
               {{ book.title }}
             </div>

             <div class="col text-start">
               {{ book.genre.name }}
             </div>

             <div class="col text-start">
               {{ book.author }}
             </div>

             <div class="col" v-bind:class="book.available ? 'text-success' : 'text-danger'">
               <i class="bi bi-check-circle" v-if="book.available"></i>
               <i class="bi bi-x-circle" v-if="!book.available"></i>
             </div>

           </div>
          </button>
        </h2>
        <div :id="'flush-collapseOne'+index" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
              <Update :author="book.author" :title="book.title" :genre="book.genre" :available="book.available" :id="book.id"  :key="book.id"/>
          </div>
        </div>
      </div>
    </div>
  <div class="w-100 text-center">
    <nav class="" aria-label="Page navigation example">
      <ul class="pagination pagination">
        <li class="page-item " v-for="i in pages" :key="i" :class="pagesData.current_page == i ? 'active':''">
          <button class="page-link text-dark" @click="nextPage(i)">{{ i }}</button>
        </li>
      </ul>
    </nav>
  </div>
  <hr>
  <a type="button" class="btn btn-dark w-100 btn-lg" data-bs-toggle="modal" data-bs-target="#crud">
    <i class="bi bi-plus-square mx-3"></i>  Add New Record
  </a>
  <NewRecord :key="selectedBook" :bookId="'1'" />
</div>
</template>

<script>
import NewRecord from "@/components/NewRecord";
import Update from "@/components/Update";

export default {
  name: "Library",
  components : {NewRecord, Update},
  data(){
    return {
      current_page: 1,
      selectedBook: 's'
    }
  },
  methods: {

    nextPage(index){
      this.$store.dispatch('prepareRequest', { index : index })
    },

    orderBy(query) {
      this.$store.dispatch('prepareRequest', { query : query })
    },

    selectBook(index){
      this.selectedBook = index;
    },

    getGenre(id) {
      if(this.genres){
        const genre = this.genres.filter((genre)=>{
          return genre.id == id
        })
        return genre[0].name
      }
      return null
    }

  },

  computed: {
     books(){
        if(this.$store.state.dataPages){
          return this.$store.state.dataPages.data
        }
          return null;
    },

    genres()
    {
      if(this.store.state.genres) {
        return this.$store.state.genres;
      }
      return null;
    },

    pagesData(){
      if(this.$store.state.dataPages){
        return this.$store.state.dataPages
      }
      return null;
    },
    pages(){
       if (this.$store.state.dataPages){
         return this.$store.state.dataPages.last_page
       }
       return null
    },
    by(){
       return this.$store.state.orderBy;
    }

  },

}
</script>

<style scoped>

button{
  border:none;
  background:none;
  font-size:16px;
}


.accordion-item{
  transition-duration: 400ms;
}

 .accordion-item:hover{
  background-color: #ebebeb;
}
</style>