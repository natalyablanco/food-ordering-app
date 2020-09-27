<template>
  <v-dialog v-model="dialog" width="600">
    <v-card>
      <v-card-title>
        {{ $t("summaryTitle") }}
      </v-card-title>
      <v-card-text> Dear {{ customer.name }}, this is your order:</v-card-text>
      <v-card-text class="mx-auto" max-width="600">
        <div class="d-flex" v-for="(order, index) in summary" :key="index">
          <v-card-text>{{ order.name }}</v-card-text>
          <v-card-text>{{ order.counter }} pack(s)</v-card-text>
        </div>
      </v-card-text>
      <v-card-text>
        To be deliver to the following address:
        {{ customer.address.street_number }},
        {{ customer.address.postcode }}</v-card-text
      >
      <v-card-text>
        The delivery day and time will be confirm through the number:
        {{ customer.number }}</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeDialog">
          Cancel
        </v-btn>
        <v-btn color="primary" text @click="closeDialog">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ConfirmationDialog",
  components: {},
  props: {
    dialog: {
      default: false,
    },
    customer: {},
    summary: {},
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
});
</script>
