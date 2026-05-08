const data = [
	{
			name: "Ash Salt Cookie",
			icon: "img/card/ash-salt.png",
			rarity: "epic",
			role: "ambush",
			position: "front",
			element: ["darkness"],
			resonant: ["chrono"],
			alias: ["asalt","ashalt","asc"],
			builds: [
			{
				title: "PVP 1",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush03.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush02.png"],
				lines: ["4 Darkness DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Timekeeper Cookie",
			icon: "img/card/timekeeper.png",
			rarity: "legendary",
			role: "magic",
			position: "middle",
			element: ["light"],
			resonant: ["chrono"],
			alias: ["tkeeper","tkc"],
			builds: [
			{
				title: "PVP 1",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic04.png"],
				lines: ["4 Light DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Zoey Cookie",
			icon: "img/card/zoey.png",
			rarity: "special",
			role: "ranged",
			position: "rear",
			element: [],
			resonant: ["unison"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Mira Cookie",
			icon: "img/card/mira.png",
			rarity: "special",
			role: "charge",
			position: "front",
			element: [],
			resonant: ["unison"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Rumi Cookie",
			icon: "img/card/rumi.png",
			rarity: "special",
			role: "ambush",
			position: "front",
			element: [],
			resonant: ["unison"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Sugar Swan Cookie",
			icon: "img/card/sugar-swan.png",
			rarity: "legendary",
			role: "healing",
			position: "rear",
			element: ["light"],
			resonant: ["life-energy"],
			alias: ["sswan cookie","sugswan cookie","ssc"],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: "44.0% ATK (Toppings), 35.0% Cooldown"
			},{
				title: "PVP (CRIT-less)",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: "44.0% ATK (Toppings), 35.0% Cooldown"
			},{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "44.0% ATK (Toppings)"
			},{
				title: "PVE (Sub-less)",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: [],
				requirement: "35.0% Cooldown"
			}
	]},
	{
			name: "Pom-pom Dough Cookie",
			icon: "img/card/pom-pom-dough.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["poison","chaos"],
			resonant: ["looming-dark","life-energy"],
			alias: ["pdough","ppdough","pomdough","ppdc"],
			builds: [{
				title: "Red Velvet Dragon 1",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "8.750% Cooldown"
			},{
				title: "Red Velvet Dragon 2",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "8.750% Cooldown"
			},{
				title: "Red Velvet Dragon (Element-less) 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Red Velvet Dragon (Element-less) 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Venom Dough Cookie",
			icon: "img/card/venom-dough.png",
			rarity: "super epic",
			role: "bomber",
			position: "rear",
			element: ["poison","chaos"],
			resonant: ["looming-dark","life-energy"],
			alias: ["vdough","vendough","vdc"],
			builds: [
			{
				title: "PVP 1",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","Amplify Buff"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","Amplify Buff"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber07.png"],
				lines: ["4 Chaos DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","Amplify Buff"],
				requirement: ""
			},
	]},
	{
			name: "Mold Dough Cookie",
			icon: "img/card/mold-dough.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["chaos"],
			resonant: ["looming-dark","heaven-splitter","life-energy"],
			alias: ["mdough","mdc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/charge.png","img/core/charge07.png"],
				lines: ["4 Chaos DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Dark Enchantress Cookie",
			icon: "img/card/dark-enchantress.png",
			rarity: "witch",
			role: "magic",
			position: "middle",
			element: ["chaos"],
			resonant: ["looming-dark","heaven-splitter","life-energy"],
			alias: ["denchantress","dec"],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: "8.0% Cooldown, 111.0% ATK / 9.0% Cooldown, 108.0% ATK"
			},{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic07.png"],
				lines: ["4 Chaos DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "8.0% Cooldown"
			},{
				title: "PVE (Sub-less)",
				beascuitImgs: ["img/base/magic.png","img/core/magic07.png"],
				lines: ["4 Chaos DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: [],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Millennial Tree Cookie",
			icon: "img/card/millennial-tree.png",
			rarity: "legendary",
			role: "support",
			position: "front",
			element: ["grass"],
			resonant: ["ancient-root","frost-herbalist","crossed-fates"],
			alias: ["mtree","miltree","milltree","millentree","mtc","millie"],
			builds: [
			{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/kiwi.png",
					"img/topping/kiwi.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP","Debuff Resist"],
				requirement: ""
			},{
				title: "PVE Tank",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			},{
				title: "PVE DPS 1",
				beascuitImgs: ["img/base/support.png","img/core/support06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE DPS 2",
				beascuitImgs: ["img/base/support.png","img/core/support06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Glinda Cookie",
			icon: "img/card/glinda.png",
			rarity: "special",
			role: "magic",
			position: "rear",
			element: [],
			resonant: ["verdigris"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Elphaba Cookie",
			icon: "img/card/elphaba.png",
			rarity: "special",
			role: "magic",
			position: "rear",
			element: [],
			resonant: ["verdigris"],
			alias: ["elphie"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Chess Choco Cookie",
			icon: "img/card/chess-choco.png",
			rarity: "epic",
			role: "bomber",
			position: "rear",
			element: ["chaos"],
			resonant: ["gambit","looming-dark","heaven-splitter"],
			alias: ["cchoco","ccc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber07.png"],
				lines: ["4 Chaos DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Salt Cellar Cookie",
			icon: "img/card/salt-cellar.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["steel"],
			resonant: ["blooming","smithy"],
			alias: ["scellar","scc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "White Lily Cookie (Awakened)",
			icon: "img/card/white-lily-awakened.png",
			rarity: "ancient",
			role: "bomber",
			position: "middle",
			element: ["grass"],
			resonant: ["blooming","frost-herbalist","crossed-fates"],
			alias: ["awlc","awwlc","awkwlc","dbwlc","wlawk","wldb","wlcawk","wlcdb","awakened awk dawnbringer dbringer white lily wlily willy wlc cookie"],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVE 1",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE 2",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE 3",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "2s Start",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown"],
				requirement: "44.444% Cooldown"
			}
	]},
	{
			name: "Charcoal Cookie",
			icon: "img/card/charcoal.png",
			rarity: "epic",
			role: "magic",
			position: "rear",
			element: ["darkness"],
			resonant: ["silent","lunar-eclipse"],
			alias: ["coal"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Sub-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: [""],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "Stunlock",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Silent Salt Cookie",
			icon: "img/card/silent-salt.png",
			rarity: "beast",
			role: "ambush",
			position: "front",
			element: ["darkness","steel"],
			resonant: ["silent","smithy","lunar-eclipse","crossed-fates"],
			alias: ["ssalt","sisalt","silsalt","silensalt","ssc"],
			builds: [
			{
				title: "PVP 1",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP 3",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "Dark DMG",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush02.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Steel DMG",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Menthol Cookie",
			icon: "img/card/menthol.png",
			rarity: "epic",
			role: "bomber",
			position: "rear",
			element: ["water"],
			resonant: ["destined","smithy"],
			alias: ["meth"],
			builds: [
			{
				title: "Machine-God",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK"],
				requirement: "18.750% Cooldown, 11.628% ATK SPD"
			},{
				title: "General 1",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Seltzer Cookie",
			icon: "img/card/seltzer.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["water"],
			resonant: ["destined","smithy"],
			alias: [],
			builds: [
			{
				title: "Machine-God",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK"],
				requirement: "23.438% Cooldown"
			},{
				title: "Machine-God (Element-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK"],
				requirement: ""
			},{
				title: "General",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Doughael",
			icon: "img/card/doughael.png",
			rarity: "super epic",
			role: "healing",
			position: "middle",
			element: [],
			resonant: ["destined"],
			alias: ["dghael","dgc"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["3 HP","1 Cooldown"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			}
	]},
	{
			name: "Grapefruit Cookie",
			icon: "img/card/grapefruit.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["electricity"],
			resonant: ["fuzzy-wuzzy","seafarer","heaven-splitter"],
			alias: ["gfruit","gfc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "General (Sub-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "Taunt",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Lime Cookie",
			icon: "img/card/lime.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: ["fuzzy-wuzzy","seafarer"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "PVE (Sub-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Manju Cookie",
			icon: "img/card/manju.png",
			rarity: "epic",
			role: "ambush",
			position: "rear",
			element: ["water"],
			resonant: ["seafarer","smithy"],
			alias: [],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","ATK%","CRIT%"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Jagae Cookie",
			icon: "img/card/jagae.png",
			rarity: "epic",
			role: "support",
			position: "front",
			element: ["water"],
			resonant: ["seafarer","smithy"],
			alias: [],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 3",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Orange Cookie",
			icon: "img/card/orange.png",
			rarity: "epic",
			role: "magic",
			position: "rear",
			element: ["electricity"],
			resonant: ["fuzzy-wuzzy","seafarer","heaven-splitter"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "General (Sub-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			}
	]},
	{
			name: "Lemon Cookie",
			icon: "img/card/lemon.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["electricity"],
			resonant: ["fuzzy-wuzzy","seafarer","verdigris","heaven-splitter"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "General (Sub-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			}
	]},
	{
			name: "Marshmallow Bunny Cookie",
			icon: "img/card/marshmallow-bunny.png",
			rarity: "special",
			role: "support",
			position: "rear",
			element: [],
			resonant: ["fuzzy-wuzzy"],
			alias: ["mbunny","marshbunny","mallowbunny","mbc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Amplify Buff","Cooldown","CRIT%"],
				requirement: "25.0% Amplify Buff, 35.0% Cooldown"
			},{
				title: "General (Sub-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/candy.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Amplify Buff","Cooldown","CRIT%"],
				requirement: "25.0% Amplify Buff, 35.0% Cooldown"
			},{
				title: "2s Start",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Amplify Buff","Cooldown"],
				requirement: "25.0% Amplify Buff, 50.980% Cooldown"
			},{
				title: "ATK SPD",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Amplify Buff","Cooldown","ATK SPD"],
				requirement: "25.0% Amplify Buff"
			},{
				title: "ATK SPD (Sub-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/candy.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Amplify Buff","Cooldown","ATK SPD"],
				requirement: "25.0% Amplify Buff"
			}
	]},
	{
			name: "Cream Soda Cookie",
			icon: "img/card/cream-soda.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["water"],
			resonant: ["smithy"],
			alias: ["csoda","csc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png","img/core/charge04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Sugarfly Cookie",
			icon: "img/card/sugarfly.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: ["passionate","unison"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "PVE (Sub-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Hollyberry Cookie (Awakened)",
			icon: "img/card/hollyberry-awakened.png",
			rarity: "ancient",
			role: "defense",
			position: "front",
			element: ["steel"],
			resonant: ["draconic","passionate","smithy","crossed-fates"],
			alias: ["ahbc","awhbc","awkhbc","hbawk","hbcawk","awakened awk aegis hollyberry hberry hbc cookie"],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			},{
				title: "DPS",
				beascuitImgs: ["img/base/defense.png","img/core/defense05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Pavlova Cookie",
			icon: "img/card/pavlova.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: [],
			resonant: ["indolent"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Eternal Sugar Cookie",
			icon: "img/card/eternal-sugar.png",
			rarity: "beast",
			role: "bomber",
			position: "middle",
			element: ["poison"],
			resonant: ["indolent","frost-herbalist","crossed-fates"],
			alias: ["esugar","etsugar","esc"],
			builds: [
			{
				title: "PVE 1",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE 2",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE 3",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP 3",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff"],
				requirement: "8% Cooldown"
			},{
				title: "Living Abyss 1",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["CRIT%","ATK"],
				requirement: ""
			},{
				title: "Living Abyss 2",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["CRIT%","ATK"],
				requirement: ""
			},{
				title: "Stunlock",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Agar Agar Cookie",
			icon: "img/card/agar-agar.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["fire","electricity","water","wind","ice"],
			resonant: ["flaming","smithy","frost-herbalist","heaven-splitter"],
			alias: ["aagar","aac"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Fire Spirit Cookie",
			icon: "img/card/fire-spirit.png",
			rarity: "legendary",
			role: "magic",
			position: "rear",
			element: ["fire"],
			resonant: ["flaming","ancient-root","smithy"],
			alias: ["fspirit","fsc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png","img/core/magic03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Wedding Cake Cookie",
			icon: "img/card/wedding-cake.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: [],
			resonant: ["sacred-vow"],
			alias: ["wcake","wedcake","wcc"],
			builds: [
			{
				title: "Living Abyss",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "47.500% Cooldown"
			},{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "PVE (Sub-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			}
	]},
	{
			name: "Black Forest Cookie",
			icon: "img/card/black-forest.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: [],
			resonant: ["sacred-vow"],
			alias: ["bforest","bfc"],
			builds: [
			{
				title: "Living Abyss 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["2 ATK SPD","2 CRIT%"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["CRIT%","ATK","ATK SPD"],
				requirement: "33.898% ATK SPD"
			},{
				title: "Living Abyss 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["2 ATK SPD","2 CRIT%"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["CRIT%","ATK","ATK SPD"],
				requirement: "33.898% ATK SPD"
			},{
				title: "General",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["CRIT%","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Black Sapphire Cookie",
			icon: "img/card/black-sapphire.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["poison"],
			resonant: ["deceitful","frost-herbalist"],
			alias: ["bsapph","blaphire","blapphire","bsc"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/support04.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "General 3",
				beascuitImgs: ["img/base/support04.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Pure Vanilla Cookie (Awakened)",
			icon: "img/card/pure-vanilla-awakened.png",
			rarity: "ancient",
			role: "healing",
			position: "rear",
			element: ["light"],
			resonant: ["truthful","lunar-eclipse","crossed-fates"],
			alias: ["apvc","awpvc","awkpvc","cpvc","pvawk","pvcawk","pvcc","awakened awk compassionate pure vanilla pvanilla pvc cookie"],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["2 HP","1 DMG Resist","1 Cooldown"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: "35.0% DMG Resist, 15.0% Cooldown"
			},{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Candy Apple Cookie",
			icon: "img/card/candy-apple.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: [],
			resonant: ["deceitful"],
			alias: ["capple","cac"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["2 DMG Resist","2 ATK SPD"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["DMG Resist","Cooldown","ATK SPD","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Shadow Milk Cookie",
			icon: "img/card/shadow-milk.png",
			rarity: "beast",
			role: "magic",
			position: "middle",
			element: [],
			resonant: ["deceitful","crossed-fates"],
			alias: ["smilk","shmilk","shamilk","smc"],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "85.0% CRIT%"
			},{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Okchun Cookie",
			icon: "img/card/okchun.png",
			rarity: "epic",
			role: "healing",
			position: "middle",
			element: [],
			resonant: ["unison"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "PVE (Sub-less)",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Green Tea Mousse Cookie",
			icon: "img/card/green-tea-mousse.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["wind","grass"],
			resonant: ["iris-gem","blooming","frost-herbalist","heaven-splitter"],
			alias: ["gtmc"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Pudding à la Mode Cookie",
			icon: "img/card/pudding-a-la-mode.png",
			rarity: "epic",
			role: "bomber",
			position: "rear",
			element: ["electricity"],
			resonant: ["iris-gem","heaven-splitter"],
			alias: ["pudding a la mode cookie","palmc"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Choco Drizzle Cookie",
			icon: "img/card/choco-drizzle.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["darkness"],
			resonant: ["iris-gem","lunar-eclipse"],
			alias: ["cdrizzle","cdc"],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush02.png"],
				lines: ["4 Darkness DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Red Osmanthus Cookie",
			icon: "img/card/red-osmanthus.png",
			rarity: "epic",
			role: "ranged",
			position: "middle",
			element: ["grass"],
			resonant: ["fragrant","frost-herbalist"],
			alias: ["red ozzy","red ozzie"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK SPD","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK SPD","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Golden Osmanthus Cookie",
			icon: "img/card/golden-osmanthus.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["grass"],
			resonant: ["fragrant","frost-herbalist"],
			alias: ["golden ozzy","golden ozzie"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Sub-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Charm",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Camellia Cookie",
			icon: "img/card/camellia.png",
			rarity: "super epic",
			role: "charge",
			position: "front",
			element: ["grass"],
			resonant: ["fragrant","frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 3",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Smoked Cheese Cookie",
			icon: "img/card/smoked-cheese.png",
			rarity: "epic",
			role: "magic",
			position: "rear",
			element: ["earth"],
			resonant: ["radiant-cheese","lunar-eclipse"],
			alias: ["scheese","smeese","scc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png","img/core/magic03.png"],
				lines: ["4 Earth DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Golden Cheese Cookie (Awakened)",
			icon: "img/card/golden-cheese-awakened.png",
			rarity: "ancient",
			role: "ranged",
			position: "middle",
			element: ["earth"],
			resonant: ["radiant-cheese","lunar-eclipse","crossed-fates"],
			alias: ["agcc","awgcc","awkgcc","igcc","gcawk","gci","gccawk","gcci","awakened awk immortal golden cheese gcheese gcc cookie"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged03.png"],
				lines: ["4 Earth DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Nutmeg Tiger Cookie",
			icon: "img/card/nutmeg-tiger.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["fire"],
			resonant: ["destructive","smithy"],
			alias: ["ntiger","nuttiger","ntc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Burning Spice Cookie",
			icon: "img/card/burning-spice.png",
			rarity: "beast",
			role: "charge",
			position: "front",
			element: ["fire"],
			resonant: ["destructive","smithy","crossed-fates"],
			alias: ["bspice","burnspice","bsc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png","img/core/charge03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT","ATK SPD"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Wind Archer Cookie",
			icon: "img/card/wind-archer.png",
			rarity: "legendary",
			role: "ranged",
			position: "rear",
			element: ["wind"],
			resonant: ["life-sprouting","ancient-root","heaven-splitter"],
			alias: ["warcher","wac"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged06.png"],
				lines: ["4 Wind DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["CRIT%","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["CRIT%","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "Living Abyss",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged06.png"],
				lines: ["4 Wind DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["CRIT%","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged06.png"],
				lines: ["4 Wind DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["DMG Resist","ATK SPD","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Star Coral Cookie",
			icon: "img/card/star-coral.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: ["moonkissed"],
			alias: ["scoral","scc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Avatar of Destiny",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "54.911-55.357% Cooldown"
			}
	]},
	{
			name: "Cream Ferret Cookie",
			icon: "img/card/cream-ferret.png",
			rarity: "special",
			role: "support",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["cferret","cfc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Living Abyss",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK"],
				requirement: "58.681% Cooldown"
			},{
				title: "4s Start",
				beascuitImgs: ["img/base/support.png"],
				lines: ["2 Cooldown","2 ATK"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "16.667% Cooldown"
			},{
				title: "3s Start",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "35.185% Cooldown"
			},{
				title: "2s Start",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "53.704% Cooldown"
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 3",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Peach Blossom Cookie",
			icon: "img/card/peach-blossom.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: [],
			resonant: [],
			alias: ["pblossom","pbc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Dark Cacao Cookie (Awakened)",
			icon: "img/card/dark-cacao-awakened.png",
			rarity: "ancient",
			role: "charge",
			position: "front",
			element: ["darkness"],
			resonant: ["gambit","heaven-splitter","lunar-eclipse","crossed-fates"],
			alias: ["adcc","awdcc","awkdcc","dldcc","dcawk","dcdl","dccawk","dccdl","adcac","awdcac","awkdcac","dldcac","dcaawk","dcadl","dcacawk","dcacdl","awakened awk dragon lord dlord dark cacao dcacao dccc dcac cookie"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge02.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Cloud Haetae Cookie",
			icon: "img/card/cloud-haetae.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			resonant: ["verdigris"],
			alias: ["chaetae","chc"],
			builds: [
			{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Mystic Flour Cookie",
			icon: "img/card/mystic-flour.png",
			rarity: "beast",
			role: "healing",
			position: "rear",
			element: [],
			resonant: ["gambit","crossed-fates"],
			alias: ["mflour","mfc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: ""
			}
	]},
	{
			name: "Stormbringer Cookie",
			icon: "img/card/stormbringer.png",
			rarity: "legendary",
			role: "charge",
			position: "front",
			element: ["electricity"],
			resonant: ["fuzzy-wuzzy","ancient-root","heaven-splitter"],
			alias: ["sbringer","sbc"],
			builds: [
			{
				title: "PVE 1",
				beascuitImgs: ["img/base/charge.png","img/core/charge02.png"],
				lines: ["4 Electric DMG"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE 2",
				beascuitImgs: ["img/base/charge.png","img/core/charge02.png"],
				lines: ["4 Electric DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE 1 (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE 2 (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/charge.png","img/core/charge02.png"],
				lines: ["4 Electric DMG"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["DMG Resist","Cooldown","CRIT%"],
				requirement: ""
			},{
				title: "PVP (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["DMG Resist","Cooldown","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Street Urchin Cookie",
			icon: "img/card/street-urchin.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["fire"],
			resonant: ["smithy"],
			alias: ["surchin","suc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Caramel Choux Cookie",
			icon: "img/card/caramel-choux.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: ["unison"],
			alias: ["cchoux","ccc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Butter Roll Cookie",
			icon: "img/card/butter-roll.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel","chaos"],
			resonant: ["looming-dark","smithy","heaven-splitter"],
			alias: ["broll","butroll","brc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Matcha Cookie",
			icon: "img/card/matcha.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["poison","grass"],
			resonant: ["looming-dark","frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png","img/core/magic04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Elder Faerie Cookie",
			icon: "img/card/elder-faerie.png",
			rarity: "super epic",
			role: "defense",
			position: "front",
			element: ["steel"],
			resonant: ["smithy"],
			alias: ["efaerie","eldfaerie","efc"],
			builds: [
			{
				title: "Tank",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Mercurial Knight Cookie",
			icon: "img/card/mercurial-knight.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel"],
			resonant: ["verdigris","smithy"],
			alias: ["mknight","mkc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Silverbell Cookie",
			icon: "img/card/silverbell.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["grass"],
			resonant: ["blooming","frost-herbalist"],
			alias: ["sbell","sbc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "White Lily Cookie",
			icon: "img/card/white-lily.png",
			rarity: "ancient",
			role: "bomber",
			position: "middle",
			element: ["grass"],
			resonant: ["blooming","frost-herbalist","crossed-fates"],
			alias: ["wlily","willy","wlc"],
			builds: [
			{
				title: "PVE 1",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE 2",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "2s Start",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown"],
				requirement: "44.444% Cooldown"
			}
	]},
	{
			name: "Rebel Cookie",
			icon: "img/card/rebel.png",
			rarity: "epic",
			role: "ambush",
			position: "front",
			element: ["wind"],
			resonant: ["life-sprouting","heaven-splitter"],
			alias: [],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush06.png"],
				lines: ["4 Wind DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Linzer Cookie",
			icon: "img/card/linzer.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/support.png"],
				lines: ["3 DMG Resist","1 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "General 3",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Crème Brûlée Cookie",
			icon: "img/card/creme-brulee.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["light"],
			resonant: ["truthful","lunar-eclipse"],
			alias: ["creme brulee cookie","cbrulee","crulee","cbc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "Demon Distress",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Icicle Yeti Cookie",
			icon: "img/card/icicle-yeti.png",
			rarity: "special",
			role: "healing",
			position: "front",
			element: ["ice"],
			resonant: ["frosted-crystal","frost-herbalist"],
			alias: ["iyeti","iyc"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "35.0% Cooldown"
			},{
				title: "General 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General 3",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General 4",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "35.0% Cooldown"
			}
	]},
	{
			name: "Olive Cookie",
			icon: "img/card/olive.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["earth","fire","electricity"],
			resonant: ["radiant-cheese","smithy","heaven-splitter","lunar-eclipse"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Mozzarella Cookie",
			icon: "img/card/mozzarella.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["earth"],
			resonant: ["radiant-cheese","sacred-vow","lunar-eclipse","unison"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png","img/core/magic03.png"],
				lines: ["4 Earth DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Fettuccine Cookie",
			icon: "img/card/fettucine.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["earth"],
			resonant: ["radiant-cheese","lunar-eclipse"],
			alias: [],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Burnt Cheese Cookie",
			icon: "img/card/burnt-cheese.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["earth"],
			resonant: ["radiant-cheese","lunar-eclipse"],
			alias: ["bcheese","bcc"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 3",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Golden Cheese Cookie",
			icon: "img/card/golden-cheese.png",
			rarity: "ancient",
			role: "ranged",
			position: "middle",
			element: ["earth"],
			resonant: ["radiant-cheese","lunar-eclipse","crossed-fates"],
			alias: ["gcheese","gcc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged03.png"],
				lines: ["4 Earth DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Frilled Jellyfish Cookie",
			icon: "img/card/frilled-jellyfish.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["water","electricity"],
			resonant: ["sea-salt","smithy","heaven-splitter"],
			alias: ["fjellyfish","fjc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "35.0% Cooldown"
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "35.0% Cooldown"
			}
	]},
	{
			name: "Crimson Coral Cookie",
			icon: "img/card/crimson-coral.png",
			rarity: "super epic",
			role: "defense",
			position: "front",
			element: ["water"],
			resonant: ["sea-salt","smithy"],
			alias: ["ccoral","ccc"],
			builds: [
			{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
			
	]},
	{
			name: "Peppermint Cookie",
			icon: "img/card/peppermint.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["water"],
			resonant: ["sea-salt","smithy"],
			alias: ["pmint","pepmint","pmc","ppmc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Black Lemonade Cookie",
			icon: "img/card/black-lemonade.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["electricity"],
			resonant: ["tropical-rock","heaven-splitter"],
			alias: ["blemonade","blc"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber02.png"],
				lines: ["4 Electric DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber02.png"],
				lines: ["4 Electric DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "General 3",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber02.png"],
				lines: ["4 Electric DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Shining Glitter Cookie",
			icon: "img/card/shining-glitter.png",
			rarity: "super epic",
			role: "magic",
			position: "middle",
			element: ["electricity"],
			resonant: ["tropical-rock","heaven-splitter"],
			alias: ["sglitter","shitter","sgc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "DPS",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Electric DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Rockstar Cookie",
			icon: "img/card/rockstar.png",
			rarity: "epic",
			role: "healing",
			position: "middle",
			element: [],
			resonant: ["tropical-rock"],
			alias: ["rstar","rsc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "5.0% CRIT% (Toppings)"
			},{
				title: "PVP",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["DMG Resist","CRIT%","ATK"],
				requirement: "5.0% CRIT% (Toppings)"
			}
	]},
	{
			name: "Snapdragon Cookie",
			icon: "img/card/snapdragon.png",
			rarity: "special",
			role: "support",
			position: "rear",
			element: [],
			resonant: ["draconic"],
			alias: ["sdragon","sdc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Tarte Tatin Cookie",
			icon: "img/card/tarte-tatin.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["fire"],
			resonant: ["draconic","smithy"],
			alias: ["ttatin","ttc","4t"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "Stunlock",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Pitaya Dragon Cookie",
			icon: "img/card/pitaya-dragon.png",
			rarity: "dragon",
			role: "charge",
			position: "front",
			element: ["fire"],
			resonant: ["draconic","smithy"],
			alias: ["pdragon","pidragon","pdc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/charge.png","img/core/charge03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "12.0% ATK (Toppings)"
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "12.0% ATK (Toppings)"
			},{
				title: "PVP",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: "12.0% ATK (Toppings)"
			}
	]},
	{
			name: "Royal Margarine Cookie",
			icon: "img/card/royal-margarine.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["poison"],
			resonant: ["draconic","frost-herbalist"],
			alias: ["rmargarine","rmc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Kouign-Amann Cookie",
			icon: "img/card/kouign-amann.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["light"],
			resonant: ["trio","truthful","lunar-eclipse"],
			alias: ["kamann","kac"],
			builds: [
			{
				title: "PVE 1",
				beascuitImgs: ["img/base/defense.png","img/core/defense04.png"],
				lines: ["4 Light DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "PVE 2",
				beascuitImgs: ["img/base/defense-tainted.png","img/core/defense04.png"],
				lines: ["20.0% Light DMG","3 ATK SPD"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "PVE 3",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Prune Juice Cookie",
			icon: "img/card/prune-juice.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["poison"],
			resonant: ["trio","frost-herbalist"],
			alias: ["pjuice","pjc"],
			builds: [
			{
				title: "Red Velvet Dragon 1",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["2 Poison DMG","2 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "Red Velvet Dragon 2",
				beascuitImgs: ["img/base/bomber-tainted.png","img/core/bomber04.png"],
				lines: ["20.0% Poison DMG","3 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "35.0% Cooldown"
			},{
				title: "General",
				beascuitImgs: ["img/base/bomber-tainted.png","img/core/bomber04.png"],
				lines: ["20.0% Poison DMG","3 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Capsaicin Cookie",
			icon: "img/card/capsaicin.png",
			rarity: "super epic",
			role: "charge",
			position: "front",
			element: ["fire"],
			resonant: ["trio","smithy"],
			alias: ["caprison cookie"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png","img/core/charge03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Stardust Cookie",
			icon: "img/card/stardust.png",
			rarity: "super epic",
			role: "ambush",
			position: "middle",
			element: [],
			resonant: ["moonkissed"],
			alias: ["sdust","sdc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","CRIT%"],
				requirement: ""
			},{
				title: "Sleep",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Space Doughnut",
			icon: "img/card/space-doughnut.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: [],
			resonant: ["moonkissed"],
			alias: ["space donut","sdoughnut","sdonut","sponut","sd"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Blueberry Pie Cookie",
			icon: "img/card/blueberry-pie.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["electricity"],
			resonant: ["moonkissed","heaven-splitter"],
			alias: ["bpie","bluepie","bbpc"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Electricity DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Electricity DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Milky Way Cookie",
			icon: "img/card/milky-way.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: [],
			resonant: ["moonkissed"],
			alias: ["mway","mwc"],
			builds: [
			{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Support",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "ATK SPD",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Moonlight Cookie",
			icon: "img/card/moonlight.png",
			rarity: "legendary",
			role: "magic",
			position: "middle",
			element: [],
			resonant: ["moonkissed","ancient-root"],
			alias: ["mlight","mlc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "Sleep",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Prophet Cookie",
			icon: "img/card/prophet.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK SPD"],
				requirement: "10.0%+ CRIT%"
			}
	]},
	{
			name: "Pinecone Cookie",
			icon: "img/card/pinecone.png",
			rarity: "epic",
			role: "bomber",
			position: "front",
			element: ["ice"],
			resonant: ["frosted-crystal","frost-herbalist"],
			alias: ["pcone","pcc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber05.png"],
				lines: ["4 Ice DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber05.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "Stunlock",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Sherbet Cookie",
			icon: "img/card/sherbet.png",
			rarity: "super epic",
			role: "ranged",
			position: "middle",
			element: ["ice"],
			resonant: ["frosted-crystal","frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged05.png"],
				lines: ["4 Ice DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Carol Cookie",
			icon: "img/card/carol.png",
			rarity: "epic",
			role: "healing",
			position: "rear",
			element: ["grass"],
			resonant: ["frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Macaron Cookie",
			icon: "img/card/macaron.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: [],
			resonant: [],
			alias: ["macaroon cookie"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Schwarzwälder",
			icon: "img/card/schwarzwalder.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel","chaos"],
			resonant: ["sacred-vow","looming-dark","smithy","heaven-splitter"],
			alias: ["schwarzwalder","choco werehound brute"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Stunlock",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Jung Kook Cookie",
			icon: "img/card/jung-kook.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["bts","jk"],
			builds: [
			{
				title: "General",
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "V Cookie",
			icon: "img/card/v.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["bts"],
			builds: [
			{
				title: "General",
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Jimin Cookie",
			icon: "img/card/jimin.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["bts"],
			builds: [
			{
				title: "General",
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "j-hope Cookie",
			icon: "img/card/j-hope.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["bts"],
			builds: [
			{
				title: "General",
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "SUGA Cookie",
			icon: "img/card/suga.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["bts"],
			builds: [
			{
				title: "General",
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Jin Cookie",
			icon: "img/card/jin.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["bts"],
			builds: [
			{
				title: "General",
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "RM Cookie",
			icon: "img/card/rm.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["bts"],
			builds: [
			{
				title: "General",
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Candy Diver Cookie",
			icon: "img/card/candy-diver.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["cdiver","cdc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["2 Cooldown","2 Amplify Buff"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/candy.png",
					"img/topping/candy.png",
					"img/topping/candy.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Black Pearl Cookie",
			icon: "img/card/black-pearl.png",
			rarity: "legendary",
			role: "ambush",
			position: "middle",
			element: ["water"],
			resonant: ["sea-salt","ancient-root","smithy"],
			alias: ["bpearl","bpc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Captain Caviar Cookie",
			icon: "img/card/captain-caviar.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["water"],
			resonant: ["smithy"],
			alias: ["ccaviar","ccc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Cream Unicorn Cookie",
			icon: "img/card/cream-unicorn.png",
			rarity: "epic",
			role: "healing",
			position: "rear",
			element: ["fire"],
			resonant: ["smithy"],
			alias: ["cunicorn","crunicorn","cuc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Financier Cookie",
			icon: "img/card/financier.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["light"],
			resonant: ["truthful","sacred-vow","lunar-eclipse"],
			alias: ["finance cookie"],
			builds: [
			{
				title: "General 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "General 3",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Oyster Cookie",
			icon: "img/card/oyster.png",
			rarity: "super epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Crunchy Chip Cookie",
			icon: "img/card/crunchy-chip.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["darkness"],
			resonant: ["lunar-eclipse"],
			alias: ["cchip","ccc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge02.png"],
				lines: ["4 Darkness DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "ATK SPD",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Clotted Cream Cookie",
			icon: "img/card/clotted-cream.png",
			rarity: "super epic",
			role: "magic",
			position: "middle",
			element: ["light"],
			resonant: ["lunar-eclipse"],
			alias: ["ccream","ccc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic04.png"],
				lines: ["4 Light DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Light Cage",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Wildberry Cookie",
			icon: "img/card/wildberry.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["steel"],
			resonant: ["draconic","passionate","smithy"],
			alias: ["wberry","wbc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","HP","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Cherry Blossom Cookie",
			icon: "img/card/cherry-blossom.png",
			rarity: "epic",
			role: "ambush",
			position: "rear",
			element: ["grass"],
			resonant: ["frost-herbalist"],
			alias: ["cblossom","cbc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Dark Cacao Cookie",
			icon: "img/card/dark-cacao.png",
			rarity: "ancient",
			role: "charge",
			position: "front",
			element: ["darkness","electricity"],
			resonant: ["heaven-splitter","lunar-eclipse","crossed-fates"],
			alias: ["dcacao","dccc","dcac"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge02.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Caramel Arrow Cookie",
			icon: "img/card/caramel-arrow.png",
			rarity: "epic",
			role: "ranged",
			position: "front",
			element: ["darkness"],
			resonant: ["sacred-vow","lunar-eclipse","unison"],
			alias: ["carrow","cac"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged02.png"],
				lines: ["4 Darkness DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Affogato Cookie",
			icon: "img/card/affogato.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["poison"],
			resonant: ["looming-dark","frost-herbalist","heaven-splitter"],
			alias: [],
			builds: [
			{
				title: "Support",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Tea Knight Cookie",
			icon: "img/card/tea-knight.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel"],
			resonant: ["smithy"],
			alias: ["tknight","tktc"],
			builds: [
			{
				title: "PVP",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVE",
				beascuitImgs: ["img/base/charge.png","img/core/charge05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Eclair Cookie",
			icon: "img/card/eclair.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Cocoa Cookie",
			icon: "img/card/cocoa.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 3",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Frost Queen Cookie",
			icon: "img/card/frost-queen.png",
			rarity: "legendary",
			role: "magic",
			position: "middle",
			element: ["ice"],
			resonant: ["frosted-crystal","ancient-root","frost-herbalist"],
			alias: ["fqueen","fqc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/magic.png","img/core/magic05.png"],
				lines: ["4 Ice DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Cotton Cookie",
			icon: "img/card/cotton.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["grass"],
			resonant: ["frosted-crystal","frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Pumpkin Pie Cookie",
			icon: "img/card/pumpkin-pie.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["darkness"],
			resonant: ["lunar-eclipse"],
			alias: ["ppie","pkpc","ppc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Darkness DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Twizzly Gummy Cookie",
			icon: "img/card/twizzly-gummy.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["electricity"],
			resonant: ["heaven-splitter"],
			alias: ["tgummy","tgc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "ATK SPD",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "Demon Distress",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png",
					"img/topping/caramel.png"
				],
				substats: ["Cooldown","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "Living Abyss",
				beascuitImgs: ["img/base/ranged-tainted.png","img/core/ranged02.png"],
				lines: ["20.0% Electricity DMG","3 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK SPD"],
				requirement: "41.797% Cooldown"
			}
	]},
	{
			name: "Mala Sauce Cookie",
			icon: "img/card/mala-sauce.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["fire"],
			resonant: ["smithy"],
			alias: ["msauce","msc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png","img/core/charge03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Tails Cookie",
			icon: "img/card/tails.png",
			rarity: "special",
			role: "ambush",
			position: "middle",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Sonic Cookie",
			icon: "img/card/sonic.png",
			rarity: "special",
			role: "ambush",
			position: "middle",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Moon Rabbit Cookie",
			icon: "img/card/moon-rabbit.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			resonant: [],
			alias: ["mrabbit","mrc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 3",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Hollyberry Cookie",
			icon: "img/card/hollyberry.png",
			rarity: "ancient",
			role: "defense",
			position: "front",
			element: ["steel"],
			resonant: ["draconic","passionate","smithy","crossed-fates"],
			alias: ["hberry","hbc"],
			builds: [
			{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 3",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "DPS",
				beascuitImgs: ["img/base/defense.png","img/core/defense05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Raspberry Cookie",
			icon: "img/card/raspberry.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel"],
			resonant: ["passionate","smithy"],
			alias: ["rberry","rbc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Parfait Cookie",
			icon: "img/card/parfait.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			resonant: ["tropical-rock"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Sorbet Shark Cookie",
			icon: "img/card/sorbet-shark.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["water"],
			resonant: ["sea-salt","smithy"],
			alias: ["sshark","ssc","sorbie"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Squid Ink Cookie",
			icon: "img/card/squid-ink.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["water"],
			resonant: ["smithy"],
			alias: ["squink","sic"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png","img/core/magic04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Lilac Cookie",
			icon: "img/card/lilac.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["grass"],
			resonant: ["frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Sea Fairy Cookie",
			icon: "img/card/sea-fairy.png",
			rarity: "legendary",
			role: "bomber",
			position: "middle",
			element: ["water"],
			resonant: ["sea-salt","ancient-root","smithy"],
			alias: ["sfairy","sfc"],
			builds: [
			{
				title: "Support",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "35.0% Cooldown"
			},{
				title: "DPS",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Stunlock",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Mango Cookie",
			icon: "img/card/mango.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["water"],
			resonant: ["tropical-rock","smithy"],
			alias: [],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/magic.png","img/core/magic04.png"],
				lines: ["4 Water DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Devil Cookie",
			icon: "img/card/devil.png",
			rarity: "rare",
			role: "magic",
			position: "middle",
			element: ["darkness"],
			resonant: ["lunar-eclipse"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Fig Cookie",
			icon: "img/card/fig.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["grass"],
			resonant: ["frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png","img/core/support06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Red Velvet Cookie",
			icon: "img/card/red-velvet.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["darkness"],
			resonant: ["looming-dark","heaven-splitter","lunar-eclipse"],
			alias: ["rvelvet","rvc"],
			builds: [
			{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Stunlock",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Pastry Cookie",
			icon: "img/card/pastry.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["wind"],
			resonant: ["life-sprouting","heaven-splitter"],
			alias: [],
			builds: [
			{
				title: "PVE DPS",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged06.png"],
				lines: ["4 Wind DMG"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["CRIT%","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVE DPS (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["CRIT%","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","ATK SPD","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Strawberry Crepe Cookie",
			icon: "img/card/strawberry-crepe.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			resonant: [],
			alias: ["screpe","strepe","scc"],
			builds: [
			{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 3",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Pure Vanilla Cookie",
			icon: "img/card/pure-vanilla.png",
			rarity: "ancient",
			role: "healing",
			position: "rear",
			element: [],
			resonant: ["truthful","lunar-eclipse","crossed-fates"],
			alias: ["pvanilla","pvc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Black Raisin Cookie",
			icon: "img/card/black-raisin.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["darkness"],
			resonant: ["radiant-cheese","lunar-eclipse"],
			alias: ["braisin","brc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush03.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["DMG Resist","Cooldown","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Almond Cookie",
			icon: "img/card/almond.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["earth"],
			resonant: ["lunar-eclipse"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Cream Puff Cookie",
			icon: "img/card/cream-puff.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["light"],
			resonant: ["lunar-eclipse"],
			alias: ["cpuff","cpc"],
			builds: [
			{
				title: "3s Start",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "50.0% CRIT% (Start), 27.083% Cooldown"
			},{
				title: "Living Abyss",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "50.0% CRIT% (Start), 14.063% Cooldown, 1.267x Wind Archer's HP"
			}
	]},
	{
			name: "Latte Cookie",
			icon: "img/card/latte.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["earth"],
			resonant: ["lunar-eclipse"],
			alias: [],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/magic.png","img/core/magic03.png"],
				lines: ["4 Earth DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Kumiho Cookie",
			icon: "img/card/kumiho.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["wind"],
			resonant: ["life-sprouting","heaven-splitter"],
			alias: [],
			builds: [
			{
				title: "Charm",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "2s Start",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["3 DMG Resist","1 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: "40.476% Cooldown"
			}
	]},
	{
			name: "Rye Cookie",
			icon: "img/card/rye.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["fire"],
			resonant: ["smithy"],
			alias: [],
			builds: [
			{
				title: "Support",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "DPS",
				beascuitImgs: ["img/base/ranged.png","img/core/ranged03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Custard Cookie III",
			icon: "img/card/custard-III.png",
			rarity: "rare",
			role: "healing",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Espresso Cookie",
			icon: "img/card/espresso.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["earth"],
			resonant: ["lunar-eclipse"],
			alias: [],
			builds: [
			{
				title: "Beast-Yeast (Challenge)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Debuff Resist"],
				toppingsImgs: [
					"img/tart/kiwi.png",
					"img/topping/kiwi.png",
					"img/topping/kiwi.png",
					"img/topping/kiwi.png",
					"img/topping/kiwi.png",
					"img/topping/kiwi.png"
				],
				substats: [],
				requirement: ""
			},{
				title: "PVE DPS",
				beascuitImgs: ["img/base/magic.png","img/core/magic03.png"],
				lines: ["4 Earth DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVE DPS (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Clover Cookie",
			icon: "img/card/clover.png",
			rarity: "rare",
			role: "support",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Madeleine Cookie",
			icon: "img/card/madeleine.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["light"],
			resonant: ["destined","lunar-eclipse"],
			alias: ["maddy"],
			builds: [
			{
				title: "PVE Support",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown"],
				requirement: ""
			},{
				title: "PVE DPS",
				beascuitImgs: ["img/base/defense.png","img/core/defense04.png"],
				lines: ["4 Light DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "PVE DPS (Element-less)",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["ATK","CRIT%","ATK SPD"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","ATK","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Licorice Cookie",
			icon: "img/card/licorice.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["darkness","poison","chaos"],
			resonant: ["looming-dark","heaven-splitter","lunar-eclipse"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["DMG Resist","Cooldown","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Poison Mushroom Cookie",
			icon: "img/card/poison-mushroom.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["poison","chaos"],
			resonant: ["looming-dark","frost-herbalist","heaven-splitter"],
			alias: ["pmushroom","pmc","shroomie"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Milk Cookie",
			icon: "img/card/milk.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "Taunt",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Purple Yam Cookie",
			icon: "img/card/purple-yam.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["grass"],
			resonant: ["frost-herbalist"],
			alias: ["pyam","pyc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Beet Cookie",
			icon: "img/card/beet.png",
			rarity: "common",
			role: "ranged",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Carrot Cookie",
			icon: "img/card/carrot.png",
			rarity: "rare",
			role: "support",
			position: "middle",
			element: ["grass"],
			resonant: ["frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png","img/core/support06.png"],
				lines: ["4 Grass DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Pomegranate Cookie",
			icon: "img/card/pomegranate.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["chaos"],
			resonant: ["looming-dark","heaven-splitter"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Chili Pepper Cookie",
			icon: "img/card/chili-pepper.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["fire"],
			resonant: ["smithy"],
			alias: ["cpepper","cpc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush03.png"],
				lines: ["4 Fire DMG"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Avocado Cookie",
			icon: "img/card/avocado.png",
			rarity: "rare",
			role: "defense",
			position: "front",
			element: ["steel"],
			resonant: ["smithy"],
			alias: [],
			builds: [
			{
				title: "Support",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "DPS",
				beascuitImgs: ["img/base/defense.png","img/core/defense05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 3",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Sparkling Cookie",
			icon: "img/card/sparkling.png",
			rarity: "epic",
			role: "healing",
			position: "rear",
			element: ["light"],
			resonant: ["truthful","lunar-eclipse"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Dark Choco Cookie",
			icon: "img/card/dark-choco.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["darkness"],
			resonant: ["lunar-eclipse"],
			alias: ["dchoco","dcc"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png","img/core/charge02.png"],
				lines: ["4 Darkness DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD","CRIT%"],
				requirement: ""
			},{
				title: "DPS (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK SPD","CRIT%"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP"],
				requirement: "75.0% DMG Resist"
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Pancake Cookie",
			icon: "img/card/pancake.png",
			rarity: "rare",
			role: "ambush",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "Support",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "DPS",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Herb Cookie",
			icon: "img/card/herb.png",
			rarity: "epic",
			role: "healing",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Onion Cookie",
			icon: "img/card/onion.png",
			rarity: "rare",
			role: "support",
			position: "middle",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Gumball Cookie",
			icon: "img/card/gumball.png",
			rarity: "rare",
			role: "bomber",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["gball","gbc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Mint Choco Cookie",
			icon: "img/card/mint-choco.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["wind"],
			resonant: ["life-sprouting","heaven-splitter"],
			alias: ["mchoco","mcc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Werewolf Cookie",
			icon: "img/card/werewolf.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel"],
			resonant: ["tropical-rock","smithy"],
			alias: ["wwolf","wwc"],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/charge.png","img/core/charge05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVE (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","ATK SPD"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","HP","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Blackberry Cookie",
			icon: "img/card/blackberry.png",
			rarity: "rare",
			role: "magic",
			position: "rear",
			element: [],
			resonant: [],
			alias: ["bberry","bbc"],
			builds: [
			{
				title: "Support",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "DPS",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Tiger Lily Cookie",
			icon: "img/card/tiger-lily.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: [],
			resonant: ["passionate"],
			alias: ["tlily","tiglily","tlc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ranged.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Adventurer Cookie",
			icon: "img/card/adventurer.png",
			rarity: "rare",
			role: "ambush",
			position: "middle",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Vampire Cookie",
			icon: "img/card/vampire.png",
			rarity: "epic",
			role: "ambush",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Alchemist Cookie",
			icon: "img/card/alchemist.png",
			rarity: "rare",
			role: "bomber",
			position: "middle",
			element: ["poison"],
			resonant: ["frost-herbalist"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Snow Sugar Cookie",
			icon: "img/card/snow-sugar.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["ice"],
			resonant: ["frosted-crystal","frost-herbalist"],
			alias: ["ssugar","ssc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png","img/core/magic05.png"],
				lines: ["4 Ice DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Cherry Cookie",
			icon: "img/card/cherry.png",
			rarity: "rare",
			role: "bomber",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Wizard Cookie",
			icon: "img/card/wizard.png",
			rarity: "common",
			role: "magic",
			position: "middle",
			element: ["electricity"],
			resonant: ["heaven-splitter"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Electric DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Muscle Cookie",
			icon: "img/card/muscle.png",
			rarity: "common",
			role: "charge",
			position: "front",
			element: ["steel"],
			resonant: ["smithy"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png","img/core/charge05.png"],
				lines: ["4 Steel DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "General (Element-less)",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Angel Cookie",
			icon: "img/card/angel.png",
			rarity: "common",
			role: "healing",
			position: "rear",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP 1",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "PVP 2",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Knight Cookie",
			icon: "img/card/knight.png",
			rarity: "rare",
			role: "defense",
			position: "front",
			element: ["steel"],
			resonant: ["smithy"],
			alias: [],
			builds: [
			{
				title: "Taunt",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","ATK SPD"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Princess Cookie",
			icon: "img/card/princess.png",
			rarity: "rare",
			role: "charge",
			position: "front",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "Ninja Cookie",
			icon: "img/card/ninja.png",
			rarity: "common",
			role: "ambush",
			position: "middle",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 ATK SPD"],
				toppingsImgs: [
					"img/tart/caramel.png",
					"img/topping/caramel.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png",
					"img/topping/apple-jelly.png"
				],
				substats: ["ATK SPD","CRIT%"],
				requirement: ""
			}
	]},
	{
			name: "Strawberry Cookie",
			icon: "img/card/strawberry.png",
			rarity: "common",
			role: "defense",
			position: "front",
			element: [],
			resonant: [],
			alias: [],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/defense.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]},
	{
			name: "GingerBrave",
			icon: "img/card/gingerbrave.png",
			rarity: "common",
			role: "charge",
			position: "front",
			element: [],
			resonant: [],
			alias: ["gbrave","gb"],
			builds: [
			{
				title: "DPS",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Tank 1",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			},{
				title: "Tank 2",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png",
					"img/topping/almond.png"
				],
				substats: ["DMG Resist","Cooldown"],
				requirement: ""
			}
	]}
];