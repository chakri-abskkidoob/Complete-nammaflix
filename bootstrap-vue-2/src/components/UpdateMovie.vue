<template>
    <div>
        <h2>Update Movie Details here</h2>
        <div id="updatemovie">
            <label>Title</label>
            <input type="text" placeholder="Enter title here" v-model="movie.title">
            <label>Description</label>
            <input type="text" placeholder="Enter description here" v-model="movie.description">
            <div id="m">
                <label>Premium</label>
                <input type="checkbox" v-model="movie.premium">
                <label>Likes</label>
                <input type="Number" v-model="movie.likes">
                <label>DisLikes</label>
                <input type="Number" v-model="movie.dislikes">
                <label>Rating</label>
                <input type="Number" v-model="movie.rating">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: "UpdateMovie",
    data() {
        return {
            movie: null
        }
    },
    mounted() {
        this.getMovie()
    },
    methods: {
        getMovie() {
            axios.get("http://localhost:8089/get/" + this.$route.params.contentId)
                .then(res => {
                    this.movie = res.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}

</script>

<style>
#updatemovie {
    width: 80%;
    margin: auto;
}
#m{
    margin-top:20px;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgb(8, 3, 35);
    height: 60px;
    padding:10px;
}
</style>