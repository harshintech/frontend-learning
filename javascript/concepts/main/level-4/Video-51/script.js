//let s = a.getSeconds()

setInterval(() => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let dd = a.getDate()
  let mm = a.getMonth()
  let yy = a.getFullYear()
  
  const ee = document.getElementsByClassName("box");
  
  ee[0].innerHTML = `<h1>${h}</h1>`;
  ee[1].innerHTML = `<h1>${m}</h1>`;
  ee[2].innerHTML = `<h1>${s}</h1>`;

  const eee = document.getElementsByTagName("h2");
  
  eee[0].innerHTML = `<h1>${dd}</h1>`;
  eee[1].innerHTML = `<h1>${mm}</h1>`;
  eee[2].innerHTML = `<h1>${yy}</h1>`;
  
}, 1000);

