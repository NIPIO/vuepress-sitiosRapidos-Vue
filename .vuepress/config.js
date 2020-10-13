module.exports = {
	title: 'Hello VuePress',
	description: 'Solo jugando',
	themeConfig: {
		nav: [
		  { text: 'Home', link: '/' },
		  { text: 'Guia', link: '/guia/' },
		  { text: 'VIDEO', link: 'https://www.youtube.com/watch?v=o334x1W_RDY&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=43' }
		],
		sidebar: {
			'/guia/': [
				'',
				'vuepress-guia.md'
			]
		}
	}
}