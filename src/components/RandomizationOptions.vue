<template>
    <div class="panel">
        <div class="panel-insert">
            Opciones Personalizadas
        </div>
        <div v-if="shown">
            <div>
                <button :disabled="value.additionalModules <= 0" @click="additionalModulesChange((value.additionalModules || 0) - 1)">-</button>
                {{ value.additionalModules||0 }}
                <button @click="additionalModulesChange(parseInt(value.additionalModules || 0) + 1)">+</button>
                Encuentros modulares extra
            </div>

            <div>
                <label>
                    <input type="checkbox" name="scenario" id="scenario" v-model="value.scenario"> Generar Escenario
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="scenario" id="decks" v-model="value.decks"> Generar mazos de jugadores
                </label>
            </div>
			<div>
                <label>
                    <input type="checkbox" name="scenario" id="determination" v-model="value.determination"> Incluir aspecto determinación
                </label>
            </div>

            <div @click="shown=!shown" class="panel-insert-content">
                Esconder Opciones
            </div>
        </div>
        <div v-else>
            <div @click="shown=!shown" class="panel-insert-content">
                Mostrar Opciones
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "RandomizationOptions",
        props: {
            value: {
                default: {},
            },
        },
        data: () => ({
            shown: false,
        }),
        methods: {
            additionalModulesChange(modules){
                const newValue = {...this.value};
                newValue.additionalModules = modules;
                this.$emit("input", newValue);
            },
        },
    }
</script>

<style scoped>

</style>
