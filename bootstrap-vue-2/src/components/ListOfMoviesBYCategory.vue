<template>
    <div id="movies">
        <ul class="item" v-for="item in movies" :key="item.contentId">
            <router-link :to="'/singlemovie/' + item.contentId">
                <li v-for="i in item.files" :key="i.fileId">
                    <!-- <a href=""> -->
                    <img :src="path + '/file/' + i.fileId"
                        style="width:119%; height:200px; margin-left:-60px; margin-top:-10px; border-top-radius: 5px; ">
                    <!-- http://localhost:8089/file/188 -->
                    <!-- </a> -->
                </li>
                <li>
                    <h3 v-on:click="getsingleMovie(item.contentId)">{{ item.title }}</h3>
                </li>
                <li>{{ item.description }}</li>
                <li>
                    <div id="like">
                        <p v-on:click="giveLike(item.contentId)">{{ item.likes }}&#128077;</p>
                        <p> </p>
                        <p v-on:click="givedislike(item.contentId)">{{ item.dislikes }}&#128078;</p>
                    </div>
                </li>
            </router-link>

        </ul>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: "ListOfMoviesByCategory",
    props: {
        categoryId: Number
    },
    data() {
        return {
            movies: null,
            movie: null,
            path: "http://localhost:8089"
        }
    },
    mounted() {
        this.getMovies(this.categoryId)
    },
    methods: {
        getMovies(categoryId) {
            axios.get(`http://localhost:8089/category/${categoryId}`)
                .then(res => {
                    this.movies = res.data
                    // console.log(res.data.title)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        giveLike(movieId) {
            axios.put(`http://localhost:8089/like/${movieId}`)
            window.location.reload()
        },
        givedislike(movieId) {
            axios.put(`http://localhost:8089/dislike/${movieId}`)
            window.location.reload()
        },
        getsingleMovie(contentId) {
            this
            axios.get(`http://localhost:8089/get/${contentId}`)
                .then(movie => {
                    this.movie = movie.data
                    console.log(this.movie)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}

</script>

<style>
.item {
    /* padding: 50px; */
    transition: transform .1s;
    /* Animation */
    /* width: 200px;
  height: 200px;
  margin: 0 auto; */
}

.item:hover {
    transform: scale(1.1);
    background-color: #070442b9;
    text-transform: uppercase;
}
</style>