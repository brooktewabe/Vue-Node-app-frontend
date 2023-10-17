<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p>Score:{{ score }}</p>
    <p class="rank">Rank:{{ rank }}</p>
  </div>
</template>

<script>
export default {
    props:['score'],
    data(){
        return{
            rank:null
        }
    },
    mounted(){
        if(this.score<500)
        {
            this.rank = "Ninja";
        }
        else if(this.score<700)
        {
            this.rank = "Rapid reflex";
        }
        else
        {
            this.rank = "Snail paced..";
        }
    }
}
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>