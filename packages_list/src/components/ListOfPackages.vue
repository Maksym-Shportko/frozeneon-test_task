<template>
  <section class="packages-list">
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table" v-if="getData">
            <thead>
              <tr v-for="(item, index) in getData.hits" :key="index">
                <th scope="col"><span>Package name:</span> {{ item.name }}</th>
                <td
                  scope="col"
                  class="packages-list__item"
                  @click.prevent="getFullInformation(item)"
                  v-html="item.description"
                ></td>
              </tr>
            </thead>
          </table>
          <div class="packages-list__empty" v-else>
            <h1 class="text-center">Let's find something again...</h1>
          </div>
        </div>
      </div>
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
import { mapGetters } from "vuex";
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
    getFullInformation(item) {
      this.itemInformation = item;
      this.isModalActive = true;
    },
  },
};
</script>

<style lang="scss">
.packages-list {
  &__empty {
    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__item {
    cursor: pointer;
  }
}
</style>
