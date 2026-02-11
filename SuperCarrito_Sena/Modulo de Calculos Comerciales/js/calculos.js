const PRECIO_BASE=100;
const IVA=0.19; " >> js /calculos.js echo"
export const calcularTotal = (precio) => precio * (1 + IVA);