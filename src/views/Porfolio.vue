<template>
    <div class="Porfolio primary fullsection">

        <div class="">
            <p class="test">Lorem</p>
            <p class="test text-red-500">Lorem</p>
        </div>

        <Project/>

    </div>
</template>

<script>

    export default {
        name: "Porfolio",
        components: {
            Project: () => import(/* webpackChunkName: "project" */ '@/components/Project.vue')
        },
    };

</script>