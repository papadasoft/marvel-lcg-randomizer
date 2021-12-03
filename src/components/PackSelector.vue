<template>
    <div class="packs-selector panel">
        <div class="panel-insert">
            Packs seleccionados
        </div>
        <div v-if="!shown" class="packs-selected">
            {{value.join(", ")}}
        </div>
        <div class="packs" v-if="shown">
			<div class="content-selector panel">
				<div class="content-buttons tab">
					<button @click="openPacks('oficial', $event)" class="tablinks active">Oficial</button>
					<button @click="openPacks('fanmade', $event)" class="tablinks">Fanmade</button>
					<!--<button @click="openPacks('fanmadedc')">DC</button>-->
				</div>
			</div>
			<div id="oficial" class="tabcontent" style="display:block;">
				<div class="pack-type-column" :key="type" v-for="(packets, type) in packs.oficial">
					<h3 v-if="type=='Modules'">Módulos</h3>
					<h3 v-if="type=='Heroes'">Héroes</h3>
					<h3 v-if="type=='Scenarios'">Escenarios</h3>
					<label :key="pack" v-for="pack in packets">
						<input type="checkbox" :checked="value.indexOf(pack) >= 0" @input="togglePack(pack, $event.target.checked)">{{pack}}
					</label>
				</div>
			</div>
			<div id="fanmade" class="tabcontent">
				<center><a href="https://discord.gg/Px98pW9TtU" target="_new">Haz click aquí para saber más del contenido fanmade.</a></center>
				<div class="pack-type-column" :key="type" v-for="(packets, type) in packs.fanmade">
					<h3 v-if="type=='ModulesCustom'">Módulos</h3>
					<h3 v-if="type=='HeroesCustom'">Héroes</h3>
					<h3 v-if="type=='ScenariosCustom'">Escenarios</h3>
					<label :key="pack" v-for="pack in packets">
						<input type="checkbox" :checked="value.indexOf(pack) >= 0" @input="togglePack(pack, $event.target.checked)">{{pack}}
						<!--<a :href="packets.url"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fsocial-messaging-ui-color-shapes%2F128%2Fsearch-circle-blue-512.png&f=1&nofb=1" style="width:14px;"/></a>-->
					</label>
				</div>
			</div>
        </div>

        <div class="toggle">
            <div @click="shown=!shown" class="panel-insert-content">
                <span v-if="!shown">Añadir/Quitar Packs</span>
                <span v-else>Terminar selección</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PackSelector",
        props: {
            value: {
                default: ["Caja Básica"],
            },
            packs: {
                default: ["Caja Básica"],
            }
        },
        data: () => ({
            shown: false,
        }),
		methods: {
            togglePack(pack, checked){
                const packs = this.value.slice(0);
                if(checked){
                    packs.push(pack);
                } else {
                    packs.splice(packs.indexOf(pack), 1);
                }

                this.$emit("input", packs);
            },
			openPacks(content, evt) {
				// Declare all variables
				var i, tabcontent, tablinks, element;
				
				// Get all elements with class="tabcontent" and hide them
				tabcontent = document.getElementsByClassName("tabcontent");
				for (i = 0; i < tabcontent.length; i++) {
					tabcontent[i].style.display = "none";
				}
				
				// Get all elements with class="tablinks" and remove the class "active"
				tablinks = document.getElementsByClassName("tablinks");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
				}
				
				// Show the current tab, and add an "active" class to the button that opened the tab
				element = document.getElementById(content);
				if(element!=null) {
					document.getElementById(content).style.display = "block";
				}
				if(evt!=null)
					evt.currentTarget.className ? evt.currentTarget.className += " active" : true;
			}
        }
    }
</script>

<style scoped>

    label{
        display: block;
    }

    .packs{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .packs-selected{
        padding-top: 5px;
    }

    .toggle{
        text-align: right;
    }
	.content-buttons{
        display: flex;
        justify-content: stretch;
    }

    .content-buttons button{
        width: 25%;
    }
	.content-selector {
		width:100%;
		border:none;
	}	
</style>
