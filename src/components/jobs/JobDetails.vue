<template>
  <div>
  <button @click="back"
  class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >Go back</button>
  <!-- <router-view/> -->
    <div v-if="job">
      <h1 class="font-bold">{{ job.title }}</h1>
      <p>{{ job.details }}</p>
    </div>
    <div v-else>
      <p>Loading job details...</p>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        job: null
      }
    },
    methods:{
          back() {
      this.$router.go(-1)
    }
    },

    // data() {
    //   return {
    //     id: this.$route.params.id
    //   }
    // }
    mounted() {
      fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
    }
  }
  </script>
  
  <style>

  </style>