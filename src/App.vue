<template>
    <div class="app">
		<div id="aladina" class="aladina" v-if="aladina">
            ¡Necesitamos tu ayuda Héroe! <a href="https://www.youtube.com/channel/UC1z0ZdjNGwYpZymwppiIh5A" target="_new" style="color:white;">La Mano de Thanos</a> y <a style="color:white;" href="https://www.youtube.com/channel/UC-IKyGEJP-lKYMifT7IHNlw" target="_new">Owen Rules</a> han pueston en marcha una campaña solidaria a favor de la Fundación Aladina y los niños con cáncer.<br/><br/>Yo colaboro ¿Y tú?<br/>
			<br/><div class="aladina-button ok"><a style="color:green;" href="http://lamanosolidaria.com" target="_new">Si, yo también quiero colaborar</a></div><div class="aladina-button"><a style="color: red;" href="#" @click="aladina=!aladina">No, mejor lo dejo pasar</a></div>
			<br/>Quedan: {{ dias }} días.
        </div>
        <h1 v-if="marvel && dc">
            <img src="./assets/logo.jpg" alt="Marvel Champions" class="logo" @click="marvel=!marvel">
			<img src="./assets/logo_dc.jpg" alt="DC Champions" class="logo" @click="dc=!dc">
        </h1>
		<h1 v-if="marvel && !dc">
            <img src="./assets/logo.jpg" alt="Marvel Champions" class="logo" @click="marvel=!marvel">
			<img src="./assets/logo_dc_off.jpg" alt="DC Champions" class="logo" @click="dc=!dc">
        </h1>
		<h1 v-if="!marvel && dc">
            <img src="./assets/logo_off.jpg" alt="Marvel Champions" class="logo" @click="marvel=!marvel">
			<img src="./assets/logo_dc.jpg" alt="DC Champions" class="logo" @click="dc=!dc">
        </h1>
		<h1 v-if="!marvel && !dc">
            <img src="./assets/logo_off.jpg" alt="Marvel Champions" class="logo" @click="marvel=!marvel">
			<img src="./assets/logo_dc_off.jpg" alt="DC Champions" class="logo" @click="dc=!dc">
        </h1>
		<a href="#datos" id="enlace">&nbsp;</a>
		<a href="https://discord.gg/EeTJ8Jpg" target="_blank" style="color:blue;text-decoration: none;"><span style="margin-right:15px;">Únete a nuestro Discord!</span><img style="vertical-align:middle;" src="./assets/discord-png.png" alt="Unete a nuestro servidor de Discord." title="Unete a nuestro servidor de Discord." /></a><br/>
        <button class="randomize-button" @click="randomizeScroll">Generar Partida</button>
        <PlayerSelector v-model="numberOfPlayer"/>

        <PackSelector :packs="data.packs" v-model="selectedPacks"/>
        <DifficultySelector :difficulties="data.difficulties" v-model="randomizationOptions.selectedDifficulties" />
        <RandomizationOptions v-model="randomizationOptions"/>
		<div id="datos">
		<div class="sticky-top"><button class="randomize-button" @click="randomizeScroll">Generar Partida</button>&nbsp;&nbsp;<button class="randomize-button" @click="randomizeScenario">Generar Escenario</button><br/>
			<a href="https://discord.gg/EeTJ8Jpg" target="_blank" style="color:blue;text-decoration: none;"><span style="margin-right:15px;">Únete a nuestro Discord!</span><img style="vertical-align:middle;" src="./assets/discord-png.png" alt="Unete a nuestro servidor de Discord." title="Unete a nuestro servidor de Discord." /></a>
		</div>
        <Scenario v-if="randomizationOptions.scenario" :scenario="selectedScenario"/>
		<button class="randomize-button" @click="randomizeHeroes">Generar Héroes</button>
        <DeckList v-if="randomizationOptions.decks" :available-decks="selectedDecks" :number-of-player="numberOfPlayer"/>
		</div>
        <Changelog/>
        <Contribute/>
    </div>
</template>

