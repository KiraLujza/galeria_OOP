import NagyKep from "./NagyKep.js";

export default class LeptetoKEzelo {
  #aktIndex;
  #lista;
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.#aktIndex = 0;
    this.szuloElem = szuloElem;
    this.jobbGomb = document.getElementsByClassName("jobb")[0];

    const nagykep = new NagyKep(
      this.#lista[this.#aktIndex].cim,
      this.#lista[this.#aktIndex].src,
      this.#lista[this.#aktIndex].leiras,
      this.szuloElem
    );
    this.esemenykezelo();
    this.kisKepkezeles();
  }
  peldanyosit(){
    const nagykep = new NagyKep(
      this.#lista[this.#aktIndex].cim,
      this.#lista[this.#aktIndex].src,
      this.#lista[this.#aktIndex].leiras,
      this.szuloElem
    );
  }
  kisKepkezeles() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      this.#aktIndex = event.detail
      this.peldanyosit();
     
    });
  }

  esemenykezelo() {
    this.jobbGomb.addEventListener("click", () => {
      this.#aktIndex++;
      this.#aktIndex = this.#aktIndex % this.#lista.length;
      this.peldanyosit()
      
    });
  }
}
