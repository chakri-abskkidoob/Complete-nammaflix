<template>
    <div>
        <HeaderDefaultVue />
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
                        <h3>{{ item.title }}</h3>
                    </li>
                    <li>{{ item.description }}</li>
                </router-link>

            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderDefaultVue from './HeaderDefault.vue';


export default {
    name: "SearchPage",
    data() {
        return {
            movies: null,
            path: "http://localhost:8089",
        };
    },
    async mounted() {
        console.log(this.$route.params.value)
        axios.get(`http://localhost:8089/search?query=` + this.$route.params.value)
            .then(res => {
                this.movies = res.data;
                console.log(this.movies);
            })
            .catch(error => {
                console.log(error);
            });
    },
    components: { HeaderDefaultVue }
}

</script>

<style>

</style>