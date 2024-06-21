module.exports = {
    title: 'n4c´s Webpage',
    description: 'the official webpage for n4c´s projects (made on VuePress)',
    watch: {
	    $page(newPage, oldPage) {
	      if (newPage.key !== oldPage.key) {
	        requestAnimationFrame(() => {
	          if (this.$route.hash) {
	            const element = document.getElementById(this.$route.hash.slice(1));

	            if (element && element.scrollIntoView) {
	              element.scrollIntoView();
	            }
	          }
	        });
	      }
	    }
	  },
    themeConfig: {
        head: [
            ['meta', {
                name: 'theme-color',
                content: '#ffffff',
                media: '(prefers-color-scheme: light)'
            }],
            ['meta', {
                name: 'theme-color',
                content: '#25262b',
                media: '(prefers-color-scheme: dark)'
            }],
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Projects', link: '/projects/' },
            { text: 'My GitHub', link: 'https://github.com/nachocsp' },
            { text: 'GitHub for this page', link: 'https://github.com/nachocsp/nachocsp.github.io' }
        ],
        sidebar:{
            collapsable: true,
            '/projects/':[
                ''
            ]
        }
    },
    plugins: [
		['vuepress-plugin-code-copy', true],
		['flexsearch'],
                ['code-switcher'],
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
        {
        	selector: "img",
        	options: {
            	background: 'var(--bodyBgColor)'
            }
        }],
    ]
}
