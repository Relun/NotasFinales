// usé let y no var, ya que vi que var ya no se recomienda usar, let es lo recomendado a usar
// notas HTML
let notaHTML1 = +prompt("Ingrese nota 1 [HTML]:");
let notaHTML2 = +prompt("Ingrese nota 2 [HTML]:");
let notaHTML3 = +prompt("Ingrese nota 3 [HTML]:");
let HTML1 = document.getElementById("HTML1");
let HTML2 = document.getElementById("HTML2");
let HTML3 = document.getElementById("HTML3");
let HTMLpromedio = document.getElementById("HTMLpromedio");

HTML1.innerHTML = notaHTML1;
HTML2.innerHTML = notaHTML2;
HTML3.innerHTML = notaHTML3;
HTMLpromedio.innerHTML = ((notaHTML1 + notaHTML2 + notaHTML3) / 3).toFixed(2);

// NOTAS CSS
let notaCSS1 = +prompt("Ingrese nota 1 [CSS]:");
let notaCSS2 = +prompt("Ingrese nota 2 [CSS]:");
let notaCSS3 = +prompt("Ingrese nota 3 [CSS]:");
let CSS1 = document.getElementById("CSS1");
let CSS2 = document.getElementById("CSS2");
let CSS3 = document.getElementById("CSS3");
let CSSpromedio = document.getElementById("CSSpromedio");

CSS1.innerHTML = notaCSS1;
CSS2.innerHTML = notaCSS2;
CSS3.innerHTML = notaCSS3;
CSSpromedio.innerHTML = ((notaCSS1 + notaCSS2 + notaCSS3) / 3).toFixed(2);

//NOTAS JAVASCRIPT
let notaJavaScript1 = +prompt("Ingrese nota 1 [JavaScript]:");
let notaJavaScript2 = +prompt("Ingrese nota 2 [JavaScript]:");
let notaJavaScript3 = +prompt("Ingrese nota 3 [JavaScript]:");
let JavaScript1 = document.getElementById("JavaScript1");
let JavaScript2 = document.getElementById("JavaScript2");
let JavaScript3 = document.getElementById("JavaScript3");
let JavaScriptpromedio = document.getElementById("JavaScriptpromedio");

JavaScript1.innerHTML = notaJavaScript1;
JavaScript2.innerHTML = notaJavaScript2;
JavaScript3.innerHTML = notaJavaScript3;
JavaScriptpromedio.innerHTML = ((notaJavaScript1 + notaJavaScript2 + notaJavaScript3) / 3).toFixed(2);

