const num = id => parseFloat(document.getElementById(id).value) || 0;
const poner = (id, v) => document.getElementById(id).value = v;

function rectAPolar() {
  const x = num("x"), y = num("y");
  const r = Math.hypot(x, y);
  const theta = Math.atan2(y, x) * 180 / Math.PI; // -180° a 180°
  if (theta<0) theta+=360;
  poner("r", r.toFixed(6));
  poner("theta", theta.toFixed(6));
}

function polarARect() {
  const r = num("r2");
  const t = num("theta2") * Math.PI / 180;
  poner("x2", (r * Math.cos(t)).toFixed(6));
  poner("y2", (r * Math.sin(t)).toFixed(6));
}