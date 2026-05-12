/* ELEMENTS */

const grid =
	document.getElementById("grid");

const details =
	document.getElementById("details");

const search =
	document.getElementById("search");

const clear =
	document.getElementById("clear");

const filterBtn =
	document.getElementById("filter-toggle");

const filtersEl =
	document.getElementById("filters");

const settingsBtn =
	document.getElementById("settings-btn");

const settingsMenu =
	document.getElementById("settings-menu");

const awakenedToggle =
	document.getElementById("awakened-toggle");

const themeButtons =
	document.querySelectorAll(".theme-option");

const sortButtons =
	document.querySelectorAll(".sort-option");

/* FILTER DATA */

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
	"Rumi Cookie", "Mira Cookie", "GingerBrave", "Tea Knight Cookie", "Millennial Tree Cookie", "Silent Salt Cookie", "Hollyberry Cookie (Awakened)", "Hollyberry Cookie", "Space Doughnut", "Kouign-Amann Cookie", "Schwarzwälder", "Stormbringer Cookie", "Cloud Haetae Cookie", "Mold Dough Cookie", "Fettuccine Cookie", "Pinecone Cookie", "Elder Faerie Cookie", "Capsaicin Cookie", "Mala Sauce Cookie", "Camellia Cookie", "Wildberry Cookie", "Icicle Yeti Cookie", "Strawberry Cookie", "Moon Rabbit Cookie", "Mercurial Knight Cookie", "Princess Cookie", "Cocoa Cookie", "Dark Choco Cookie", "Muscle Cookie", "Crunchy Chip Cookie", "Crimson Coral Cookie", "Salt Cellar Cookie", "Burnt Cheese Cookie", "Pitaya Dragon Cookie", "Avocado Cookie", "Milky Way Cookie", "Rebel Cookie", "Strawberry Crepe Cookie", "Purple Yam Cookie", "Financier Cookie", "Butter Roll Cookie", "Kumiho Cookie", "Milk Cookie", "Dark Cacao Cookie (Awakened)", "Dark Cacao Cookie", "Madeleine Cookie", "Knight Cookie", "Red Velvet Cookie", "Black Forest Cookie", "Burning Spice Cookie", "Jagae Cookie", "Cream Soda Cookie", "Grapefruit Cookie", "Ash Salt Cookie", "Green Tea Mousse Cookie", "Raspberry Cookie", "Werewolf Cookie", "Caramel Arrow Cookie", "Snow Sugar Cookie", "Peach Blossom Cookie", "Red Osmanthus Cookie", "Choco Drizzle Cookie", "Mozzarella Cookie", "Sonic Cookie", "Frilled Jellyfish Cookie", "Matcha Cookie", "Macaron Cookie", "Clotted Cream Cookie", "Pom-pom Dough Cookie", "Royal Margarine Cookie", "Tails Cookie", "Golden Osmanthus Cookie", "Street Urchin Cookie", "Sherbet Cookie", "Eternal Sugar Cookie", "Golden Cheese Cookie (Awakened)", "Golden Cheese Cookie", "Doughael", "Rockstar Cookie","Timekeeper Cookie", "Shadow Milk Cookie", "Black Lemonade Cookie", "Blueberry Pie Cookie", "Prune Juice Cookie", "Stardust Cookie", "Affogato Cookie", "Shining Glitter Cookie", "Captain Caviar Cookie", "Pomegranate Cookie", "Eclair Cookie", "Moonlight Cookie", "Black Sapphire Cookie", "Sorbet Shark Cookie", "Mango Cookie", "Sea Fairy Cookie", "Fig Cookie", "Black Raisin Cookie", "Candy Apple Cookie", "Latte Cookie", "Espresso Cookie", "Lilac Cookie", "Poison Mushroom Cookie", "Onion Cookie", "Chili Pepper Cookie", "Dark Enchantress Cookie", "Carrot Cookie", "Devil Cookie", "White Lily Cookie (Awakened)", "White Lily Cookie", "Squid Ink Cookie", "Wizard Cookie", "Licorice Cookie", "Adventurer Cookie", "Alchemist Cookie", "Frost Queen Cookie", "Lemon Cookie", "Black Pearl Cookie", "Wedding Cake Cookie", "Agar Agar Cookie", "Pumpkin Pie Cookie", "Okchun Cookie", "Ninja Cookie", "Linzer Cookie", "Blackberry Cookie", "Prophet Cookie", "Tarte Tatin Cookie", "Oyster Cookie", "Pudding à la Mode Cookie", "Twizzly Gummy Cookie", "Mint Choco Cookie", "Cotton Cookie", "Angel Cookie", "Herb Cookie", "Sparkling Cookie", "Pure Vanilla Cookie (Awakened)", "Pure Vanilla Cookie", "Parfait Cookie", "Seltzer Cookie", "Cherry Blossom Cookie", "Sugarfly Cookie", "Menthol Cookie", "Orange Cookie", "Manju Cookie", "Pavlova Cookie", "Venom Dough Cookie", "Charcoal Cookie", "Lime Cookie", "Chess Choco Cookie", "Zoey Cookie", "Glinda Cookie", "Elphaba Cookie", "Peppermint Cookie", "Caramel Choux Cookie", "Rye Cookie", "Crème Brûlée Cookie", "Pancake Cookie", "Gumball Cookie", "Beet Cookie", "Mystic Flour Cookie", "Clover Cookie", "Vampire Cookie", "Cream Puff Cookie", "Custard Cookie III", "Cherry Cookie", "Cream Unicorn Cookie", "Carol Cookie", "Nutmeg Tiger Cookie", "Olive Cookie", "Silverbell Cookie", "Pastry Cookie", "Tiger Lily Cookie", "Fire Spirit Cookie", "Smoked Cheese Cookie", "Wind Archer Cookie", "Almond Cookie", "Cream Ferret Cookie", "Star Coral Cookie", "Marshmallow Bunny Cookie", "Snapdragon Cookie", "Candy Diver Cookie", "Jung Kook Cookie", "V Cookie", "Jimin Cookie", "j-hope Cookie", "Sugar Swan Cookie", "SUGA Cookie", "Jin Cookie", "RM Cookie"
];

