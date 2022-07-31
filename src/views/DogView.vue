<template>
  <div class="flex flex-col justify-center items-center h-screen bg-slate-400">
    <img :src="doggy" alt="" class="w-[30%] h-[30%] rounded-lg shadow-xl">
    <p class="uppercase font-bold font-serif">Breed: {{ breed }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      doggy: "",
      id: "",
      breed:""
    }
  },
  created(){
    this.id = this.$route.params.id;
    // get the doglink using the array
    let arrayHolder = this.$store.state.dogs
    let dog = arrayHolder.find(dog => dog.id == this.id)
    this.doggy = dog.dogLink

    // get the breed name of the dog
    let dogSplitterArray = this.doggy.split('/')
    let breed = dogSplitterArray[4]
    this.breed = breed
  }
}
</script>

<style>

</style>