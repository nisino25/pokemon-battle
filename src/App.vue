<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <router-link to="/vsAI">AI</router-link>
  </div>
  <router-view/>
</template>

<script>
export default{
  data(){
    return{
    }
  },
  mounted(){
    console.clear()
  },
}
</script>


<style>
html{
  background-color: #2B2E4A;
  color: lightgrey;
  z-index: 1;
  
  
  /* error color  #CF6679 */
}
#app {
  background-color: #2B2E4A;
  color: lightgrey;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin: 0;
  padding: 0;
  /* color: #2c3e50; */
}

#nav {
  padding: 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