const filters = {
	rarity: [],
	role: [],
	position: [],
	element: [],
	resonant: [],
	sort: "release",
	awakenedOnly: true
};

/* HELPERS */

function formatLabel(str) {

	const specialCases = {
		"life-sprouting": "Life-Sprouting",
		"bts": "BTS"
	};

	if (specialCases[str])
		return specialCases[str];

	return str
		.replace(/-/g, " ")
		.replace(/\b\w/g, c => c.toUpperCase());
}

/* SLUG */

function slugify(str) {

	return str
		.toLowerCase()
		.replace(/\(awakened\)/g, "awakened")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

/* GRID */

function renderGrid(list) {

	grid.innerHTML = "";

	list.forEach(c => {

		const img =
			document.createElement("img");

		img.src = c.icon;

		img.onclick = () => {

			document.querySelectorAll("main img").forEach(i => {
				i.classList.remove("selected");
			});

			img.classList.add("selected");

			location.hash =
				slugify(c.name);

			showDetails(c);
		};

		grid.appendChild(img);
	});
}

/* DETAILS */

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

/* ACTIVE STATES */

function renderActiveStates() {

	document.querySelectorAll(".dropdown").forEach(drop => {

		const key =
			drop.dataset.key;

		const values =
			filters[key];

		const options =
			drop.querySelectorAll(".option");

		const header =
			drop.querySelector(".dropdown-header");

		/* SORT */

		if (key === "sort") {

			options.forEach(opt => {

				opt.classList.toggle(
					"active",
					values === opt.dataset.value
				);
			});

			const selected =
				[...options].find(opt =>
					opt.dataset.value === values
				);

			header.innerHTML = selected
				? `<span style="opacity:0.5;">Sort:</span> ${selected.textContent.trim()}`
				: "Sort";

			return;
		}

		/* NORMAL */

		options.forEach(opt => {

			opt.classList.toggle(
				"active",
				values.includes(opt.dataset.value)
			);
		});

		if (!values.length) {

			header.textContent =
				key.charAt(0).toUpperCase()
				+
				key.slice(1);

			return;
		}

		const selectedOptions =
			[...options].filter(opt =>
				values.includes(opt.dataset.value)
			);

		/* MULTI */

		if (selectedOptions.length > 1) {

			const displayCount =
				Math.min(3, selectedOptions.length);

			const icons =
				selectedOptions
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
					? `<span style="opacity: 0.5;">...</span>`
					: "";

			header.innerHTML = `
				<span class="icon-group">${icons}</span>
				${more}
				<span>${selectedOptions.length} Selected</span>
			`;

			return;
		}

		/* SINGLE */

		const opt =
			selectedOptions[0];

		const img =
			opt.querySelector(".icon img");

		const text =
			opt.textContent.trim();

		header.innerHTML = `
			<span class="icon-group">
				${img ? `<div class="icon"><img src="${img.src}"></div>` : ""}
			</span>
			<span>${text}</span>
		`;
	});
}

/* FILTER */

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

		const raw =
			str.toLowerCase();

		if (
			q.includes("-")
			&&
			raw.includes(q)
		)
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

		/* AWAKENED */

		if (filters.awakenedOnly) {

			const awakenedMap = {
				"Pure Vanilla Cookie": "Pure Vanilla Cookie (Awakened)",
				"Hollyberry Cookie": "Hollyberry Cookie (Awakened)",
				"Dark Cacao Cookie": "Dark Cacao Cookie (Awakened)",
				"Golden Cheese Cookie": "Golden Cheese Cookie (Awakened)",
				"White Lily Cookie": "White Lily Cookie (Awakened)"
			};

			if (awakenedMap[c.name]) {
				return false;
			}
		}

		const aliases =
			c.alias || [];

		const textMatch =
			!q
			||
			matchesQuery(c.name)
			||
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
				!filters.element.length

				||

				(
					c.element
					&&
					c.element.some(e =>
						filters.element.includes(e)
					)
				)

				||

				(
					filters.element.includes("none")
					&&
					(
						!c.element
						||
						!c.element.length
					)
				)
			)

			&&

			(
				!filters.resonant.length

				||

				(c.resonant || []).some(r =>
					filters.resonant.includes(r)
				)
			);

		return textMatch && match;
	});

	/* SORT */

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
	}

	renderGrid(out);
}

