import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let storedClient = null;

export const client = writable(
  {
    name: 'Unknown Client',
    portrait: '1.png',
    coin: 0,
    currentXP: 0,
    neededXP: 100,
    level: 0,
    achievements: [
      {
        title: 'App Launcher',
        reward: 50,
        xp: 25,
        unlocked: false
      }
    ],
    activity: [],
    ignoreChatAnnouncement: false,
  }
);

client.subscribe(value => {
  if (browser) {
    localStorage.setItem('client', JSON.stringify(value));
  }
});

if (browser) {
  storedClient = localStorage.getItem('client');
}
if (storedClient) {
  client.set(JSON.parse(storedClient));
}