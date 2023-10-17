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
import getJobs from "@/composables/getJobs";
export default {
  //fetch api using composition api and composables
  setup() {
    const { jobs, error, load } = getJobs();

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