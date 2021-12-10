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
  components: {
    Library
  },
  methods : {

  },
  beforeMount() {
    window.axios.get('http://127.0.0.1:8000/api/books').then(response=>{
      this.$store.commit('addPages', response.data)
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
