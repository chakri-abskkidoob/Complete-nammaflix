<template>
    <header>
        <div id="header">
            <router-link :to="'/'" style="text-decoration: none;">
                <h3>NAMMA<span style="color:red">FLIX</span></h3>
            </router-link>
            <div id="innerheader">
                <div id="micro">
                    <input type="text" placeholder="Search" class="search" v-model="value">
                    <router-link :to="'/search/' + value">
                        <button id="search">Search</button>
                    </router-link>

                </div>

                <div id="sign">
                    <router-link :to="'/signin'" class="route">
                        <p>Signin</p>
                    </router-link>
                </div>
                <div id="log">
                    <router-link :to="'/login'" class="route">
                        <p>Login</p>
                    </router-link>

                </div>
                <div>
                    <router-link :to="'/allusers'" class="route">
                        <p>AllUsers</p>
                    </router-link>
                </div>
                <div>
                    <router-link :to="'/allmovies'" class="route">
                        <p>AllMovies</p>
                    </router-link>
                </div>
                <div>
                    <router-link :to="'/addnewmovie'" class="route">
                        <p>AddNewMovie</p>
                    </router-link>
                </div>
                <div>
                    <router-link  :to="'/backend/paginated/users'" class="route" >
                        <p> BackendPaginatedUsers</p>
                    </router-link>
                </div>
                <div>
                    <router-link  :to="'/normal/paginated/users'" class="route" >
                        <p>FrontendPaginatedUsers</p>
                    </router-link>
                </div>
                <div>
                    <router-link  :to="'/accordion'" class="route" >
                        <p>Accordion</p>
                    </router-link>
                </div>
                <div>
                    <router-link :to="'/addnew'" class="route">
                        <p>ADD NEW</p>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "HeaderDefault",
    data() {
        return {
            value: '',
        }
    },
    methods: {
        goto() {
            this.$route.push({
                name: 'child',
                query: {
                    myQuery: this.myQuery,
                }
            })
        }
    }

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

    box-shadow: 0 0px 10px hsl(193, 94%, 20%);
    padding: 10px;
    background-color: #FFF;
}

#movies {
    margin-left: 10px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, 1fr);
}

#innerheader {
    display: grid;
    justify-content: space-around;
    grid-template-rows: repeat( 1, 1fr);
    grid-gap: 5px;
    height: 100%;
    font-size:12px;
   padding:5px;
}

#sign :hover {
    border-radius: 5px;
    color: rgba(19, 47, 138, 0.797);
}

#log :hover {
    border-radius: 5px;
    color: rgba(19, 47, 138, 0.797);
}

#search {
    background-color: #1d048a5c;
    border: none;
    border-radius: 50%;
    height:30px;
}

.search {
    border-top: none;
    border-left: none;
    border-right: none;
    /* border-bottom: 0.5 px solid rgba(255, 255, 255, 0.169); */
    outline: 0;
    background-color: rgba(255, 255, 255, 0.169);
    width: 80px;
}

#micro {
    display: flex;
}
.route{
    text-decoration: none;
}
.route :hover{
    background-color: rgba(39, 39, 103, 0.605);
    color:white;
    /* box-shadow: 0 0px 10px hsl(193, 92%, 10%); */
    border-radius:5px;
    font-size: 14px;
    padding:5px;
}
</style>