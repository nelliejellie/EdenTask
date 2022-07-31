<template>
  <section class="w-4/5 h-52 bg-slate-300 shadow-lg rounded-lg">
    <img :src="image" alt="doggy" class="w-full h-40 rounded-lg" />
    <p class="text-center"><router-link :to="`/dog/${dog.id}`" class="cursor-pointer text-blue-400">View Details</router-link></p>
  </section>
</template>

<script>
export default {
    name: 'DogCard',
    props: ['dog'],
    data(){
      return{
        image:""
      }
    },
    mounted(){
      this.image = this.dog.dogLink
    }

}
</script>

<style>
  li{
    text-align: center;
    color: brown;
  }
</style>