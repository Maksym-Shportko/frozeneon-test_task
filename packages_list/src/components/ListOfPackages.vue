<template>
  <section class="packages-list">
    <div class="container" v-if="getData">
      <div class="d-flex justify-content-between">
        <div class="col-md-2 p-2">
          <strong>Package name:</strong>
        </div>
        <div class="col-md-10 p-2">
          <strong>Description:</strong>
        </div>
      </div>
      <div
        class="row p-2 packages-list__item"
        v-for="(item, index) in getData.hits"
        :key="index"
      >
        <div class="col-md-2">
          {{ item.name }}
        </div>
        <div
          class="col-md-10"
          v-html="item.description"
          @click.prevent="getFullInformation(item)"
        />
        <hr />
      </div>
    </div>

    <div class="packages-list__empty" v-else>
      <h1 class="text-center">Let's find something...</h1>
    </div>

    <div v-if="isModalActive">
      <Modal
        :itemInformation="itemInformation"
        @closeModal="isModalActive = false"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Modal from "@/components/Modal";
export default {
  name: "ListOfPackages",
  components: { Modal },
  data: () => {
    return {
      itemInformation: null,
      isModalActive: false,
    };
  },
  computed: {
    ...mapGetters(["getData"]),
  },
  methods: {
    ...mapActions(["addLastSeen"]),
    getFullInformation(item) {
      this.itemInformation = item;
      this.addLastSeen(item);
      this.isModalActive = true;
    },
  },
};
</script>

<style lang="scss">
.packages-list {
  padding-top: 2rem;
  &__empty {
    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__item {
    cursor: pointer;
    &:hover {
      transform: translate(-10px, 0px);
    }
  }
}
</style>
