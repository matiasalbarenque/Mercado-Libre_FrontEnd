import Vue from 'vue';

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import es from 'vee-validate/dist/locale/es.json';
import { required, min } from 'vee-validate/dist/rules';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

extend('required', { ...required, message: es.messages.required });
extend('min', { ...min, message: es.messages.min });
