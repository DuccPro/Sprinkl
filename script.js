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

function showDetails(c) {
	details.innerHTML = `
	<h2>${c.name}</h2>
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

const filters = {
	rarity: [],
	role: [],
	position: [],
	element: [],
	resonant: []
};

function renderActiveStates() {
	document.querySelectorAll(".dropdown").forEach(drop => {
		const key = drop.dataset.key;
		const values = filters[key];

		const options = drop.querySelectorAll(".option");
		const header = drop.querySelector(".dropdown-header");

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

		if (selectedOptions.length > 1) {
			const displayCount = Math.min(3, selectedOptions.length);

			const icons = selectedOptions
				.slice(0, displayCount)
				.map(opt => {
					const img = opt.querySelector(".icon img");
					return img
						? `<div class="icon"><img src="${img.src}"></div>`
						: "";
				})
				.join("");

			const more = selectedOptions.length > 3
				? `<span class="elipsis">...</span>`
				: "";

			header.innerHTML = `
				<span class="icon-group">${icons}</span>
				${more}
				<span>${selectedOptions.length} Selected</span>
			`;
			return;
		}

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
			if (d !== drop) d.classList.remove("open");
		});
		drop.classList.toggle("open");
	};

	options.forEach(opt => {
		opt.onclick = () => {
			const val = opt.dataset.value;

			if (!val) {
				filters[key] = [];
			} else {
				const i = filters[key].indexOf(val);
				if (i === -1) filters[key].push(val);
				else filters[key].splice(i, 1);
			}

			drop.classList.remove("open");

			renderActiveStates();
			filter();
		};
	});
});

document.addEventListener("click", (e) => {
	if (!e.target.closest(".dropdown")) {
		document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
	}
});

/*search*/

function filter() {
	const q = (search.value || "").toLowerCase().trim();

	const splitWords = str =>
		str.toLowerCase().split(/\s+/);

	const splitStrict = str =>
		str.toLowerCase().split(/[\s-]+/);

	const matchesQuery = (str) => {
		const raw = str.toLowerCase();

		if (q.includes("-") && raw.includes(q)) return true;

		const targetWords = splitStrict(str);
		const queryWords = splitWords(q);

		return queryWords.every(qw =>
			targetWords.some(tw => tw.startsWith(qw))
		);
	};

	const out = data.filter(c => {
		const name = c.name.toLowerCase();
		const aliases = c.alias || [];

		const textMatch =
			!q ||
			matchesQuery(name) ||
			aliases.some(a => matchesQuery(a));

		const match =
			(!filters.rarity.length || filters.rarity.includes(c.rarity)) &&
			(!filters.role.length || filters.role.includes(c.role)) &&
			(!filters.position.length || filters.position.includes(c.position)) &&
			(!filters.element.length || (c.element || []).some(e => filters.element.includes(e))) &&
			(!filters.resonant.length || (c.resonant || []).some(r => filters.resonant.includes(r)));

		return textMatch && match;
	});

	renderGrid(out);
}

/*clear*/

search.addEventListener("input", filter);

clear.onclick = () => {
	search.value = "";

	Object.keys(filters).forEach(k => filters[k] = []);

	renderActiveStates();
	filter();
};

/*init*/
renderActiveStates();
renderGrid(data);

const filterBtn = document.getElementById("filter-toggle");
const filtersEl = document.getElementById("filters");

filterBtn.addEventListener("click", () => {
	const isOpen = filtersEl.classList.toggle("open");
	filterBtn.classList.toggle("active", isOpen);
});