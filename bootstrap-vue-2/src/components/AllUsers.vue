<template>
    <div>
        <HeaderDefaultVue />
        <div id="all">
            <h3 id="heading">List Of Users</h3>
            <table id="table">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>UserName</th>
                    <th>Country</th>
                    <th>Edit User</th>
                    <th>Remove User</th>
                </tr>
                <tr v-for="item in users" :key="item.userId">
                    <td>{{ item.firstName }}</td>
                    <td>{{ item.lastName }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.userName }}</td>
                    <td>{{ item.country ? item.country.countryName : '' }}</td>
                    <td>
                        <router-link :to="'/singleuser/' + item.userId">
                            <button id="edit">Edit</button>
                        </router-link>

                    </td>
                    <td>
                        <button id="remove" @click="removeUser()">Remove</button>
                    </td>
                </tr>
            </table>
        </div>
        <!-- <div id="page">
            <div class="overflow-auto">
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="table"
                    first-number last-number>
                </b-pagination>

                <p class="mt-3">Current Page: {{ currentPage }}</p>
                <p class="mt-3">Total rows: {{ rows }}</p>
                <p class="mt-3">Per Page:{{ perPage }}</p>
                
            </div>
        </div> -->
    </div>
</template>
<script>

import axios from 'axios'
import HeaderDefaultVue from './HeaderDefault.vue'
// import { BPagination } from 'bootstrap-vue'

export default {
    name: "AllUsers",
    components: {
        HeaderDefaultVue,
        // BPagination
    },
    data() {
        return {
            users: null,
            currentPage: 10,
            value: 0,
            perPage: 5,
            rows: 6
        }
    },
    methods: {
        removeUser() {
            alert("In progress")
        },
        getallusers(){
            axios.get( `http://localhost:8089/getusers`)
            .then(res => {
                this.users = res.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    mounted() {
        this.getallusers()
    },

}
</script>
<style>
#all {
    width: 70%;
    margin: auto;
    margin-top: 20px;
}

#heading {
    text-align: left;
}

table {
    width: 100%;
}

th {
    height: 70px;
    background-color: rgb(9, 9, 101);
    color: hsla(221, 63%, 80%, 0.825);
}

tr {
    text-align: center;
}

th,
td {
    padding: 15px;
    text-align: center;
}

tr:hover {
    background-color: #1515243c;
    color: rgb(151, 138, 138);
}

#edit {
    width: 80%;
    height: 100%;
    border: none;
    background-color: rgb(64, 200, 64);
    color: white;
}

#remove {
    width: 60%;
    height: 100%;
    border: none;
    background-color: rgb(195, 43, 43);
    color: white;
}

#page {
    width: 80%;
    margin: auto;
}
</style>