<script>
    import {scenarios} from './data/scenarios';
    import {modules} from './data/modules';
    import {heroes} from './data/heroes';
	import {heroescustom} from './data/heroesCustom';
	import {scenarioscustom} from './data/scenariosCustom';
	import {modulescustom} from './data/modulesCustom';
	import {heroescustomdc} from './data/heroesCustomDC';
	import {scenarioscustomdc} from './data/scenariosCustomDC';
	import {modulescustomdc} from './data/modulesCustomDC';	
    import {aspects} from "@/data/aspects";
    import PlayerSelector from "@/components/PlayerSelector";
    import RandomizationOptions from "@/components/RandomizationOptions";
    import PackSelector from "@/components/PackSelector";
    import Scenario from './components/Scenario';
    import DeckList from "@/components/DeckList";
    import Changelog from "@/components/Changelog";
    import Randomizer from "@/randomizer";
    import Contribute from "./components/Contribute";
    import DifficultySelector from "./components/DifficultySelector";

    const difficulties = ["escaramuza", "normal", "normal ii", "experto", "experto ii", "heroico 1", "heroico 2", "heroico 3"];

    const dataStorage = window.localStorage;

    const packs = {
		oficial: {
			Heroes: heroes.map(a => a.hero).filter((a, i, arr) => arr.indexOf(a) === i),
			Scenarios: scenarios.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i),
			Modules: modules.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i)
		},
		fanmade: {
			HeroesCustom: heroescustom.map(a => a.hero).filter((a, i, arr) => arr.indexOf(a) === i),
			ScenariosCustom: scenarioscustom.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i),
			ModulesCustom: modulescustom.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i)
		},
		fanmadedc: {
			HeroesCustomDC: heroescustomdc.map(a => a.hero).filter((a, i, arr) => arr.indexOf(a) === i),
			ScenariosCustomDC: scenarioscustomdc.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i),
			ModulesCustomDC: modulescustomdc.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i)
		}
    };
	
	const packscustom = {
		HeroesCustom: heroescustom.map(a => a.hero).filter((a, i, arr) => arr.indexOf(a) === i),
        ScenariosCustom: scenarioscustom.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i),
		ModulesCustom: modulescustom.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i)
    };
	
	const packscustomdc = {
		HeroesCustomDC: heroescustomdc.map(a => a.hero).filter((a, i, arr) => arr.indexOf(a) === i),
        ScenariosCustomDC: scenarioscustomdc.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i),
		ModulesCustomDC: modulescustomdc.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i)
    };

	const d = new Date("2022-12-18");
	const n = new Date();
	const diffTime = Math.abs(d - n);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    const randomizer = new Randomizer();

    let selectedPacks = null;
    try {
        selectedPacks = JSON.parse(dataStorage.getItem("selectedPacks")) || ["Caja Básica"];
    } catch {
        selectedPacks = ["Caja Básica"];
        dataStorage.removeItem("selectedPacks");
    }
	
	let selectedDifficulties = null;
	try {
		selectedDifficulties = JSON.parse(dataStorage.getItem("selectedDifficulties")) || ["normal", "experto"];
	} catch {
		selectedDifficulties = ["standard", "expert"];
		dataStorage.removeItem("selectedDifficulties");
	}

    export default {
        name: 'app',
        data: () => ({
            data: {
                scenarios,
				scenarioscustom,
				scenarioscustomdc,
				packscustom,
				packscustomdc,
                modules,
				modulescustom,
				modulescustomdc,
                heroes,
				heroescustom,
				heroescustomdc,
                aspects,
                packs,
                difficulties,
            },
			dias: diffDays,
            selectedPacks,
            selectedScenario: null,
			marvel: true,
			dc: false,
			aladina: false,
            selectedDecks: [],
            numberOfPlayer: 1,
            randomizationOptions: {
                scenario: 1,
                decks: 1,
                selectedDifficulties,
				determination: false
            },
        }),
        watch: {
            selectedPacks() {
                dataStorage.setItem("selectedPacks", JSON.stringify(this.selectedPacks));
                this.randomize();
            },
            randomizationOptions: {
                handler() {
					dataStorage.setItem("selectedDifficulties", JSON.stringify(this.randomizationOptions.selectedDifficulties));
                    this.randomize();
                },
                deep: true,
            }
        },
        created() {
            this.randomize();
        },
        computed: {
			availableScenariosCustom() {
                return this.data.scenarioscustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0);
            },
            availableScenarios() {
				if(this.marvel && this.dc) {
					return this.data.scenarios.filter(s => this.selectedPacks.indexOf(s.name) >= 0).concat(this.data.scenarioscustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0)).concat(this.data.scenarioscustomdc.filter(s => this.selectedPacks.indexOf(s.name) >= 0));
				} else if (this.marvel) {
					return this.data.scenarios.filter(s => this.selectedPacks.indexOf(s.name) >= 0).concat(this.data.scenarioscustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0));
				} else {
					return this.data.scenarioscustomdc.filter(s => this.selectedPacks.indexOf(s.name) >= 0);
				}
            },
            availableModules() {
				if(this.marvel && this.dc) {
					return this.data.modules.filter(s => this.selectedPacks.indexOf(s.name) >= 0).concat(this.data.modulescustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0)).concat(this.data.modulescustomdc.filter(s => this.selectedPacks.indexOf(s.name) >= 0));
				} else if(this.marvel) {
					return this.data.modules.filter(s => this.selectedPacks.indexOf(s.name) >= 0).concat(this.data.modulescustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0));
				} else {
					return this.data.modulescustomdc.filter(s => this.selectedPacks.indexOf(s.name) >= 0);
				}
            },
            availableHeroes() {
				if(this.marvel && this.dc) {
					return this.data.heroes.filter(s => this.selectedPacks.indexOf(s.hero) >= 0).concat(this.data.heroescustom.filter(s => this.selectedPacks.indexOf(s.hero) >= 0)).concat(this.data.heroescustomdc.filter(s => this.selectedPacks.indexOf(s.hero) >= 0));
				} else if(this.marvel) {
					return this.data.heroes.filter(s => this.selectedPacks.indexOf(s.hero) >= 0).concat(this.data.heroescustom.filter(s => this.selectedPacks.indexOf(s.hero) >= 0));
				} else {
					return this.data.heroescustomdc.filter(s => this.selectedPacks.indexOf(s.hero) >= 0);
				}
            },
            availableDifficulties() {
                return this.data.difficulties.filter(s => this.randomizationOptions.selectedDifficulties.indexOf(s) >= 0);
            },
        },
        methods: {
            randomize() {
                this.selectedScenario = randomizer.randomizeScenario(this.availableScenariosF(), this.availableModulesF(), this.availableDifficulties, this.randomizationOptions);
                this.selectedDecks = randomizer.randomizeHeroes(this.availableHeroesF(), this.randomizationOptions.determination ? this.data.aspects : this.data.aspects.slice(0,4));
            },
			randomizeScroll() {
				this.selectedScenario = randomizer.randomizeScenario(this.availableScenariosF(), this.availableModulesF(), this.availableDifficulties, this.randomizationOptions);
                this.selectedDecks = randomizer.randomizeHeroes(this.availableHeroesF(), this.randomizationOptions.determination ? this.data.aspects : this.data.aspects.slice(0,4));
				var el = document.querySelector('#enlace');el.click();
			},
			randomizeHeroes() {
				this.selectedDecks = randomizer.randomizeHeroes(this.availableHeroesF(), this.randomizationOptions.determination ? this.data.aspects : this.data.aspects.slice(0,4));
			},
			randomizeScenario() {
				this.selectedScenario = randomizer.randomizeScenario(this.availableScenariosF(), this.availableModulesF(), this.availableDifficulties, this.randomizationOptions, this.marvel, this.dc);
			},
			availableScenariosF() {
				if(this.marvel && this.dc) {
					return this.data.scenarios.filter(s => this.selectedPacks.indexOf(s.name) >= 0).concat(this.data.scenarioscustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0)).concat(this.data.scenarioscustomdc.filter(s => this.selectedPacks.indexOf(s.name) >= 0));
				} else if (this.marvel) {
					return this.data.scenarios.filter(s => this.selectedPacks.indexOf(s.name) >= 0).concat(this.data.scenarioscustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0));
				} else {
					return this.data.scenarioscustomdc.filter(s => this.selectedPacks.indexOf(s.name) >= 0);
				}
            },
			availableModulesF() {
				if(this.marvel && this.dc) {
					return this.data.modules.filter(s => this.selectedPacks.indexOf(s.name) >= 0).concat(this.data.modulescustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0)).concat(this.data.modulescustomdc.filter(s => this.selectedPacks.indexOf(s.name) >= 0));
				} else if(this.marvel) {
					return this.data.modules.filter(s => this.selectedPacks.indexOf(s.name) >= 0).concat(this.data.modulescustom.filter(s => this.selectedPacks.indexOf(s.name) >= 0));
				} else {
					return this.data.modulescustomdc.filter(s => this.selectedPacks.indexOf(s.name) >= 0);
				}
			},
			availableHeroesF() {
				if(this.marvel && this.dc) {
					return this.data.heroes.filter(s => this.selectedPacks.indexOf(s.hero) >= 0).concat(this.data.heroescustom.filter(s => this.selectedPacks.indexOf(s.hero) >= 0)).concat(this.data.heroescustomdc.filter(s => this.selectedPacks.indexOf(s.hero) >= 0));
				} else if(this.marvel) {
					return this.data.heroes.filter(s => this.selectedPacks.indexOf(s.hero) >= 0).concat(this.data.heroescustom.filter(s => this.selectedPacks.indexOf(s.hero) >= 0));
				} else {
					return this.data.heroescustomdc.filter(s => this.selectedPacks.indexOf(s.hero) >= 0);
				}
            }
        },
        components: {
            DifficultySelector,
            Contribute,
            Changelog,
            PackSelector,
            PlayerSelector,
            DeckList,
            Scenario,
            RandomizationOptions,
        }
    }
