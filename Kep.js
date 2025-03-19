export default class Kep {
  #cim;
  #src;
  #leiras;
  #index;
  constructor(index, cim, src, leiras, szuloElem) {
    this.#index = index;
    this.#cim = cim;
    this.#src = src;
    this.#leiras = leiras;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.esemenykezelo();
  }
  esemenykezelo() {
    this.kepElem = document.querySelector(".kep:last-child");
    this.kepElem.addEventListener("click", () => {
      console.log(this.#index);
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }

  megjelenit() {
    let html = `<div class="kep">
                        <img src="${this.#src}" alt="">                      
                    </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
