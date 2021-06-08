<template>
  <section>
    <nav class="d-flex justify-content-center" v-if="getData">
      <ul class="pagination">
        <li
          class="page-item"
          v-for="(page, index) in getData.nbPages"
          :key="index"
          :class="{ active: getData.page === index }"
        >
          <a class="page-link" @click.prevent="goToPage(index)">
            {{ page }}
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Pagination",
  data: () => {
    return {
      pages: 0,
    };
  },
  methods: {
    ...mapActions(["getPackages"]),
    goToPage(page) {
      this.getPackages({ value: this.searchingValue, page, hitsPerPage: 10 });
    },
  },
  computed: {
    ...mapGetters(["getData", "searchingValue"]),
  },
};
</script>

<style lang="scss">
.pagination {
  min-height: 10rem;
  .page-link {
    cursor: pointer;
  }
  .page-item.active .page-link {
    pointer-events: none;
  }
}
</style>
