<template>
  <div>
    <p>{{count}}</p>
    <input style="width: 400px;" type="text" v-model="text" placeholder="enter" />
    <br>
    <br>
    <select style="width:400px;" v-model="selected">
      <option v-for="a in options" :key="a">{{ a }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props : [
    {
      text: String,
      selected : String
    }
  ],
  name: "InputVue",
  data() {
    return {
      text: "",
      selected: "",
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
        "option5",
        "option6",
        "option7",
        "option8",
      ],
      count : 0,
    };
  },
};
</script>
<style scoped></style>
