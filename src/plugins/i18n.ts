import Vue from "vue";
import VueI18n from "vue-i18n";
import Vuetify from "vuetify/lib";

Vue.use(VueI18n);

const messages = {
  en: {
    summaryTitle: "Summary",
    packtLabel: "pack(s)",
    nameLabel: "Name",
    addressStreetLabel: "Street and Number",
    addressPostcodeLabel: "Postcode",
    emailLabel: "Email",
    phoneNumberLabel: "Phone number",
    submitButtonLabel: "Submit order",
    totalCostLabel: "Total cost: ${0}",
    summaryFirstLineMessage: "Dear {name}, this is your order:",
    summarySecondLineMessage:
      "To be deliver to the following address: {addressStreet}, {addressPostcode}",
    summaryThirdLineMessage:
      "The delivery day and time will be confirm through the number: {number}",
    confirmButtonLabel: "Confirm",
    cancelButtonLabel: "Cancel",
  },
  es: {
    summaryTitle: "Resumen",
    packtLabel: "paquete(s)",
    nameLabel: "Nombre",
    addressStreetLabel: "Calle y número de casa",
    addressPostcodeLabel: "Código postal",
    emailLabel: "Correo eletrónico",
    phoneNumberLabel: "Número de teléfono",
    submitButtonLabel: "Enviar pedido",
    totalCostLabel: "Total a pagar: ${0}",
    summaryFirstLineMessage:
      "Estimada {name}, este es el resumen de tu pedido:",
    summarySecondLineMessage:
      "La entrega se realizará a la siguiente dirección: {addressStreet}, {addressPostcode}",
    summaryThirdLineMessage:
      "El día y la hora de entrega será confirmada al siguiente número: {number}",
    confirmButtonLabel: "Confirmar",
    cancelButtonLabel: "Cancelar",
  },
};

export const i18n = new VueI18n({
  locale: "es",
  fallbackLocale: "en",
  messages,
});
