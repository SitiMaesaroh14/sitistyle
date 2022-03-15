<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Contact</h1>
        <peta />
      </div>
      <!-- form contact -->
      <FormContact />
    </div>
  </div>
</template>

<script>
import peta from "../components/peta.vue";
import FormContact from "../components/FormContact.vue";
export default {
  components: {
    peta,
    FormContact,
  },
};
</script>
