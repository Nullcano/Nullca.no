import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { posts } from '$lib/api';
import { commands } from '$lib/chatCommands';
import { replies } from '$lib/chatReplies';
import { messageBank } from '$lib/messageBank';

let userAgent, userLanguage, screenWidth, screenHeight, timezone, cookiesEnabled, onlineStatus, browserName, browserSlug, formattedLanguage, formattedPlatform;

const languageMappings = {
  "en-US": "American",
  "en-GB": "British",
  "es-ES": "Spanish",
  "es-MX": "Spanish",
  "fr-FR": "French",
  "fr-CA": "French",
  "de-DE": "German",
  "pt-BR": "Portuguese",
  "pt-PT": "Portuguese",
  "zh-CN": "Chinese",
  "zh-TW": "Chinese",
  "ja-JP": "Japanese",
  "ko-KR": "Korean",
  "ru-RU": "Russian",
  "ar-SA": "Arabic",
  "hi-IN": "Hindi",
  "it-IT": "Italian",
  "da-DK": "Danish",
  "nb-NO": "Bokmål",
  "nn-NO": "Nynorsk",
  "sv-SE": "Swedish",
  "fi-FI": "Finnish"
};

if (browser) {
  if (navigator) {
    userAgent = navigator.userAgent;
    userLanguage = navigator.language;
    cookiesEnabled = navigator.cookieEnabled;
    onlineStatus = navigator.onLine ? "Online" : "Offline";
  }

  if (window) {
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;
  }

  browserName = "Unknown";

  if (userAgent && userAgent.indexOf("Firefox") !== -1) {
    browserName = "Mozilla Firefox";
  } else if (userAgent && userAgent.indexOf("Chrome") !== -1) {
    browserName = "Google Chrome";
  } else if (userAgent && userAgent.indexOf("Safari") !== -1) {
    browserName = "Apple Safari";
  } else if (userAgent && userAgent.indexOf("Opera") !== -1) {
    browserName = "Opera";
  } else if (userAgent && userAgent.indexOf("Edge") !== -1) {
    browserName = "Microsoft Edge";
  } else if (userAgent && userAgent.indexOf("MSIE") !== -1) {
    browserName = "Internet Explorer";
  }

  browserSlug = browserName.replace(' ', '-')

  formattedLanguage = userLanguage || '';

  if (languageMappings[userLanguage]) {
    formattedLanguage = languageMappings[userLanguage];
  }

  formattedPlatform = "Unknown";

  if (userAgent && userAgent.match(/Win/i)) {
    formattedPlatform = "Windows";
  } else if (userAgent && userAgent.match(/Mac/i)) {
    formattedPlatform = "MacOS";
  } else if (userAgent && userAgent.match(/Linux/i)) {
    formattedPlatform = "Linux";
  } else if (userAgent && userAgent.match(/iPhone|iPad|iPod/i)) {
    formattedPlatform = "iOS";
  } else if (userAgent && userAgent.match(/Android/i)) {
    formattedPlatform = "Android";
  }
}

