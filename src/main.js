import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { DefaultApolloClient } from '@vue/apollo-composable'
import ApolloClient from './ApllloClient.js'

library.add(fas,far,fab);

createApp(App)
.provide(DefaultApolloClient,ApolloClient)

.mount('#app')
