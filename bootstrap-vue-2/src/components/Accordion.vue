<template>
  <div style="margin: auto; width: 800px">
    <h1 style="margin: auto">Hello you are in accordion</h1>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="item in headings" :key="item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            {{ item }}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <form>
              <div>
                <label>Subtitle</label>
                <input type="text" placeholder="subtitle" />
              </div>
              <div>
                <label>Course</label>
                <select>
                  <option v-for="item in courses" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AccordionPage",
  data() {
    return {
      headings: [
        "Hero Card",
        "Secondary Card",
        "Quote Card",
        "Breathe Card",
        "Practice Card",
      ],
      courses: ["course 1", "course 2", "course 3", "course 4"],
    };
  },
};
</script>
<style></style>
