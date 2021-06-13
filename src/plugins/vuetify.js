import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#00BFFF",
                secondary: "#FFE4B5",
                custom: "#FFD700",
                header: "#3260A8"
            }
        }
    }
});
