<template>
    <div>
        <HeaderDefaultVue />
        <div class="hello">
        <h1 id="h1">Register Here</h1>
        <div id="form">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <!-- <b-form-group id="input-group-1" label="First Name:" label-for="input-1"
            description="We'll never share your email with anyone else.">
            <b-form-input id="input-1" v-model="form.firstname" type="email" placeholder="Enter firstname" required>
            </b-form-input>
          </b-form-group> -->

                <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.firstName" placeholder="Enter first name" required>
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.lastName" placeholder="Enter last name" required>
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="UserName:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.userName" placeholder="Enter user name" required>
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.password" placeholder="Enter password" type="password"
                        required>
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Age:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.age" placeholder="Enter age" required>
                    </b-form-input>
                </b-form-group>

                <!-- <b-form-group id="input-group-3" label="Select Age:" label-for="input-3">
                    <b-form-select id="input-3" v-model="form.age" :options="age" default="age" required>
                    </b-form-select>
                </b-form-group> -->

                <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group> -->

                <div id="submit">
                    <b-button type="submit" variant="primary">Sign Up</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </div>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card> -->
        </div>

    </div>
    </div>


</template>
  
<script>
import axios from 'axios'
import HeaderDefaultVue from './HeaderDefault.vue'

export default {
    name: 'HelloWorld',
    components:{
        HeaderDefaultVue,
    },
    props: {
        msg: String
    },
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                userName: '',
                password: '',
                age: 0,
            },
            age: [{ text: 'Select One', value: null }, '<13', '13-17', '18-30', '31-45', '45+'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            // let user = JSON.stringify(this.form)
            axios.post("http://localhost:8089/register", this.form,
            {header:{'Content-Type':'application/json'}})
            .then(response => {
                this.message= response.data.message
                alert(this.message)
            })
            .catch(message => {
                alert(this.response)
                console.log(message)
            })
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.firstName = ''
            this.form.lastName = ''
            this.form.userName = ''
            this.form.password = ''
            this.form.age = 0
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.hello {
    width: 50%;
    margin: auto;
}

#form {
    width: 50%;
    height: 400px;
    margin: auto;
}

/* #modal {
    display: flex;
    justify-content: space-evenly;
    /* margin: auto; */
/* width: 40%; */
/* }  */
#submit {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}
#h1{
    text-shadow: 0 0 3px rgb(13, 119, 218);
}
</style>
  