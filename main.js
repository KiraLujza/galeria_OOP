import Kep from "./Kep.js";
import Kepek from "./Kepek.js";
import NagyKep from "./NagyKep.js";
import { OBJLISTA } from "./tomb.js";
import LeptetoKEzelo from "./LeptetoKezelo.js";

let szuloElem = document.getElementsByClassName("galeria")[0];
let nkep = document.getElementsByClassName("kiemelt")[0];
new LeptetoKEzelo(OBJLISTA,nkep)
const KEPEK = new Kepek(OBJLISTA, szuloElem)
/* let k1 = new Kep(obj[0].cim, obj[0].src, szuloElem); */

//const n1 = new Kep(obj[0].cim, obj[0].src,obj[0].leiras, nkep)
