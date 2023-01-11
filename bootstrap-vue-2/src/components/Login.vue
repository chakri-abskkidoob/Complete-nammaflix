<template>
    <div>
        <HeaderDefaultVue />
        <div id="hello">
        <h1>LogIn Here</h1>
        <div id="form">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                <b-form-group id="input-group-2" label="UserName:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.userName" placeholder="Enter user name" required>
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.password" placeholder="Enter password" type="password"
                        required>
                    </b-form-input>
                </b-form-group>

                <div id="submit">
                    <b-button type="submit" variant="primary">Log In</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </div>
            </b-form>
        </div>
    </div>
    </div>
</template>
<script>

import axios from 'axios'
import HeaderDefaultVue from './HeaderDefault.vue'

export default {
    name: 'LoginPage',
    components:{HeaderDefaultVue},
    props: {
        msg: String
    },
    data() {
        return {
            form: {
                userName: '',
                password: '',
            },
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            axios.put(`http://localhost:8089/${this.form.userName}/login/${this.form.password}`)
            .then(res => {
                this.message = res.data.message
                alert(this.message)
            })
            .catch(error => {
                alert(error)
            })
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.username = ''
            this.form.password = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
    }
}
</script>
<style>
#hello {
    width: 50%;
    margin: auto;
}

#form {
    width: 50%;
    height: 400px;
    margin: auto;
}

#submit {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}
</style>
