// All GIFs — Giphy & Tenor
export const GIFS = {
  judge:     "https://media.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif",
  typing:    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  pleading:  "https://media.giphy.com/media/BEob5qhfT4devIF4kM/giphy.gif",
  crying:    "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
  objection: "https://media.giphy.com/media/w9t0aFMjahdxpKKvzN/giphy.gif",
  sad:       "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif",
  love:      "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
  happy:     "https://media.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif",
  celebrate: "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif",
  lawyer:    "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
  thinking:  "https://media.giphy.com/media/3oz8xZvvOZRmKay4xy/giphy.gif",
  waiting:   "https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif",
} as const;

export const COURT_DOCUMENT = `IN THE MATTER OF:
Nihar v. Ankita Didi — Case No. 143/2025

WHEREAS, the Plaintiff (Nihar) and the Defendant (Ankita Didi) have been talking for a while but have never actually met in person;

WHEREAS, this is frankly absurd and constitutes a breach of basic friendship obligations;

Pursuant to the rule in Carlill v Carbolic Smoke Ball Co [1893] — an offer, once communicated, must be honoured;

IT IS HEREBY ORDERED that both parties shall meet for coffee/food this Saturday to finally put a face to the texts.

Failure to appear may result in Nihar filing an unlimited number of sad cat memes in your DMs. You've been warned. 🐱`;

export const NO_STAGES = [
  { text: "Decline", gif: GIFS.pleading },
  { text: "Motion denied 🔨", gif: GIFS.objection },
  { text: "Filing an appeal...", gif: GIFS.crying },
  { text: "Contempt of court", gif: GIFS.sad },
  { text: "Invoking Article 143(b)", gif: GIFS.lawyer },
  { text: "Habeas corpus this 🥺", gif: GIFS.pleading },
  { text: "Res judicata says no", gif: GIFS.crying },
] as const;

export const OBJECTION_TEXTS = [
  "Objection noted and dismissed. See: Entores v Miles Far East [1955].",
  "The court notes the defendant's reluctance. Overruled.",
  "Estoppel applies. You can't go back now, Ankita Didi.",
] as const;

export const EVIDENCE_EXHIBITS = [
  {
    id: "B",
    title: "Food is on Nihar",
    subtitle: "Per the doctrine of unjust enrichment — free food is free food.",
    gif: "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif",
  },
  {
    id: "C",
    title: "Good conversation guaranteed",
    subtitle: "Pursuant to Hedley Byrne v Heller [1964] — Nihar accepts liability for a good time.",
    gif: "https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif",
  },
  {
    id: "D",
    title: "You pick the place",
    subtitle: "Freedom of choice — Article 9, ECHR. Your rights are fully protected.",
    gif: "https://media.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif",
  },
  {
    id: "E",
    title: "No awkward silences",
    subtitle: "No limitation period applies. See: Limitation Act 1980, s.2 (excluded). We literally never stop texting.",
    gif: "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
  },
  {
    id: "F",
    title: "Nihar is normal in person (allegedly)",
    subtitle: "Material representation under Misrepresentation Act 1967 — accuracy not guaranteed but likely.",
    gif: "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
  },
] as const;
