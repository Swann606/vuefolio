<template>

    <div id="MainLayout">
        <div id="nav">
            <router-link to="/home">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contact">Contact</router-link>
        </div>

        <div class="page-container">
            <router-view></router-view>
        </div>
    </div>

</template>



<script>

export default {
  name: 'MainLayout'
}

</script>



<style scoped lang="scss">

@import "../assets/css/color.scss";


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: $yellow;
    }
  }
}
</style>
