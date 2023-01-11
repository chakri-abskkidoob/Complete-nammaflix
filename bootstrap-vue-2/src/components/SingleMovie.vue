<template>
    <div>
        <HeaderDefaultVue />
        <br>
        <div id="single">
        <div id="details">
            <div>
                <h3 style="color:white;">{{ movie.title }}</h3>
            </div>
            <div id="genre" v-for="item in movie.genre" :key="item.genreId">
                <div id="gn">{{ item.genreName }}</div>
            </div>
            <div id="desc">{{ movie.description }}</div>
            <div id="likesanddislikes">
                <div id="likes">
                    <img src="https://cdn-icons-png.flaticon.com/512/880/880554.png" alt="Like"
                        style="width:22px; height: 22px; color: white;">
                    {{ movie.likes }}
                </div>
                <div id="dislikes">
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126504.png" alt="Dislike"
                        style="width:22px; height: 22px; color: white;">
                    {{ movie.dislikes }}
                </div>
            </div>
        </div>
        <div id="img" v-for="item in movie.files" :key="item.fileId">
            <img :src="path + '/file/' + item.fileId"
                style="width:108%; height:103%; margin-left:-60px; margin-top:-10px; border-top-radius: 5px; ">
        </div>
        <!-- <div id="movies">
                    <ListOfMoviesBYCategoryVue :categoryId="item.categoryId" />
                </div> -->

        <div v-for="item in movie.genre" :key="item.genreId">
            <MoreLikeThis :genreId="item.genreId" />
        </div>
    </div>
    </div>
    
</template>

<script>
import axios from 'axios'
// import MoreLikeThis from './components/MoreLikeThis.vue'
import MoreLikeThis from './MoreLikeThis.vue'
import HeaderDefaultVue from './HeaderDefault.vue'
export default {
    name: "SingleMovie",
    components:{
    MoreLikeThis,
    HeaderDefaultVue,
},
    data() {
        return {
            path: "http://localhost:8089",
            movie: {
                title: '',
                description: '',
                likes: 0,
                dislikes: 0,
                premium: false,
                rating: 0.0,
                genre: [
                    {
                        genreId:0,
                        genreName: ''
                    }
                ],
                files: [
                    {
                        fileId: 0,
                    }
                ]
            }
        }
    },
    async mounted() {
        axios.get("http://localhost:8089/get/" + this.$route.params.contentId)
            .then(res => {
                this.movie = res.data
                console.log(this.movie)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

</script>

<style>
body{
    background-color: #03032b;;
}
#single {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: auto;
}

#img {
    width: 100%;
    height: 420px;
}

#details {
    width: 50%;
    height: 420px;
    padding: 50px;
    background-color: hsla(240, 90%, 8%, 0.966);
    mask: linear-gradient(to right, rgb(2, 2, 21),transparent);
}

#genre {
    display: inline-block;
    width: 80px;
    justify-content: space-around;
    margin: 5px;
    background-color: hwb(216 2% 44% / 0.675);
    border-radius: 2px;
}

#gn {
    color: white;
    text-align: center;
}

#desc,
#likes,
#dislikes {
    color: white;
    margin-top: 20px;
}

#likesanddislikes {
    display: inline-block;
    justify-content: space-between;
    color: white;
    width: 30%;
}
</style>