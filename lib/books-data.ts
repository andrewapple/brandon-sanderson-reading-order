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
