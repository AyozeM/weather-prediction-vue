import Vue from 'vue';
import Vuei18n from 'vue-i18n';
import messagesEs from './es';
import messagesEn from './en';

Vue.use(Vuei18n);

const messages = {
    ...messagesEn,
    ...messagesEs
}

export const i18n = new Vuei18n({
    locale:'en',
    messages
});