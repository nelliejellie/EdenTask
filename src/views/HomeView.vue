<template>
  <div class="flex justify-end mr-4">
    <select name="" id="" v-model="breed" class="bg-slate-200 pl-2 h-10 w-[15%] md:w-[30%]">
      <option  v-for="b in $store.state.breeds" :value="b" :key="b">{{b}}</option>
    </select>
    <button class="bg-slate-300 p-2" @click="searchDog">Search Breed</button>
  </div>
  <h1 class="text-center text-2xl font-bold font-serif text-[#267CDC] mt-10">A Look At Our Finest Dogs</h1>
  <section v-if="$store.state.dogs.length < 1" class="w-full h-screen flex justify-center items-center">
    <img src="@/assets/images/Loading_2.gif" class="w-14 h-14" alt="" srcset="">
  </section>
  <section v-if="$store.state.dogs.length > 1" class="w-full p-8 h-screen grid grid-cols-4 gap-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 justify-items-center shadow-xl">
    <dog-card  v-for="dog in $store.state.dogs" :key="dog.id" :dog="dog" />
  </section>
</template>

<script>
// @ is an alias to /src
import DogCard from '@/components/Dog.vue';

export default {
  components: {
    DogCard
  },
  data (){
    return{
      breed:"",
    }
  },
  async created(){
    // cache data gotten from the store
    if(this.$store.state.dogs.length < 1){
      await this.$store.dispatch("getDogs")
    }
    this.$store.getters.myDogs

    if(this.$store.state.breeds.length < 1){
      await this.$store.dispatch("getBreedList")
    }
    this.$store.getters.myBreeds
  },
  methods: {
    searchDog(){
      this.$store.dispatch("getDogsByBreed", this.breed)
    }
  }
}
</script>
