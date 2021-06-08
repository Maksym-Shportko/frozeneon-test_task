<template>
  <section class="header">
    <div class="container">
      <h1 class="text-center">Get search</h1>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control my-4"
            placeholder="package name..."
            @input="findPackageHandler"
            v-model="inputValue"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data: () => {
    return {
      inputValue: "",
    };
  },
  methods: {
    ...mapActions(["getPackages"]),

    findPackageHandler() {
      this.getPackages({ value: this.inputValue, page: 0, hitsPerPage: 10 });
    },
  },
};
</script>

<style>
.header {
  background-color: #90d8725e;
}
</style>
