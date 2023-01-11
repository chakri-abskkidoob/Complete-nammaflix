<template>
    <div style="dsiplay:flex; justify-content: space-between;">
        <HeaderDefaultVue />
        <br>
        <h2 style="text-align: center;"> Backend Paginated Users List</h2>
        <div id="pu">
            <div id="ps">
                <p style="padding-top:10px;">
                    Page : {{ pageNumber }}
                </p>
                <div id="searchUser">
                    <input type="text" id="input-text" placeholder="search..." v-model="searchValue"
                        @keypress="getvalue(searchValue)" @keydown="getvalue(searchValue)"> 

                </div>
            </div>
            <div id="sr">
                <div id="searchresult" v-for="item in searchres" :key="item.userId">
                    <div style="text-align: center">

                        <router-link :to="'/singleuser/' + item.userId" style="text-decoration:none"> {{ item.firstName
                        }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="overflow-auto">
                <!-- <b-table id="table" responsive striped hover stacked="md" :items="users" :totalrows="totalElements"
                    :current-page="pageNumber" :per-page="pageSize">
                </b-table> -->
                <b-table id="table" responsive striped hover stacked="md" style="color:black; position:relative"
                    :items="users" small>
                </b-table>
                <!-- <b-table id="table" responsive striped hover stacked="md" style="color:black" :items="users" :per-page="perPage"
                    :current-page="currentPage" small>
                </b-table> -->
                <div id="page">
                    <div>
                        <p>Total Elements : {{ totalElements }}</p>
                        <p>Number of records:
                            <select v-model="pageSize" id="perp" @change="getlist()">
                                <option v-for="item in pageOptions" :key="item">{{ item }}</option>
                            </select>
                        </p>
                    </div>
                    <p>Showing page {{ pageNumber }} of {{ totalPages }}</p>
                </div>
                <div id="buttons">
                    <button id="btn" @click="getFirst()">First</button>
                    <button id="btn" @click="getPrevious()">Prev</button>
                    <button id="btn" @click="getNext()">Next</button>
                    <button id="btn" @click="getLast()">Last</button>
                </div>
            </div>
        </div>
        <!-- <div id="sr">
                <div id="searchresult" v-for="item in searchres" :key="item.userId">
                    <div style="text-align: center">{{ item.firstName }}</div>
                </div>
            </div> -->
    </div>
</template>

<script>
import axios from 'axios';
import HeaderDefaultVue from './HeaderDefault.vue';

export default {
    name: "PaginatedUsers",
    components: {
        HeaderDefaultVue,
    },
    data() {
        return {
            searchValue: '',
            show: 0,
            users: null,
            empty: '',
            first: false,
            last: false,
            numberOfElements: 10,
            offset: 0,
            totalElements: 0,
            totalPages: 0,
            pageSize: 5,
            pageNumber: 1,
            pageOptions: [5, 10, 15, 20],
            url: 'http://localhost:8089/getallusers/',
            searchres: null
        }
        
    },
    methods: {
        getallpaginatedusers(a, b, c) {
            // var page = this.pageNumber
            // var perPage = this.pageSize
            axios.get(a + "/" + b + "/" + c)
                // axios.get(`http://localhost:8089/getallusers/${page}/${perPage}`)
                .then(res => {
                    this.users = res.data.content
                    this.empty = res.data.empty
                    this.first = res.data.first
                    this.last = res.data.last
                    this.numberOfElemenmts = res.data.numberOfElements
                    this.currentPage = res.data.pageable
                    this.totalPages = res.data.totalPages
                    this.totalElements = res.data.totalElements
                })
                .catch(error => {
                    console.log(error)
                })
        }
        ,
        getvalue(searchValue) {
            axios.get(`http://localhost:8089/search/user/?query=${searchValue}`)
                .then(res => {
                    this.searchres = res.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getPrevious() {
            if (this.pageNumber > 1) {
                this.pageNumber = this.pageNumber - 1
                this.getallpaginatedusers(this.url, this.pageNumber, this.pageSize)
            }
        },
        getNext() {
            if (this.pageNumber < this.totalPages) {
                this.pageNumber = this.pageNumber + 1
                this.getallpaginatedusers(this.url, this.pageNumber, this.pageSize)
            }
        },
        getFirst() {
            this.pageNumber = 1
            this.getallpaginatedusers(this.url, this.pageNumber, this.pageSize)
        },
        getLast() {
            this.pageNumber = this.totalPages
            this.getallpaginatedusers(this.url, this.pageNumber, this.pageSize)
        },
        getlist() {
            this.getallpaginatedusers(this.url, this.pageNumber, this.pageSize)
        }
    },
    async mounted() {
        this.getallpaginatedusers(this.url, this.pageNumber, this.pageSize)
    },
}

</script>

<style scoped>
#pu {
    width: 80%;
    margin: auto;
}

#page {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
}

#table {
    width: 100%;
    /* position: relative; */
}

#searchUser {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

#input-text {
    width: 200px;
    border: 1 px solid black;
    background-color: none;
}

#ps {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(125, 125, 241, 0.201);
    margin: auto;
}

#buttons {
    width: 160px;
    /* background-color: blue; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    margin: auto;
}

#btn {
    border: 1px solid rgba(2, 2, 77, 0.216);
    border-radius: 3px;
    width: 80px;
    height: 30px;
    justify-content: center;
}

#btn:hover {
    background-color: rgb(2, 19, 42);
    border: 3pxx solid rgb(86, 86, 226);
    color: white;
}

#serachresult{
    display: inline-block;
    justify-content: space-between;
}

#sr {
    overflow: auto;
    /* position: absolute; */
}
</style>


