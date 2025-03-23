
export interface Joueur {
  id: string;
  nom: string;
  prenom: string;
  numero: number;
  poste: 'Gardien' | 'Défenseur' | 'Milieu' | 'Attaquant';
  dateNaissance: string;
  taille: number; // in cm
  poids: number; // in kg
  club: string;
  photo?: string;
  equipId: string;
}

export const joueurs: Joueur[] = [
  // Maroc
  {
    id: "bounou",
    nom: "Bounou",
    prenom: "Yassine",
    numero: 1,
    poste: "Gardien",
    dateNaissance: "1991-04-05",
    taille: 192,
    poids: 82,
    club: "Al-Hilal",
    photo: "https://img.a.transfermarkt.technology/portrait/header/234811-1662562272.jpg",
    equipId: "maroc"
  },
  {
    id: "hakimi",
    nom: "Hakimi",
    prenom: "Achraf",
    numero: 2,
    poste: "Défenseur",
    dateNaissance: "1998-11-04",
    taille: 181,
    poids: 73,
    club: "Paris Saint-Germain",
    photo: "https://img.a.transfermarkt.technology/portrait/header/398073-1666117265.jpg",
    equipId: "maroc"
  },
  {
    id: "ziyech",
    nom: "Ziyech",
    prenom: "Hakim",
    numero: 7,
    poste: "Milieu",
    dateNaissance: "1993-03-19",
    taille: 181,
    poids: 70,
    club: "Galatasaray",
    photo: "https://img.a.transfermarkt.technology/portrait/header/217111-1663155701.jpg",
    equipId: "maroc"
  },
  {
    id: "ennesyri",
    nom: "En-Nesyri",
    prenom: "Youssef",
    numero: 19,
    poste: "Attaquant",
    dateNaissance: "1997-06-01",
    taille: 189,
    poids: 75,
    club: "Sevilla FC",
    photo: "https://img.a.transfermarkt.technology/portrait/header/396894-1595414332.jpg",
    equipId: "maroc"
  },
  // Sénégal
  {
    id: "mendy",
    nom: "Mendy",
    prenom: "Edouard",
    numero: 16,
    poste: "Gardien",
    dateNaissance: "1992-03-01",
    taille: 197,
    poids: 86,
    club: "Al-Ahli",
    photo: "https://img.a.transfermarkt.technology/portrait/header/442531-1662564062.jpg",
    equipId: "senegal"
  },
  {
    id: "koulibaly",
    nom: "Koulibaly",
    prenom: "Kalidou",
    numero: 3,
    poste: "Défenseur",
    dateNaissance: "1991-06-20",
    taille: 187,
    poids: 89,
    club: "Al-Hilal",
    photo: "https://img.a.transfermarkt.technology/portrait/header/93128-1661864042.jpg",
    equipId: "senegal"
  },
  {
    id: "mane",
    nom: "Mané",
    prenom: "Sadio",
    numero: 10,
    poste: "Attaquant",
    dateNaissance: "1992-04-10",
    taille: 175,
    poids: 69,
    club: "Al-Nassr",
    photo: "https://img.a.transfermarkt.technology/portrait/header/200512-1667830391.jpg",
    equipId: "senegal"
  },
  // Égypte
  {
    id: "elshenawy",
    nom: "El-Shenawy",
    prenom: "Mohamed",
    numero: 1,
    poste: "Gardien",
    dateNaissance: "1988-12-18",
    taille: 191,
    poids: 85,
    club: "Al Ahly",
    photo: "https://img.a.transfermarkt.technology/portrait/header/175095-1537792011.jpg",
    equipId: "egypte"
  },
  {
    id: "salah",
    nom: "Salah",
    prenom: "Mohamed",
    numero: 10,
    poste: "Attaquant",
    dateNaissance: "1992-06-15",
    taille: 175,
    poids: 71,
    club: "Liverpool FC",
    photo: "https://img.a.transfermarkt.technology/portrait/header/148455-1685035465.jpg",
    equipId: "egypte"
  },
  // Nigeria
  {
    id: "osimhen",
    nom: "Osimhen",
    prenom: "Victor",
    numero: 9,
    poste: "Attaquant",
    dateNaissance: "1998-12-29",
    taille: 185,
    poids: 78,
    club: "SSC Napoli",
    photo: "https://img.a.transfermarkt.technology/portrait/header/401923-1604674386.jpg",
    equipId: "nigeria"
  },
  {
    id: "ndidi",
    nom: "Ndidi",
    prenom: "Wilfred",
    numero: 4,
    poste: "Milieu",
    dateNaissance: "1996-12-16",
    taille: 183,
    poids: 74,
    club: "Leicester City",
    photo: "https://img.a.transfermarkt.technology/portrait/header/340324-1596206840.jpg",
    equipId: "nigeria"
  },
  // Algérie
  {
    id: "mahrez",
    nom: "Mahrez",
    prenom: "Riyad",
    numero: 7,
    poste: "Attaquant",
    dateNaissance: "1991-02-21",
    taille: 179,
    poids: 67,
    club: "Al-Ahli",
    photo: "https://img.a.transfermarkt.technology/portrait/header/171424-1657641430.jpg",
    equipId: "algerie"
  },
  {
    id: "bennacer",
    nom: "Bennacer",
    prenom: "Ismaël",
    numero: 8,
    poste: "Milieu",
    dateNaissance: "1997-12-01",
    taille: 175,
    poids: 70,
    club: "AC Milan",
    photo: "https://img.a.transfermarkt.technology/portrait/header/351816-1666114913.jpg",
    equipId: "algerie"
  },
  // Cameroun
  {
    id: "onana",
    nom: "Onana",
    prenom: "André",
    numero: 24,
    poste: "Gardien",
    dateNaissance: "1996-04-02",
    taille: 190,
    poids: 90,
    club: "Manchester United",
    photo: "https://img.a.transfermarkt.technology/portrait/header/298583-1663327468.jpg",
    equipId: "cameroun"
  },
  {
    id: "aboubakar",
    nom: "Aboubakar",
    prenom: "Vincent",
    numero: 10,
    poste: "Attaquant",
    dateNaissance: "1992-01-22",
    taille: 184,
    poids: 85,
    club: "Beşiktaş JK",
    photo: "https://img.a.transfermarkt.technology/portrait/header/147487-1484921867.jpg",
    equipId: "cameroun"
  }
];
