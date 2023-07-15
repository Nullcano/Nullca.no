export const categories = [
  {
    name: 'Notes',
    desc: 'Explore unscheduled articles covering a range of topics, including emerging technologies, site updates, and intriguing musings.'
  },
  {
    name: 'Apps',
    desc: 'A diverse collection of web applications, tools, and experiments that blend art and code, pushing the boundaries of user experiences.'
  },
  {
    name: 'UI-UX',
    desc: 'Discover prototypes, mock-ups, frameworks, and design kits that harmonize aesthetics and functionality, enhancing the digital experience.'
  },
  {
    name: 'Graphics',
    desc: 'Unveil a selection of graphics, including logos, icons, illustrations, and digital artwork, enriching digital identities and narratives.'
  },
  {
    name: 'Games',
    desc: 'Experience engaging clicker-based browser games with gameplay mechanics and intriguing narratives that captivate and entertain.'
  },
  {
    name: 'Bots',
    desc: 'Engage in dialogues and experiences with AI for assistance, information, entertainment and tailored experiences.'
  }
];

export const posts = [
  {
    slug: 'nullcano-logotypes',
    title: 'Nullcano Logotypes',
    description: 'Logotypes for Nullcano.',
    tags: ['graphics','logos','icons'],
    category: {
      name: 'Graphics',
      desc: 'Digital graphics, illustrations and other artwork created by Nullcano.'
    },
    featured: false,
    launchable: false,
    icon: 'logotypes-icon.png',
    image: 'logotypes.png',
    content: `
      <p>In the digital age, where brands strive for uniqueness and recognition, a well-designed and memorable logotype has become a vital element of successful branding. The Nullcano Logotype Collection is a portfolio showcase of my innovative and captivating logotypes, crafted with meticulous attention to detail and a deep understanding of brand identity.</p>
      <img src="/images/logotypes.png" alt="Nullcano Logotypes" />
      <p>Designed specifically for technology-focused applications, this logotype features a clean and futuristic typographic treatment. The choice of a monospace font communicates the brand's association with the tech industry, while the incorporation of circuit board-like patterns within the letterforms adds a distinct technological touch.</p>
    `
  }, {
    slug: 'nullcano',
    title: 'Nullcano',
    description: 'My personal website where I showcase my projects.',
    tags: ['web app','tool','info'],
    category: {
      name: 'Apps',
      desc: 'Web applications and experiments created by Nullcano.'
    },
    featured: false,
    launchable: false,
    icon: 'nullcano-icon.png',
    image: 'nullcano.png',
    content: `
      <p>My online alias, Nullcano, serves as both my digital identity and the foundation for my personal website. 
      I cleverly incorporated my Norwegian origins into my domain name, opting for the "nullca.no" domain hack.</p>

      <p>As you explore this website, you'll discover a collection of my projects, spanning from captivating illustrations to innovative applications and helpful tools.
      Drawing inspiration from the power of web-based tools, I fuse visually striking designs, interactive elements, and gamified experiences to create platforms that captivates and engages users.</p>

      <p>It is my hope that my personal website will evoke the same sense of fascination and captivation as my projects do.</p>
    `
  }, {
    slug: 'thebotever',
    title: 'TheBotEver',
    description: 'A socially awkward chat bot for Twitch.',
    tags: ['twitch', 'chat', 'bot'],
    category: {
      name: 'Bots',
      desc: 'Various AI and bots created by Nullcano.'
    },
    featured: true,
    launchable: false,
    icon: 'TheBotEver.png',
    image: 'TheBotEver.png',
    content: `
      <p>Meet TheBotEver, the socially awkward chat bot that's sure to entertain your viewers. It's like having your very own unpredictable AI that is trying to fit into your community, which could be a good thing or a bad thing - but hey, at least it's not boring.</p>
      <h2>Observes Messages and Generates Randomness</h2>
      <p>This bot's got a talent for remembering messages and mixing them up to create hilarious and thought-provoking responses. And with its random settings, you and your viewers will never know what it's going to say next. It's like a box of chocolates, you never know what you're going to get - but instead of chocolates, it's random and potentially suggestive chat messages based on your interpretation.</p>
      <p>TheBotEver comes equipped with a variety of preconfigured settings, or "seeds", that are randomly selected to guarantee that neither you nor your viewers can anticipate what will happen next. It's akin to having an unpredictable AI in your chat that can alternate between being witty and sensible or failing miserably, but regardless, it's certain to provide some level of entertainment for certain individuals.</p>
      <h2>Non-Intrusive yet Interactive</h2>
      <p>TheBotEver's not a chatterbox, so you won't have to worry about it taking over your chat. It'll only speak up when it's got something interesting or funny to say, and it won't require any extra effort from you. Who knows, TheBotEver might just become your viewers' new favorite chat companion. Or it might just get on their nerves. But either way, it's sure to liven things up in your stream.</p>
      <h2>Give it a Shot</h2>
      <p>If you're feeling adventurous and want to add some eccentricity to your chat, give TheBotEver a try. Just hit up Nullcano#0001 on Discord to get it set up. But beware - if you ban this little guy, you'll be banning Nullcano too. So maybe just use a timeout instead.</p>
    `
  }, {
    slug: 'tragic',
    title: 'Tragic',
    description: 'Tragic is a tracker for Magic The Gathering.',
    tags: ['magic the gathering', 'web app', 'tool'],
    category: {
      name: 'Apps',
      desc: 'Web applications and experiments created by Nullcano.'
    },
    featured: true,
    launchable: false,
    icon: 'Tragic.png',
    image: 'Tragic.png',
    content: `
      <p>Track your health, tokens, take notes and more.</p>
    `
  }, {
    slug: 'portalink',
    title: 'Portalink',
    description: 'Another Nether-to-Overworld portal calculator for Minecraft.',
    tags: ['minecraft', 'web app', 'tool'],
    category: {
      name: 'Apps',
      desc: 'Web applications and experiments created by Nullcano.'
    },
    featured: true,
    launchable: true,
    icon: 'portalink.png',
    image: 'portalink.png',
    content: `
      <p>Another Nether-to-Overworld portal calculator for Minecraft.</p>
    `
  }
]