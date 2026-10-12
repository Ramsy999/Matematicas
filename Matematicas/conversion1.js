const val = id => parseFloat(document.getElementById(id).value) || 0;
const set = (id, v) => document.getElementById(id).value = v;

function dmsADec() {
  const g = val("g");
  const signo = g < 0 ? -1 : 1;
  const dec = signo * (Math.abs(g) + val("m") / 60 + val("s") / 3600);
  set("res", dec.toFixed(6));
}

function decARad() {
  set("rad", (val("des2") * Math.PI / 180).toFixed(6));
}

function radAGrados() {
  const deg = val("rad2") * 180 / Math.PI;
  set("grdesc", deg.toFixed(6));

  const signo = deg < 0 ? -1 : 1;
  const total = Math.round(Math.abs(deg) * 3600 * 100) / 100; // segundos totales
  const g = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  set("g2", signo * g);
  set("m2", m);
  set("s2", s.toFixed(2));
}