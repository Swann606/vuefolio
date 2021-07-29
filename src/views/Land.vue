<template>
    <div id="land">

        <div id="load" v-bind:style="{ minWidth : count + '%' }">
        </div>

        <div id="content">
            <div class="textBox">
                <h1>Hello</h1>
                <p>{{count}} %</p>
            </div>
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'Land',

    data(){
        return{
            count : 0
        }
    },

  mounted () 
  {
        this.countTimer() 
  },

  methods: {

      countTimer() {
                if(this.count < 100) {
                    setTimeout(() => {
                        this.count += 1
                        this.countTimer()
                    }, 50)
                }else{
                    this.$router.push("home")
                }
            }
        }
}

</script>

<style scoped lang="scss">

#land{
    height: 100vh;
    background-color: #0571FF;
    color: #FFAB0F;
    font-size: 3em;
}

#content{
    position: absolute;
    top: 0;
    left:0;
    z-index: 20;
}

.textBox{
    width: 100vw;
    height: 100vh;
    display: flex; 
    flex-direction: column; 
    justify-content: center;
}

#load{
    position: absolute;
    top: 0;
    left:0;
    height: 100vh;
    background-color: #415CF2;
    z-index:10;
}

</style>