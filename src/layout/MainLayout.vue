<template>

    <div id="MainLayout">
        <Menu/>

        <div class="page-container">
            <router-view></router-view>
        </div>
    </div>

</template>



<script>

export default {
  name: 'MainLayout',
    components: {
   Menu:() => import(/* webpackChunkName: "menu" */ '@/components/Menu.vue'  )
  },
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
