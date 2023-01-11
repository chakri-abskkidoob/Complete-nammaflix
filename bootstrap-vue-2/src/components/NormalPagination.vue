<template>
    <div class="container-fluid">
        <HeaderDefaultVue />
        <h2 style="text-align: center; padding-top: 20px;">Frontend Paginated Users</h2>
        <div class="m-2">
            <div class="overflow-auto">
                <div id="table">
                    <b-table responsive striped hover stacked="md" style="color:black" :items="users"
                        :per-page="perPage" :current-page="currentPage" small>
                    </b-table>
                </div>
                <div id="page">
                    <div id="number">
                        <p style="black">Current Page: {{ currentPage }}</p>
                        <p>Number of records:
                            <select v-model="perPage" id="perp">
                                <option v-for="item in perPageOptions" :key="item">{{ item }}</option>
                            </select>
                        </p>
                    </div>
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" first-text="First"
                        prev-text="Prev" next-text="Next" last-text="Last">
                    </b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import HeaderDefaultVue from './HeaderDefault.vue'
export default {
    components: {
        HeaderDefaultVue
    },
    name: "NormalPaginated",
    data() {
        return {
            perPage: 10,
            perPageOptions: [5, 10, 15, 20],
            currentPage: 1,
            users: []
        };
    },
    methods: {
        getAllUsers() {
            axios.get("http://localhost:8089/getusers").then((response) => {
                this.users = response.data;
            }).catch((error) => console.log(error));
        }
    },
    mounted() {
        this.getAllUsers();
    },
    computed: {
        rows() {
            return this.users.length;
        }
    },
}
</script>

<style>
#page {
    margin-top: 20px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
}

#table {
    width: 90%;
    margin: auto;
}

#perp {
    border: none;
    outline: none;
}
</style>