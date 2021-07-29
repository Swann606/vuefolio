<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>


<style lang="scss">

@import "./assets/css/color.scss";

body {
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.primary-section {
  color:$white;
  background-color: $purple;
}

.secondary-section {
  color: $purple;
  background-color: $white;
}


</style>
