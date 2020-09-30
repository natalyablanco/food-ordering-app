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
        <v-btn color="primary" text @click="sendFoodOrder">
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
    async sendFoodOrder(){
      try {

        let response = await fetch('https://www.google.com/url?q=https%3A%2F%2Fnorthamerica-northeast1-baby-alert-app.cloudfunctions.net%2Fsend-email', {
          method: 'post',
          mode: 'no-cors',
          body:  JSON.stringify({foodOrder: "my post"})
        })

        if (response.ok) { // if HTTP-status is 200-299
          // get the response body (the method explained below)
          let json = await response.json();
        } else {
          alert("HTTP-Error: " + response.status);
        }
      } catch (error) {
        
      }
    }
  },
});
</script>
