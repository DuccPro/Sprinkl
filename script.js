const grid = document.getElementById("grid");
const details = document.getElementById("details");

const search = document.getElementById("search");
const clear = document.getElementById("clear");

function renderGrid(list) {
	grid.innerHTML = "";

	list.forEach(c => {
		const img = document.createElement("img");

		img.src = c.icon;
		img.onclick = () => showDetails(c);

		grid.appendChild(img);
	});
}

function formatLabel(str) {
	const specialCases = {
		"life-sprouting": "Life-Sprouting",
		"bts": "BTS"
	};

	if (specialCases[str]) return specialCases[str];

	return str
		.replace(/-/g, " ")
		.replace(/\b\w/g, c => c.toUpperCase());
}

function showDetails(c) {
	details.innerHTML = `
	<h2>${c.name}</h2>

	<div class="tags">

		<span class="tag">
			<div class="icon">
				<img src="img/icon/${c.rarity.replace(/\s+/g, "-")}.png">
			</div>
			${formatLabel(c.rarity)}
		</span>

		<span class="tag">
			<div class="icon">
				<img src="img/icon/${c.role}.png">
			</div>
			${formatLabel(c.role)}
		</span>

		<span class="tag">
			<div class="icon">
				<img src="img/icon/${c.position}.png">
			</div>
			${formatLabel(c.position)}
		</span>

		${
			(c.element && c.element.length)
			? c.element.map(el => `
				<span class="tag">
					<div class="icon">
						<img src="img/icon/${el}.png">
					</div>
					${formatLabel(el)}
				</span>
			`).join("")
			: ""
		}

		${
			(c.resonant && c.resonant.length)
			? c.resonant.map(r => `
				<span class="tag">
					<div class="icon">
						<img src="img/icon/${r}.png">
					</div>
					${formatLabel(r)}
				</span>
			`).join("")
			: ""
		}

	</div>

	${c.builds.map(b => `
		<div class="build">

			<h3>${b.title}</h3>

			<div class="gear">

				${b.beascuitImgs?.length ? `
				<div class="beascuit">
					${b.beascuitImgs.map(i => `<img src="${i}">`).join("")}
				</div>
				` : ""}

				${b.lines?.length ? `
				<ul class="lines">
					${b.lines.map(l => `<li>${l}</li>`).join("")}
				</ul>
				` : ""}

				${b.toppingsImgs?.length ? `
				<div class="toppings">
					${b.toppingsImgs.map(i => `<img src="${i}">`).join("")}
				</div>
				` : ""}

				${b.substats?.length ? `
				<ul class="substats">
					${b.substats.map(s => `<li>${s}</li>`).join("")}
				</ul>
				` : ""}

			</div>

			${b.requirement ? `<p>${b.requirement}</p>` : ""}

		</div>
	`).join("")}
	`;
}

/*filter*/

const rarityOrder = {
	witch: 0,
	ancient: 1,
	beast: 2,
	legendary: 3,
	dragon: 4,
	"super epic": 5,
	epic: 6,
	special: 7,
	rare: 8,
	common: 9
};

