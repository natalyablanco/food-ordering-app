<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Summary
      </v-card-title>
      <v-card-text> this is your order:</v-card-text>
      <v-card-text> {{ summary }}</v-card-text>
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
    summary: {},
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
});
</script>
