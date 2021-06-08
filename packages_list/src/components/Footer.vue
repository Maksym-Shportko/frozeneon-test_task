<template>
  <section class="footer bg-light">
    <div class="container" v-if="getLastSeen">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center p-2">
            <strong>Your last seen:</strong>
          </div>
          <div class="d-flex justify-content-between">
            <p>
              Package name:
              <span>{{ getLastSeen.name }}</span>
            </p>
            <p>
              Package author:
              <span>{{ getLastSeen.owner.name }}</span>
            </p>
            <p>
              <a :href="getLastSeen.owner.link">Author Git-link</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(["getLastSeen"]),
  },
};
</script>

<style lang="scss"></style>
