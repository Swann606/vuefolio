<template>
    <Slide>
            <router-link to="/home">Home</router-link>
            <router-link to="/porfolio">Porfolio</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
    </Slide>
</template>



<script>
import { Slide } from 'vue-burger-menu' 

export default {
    name: "Menu",
    components: {
        Slide 
    }
}
</script>

<style lang="scss">

.bm-burger-bars {
      background-color: #ffffff;
    }

.bm-item-list {
      color: #ffffff !important;
    }

a {
  color: white;
}

</style>