<template>
    <div class="changelog panel">
        <div @click="shown=!shown" class="panel-insert">Cambios</div>
        <div v-if="shown">
			<div class="changelog-entry">
                <h3>16 de noviembre de 2021</h3>
                <ul>
                    <li>Añadidas imágenes para The Hood y La sombra del titán Loco en español</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>14 de Noviembre de 2021</h3>
                <ul>
                    <li>Añadido The Hood</li>
					<li>Añadida traducción a Español</li>
                    <li>El listado de packs muestra ahora héroes y villanos y no sets como hacía en origen</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Changelog",
        data: () => ({
            shown: true,
        })
    }
</script>

<style scoped>
    .changelog{
        text-align: left;
    }
</style>
