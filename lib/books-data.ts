export interface Book {
  id: string
  title: string
  series: string
  year: number
}

export const novels: Book[] = [
  { id: "1", title: "Elantris", series: "Elantris", year: 2005 },
  { id: "2", title: "The Final Empire", series: "Mistborn Era 1", year: 2006 },
  { id: "3", title: "The Well of Ascension", series: "Mistborn Era 1", year: 2007 },
  { id: "4", title: "The Hero of Ages", series: "Mistborn Era 1", year: 2008 },
  { id: "5", title: "Warbreaker", series: "Warbreaker", year: 2009 },
  { id: "6", title: "The Way of Kings", series: "Stormlight Archive", year: 2010 },
  { id: "7", title: "The Alloy of Law", series: "Mistborn Era 2", year: 2011 },
  { id: "8", title: "The Emperor's Soul", series: "Elantris", year: 2012 },
  { id: "9", title: "Words of Radiance", series: "Stormlight Archive", year: 2014 },
  { id: "10", title: "Shadows of Self", series: "Mistborn Era 2", year: 2015 },
  { id: "11", title: "The Bands of Mourning", series: "Mistborn Era 2", year: 2016 },
  { id: "12", title: "Arcanum Unbounded", series: "Cosmere Collection", year: 2016 },
  { id: "13", title: "Oathbringer", series: "Stormlight Archive", year: 2017 },
  { id: "14", title: "Skyward", series: "Skyward", year: 2018 },
  { id: "15", title: "Starsight", series: "Skyward", year: 2019 },
  { id: "16", title: "Dawnshard", series: "Stormlight Archive", year: 2020 },
  { id: "17", title: "Rhythm of War", series: "Stormlight Archive", year: 2020 },
  { id: "18", title: "Cytonic", series: "Skyward", year: 2021 },
  { id: "19", title: "Tress of the Emerald Sea", series: "Secret Projects", year: 2023 },
  { id: "20", title: "The Frugal Wizard's Handbook", series: "Secret Projects", year: 2023 },
  { id: "21", title: "Yumi and the Nightmare Painter", series: "Secret Projects", year: 2023 },
  { id: "22", title: "The Sunlit Man", series: "Secret Projects", year: 2023 },
  { id: "23", title: "Wind and Truth", series: "Stormlight Archive", year: 2024 },
]

export const books = novels

export const cosmereBooks: Book[] = [
  { id: "c1", title: "Elantris", series: "Elantris", year: 2005 },
  { id: "c2", title: "The Final Empire", series: "Mistborn Era 1", year: 2006 },
  { id: "c3", title: "The Well of Ascension", series: "Mistborn Era 1", year: 2007 },
  { id: "c4", title: "The Hero of Ages", series: "Mistborn Era 1", year: 2008 },
  { id: "c5", title: "Warbreaker", series: "Warbreaker", year: 2009 },
  { id: "c6", title: "The Way of Kings", series: "Stormlight Archive", year: 2010 },
  { id: "c7", title: "The Alloy of Law", series: "Mistborn Era 2", year: 2011 },
  { id: "c8", title: "The Emperor's Soul", series: "Elantris", year: 2012 },
  { id: "c9", title: "Words of Radiance", series: "Stormlight Archive", year: 2014 },
  { id: "c10", title: "Shadows of Self", series: "Mistborn Era 2", year: 2015 },
  { id: "c11", title: "The Bands of Mourning", series: "Mistborn Era 2", year: 2016 },
  { id: "c12", title: "Arcanum Unbounded", series: "Cosmere Collection", year: 2016 },
  { id: "c13", title: "Oathbringer", series: "Stormlight Archive", year: 2017 },
  { id: "c14", title: "Dawnshard", series: "Stormlight Archive", year: 2020 },
  { id: "c15", title: "Rhythm of War", series: "Stormlight Archive", year: 2020 },
  { id: "c16", title: "Tress of the Emerald Sea", series: "Secret Projects", year: 2023 },
  { id: "c17", title: "Yumi and the Nightmare Painter", series: "Secret Projects", year: 2023 },
  { id: "c18", title: "The Sunlit Man", series: "Secret Projects", year: 2023 },
  { id: "c19", title: "Wind and Truth", series: "Stormlight Archive", year: 2024 },
]

