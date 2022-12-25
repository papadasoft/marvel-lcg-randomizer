export const scenarios = [
    {
        name: 'Rino - Allanamiento',
        img: 'images/scenarios/MC01es_97A.jpg',
        pack: "Caja Básica",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/marvel_champions_el_juego_de_cartas"
    },
    {
        name: 'Klaw - Distribución Clandestina',
        img: 'images/scenarios/MC01es_116A.jpg',
        pack: "Caja Básica",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/marvel_champions_el_juego_de_cartas"
    },
    {
        name: 'Ultrón - La Capucha Carmesí',
        img: 'images/scenarios/MC01es_137A.jpg',
        pack: "Caja Básica",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/marvel_champions_el_juego_de_cartas"
    },
    {
        name: 'Duende Verde - Negocios Arriesgados',
        img: 'images/scenarios/mc02es_card_hostile-takeover.jpg',
        pack: "Duende Verde",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/el_duende_verde"
    },
    {
        name: 'Duende Verde - Fórmula Mutagénica',
        img: 'images/scenarios/02017.jpg',
        pack: 'Duende Verde',
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/el_duende_verde"
    },
    {
        name: 'Brigada de Demolición - Fuga De Prisión',
        img: 'images/scenarios/MC03es_1A.jpg',
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
			["Escaramuza", "Escaramuza (Todos los Villanos A)"],
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
            ["Heroico 1", "Heroico 1 (Todos los Villanos A+B)"],
			["Heroico 2", "Heroico 2 (Todos los Villanos A+B)"],
			["Heroico 3", "Heroico 3 (Todos los Villanos A+B)"],
        ],
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/brigada_de_demolicion"
    },
    {
        name: "Calavera - Ataque Al Monte Atenea",
        pack: "La Tiranía de Craneo Rojo",
        img: "images/scenarios/MC10es_61A.jpg",
		decks: [
		{
			name: "Calavera",
			minModules: 3,
		}],
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_tirania_de_craneo_rojo"
    },
    {
        name: "Hombre Absorbente - Por Aquí No Pasa Nadie",
        pack: "La Tiranía de Craneo Rojo",
        img: "images/scenarios/MC10es_79A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_tirania_de_craneo_rojo"
    },
    {
        name: "Supervisor - A La Caza Del Héroe",
        pack: "La Tiranía de Craneo Rojo",
        img: "images/scenarios/MC10es_96A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_tirania_de_craneo_rojo"
    },
    {
        name: "Zola - La Isla Del Doctor Zola",
        pack: "La Tiranía de Craneo Rojo",
        img: "images/scenarios/MC10es_112A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_tirania_de_craneo_rojo"
    },
    {
        name: "Craneo Rojo - La Tiranía de Craneo Rojo",
        pack: "La Tiranía de Craneo Rojo",
		decks: [
		{
			name: "Craneo Rojo",
			minModules: 2,
		}],
        img: "images/scenarios/MC10es_128A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_tirania_de_craneo_rojo"
    },
    {
        name: "Kang - La Llegada De Kang",
        pack: "Antiguo Y Futuro Kang",
        img: "images/scenarios/MC11en_7A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/antiguo_y_futuro_kang"
    },
    {
        name: "Drang - Hermandad De Los Badoon",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16es_61A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/los_mas_buscados_de_la_galaxia"
    },
    {
        name: "Coleccionista 1 – Infiltrados En El Museo",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16es_73A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/los_mas_buscados_de_la_galaxia"
    },
    {
        name: "Coleccionista 2 – Huida Del Museo",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16es_82A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/los_mas_buscados_de_la_galaxia"
    },
    {
        name: "Nébula - El arte de la evasión",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16es_91A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/los_mas_buscados_de_la_galaxia"
    },
    {
        name: "Ronan - Intercepción inminente",
        pack: "Los más buscados de la galaxia",
        img: "images/scenarios/MC16es_106A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/los_mas_buscados_de_la_galaxia"
    },
    {
        name: "Fauces Negras - Ataque A Sapiencial",
        pack: "La Sombra del Titán Loco",
		decks: [
		{
			name: "Fauces Negras",
			minModules: 2,
		}],
        img: "images/scenarios/MC21es_74B.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_sombra_del_titan_loco"
    },
    {
        name: "Medianoche Próxima/Corvus Glaive - Defender La Torre",
        pack: "La Sombra del Titán Loco",
        img: "images/scenarios/MC21es_98B.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_sombra_del_titan_loco"
    },
    {
        name: "Thanos - Las Gemas Del Infinito",
        pack: "La Sombra del Titán Loco",
		decks: [
		{
			name: "Thanos",
			minModules: 2,
		}],
        img: "images/scenarios/MC21es_114B.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_sombra_del_titan_loco"
    },
    {
        name: "Hela - El Tormento De Odín",
        pack: "La Sombra del Titán Loco",
		decks: [
		{
			name: "Hela",
			minModules: 2,
		}],
        img: "images/scenarios/MC21es_138B.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_sombra_del_titan_loco"
    },
    {
        name: "Loki - Alabado Sea El rey Loki",
        pack: "La Sombra del Titán Loco",
		decks: [
		{
			name: "Loki",
			minModules: 2,
		}],
        img: "images/scenarios/MC21es_165B.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/la_sombra_del_titan_loco"
    },
	{
        name: "El Encapuchado - Búsqueda De Contactos",
        pack: "The Hood",
        img: "images/scenarios/MC24es_4B.jpg",
		decks: [
		{
			name: "Encapuchado",
			minModules: 7,
		}],
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/the_hood"
    },
    {
        name: "Hombre de arena - Peatones indefensos",
        pack: "Motivos Siniestros",
        img: "images/scenarios/MC27es_64A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/motivos_siniestros"
    },
    {
        name: "Veneno - ¡Dejadnos en paz!",
        pack: "Motivos Siniestros",
        img: "images/scenarios/MC27es_76A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/motivos_siniestros"
    },
    {
        name: "Mysterio - Laberinto de espejos",
        pack: "Motivos Siniestros",
        img: "images/scenarios/MC27es_87A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/motivos_siniestros"
    },
    {
        name: "Los seis siniestros - Sincronización siniestra",
        pack: "Motivos Siniestros",
		decks: [
            {
                name: "Doctor Octopus",
                minModules: 0,
            },
            {
                name: "Electro",
                minModules: 0,
            },
            {
                name: "Duende",
                minModules: 0,
            },
            {
                name: "Kraven el Cazador",
                minModules: 0,
            },
			{
                name: "Escorpión",
                minModules: 0,
            },
			{
                name: "Buitre",
                minModules: 0,
            }
        ],
        img: "images/scenarios/MC27es_100A.jpg",
		difficulties: [
			["Normal", "Normal (Todos los Villanos I)"]
		],
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/motivos_siniestros"
    },
    {
        name: "Duende Veneno - El cielo de Nueva York",
        pack: "Motivos Siniestros",
        img: "images/scenarios/MC27es_116A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/motivos_siniestros"
    },
	{
        name: "Dientes de Sable - Acosado por Dientes de Sable",
        pack: "Génesis Mutante",
        img: "images/scenarios/MC32es_63A.jpg",
		decks: [
		{
			name: "Dientes de Sable",
			minModules: 2,
		}],
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/genesis_mutante"
    },
	{
        name: "Centinela - La noche de los centinelas",
        pack: "Génesis Mutante",
        img: "images/scenarios/MC32es_87A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/genesis_mutante"
    },
	{
        name: "Molde Maestro - La fabrica de Centinelas",
        pack: "Génesis Mutante",
        img: "images/scenarios/MC32es_112A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/genesis_mutante"
    },
    {
        name: "Ataque a la mansión - ¡La Hermandad ataca!",
        pack: "Génesis Mutante",
        img: "images/scenarios/MC32es_125A.jpg",
		difficulties: [
			["Escaramuza", "Escaramuza (Todos los Villanos A)"],
            ["Normal", "Normal (Todos los Villanos A)"],
            ["Experto", "Experto (Todos los Villanos B)"],
            ["Heroico 1", "Heroico 1 (Todos los Villanos A+B)"],
			["Heroico 2", "Heroico 2 (Todos los Villanos A+B)"],
			["Heroico 3", "Heroico 3 (Todos los Villanos A+B)"],
		],
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/genesis_mutante"
    },
    {
        name: "Magneto - Asteroide M",
        pack: "Génesis Mutante",
        img: "images/scenarios/MC32es_141A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/genesis_mutante"
    },
    {
        name: "Magog - El coliseo de Mojo",
        pack: "Mojomanía",
        img: "images/scenarios/MC39es_2A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/mojomania"
    },
    {
        name: "Espiral - Viaje por el Mojoverso",
        pack: "Mojomanía",
        img: "images/scenarios/MC39es_15A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/mojomania"
    },
    {
        name: "Mojo - Mojomanía",
        pack: "Mojomanía",
        img: "images/scenarios/MC39es_25A.jpg",
		url: "http://www.fantasyflightgames.es/juegos/articulo/marvel_champions/mojomania"
    }
];
