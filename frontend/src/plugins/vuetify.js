import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00B7FF', // #00B7FF
        secondary: colors.cyan.lighten2, // #4DD0E1
        accent: colors.cyan.accent2, // #18FFFF
      },
      options: {
        customProperties: true,
      },
    },
  },
});
