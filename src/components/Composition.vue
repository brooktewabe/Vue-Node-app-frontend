<template>
  <div>
    <div class="cen">
      <div class="flex-container">
        <div>
          <h2 class="font-bold">Reactive</h2>
          <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
          <button @click="updateNinjaTwo"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Update ninja two</button>
        </div>
        <div>
          <h2 class="font-bold">Ref</h2>
          <p>My name is {{ name }} and my age is {{ age }}</p>
          <button @click="handleClick"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >click me</button>
          <br><br>
        </div>
      </div>
    
    <input type="text" v-model="search" class="font-bold bg-gray-200 border border-gray-300 py-2 px-4 rounded-md"/>
    <h2 class="font-bold">search term - {{ search }}</h2>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</div>
  </template>
  <script>
  import { computed, reactive, ref,watch } from "vue";
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Composition",
    setup() {
      const name = ref("mario");
      const age = ref(30);
      const search = ref("");
      const names = ref(["mario", "yoshi", "luigi", "toad", "bowser", "koopa", "peach"]);
      const ninjaTwo = reactive({ name: "luigi", age: 35 });
  
      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value));
      });
      watch(search,()=>{
        console.log("Watch runnning because search is changed(can be done with watchEffect too)")
      })
  
      const handleClick = () => {
        name.value = "luigi";
        age.value = 35;
      };
      //no need to use .value but we can't use premitive values like string with reactive
      const updateNinjaTwo = () => {
        ninjaTwo.age = 45;
      };
  
      return {names,search,matchingNames,name,age,handleClick,updateNinjaTwo,ninjaTwo};
    },
  };
  </script>
  
  <style>
  .cent {
    display: flex;
    justify-content: center;
  }
  
  .flex-container {
    display: flex;
    flex-direction: row;
  }
  </style>
  