import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {i18n} from './i18n';

Vue.use(Vuetify);


export default new Vuetify({
  theme: { themes: {
    light: {background: "#f5bb00" }}},
  lang: {
     t: (key, ...params) => i18n.t(key, params) as string,
  },
});
