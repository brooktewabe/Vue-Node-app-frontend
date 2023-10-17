<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
  </div>
</template>
    
    <script>
import { ref } from "vue";
export default {
  //fetch api using composition api
  setup() {
    const jobs = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/jobs");
        if (!data.ok) {
          throw Error("no available data");
        }
        jobs.value = await data.json();
      } 
      catch (err) {
        error.value = err.message;
      }
    };
    load();

    return { jobs, error };
  },
};
</script>
  
    <style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>