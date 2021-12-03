<template>
    <div class="changelog panel">
        <div @click="shown=!shown" class="panel-insert">Cambios</div>
        <div v-if="shown">
			<div class="changelog-entry">
                <h3>03 de diciembre de 2021</h3>
                <ul>
                    <li>Añadidos apartado Fanmade en los pack con todos los packs de creación nacional que se completara con los internacionales en los próximos días.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>29 de noviembre de 2021</h3>
                <ul>
                    <li>Añadidos botones para generar escenario o héroes por separado sin tener que hacer un scroll hasta la zona superior.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>17 de noviembre de 2021</h3>
                <ul>
                    <li>Añadidas imágenes para todo el contenido a excepción Kang y sus módulos y los héroes Capitán América, Dr. Extraño y Hulk que se añadira en próximas actualizaciones</li>
                </ul>
            </div>			
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
