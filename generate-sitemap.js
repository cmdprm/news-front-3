const axios = require('axios');
const fs = require('fs');

const domain = process.argv[2];

const sitemapFilename = './dist/news-post-sitemap.xml';
// const sitemapFilename = './public/news-post-sitemap.xml';

// const backURL = 'http://127.0.0.1:8000/api';
const backURL = 'https://thewizardzhat.com/api';

async function fetchArticlesAndGenerateSitemap() {
    try {
        const domainResponse = await axios.post(backURL + '/get-domain', { domain: domain });
        const domainInfo = domainResponse.data.domain;

        const articlesResponse = await axios.post(backURL + '/get-news-site', { site: domainInfo.site });
        console.log('API Response:', articlesResponse.data);

        const articles = articlesResponse.data;

        if (!Array.isArray(articles)) {
            throw new Error('Expected articles to be an array');
        }

        let sitemapXML = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        articles.forEach((article) => {
            const articleUrl = `https://${domain}/${article.slug}`;
            const lastmod = formatDate(article.publication_date);
            sitemapXML += `<url>\n<loc>${articleUrl}</loc>\n<lastmod>${lastmod}</lastmod>\n<changefreq>daily</changefreq>\n<priority>0.8</priority>\n</url>\n`;
        });

        sitemapXML += '</urlset>';

        fs.writeFileSync(sitemapFilename, sitemapXML);

        console.log('Sitemap generation completed!');
    } catch (error) {
        console.error('Error fetching articles and generating sitemap:', error);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    return `${year}-${month}-${day}`;
}

fetchArticlesAndGenerateSitemap();
