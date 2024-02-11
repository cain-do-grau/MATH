var nomeJogador1 = localStorage.getItem("nomeJogador1");
var nomeJogador2 = localStorage.getItem("nomeJogador2");

var pontosJogador1 = 0;
var pontosJogador2 = 0;

document.getElementById("nomeJogador1").innerHTML = nomeJogador1 + ":";
document.getElementById("nomeJogador2").innerHTML = nomeJogador2 + ":";

document.getElementById("pontosJogador1").innerHTML = pontosJogador1;
document.getElementById("pontosJogador2").innerHTML = pontosJogador2;

var rj1 = document.getElementById("rj1").value;
var rj2 = document.getElementById("rj2").value;

var si = [" + ", " - ", " x ", " / "];
var mat;

function cal() {
   var n1 = Math.floor(Math.random() * 100) + 1;
   var n2 = Math.floor(Math.random() * 100) + 1;
   var si2 = Math.floor(Math.random() * 3) + 1;
   var si3 = si[si2];

   if (si2 == 0) {
      mat = n1 + n2;
      console.log(mat);
   }

   if (si2 == 1) {
      mat = n1 - n2;
      console.log(mat);
   }

   if (si2 == 2) {
      mat = n1 * n2;
      console.log(mat);
   }

   if (si2 == 3) {
      mat = Math.floor(n1 / n2);
      console.log(mat);
   }
   document.getElementById("output").innerHTML = n1 + si3 + n2 + "= ?";
}


function pr() {

   n1 = 0 + Math.floor(Math.random() * 100) + 1;
   n2 = 0 + Math.floor(Math.random() * 100) + 1;
   si2 = 0 + Math.floor(Math.random() * 3) + 1;
   si3 = si[si2]

   if (si2 == 0) {
      mat = n1 + n2;
      console.log(mat);
   }

   if (si2 == 1) {
      mat = n1 - n2;
      console.log(mat);
   }

   if (si2 == 2) {
      mat = n1 * n2;
      console.log(mat);
   }

   if (si2 == 3) {
      mat = Math.floor(n1 / n2);
      console.log(mat);
   }


   document.getElementById("output").innerHTML = n1 + si3 + n2 + "= ?";
   document.getElementById("rj1").value = "";
   document.getElementById("rj2").value = "";




}

function check() {

   rj1 = document.getElementById("rj1").value;
   rj2 = document.getElementById("rj2").value;

   if (rj1 == mat) {
      console.log(rj1);
      pontosJogador1 = pontosJogador1 + 1;
   }

   document.getElementById("pontosJogador1").innerHTML = pontosJogador1;

   if (rj2 == mat) {
      console.log(rj2);
      pontosJogador2 = pontosJogador2 + 1;
   }

   document.getElementById("pontosJogador2").innerHTML = pontosJogador2;
}

