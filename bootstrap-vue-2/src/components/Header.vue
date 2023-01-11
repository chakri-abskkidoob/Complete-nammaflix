<template>
    <div id="app">
        <!-- <header>
            <div id="header">
                <router-link :to="'/'">
                    <h3>NAMMA<span style="color:red">FLIX</span></h3>
                </router-link>
                <div id="innerheader">
                    <div id="micro">
                        <input type="text" placeholder="Search" class="search" v-model="value">
                        <router-link :to="'/search/'+value">
                            <button id="search" >Search</button>
                        </router-link>
                        
                    </div>

                    <div id="sign">
                        <router-link :to="'/signin'">
                            <p>Signin</p>
                        </router-link>
                    </div>
                    <div id="log">
                        <router-link :to="'/login'">
                            <p>login</p>
                        </router-link>

                    </div>
                    <div>
                        <router-link :to="'/allusers'">
                            <p>AllUsers</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </header> -->
        <HeaderDefaultVue />
        <div id="categories">
            <ul class="item1" v-for="item in category" :key="item.categoryId">
                <li>
                    <div id="cat">
                        <h3 id="categoryname">{{ item.categoryName }}</h3>
                        <router-link :to="'/detailsPage/' + item.categoryId">
                            <button id="more">&#8227;</button>
                        </router-link>
                    </div>
                </li>
                <div id="movies">
                    <ListOfMoviesBYCategoryVue :categoryId="item.categoryId" />
                </div>

            </ul>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
import ListOfMoviesBYCategoryVue from './ListOfMoviesBYCategory.vue'
import HeaderDefaultVue from './HeaderDefault.vue'

export default {
    name: 'HeaderPage',
    components: {
        ListOfMoviesBYCategoryVue,
        HeaderDefaultVue,
    },
    data() {
        return {
            value: "",
            searchmovies: null,
            categoryMovies: null,
            category: null,
            loading: false,
            errored: false,
            // movie : null,
            movies: null,
            // value: "",
            path: "http://localhost:8089",
        }
    },
    methods: {
        getValue() {
            alert(this.value)
            // this.searchmovies = null
            // axios.get(`http://localhost:8089/search?query=${this.value}`)
            //   .then(search => {
            //     this.searchmovies = search.data
            //     // console.log(search.data)
            //   })
            //   .catch(error => {
            //     console.log(error)
            //   })
        },
        getAll(a) {
            alert(a);
        }
    },
    async mounted() {
        this.category = null
        this.movies = []
        axios.get("http://localhost:8089/getallcategories")
            .then(response => {
                this.category = response.data
            })
            .catch(error => {
                console.log(error)
            })

    },
}
</script>




<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

#movies {
    margin-left: 10px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, 1fr);
}

#innerheader {
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 100%;
}

#sign :hover {
    border-radius: 5px;
    color: rgba(19, 47, 138, 0.797);
}

#log :hover {
    border-radius: 5px;
    color: rgba(19, 47, 138, 0.797);
}

/* #search {
    border: 1 px solid black;
} */

.search {
    border-top: none;
    border-left: none;
    border-right: none;
    /* border-bottom: 0.5 px solid rgba(255, 255, 255, 0.169); */
    outline: 0;
    background-color: rgba(255, 255, 255, 0.169);
}

/* something i have to change */

#movies {
    /* padding-left: 25px; */
    margin-left: 10px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, 1fr);
}

.item {
    border: 0.5px solid rgba(14, 66, 186, 0.355);
    display: grid;
    width: 220px;
    border-radius: 5px;

}

.item li {
    display: inline-block;
    width: 180px;
    text-align: center;
    padding: px;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: repeat(2, 2fr);
}

#categoryname {
    font-size: 20px;
    margin-left: 10px;
    border-bottom: 1 px solid red;
}

.item1 li {
    display: inline-block;
    width: 100%;
    padding: 10px;
}

#like {
    display: flex;
    text-align: center;
    justify-content: space-between;
    border: 1 px solid rgb(252, 250, 250);
    height: 30px;
    width: 60%;
    margin: auto;
}

#more {
    text-align: center;
    font-size: 50px;
    color: rgb(107, 87, 240);
    border: none;
    background-color: hsl(228, 45%, 11%);
}

#more:hover {
    background-color: hsla(240, 76%, 18%, 0.643);
}

#cat {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