/* DROPDOWNS */

document.querySelectorAll(".dropdown").forEach(drop => {

	const key =
		drop.dataset.key;

	const options =
		drop.querySelectorAll(".option");

	const header =
		drop.querySelector(".dropdown-header");

	header.addEventListener("click", (e) => {

		e.stopPropagation();

		/* CLOSE SETTINGS */

		settingsMenu.classList.remove("open");

		settingsBtn.classList.remove("active");

		/* CLOSE OTHER DROPDOWNS */

		document.querySelectorAll(".dropdown").forEach(d => {

			if (d !== drop)
				d.classList.remove("open");
		});

		/* TOGGLE */

		drop.classList.toggle("open");
	});

	options.forEach(opt => {

		opt.addEventListener("click", (e) => {

			e.stopPropagation();

			const val =
				opt.dataset.value;

			/* SORT */

			if (key === "sort") {

				filters.sort =
					val || "release";
			}

			/* FILTERS */

			else {

				if (!val) {

					filters[key] = [];
				}

				else {

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
		});
	});
});

/* FILTER MENU */

filterBtn.addEventListener("click", (e) => {

	e.stopPropagation();

	/* CLOSE SETTINGS */

	settingsMenu.classList.remove("open");

	settingsBtn.classList.remove("active");

	/* TOGGLE */

	const isOpen =
		filtersEl.classList.toggle("open");

	filterBtn.classList.toggle(
		"active",
		isOpen
	);
});

/* SETTINGS MENU */

settingsBtn.addEventListener("click", (e) => {

	e.stopPropagation();

	/* CLOSE FILTERS */

	filtersEl.classList.remove("open");

	filterBtn.classList.remove("active");

	/* CLOSE DROPDOWNS */

	document.querySelectorAll(".dropdown").forEach(d =>
		d.classList.remove("open")
	);

	/* TOGGLE */

	const isOpen =
		settingsMenu.classList.toggle("open");

	settingsBtn.classList.toggle(
		"active",
		isOpen
	);
});

/* SEARCH */

search.addEventListener(
	"input",
	filter
);

/* THEME */

function updateThemeButtons() {

	const currentTheme =
		document.body.getAttribute("data-theme");

	themeButtons.forEach(btn => {

		btn.classList.toggle(
			"active",
			btn.dataset.theme === currentTheme
		);
	});
}

function setTheme(theme) {

	document.body.setAttribute(
		"data-theme",
		theme
	);

	localStorage.setItem(
		"theme",
		theme
	);

	updateThemeButtons();
}

const savedTheme =
	localStorage.getItem("theme")
	|| "salt";

setTheme(savedTheme);

themeButtons.forEach(btn => {

	btn.addEventListener("click", () => {

		setTheme(btn.dataset.theme);
	});
});

/* AWAKENED */

const savedAwakened =
	localStorage.getItem("awakenedOnly");

filters.awakenedOnly =
	savedAwakened !== null
		? savedAwakened === "true"
		: true;

awakenedToggle.checked =
	filters.awakenedOnly;

awakenedToggle.addEventListener("change", () => {

	filters.awakenedOnly =
		awakenedToggle.checked;

	localStorage.setItem(
		"awakenedOnly",
		filters.awakenedOnly
	);

	filter();
});

/* SORT BUTTONS */

const savedSort =
	localStorage.getItem("sort");

filters.sort =
	savedSort || "release";

function updateSortButtons() {

	sortButtons.forEach(btn => {

		btn.classList.toggle(
			"active",
			btn.dataset.sort === filters.sort
		);
	});
}

sortButtons.forEach(btn => {

	btn.addEventListener("click", () => {

		filters.sort =
			btn.dataset.sort;

		localStorage.setItem(
			"sort",
			filters.sort
		);

		updateSortButtons();

		renderActiveStates();

		filter();
	});
});

updateSortButtons();

/* CLEAR */

clear.onclick = () => {

	search.value = "";

	filters.rarity = [];
	filters.role = [];
	filters.position = [];
	filters.element = [];
	filters.resonant = [];

	filters.sort = "release";

	filters.awakenedOnly = true;

	localStorage.setItem(
		"sort",
		"release"
	);

	localStorage.setItem(
		"awakenedOnly",
		"true"
	);

	awakenedToggle.checked =
		true;

	updateSortButtons();

	renderActiveStates();

	filter();
};

/* GLOBAL CLICK */

document.addEventListener("click", (e) => {

	/* SETTINGS */

	if (
		!e.target.closest("#settings-menu")
		&&
		!e.target.closest("#settings-btn")
	) {

		settingsMenu.classList.remove("open");

		settingsBtn.classList.remove("active");
	}

	/* FILTERS */

	if (
		!e.target.closest("#filters")
		&&
		!e.target.closest("#filter-toggle")
	) {

		filtersEl.classList.remove("open");

		filterBtn.classList.remove("active");
	}

	/* DROPDOWNS */

	if (!e.target.closest(".dropdown")) {

		document.querySelectorAll(".dropdown").forEach(d =>
			d.classList.remove("open")
		);
	}
});

/* HASH LOAD */

function loadFromHash() {

	const hash =
		location.hash.slice(1);

	if (!hash)
		return;

	const cookie =
		data.find(c =>
			slugify(c.name) === hash
		);

	if (!cookie)
		return;

	showDetails(cookie);

	document
		.querySelectorAll("main img")
		.forEach(i =>
			i.classList.remove("selected")
		);

	const imgs =
		[...document.querySelectorAll("main img")];

	const selectedImg =
		imgs.find(img =>
			img.src.includes(cookie.icon)
		);

	if (selectedImg) {
		selectedImg.classList.add("selected");
	}
}

window.addEventListener(
	"hashchange",
	loadFromHash
);

/* INIT */

renderActiveStates();

filter();

loadFromHash();