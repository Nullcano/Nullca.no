import { initialBots } from '$lib/bots';

export async function load({ params }) {
  return {
    bot: await initialBots.filter((bot) => bot.category.toLowerCase() === params.slug),
		slug: await params.slug
  }
}