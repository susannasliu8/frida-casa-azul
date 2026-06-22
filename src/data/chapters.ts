/**
 * Content for the Casa Azul narrative.
 *
 * Everything here is written in my own words — concise, poetic summaries of
 * Frida Kahlo's life, with placeholder artwork. Swap the `img` paths and edit
 * the prose freely; nothing in the components is hard-coded to this text.
 */

export type Card = {
  /** path under /public */
  img: string;
  /** alt text for the image (accessibility) */
  alt: string;
  /** kind, shown as a small tag on the front */
  kind: "Photograph" | "Painting" | "Portrait";
  /** short caption on the front of the card */
  caption: string;
  /** the title revealed on the back */
  storyTitle: string;
  /** the anecdote revealed when the card is turned */
  story: string;
};

export type Chapter = {
  id: string;
  /** small overline — place and year */
  eyebrow: string;
  title: string;
  /** a short, one-line wall caption for the room (kept brief on purpose) */
  lede?: string;
  /** one of her words, used as a pull-quote (optional) */
  quote?: string;
  cards: Card[];
};

export const intro = {
  title: "Casa Azul",
  subtitle: "A walk through the life of Frida Kahlo",
  blurb:
    "Step into the Blue House in Coyoacán, where she was born and where she died. " +
    "Cobalt walls, a courtyard full of sun, and a life painted from the inside out. " +
    "Turn each photograph to hear its story.",
};

