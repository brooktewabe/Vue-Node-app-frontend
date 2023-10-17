<template>
  <div>
  <h1 class="font-bold">Reaction Timer & Modal</h1>
  <button @click="start" :disabled="isPlaying" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results v-if="showScore" :score="score"/>

  <div v v-if="showModal">
    <!-- <Modal :header="header" theme="darkMode" @closeMyModal="toggleModal"/> -->
    <Modal theme="darkMode" @closeMyModal="toggleModal">
        <h1>{{ header }}</h1>
        <p>This is default slot we can also use named slots if we intend to have
           specific structure using templeate tag.Teleport is used put sth outside 
           the reach of vue(id='app')</p>
      <template v-slot:linkandpar>
        <p>This is named slot</p>
      </template>
    </Modal>
  </div>
  <button @click="toggleModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Show Modal</button>
  </div>
</template>

<script>
import Block from './Block.vue'
import Results from './Results.vue'
import Modal from './Modal.vue'

export default {
  name: 'oldApp',
  components: {
    Modal,
    Block,
    Results,

  },
  data(){
    return{
      header:"Sign up",
      showModal:false,
      isPlaying:false,
      delay:null,
      score:null,
      showScore:false
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
     // this.$router.push({name:'SignUpForm'})

    },
    start(){
      this.delay=2000+Math.random()*5000
      this.isPlaying = true
      this.showScore=false
    },
    endGame(reactionTimer){
      this.score=reactionTimer
      this.isPlaying=false
      this.showScore=true
    }
  }
}
</script>

<style>

</style>
