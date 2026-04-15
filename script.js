let dn = document.querySelector(".dene");
dn.style.backgroundColor = 'hsl(185, 41%, 84%)';
dn.style.display = 'flex';
dn.style.flexDirection = 'column';
dn.style.alignItems = 'center';
dn.style.justifyContent = 'center';
dn.style.minHeight = '100vh';
dn.style.margin = '0';
dn.style.fontFamily = '"Space Mono", monospace';

let hb = document.querySelector(".h1");
hb.style.margin = '40px 0';

let cn = document.querySelector(".container");
cn.style.backgroundColor = 'hsl(0, 100%, 100%)';
cn.style.width = '800px';
cn.style.borderRadius = '20px';
cn.style.display = 'flex';
cn.style.padding = '32px';
cn.style.gap = '40px';

let lf = document.querySelector(".left");
lf.style.flex = '1';
lf.style.display = 'flex';
lf.style.flexDirection = 'column';
lf.style.gap = '32px';

document.querySelectorAll("h2, .heki").forEach(h => {
  h.style.color = 'hsl(186, 14%, 43%)';
  h.style.fontSize = '16px';
  h.style.marginBottom = '8px';
});

let sh = document.querySelectorAll(".search");
sh.forEach(input => {
  input.style.width = '100%';
  input.style.boxSizing = 'border-box';
  input.style.padding = '10px 15px';
  input.style.backgroundColor = 'hsl(189, 47%, 97%)';
  input.style.border = 'none';
  input.style.borderRadius = '5px';
  input.style.textAlign = 'right';
  input.style.fontSize = '24px';
  input.style.fontWeight = 'bold';
  input.style.color = 'hsl(183, 100%, 15%)';
  input.style.outline = 'none';
});

let b = document.querySelector(".box");
b.style.display = 'grid';
b.style.gridTemplateColumns = 'repeat(3, 1fr)';
b.style.gap = '14px';

document.querySelector(".birbox").style.display = 'contents';
document.querySelector(".ekibox").style.display = 'contents';

let buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.style.backgroundColor = 'hsl(183, 100%, 15%)';
  btn.style.color = 'hsl(0, 100%, 100%)';
  btn.style.border = 'none';
  btn.style.padding = '10px';
  btn.style.borderRadius = '5px';
  btn.style.fontSize = '20px';
});

let customBtn = buttons[5];
customBtn.style.backgroundColor = 'hsl(189, 47%, 97%)';
customBtn.style.color = 'hsl(186, 14%, 43%)';

let rt = document.querySelector(".right");
rt.style.flex = '1';
rt.style.backgroundColor = 'hsl(183, 100%, 15%)';
rt.style.padding = '40px';
rt.style.borderRadius = '15px';
rt.style.display = 'flex';
rt.style.flexDirection = 'column';

let outputs = document.querySelectorAll(".right h1");
outputs.forEach(h1 => {
  h1.style.color = 'hsl(172, 67%, 45%)';
  h1.style.fontSize = '40px';
  h1.style.margin = '0';
});

let displayRows = document.querySelectorAll(".bir, .azty");
displayRows.forEach(row => {
  row.style.display = 'flex';
  row.style.justifyContent = 'space-between';
  row.style.alignItems = 'center';
  row.style.marginBottom = '40px';
});

document.querySelectorAll(".right p").forEach(p => {
  p.style.color = 'hsl(184, 14%, 56%)';
  p.style.fontSize = '13px';
  p.style.margin = '0';
});

document.querySelectorAll(".right h3, .right h2").forEach(h => {
  h.style.color = 'hsl(0, 100%, 100%)';
  h.style.fontSize = '16px';
  h.style.margin = '0';
});

let resetBtn = document.querySelector(".right > button");
resetBtn.style.marginTop = 'auto';
resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
resetBtn.style.color = 'hsl(183, 100%, 15%)';
resetBtn.style.fontWeight = 'bold';
resetBtn.style.textTransform = 'uppercase';
resetBtn.style.opacity = '1';