<template>
  <div class="home">
    <v-card class="mx-auto" max-width="600">
      <div class="d-flex" v-for="(filling, index) in fillings" :key="index">
        <v-card-text>{{ filling.name }}</v-card-text>
        <v-card-text>{{ filling.counter }} pack(s)</v-card-text>
        <v-card-actions>
          <v-btn icon @click="decrease(filling)"
            ><v-icon>mdi-minus</v-icon></v-btn
          >
          <v-btn icon @click="filling.counter++"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </v-card-actions>
      </div>
      <CustomerForm :customer="customer" />
      <p class="text-h5 mt-2">Total cost: ${{ price }}</p>
      <v-card-actions>
        <v-btn
          class="mx-auto mb-6"
          color="success"
          @click.prevent="openConfirmation()"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
    <ConfirmationDialog
      :dialog="confirmData.dialog"
      :summary="confirmData.summary"
      @close-dialog="closeDialog"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
import CustomerForm from "@/components/CustomerForm.vue";

export default Vue.extend({
  name: "Home",
  components: { ConfirmationDialog, CustomerForm },
  computed: {
    price() {
      let totalPacks: number = 0;
      let totalCost: number = 0;
      this.fillings.forEach((filling) => {
        totalPacks += filling.counter;
      });
      totalCost = totalPacks * 7;
      totalCost = totalCost - totalPacks / 3;
      return Math.ceil(totalCost);
    },
  },
  methods: {
    decrease(filling: { counter: number }) {
      if (filling.counter === 0) {
      } else {
        filling.counter--;
      }
    },
    openConfirmation() {
      this.confirmData.dialog = true;
      this.confirmData.summary = this.customer;
    },
    closeDialog() {
      this.confirmData.dialog = false;
    },
  },
  data() {
    return {
      customer: {
        name: "",
        email: "",
        number: "",
        address: {
          street_number: "",
          postcode: "",
        },
      },
      fillings: [
        {
          name: "Carne Mechada",
          counter: 0,
        },
        {
          name: "Carne Molida",
          counter: 0,
        },
        {
          name: "Pollo",
          counter: 0,
        },
        {
          name: "Queso",
          counter: 0,
        },
        {
          name: "Cazón",
          counter: 0,
        },
      ],
      confirmData: {
        dialog: false,
        summary: {},
      },
    };
  },
});
</script>
