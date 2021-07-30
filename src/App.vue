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

  @import'./assets/css/color.scss';

body {
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fullsection{

  height: 100vh;
}

.fullsection.primary {
    color: $white;
    background-color: $purple;
  }

.fullsection.secondary {
    color: $purple;
    background-color: $white;
  }

a {
  text-decoration: none;
}

</style>