</script>

<style>
    @font-face {
        font-family: 'FTY SPEEDY CASUAL NCV';
        src: url('./assets/fonts/FTYSPEEDYCASUALNCV.woff2') format('woff2'),
        url('./assets/fonts/FTYSPEEDYCASUALNCV.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'FTY SPEEDY CASUAL 001 NCV';
        src: url('./assets/fonts/FTYSPEEDYCASUAL001NCV.woff2') format('woff2'),
        url('./assets/fonts/FTYSPEEDYCASUAL001NCV.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }


    .app {
        font-family: 'FTY SPEEDY CASUAL NCV', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        max-width: 768px;
        margin: auto;
    }

    img.logo {
        height: 80px;
		padding: 0 15px;
		cursor: pointer;
		@media (max-width: 500px) {
			heigth:85px;
		}
    }
	
	img.logo:hover {
		cursor: pointer;
    }

	.aladina {
		background-color: red;
		color: white;
		padding: 5px 10px;
	}
	
	.aladina-button {
		background-color: white;
		color:red;
		padding: 3px 5px;
		a {
			color: red !important;
		}
		.ok {
			color: green !important;
		}
	}
	
    .randomize-button {
        padding: 10px;
        margin: 10px;
    }

    .panel {
        border: solid black 2px;
        margin: 15px 10px;
        background: #d0c8d2;
        text-align: left;
        padding: 5px;
    }

    .panel-insert {
        border: solid black 2px;
        background: #fff2bd;
        display: inline-block;
        text-align: center;
        padding: 10px 5px 5px 10px;
        margin: -7px 10px 0 -7px;
        position: relative;
        border-right: 0;
        font-size: 1.5em;
    }

    .panel-insert-content {
        border: solid black 2px;
        background: #fff2bd;
        text-align: center;
        padding: 5px;
        margin: 10px;
        position: relative;
    }

    .panel-insert:before {
        transform: skewX(-10deg);
        border: solid black 2px;
        border-left: 0;
        background: #fff2bd;
        content: " ";
        position: absolute;
        right: -5px;
        top: 0;
        bottom: 0;
        width: 10px;
        margin: -2px;
    }


    button {
        flex-grow: 1;
        box-sizing: border-box;
        padding: 10px;
        margin: 5px;
        border: solid 1px grey;
    }

    button:disabled {
        color: white;
        background: green;
        font-weight: bold;

    }
	
	/* Style the tab */
	.tab {
		overflow: hidden;
		border: 1px solid #000;
		background-color: #f1f1f1;
	}

	/* Style the buttons that are used to open the tab content */
	.tab button {
		background-color: inherit;
		float: left;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 14px 16px;
		transition: 0.3s;
		margin: 0px;
		font-weight: bold;
	}

	/* Change background color of buttons on hover */
	.tab button:hover {
		background-color: #ddd;
	}

	/* Create an active/current tablink class */
	.tab button.active {
		background-color: red;
		color: white;
	}
	
	.dc.active {
		background-color: #00adff !important;
		color: white;
	}

	/* Style the tab content */
	.tabcontent {
		display: none;
		width:100%;
		padding: 6px 12px;
		border: 1px solid #ccc;
		border-top: none;
	}
	
	.pack-type-column {
		width:33%;
		min-width:100px;
		vertical-align:top;
		align-content: middle;
		display: inline-block !important;
	}
	
	.sticky-top {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		background-color:white;
		z-index:90;
	}

</style>
