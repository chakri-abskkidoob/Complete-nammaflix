<template>
    <div>
        <HeaderDefaultVue />
        <h1 style="text-align:center">List Of Movies</h1>
        <table id="movie-table">
            <tr>
                <th>Title</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Premium</th>
                <th>Description</th>
                <th>Edit Movie</th>
                <th>Remove Movie</th>
            </tr>
            <tr v-for="item in movies" :key="item.contentId">
                <td>{{ item.title }}</td>
                <td>{{ item.likes }}</td>
                <td>{{ item.dislikes }}</td>
                <td>{{item.premium}}</td>
                <!-- <td>{{ item.country? item.country.countryName : ''}}</td> -->
                <td>{{item.description}}</td>
                <td>
                    <router-link :to="'/updatemovie/'+item.contentId">
                        <button id="edit">Edit</button>
                    </router-link>
                    
                </td>
                <td>
                    <button id="remove" @click="removeUser()">Remove</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderDefaultVue from './HeaderDefault.vue';


export default {
    name: "AllMovies",
    components:{
        HeaderDefaultVue,
    },
    data() {
        return {
            movies: null,
        }
    },
    methods: {
        getAllMOvies() {
            axios.get("http://localhost:8089/getallmovies")
                .then(res => {
                    this.movies = res.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.getAllMOvies()
    }

}
</script>

<style>
#movie-table{
    width: 85%;
    text-align: center;
    margin: auto;
    margin-top: 10px;
}
#remove{
    width:70px;
}
td{
    border-bottom: 1px solid red;
}
</style>