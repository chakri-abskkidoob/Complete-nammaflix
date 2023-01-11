<template>
    <div>
        <!-- <h2>More Like This</h2>
        <ul v-for="item in movies" :key="item.contentId">
            <li>
                {{item.title}}
            </li>

        </ul> -->
    </div>
</template>

<script>
// import axios from 'axios';

export default{
    name: "MoreLikeThis",
    props:{
        genreId : Number,
    },
    data(){
        return {
            movies: null,
        }
    },
    // mounted(){
    //     this.getMoreLikeThis(this.genreId)
    // },
    // methods:{
    //     getMoreLikeThis(genreId){
    //         axios.get(`http://localhost:8089/morelikethis/${genreId}`)
    //         .then( res => {
    //             this.movies.a = res.data
    //             console.log(this.movies)
    //         })
    //         .catch(error => {
    //              console.log(error)
    //         })
    //     }
    // }
}
</script>

<style>

</style>