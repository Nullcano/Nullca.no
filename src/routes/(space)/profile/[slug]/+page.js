import { bots, selectedBot } from '$lib/bots';

export async function load({ params }) {
  bots.subscribe((data) => {
    const bot = data.find((b) => b.profileSlug === `/profile/${params.slug}`);
    selectedBot.set(bot);
  });

  return {
    bots,
    selectedBot,
  };
}