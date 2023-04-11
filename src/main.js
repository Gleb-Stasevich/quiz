import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import directives from '@/directives';

const app = createApp(App);
directives.forEach(directive => app.directive(directive.name, directive));

app.use(router).use(store).mount('#app');