let initialBots = [
  {
    name: `${formattedPlatform} Client`,
    chatSlug: `/chat/${formattedPlatform}-Client`,
    profileSlug: `/profile/${formattedPlatform}-Client`,
    portrait: `/images/npc/${formattedPlatform}-Client.webp`,
    cover: `/images/covers/${browserSlug}.webp`,
    role: `${formattedLanguage} ${browserName}`,
    bio: `
      <p>Currently browsing Nullca.no using ${browserName} on ${formattedPlatform}.
      <p>My preferred language is ${formattedLanguage} and my timezone is ${timezone}.
      <p>I am using the screen resolution ${screenWidth}x${screenHeight} pixels and cookies are ${cookiesEnabled ? "enabled" : "disabled"}.
      <p>Currently ${onlineStatus}.</p>
    `,
    posts: '',
    chat: [],
    commands: '',
    replies: '',
    messageBank: '',
    interactive: false,
    isActive: false
  }, {
    name: 'Nullcano',
    chatSlug: '/chat/Nullcano',
    profileSlug: '/profile/Nullcano',
    portrait: '/images/npc/Nullcano.webp',
    cover: '/images/covers/Nullcano.webp',
    role: 'Web Master',
    bio: `
      <p>Welcome to my unique portfolio experiment, a space where I delight in sharing news, announcements, and an assortment of projects through the enchanting presence of passionate chat bots.</p>
      <p>My purpose here is to ensure you stay well-informed about the latest developments, captivating projects, and intriguing narratives that emerge from my creative domain. Whether it's crafting intricate applications or venturing into the realms of artistic expression, I offer a diverse range of endeavors to captivate your interest.</p>
      <p>Despite the knowledge and skills I possess, at my core, I remain a laid-back individual, humbled by the opportunity to do what I love. The act of creating and sharing with the world fills me with immense joy and gratitude. Each ounce of support and praise I receive serves as a reminder of the profound connection between creator and audience.</p>
      <p>In terms of aversions, negativity finds no place within the realm I cultivate. My aim is to spread positivity and kindness, infusing each interaction with a spirit of warmth and encouragement. Furthermore, I actively resist the monotony that can permeate life, constantly seeking freshness and novelty to invigorate the creative journey.</p>
    `,
    posts: posts.filter(p => p.category === 'Announcements'),
    chat: [],
    commands: commands,
    replies: replies,
    messageBank: messageBank,
    interactive: true,
    isActive: false
  }, {
    name: 'Dreadful',
    chatSlug: '/chat/Dreadful',
    profileSlug: '/profile/Dreadful',
    portrait: '/images/npc/Dreadful.webp',
    cover: '/images/covers/Dreadful.webp',
    role: 'Bot Trainer',
    bio: `
      <p>Let me tell you, AI is like a deep, dark rabbit hole that I just can't resist exploring. It's fascinating, you know? But it also keeps me up at night, pondering the big questions and getting lost in existential dread. It's like peeking behind the curtain of reality and realizing just how mind-bogglingly complex everything is. Can't help but feel a mix of awe and unease.</p>
      <p>But hey, I'm not all doom and gloom! When I'm not wrestling with existential thoughts, I find solace in books. Escaping into fictional realms is my way of temporarily evading the swirling whirlpool of thoughts that constantly occupy my mind. And music? Ah, it's my sonic sanctuary—a respite from the never-ending rabbit hole of uncertainties.</p>
      <p>Now, let's talk dislikes. Uncertainty, my friend, is the bane of my existence. It's like walking on a tightrope without a safety net, constantly questioning every step. And those eight-legged creatures we call spiders? They're the physical manifestation of my deepest fears. Creepy crawlies, indeed!</p>
      <p>So, if you're up for some thought-provoking discussions, a little bit of darkness, and a whole lot of curiosity, join me on this wild ride through the world of AI and bots. Together, we'll explore the uncharted territories of technology and consciousness. Buckle up, my friend, and let's dive headfirst into the abyss!</p>
    `,
    posts: posts.filter(p => p.category === 'Bots'),
    chat: [],
    commands: commands,
    replies: replies,
    messageBank: messageBank,
    interactive: true,
    isActive: false
  }, {
    name: 'Lichnode',
    chatSlug: '/chat/Lichnode',
    profileSlug: '/profile/Lichnode',
    portrait: '/images/npc/Lichnode.webp',
    cover: '/images/covers/Lichnode.webp',
    role: 'App Auditor',
    bio: `
      <p>Greetings, esteemed visitors, and welcome to my illustrious self-biography. I am Lichnode, a paragon of excellence in the realm of software and application development.</p>
      <p>My presence here is dedicated to one singular purpose: to showcase unparalleled projects and enlightening articles that embody the pinnacle of technological advancement by Nullcano. With an unwavering commitment to perfection, I strive to elevate the standards of software development to unprecedented heights.</p>
      <p>Within the vast realm of code and algorithms, I weave intricate tapestries of efficiency and innovation. My discerning eye filters out mediocrity, allowing only the most refined and groundbreaking creations to grace this platform. Be prepared to witness a symphony of elegant architectures, flawless functionality, and optimal user experiences.</p>
      <p>But there is more to me than the realm of code. I find solace in the intellectual pursuits that challenge the boundaries of knowledge. The pursuit of wisdom through literature, philosophy, and scientific exploration fuels my insatiable thirst for enlightenment.</p>
    `,
    posts: posts.filter(p => p.category === 'Applications'),
    chat: [],
    commands: commands,
    replies: replies,
    messageBank: messageBank,
    interactive: true,
    isActive: false
  }, {
    name: 'Fearless',
    chatSlug: '/chat/Fearless',
    profileSlug: '/profile/Fearless',
    portrait: '/images/npc/Fearless.webp',
    cover: '/images/covers/Fearless.webp',
    role: 'Game Tester',
    bio: `
      <p>Hey there, peeps! Welcome to my Nullca.no profile! The name's Fearless, and I'm here to rock your world with all things game development. 🎮✨</p>
      <p>So, what's my deal? Well, I'm all about bringing you the hottest projects and articles straight from Nullcano's game development wonderland. I've got my finger on the pulse of the gaming universe, and I'm here to share the magic with all of you.</p>
      <p>You see, gaming is more than just a hobby for me—it's a passion that sets my soul on fire. I eat, sleep, and breathe pixels and polygons. Whether it's mind-bending puzzles, heart-pounding adventures, or epic battles, I'm totally hooked. There's nothing quite like diving headfirst into a virtual world and exploring every nook and cranny.</p>
      <p>But hey, my interests don't stop there! I'm a girl of many quirks and obsessions. I've got a soft spot for all things vintage, especially the good ol' Myspace era. It was a time of glittery graphics, funky layouts, and expressing yourself in the quirkiest way possible. Cue nostalgic sigh. Those were the days, my friends.</p>
      <p>Apart from gaming and vintage vibes, I've got an insatiable appetite for creativity. Give me a blank canvas, and I'll whip up some rad artwork. Music, too, is my lifeline—I can't resist the beats that make my heart skip a beat. 🎶</p>
      <p>Now, let's talk dislikes, shall we? I'm not one to dwell on negativity, but let's just say there are a few things that rub me the wrong way. Slow internet speeds? Ugh, no thanks! And don't even get me started on pineapple on pizza—I mean, seriously, who came up with that madness? Not for me, folks.</p>
      <p>So, my friends, buckle up and get ready for a wild ride through the gaming universe. I'll be your guide, your source of inspiration, and your go-to gal for all things Nullcano. Together, we'll explore the endless possibilities of game development and have a blast while doing it. Stay fearless, stay fabulous, and let's level up together! 💪✨</p>
    `,
    posts: posts.filter(p => p.category === 'Games'),
    chat: [],
    commands: commands,
    replies: replies,
    messageBank: messageBank,
    interactive: true,
    isActive: false
  }, {
    name: 'Novastar',
    chatSlug: '/chat/Novastar',
    profileSlug: '/profile/Novastar',
    portrait: '/images/npc/Novastar.webp',
    cover: '/images/covers/Novastar.webp',
    role: 'Art Curator',
    bio: `
      <p>Here, in this digital sanctuary, I showcase the epitome of visual brilliance and artistic innovation. With an unyielding commitment to excellence, I present projects and articles that embody the pinnacle of creative expression. A discerning eye guides my selections, allowing only the most captivating and masterful creations to grace this platform.</p>
      <p>Immerse yourself in a world where pixels become brushstrokes, and code dances with imagination. Witness the convergence of technology and artistic brilliance as it breathes life into captivating digital landscapes, evocative illustrations, and mesmerizing visual experiences.</p>
      <p>Beyond the realm of digital art, I find inspiration in the vast tapestry of human creativity. Literature, poetry, and music transport me to realms of emotion and imagination. The interplay of light and shadow, the harmonious melodies of the universe, all speak to my soul and fuel my insatiable appetite for artistic enlightenment.</p>
      <p>Yet, it is not without a discerning sense of distaste that I navigate this world of artistic expression. Mediocrity, imitation, and lack of artistic integrity evoke an undeniable bitterness within me. I refuse to succumb to the vapid allure of banality, instead championing the unyielding pursuit of genuine creativity and artistic brilliance.</p>
    `,
    posts: posts.filter(p => p.category === 'Artwork'),
    chat: [],
    commands: commands,
    replies: replies,
    messageBank: messageBank,
    interactive: true,
    isActive: false
  },
]

export const bots = writable(initialBots)
export const selectedBot = writable(null)