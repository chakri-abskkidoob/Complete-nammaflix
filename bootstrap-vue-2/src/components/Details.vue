<template>
    <div>
        <HeaderDefaultVue />
        <div id="movies">
        <ul class="item" v-for="item in movies" :key="item.contentId">
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

        </ul>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderDefaultVue from './HeaderDefault.vue';

export default {
    name: "DetailsPage",
    components:{
        HeaderDefaultVue,
    },
    data() {
        return {
            movies: null,
            path: "http://localhost:8089"
        }
    },
    async mounted() {
        axios.get("http://localhost:8089/category/" + this.$route.params.categoryId)
            .then(res => {
                this.movies = res.data
                console.log(this.movies)
            })
            .catch(error => {
                console.log(error);
            })
    }
}
</script>

<style scoped>
#movies {
    margin-top: 50px;

}
</style>