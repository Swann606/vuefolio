<template>
  <div class="home primary fullsection">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Menu/>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
   HelloWorld:() => import(/* webpackChunkName: "hello-world" */ '@/components/HelloWorld.vue'  )
  },
};

</script>
