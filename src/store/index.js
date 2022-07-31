import axios from "axios";
import { createStore } from "vuex";
import { nanoid } from "nanoid";


const store =  createStore({
    state:{
        dogs: [],
        dogSetTwo:[],
        breeds: []
    },
    mutations:{
        getDogs(state, allDogs){
            let newDogsArray = []
            for(var d of allDogs){
                newDogsArray.push({
                    id: nanoid(),
                    dogLink: d
                })
            }
            state.dogs = newDogsArray
        },
        getDogSetTwo(state, allDogs){
            let newDogsArray = []
            for(var d of allDogs){
                newDogsArray.push({
                    id: nanoid(),
                    dogLink: d
                })
            }
            state.dogSetTwo = newDogsArray
        },
        getBreeds(state, breeds){
            state.breeds = breeds
        }
    },
    actions:{
        getDogs({commit}){
            axios.get("https://dog.ceo/api/breeds/image/random/12")
                .then(response => {
                    console.log(response.data.message)
                    commit('getDogs', response.data.message)
                })
        },
        getDogSetTwo({commit}){
            axios.get("https://dog.ceo/api/breeds/image/random/30")
                .then(response => {
                    console.log(response.data.message)
                    commit('getDogSetTwo', response.data.message)
                })
        },
        getDogsByBreed({commit}, breed){
            axios.get(`https://dog.ceo/api/breed/${breed}/images`)
                .then(response =>{
                    commit('getDogs', response.data.message)
                })
        },
        getBreedList({commit}){
            axios.get("https://dog.ceo/api/breeds/list/all")
                .then(response => {
                    commit('getBreeds', Object.keys(response.data.message))
                })
        }
    },
    getters:{
        myDogs: (state) => state.dogs,
        myBreeds: (state) => state.breeds
    }
})

export default store;