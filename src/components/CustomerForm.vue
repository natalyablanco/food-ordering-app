<<template>
<v-form v-model="valid">
  <v-card-text>
    <v-text-field required 
      :rules="nameRules"
      v-model="customer.name"
      :label="$t('nameLabel')" 
      @keyup="$emit('update:customer.name', customer.name)"
      ></v-text-field>
    <v-text-field
      required
      :rules="streetRules"
      v-model="customer.address.street_number"
      :label="$t('addressStreetLabel')"
      @keyup="$emit('update:customer.address.street_number', customer.address.street_number)"
    ></v-text-field>
    <v-text-field
      required
      :rules="postcodeRules"
      v-model="customer.address.postcode"
      :label="$t('addressPostcodeLabel')"
      @keyup="$emit('update:customer.address.postcode', customer.address.postcode)"
    ></v-text-field>
    <v-text-field 
      required 
      :rules="emailRules" 
      v-model="customer.email" 
      :label="$t('emailLabel')"
      @keyup="$emit('update:customer.email', customer.email)"
      ></v-text-field>
    <v-text-field 
      required 
      :rules="phoneRules" 
      v-model="customer.number" 
      :label="$t('phoneNumberLabel')"
      @keyup="$emit('update:customer.number', customer.number)"
      ></v-text-field>
  </v-card-text>
</v-form>
  
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CustomerForm",
  props: {
    customer: {},
  },
  methods: {
    validateForm() {
      (this.$refs.form as Vue & { validate: () => boolean }).validate();
    },
    reset() {
      (this.$refs.form as Vue & { reset: () => boolean }).reset();
    },
  },
  data() {
    return {
      valid: false,
      nameRules: [
        (v: string) => !!v || this.$t('errorNameRequired'),
      ],
      streetRules: [
        (v: string) => !!v || this.$t('errorAddressRequired'),
      ],
      postcodeRules: [
        (v: string) => !!v || this.$t('errorPostcodeRequired'),
      ],
      emailRules: [
        (v: string) => !!v || this.$t('errorEmailRequired'),
        (v: string) => /.+@.+\..+/.test(v) || this.$t('errorEmailInvalid'),
      ],
      phoneRules: [
        (v: string) => !!v || this.$t('errorPhoneRequired'),
        (v: string) => /^[0-9]+$/.test(v) || this.$t('errorPhoneInvalid'),
      ],
    }
  },
});
</script>
