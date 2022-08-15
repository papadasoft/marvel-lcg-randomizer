<template>
    <div class="hero-randomizer panel">
        <div class="title panel-insert" @click="shown=!shown">Mazos de jugadores</div>

        <div class="warning" v-if="availableDecks.length < numberOfPlayer">
            No hay Héroes para todos los jugadores.
        </div>

        <div class="decks" v-if="shown">
            <div class="hero-deck" :key="index" v-for="({hero, aspects}, index) in selectedDecks">
                <h2 class="panel-insert-content">Jugador {{index+1}} <span v-if="index===0">(Jugador inicial)</span></h2>
                <div class="cards">
                    <div class="card">
                        <img :src="hero.alterEgoImg" :alt="hero.alterEgo" />
                    </div>
                    <div class="card">
                        <img :src="hero.heroImg" :alt="hero.hero" />
                    </div>
                    <div class="card" v-for="aspect in aspects" :key="aspect.name">
                        <img :src="aspect.img" :alt="aspect.name">
                    </div>
                </div>
                <div class="name panel-insert-content">
                    {{hero.alterEgo}} / {{hero.hero}} ({{hero.pack}}) + {{aspects.map(a => a.name).join(' + ')}} <a :href="hero.url" alt="ver contenido" title="ver contenido" target="_new" v-if="hero.url"><img src="images/download.png" class="hero-download-icon"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeckList",

        props: {
            numberOfPlayer: {
                default: 1,
            },
            availableDecks: {
                default: [],
                required: true,
            }
        },
        data: () => ({
            shown: true,
        }),
        computed: {
            selectedDecks(){
                return this.availableDecks.slice(0, this.numberOfPlayer);
            }
        },
    };
</script>

<style scoped>
    .cards{
        display: flex;
        justify-content: space-around;
    }

    .card{
        flex: .3;
        padding: 6px;
    }

    .cards img{
        width: 100%;
        height: auto;
    }

    .name{
        padding: 10px;
        text-align: center;
    }

    .warning{
        font-weight: bold;
        color: red;
        margin: 10px;
    }

    .hero-deck{
        margin-top: 20px;
    }
	
	.hero-download-icon {
		width:19px;
		vertical-align:text-top;
	}
</style>
