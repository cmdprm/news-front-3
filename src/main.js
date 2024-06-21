import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import axios from './plugins/axios';
import config from './config/config';
import 'animate.css';

const app = createApp(App);

async function fetchDomainInfo() {
    try {
        const domainName = window.location.hostname;
        const response = await axios.post('/get-domain', { domain: domainName });

        config.domainInfo = {
            domain: response.data.domain.domain,
            name: response.data.domain.name,
            site: response.data.domain.site
        };
    } catch (error) {
        console.error('Error fetching domain info:', error);
    }
}

const metaManager = createMetaManager();

fetchDomainInfo().then(() => {
    app.config.globalProperties.$domainInfo = config.domainInfo;
    app.use(router).use(metaManager).mount('#app');
});
