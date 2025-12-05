/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import puppeteer from '@cloudflare/puppeteer';

const BOT_AGENTS = [
	'Googlebot',
	'Bingbot',
	'YandexBot',
	'Baiduspider',
	'Yahoo! Slurp',
	'DuckDuckBot',
	'Sogou Spider',
];

const isBot = (userAgent) => {
	return BOT_AGENTS.some(bot => bot.toLowerCase().includes(userAgent.toLowerCase()));
}

export default {
	async fetch(request, env, ctx) {
		const userAgent = request.headers.get('User-Agent') ?? '';

		if (isBot(userAgent)) {
			return new Response('Bot detected');
		} else {
			return new Response('Hello World!');
		}
	},
};
