import { createApp } from 'vue'
import "bootstrap/js/dist/base-component"
import "bootstrap/js/dist/popover"
import "bootstrap/js/dist/dropdown"
import "bootstrap/js/dist/collapse"
/* toast
* @see https://github.com/Maronato/vue-toastification/tree/next*/
import toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'
//import custom css
import '../sass/main.scss' ;

const vm = createApp(App);

// Options for toastification
const options = {

};

vm.use(router);
vm.use(toast, options);
vm.mount('#app');

