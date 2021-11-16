<template>
    <div class="player-selector panel">
        <p class="panel-insert">Selecciona número de jugadores</p>
        <div class="player-buttons">
            <button :disabled="value===1" @click="$emit('input', 1)">1</button>
            <button :disabled="value===2" @click="$emit('input', 2)">2</button>
            <button :disabled="value===3" @click="$emit('input', 3)">3</button>
            <button :disabled="value===4" @click="$emit('input', 4)">4</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlayerSelector",
        props: {
            value: {
                default: 1,
            }
        },
        methods: {
            addPlayer(){
                this.$emit("input", Math.min(this.value+1, 4));
            },
            removePlayer(){
                this.$emit("input", Math.max(this.value-1, 1));
            }
        }
    }
</script>

<style scoped>
    p{
        text-align: left;
    }

    .player-buttons{
        display: flex;
        justify-content: stretch;
    }

    .player-buttons button{
        width: 25%;
    }

</style>
