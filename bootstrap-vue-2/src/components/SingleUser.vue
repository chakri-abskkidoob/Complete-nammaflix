<template>
  <div>
    <HeaderDefaultVue />
    <div id="singleuser">
    <h3 id="heading">Edit User Details</h3>
    <ul id="form">
      <label for="firstName">FirstName</label>
      <li>
        <input type="text" placeholder="Enter firstName.." v-model="user.firstName">
      </li>
      <label for="lastName">LastName</label>
      <li>
        <input type="text" placeholder="Enter lastName.." v-model="user.lastName">
      </li>
      <label for="userName">UserName</label>
      <li>
        <input type="text" placeholder="Enter userName.." v-model="user.userName">
      </li>
      <label for="age">Age</label>
      <li>
        <input type="text" placeholder="Enter age.." v-model="user.age">
      </li>
      <label for="countryName">Country</label>
      <li>
        <!-- v-model="user.country" -->
        <select id="country" v-model="user.country.countryId">
          <option v-for="item in country" :key="item.countryId" :value="item.countryId">{{item.countryName}}</option>
        </select>
      </li>
      <!-- <input type="file" name="" id=""> -->
      <li>
        <button id="update" @click="saveUser()">Update Details</button>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderDefaultVue from './HeaderDefault.vue';

export default {
  name: "SingleUser",
  components:{
    HeaderDefaultVue
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        age: 0,
        country:{
          countryId:0,
          countyName:'',
        },
      },
      country:[
        {
          countryId:0,
          countryName:'',
        }
      ],
    }
  },
  methods: {
    saveUser() {
      // event.preventDefault()
      // let user = JSON.stringify(this.form)
      console.log(this.user)
      axios.put("http://localhost:8089/update/" + this.$route.params.userId, this.user,
        { header: { 'Content-Type': 'application/json' } })
        .then(response => {
          this.message = response.data.message
          alert("Successfully Updated Details")
          this.$router.push('/allusers')
        })
        .catch(message => {
          alert(message)
        })
    },
    getCountry() {
      axios.get("http://localhost:8089/get/country")
        .then(res => {
          this.country = res.data
          console.log(this.country)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getUsers() {
      axios.get("http://localhost:8089/getuser/" + this.$route.params.userId)
        .then(res => {
          this.user = res.data
          // console.log(this.user)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  async mounted() {
    this.getUsers();
    this.getCountry();
  }

}


</script>

<style>
#singleuser {
  width: 60%;
  margin: auto;
  margin-top: 20px;
}

#heading {
  text-align: center;
}

#form li {
  align-items: center;
  width: 100%;
  margin: auto;
  display: inline-block;
  justify-content: space-between;
}

li {
  width: 100%;
  height: 50px;

}

input, #country{
  color: rgb(109, 109, 151);
  background-color: hsla(229, 13%, 26%, 0.05);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.1 px solid rgba(14, 66, 186, 0.355);
  width: 100%;
  height: 35px;
  margin-right: 25px;
  border-radius: 0px;
  font-size: 13px;
  outline: 0;
}

#update {
  width: 100%;
  color: white;
  border: none;
  background-color: #62e46af9;
  height: 40px;
}
#country{
  width: 100%;
}
</style>




<!-- width: 100%;
height:30px;
border-top:none;
border-right:none;
border-left: none;
border-bottom:rgb(46, 44, 73); -->
