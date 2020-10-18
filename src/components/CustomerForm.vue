<<template>
<v-form v-model="valid">
  <v-card-text>
    <v-text-field required :rules="nameRules" v-model="customer.name" :label="$t('nameLabel')"></v-text-field>
    <v-text-field
      required
      :rules="streetRules"
      v-model="customer.address.street_number"
      :label="$t('addressStreetLabel')"
    ></v-text-field>
    <v-text-field
      required
      :rules="postcodeRules"
      v-model="customer.address.postcode"
      :label="$t('addressPostcodeLabel')"
    ></v-text-field>
    <v-text-field required :rules="emailRules" v-model="customer.email" :label="$t('emailLabel')"></v-text-field>
    <v-text-field required :rules="phoneRules" v-model="customer.number" :label="$t('phoneNumberLabel')"></v-text-field>
  </v-card-text>
</v-form>
  
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CustomerForm",
  data() {
    return {
      valid: false,
      nameRules: [
        (v: string) => !!v || 'Name is required',
      ],
      streetRules: [
        (v: string) => !!v || 'Street is required',
      ],
      postcodeRules: [
        (v: string) => !!v || 'Postal code is required',
      ],
      emailRules: [
        (v: string) => !!v || 'Email is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phoneRules: [
        (v: string) => !!v || 'Phone number is required',
        (v: string) => /^[0-9]+$/.test(v) || 'Phone number must be valid',
      ],
      customer: {
        name: "",
        email: "",
        number: "",
        address: {
          street_number: "",
          postcode: "",
        },
      },
    }
  },
});
</script>
