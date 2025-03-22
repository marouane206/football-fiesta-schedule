
export interface Equipe {
  id: string;
  nom: string;
  drapeau: string;
  confederation: string;
  classementFIFA: number;
  participationsCAN: number;
  victoires: number;
  description: string;
  groupe: string;
  rang: number;
  entraineur: string;
  abreviation: string;
  coach: {
    nom: string;
    photo: string;
    nationalite: string;
    age: number;
  };
  pays: {
    capitale: string;
    population: string;
    dateIndependance: string;
    langue: string;
    chefEtat: string;
  };
  joueurs: Array<{
    id: string;
    nom: string;
    photo: string;
    poste: string;
    club: string;
    age: number;
    numero: number;
  }>;
  palmares: Array<{
    titre: string;
    annee: string;
    can?: boolean;
    meilleurResultat?: string;
  }>;
}

export const equipes: Equipe[] = [
  {
    id: "maroc",
    nom: "Maroc",
    drapeau: "🇲🇦",
    confederation: "CAF",
    classementFIFA: 13,
    participationsCAN: 18,
    victoires: 1,
    description: "L'équipe nationale du Maroc, surnommée les Lions de l'Atlas, est l'une des équipes les plus performantes d'Afrique. Ils ont remporté la Coupe d'Afrique des Nations une fois et ont participé à plusieurs Coupes du Monde.",
    groupe: "F",
    rang: 13,
    entraineur: "Walid Regragui",
    abreviation: "MAR",
    coach: {
      nom: "Walid Regragui",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Walid_Regragui_2022.jpg/330px-Walid_Regragui_2022.jpg",
      nationalite: "Marocaine",
      age: 48
    },
    pays: {
      capitale: "Rabat",
      population: "37 millions",
      dateIndependance: "2 mars 1956",
      langue: "Arabe",
      chefEtat: "Mohammed VI"
    },
    joueurs: [
      {
        id: "hakim-ziyech",
        nom: "Hakim Ziyech",
        photo: "https://tmssl.akamaized.net/images/foto/normal/hakim-ziyech-chelsea-2022-1663750885-77997.jpg",
        poste: "Milieu de terrain",
        club: "Galatasaray",
        age: 31,
        numero: 22
      },
      {
        id: "achraf-hakimi",
        nom: "Achraf Hakimi",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/achraf-hakimi.jpg",
        poste: "Arrière droit",
        club: "Paris Saint-Germain",
        age: 25,
        numero: 2
      },
      {
        id: "yassine-bounou",
        nom: "Yassine Bounou",
        photo: "https://i.eurosport.com/2023/08/17/image_sto9744991.jpg",
        poste: "Gardien de but",
        club: "Al-Hilal",
        age: 33,
        numero: 1
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1976",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "senegal",
    nom: "Sénégal",
    drapeau: "🇸🇳",
    confederation: "CAF",
    classementFIFA: 20,
    participationsCAN: 16,
    victoires: 1,
    description: "L'équipe nationale du Sénégal, surnommée les Lions de la Téranga, est une équipe montante en Afrique. Ils ont remporté leur première Coupe d'Afrique des Nations en 2022.",
    groupe: "C",
    rang: 20,
    entraineur: "Aliou Cissé",
    abreviation: "SEN",
    coach: {
      nom: "Aliou Cissé",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Aliou_Ciss%C3%A9_2018.jpg/330px-Aliou_Ciss%C3%A9_2018.jpg",
      nationalite: "Sénégalaise",
      age: 48
    },
    pays: {
      capitale: "Dakar",
      population: "17 millions",
      dateIndependance: "4 avril 1960",
      langue: "Français",
      chefEtat: "Macky Sall"
    },
    joueurs: [
      {
        id: "sadio-mane",
        nom: "Sadio Mané",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/sadio-mane.jpg",
        poste: "Attaquant",
        club: "Al-Nassr",
        age: 32,
        numero: 10
      },
      {
        id: "kalidou-koulibaly",
        nom: "Kalidou Koulibaly",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/kalidou-koulibaly.jpg",
        poste: "Défenseur central",
        club: "Al-Hilal",
        age: 33,
        numero: 3
      },
      {
        id: "edouard-mendy",
        nom: "Édouard Mendy",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/edouard-mendy.jpg",
        poste: "Gardien de but",
        club: "Al-Ahli",
        age: 32,
        numero: 1
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2022",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "algerie",
    nom: "Algérie",
    drapeau: "🇩🇿",
    confederation: "CAF",
    classementFIFA: 33,
    participationsCAN: 20,
    victoires: 2,
    description: "L'équipe nationale d'Algérie, surnommée les Fennecs, est une équipe nord-africaine avec une riche histoire de football. Ils ont remporté la Coupe d'Afrique des Nations à deux reprises.",
    groupe: "D",
    rang: 33,
    entraineur: "Djamel Belmadi",
    abreviation: "ALG",
    coach: {
      nom: "Djamel Belmadi",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Djamel_Belmadi_2019.jpg/330px-Djamel_Belmadi_2019.jpg",
      nationalite: "Algérienne",
      age: 48
    },
    pays: {
      capitale: "Alger",
      population: "44 millions",
      dateIndependance: "5 juillet 1962",
      langue: "Arabe",
      chefEtat: "Abdelmadjid Tebboune"
    },
    joueurs: [
      {
        id: "riyad-mahrez",
        nom: "Riyad Mahrez",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/riyad-mahrez.jpg",
        poste: "Ailier droit",
        club: "Al-Ahli",
        age: 33,
        numero: 7
      },
      {
        id: "ismael-bennacer",
        nom: "Ismaël Bennacer",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/ismael-bennacer.jpg",
        poste: "Milieu de terrain",
        club: "AC Milan",
        age: 26,
        numero: 8
      },
      {
        id: "rais-m-bolhi",
        nom: "Raïs M'Bolhi",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/rais-mbolhi.jpg",
        poste: "Gardien de but",
        club: "Al-Ettifaq",
        age: 38,
        numero: 1
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1990",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2019",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "egypte",
    nom: "Égypte",
    drapeau: "🇪🇬",
    confederation: "CAF",
    classementFIFA: 36,
    participationsCAN: 25,
    victoires: 7,
    description: "L'équipe nationale d'Égypte, surnommée les Pharaons, est l'équipe la plus titrée de la Coupe d'Afrique des Nations. Ils ont une longue et fière histoire de football.",
    groupe: "B",
    rang: 36,
    entraineur: "Hossam Hassan",
    abreviation: "EGY",
    coach: {
      nom: "Hossam Hassan",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hossam_Hassan_2018.jpg/330px-Hossam_Hassan_2018.jpg",
      nationalite: "Égyptienne",
      age: 57
    },
    pays: {
      capitale: "Le Caire",
      population: "104 millions",
      dateIndependance: "28 février 1922",
      langue: "Arabe",
      chefEtat: "Abdel Fattah el-Sissi"
    },
    joueurs: [
      {
        id: "mohamed-salah",
        nom: "Mohamed Salah",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/mohamed-salah.jpg",
        poste: "Ailier droit",
        club: "Liverpool",
        age: 32,
        numero: 10
      },
      {
        id: "mohamed-elneny",
        nom: "Mohamed Elneny",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/mohamed-elneny.jpg",
        poste: "Milieu de terrain",
        club: "Arsenal",
        age: 32,
        numero: 4
      },
      {
        id: "ahmed-hegazi",
        nom: "Ahmed Hegazi",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/ahmed-hegazi.jpg",
        poste: "Défenseur central",
        club: "Al-Ittihad",
        age: 33,
        numero: 2
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1957",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1959",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1986",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1998",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2006",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2008",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2010",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "nigeria",
    nom: "Nigeria",
    drapeau: "🇳🇬",
    confederation: "CAF",
    classementFIFA: 42,
    participationsCAN: 19,
    victoires: 3,
    description: "L'équipe nationale du Nigeria, surnommée les Super Eagles, est une équipe puissante avec une histoire riche en compétitions africaines et mondiales.",
    groupe: "A",
    rang: 42,
    entraineur: "Finidi George",
    abreviation: "NGA",
    coach: {
      nom: "Finidi George",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Finidi_George_2019.jpg/330px-Finidi_George_2019.jpg",
      nationalite: "Nigériane",
      age: 53
    },
    pays: {
      capitale: "Abuja",
      population: "214 millions",
      dateIndependance: "1 octobre 1960",
      langue: "Anglais",
      chefEtat: "Bola Ahmed Tinubu"
    },
    joueurs: [
      {
        id: "victor-osimhen",
        nom: "Victor Osimhen",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/victor-osimhen.jpg",
        poste: "Attaquant",
        club: "Napoli",
        age: 25,
        numero: 9
      },
      {
        id: "wilfred-ndidi",
        nom: "Wilfred Ndidi",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/wilfred-ndidi.jpg",
        poste: "Milieu de terrain",
        club: "Leicester City",
        age: 27,
        numero: 4
      },
      {
        id: "kelechi-iheanacho",
        nom: "Kelechi Iheanacho",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/kelechi-iheanacho.jpg",
        poste: "Attaquant",
        club: "Leicester City",
        age: 27,
        numero: 14
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1980",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1994",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2013",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "cotedivoire",
    nom: "Côte d'Ivoire",
    drapeau: "🇨🇮",
    confederation: "CAF",
    classementFIFA: 51,
    participationsCAN: 24,
    victoires: 2,
    description: "L'équipe nationale de Côte d'Ivoire, surnommée les Éléphants, est une équipe ouest-africaine connue pour son talent et sa puissance physique.",
    groupe: "A",
    rang: 51,
    entraineur: "Emerse Faé",
    abreviation: "CIV",
    coach: {
      nom: "Emerse Faé",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Emerse_Fae.jpg/330px-Emerse_Fae.jpg",
      nationalite: "Ivoirienne",
      age: 40
    },
    pays: {
      capitale: "Yamoussoukro",
      population: "27 millions",
      dateIndependance: "7 août 1960",
      langue: "Français",
      chefEtat: "Alassane Ouattara"
    },
    joueurs: [
      {
        id: "nicolas-pepe",
        nom: "Nicolas Pépé",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/nicolas-pepe.jpg",
        poste: "Ailier droit",
        club: "Trabzonspor",
        age: 29,
        numero: 19
      },
      {
        id: "franck-kessie",
        nom: "Franck Kessié",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/franck-kessie.jpg",
        poste: "Milieu de terrain",
        club: "Al-Ahli",
        age: 27,
        numero: 8
      },
      {
        id: "serge-aurier",
        nom: "Serge Aurier",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/serge-aurier.jpg",
        poste: "Arrière droit",
        club: "Galatasaray",
        age: 31,
        numero: 17
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1992",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2015",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "cameroun",
    nom: "Cameroun",
    drapeau: "🇨🇲",
    confederation: "CAF",
    classementFIFA: 50,
    participationsCAN: 20,
    victoires: 5,
    description: "L'équipe nationale du Cameroun, surnommée les Lions Indomptables, est l'une des équipes les plus emblématiques d'Afrique, avec plusieurs participations à la Coupe du Monde.",
    groupe: "C",
    rang: 50,
    entraineur: "Marc Brys",
    abreviation: "CMR",
    coach: {
      nom: "Marc Brys",
      photo: "https://medias.lequipe.fr/img-photo-jpg/marc-brys-a-ete-nomme-selectionneur-du-cameroun-philippe-le-brech-l-equipe/1500000001903914/0:0,1997:1331-828-552-75/c9991.jpg",
      nationalite: "Belge",
      age: 62
    },
    pays: {
      capitale: "Yaoundé",
      population: "26 millions",
      dateIndependance: "1 janvier 1960",
      langue: "Français, Anglais",
      chefEtat: "Paul Biya"
    },
    joueurs: [
      {
        id: "vincent-aboubakar",
        nom: "Vincent Aboubakar",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/vincent-aboubakar.jpg",
        poste: "Attaquant",
        club: "Besiktas",
        age: 32,
        numero: 10
      },
      {
        id: "andre-onana",
        nom: "André Onana",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/andre-onana.jpg",
        poste: "Gardien de but",
        club: "Manchester United",
        age: 28,
        numero: 1
      },
      {
        id: "andre-zambo-anguissa",
        nom: "André Zambo Anguissa",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/andre-zambo-anguissa.jpg",
        poste: "Milieu de terrain",
        club: "Napoli",
        age: 28,
        numero: 8
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1984",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1988",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2000",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2002",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2017",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "tunisie",
    nom: "Tunisie",
    drapeau: "🇹🇳",
    confederation: "CAF",
    classementFIFA: 41,
    participationsCAN: 20,
    victoires: 1,
    description: "L'équipe nationale de Tunisie, surnommée les Aigles de Carthage, est une équipe nord-africaine respectée avec une longue histoire de participation à la CAN.",
    groupe: "E",
    rang: 41,
    entraineur: "Montasser Louhichi",
    abreviation: "TUN",
    coach: {
      nom: "Montasser Louhichi",
      photo: "https://www.gnet.tn/wp-content/uploads/2023/12/Montasser-Louhichi-selectionneur-Tunisie-CAN-2023.jpg",
      nationalite: "Tunisienne",
      age: 60
    },
    pays: {
      capitale: "Tunis",
      population: "12 millions",
      dateIndependance: "20 mars 1956",
      langue: "Arabe",
      chefEtat: "Kaïs Saïed"
    },
    joueurs: [
      {
        id: "youssef-msakni",
        nom: "Youssef Msakni",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/youssef-msakni.jpg",
        poste: "Ailier gauche",
        club: "Al-Arabi SC",
        age: 33,
        numero: 7
      },
      {
        id: "ali-maaloul",
        nom: "Ali Maâloul",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/ali-maaloul.jpg",
        poste: "Arrière gauche",
        club: "Al Ahly",
        age: 34,
        numero: 12
      },
      {
        id: "wahbi-khazri",
        nom: "Wahbi Khazri",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/wahbi-khazri.jpg",
        poste: "Milieu offensif",
        club: "Montpellier",
        age: 33,
        numero: 10
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "2004",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "burkinafaso",
    nom: "Burkina Faso",
    drapeau: "🇧🇫",
    confederation: "CAF",
    classementFIFA: 62,
    participationsCAN: 12,
    victoires: 0,
    description: "L'équipe nationale du Burkina Faso, surnommée les Étalons, est une équipe d'Afrique de l'Ouest qui a atteint la finale de la CAN en 2013.",
    groupe: "D",
    rang: 62,
    entraineur: "Brama Traoré",
    abreviation: "BFA",
    coach: {
      nom: "Brama Traoré",
      photo: "https://wiwsport.com/wp-content/uploads/2023/10/Brama-Traore.jpg",
      nationalite: "Burkinabé",
      age: 49
    },
    pays: {
      capitale: "Ouagadougou",
      population: "21 millions",
      dateIndependance: "5 août 1960",
      langue: "Français",
      chefEtat: "Ibrahim Traoré"
    },
    joueurs: [
      {
        id: "hassan-bande",
        nom: "Hassan Bandé",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/hassan-bande.jpg",
        poste: "Ailier gauche",
        club: "Amiens SC",
        age: 25,
        numero: 7
      },
      {
        id: "issa-kabore",
        nom: "Issa Kaboré",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/issa-kabore.jpg",
        poste: "Arrière droit",
        club: "Luton Town",
        age: 23,
        numero: 2
      },
      {
        id: "gustavo-sangare",
        nom: "Gustavo Sangaré",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/gustavo-sangare.jpg",
        poste: "Milieu défensif",
        club: "Quevilly-Rouen",
        age: 27,
        numero: 18
      }
    ],
    palmares: [
      {
        titre: "Finaliste CAN",
        annee: "2013",
        can: true,
        meilleurResultat: "Finaliste"
      }
    ]
  },
  {
    id: "afriquedusud",
    nom: "Afrique du Sud",
    drapeau: "🇿🇦",
    confederation: "CAF",
    classementFIFA: 59,
    participationsCAN: 11,
    victoires: 1,
    description: "L'équipe nationale d'Afrique du Sud, surnommée Bafana Bafana, a remporté la Coupe d'Afrique des Nations en 1996, marquant une étape importante dans l'histoire du football du pays.",
    groupe: "E",
    rang: 59,
    entraineur: "Hugo Broos",
    abreviation: "RSA",
    coach: {
      nom: "Hugo Broos",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hugo_Broos_Genk.jpg/330px-Hugo_Broos_Genk.jpg",
      nationalite: "Belge",
      age: 72
    },
    pays: {
      capitale: "Pretoria",
      population: "60 millions",
      dateIndependance: "31 mai 1910",
      langue: "Afrikaans, Anglais",
      chefEtat: "Cyril Ramaphosa"
    },
    joueurs: [
      {
        id: "percytau",
        nom: "Percy Tau",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/percy-tau.jpg",
        poste: "Ailier gauche",
        club: "Al Ahly",
        age: 30,
        numero: 22
      },
      {
        id: "themba-zwane",
        nom: "Themba Zwane",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/themba-zwane.jpg",
        poste: "Milieu offensif",
        club: "Mamelodi Sundowns",
        age: 35,
        numero: 18
      },
      {
        id: "ronwen-williams",
        nom: "Ronwen Williams",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/ronwen-williams.jpg",
        poste: "Gardien de but",
        club: "Mamelodi Sundowns",
        age: 32,
        numero: 1
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1996",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "rdcongo",
    nom: "RD Congo",
    drapeau: "🇨🇩",
    confederation: "CAF",
    classementFIFA: 63,
    participationsCAN: 17,
    victoires: 2,
    description: "L'équipe nationale de la RD Congo, surnommée les Léopards, a remporté la Coupe d'Afrique des Nations à deux reprises et est connue pour son style de jeu passionné.",
    groupe: "F",
    rang: 63,
    entraineur: "Sébastien Desabre",
    abreviation: "RDC",
    coach: {
      nom: "Sébastien Desabre",
      photo: "https://static.onzemondial.com/photos/348017/zoom-sebastien-desabre-n-est-plus-le-selectionneur-de-la-rd-congo.jpg",
      nationalite: "Français",
      age: 47
    },
    pays: {
      capitale: "Kinshasa",
      population: "90 millions",
      dateIndependance: "30 juin 1960",
      langue: "Français",
      chefEtat: "Félix Tshisekedi"
    },
    joueurs: [
      {
        id: "cedric-bakambu",
        nom: "Cédric Bakambu",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/cedric-bakambu.jpg",
        poste: "Attaquant",
        club: "Real Betis",
        age: 33,
        numero: 17
      },
      {
        id: "gael-kakuta",
        nom: "Gaël Kakuta",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/gael-kakuta.jpg",
        poste: "Milieu offensif",
        club: "Amiens SC",
        age: 33,
        numero: 10
      },
      {
        id: "chancel-mbemba",
        nom: "Chancel Mbemba",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/chancel-mbemba.jpg",
        poste: "Défenseur central",
        club: "Olympique Marseille",
        age: 29,
        numero: 23
      }
    ],
    palmares: [
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1968",
        can: true,
        meilleurResultat: "Vainqueur"
      },
      {
        titre: "Coupe d'Afrique des Nations",
        annee: "1974",
        can: true,
        meilleurResultat: "Vainqueur"
      }
    ]
  },
  {
    id: "mali",
    nom: "Mali",
    drapeau: "🇲🇱",
    confederation: "CAF",
    classementFIFA: 47,
    participationsCAN: 13,
    victoires: 0,
    description: "L'équipe nationale du Mali, surnommée les Aigles, est une équipe d'Afrique de l'Ouest qui a souvent été compétitive en Coupe d'Afrique des Nations.",
    groupe: "E",
    rang: 47,
    entraineur: "Éric Chelle",
    abreviation: "MLI",
    coach: {
      nom: "Éric Chelle",
      photo: "https://malifootball.com/wp-content/uploads/2022/05/Eric-Shelle.jpg",
      nationalite: "Malien",
      age: 46
    },
    pays: {
      capitale: "Bamako",
      population: "20 millions",
      dateIndependance: "22 septembre 1960",
      langue: "Français",
      chefEtat: "Assimi Goïta"
    },
    joueurs: [
      {
        id: "yves-bissouma",
        nom: "Yves Bissouma",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/yves-bissouma.jpg",
        poste: "Milieu de terrain",
        club: "Tottenham Hotspur",
        age: 27,
        numero: 8
      },
      {
        id: "amadou-haidara",
        nom: "Amadou Haidara",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/amadou-haidara.jpg",
        poste: "Milieu de terrain",
        club: "RB Leipzig",
        age: 26,
        numero: 4
      },
      {
        id: "moussa-djenepo",
        nom: "Moussa Djenepo",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/moussa-djenepo.jpg",
        poste: "Ailier gauche",
        club: "Standard Liège",
        age: 25,
        numero: 19
      }
    ],
    palmares: [
      {
        titre: "Demi-finaliste CAN",
        annee: "2013",
        can: true,
        meilleurResultat: "Demi-finaliste"
      }
    ]
  },
  {
    id: "guinee",
    nom: "Guinée",
    drapeau: "🇬🇳",
    confederation: "CAF",
    classementFIFA: 76,
    participationsCAN: 13,
    victoires: 0,
    description: "L'équipe nationale de Guinée, surnommée le Syli National, est une équipe d'Afrique de l'Ouest qui a participé à plusieurs reprises à la Coupe d'Afrique des Nations.",
    groupe: "C",
    rang: 76,
    entraineur: "Kaba Diawara",
    abreviation: "GUI",
    coach: {
      nom: "Kaba Diawara",
      photo: "https://static.onzemondial.com/photos/318714/zoom-kaba-diawara.jpg",
      nationalite: "Guinéen",
      age: 48
    },
    pays: {
      capitale: "Conakry",
      population: "13 millions",
      dateIndependance: "2 octobre 1958",
      langue: "Français",
      chefEtat: "Mamadi Doumbouya"
    },
    joueurs: [
      {
        id: "naby-keita",
        nom: "Naby Keïta",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/naby-keita.jpg",
        poste: "Milieu de terrain",
        club: "Werder Bremen",
        age: 29,
        numero: 8
      },
      {
        id: "serhou-guirassy",
        nom: "Serhou Guirassy",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/serhou-guirassy.jpg",
        poste: "Attaquant",
        club: "VfB Stuttgart",
        age: 28,
        numero: 9
      },
      {
        id: "mohamed-bayo",
        nom: "Mohamed Bayo",
        photo: "https://img.a.transfermarkt.technology/image/foto/normal/mohamed-bayo.jpg",
        poste: "Attaquant",
        club: "Le Havre",
        age: 26,
        numero: 22
      }
    ],
    palmares: [
      {
        titre: "Finaliste CAN",
        annee: "1976",
        can: true,
        meilleurResultat: "Finaliste"
      }
    ]
  }
];
