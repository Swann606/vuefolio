<template>
  <div class="home full-section primary">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>



//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
   HelloWorld:() => import(/* webpackChunkName: "hello-world" */ '@/components/HelloWorld.vue'  )
  },
};
</script>