export const nonCosmereBooks: Book[] = [
  { id: "nc1", title: "The Rithmatist", series: "The Rithmatist", year: 2013 },
  { id: "nc2", title: "Steelheart", series: "The Reckoners", year: 2013 },
  { id: "nc3", title: "Mitosis", series: "The Reckoners", year: 2013 },
  { id: "nc4", title: "Firefight", series: "The Reckoners", year: 2015 },
  { id: "nc5", title: "Calamity", series: "The Reckoners", year: 2016 },
  { id: "nc6", title: "Skyward", series: "Skyward", year: 2018 },
  { id: "nc7", title: "Starsight", series: "Skyward", year: 2019 },
  { id: "nc8", title: "Cytonic", series: "Skyward", year: 2021 },
  { id: "nc9", title: "Defiant", series: "Skyward", year: 2023 },
  { id: "nc10", title: "The Frugal Wizard's Handbook", series: "Secret Projects", year: 2023 },
]

export const shortsAndNovellas: Book[] = [
  { id: "sn1", title: "The Emperor's Soul", series: "Elantris", year: 2012 },
  { id: "sn2", title: "The Eleventh Metal", series: "Mistborn", year: 2011 },
  { id: "sn3", title: "Allomancer Jak", series: "Mistborn", year: 2011 },
  { id: "sn4", title: "Mistborn: Secret History", series: "Mistborn", year: 2016 },
  { id: "sn5", title: "Edgedancer", series: "Stormlight Archive", year: 2016 },
  { id: "sn6", title: "Dawnshard", series: "Stormlight Archive", year: 2020 },
  { id: "sn7", title: "The Hope of Elantris", series: "Elantris", year: 2006 },
  { id: "sn8", title: "Shadows for Silence", series: "Cosmere", year: 2013 },
  { id: "sn9", title: "Sixth of the Dusk", series: "Cosmere", year: 2014 },
  { id: "sn10", title: "White Sand", series: "Cosmere", year: 2016 },
]

export const allBooks: Book[] = [
  ...novels,
  { id: "a1", title: "The Rithmatist", series: "The Rithmatist", year: 2013 },
  { id: "a2", title: "Steelheart", series: "The Reckoners", year: 2013 },
  { id: "a3", title: "Firefight", series: "The Reckoners", year: 2015 },
  { id: "a4", title: "Calamity", series: "The Reckoners", year: 2016 },
  { id: "a5", title: "Defiant", series: "Skyward", year: 2023 },
]

