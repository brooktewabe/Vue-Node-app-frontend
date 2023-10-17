import { ref } from 'vue'

const getJobs = () => {

  const jobs = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/jobs')
      if(!data.ok) {
        throw Error('no available data')
      }
      jobs.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { jobs, error, load }
}

export default getJobs