const cookieOrder = [
	"Rumi Cookie", "Mira Cookie", "GingerBrave", "Tea Knight Cookie", "Millennial Tree Cookie", "Silent Salt Cookie", "Hollyberry Cookie (Awakened)", "Hollyberry Cookie", "Space Doughnut", "Kouign-Amann Cookie", "Schwarzwälder", "Stormbringer Cookie", "Cloud Haetae Cookie", "Mold Dough Cookie", "Fettuccine Cookie", "Pinecone Cookie", "Elder Faerie Cookie", "Capsaicin Cookie", "Mala Sauce Cookie", "Camellia Cookie", "Wildberry Cookie", "Icicle Yeti Cookie", "Strawberry Cookie", "Moon Rabbit Cookie", "Mercurial Knight Cookie", "Princess Cookie", "Cocoa Cookie", "Dark Choco Cookie", "Muscle Cookie", "Crunchy Chip Cookie", "Crimson Coral Cookie", "Salt Cellar Cookie", "Burnt Cheese Cookie", "Pitaya Dragon Cookie", "Avocado Cookie", "Milky Way Cookie", "Rebel Cookie", "Strawberry Crepe Cookie", "Purple Yam Cookie", "Financier Cookie", "Butter Roll Cookie", "Kumiho Cookie", "Milk Cookie", "Dark Cacao Cookie (Awakened)", "Dark Cacao Cookie", "Madeleine Cookie", "Knight Cookie", "Red Velvet Cookie", "Black Forest Cookie", "Burning Spice Cookie", "Jagae Cookie", "Cream Soda Cookie", "Grapefruit Cookie", "Ash Salt Cookie", "Green Tea Mousse Cookie", "Raspberry Cookie", "Werewolf Cookie", "Caramel Arrow Cookie", "Snow Sugar Cookie", "Peach Blossom Cookie", "Red Osmanthus Cookie", "Choco Drizzle Cookie", "Mozzarella Cookie", "Sonic Cookie", "Frilled Jellyfish Cookie", "Matcha Cookie", "Macaron Cookie", "Clotted Cream Cookie", "Pom-pom Dough Cookie", "Royal Margarine Cookie", "Tails Cookie", "Golden Osmanthus Cookie", "Street Urchin Cookie", "Sherbet Cookie", "Eternal Sugar Cookie", "Golden Cheese Cookie (Awakened)", "Golden Cheese Cookie", "Doughael", "Rockstar Cookie", "Shadow Milk Cookie", "Black Lemonade Cookie", "Blueberry Pie Cookie", "Prune Juice Cookie", "Stardust Cookie", "Affogato Cookie", "Shining Glitter Cookie", "Captain Caviar Cookie", "Pomegranate Cookie", "Eclair Cookie", "Moonlight Cookie", "Black Sapphire Cookie", "Sorbet Shark Cookie", "Mango Cookie", "Sea Fairy Cookie", "Fig Cookie", "Black Raisin Cookie", "Candy Apple Cookie", "Latte Cookie", "Espresso Cookie", "Lilac Cookie", "Poison Mushroom Cookie", "Onion Cookie", "Chili Pepper Cookie", "Dark Enchantress Cookie", "Carrot Cookie", "Devil Cookie", "White Lily Cookie (Awakened)", "White Lily Cookie", "Squid Ink Cookie", "Wizard Cookie", "Licorice Cookie", "Adventurer Cookie", "Alchemist Cookie", "Frost Queen Cookie", "Lemon Cookie", "Black Pearl Cookie", "Wedding Cake Cookie", "Agar Agar Cookie", "Pumpkin Pie Cookie", "Okchun Cookie", "Ninja Cookie", "Linzer Cookie", "Blackberry Cookie", "Prophet Cookie", "Tarte Tatin Cookie", "Oyster Cookie", "Pudding à la Mode Cookie", "Twizzly Gummy Cookie", "Mint Choco Cookie", "Cotton Cookie", "Angel Cookie", "Herb Cookie", "Sparkling Cookie", "Pure Vanilla Cookie (Awakened)", "Pure Vanilla Cookie", "Parfait Cookie", "Seltzer Cookie", "Cherry Blossom Cookie", "Sugarfly Cookie", "Menthol Cookie", "Orange Cookie", "Manju Cookie", "Pavlova Cookie", "Venom Dough Cookie", "Charcoal Cookie", "Lime Cookie", "Chess Choco Cookie", "Zoey Cookie", "Glinda Cookie", "Elphaba Cookie", "Peppermint Cookie", "Caramel Choux Cookie", "Rye Cookie", "Crème Brûlée Cookie", "Pancake Cookie", "Gumball Cookie", "Beet Cookie", "Mystic Flour Cookie", "Clover Cookie", "Vampire Cookie", "Cream Puff Cookie", "Custard Cookie III", "Cherry Cookie", "Cream Unicorn Cookie", "Carol Cookie", "Nutmeg Tiger Cookie", "Olive Cookie", "Silverbell Cookie", "Pastry Cookie", "Tiger Lily Cookie", "Fire Spirit Cookie", "Smoked Cheese Cookie", "Wind Archer Cookie", "Almond Cookie", "Cream Ferret Cookie", "Star Coral Cookie", "Marshmallow Bunny Cookie", "Snapdragon Cookie", "Candy Diver Cookie", "Jung Kook Cookie", "V Cookie", "Jimin Cookie", "j-hope Cookie", "Sugar Swan Cookie", "SUGA Cookie", "Jin Cookie", "RM Cookie"
];

const filters = {
	rarity: [],
	role: [],
	position: [],
	element: [],
	resonant: [],
	sort: "release"
};

/*active states*/

function renderActiveStates() {

	document.querySelectorAll(".dropdown").forEach(drop => {

		const key = drop.dataset.key;
		const values = filters[key];

		const options = drop.querySelectorAll(".option");
		const header = drop.querySelector(".dropdown-header");

		// SORT
		if (key === "sort") {

			options.forEach(opt => {
				opt.classList.toggle(
					"active",
					values === opt.dataset.value
				);
			});

			const selected = [...options].find(
				opt => opt.dataset.value === values
			);

			header.innerHTML = selected
				? `<span style="opacity:0.5;">Sort:</span> ${selected.textContent.trim()}`
				: "Sort";

			return;
		}

		// NORMAL FILTERS
		options.forEach(opt => {

			opt.classList.toggle(
				"active",
				values.includes(opt.dataset.value)
			);

		});

		if (!values.length) {

			header.textContent =
				key.charAt(0).toUpperCase() + key.slice(1);

			return;
		}

		const selectedOptions = [...options].filter(opt =>
			values.includes(opt.dataset.value)
		);

		// MULTI
		if (selectedOptions.length > 1) {

			const displayCount =
				Math.min(3, selectedOptions.length);

			const icons = selectedOptions
				.slice(0, displayCount)
				.map(opt => {

					const img =
						opt.querySelector(".icon img");

					return img
						? `<div class="icon"><img src="${img.src}"></div>`
						: "";

				})
				.join("");

			const more =
				selectedOptions.length > 3
					? `<span class="elipsis">...</span>`
					: "";

			header.innerHTML = `
				<span class="icon-group">${icons}</span>
				${more}
				<span>${selectedOptions.length} Selected</span>
			`;

			return;
		}

		// SINGLE
		const opt = selectedOptions[0];

		const img = opt.querySelector(".icon img");
		const text = opt.textContent.trim();

		header.innerHTML = `
			<span class="icon-group">
				${img ? `<div class="icon"><img src="${img.src}"></div>` : ""}
			</span>
			<span>${text}</span>
		`;
	});
}

