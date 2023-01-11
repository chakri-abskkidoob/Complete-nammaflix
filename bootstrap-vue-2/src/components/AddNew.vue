<template>
  <div style="width: 400px; margin: auto">
    <div style="display: flex; justify-content: space-between">
      <button @click="clicked()">Add More</button>
      <button @click="save()">save</button>
    </div>
    <div v-for="a in count" :key="a" style="width: 500px; margin-top: 20px">
      <InputVue />
      <br />
    </div>
    <!-- <input
      style="width: 400px"
      type="text"
      v-model="text"
      placeholder="enter"
    />
    <br />
    <br />
    <select style="width: 400px" v-model="selected">
      <option v-for="a in options" :key="a">{{ a }}</option>
    </select>  -->
  </div>
</template>

<script>
import InputVue from "./Input.vue";
export default {
  name: "AddNew",
  components: {
    InputVue,
  },
  data() {
    return {
      count: 0,
      queue: [
      ],
    };
  },
  methods: {
    clicked() {
      this.count++;
    },
    save() {
     this.queue.push(this.$props);
    //  this.queue.forEach(a => {
    // alert(a.text)
    //  })
    alert(this.$props);
    },
  },
};
</script>

<style>
body {
  background-color: antiquewhite;
}
</style>
