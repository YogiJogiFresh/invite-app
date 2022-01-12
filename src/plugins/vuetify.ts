import Vue from 'vue';
import Vuetify from 'vuetify';
import {colors} from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                primary: colors.blue.accent1,
                secondary: colors.purple.accent1,
                accent: colors.amber.accent1,
                error: colors.red.accent1,
                success: colors.green.accent3
            },
            dark: {
                primary: colors.blue.accent1,
                secondary: colors.purple.accent1,
                accent: colors.amber.accent1,
                error: colors.red.accent1,
                success: colors.green.accent3
            }
        }
    }
}

export default new Vuetify(opts);