/*dropdown*/

document.querySelectorAll(".dropdown").forEach(drop => {

	const key = drop.dataset.key;
	const options = drop.querySelectorAll(".option");

	drop.querySelector(".dropdown-header").onclick = () => {

		document.querySelectorAll(".dropdown").forEach(d => {

			if (d !== drop)
				d.classList.remove("open");

		});

		drop.classList.toggle("open");
	};

	options.forEach(opt => {

		opt.onclick = () => {

			const val = opt.dataset.value;

			// SORT
			if (key === "sort") {

				filters.sort = val || "release";

			}

			// NORMAL FILTERS
			else {

				if (!val) {

					filters[key] = [];

				} else {

					const i =
						filters[key].indexOf(val);

					if (i === -1)
						filters[key].push(val);

					else
						filters[key].splice(i, 1);
				}
			}

			drop.classList.remove("open");

			renderActiveStates();
			filter();
		};
	});
});

document.addEventListener("click", (e) => {

	if (!e.target.closest(".dropdown")) {

		document.querySelectorAll(".dropdown").forEach(d =>
			d.classList.remove("open")
		);
	}
});

/*search*/

function filter() {

	const q =
		(search.value || "")
			.toLowerCase()
			.trim();

	const splitWords = str =>
		str.toLowerCase().split(/\s+/);

	const splitStrict = str =>
		str.toLowerCase().split(/[\s-]+/);

	const matchesQuery = (str) => {

		const raw = str.toLowerCase();

		// literal hyphen search
		if (q.includes("-") && raw.includes(q))
			return true;

		const targetWords =
			splitStrict(str);

		const queryWords =
			splitWords(q);

		return queryWords.every(qw =>
			targetWords.some(tw =>
				tw.startsWith(qw)
			)
		);
	};

	const out = data.filter(c => {

		const aliases =
			c.alias || [];

		const textMatch =
			!q ||
			matchesQuery(c.name) ||
			aliases.some(a =>
				matchesQuery(a)
			);

		const match =

			(!filters.rarity.length ||
				filters.rarity.includes(c.rarity))

			&&

			(!filters.role.length ||
				filters.role.includes(c.role))

			&&

			(!filters.position.length ||
				filters.position.includes(c.position))

			&&

			(
				!filters.element.length ||

				(
					c.element &&
					c.element.some(e =>
						filters.element.includes(e)
					)
				)

				||

				(
					filters.element.includes("none")
					&&
					(
						!c.element ||
						!c.element.length
					)
				)
			)

			&&

			(
				!filters.resonant.length ||

				(c.resonant || []).some(r =>
					filters.resonant.includes(r)
				)
			);

		return textMatch && match;
	});

	/*sort*/

	switch (filters.sort) {

		case "az":

			out.sort((a, b) =>
				a.name.localeCompare(b.name)
			);

			break;

		case "rarity":

			out.sort((a, b) =>
				(rarityOrder[a.rarity] ?? 999)
				-
				(rarityOrder[b.rarity] ?? 999)
			);

			break;

		case "cookie-order":

			out.sort((a, b) => {

				const ai =
					cookieOrder.indexOf(a.name);

				const bi =
					cookieOrder.indexOf(b.name);

				return (
					(ai === -1 ? 9999 : ai)
					-
					(bi === -1 ? 9999 : bi)
				);
			});

			break;

		case "release":
		default:
			break;
	}

	renderGrid(out);
}

/*clear*/

search.addEventListener("input", filter);

clear.onclick = () => {

	search.value = "";

	filters.rarity = [];
	filters.role = [];
	filters.position = [];
	filters.element = [];
	filters.resonant = [];
	filters.sort = "release";

	renderActiveStates();
	filter();
};

/*init*/

renderActiveStates();
filter();

const filterBtn =
	document.getElementById("filter-toggle");

const filtersEl =
	document.getElementById("filters");

filterBtn.addEventListener("click", () => {

	const isOpen =
		filtersEl.classList.toggle("open");

	filterBtn.classList.toggle(
		"active",
		isOpen
	);
});