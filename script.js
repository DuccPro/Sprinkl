const grid = document.getElementById("grid");
const details = document.getElementById("details");

const search = document.getElementById("search");

const fRarity = document.getElementById("f-rarity");
const fRole = document.getElementById("f-role");
const fPosition = document.getElementById("f-position");
const fElement = document.getElementById("f-element");
const fResonant = document.getElementById("f-resonant");

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

const filters = {
	rarity: "all",
	role: "all",
	position: "all",
	element: "all",
	resonant: "all"
};

function renderActiveStates() {
	document.querySelectorAll(".dropdown").forEach(drop => {
		const key = drop.dataset.key;
		const value = filters[key];

		const options = drop.querySelectorAll(".option");
		const header = drop.querySelector(".dropdown-header");

		options.forEach(opt => {
			opt.classList.toggle("active", opt.dataset.value === value);
		});

		const activeOpt = [...options].find(o => o.dataset.value === value);

		if (activeOpt) {
			header.innerHTML = activeOpt.innerHTML;
		} else {
			header.textContent = key.charAt(0).toUpperCase() + key.slice(1);
		}
	});
}

document.querySelectorAll(".dropdown").forEach(drop => {
	const key = drop.dataset.key;
	const header = drop.querySelector(".dropdown-header");
	const options = drop.querySelectorAll(".option");

	header.onclick = () => {
		document.querySelectorAll(".dropdown").forEach(d => {
			if (d !== drop) d.classList.remove("open");
		});
		drop.classList.toggle("open");
	};

	options.forEach(opt => {
		opt.onclick = () => {
			filters[key] = opt.dataset.value || "all";

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

function filter() {
	const q = (search.value || "").toLowerCase().trim();

	const r = filters.rarity;
	const cl = filters.role;
	const p = filters.position;
	const e = filters.element;
	const res = filters.resonant;
	

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
			(r === "all" || c.rarity === r) &&
			(cl === "all" || c.role === cl) &&
			(p === "all" || c.position === p) &&
			(e === "all" || (c.element || []).includes(e)) &&
			(res === "all" || (c.resonant || []).includes(res));

		return textMatch && match;
	});

	renderGrid(out);
}

search.addEventListener("input", filter);

document.getElementById("clear").onclick = () => {
	search.value = "";

	Object.keys(filters).forEach(k => filters[k] = "all");

	renderActiveStates();
	filter();
};

renderActiveStates();
renderGrid(data);