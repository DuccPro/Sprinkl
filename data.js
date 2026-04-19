const data = [
	{
			name: "Zoey Cookie",
			icon: "img/card/zoey.png",
			rarity: "special",
			role: "ranged",
			position: "rear",
			element: [],
			alias: [],
			builds: [
			{
				title: "Demon Distress",
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
			alias: [],
			builds: [
			{
				title: "Demon Distress",
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
			alias: [],
			builds: [
			{
				title: "Demon Distress",
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
			icon: "img/card/sugar_swan.png",
			rarity: "legendary",
			role: "healing",
			position: "rear",
			element: ["light"],
			alias: ["sswan","ssc"],
			builds: [
			{
				title: "PVE",
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
				substats: ["Cooldown","ATK","CRIT%"],
				requirement: "35% ATK (Toppings)"
			},{
				title: "PVP",
				beascuitImgs: ["img/base/healing.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["DMG Resist","Cooldown","CRIT%"],
				requirement: "35% ATK (Toppings)"
			},{
				title: "CRIT-less",
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
				requirement: "35% ATK (Toppings)"
			}
	]},
	{
			name: "Pom-Pom Dough Cookie",
			icon: "img/card/pom-pom_dough.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["poison","chaos"],
			alias: ["pdough","ppdough","ppdc"],
			builds: [{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/support.png","img/core/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Venom Dough Cookie",
			icon: "img/card/venom_dough.png",
			rarity: "super epic",
			role: "bomber",
			position: "rear",
			element: ["poison","chaos"],
			alias: ["vdough","vendough","vdc"],
			builds: [
			{
				title: "Arena",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","Amplify Buff"],
				requirement: ""
			},{
				title: "Arena",
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
				title: "Arena",
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
			}
	]},
	{
			name: "Mold Dough Cookie",
			icon: "img/card/mold_dough.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["chaos"],
			alias: ["mdough","mdc"],
			builds: [
			{
				title: "General",
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
				substats: ["Cooldown","ATK","CRIT%","ATK SPD"],
				requirement: ""
			}
	]},
	{
			name: "Dark Enchantress Cookie",
			icon: "img/card/dark_enchantress.png",
			rarity: "witch",
			role: "magic",
			position: "middle",
			element: ["chaos"],
			alias: ["dec"],
			builds: [
			{
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
			}
	]},
	{
			name: "Millennial Tree Cookie",
			icon: "img/card/millennial_tree.png",
			rarity: "legendary",
			role: "support",
			position: "front",
			element: ["grass"],
			alias: ["mtree","mtc"],
			builds: [
			{
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
				title: "PVE DPS",
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
				title: "PVP",
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
				title: "PVP",
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
				title: "PVP",
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
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff"],
				requirement: ""
			},{
				title: "PVP",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 HP"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/kiwi.png",
					"img/topping/kiwi.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff"],
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
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
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
					"img/tart/chocolate.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
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
			name: "Chess Choco Cookie",
			icon: "img/card/chess_choco.png",
			rarity: "epic",
			role: "bomber",
			position: "rear",
			element: ["chaos"],
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
			icon: "img/card/salt_cellar.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["steel"],
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
			icon: "img/card/white_lily_awakened.png",
			rarity: "ancient",
			role: "bomber",
			position: "middle",
			element: ["grass"],
			alias: ["awlc","awwlc","awkwlc","dbwlc","wlawk","wldb","wlcawk","wlcdb","awakened dawnbringer awk aw db white lily wlily willy wl wlc cookie awakened dawnbringer awk aw db"],
			builds: [
	]},
	{
			name: "Charcoal Cookie",
			icon: "img/card/charcoal.png",
			rarity: "epic",
			role: "magic",
			position: "rear",
			element: ["darkness"],
			alias: [],
			builds: [
			{
				title: "PVE",
				beascuitImgs: ["img/base/magic.png","img/core/magic02.png"],
				lines: ["4 Dark DMG"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
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
			}
	]},
	{
			name: "Silent Salt Cookie",
			icon: "img/card/silent_salt.png",
			rarity: "beast",
			role: "ambush",
			position: "front",
			element: ["darkness","steel"],
			alias: ["ssalt","ssc"],
			builds: [
			{
				title: "PVE",
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
				title: "PVE",
				beascuitImgs: ["img/base/ambush.png","img/core/ambush06.png"],
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
			},{
				title: "PVP",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 DMG Resist Bypass"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png"
				],
				substats: ["DMG Resist","Cooldown","ATK","HP"],
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
				substats: ["Cooldown","ATK","ATK SPD%"],
				requirement: "18.8% Cooldown, 11.7% ATK SPD"
			},{
				title: "General",
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
				title: "Burst",
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
			}
	]},
	{
			name: "Seltzer Cookie",
			icon: "img/card/seltzer.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["water"],
			alias: [],
			builds: [
			{
				title: "General",
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
			alias: ["dghael"],
			builds: [
			{
				title: "General",
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
				title: "General",
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
			alias: ["gfruit","gfc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
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
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
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
			alias: [],
			builds: [
			{
				title: "Arcade",
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
			}
	]},
	{
			name: "Jagae Cookie",
			icon: "img/card/jagae.png",
			rarity: "epic",
			role: "support",
			position: "front",
			element: ["water"],
			alias: [],
			builds: [
			{
				title: "Arcade",
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
			name: "Orange Cookie",
			icon: "img/card/orange.png",
			rarity: "epic",
			role: "magic",
			position: "rear",
			element: ["electricity"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Lemon Cookie",
			icon: "img/card/lemon.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["electricity"],
			alias: [],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/ambush.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Marshmallow Bunny Cookie",
			icon: "img/card/marshmallow_bunny.png",
			rarity: "special",
			role: "support",
			position: "rear",
			element: [],
			alias: ["mbunny","marshbunny","mbc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/candy.png",
					"img/topping/candy.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["Amplify Buff","Cooldown","CRIT%"],
				requirement: "25.0% Amplify Buff"
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
				requirement: "25.0% Amplify Buff, 51.0% Cooldown (2s start)"
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
			}
	]},
	{
			name: "Cream Soda Cookie",
			icon: "img/card/cream_soda.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["water"],
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
				substats: ["Cooldown","CRIT%","ATK"],
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
			alias: ["sfly","sfc"],
			builds: [
			{
				title: "General",
				beascuitImgs: ["img/base/support.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Hollyberry Cookie (Awakened)",
			icon: "img/card/hollyberry_awakened.png",
			rarity: "ancient",
			role: "defense",
			position: "front",
			element: ["steel"],
			alias: ["ahbc","awhbc","awkhbc","hbawk","hbcawk","awakened aegis awk aw hollyberry hberry hb hbc cookie awakened aegis awk aw"],
			builds: [
	]},
	{
			name: "Pavlova Cookie",
			icon: "img/card/pavlova.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: [],
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
				substats: ["Cooldown","CRIT%","ATK"],
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
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Eternal Sugar Cookie",
			icon: "img/card/eternal_sugar.png",
			rarity: "beast",
			role: "bomber",
			position: "middle",
			element: ["poison"],
			alias: ["esugar","esc"],
			builds: [
			{
				title: "PVE",
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
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVE",
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
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVE",
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
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "PVP",
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
				substats: ["DMG Resist","Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "PVP",
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
				substats: ["DMG Resist","Cooldown","ATK","CRIT%"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/bomber.png"],
				lines: ["4 DMG Resist"],
				toppingsImgs: [
					"img/tart/peanut.png",
					"img/topping/peanut.png",
					"img/topping/peanut.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["DMG Resist","Cooldown","HP","Amplify Buff"],
				requirement: "8% Cooldown"
			},{
				title: "Living Abyss",
				beascuitImgs: ["img/base/bomber.png","img/core/bomber04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Agar Agar Cookie",
			icon: "img/card/agar_agar.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["fire","electricity","water","wind","ice"],
			alias: ["aac"],
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
			icon: "img/card/fire_spirit.png",
			rarity: "legendary",
			role: "magic",
			position: "rear",
			element: ["fire"],
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
			icon: "img/card/wedding_cake.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: [],
			alias: ["wcc"],
			builds: [
			{
				title: "Living Abyss",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: "47.5% Cooldown"
			},{
				title: "General",
				beascuitImgs: ["img/base/magic.png"],
				lines: ["4 Cooldown"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png",
					"img/topping/chocolate.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Black Forest Cookie",
			icon: "img/card/black_forest.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: [],
			alias: ["bfc"],
			builds: [
			{
				title: "Living Abyss",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["2 ATK SPD","2 CRIT%"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["CRIT%","ATK"],
				requirement: "33.9% ATK SPD"
			},{
				title: "Living Abyss",
				beascuitImgs: ["img/base/charge.png"],
				lines: ["2 ATK SPD","2 CRIT%"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["CRIT%","ATK"],
				requirement: "33.9% ATK SPD"
			}
	]},
	{
			name: "Black Sapphire Cookie",
			icon: "img/card/black_sapphire.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["poison"],
			alias: ["bsapph","bsc"],
			builds: [
			{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			},{
				title: "Red Velvet Dragon",
				beascuitImgs: ["img/base/support04.png"],
				lines: ["4 Poison DMG"],
				toppingsImgs: [
					"img/tart/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/raspberry.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png",
					"img/topping/apple_jelly.png"
				],
				substats: ["Cooldown","CRIT%","ATK"],
				requirement: ""
			}
	]},
	{
			name: "Pure Vanilla Cookie (Awakened)",
			icon: "img/card/pure_vanilla_awakened.png",
			rarity: "ancient",
			role: "healing",
			position: "rear",
			element: ["light"],
			alias: ["apvc","awpvc","awkpvc","cpvc","pvawk","pvcawk","pvcc","awakened compassionate awk aw pure vanilla pvanilla pv pvc cookie awakened compassionate awk aw"],
			builds: [
	]},
	{
			name: "Candy Apple Cookie",
			icon: "img/card/candy_apple.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: [],
			alias: ["capple","cac"],
			builds: [
	]},
	{
			name: "Shadow Milk Cookie",
			icon: "img/card/shadow_milk.png",
			rarity: "beast",
			role: "magic",
			position: "middle",
			element: [],
			alias: ["smilk","smc"],
			builds: [
	]},
	{
			name: "Okchun Cookie",
			icon: "img/card/okchun.png",
			rarity: "epic",
			role: "healing",
			position: "middle",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Green Tea Mousse Cookie",
			icon: "img/card/green_tea_mousse.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["wind","grass"],
			alias: ["gtmc"],
			builds: [
	]},
	{
			name: "Pudding à la Mode Cookie",
			icon: "img/card/pudding_a_la_mode.png",
			rarity: "epic",
			role: "bomber",
			position: "rear",
			element: ["electricity"],
			alias: ["pudding a la mode cookie","palmc"],
			builds: [
	]},
	{
			name: "Choco Drizzle Cookie",
			icon: "img/card/choco_drizzle.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["darkness"],
			alias: ["cdc"],
			builds: [
	]},
	{
			name: "Red Osmanthus Cookie",
			icon: "img/card/red_osmanthus.png",
			rarity: "epic",
			role: "ranged",
			position: "middle",
			element: ["grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Golden Osmanthus Cookie",
			icon: "img/card/golden_osmanthus.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Camellia Cookie",
			icon: "img/card/camellia.png",
			rarity: "super epic",
			role: "charge",
			position: "front",
			element: ["grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Smoked Cheese Cookie",
			icon: "img/card/smoked_cheese.png",
			rarity: "epic",
			role: "magic",
			position: "rear",
			element: ["earth"],
			alias: ["scc"],
			builds: [
	]},
	{
			name: "Golden Cheese Cookie (Awakened)",
			icon: "img/card/golden_cheese_awakened.png",
			rarity: "ancient",
			role: "ranged",
			position: "middle",
			element: ["earth"],
			alias: ["agcc","awgcc","awkgcc","igcc","gcawk","gci","gccawk","gcci","awakened immortal awk aw golden cheese gcheese gc gcc awakened cookie immortal awk aw"],
			builds: [
	]},
	{
			name: "Nutmeg Tiger Cookie",
			icon: "img/card/nutmeg_tiger.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["fire"],
			alias: ["ntc"],
			builds: [
	]},
	{
			name: "Burning Spice Cookie",
			icon: "img/card/burning_spice.png",
			rarity: "beast",
			role: "charge",
			position: "front",
			element: ["fire"],
			alias: ["bspice","bsc"],
			builds: [
	]},
	{
			name: "Wind Archer Cookie",
			icon: "img/card/wind_archer.png",
			rarity: "legendary",
			role: "ranged",
			position: "rear",
			element: ["wind"],
			alias: ["warcher","wac"],
			builds: [
	]},
	{
			name: "Star Coral Cookie",
			icon: "img/card/star_coral.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			alias: ["scoral","scc"],
			builds: [
	]},
	{
			name: "Cream Ferret Cookie",
			icon: "img/card/cream_ferret.png",
			rarity: "special",
			role: "support",
			position: "rear",
			element: [],
			alias: ["cferret","cfc"],
			builds: [
	]},
	{
			name: "Peach Blossom Cookie",
			icon: "img/card/peach_blossom.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: [],
			alias: ["pblossom","pbc"],
			builds: [
	]},
	{
			name: "Dark Cacao Cookie (Awakened)",
			icon: "img/card/dark_cacao_awakened.png",
			rarity: "ancient",
			role: "charge",
			position: "front",
			element: ["darkness"],
			alias: ["adcc","awdcc","awkdcc","dldcc","dcawk","dcdl","dccawk","dccdl","adcac","awdcac","awkdcac","dldcac","dcaawk","dcadl","dcacawk","dcacdl","awakened dragon lord awk aw dl dark cacao dcacao dca dcc dcac cookie awakened dragon lord awk aw dl"],
			builds: [
	]},
	{
			name: "Cloud Haetae Cookie",
			icon: "img/card/cloud_haetae.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			alias: ["chaetae","chc"],
			builds: [
	]},
	{
			name: "Mystic Flour Cookie",
			icon: "img/card/mystic_flour.png",
			rarity: "beast",
			role: "healing",
			position: "rear",
			element: [],
			alias: ["mflour","mfc"],
			builds: [
	]},
	{
			name: "Stormbringer Cookie",
			icon: "img/card/stormbringer.png",
			rarity: "legendary",
			role: "charge",
			position: "front",
			element: ["electricity"],
			alias: ["sbringer","sbc"],
			builds: [
	]},
	{
			name: "Street Urchin Cookie",
			icon: "img/card/street_urchin.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["fire"],
			alias: ["surchin","suc"],
			builds: [
	]},
	{
			name: "Caramel Choux Cookie",
			icon: "img/card/caramel_choux.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			alias: ["ccc"],
			builds: [
	]},
	{
			name: "Butter Roll Cookie",
			icon: "img/card/butter_roll.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel","chaos"],
			alias: ["brc"],
			builds: [
	]},
	{
			name: "Matcha Cookie",
			icon: "img/card/matcha.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["poison","grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Elder Faerie Cookie",
			icon: "img/card/elder_faerie.png",
			rarity: "super epic",
			role: "defense",
			position: "front",
			element: ["steel"],
			alias: ["efaerie","efc"],
			builds: [
	]},
	{
			name: "Mercurial Knight Cookie",
			icon: "img/card/mercurial_knight.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel"],
			alias: ["mkc"],
			builds: [
	]},
	{
			name: "Silverbell Cookie",
			icon: "img/card/silverbell.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["grass"],
			alias: ["sbell","sbc"],
			builds: [
	]},
	{
			name: "White Lily Cookie",
			icon: "img/card/white_lily.png",
			rarity: "ancient",
			role: "bomber",
			position: "middle",
			element: ["grass"],
			alias: ["wlily","willy","wlc"],
			builds: [
	]},
	{
			name: "Rebel Cookie",
			icon: "img/card/rebel.png",
			rarity: "epic",
			role: "ambush",
			position: "front",
			element: ["wind"],
			alias: [],
			builds: [
	]},
	{
			name: "Linzer Cookie",
			icon: "img/card/linzer.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Crème Brûlée Cookie",
			icon: "img/card/creme_brulee.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["light"],
			alias: ["creme brulee cookie","cbrulee","cbc"],
			builds: [
	]},
	{
			name: "Icicle Yeti Cookie",
			icon: "img/card/icicle_yeti.png",
			rarity: "special",
			role: "healing",
			position: "front",
			element: ["ice"],
			alias: ["iyc"],
			builds: [
	]},
	{
			name: "Olive Cookie",
			icon: "img/card/olive.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["earth","fire","electricity"],
			alias: [],
			builds: [
	]},
	{
			name: "Mozzarella Cookie",
			icon: "img/card/mozzarella.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["earth"],
			alias: [],
			builds: [
	]},
	{
			name: "Fettuccine Cookie",
			icon: "img/card/fettucine.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["earth"],
			alias: [],
			builds: [
	]},
	{
			name: "Burnt Cheese Cookie",
			icon: "img/card/burnt_cheese.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["earth"],
			alias: ["bcc"],
			builds: [
	]},
	{
			name: "Golden Cheese Cookie",
			icon: "img/card/golden_cheese.png",
			rarity: "ancient",
			role: "ranged",
			position: "middle",
			element: ["earth"],
			alias: ["gcheese","gcc"],
			builds: [
	]},
	{
			name: "Frilled Jellyfish Cookie",
			icon: "img/card/frilled_jellyfish.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["water","electricity"],
			alias: ["fjellyfish","fjc"],
			builds: [
	]},
	{
			name: "Crimson Coral Cookie",
			icon: "img/card/crimson_coral.png",
			rarity: "super epic",
			role: "defense",
			position: "front",
			element: ["water"],
			alias: ["ccoral","ccc"],
			builds: [
	]},
	{
			name: "Peppermint Cookie",
			icon: "img/card/peppermint.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["water"],
			alias: ["pmint","ppmc","pmc"],
			builds: [
	]},
	{
			name: "Black Lemonade Cookie",
			icon: "img/card/black_lemonade.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["electricity"],
			alias: ["blemonade","blc"],
			builds: [
	]},
	{
			name: "Shining Glitter Cookie",
			icon: "img/card/shining_glitter.png",
			rarity: "super epic",
			role: "magic",
			position: "middle",
			element: ["electricity"],
			alias: ["sglitter","sgc"],
			builds: [
	]},
	{
			name: "Rockstar Cookie",
			icon: "img/card/rockstar.png",
			rarity: "epic",
			role: "healing",
			position: "middle",
			element: [],
			alias: ["rstar","rsc"],
			builds: [
	]},
	{
			name: "Snapdragon Cookie",
			icon: "img/card/snapdragon.png",
			rarity: "special",
			role: "support",
			position: "rear",
			element: [],
			alias: ["sdragon","sdc"],
			builds: [
	]},
	{
			name: "Tarte Tatin Cookie",
			icon: "img/card/tarte_tatin.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["fire"],
			alias: ["ttatin","ttc","4t"],
			builds: [
	]},
	{
			name: "Pitaya Dragon Cookie",
			icon: "img/card/pitaya_dragon.png",
			rarity: "dragon",
			role: "charge",
			position: "front",
			element: ["fire"],
			alias: ["pdragon","pdc"],
			builds: [
	]},
	{
			name: "Royal Margarine Cookie",
			icon: "img/card/royal_margarine.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["poison"],
			alias: ["rmargarine","rmc"],
			builds: [
	]},
	{
			name: "Kouign-Amann Cookie",
			icon: "img/card/kouign-amann.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["light"],
			alias: ["kamann","kac"],
			builds: [
	]},
	{
			name: "Prune Juice Cookie",
			icon: "img/card/prune_juice.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["poison"],
			alias: ["pjuice","pjc"],
			builds: [
	]},
	{
			name: "Capsaicin Cookie",
			icon: "img/card/capsaicin.png",
			rarity: "super epic",
			role: "charge",
			position: "front",
			element: ["fire"],
			alias: ["caprison cookie"],
			builds: [
	]},
	{
			name: "Stardust Cookie",
			icon: "img/card/stardust.png",
			rarity: "super epic",
			role: "ambush",
			position: "middle",
			element: [],
			alias: ["sdust","sdc"],
			builds: [
	]},
	{
			name: "Space Doughnut",
			icon: "img/card/space_doughnut.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: [],
			alias: ["space donut","sdoughnut","sdonut","sd"],
			builds: [
	]},
	{
			name: "Blueberry Pie Cookie",
			icon: "img/card/blueberry_pie.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["electricity"],
			alias: ["bpie","bpc","bbpc"],
			builds: [
	]},
	{
			name: "Milky Way Cookie",
			icon: "img/card/milky_way.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: [],
			alias: ["mway","mwc"],
			builds: [
	]},
	{
			name: "Moonlight Cookie",
			icon: "img/card/moonlight.png",
			rarity: "legendary",
			role: "magic",
			position: "middle",
			element: [],
			alias: ["mlight","mlc"],
			builds: [
	]},
	{
			name: "Prophet Cookie",
			icon: "img/card/prophet.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Pinecone Cookie",
			icon: "img/card/pinecone.png",
			rarity: "epic",
			role: "bomber",
			position: "front",
			element: ["ice"],
			alias: ["pcc"],
			builds: [
	]},
	{
			name: "Sherbet Cookie",
			icon: "img/card/sherbet.png",
			rarity: "super epic",
			role: "ranged",
			position: "middle",
			element: ["ice"],
			alias: [],
			builds: [
	]},
	{
			name: "Carol Cookie",
			icon: "img/card/carol.png",
			rarity: "epic",
			role: "healing",
			position: "rear",
			element: ["grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Macaron Cookie",
			icon: "img/card/macaron.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: [],
			alias: ["macaroon"],
			builds: [
	]},
	{
			name: "Schwarzwälder Cookie",
			icon: "img/card/schwarzwalder.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel","chaos"],
			alias: ["schwarzwalder","choco werehound brute","charles"],
			builds: [
	]},
	{
			name: "Jung Kook Cookie",
			icon: "img/card/jung_kook.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			alias: ["jk"],
			builds: [
	]},
	{
			name: "V Cookie",
			icon: "img/card/v.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Jin Cookie",
			icon: "img/card/jin.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "j-hope Cookie",
			icon: "img/card/j-hope.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "SUGA Cookie",
			icon: "img/card/suga.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Jin Cookie",
			icon: "img/card/jin.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "RM Cookie",
			icon: "img/card/rm.png",
			rarity: "special",
			role: "bts",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Candy Diver Cookie",
			icon: "img/card/candy_diver.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			alias: ["cdiver","cdc"],
			builds: [
	]},
	{
			name: "Black Pearl Cookie",
			icon: "img/card/black_pearl.png",
			rarity: "legendary",
			role: "ambush",
			position: "middle",
			element: ["water"],
			alias: ["bpearl","bpc"],
			builds: [
	]},
	{
			name: "Captain Caviar Cookie",
			icon: "img/card/captain_caviar.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["water"],
			alias: ["ccaviar","ccc"],
			builds: [
	]},
	{
			name: "Cream Unicorn Cookie",
			icon: "img/card/cream_unicorn.png",
			rarity: "epic",
			role: "healing",
			position: "rear",
			element: ["fire"],
			alias: ["cunicorn","cuc"],
			builds: [
	]},
	{
			name: "Financier Cookie",
			icon: "img/card/financier.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["light"],
			alias: [],
			builds: [
	]},
	{
			name: "Oyster Cookie",
			icon: "img/card/oyster.png",
			rarity: "super epic",
			role: "support",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Crunchy Chip Cookie",
			icon: "img/card/crunchy_chip.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["darkness"],
			alias: ["oreo cookie","cchip","ccc"],
			builds: [
	]},
	{
			name: "Clotted Cream Cookie",
			icon: "img/card/clotted_cream.png",
			rarity: "super epic",
			role: "magic",
			position: "middle",
			element: ["light"],
			alias: ["ccream","ccc"],
			builds: [
	]},
	{
			name: "Wildberry Cookie",
			icon: "img/card/wildberry.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["steel"],
			alias: ["wberry","wbc"],
			builds: [
	]},
	{
			name: "Cherry Blossom Cookie",
			icon: "img/card/cherry_blossom.png",
			rarity: "epic",
			role: "ambush",
			position: "rear",
			element: ["grass"],
			alias: ["cblossom","cbc"],
			builds: [
	]},
	{
			name: "Dark Cacao Cookie",
			icon: "img/card/dark_cacao.png",
			rarity: "ancient",
			role: "charge",
			position: "front",
			element: ["darkness","electricity"],
			alias: ["dcacao","dcc","dcac"],
			builds: [
	]},
	{
			name: "Caramel Arrow Cookie",
			icon: "img/card/caramel_arrow.png",
			rarity: "epic",
			role: "ranged",
			position: "front",
			element: ["darkness"],
			alias: ["carrow","cac"],
			builds: [
	]},
	{
			name: "Affogato Cookie",
			icon: "img/card/affogato.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["poison"],
			alias: [],
			builds: [
	]},
	{
			name: "Tea Knight Cookie",
			icon: "img/card/tea_knight.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel"],
			alias: ["tktc"],
			builds: [
	]},
	{
			name: "Eclair Cookie",
			icon: "img/card/eclair.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Cocoa Cookie",
			icon: "img/card/cocoa.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Frost Queen Cookie",
			icon: "img/card/frost_queen.png",
			rarity: "legendary",
			role: "magic",
			position: "middle",
			element: ["ice"],
			alias: ["elsa cookie","fqueen","fqc"],
			builds: [
	]},
	{
			name: "Cotton Cookie",
			icon: "img/card/cotton.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Pumpkin Pie Cookie",
			icon: "img/card/pumpkin_pie.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["darkness"],
			alias: ["ppc"],
			builds: [
	]},
	{
			name: "Twizzly Gummy Cookie",
			icon: "img/card/twizzly_gummy.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["electricity"],
			alias: ["tgummy","tgc"],
			builds: [
	]},
	{
			name: "Mala Sauce Cookie",
			icon: "img/card/mala_sauce.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["fire"],
			alias: ["msc"],
			builds: [
	]},
	{
			name: "Tails Cookie",
			icon: "img/card/tails.png",
			rarity: "special",
			role: "ambush",
			position: "middle",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Sonic Cookie",
			icon: "img/card/sonic.png",
			rarity: "special",
			role: "ambush",
			position: "middle",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Moon Rabbit Cookie",
			icon: "img/card/moon_rabbit.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			alias: ["mrabbit","mrc"],
			builds: [
	]},
	{
			name: "Hollyberry Cookie",
			icon: "img/card/hollyberry.png",
			rarity: "ancient",
			role: "defense",
			position: "front",
			element: ["steel"],
			alias: ["hberry","hbc"],
			builds: [
	]},
	{
			name: "Raspberry Cookie",
			icon: "img/card/raspberry.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel"],
			alias: ["rberry","rbc"],
			builds: [
	]},
	{
			name: "Parfait Cookie",
			icon: "img/card/parfait.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Sorbet Shark Cookie",
			icon: "img/card/sorbet_shark.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["water"],
			alias: ["sshark","ssc"],
			builds: [
	]},
	{
			name: "Squid Ink Cookie",
			icon: "img/card/squid_ink.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["water"],
			alias: ["squink","sic"],
			builds: [
	]},
	{
			name: "Lilac Cookie",
			icon: "img/card/lilac.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Sea Fairy Cookie",
			icon: "img/card/sea_fairy.png",
			rarity: "legendary",
			role: "bomber",
			position: "middle",
			element: ["water"],
			alias: ["sfairy","sfc"],
			builds: [
	]},
	{
			name: "Mango Cookie",
			icon: "img/card/mango.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["water"],
			alias: [],
			builds: [
	]},
	{
			name: "Devil Cookie",
			icon: "img/card/devil.png",
			rarity: "rare",
			role: "magic",
			position: "middle",
			element: ["darkness"],
			alias: [],
			builds: [
	]},
	{
			name: "Fig Cookie",
			icon: "img/card/fig.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Red Velvet Cookie",
			icon: "img/card/red_velvet.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["darkness"],
			alias: ["rvelvet","rvc"],
			builds: [
	]},
	{
			name: "Pastry Cookie",
			icon: "img/card/pastry.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["wind"],
			alias: [],
			builds: [
	]},
	{
			name: "Strawberry Crepe Cookie",
			icon: "img/card/strawberry_crepe.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			alias: ["screpe","scc"],
			builds: [
	]},
	{
			name: "Pure Vanilla Cookie",
			icon: "img/card/pure_vanilla.png",
			rarity: "ancient",
			role: "healing",
			position: "rear",
			element: [],
			alias: ["pvanilla","pvc"],
			builds: [
	]},
	{
			name: "Black Raisin Cookie",
			icon: "img/card/black_raisin.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["darkness"],
			alias: ["braisin","brc"],
			builds: [
	]},
	{
			name: "Almond Cookie",
			icon: "img/card/almond.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["earth"],
			alias: [],
			builds: [
	]},
	{
			name: "Cream Puff Cookie",
			icon: "img/card/cream_puff.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["light"],
			alias: ["cpuff","cpc"],
			builds: [
	]},
	{
			name: "Latte Cookie",
			icon: "img/card/latte.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["earth"],
			alias: [],
			builds: [
	]},
	{
			name: "Kumiho Cookie",
			icon: "img/card/kumiho.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["wind"],
			alias: [],
			builds: [
	]},
	{
			name: "Rye Cookie",
			icon: "img/card/rye.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: ["fire"],
			alias: [],
			builds: [
	]},
	{
			name: "Custard Cookie III",
			icon: "img/card/custard_III.png",
			rarity: "rare",
			role: "healing",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Espresso Cookie",
			icon: "img/card/espresso.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["earth"],
			alias: [],
			builds: [
	]},
	{
			name: "Clover Cookie",
			icon: "img/card/clover.png",
			rarity: "rare",
			role: "support",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Madeleine Cookie",
			icon: "img/card/madeleine.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: ["light"],
			alias: ["maddy"],
			builds: [
	]},
	{
			name: "Licorice Cookie",
			icon: "img/card/licorice.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["darkness","poison","chaos"],
			alias: [],
			builds: [
	]},
	{
			name: "Poison Mushroom Cookie",
			icon: "img/card/poison_mushroom.png",
			rarity: "epic",
			role: "bomber",
			position: "middle",
			element: ["poison","chaos"],
			alias: ["pmushroom","shroomie","pmc"],
			builds: [
	]},
	{
			name: "Milk Cookie",
			icon: "img/card/milk.png",
			rarity: "epic",
			role: "defense",
			position: "front",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Purple Yam Cookie",
			icon: "img/card/purple_yam.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["grass"],
			alias: ["pyam","pyc"],
			builds: [
	]},
	{
			name: "Beet Cookie",
			icon: "img/card/beet.png",
			rarity: "common",
			role: "ranged",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Carrot Cookie",
			icon: "img/card/carrot.png",
			rarity: "rare",
			role: "support",
			position: "middle",
			element: ["grass"],
			alias: [],
			builds: [
	]},
	{
			name: "Pomegranate Cookie",
			icon: "img/card/pomegranate.png",
			rarity: "epic",
			role: "support",
			position: "middle",
			element: ["chaos"],
			alias: [],
			builds: [
	]},
	{
			name: "Chili Pepper Cookie",
			icon: "img/card/chili_pepper.png",
			rarity: "epic",
			role: "ambush",
			position: "middle",
			element: ["fire"],
			alias: ["cpepper","cpc"],
			builds: [
	]},
	{
			name: "Avocado Cookie",
			icon: "img/card/avocado.png",
			rarity: "rare",
			role: "defense",
			position: "front",
			element: ["steel"],
			alias: [],
			builds: [
	]},
	{
			name: "Sparkling Cookie",
			icon: "img/card/sparkling.png",
			rarity: "epic",
			role: "healing",
			position: "rear",
			element: ["light"],
			alias: [],
			builds: [
	]},
	{
			name: "Dark Choco Cookie",
			icon: "img/card/dark_choco.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["darkness"],
			alias: ["dchoco","dcc"],
			builds: [
	]},
	{
			name: "Pancake Cookie",
			icon: "img/card/pancake.png",
			rarity: "rare",
			role: "ambush",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Herb Cookie",
			icon: "img/card/herb.png",
			rarity: "epic",
			role: "healing",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Onion Cookie",
			icon: "img/card/onion.png",
			rarity: "rare",
			role: "support",
			position: "middle",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Gumball Cookie",
			icon: "img/card/gumball.png",
			rarity: "rare",
			role: "bomber",
			position: "rear",
			element: [],
			alias: ["gball","gbc"],
			builds: [
	]},
	{
			name: "Mint Choco Cookie",
			icon: "img/card/mint_choco.png",
			rarity: "epic",
			role: "support",
			position: "rear",
			element: ["wind"],
			alias: ["mchoco","mcc"],
			builds: [
	]},
	{
			name: "Werewolf Cookie",
			icon: "img/card/werewolf.png",
			rarity: "epic",
			role: "charge",
			position: "front",
			element: ["steel"],
			alias: ["wwolf","wwc"],
			builds: [
	]},
	{
			name: "Blackberry Cookie",
			icon: "img/card/blackberry.png",
			rarity: "rare",
			role: "magic",
			position: "rear",
			element: [],
			alias: ["bberry","bbc"],
			builds: [
	]},
	{
			name: "Tiger Lily Cookie",
			icon: "img/card/tiger_lily.png",
			rarity: "epic",
			role: "ranged",
			position: "rear",
			element: [],
			alias: ["tlily","tlc"],
			builds: [
	]},
	{
			name: "Adventurer Cookie",
			icon: "img/card/adventurer.png",
			rarity: "rare",
			role: "ambush",
			position: "middle",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Vampire Cookie",
			icon: "img/card/vampire.png",
			rarity: "epic",
			role: "ambush",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Alchemist Cookie",
			icon: "img/card/alchemist.png",
			rarity: "rare",
			role: "middle",
			position: "middle",
			element: ["poison"],
			alias: [],
			builds: [
	]},
	{
			name: "Snow Sugar Cookie",
			icon: "img/card/snow_sugar.png",
			rarity: "epic",
			role: "magic",
			position: "middle",
			element: ["ice"],
			alias: ["ssugar","ssc"],
			builds: [
	]},
	{
			name: "Cherry Cookie",
			icon: "img/card/cherry.png",
			rarity: "rare",
			role: "bomber",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Wizard Cookie",
			icon: "img/card/wizard.png",
			rarity: "common",
			role: "magic",
			position: "middle",
			element: ["electricity"],
			alias: [],
			builds: [
	]},
	{
			name: "Muscle Cookie",
			icon: "img/card/muscle.png",
			rarity: "common",
			role: "charge",
			position: "front",
			element: ["steel"],
			alias: [],
			builds: [
	]},
	{
			name: "Angel Cookie",
			icon: "img/card/angel.png",
			rarity: "common",
			role: "healing",
			position: "rear",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Knight Cookie",
			icon: "img/card/knight.png",
			rarity: "rare",
			role: "defense",
			position: "front",
			element: ["steel"],
			alias: [],
			builds: [
	]},
	{
			name: "Princess Cookie",
			icon: "img/card/princess.png",
			rarity: "rare",
			role: "charge",
			position: "front",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Ninja Cookie",
			icon: "img/card/ninja.png",
			rarity: "common",
			role: "ambush",
			position: "middle",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "Strawberry Cookie",
			icon: "img/card/strawberry.png",
			rarity: "common",
			role: "defense",
			position: "front",
			element: [],
			alias: [],
			builds: [
	]},
	{
			name: "GingerBrave Cookie",
			icon: "img/card/gingerbrave.png",
			rarity: "common",
			role: "charge",
			position: "front",
			element: [],
			alias: ["gbc"],
			builds: [
	]}
];