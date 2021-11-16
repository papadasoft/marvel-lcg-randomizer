<template>
    <div class="app">
        <h1>
            <img src="./assets/logo.jpg" alt="Marvel Champions" class="logo">
        </h1>
		<a href="#datos" id="enlace">&nbsp;</a>
        <button class="randomize-button" @click="randomizeScroll">Generar</button>
        <PlayerSelector v-model="numberOfPlayer"/>

        <PackSelector :packs="data.packs" v-model="selectedPacks"/>
        <DifficultySelector :difficulties="data.difficulties" v-model="randomizationOptions.selectedDifficulties" />
        <RandomizationOptions v-model="randomizationOptions"/>
		<div id="datos">
        <Scenario v-if="randomizationOptions.scenario" :scenario="selectedScenario"/>
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

    const difficulties = ["normal", "normal ii", "experto", "experto ii", "pesadila"];

    const dataStorage = window.localStorage;

    const packs = {
        Heroes: heroes.map(a => a.hero).filter((a, i, arr) => arr.indexOf(a) === i),
        Scenarios: scenarios.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i),
        Modules: modules.map(a => a.name).filter((a, i, arr) => arr.indexOf(a) === i),
    };

    const randomizer = new Randomizer();

    let selectedPacks = null;
    try {
        selectedPacks = JSON.parse(dataStorage.getItem("selectedPacks")) || ["Caja Básica"];
    } catch {
        selectedPacks = ["Caja Básica"];
        dataStorage.removeItem("selectedPacks");
    }

    export default {
        name: 'app',
        data: () => ({
            data: {
                scenarios,
                modules,
                heroes,
                aspects,
                packs,
                difficulties,
            },
            selectedPacks: selectedPacks,
            selectedScenario: null,
            selectedDecks: [],
            numberOfPlayer: 1,
            randomizationOptions: {
                scenario: 1,
                decks: 1,
                selectedDifficulties: ["normal", "experto"],
            },
        }),
        watch: {
            selectedPacks() {
                dataStorage.setItem("selectedPacks", JSON.stringify(this.selectedPacks));
                this.randomize();
            },
            randomizationOptions: {
                handler() {
                    this.randomize();
                },
                deep: true,
            }
        },
        created() {
            this.randomize();
        },
        computed: {
            availableScenarios() {
                return this.data.scenarios.filter(s => this.selectedPacks.indexOf(s.name) >= 0);
            },
            availableModules() {
                return this.data.modules.filter(s => this.selectedPacks.indexOf(s.name) >= 0);
            },
            availableHeroes() {
                return this.data.heroes.filter(s => this.selectedPacks.indexOf(s.hero) >= 0);
            },
            availableDifficulties() {
                return this.data.difficulties.filter(s => this.randomizationOptions.selectedDifficulties.indexOf(s) >= 0);
            },
        },
        methods: {
            randomize() {
                this.selectedScenario = randomizer.randomizeScenario(this.availableScenarios, this.availableModules, this.availableDifficulties, this.randomizationOptions);
                this.selectedDecks = randomizer.randomizeHeroes(this.availableHeroes, this.data.aspects);
            },
			randomizeScroll() {
				this.selectedScenario = randomizer.randomizeScenario(this.availableScenarios, this.availableModules, this.availableDifficulties, this.randomizationOptions);
                this.selectedDecks = randomizer.randomizeHeroes(this.availableHeroes, this.data.aspects);
				var el = document.querySelector('#enlace');el.click();
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
        height: 100px;
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

</style>
