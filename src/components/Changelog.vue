<template>
    <div class="changelog panel">
        <div @click="shown=!shown" class="panel-insert">Cambios</div>
        <div v-if="shown">
			<div class="changelog-entry">
                <h3>25 de Diciembre de 2022</h3>
                <ul>
					<li>La campaña solidario de La mano solidaria ha conseguido recaudar 6.385€. Gracias a todos por vuestra colaboración.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>10 de Diciembre de 2022</h3>
                <ul>
					<li>Añadido contenido de Mojomanía.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>2 de Octubre de 2022</h3>
                <ul>
					<li>Añadido contenido de Génesis Mutante.</li>
					<li>Añadidos héroes Fénix y Cíclope.</li>
					<li>Añadida posibilidad de usar solo contenido marvel, solo contenido DC o contenido Marvel y DC. Para ellos hacer click para encender o apagar cada uno de ellos haciendo click sobre su logo superior.</li>
                </ul>
            </div>
						<div class="changelog-entry">
                <h3>15 de agosto de 2022</h3>
                <ul>
					<li>Añadido soporte para el contenido inicial fanmade de DC Champions.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>14 de agosto de 2022</h3>
                <ul>
					<li>Añadido el héroe fanmade Loba Venenosa de Matty.</li>
					<li>Añadidos los siguientes escenarios fanmade: Barón Zemo, Buitre, Guerra Mundial de Hulk y Morbius, todos de Jammydude.</li>
					<li>Añadido encuentro modular fanmade En guerra by Jammydude.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>09 de agosto de 2022</h3>
                <ul>
					<li>Añadido como opción configurable poder añadir a los aspectos el aspecto fanmade Determinación.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>23 de julio de 2022</h3>
                <ul>
					<li>Añadido al contenido oficial los héroes Nova, IronEarth, Spiderham y SP//dr.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>16 de mayo de 2022</h3>
                <ul>
					<li>Añadido al contenido fanmade el héroe Sang-Chi y el escenario Galactus.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>19 de abril de 2022</h3>
                <ul>
					<li>Añadido al contenido oficial los héroes, escenario y modulares de Motivos Siniestros.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>22 de enero de 2022</h3>
                <ul>
					<li>Añadido el pack de héroe fanmade: Penitencia.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>18 de enero de 2022</h3>
                <ul>
					<li>Añadido el pack de héroe oficial: La Visión.</li>
					<li>Añadido el pack de escenario fanmade: Immortus.</li>
                    <li>Añadidos los siguientes encuentros modulares fanmade: A los cielos, Criatura de sangre fría, Daily Bugle, La cura y Matanza máxima.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>02 de enero de 2022</h3>
                <ul>
                    <li>Añadidos los siguientes encuentros modulares fanmade: Enemigo oculto (Camaleón), La Mancha y Escuadrón Siniestro.</li>
                </ul>
            </div>
			<div class="changelog-entry">
                <h3>18 de diciembre de 2021</h3>
                <ul>
                    <li>Añadidos héroes oficiales: Valkiria y Maquina de guerra.</li>
					<li>Añadido héroe fanmade: Seda (Silk) by Justatuna.</li>
                </ul>
            </div>
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
