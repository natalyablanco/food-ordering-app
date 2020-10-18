<<template>
  <v-card-text>
    <v-text-field v-model="customer.name" :label="$t('nameLabel')"></v-text-field>
    <v-text-field
      v-model="customer.address.street_number"
      :label="$t('addressStreetLabel')"
    ></v-text-field>
    <v-text-field
      v-model="customer.address.postcode"
      :label="$t('addressPostcodeLabel')"
    ></v-text-field>
    <v-text-field v-model="customer.email" :label="$t('emailLabel')"></v-text-field>
    <v-text-field v-model="customer.number" :label="$t('phoneNumberLabel')"></v-text-field>
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
