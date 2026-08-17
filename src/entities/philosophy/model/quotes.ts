export interface PhilosophicalPath {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  quote: string;
  source: string;
  annotation: string;
  extendedText: string[];
}

export const PHILOSOPHICAL_PATHS: PhilosophicalPath[] = [
  {
    id: "overcome-yourself",
    number: "01",
    title: "OVERCOME",
    subtitle: "YOURSELF",
    quote: "Man is a rope stretched between the animal and the Overman—a rope over an abyss.",
    source: "THUS SPOKE ZARATHUSTRA",
    annotation: "PROLOGUE § 4",
    extendedText: [
      "I love those who do not know how to live, except by going under, for they are those who cross over.",
      "I love the great despisers, because they are the great reverers and arrows of longing for the other shore.",
      "What is great in man is that he is a bridge and not an end: what can be loved in man is that he is an overture and a going under.",
    ],
  },
  {
    id: "create-values",
    number: "02",
    title: "CREATE",
    subtitle: "YOUR VALUES",
    quote: "You must be ready to burn yourself in your own flame: how could you become new if you have not first become ashes?",
    source: "THUS SPOKE ZARATHUSTRA",
    annotation: "ON THE WAY OF THE CREATOR",
    extendedText: [
      "Can you give yourself your own evil and your own good and hang your will above yourself like a law?",
      "Terrible is the solitude of the creator. But if you want to be a star, you must not shine less for that.",
      "The creator seeks companions, not corpses, nor herds and believers. The creator seeks fellow creators, those who grave new values on new tablets.",
    ],
  },
  {
    id: "eternal-return",
    number: "03",
    title: "ETERNAL",
    subtitle: "RETURN",
    quote: "This life as you now live it and have lived it, you will have to live once more and innumerable times more.",
    source: "THE GAY SCIENCE",
    annotation: "APHORISM 341",
    extendedText: [
      "The eternal hourglass of existence is turned upside down again and again, and you with it, speck of dust!",
      "Would you not throw yourself down and gnash your teeth and curse the demon who spoke thus?",
      "Or have you once experienced a tremendous moment when you would have answered him: 'You are a god and never have I heard anything more divine.'",
    ],
  },
];

export interface ZarathustraReading {
  title: string;
  subtitle: string;
  source: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const ZARATHUSTRA_READINGS: Record<string, ZarathustraReading> = {
  overman: {
    title: "ON THE OVERMAN & THE HIGHER WILL",
    subtitle: "Zarathustra's Prologue & The Eagle's Ascent",
    source: "Thus Spoke Zarathustra (1883)",
    sections: [
      {
        heading: "I. The Beasts of Zarathustra",
        paragraphs: [
          "When Zarathustra was thirty years old, he left his home and the lake of his home, and went into the mountains. There he enjoyed his spirit and solitude, and for ten years did not weary of it.",
          "And behold! An eagle flew through the air in wide circles, and on it hung a serpent, not like a prey, but like a friend: for it kept itself coiled round the eagle's neck.",
          "'They are my animals!' said Zarathustra, and rejoiced in his heart. 'The proudest animal under the sun, and the wisest animal under the sun—they have come out to reconnoiter.'",
        ],
      },
      {
        heading: "II. The Bridge to the Heights",
        paragraphs: [
          "I teach you the Overman. Man is something that shall be overcome. What have you done to overcome him?",
          "All beings so far have created something beyond themselves: and do you want to be the ebb of that great tide, and would rather go back to the beast than overcome man?",
          "The Overman is the meaning of the earth. Let your will say: the Overman shall be the meaning of the earth! I beseech you, my brethren, remain true to the earth, and believe not those who speak unto you of superterrestrial hopes!",
        ],
      },
      {
        heading: "III. The Three Metamorphoses",
        paragraphs: [
          "Three metamorphoses of the spirit do I designate unto you: how the spirit becomes a camel, the camel a lion, and the lion at last a child.",
          "What is difficult? so asks the load-bearing spirit; then kneeleth it down like the camel, and wanteth to be well laden.",
          "To create new values—that, even the lion cannot yet accomplish: but to create itself freedom for new creating—for that the might of the lion is needed.",
          "Innocence is the child, and forgetfulness, a new beginning, a game, a self-rolling wheel, a first movement, a holy Yea.",
        ],
      },
    ],
  },
};
