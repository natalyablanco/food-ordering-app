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
      <v-card-text>
        <v-text-field label="Name"></v-text-field>
        <v-text-field label="Street name and number"></v-text-field>
        <v-text-field label="Post code"></v-text-field>
        <v-text-field label="Email"></v-text-field>
        <v-text-field label="Phone number"></v-text-field>
        <p class="text-h5 mt-2">Total cost: ${{ price }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn class="mx-auto mb-6" color="success">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
  computed: {
    price() {
      let totalPacks: number = 0;
      let totalCost: number = 0;
      this.fillings.forEach((filling) => {
        totalPacks += filling.counter;
      });
      totalCost = totalPacks * 7;
      if (totalCost % 3 == 0) {
        totalCost = totalCost - (totalPacks / 3);
      }
      return totalCost;
    },
  },
  methods: {
    decrease(filling: { counter: number }) {
      if (filling.counter === 0) {
      } else {
        filling.counter--;
      }
    },
  },
  data() {
    return {
      counter: 0,
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
      ],
    };
  },
});
</script>
