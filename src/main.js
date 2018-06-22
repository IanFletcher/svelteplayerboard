import App from './App.html';

const app = new App({
	target: document.querySelector('#playingfield'),
	data: {
		name: 'world',
		defenders: 4,
	},
});
