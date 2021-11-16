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
				<div class="content-buttons">
					<button :disabled="value===Oficial" @click="openCity(event, 'oficial')">Oficial</button>
					<button :disabled="value===Fanmade" @click="openCity(event, 'fanmade')">Fanmade</button>
					<button :disabled="value===DC" @click="openCity(event, 'fanmadedc')">DC</button>
				</div>
			</div>
            <div class="pack-type-column" :key="type" v-for="(packets, type) in packs">
                <h3 v-if="type=='Modules'">Módulos</h3>
				<h3 v-if="type=='Heroes'">Héroes</h3>
				<h3 v-if="type=='Scenarios'">Escenarios</h3>
                <label :key="pack" v-for="pack in packets">
                    <input type="checkbox" :checked="value.indexOf(pack) >= 0" @input="togglePack(pack, $event.target.checked)">{{pack}}
                </label>
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
			openCity(evt, cityName) {
				// Declare all variables
				var i, tabcontent, tablinks;
				
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
				document.getElementById(cityName).style.display = "block";
				evt.currentTarget.className += " active";
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