export const sandersonWorks: Book[] = [
  { id: 1, title: "Elantris", year: 2005, series: "Elantris", categories: ["Novels", "Cosmere"] },
  { id: 2, title: "The Final Empire", year: 2006, series: "Mistborn Era 1", categories: ["Novels", "Cosmere"] },
  { id: 3, title: "The Hope of Elantris", year: 2006, series: "Elantris (short story)", categories: ["Shorts & Novellas", "Cosmere"] },

  { id: 4, title: "Alcatraz Versus the Evil Librarians", year: 2007, series: "Alcatraz", categories: ["Novels", "Junior & YA", "Non-Cosmere"] },
  { id: 5, title: "The Well of Ascension", year: 2007, series: "Mistborn Era 1", categories: ["Novels", "Cosmere"] },

  { id: 6, title: "Alcatraz Versus the Scrivener's Bones", year: 2008, series: "Alcatraz", categories: ["Novels", "Junior & YA", "Non-Cosmere"] },
  { id: 7, title: "Defending Elysium", year: 2008, series: ["Shorts & Novellas", "Non-Cosmere", "Junior & YA"] },
  { id: 8, title: "The Hero of Ages", year: 2008, series: "Mistborn Era 1", categories: ["Novels", "Cosmere"] },

  { id: 9, title: "Alcatraz Versus the Knights of Crystallia", year: 2009, series: "Alcatraz", categories: ["Novels", "Junior & YA", "Non-Cosmere"] },
  { id: 10, title: "The Gathering Storm", year: 2009, series: "The Wheel of Time", categories: ["WOT Novels"] },
  { id: 11, title: "Warbreaker", year: 2009, series: "Warbreaker", categories: ["Novels", "Cosmere"] },

  { id: 12, title: "Alcatraz Versus the Shattered Lens", year: 2010, series: "Alcatraz", categories: ["Novels", "Junior & YA", "Non-Cosmere"] },
  { id: 13, title: "The Way of Kings", year: 2010, series: "The Stormlight Archive", categories: ["Novels", "Cosmere"] },
  { id: 14, title: "Towers of Midnight", year: 2010, series: "The Wheel of Time", categories: ["WOT Novels"] },

  { id: 15, title: "I Hate Dragons", year: 2011, series: "Standalone(short story)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 16, title: "Infinity Blade: Awakening", year: 2011, series: "Infinity Blade (novella)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 17, title: "The Alloy of Law", year: 2011, series: "Mistborn Era 2", categories: ["Novels", "Cosmere"] },
  { id: 18, title: "The Eleventh Metal", year: 2011, series: "Mistborn Era 1 (short story)", categories: ["Shorts & Novellas", "Cosmere"] },

  { id: 19, title: "Heuristic Algorithm and Reasoning Response Engine", year: 2012, series: "Standalone (with Skar)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 20, title: "Legion", year: 2012, series: "Legion (novella)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 21, title: "The Emperor's Soul", year: 2012, series: "Elantris (novella)", categories: ["Shorts & Novellas", "Cosmere"] },

  { id: 22, title: "A Memory of Light", year: 2013, series: "The Wheel of Time", categories: ["WOT Novels"] },
  { id: 23, title: "Allomancer Jak and the Pits of Eltania", year: 2013, series: "Mistborn Era 2 (short story)", categories: ["Shorts & Novellas", "Cosmere"] },
  { id: 24, title: "Mitosis", year: 2013, series: "The Reckoners (short story)", categories: ["Shorts & Novellas", "Non-Cosmere", "Junior & YA"] },
  { id: 25, title: "River of Souls", year: 2013, series: "The Wheel of Time (short story)", categories: ["WOT Shorts & Novellas"] },
  { id: 26, title: "Shadows for Silence in the Forests of Hell", year: 2013, series: "Threnody (novella)", categories: ["Shorts & Novellas", "Cosmere"] },
  { id: 27, title: "Steelheart", year: 2013, series: "The Reckoners", categories: ["Novels", "Non-Cosmere", "Junior & YA"] },

  { id: 28, title: "Legion: Skin Deep", year: 2014, series: "Legion (novella)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 29, title: "Sixth of the Dusk", year: 2014, series: "First of the Sun (novella)", categories: ["Shorts & Novellas", "Cosmere"] },
  { id: 30, title: "Starsight", year: 2014, series: "Skyward", categories: ["Novels", "Non-Cosmere", "Junior & YA"] },
  { id: 31, title: "Words of Radiance", year: 2014, series: "The Stormlight Archive", categories: ["Novels", "Cosmere"] },

  { id: 32, title: "Firefight", year: 2015, series: "The Reckoners", categories: ["Novels", "Non-Cosmere", "Junior & YA"] },
  { id: 33, title: "Perfect State", year: 2015, series: "Standalone (novella)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 34, title: "Shadows of Self", year: 2015, series: "Mistborn Era 2", categories: ["Novels", "Cosmere"] },

  { id: 35, title: "Alcatraz Versus the Dark Talent", year: 2016, series: "Alcatraz", categories: ["Novels", "Junior & YA", "Non-Cosmere"] },
  { id: 36, title: "Calamity", year: 2016, series: "The Reckoners", categories: ["Novels", "Non-Cosmere", "Junior & YA"] },
  { id: 37, title: "Edgedancer", year: 2016, series: "The Stormlight Archive (novella)", categories: ["Shorts & Novellas", "Cosmere"] },
  { id: 38, title: "Infinity Blade: Redemption", year: 2016, series: "Infinity Blade (novella)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 39, title: "The Bands of Mourning", year: 2016, series: "Mistborn Era 2", categories: ["Novels", "Cosmere"] },
  { id: 40, title: "White Sand I", year: 2016, series: "White Sand (graphic novel)", categories: ["Cosmere", "Non-Cosmere"] }, // added Non-Cosmere
  { id: 41, title: "White Sand: Prose / related", year: 2016, series: "White Sand (prose)", categories: ["Collections"] },

  { id: 42, title: "Snapshot", year: 2017, series: "Standalone (novella)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 43, title: "Oathbringer", year: 2017, series: "The Stormlight Archive", categories: ["Novels", "Cosmere"] },

  { id: 44, title: "Lies of the Beholder", year: 2018, series: "Legion (novella)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 45, title: "Skyward", year: 2018, series: "Skyward", categories: ["Novels", "Non-Cosmere", "Junior & YA"] },
  { id: 46, title: "White Sand II", year: 2018, series: "White Sand (graphic novel)", categories: ["Cosmere", "Non-Cosmere"] }, // added Non-Cosmere

  { id: 47, title: "A Fire Within the Ways", year: 2019, series: "The Wheel of Time (short story)", categories: ["WOT Shorts & Novellas"] },
  { id: 48, title: "Starsight", year: 2019, series: "Skyward", categories: ["Novels", "Non-Cosmere", "Junior & YA"] },
  { id: 49, title: "White Sand III", year: 2019, series: "White Sand (graphic novel)", categories: ["Cosmere", "Non-Cosmere"] }, // added Non-Cosmere

  { id: 50, title: "Dawnshard", year: 2020, series: "The Stormlight Archive (novella)", categories: ["Shorts & Novellas", "Cosmere"] },
  { id: 51, title: "Rhythm of War", year: 2020, series: "The Stormlight Archive", categories: ["Novels", "Cosmere"] },
  { id: 52, title: "The Original", year: 2020, series: "Standalone (with Mary Robinette Kowal)", categories: ["Shorts & Novellas", "Audiobook", "Non-Cosmere"] },
  { id: 53, title: "The Way of Kings Prime", year: 2020, series: "Sanderson Curiosities", categories: ["Go Full Sando", "Non-Cosmere"] },

  { id: 54, title: "Dark One", year: 2021, series: "Dark One (graphic novel)", categories: ["Graphic Novels", "Other", "Non-Cosmere"] },
  { id: 55, title: "Evershore", year: 2021, series: "Skyward (novella)", categories: ["Shorts & Novellas", "Non-Cosmere", "Junior & YA"] },
  { id: 56, title: "ReDawn", year: 2021, series: "Skyward (novella)", categories: ["Shorts & Novellas", "Non-Cosmere", "Junior & YA"] },
  { id: 57, title: "Cytonic", year: 2021, series: "Skyward", categories: ["Novels", "Non-Cosmere", "Junior & YA"] },

  { id: 58, title: "Stephen Leeds: Death and Faxes", year: 2022, series: "Legion (audiobook)", categories: ["Shorts & Novellas", "Non-Cosmere"] },
  { id: 59, title: "The Lost Metal", year: 2022, series: "Mistborn Era 2", categories: ["Novels", "Cosmere"] },
  { id: 60, title: "Bastille Versus the Evil Librarians", year: 2022, series: "Alcatraz (co-written)", categories: ["Novels", "Junior & YA", "Non-Cosmere"] },

  { id: 61, title: "Tress of the Emerald Sea", year: 2023, series: "Secret Projects", categories: ["Novels", "Cosmere"] },
  { id: 62, title: "Yumi and the Nightmare Painter", year: 2023, series: "Secret Projects", categories: ["Novels", "Cosmere"] },
  { id: 63, title: "The Sunlit Man", year: 2023, series: "Secret Projects", categories: ["Novels", "Cosmere"] },
  { id: 64, title: "Hyperthief", year: 2023, series: "Skyward (short story)", categories: ["Shorts & Novellas", "Non-Cosmere", "Junior & YA"] },
  { id: 65, title: "Dark One: Forgotten", year: 2023, series: "Dark One (with Dan Wells)", categories: ["Audiobook", "Other", "Non-Cosmere"] },

  { id: 66, title: "The Most Boring Book Ever", year: 2024, series: "Children's", categories: ["Go Full Sando", "Non-Cosmere"] },
  { id: 67, title: "Dragonsteel Prime", year: 2024, series: "Sanderson Curiosities", categories: ["Go Full Sando", "Non-Cosmere"] },
  { id: 68, title: "Wind and Truth", year: 2024, series: "The Stormlight Archive", categories: ["Novels", "Cosmere"] },

  { id: 69, title: "Isles of the Emberdark", year: 2025, series: "Secret Projects", categories: ["Novels", "Cosmere"] },
  { id: 70, title: "Tailored Realities", year: 2025, series: "Short Story Collection", categories: ["Shorts & Novellas", "Non-Cosmere"] },

  { id: 71, title: "Strata Wars: Songs of the Dead (announced co-write)", year: 2026, series: "Collaborations", categories: ["Novels", "Other", "Non-Cosmere"] }
];

