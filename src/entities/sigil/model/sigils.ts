export interface SigilItem {
  id: string;
  code: string;
  name: string;
  concept: string;
  imageSrc: string;
  description: string;
  aspect: "eagle" | "serpent" | "union" | "mountain" | "will";
}

export const SIGIL_ITEMS: SigilItem[] = [
  {
    id: "sigil-01",
    code: "SIGIL // 01",
    name: "AQUILA SOLIS",
    concept: "THE HIGHEST ASCENT",
    imageSrc: "/assets/graphics/sigil-1.png",
    description: "The winged will soaring above the dust of the valley, piercing the solar apex.",
    aspect: "eagle",
  },
  {
    id: "sigil-02",
    code: "SIGIL // 02",
    name: "OUROBOROS AXIS",
    concept: "ETERNAL RECURRENCE",
    imageSrc: "/assets/graphics/sigil-2.png",
    description: "The serpent coiled round its own genesis, affirming every second across infinite cycles.",
    aspect: "serpent",
  },
  {
    id: "sigil-03",
    code: "SIGIL // 03",
    name: "SPIRE OF SOLITUDE",
    concept: "THE COLD HEIGHTS",
    imageSrc: "/assets/graphics/sigil-3.png",
    description: "The silent granite peak where the solitary thinker breathes rarefied air.",
    aspect: "mountain",
  },
  {
    id: "sigil-04",
    code: "SIGIL // 04",
    name: "THORN OF CREATION",
    concept: "SELF-OVERCOMING",
    imageSrc: "/assets/graphics/sigil-4.png",
    description: "The barbed spine that destroys stale idols to clear ground for new tablets.",
    aspect: "will",
  },
  {
    id: "sigil-05",
    code: "SIGIL // 05",
    name: "COILED EMBRACE",
    concept: "UNION OF HEIGHT & EARTH",
    imageSrc: "/assets/graphics/sigil-5.png",
    description: "The eagle carrying the viper not as victim, but entwined in primordial kinship.",
    aspect: "union",
  },
  {
    id: "sigil-06",
    code: "SIGIL // 06",
    name: "BLACK SUN ECLIPSE",
    concept: "THE GREAT NOON",
    imageSrc: "/assets/atmosphere/mountain-1.png",
    description: "The moment when man stands at the midpoint of his course between animal and Overman.",
    aspect: "mountain",
  },
  {
    id: "sigil-07",
    code: "SIGIL // 07",
    name: "SERPENT'S INSTINCT",
    concept: "EARTH WISDOM",
    imageSrc: "/assets/graphics/snake-fragment-1.png",
    description: "Remaining true to the soil beneath, refusing transcendental deceptions.",
    aspect: "serpent",
  },
  {
    id: "sigil-08",
    code: "SIGIL // 08",
    name: "FEATHERED CREST",
    concept: "PRIDE OF THE SKY",
    imageSrc: "/assets/graphics/feather-1.png",
    description: "The plumage that withstands alpine storms without bending toward the herd.",
    aspect: "eagle",
  },
];
