<template>
    <div class="home primary fullsection">

        <img alt="Vue logo" src="@/assets/logo.png"/>

        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <div class="">
            <p class="test">Lorem</p>
            <p class="test text-red-500">Lorem</p>
        </div>

        <Menu/>

    </div>
</template>

<script>

    export default {
        name: "Home",
        components: {
            HelloWorld: () => import(/* webpackChunkName: "hello-world" */ '@/components/HelloWorld.vue')
        },
    };

</script>
