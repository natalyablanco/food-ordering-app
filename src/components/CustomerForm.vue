<<template>
  <v-card-text>
    <v-text-field v-model="customer.name" label="Name"></v-text-field>
    <v-text-field
      v-model="customer.address.street_number"
      label="Street name and number"
    ></v-text-field>
    <v-text-field
      v-model="customer.address.postcode"
      label="Post code"
    ></v-text-field>
    <v-text-field v-model="customer.email" label="Email"></v-text-field>
    <v-text-field v-model="customer.number" label="Phone number"></v-text-field>
  </v-card-text>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CustomerForm",
  props: {
    customer: {
      default: {},
    },
  },
});
</script>
