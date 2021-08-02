<template>
    <div class="project relative m-4">
        <a href="">
            <img
                class="project-picture rounded-md"
                v-bind:src="img_url"
                alt=""
            />
        </a>
        <div class="title absolute bottom-2 left-2">
            <h3 class="text-xl" >{{title}}</h3>
        </div>
    </div>
</template>


<script>

    import json from '@/data/project_1.json'
    export default{
        name:'Project',
        data(){
            return{
                title: json.title,
                img_url: json.img_url
            }
        },
        mounted (){

        },

    }



</script>

<style scoped lang="scss">
    .project {
        max-height: 300px;
        max-width:300px;
    }
</style>