export const chapters: Chapter[] = [
  {
    id: "coyoacan",
    eyebrow: "Coyoacán · 1907",
    title: "The Blue House",
    lede: "Where she was born, and where she would always return.",
    quote: "I paint flowers so they will not die.",
    cards: [
      {
        img: "/art/portrait-coyoacan.svg",
        alt: "Stylized portrait of a young girl with a flower crown against cobalt blue.",
        kind: "Photograph",
        caption: "Magdalena Carmen Frida, age six",
        storyTitle: "A house that was a country",
        story:
          "Her father Guillermo, a German photographer, kept his glass plates in the cool " +
          "rooms of the house he built around a courtyard. Frida grew up among lenses and " +
          "long exposures, learning early that a face could be made to hold still long " +
          "enough to keep forever.",
      },
      {
        img: "/art/portrait-polio.svg",
        alt: "Stylized portrait in garden greens of a child standing apart.",
        kind: "Photograph",
        caption: "The year of the limp",
        storyTitle: "Pata de palo",
        story:
          "At six, polio left her right leg thin and frail. Children called her 'Frida pata " +
          "de palo' — peg-leg Frida. Her father answered by sending her to play football, to " +
          "box, to swim, hiding the leg under long skirts she would one day make famous. Pain, " +
          "she was learning, could be worn like a dress.",
      },
    ],
  },
  {
    id: "accident",
    eyebrow: "Mexico City · 1925",
    title: "The Second Accident",
    lede: "The streetcar that broke her body and made her a painter.",
    quote: "I am not sick. I am broken. But I am happy to be alive as long as I can paint.",
    cards: [
      {
        img: "/art/painting-accident.svg",
        alt: "Abstract painting of a pierced red heart on a clay-red ground.",
        kind: "Painting",
        caption: "Gold dust on a broken body",
        storyTitle: "Thirty-two years of healing",
        story:
          "Her spine, collarbone, ribs, pelvis, and leg were shattered. What followed was a " +
          "lifetime of plaster corsets and some thirty operations. Confined to bed, she asked " +
          "for a mirror above her and a special easel across her lap. If she could not go out " +
          "into the world, the world would have to be painted from within.",
      },
    ],
  },
  {
    id: "mirror",
    eyebrow: "The bed · 1926",
    title: "Painting Herself",
    lede: "The one subject who never left the room.",
    cards: [
      {
        img: "/art/painting-mirror.svg",
        alt: "Stylized self-portrait in magenta with a flower crown.",
        kind: "Portrait",
        caption: "The first self-portrait",
        storyTitle: "A gift to win him back",
        story:
          "Her earliest self-portrait was a love letter — tender, Renaissance-cool, painted " +
          "to court a sweetheart. Soon the gaze hardened into something braver: a woman looking " +
          "straight out of the frame, refusing to look away from herself or from you.",
      },
      {
        img: "/art/painting-easel.svg",
        alt: "Abstract sun motif in golds and terracotta.",
        kind: "Painting",
        caption: "The easel above the bed",
        storyTitle: "A whole world, lying down",
        story:
          "Her mother had the carpenter build an easel that fit over the bed, and fixed a " +
          "mirror into the canopy. From that small architecture of survival came an entire body " +
          "of work — suns, monkeys, thorns, and her own unflinching face.",
      },
    ],
  },
  {
    id: "diego",
    eyebrow: "1929",
    title: "Frida and Diego",
    lede: "Two suns trying to share one sky.",
    quote: "There have been two great accidents in my life. One was the streetcar. The other was Diego.",
    cards: [
      {
        img: "/art/portrait-diego.svg",
        alt: "Stylized double-portrait motif in warm terracotta.",
        kind: "Photograph",
        caption: "The elephant and the dove",
        storyTitle: "Married twice, to each other",
        story:
          "They divorced in 1939, undone by his affairs and her own, and remarried a year " +
          "later on his birthday — on her terms this time, separate finances, separate studios " +
          "joined by a little bridge. She loved him, she said, more than her own skin.",
      },
    ],
  },
  {
    id: "gringolandia",
    eyebrow: "Detroit · 1932",
    title: "Gringolandia",
    lede: "North to a country of smokestacks, aching for home.",
    cards: [
      {
        img: "/art/painting-detroit.svg",
        alt: "Abstract painting of a divided heart on deep blue.",
        kind: "Painting",
        caption: "Henry Ford Hospital",
        storyTitle: "The grief she dared to paint",
        story:
          "In a Detroit hospital she lost a longed-for child. Out of that loss came 'Henry Ford " +
          "Hospital' — a small, shocking canvas of a woman bleeding on a metal bed, tethered to " +
          "the things she mourned. No one had painted miscarriage like this. She painted it anyway.",
      },
      {
        img: "/art/painting-henryford.svg",
        alt: "Abstract botanical vine motif in greens.",
        kind: "Painting",
        caption: "Roots reaching for home",
        storyTitle: "Between two worlds",
        story:
          "She stood, in one painting, on a pedestal at the border: cacti and Aztec sun on one " +
          "side, factories and flagpoles on the other, a Mexican flag small in her hand. America " +
          "dazzled her and chilled her. She wanted the dust of Coyoacán under her feet.",
      },
    ],
  },
  {
    id: "roots",
    eyebrow: "Mexico · 1930s–40s",
    title: "Roots and Revolution",
    lede: "She wore her country, and her politics, on her own body.",
    quote: "Feet, what do I need them for if I have wings to fly?",
    cards: [
      {
        img: "/art/portrait-tehuana.svg",
        alt: "Stylized Tehuana portrait in magenta with braided flowers.",
        kind: "Portrait",
        caption: "Dressed as Mexico",
        storyTitle: "A costume of conviction",
        story:
          "The Tehuana dress came from a matriarchal region she admired; in it she became both " +
          "icon and argument. A devoted communist, she once hosted the exiled Trotsky in the Blue " +
          "House. Beauty, for Frida, was never separate from belief.",
      },
      {
        img: "/art/painting-roots.svg",
        alt: "Abstract painting of vines rooting into the earth.",
        kind: "Painting",
        caption: "Roots",
        storyTitle: "Becoming the soil",
        story:
          "In 'Roots' she lies on cracked red earth and lets vines grow out of her open chest, " +
          "feeding the dry land with her own blood. To belong to a place, the painting says, is " +
          "to give yourself back to it.",
      },
    ],
  },
  {
    id: "column",
    eyebrow: "1944",
    title: "The Broken Column",
    lede: "She looked pain in the eye and painted what she saw.",
    cards: [
      {
        img: "/art/painting-column.svg",
        alt: "Abstract painting suggesting a fractured column among vines.",
        kind: "Painting",
        caption: "The Broken Column",
        storyTitle: "Nails and tears",
        story:
          "She painted her spine as a cracked Ionic column, her body bound in a surgical corset, " +
          "her skin studded with nails. Tears stand on her face — yet she does not weep so much " +
          "as stare. It is one of the bravest pictures of a body ever made.",
      },
    ],
  },
  {
    id: "vivalavida",
    eyebrow: "Coyoacán · 1954",
    title: "Viva la Vida",
    lede: "Her last word to the world was a blessing.",
    quote: "I hope the exit is joyful — and I hope never to return.",
    cards: [
      {
        img: "/art/painting-vivalavida.svg",
        alt: "Abstract sun and watermelon motif in reds and golds.",
        kind: "Painting",
        caption: "Viva la Vida",
        storyTitle: "Long live life",
        story:
          "Eight days before she died, she took up a brush one last time and painted ripe " +
          "watermelons, carving into the wet red flesh three words: VIVA LA VIDA. After everything " +
          "— the steel, the plaster, the grief — her final sentence to the world was a blessing.",
      },
    ],
  },
];
