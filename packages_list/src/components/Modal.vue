<template>
  <div
    class="modal fade show"
    id="exampleModalLive"
    tabindex="-1"
    aria-labelledby="exampleModalLiveLabel"
    aria-modal="true"
    role="dialog"
    style="display: block"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLiveLabel">
            Package name: {{ itemInformation.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click.prevent="$emit('closeModal')"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-8">
              <p>License: {{ itemInformation.license }}</p>
            </div>
            <div class="col-md-4">
              <span>Author: {{ itemInformation.owner.name }}</span>
              <img
                :src="itemInformation.owner.avatar"
                alt="owner avatar"
                class="img-fluid"
              />
              <a :href="itemInformation.owner.link">Author link</a>
            </div>
          </div>
          <div>
            <h5 class="text-center mt-3">Description</h5>
            <p v-html="itemInformation.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    itemInformation: Object,
  },
};
</script>

<style>
.modal {
  background: #0505068f;
}
</style>
