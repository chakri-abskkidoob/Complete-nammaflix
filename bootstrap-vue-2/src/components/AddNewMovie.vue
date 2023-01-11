<template>
  <div>
    <HeaderDefaultVue />
    <h1 id="h">Add new movie</h1>
    <div id="form" class="margin-auto">
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group class="i" id="example-input-group-1" label="Firstname:" label-for="example-input-1">
          <b-form-input id="example-input-1" name="example-input-1" v-model="form.firstName"
            placeholder="Enter first name" v-validate="{ required: true, min: 3 }"
            :state="validateState('example-input-1')" aria-describedby="input-1-live-feedback" data-vv-as="firstName">
          </b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('example-input-1') }}
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="i" id="example-input-group-3" label="Lastname:" label-for="example-input-3">
          <b-form-input id="example-input-3" name="example-input-3" v-model="form.lastName"
            placeholder="Enter last name" v-validate="{ required: true, min: 3 }"
            :state="validateState('example-input-3')" aria-describedby="input-3-live-feedback" data-vv-as="lastName">
          </b-form-input>

          <b-form-invalid-feedback id="input-3-live-feedback">{{ veeErrors.first('example-input-3') }}
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="i" id="example-input-group-4" label="Username:" label-for="example-input-4">
          <b-form-input id="example-input-4" name="example-input-4" v-model="form.userName"
            placeholder="Enter user name" v-validate="{ required: true, min: 5 }"
            :state="validateState('example-input-4')" aria-describedby="input-4-live-feedback" data-vv-as="userName">
          </b-form-input>

          <b-form-invalid-feedback id="input-4-live-feedback">{{ veeErrors.first('example-input-4') }}
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="i" id="example-input-group-5" label="Password:"  label-for="example-input-5">
          <b-form-input id="example-input-5" name="example-input-5" type="password" v-model="form.password"
            placeholder="Enter password" v-validate="{ required: true, min: 8 }"
            :state="validateState('example-input-5')" aria-describedby="input-5-live-feedback" data-vv-as="password">
          </b-form-input>

          <b-form-invalid-feedback id="input-5-live-feedback">{{ veeErrors.first('example-input-5') }}
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group class="i" id="example-input-group-6" label="Email:" label-for="example-input-6">
          <b-form-input id="example-input-6" name="example-input-6" v-model="form.email" placeholder="Enter email"
            v-validate="{ required: true, email }" :state="validateState('example-input-6')"
            aria-describedby="input-6-live-feedback" data-vv-as="email">
          </b-form-input>

          <b-form-invalid-feedback id="input-6-live-feedback">{{ veeErrors.first('example-input-6') }}
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="example-input-group-7" label="Upload Image" label-for="example-input-7">
          <b-form-input id="example-input-7" name="example-input-7" type="file" v-model="form.file"
            v-validate="{ required: true, min:1}" :state="validateState('example-input-7')"
            aria-describedby="input-7-live-feedback" data-vv-as="file">
          </b-form-input>

          <b-form-invalid-feedback id="input-7-live-feedback">{{ veeErrors.first('example-input-7') }}
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- <b-form-group id="example-input-group-2" label="Country" label-for="example-input-2">
          <b-form-select id="example-input-2" name="example-input-2" v-model="form.country" v-validate="{ required: true }"
            :options="countries" :state="validateState('example-input-2')" aria-describedby="input-2-live-feedback"
            data-vv-as="Food"></b-form-select>

          <b-form-invalid-feedback id="input-2-live-feedback">{{ veeErrors.first('example-input-2') }}
          </b-form-invalid-feedback>
        </b-form-group> -->

        <div id="btn">
          <b-button type="submit" style="width:50%; border-radius:0px" variant="primary">Submit</b-button>
          <b-button class="ml-2" style="width: 50%; border-radius:0px" @click="resetForm()">Reset</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>



<script>
import HeaderDefaultVue from './HeaderDefault.vue';

export default {
  name: "AddNewMovie",
  components: {
    HeaderDefaultVue
  },
  data() {
    return {
      foods: [
        { value: null, text: "Choose..." },
        { value: "apple", text: "Apple" },
        { value: "orange", text: "Orange" }
      ],
      form: {
        firstName: null,
        lastName: null,
        food: null
      }
    };
  },
  methods: {
    validateState(ref) {
      if (this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    resetForm() {
      this.form = {
        firstName: null,
        lastName: null,
        food: null
      };
      this.$nextTick(() => {
        this.$validator.reset();
      });
    },
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        alert("Form submitted!");
      });
    }
  },
};
</script>

<style>
body {
  padding: 1rem;
}

#form {
  width: 30%;
  margin: auto;
  box-shadow: 0 0px 15px hsl(193, 94%, 20%);
  padding:10px;
  background-color: #FFF;
}

.i {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
#btn{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
#h{
  text-align:center;
}
</style>