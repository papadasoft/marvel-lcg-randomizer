(function(e){function n(n){for(var t,s,o=n[0],l=n[1],c=n[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);d&&d(n);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],t=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(t=!1)}t&&(i.splice(n--,1),e=s(s.s=a[0]))}return e}var t={},r={app:0},i=[];function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)s.d(a,t,function(n){return e[n]}.bind(null,t));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/marvel-lcg-randomizer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"034f":function(e,n,a){"use strict";var t=a("85ec"),r=a.n(t);r.a},"0a73":function(e,n,a){"use strict";var t=a("bd2d"),r=a.n(t);r.a},"1af3":function(e,n,a){"use strict";var t=a("8b86"),r=a.n(t);r.a},"47db":function(e,n,a){"use strict";var t=a("a023"),r=a.n(t);r.a},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app"},[e._m(0),a("button",{staticClass:"randomize-button",on:{click:e.randomize}},[e._v("Randomize")]),a("PlayerSelector",{model:{value:e.numberOfPlayer,callback:function(n){e.numberOfPlayer=n},expression:"numberOfPlayer"}}),a("PackSelector",{attrs:{packs:e.data.packs},model:{value:e.selectedPacks,callback:function(n){e.selectedPacks=n},expression:"selectedPacks"}}),a("DifficultySelector",{attrs:{difficulties:e.data.difficulties},model:{value:e.randomizationOptions.selectedDifficulties,callback:function(n){e.$set(e.randomizationOptions,"selectedDifficulties",n)},expression:"randomizationOptions.selectedDifficulties"}}),a("RandomizationOptions",{model:{value:e.randomizationOptions,callback:function(n){e.randomizationOptions=n},expression:"randomizationOptions"}}),e.randomizationOptions.scenario?a("Scenario",{attrs:{scenario:e.selectedScenario}}):e._e(),e.randomizationOptions.decks?a("DeckList",{attrs:{"available-decks":e.selectedDecks,"number-of-player":e.numberOfPlayer}}):e._e(),a("Changelog"),a("Contribute")],1)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h1",[t("img",{staticClass:"logo",attrs:{src:a("b640"),alt:"Marvel Champions"}})])}],s=(a("4de4"),a("c975"),a("d81d"),[{name:"Rhino - The Break In!",img:"images/scenarios/MC01en_97A.jpg",pack:"Core Set"},{name:"Klaw - Underground Distribution",img:"images/scenarios/MC01en_116A.jpg",pack:"Core Set"},{name:"Ultron - The Crimson Cowl",img:"images/scenarios/MC01en_137A.jpg",pack:"Core Set"},{name:"Green Goblin - Risky Business",img:"images/scenarios/02004.jpg",pack:"Green Goblin"},{name:"Green Goblin - Mutagen Formula",img:"images/scenarios/02017.jpg",pack:"Green Goblin"},{name:"Wrecking Crew - Breakout",img:"images/scenarios/MC03en_1A.jpg",pack:"Wrecking Crew",decks:[{name:"Bulldozer",minModules:0},{name:"Piledriver",minModules:0},{name:"Thunderball",minModules:0},{name:"Wrecker",minModules:0}],difficulties:[["Standard","Standard (All Villains A)"],["Expert","Bulldozer A, Piledriver A, Thunderball A, Wrecker B"],["Expert","Bulldozer A, Piledriver A, Thunderball B, Wrecker A"],["Expert","Bulldozer A, Piledriver B, Thunderball A, Wrecker A"],["Expert","Bulldozer B, Piledriver A, Thunderball A, Wrecker A"],["Expert","Bulldozer A, Piledriver A, Thunderball B, Wrecker B"],["Expert","Bulldozer A, Piledriver B, Thunderball A, Wrecker B"],["Expert","Bulldozer A, Piledriver B, Thunderball B, Wrecker A"],["Expert","Bulldozer B, Piledriver A, Thunderball A, Wrecker B"],["Expert","Bulldozer B, Piledriver A, Thunderball B, Wrecker A"],["Expert","Bulldozer B, Piledriver B, Thunderball A, Wrecker A"],["Expert","Bulldozer A, Piledriver B, Thunderball B, Wrecker B"],["Expert","Bulldozer B, Piledriver A, Thunderball B, Wrecker B"],["Expert","Bulldozer B, Piledriver B, Thunderball A, Wrecker B"],["Expert","Bulldozer B, Piledriver B, Thunderball B, Wrecker A"],["Expert","Expert (All Villains B)"],["Nightmare","Nightmare (All Villains A+B)"]]},{name:"Crossbones - Attack on Mount Athena",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_61A.jpg"},{name:"Absorbing Man - None Shall Pass",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_79A.jpg"},{name:"Taskmaster - Hunting Down Heroes",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_96A.jpg"},{name:"Zola - The Island of Dr. Zola",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_112A.jpg"},{name:"Red Skull - The Rise of Red Skull",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_128A.jpg"},{name:"Kang - Kang's Arrival",pack:"The Once and Future Kang",img:"images/scenarios/MC11en_7A.jpg"}]),o=[{name:"Bomb Scare",img:"images/modules/MC01en_109.jpg",pack:"Core Set"},{name:"The Masters of Evil",img:"images/modules/MC01en_128.jpg",pack:"Core Set"},{name:"Under Attack",img:"images/modules/MC01en_151.jpg",pack:"Core Set"},{name:"The Legions of Hydra",img:"images/modules/MC01en_180.jpg",pack:"Core Set"},{name:"The Doomsday Chair",img:"images/modules/MC01en_183.jpg",pack:"Core Set"},{name:"Goblin Gimmicks",img:"images/modules/mc02en_card_goblin-glider.png",pack:"Green Goblin"},{name:"A Mess of Things",img:"images/modules/02037.jpg",pack:"Green Goblin"},{name:"Power Drain",img:"images/modules/02041.jpg",pack:"Green Goblin"},{name:"Running Interference",img:"images/modules/02046.jpg",pack:"Green Goblin"},{name:"Weapon Master",img:"images/modules/MC10en_148.jpg",pack:"The Rise of Red Skull"},{name:"Experimental Weapons",img:"images/modules/MC10en_72.jpg",pack:"The Rise of Red Skull"},{name:"Hydra Assault",img:"images/modules/MC10en_145.jpg",pack:"The Rise of Red Skull"},{name:"Hydra Patrol",img:"images/modules/MC10en_152.jpg",pack:"The Rise of Red Skull"},{name:"Anachronauts",img:"images/modules/MC11en_40.jpg",pack:"The Once and Future Kang"},{name:"Master of Time",img:"images/modules/MC11en_47.jpg",pack:"The Once and Future Kang"},{name:"Temporal",img:"images/modules/MC11en_30.jpg",pack:"The Once and Future Kang"},{name:"Kree Fanatic",img:"images/modules/gen_con_2020_ronan.jpg",pack:"Ronan the Accuser (Print and Play)"}],l=[{hero:"Spider-man",heroImg:"images/heroes/mc01en_card_spider-man.png",alterEgo:"Peter Parker",alterEgoImg:"images/heroes/mc01en_card_peter-parker.png",pack:"Core Set"},{hero:"Captain Marvel",heroImg:"images/heroes/mc01en_card_captain-marvel.png",alterEgo:"Carol Danvers",alterEgoImg:"images/heroes/mc01en_card_carol-danvers.png",pack:"Core Set"},{hero:"She-Hulk",heroImg:"images/heroes/mc01en_card_she-hulk.png",alterEgo:"Jennifer Walters",alterEgoImg:"images/heroes/mc01en_card_jennifer-walters.png",pack:"Core Set"},{hero:"Iron Man",heroImg:"images/heroes/mc01en_iron-man.png",alterEgo:"Tony Stark",alterEgoImg:"images/heroes/mc01en_card_tony-stark.png",pack:"Core Set"},{hero:"Black Panther",heroImg:"images/heroes/mc01en_card_black-panther.png",alterEgo:"T'Challa",alterEgoImg:"images/heroes/mc01en_card_tchalla.png",pack:"Core Set"},{hero:"Captain America",heroImg:"images/heroes/mc04en_card_captain-america.png",alterEgo:"Steeve Rogers",alterEgoImg:"images/heroes/mc04en_card_steve-rogers.png",pack:"Captain America"},{hero:"Ms. Marvel",heroImg:"images/heroes/mc05en_ms-marvel.png",alterEgo:"Kamala Khan",alterEgoImg:"images/heroes/mc05en_kamala-khan.png",pack:"Ms. Marvel"},{hero:"Thor",heroImg:"images/heroes/mc06en_a1_thor.png",alterEgo:"Odinson",alterEgoImg:"images/heroes/mc06en_a1_odinson.png",pack:"Thor"},{hero:"Black Widow",heroImg:"images/heroes/mc07en_black-widow.png",alterEgo:"Natasha Romanoff",alterEgoImg:"images/heroes/mc07en_natasha-romanoff.png",pack:"Black Widow"},{hero:"Doctor Strange",heroImg:"images/heroes/mc08en_doctor-strange.png",alterEgo:"Stephen Strange",alterEgoImg:"images/heroes/mc08en_stephen-strange.png",pack:"Doctor Strange"},{hero:"Hulk",heroImg:"images/heroes/mc09en-hulk.png",alterEgo:"Bruce Banner",alterEgoImg:"images/heroes/mc09en_bruce-banner.png",pack:"Hulk"},{hero:"Hawkeye",heroImg:"images/heroes/mc10en_hawkeye.png",alterEgo:"Clint Barton",alterEgoImg:"images/missing.png",pack:"The Rise of Red Skull"},{hero:"Spider-woman",heroImg:"images/heroes/mc10en_spider-woman.png",alterEgo:"Jessica Drew",alterEgoImg:"images/heroes/mc10en_jessica-drew.png",pack:"The Rise of Red Skull",numberOfAspects:2},{hero:"Ant-Man",heroImg:"images/heroes/mc11en_ant-man.png",alterEgo:"Scott Lang",alterEgoImg:"images/heroes/mc11en_scott-lang.png",pack:"Ant-Man"},{hero:"Wasp",heroImg:"images/heroes/mc13en_wasp.png",alterEgo:"Nadia Van Dyne",alterEgoImg:"images/heroes/mc13en_nadia-van-dyne.png",pack:"Wasp"}],c=[{name:"Aggression",img:"images/aspects/MC01en_55.jpg",packs:["Core Set","Thor"]},{name:"Justice",img:"images/aspects/MC01en_62.jpg",packs:["Core Set","Black widow"]},{name:"Leadership",img:"images/aspects/MC01en_72.jpg",packs:["Core Set","Captain America"]},{name:"Protection",img:"images/aspects/MC01en_79.jpg",packs:["Core Set","Ms. Marvel","Doctor Strange"]}],d=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"player-selector panel"},[a("p",{staticClass:"panel-insert"},[e._v("Select the number of players")]),a("div",{staticClass:"player-buttons"},[a("button",{attrs:{disabled:1===e.value},on:{click:function(n){return e.$emit("input",1)}}},[e._v("Solo")]),a("button",{attrs:{disabled:2===e.value},on:{click:function(n){return e.$emit("input",2)}}},[e._v("Duo")]),a("button",{attrs:{disabled:3===e.value},on:{click:function(n){return e.$emit("input",3)}}},[e._v("3 players")]),a("button",{attrs:{disabled:4===e.value},on:{click:function(n){return e.$emit("input",4)}}},[e._v("4 players")])])])},u=[],m={name:"PlayerSelector",props:{value:{default:1}},methods:{addPlayer:function(){this.$emit("input",Math.min(this.value+1,4))},removePlayer:function(){this.$emit("input",Math.max(this.value-1,1))}}},p=m,g=(a("84e3"),a("2877")),f=Object(g["a"])(p,d,u,!1,null,"438c5f32",null),h=f.exports,v=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-insert"},[e._v(" Custom Options ")]),e.shown?a("div",[a("div",[a("button",{attrs:{disabled:e.value.additionalModules<=0},on:{click:function(n){e.additionalModulesChange((e.value.additionalModules||0)-1)}}},[e._v("-")]),e._v(" "+e._s(e.value.additionalModules||0)+" "),a("button",{on:{click:function(n){e.additionalModulesChange(parseInt(e.value.additionalModules||0)+1)}}},[e._v("+")]),e._v(" Extra Modules ")]),a("div",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value.scenario,expression:"value.scenario"}],attrs:{type:"checkbox",name:"scenario",id:"scenario"},domProps:{checked:Array.isArray(e.value.scenario)?e._i(e.value.scenario,null)>-1:e.value.scenario},on:{change:function(n){var a=e.value.scenario,t=n.target,r=!!t.checked;if(Array.isArray(a)){var i=null,s=e._i(a,i);t.checked?s<0&&e.$set(e.value,"scenario",a.concat([i])):s>-1&&e.$set(e.value,"scenario",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.value,"scenario",r)}}}),e._v(" Generate Scenario ")])]),a("div",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value.decks,expression:"value.decks"}],attrs:{type:"checkbox",name:"scenario",id:"decks"},domProps:{checked:Array.isArray(e.value.decks)?e._i(e.value.decks,null)>-1:e.value.decks},on:{change:function(n){var a=e.value.decks,t=n.target,r=!!t.checked;if(Array.isArray(a)){var i=null,s=e._i(a,i);t.checked?s<0&&e.$set(e.value,"decks",a.concat([i])):s>-1&&e.$set(e.value,"decks",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.value,"decks",r)}}}),e._v(" Generate Player Decks ")])]),a("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e._v(" Hide Options ")])]):a("div",[a("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e._v(" Show Options ")])])])},_=[],k=(a("a4d3"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3"));function b(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function C(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?b(Object(a),!0).forEach((function(n){Object(k["a"])(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var y={name:"RandomizationOptions",props:{value:{default:{}}},data:function(){return{shown:!1}},methods:{additionalModulesChange:function(e){var n=C({},this.value);n.additionalModules=e,this.$emit("input",n)}}},O=y,S=Object(g["a"])(O,v,_,!1,null,"26453d6c",null),A=S.exports,w=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"packs-selector panel"},[a("div",{staticClass:"panel-insert"},[e._v(" Selected packs ")]),e.shown?e._e():a("div",{staticClass:"packs-selected"},[e._v(" "+e._s(e.value.join(", "))+" ")]),e.shown?a("div",{staticClass:"packs"},e._l(e.packs,(function(n,t){return a("div",{key:t,staticClass:"pack-type-column"},[a("h3",[e._v(e._s(t))]),e._l(n,(function(n){return a("label",{key:n},[a("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.indexOf(n)>=0},on:{input:function(a){return e.togglePack(n,a.target.checked)}}}),e._v(e._s(n)+" ")])}))],2)})),0):e._e(),a("div",{staticClass:"toggle"},[a("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e.shown?a("span",[e._v("Finish Selection")]):a("span",[e._v("Add/Remove Packs")])])])])},M=[],j=(a("fb6a"),a("a434"),{name:"PackSelector",props:{value:{default:["Core Set"]},packs:{default:["Core Set"]}},data:function(){return{shown:!1}},methods:{togglePack:function(e,n){var a=this.value.slice(0);n?a.push(e):a.splice(a.indexOf(e),1),this.$emit("input",a)}}}),E=j,P=(a("6048"),Object(g["a"])(E,w,M,!1,null,"2c18682e",null)),x=P.exports,B=function(){var e=this,n=e.$createElement,a=e._self._c||n;return e.scenario?a("div",{staticClass:"scenario-randomizer panel"},[a("div",{staticClass:"title panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Scenario")]),e.shown?a("div",{staticClass:"content"},[a("div",[a("div",{staticClass:"main-scenario"},[a("img",{attrs:{src:e.scenario.scenario.img,alt:e.scenario.scenario.name}}),a("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(e.scenario.scenario.name)+"("+e._s(e.scenario.scenario.pack)+") ")])]),e._l(e.scenario.modules,(function(n,t){var r=n.deck,i=n.modules;return a("div",{key:t},[i.length>0?a("div",{staticClass:"deck"},[e.scenario.modules.length>1?a("div",{staticClass:"deck-name"},[e._v("Deck "+e._s(r.name))]):e._e(),a("div",{staticClass:"modules"},e._l(i,(function(n,t){return a("div",{key:t,staticClass:"module"},[a("img",{attrs:{src:n.img,alt:n.name}}),a("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(n.name)+"("+e._s(n.pack)+") ")])])})),0)]):e._e()])}))],2),a("div",{staticClass:"difficulty panel-insert-content"},[e._v(" Difficulty: "),a("span",{staticClass:"difficulty-value"},[e._v(" "+e._s(e.scenario.difficulty)+" ")])])]):e._e()]):e._e()},T=[],z={name:"Scenario.vue",props:{scenario:{required:!0}},data:function(){return{shown:!0}}},D=z,R=(a("1af3"),Object(g["a"])(D,B,T,!1,null,"2766e661",null)),I=R.exports,$=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"hero-randomizer panel"},[a("div",{staticClass:"title panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Players' Deck")]),e.availableDecks.length<e.numberOfPlayer?a("div",{staticClass:"warning"},[e._v(" Not enough Heroes for all the players. ")]):e._e(),e.shown?a("div",{staticClass:"decks"},e._l(e.selectedDecks,(function(n,t){var r=n.hero,i=n.aspects;return a("div",{key:t,staticClass:"hero-deck"},[a("h2",{staticClass:"panel-insert-content"},[e._v("Player "+e._s(t+1)+" "),0===t?a("span",[e._v("(First Player)")]):e._e()]),a("div",{staticClass:"cards"},[a("div",{staticClass:"card"},[a("img",{attrs:{src:r.alterEgoImg,alt:r.alterEgo}})]),a("div",{staticClass:"card"},[a("img",{attrs:{src:r.heroImg,alt:r.hero}})]),e._l(i,(function(e){return a("div",{key:e.name,staticClass:"card"},[a("img",{attrs:{src:e.img,alt:e.name}})])}))],2),a("div",{staticClass:"name panel-insert-content"},[e._v(" "+e._s(r.alterEgo)+" / "+e._s(r.hero)+"("+e._s(r.pack)+") + "+e._s(i.map((function(e){return e.name})).join(" + "))+" ")])])})),0):e._e()])},W=[],G={name:"DeckList",props:{numberOfPlayer:{default:1},availableDecks:{default:[],required:!0}},data:function(){return{shown:!0}},computed:{selectedDecks:function(){return this.availableDecks.slice(0,this.numberOfPlayer)}}},H=G,N=(a("7a34"),Object(g["a"])(H,$,W,!1,null,"35d2566f",null)),F=N.exports,K=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog panel"},[a("div",{staticClass:"panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Changelog")]),e.shown?a("div",[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8)]):e._e()])},J=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On january 21st 2021")]),a("ul",[a("li",[e._v("Add Wasp")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On january 18th 2021")]),a("ul",[a("li",[e._v("Add Ant-Man")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On october 9th 2020")]),a("ul",[a("li",[e._v("Add The Rise of Red Skull and Kang scenarios and modules")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On may 24th 2020")]),a("ul",[a("li",[e._v("Add Hulk, Hawkeye(missing the alter-ego visual) and Spider-woman")]),a("li",[e._v("Add support for multiple aspects heroes (Spider-woman / Jessica Drew - The Rise of Red Skull)")]),a("li",[e._v("Fix difficulties")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On february 16th 2020")]),a("ul",[a("li",[e._v("Add Black Widow and Doctor Strange")]),a("li",[e._v("Update Green Goblin and Wrecking Crew pictures")]),a("li",[e._v("Add contribute note at the bottom of the page")]),a("li",[e._v("Add first player indicator in deck list")]),a("li",[e._v("Add custom options to generate only scenario or decks")]),a("li",[e._v("Add difficulty selector")]),a("li",[e._v("Add Wrecking Crew custom difficulties")]),a("li",[e._v("Add Nightmare difficulty in selectable difficulties (All 3 levels of a villains)")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On january 2nd 2020")]),a("ul",[a("li",[e._v("Add offline availability")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On december 23rd 2019")]),a("ul",[a("li",[e._v("Refactored the randomization for a bit more of future proofing")]),a("li",[e._v("Add support for first customization option: Extra modules")])]),a("h3",[e._v("On december 15th 2019")]),a("ul",[a("li",[e._v("Add saving of the selected packs you own in your browser")]),a("li",[e._v("Add the changelog list")]),a("li",[e._v("Display pack selection by categories (Heroes, Modules, Scenarios)")]),a("li",[e._v("A bit of redesign")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On december 13th 2019")]),a("ul",[a("li",[e._v("Add Support for Multiple packs")]),a("li",[e._v("Add scenarios and modules from Green Goblins and Wrecking Crew")]),a("li",[e._v("Add Heroes Ms. Marvel, Captain America and Thor")])])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"changelog-entry"},[a("h3",[e._v("On december 12th 2019 (and before)")]),a("ul",[a("li",[e._v("Add Scenario randomization")]),a("li",[e._v("Add Hero randomization")]),a("li",[e._v("Add Number of player selection")])])])}],L={name:"Changelog",data:function(){return{shown:!0}}},U=L,V=(a("47db"),Object(g["a"])(U,K,J,!1,null,"7cb857d7",null)),q=V.exports,Z=a("2909"),Q=a("3835"),X=a("d4ec"),Y=a("bee2");function ee(e){for(var n=e.slice(0),a=n.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[n[t],n[a]];n[a]=r[0],n[t]=r[1]}return n}var ne=function(){function e(){Object(X["a"])(this,e)}return Object(Y["a"])(e,[{key:"randomizeScenario",value:function(e,n,a){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{additionalModules:0},r=t.additionalModules,i=void 0===r?0:r,s=ee(e).shift(),o=s.decks||[{name:"encounter"}],l=ee(n),c=o.map((function(e){var n=(void 0!==e.minModules?e.minModules:1)+i;return{deck:e,modules:l.splice(0,n)}})),d=(s.difficulties||[]).filter((function(e){var n=Object(Q["a"])(e,1),t=n[0];return a.indexOf(t.toLowerCase())>=0})).map((function(e){var n=Object(Q["a"])(e,2),a=n[1];return a})),u=d.length?d:a,m=u[Math.floor(Math.random()*u.length)]||"No difficulty available";return{scenario:s,modules:c,difficulty:m}}},{key:"randomizeHeroes",value:function(e,n){var a=ee(e),t=ee(n);t.push.apply(t,Object(Z["a"])(ee(n)));for(var r=0;r<t.length-2;r++)if(t[r]===t[r+1]){var i=[t[r+2],t[r+1]];t[r+1]=i[0],t[r+2]=i[1]}for(var s=[],o=0;o<Math.min(4,a.length);o++){for(var l=[],c=a[o].numberOfAspects||1,d=0;d<c;d++)l.push(t.shift());s.push({hero:a[o],aspects:l})}return s}}]),e}(),ae=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[e._v(" Fork this project or contribute on "),a("a",{attrs:{href:"https://github.com/Naouak/marvel-lcg-randomizer",target:"_blank"}},[e._v("Github")]),e._v(". ")])}],re={name:"Contribute"},ie=re,se=Object(g["a"])(ie,ae,te,!1,null,"1fec2e7b",null),oe=se.exports,le=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"difficulties-selector panel"},[a("div",{staticClass:"panel-insert"},[e._v(" Selected difficulties ")]),e.shown?e._e():a("div",{staticClass:"difficulties-selected"},[e._v(" "+e._s(e.value.join(", "))+" ")]),e.shown?a("div",{staticClass:"difficulties"},[a("h3",[e._v("Difficulties")]),e._l(e.difficulties,(function(n){return a("div",{key:n,staticClass:"difficulty-type-column"},[a("label",[a("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.indexOf(n)>=0},on:{input:function(a){return e.toggleDifficulty(n,a.target.checked)}}}),e._v(e._s(n)+" ")])])}))],2):e._e(),a("div",{staticClass:"toggle"},[a("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e.shown?a("span",[e._v("Finish Selection")]):a("span",[e._v("Select difficulties")])])])])},ce=[],de={name:"DifficultySelector",props:{value:{default:["Standard","Expert"]},difficulties:{default:["Standard","Expert"]}},data:function(){return{shown:!1}},methods:{toggleDifficulty:function(e,n){var a=this.value.slice(0);n?a.push(e):a.splice(a.indexOf(e),1),this.$emit("input",a)}}},ue=de,me=(a("0a73"),Object(g["a"])(ue,le,ce,!1,null,"16eea743",null)),pe=me.exports,ge=["standard","expert","nightmare"],fe=window.localStorage,he={Heroes:l.map((function(e){return e.pack})).filter((function(e,n,a){return a.indexOf(e)===n})),Scenarios:s.map((function(e){return e.pack})).filter((function(e,n,a){return a.indexOf(e)===n})),Modules:o.map((function(e){return e.pack})).filter((function(e,n,a){return a.indexOf(e)===n}))},ve=new ne,_e=null;try{_e=JSON.parse(fe.getItem("selectedPacks"))||["Core Set"]}catch(Se){_e=["Core Set"],fe.removeItem("selectedPacks")}var ke={name:"app",data:function(){return{data:{scenarios:s,modules:o,heroes:l,aspects:c,packs:he,difficulties:ge},selectedPacks:_e,selectedScenario:null,selectedDecks:[],numberOfPlayer:1,randomizationOptions:{scenario:1,decks:1,selectedDifficulties:["standard","expert"]}}},watch:{selectedPacks:function(){fe.setItem("selectedPacks",JSON.stringify(this.selectedPacks)),this.randomize()},randomizationOptions:{handler:function(){this.randomize()},deep:!0}},created:function(){this.randomize()},computed:{availableScenarios:function(){var e=this;return this.data.scenarios.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableModules:function(){var e=this;return this.data.modules.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableHeroes:function(){var e=this;return this.data.heroes.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableDifficulties:function(){var e=this;return this.data.difficulties.filter((function(n){return e.randomizationOptions.selectedDifficulties.indexOf(n)>=0}))}},methods:{randomize:function(){this.selectedScenario=ve.randomizeScenario(this.availableScenarios,this.availableModules,this.availableDifficulties,this.randomizationOptions),this.selectedDecks=ve.randomizeHeroes(this.availableHeroes,this.data.aspects)}},components:{DifficultySelector:pe,Contribute:oe,Changelog:q,PackSelector:x,PlayerSelector:h,DeckList:F,Scenario:I,RandomizationOptions:A}},be=ke,Ce=(a("034f"),Object(g["a"])(be,r,i,!1,null,null,null)),ye=Ce.exports,Oe=a("9483");Object(Oe["a"])("".concat("/marvel-lcg-randomizer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(ye)}}).$mount("#app")},6048:function(e,n,a){"use strict";var t=a("6e31"),r=a.n(t);r.a},"6e31":function(e,n,a){},"7a34":function(e,n,a){"use strict";var t=a("cb69"),r=a.n(t);r.a},"84e3":function(e,n,a){"use strict";var t=a("e421"),r=a.n(t);r.a},"85ec":function(e,n,a){},"8b86":function(e,n,a){},a023:function(e,n,a){},b640:function(e,n,a){e.exports=a.p+"img/logo.7184bee2.jpg"},bd2d:function(e,n,a){},cb69:function(e,n,a){},e421:function(e,n,a){}});
//# sourceMappingURL=app.69facec7.js.map