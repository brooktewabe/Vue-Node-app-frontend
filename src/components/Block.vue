<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="block" v v-if="showBlock" @click="stopTimer">
    Click me
  </div>
</template>

<script>
export default {
    data(){
        return{
            showBlock:false,
            timer:null,
            reactionTimer:0
        }
    },
    props:['delay'],
    mounted(){
        setTimeout(() => {
            this.showBlock=true
            this.startTimer()
        }, this.delay);
    },
    methods:{
        startTimer(){
            this.timer=setInterval(()=>{
                this.reactionTimer+=10
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
            //create custom event end
            this.$emit("end",this.reactionTimer)
        }
    }

}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px;
    background:  #0faf87;;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>