import './components/accordion/accordion.css';/* empty css                               */
//#region src/lib/components/accordion/accordion.ts
var e = class {
	container;
	items;
	constructor(e) {
		this.container = e, this.items = this.container.querySelectorAll(".accordion-item"), this.initialize();
	}
	initialize() {
		this.items.forEach((e) => {
			let t = e.querySelector(".accordion-header"), n = e.querySelector(".accordion-content");
			t.addEventListener("click", () => {
				let t = e.classList.contains("open");
				this.closeAll(), t || (e.classList.add("open"), n.style.maxHeight = n.scrollHeight + "px");
			});
		});
	}
	closeAll() {
		this.items.forEach((e) => {
			e.classList.remove("open");
			let t = e.querySelector(".accordion-content");
			t.style.maxHeight = "0";
		});
	}
};
//#endregion
export { e as Accordion };
