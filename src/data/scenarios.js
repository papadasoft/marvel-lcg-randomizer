export const scenarios = [
    {
        name: 'Rino - Allanamiento',
        img: 'images/scenarios/MC01en_97A.jpg',
        pack: "Caja Básica",
    },
    {
        name: 'Klaw - Distribución Clandestina',
        img: 'images/scenarios/MC01en_116A.jpg',
        pack: "Caja Básica",
    },
    {
        name: 'Ultrón - La Capucha Carmesí',
        img: 'images/scenarios/MC01en_137A.jpg',
        pack: "Caja Básica",
    },
    {
        name: 'Duende Verde - Negocios Arriesgados',
        img: 'images/scenarios/02004.jpg',
        pack: "Duende Verde",
    },
    {
        name: 'Duende Verde - Fórmula Mutagénica',
        img: 'images/scenarios/02017.jpg',
        pack: 'Duende Verde',
    },
    {
        name: 'Brigada de Demolición - Fuga De Prisión',
        img: 'images/scenarios/MC03en_1A.jpg',
        pack: 'Brigada de Demolición',
        decks: [
            {
                name: "Bulldozer",
                minModules: 0,
            },
            {
                name: "Martinete",
                minModules: 0,
            },
            {
                name: "Bola De Trueno",
                minModules: 0,
            },
            {
                name: "Destructor",
                minModules: 0,
            },
        ],
        difficulties: [
            ["Normal", "Normal (Todos los Villanos A)"],
            ["Experto", "Bulldozer A, Martinete A, Bola De Trueno A, Destructor B"],
            ["Experto", "Bulldozer A, Martinete A, Bola De Trueno B, Destructor A"],
            ["Experto", "Bulldozer A, Martinete B, Bola De Trueno A, Destructor A"],
            ["Experto", "Bulldozer B, Martinete A, Bola De Trueno A, Destructor A"],
            ["Experto", "Bulldozer A, Martinete A, Bola De Trueno B, Destructor B"],
            ["Experto", "Bulldozer A, Martinete B, Bola De Trueno A, Destructor B"],
            ["Experto", "Bulldozer A, Martinete B, Bola De Trueno B, Destructor A"],
            ["Experto", "Bulldozer B, Martinete A, Bola De Trueno A, Destructor B"],
            ["Experto", "Bulldozer B, Martinete A, Bola De Trueno B, Destructor A"],
            ["Experto", "Bulldozer B, Martinete B, Bola De Trueno A, Destructor A"],
            ["Experto", "Bulldozer A, Martinete B, Bola De Trueno B, Destructor B"],
            ["Experto", "Bulldozer B, Martinete A, Bola De Trueno B, Destructor B"],
            ["Experto", "Bulldozer B, Martinete B, Bola De Trueno A, Destructor B"],
            ["Experto", "Bulldozer B, Martinete B, Bola De Trueno B, Destructor A"],
            ["Experto", "Experto (Todos los Villanos B)"],
            ["Pesadilla", "Pesadilla (Todos los Villanos A+B)"],
        ],
    },
    {
        name: "Calavera - Ataque Al Monte Atenea",
        pack: "El Ascenso de Craneo Rojo",
        img: "images/scenarios/MC10en_61A.jpg",
    },
    {
        name: "Hombre Absorbente - Por Aquí No Pasa Nadie",
        pack: "El Ascenso de Craneo Rojo",
        img: "images/scenarios/MC10en_79A.jpg"
    },
    {
        name: "Supervisor - A La Caza Del Héroe",
        pack: "El Ascenso de Craneo Rojo",
        img: "images/scenarios/MC10en_96A.jpg",
    },
    {
        name: "Zola - La Isla Del Doctor Zola",
        pack: "El Ascenso de Craneo Rojo",
        img: "images/scenarios/MC10en_112A.jpg",
    },
    {
        name: "Craneo Rojo - El Ascenso de Craneo Rojo",
        pack: "El Ascenso de Craneo Rojo",
        img: "images/scenarios/MC10en_128A.jpg",
    },
    {
        name: "Kang - La Llegada De Kang",
        pack: "Antiguo Y Futuro Kang",
        img: "images/scenarios/MC11en_7A.jpg",
    },
    {
        name: "Drang - Hermandad De Los Badoon",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16en_61A.jpg",
    },
    {
        name: "Coleccionista 1 – Infiltrados En El Museo",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16en_73A.jpg",
    },
    {
        name: "Coleccionista 2 – Huida Del Museo",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16en_82A.jpg",
    },
    {
        name: "Nébula - El arte de la evasión",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16en_91A.jpg",
    },
    {
        name: "Ronan - Intercepción inminente",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16en_106A.jpg",
    },
    {
        name: "Fauces Negras - Ataque A Sapiencial",
        pack: "La Sombra del Titán Loco",
        img: "images/scenarios/MC21es_74B.jpg",
    },
    {
        name: "Medianoche Próxima/Corvus Glaive - Defender La Torre",
        pack: "La Sombra del Titán Loco",
        img: "images/scenarios/MC21es_98B.jpg",
    },
    {
        name: "Thanos - Las Gemas Del Infinito",
        pack: "La Sombra del Titán Loco",
        img: "images/scenarios/MC21es_114B.jpg",
    },
    {
        name: "Hela - El Tormento De Odín",
        pack: "La Sombra del Titán Loco",
        img: "images/scenarios/MC21es_138B.jpg",
    },
    {
        name: "Loki - Alabado Sea El rey Loki",
        pack: "La Sombra del Titán Loco",
        img: "images/scenarios/MC21es_165B.jpg",
    },
	{
        name: "El Encapuchado - Búsqueda De Contactos",
        pack: "The Hood",
        img: "images/scenarios/MC24es_4B.jpg",
		decks: [
		{
			name: "Encapuchado",
			minModules: 7,
		}]
    }
];
