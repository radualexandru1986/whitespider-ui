<template>
  <div id="app">
    <h1 class="display-1">Library</h1>
    <hr>
    <Library />
  </div>
</template>

<script>
import Library from './components/Library.vue'

export default {
  name: 'App',
  data(){
    return {
      defaultPath : process.env.VUE_APP_ROOT_API
    }
  },
  components: {
    Library
  },
  methods : {

  },
  beforeMount() {
    const url = `${this.defaultPath}/books`

    window.axios.get(url).then(response=>{
      this.$store.commit('addPages', response.data)
        })

    window.axios.get(`${this.defaultPath}/genres`).then(response=>{
      this.$store.commit('addGenre', response.data)
    })

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
