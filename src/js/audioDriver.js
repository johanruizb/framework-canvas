/**
 * @author Johan R
 */

function startMusic() {
  const seleccion = musicRandom();
  console.log(seleccion);
  document.getElementById('prueba').onclick = "";
  var casete = document.getElementById("caseteSound");
  casete.volume = 0.2;
  casete.play();
  if (seleccion == 1) {
    console.log('Reproduciendo Soundtrack "Blue Sky Blues"');
    var audio = document.getElementById('blueSkyBlues');
    audio.volume = 0.1;
    audio.play();
  }
  if (seleccion == 2) {
    console.log('Reproduciendo Soundtrack "reCreation"');
    var audio = document.getElementById('reCreation');
    audio.volume = 0.1;
    audio.play();
  }
  if (seleccion == 3) {
    console.log('Reproduciendo Soundtrack "The Stars Look Different"');
    var audio = document.getElementById('theStarsLookDifferent');
    audio.volume = 0.1;
    audio.play();
  }
  if (seleccion == 4) {
    console.log('Reproduciendo Soundtrack "Between Worlds"');
    var audio = document.getElementById('betweenWorlds');
    audio.volume = 0.1;
    audio.play();
  }
}

function musicGame() {
  const seleccion = musicRandom();
  console.log(seleccion);
  document.getElementById('prueba').onclick = "";
  var casete = document.getElementById("caseteSound");
  casete.volume = 0.2;
  casete.play();
  if (seleccion == 1) {
    console.log('Reproduciendo Soundtrack "yellow"');
    var audio = document.getElementById('yellow');
    audio.volume = 0.1;
    audio.play();
  }
  if (seleccion == 2) {
    console.log('Reproduciendo Soundtrack "Millennials"');
    var audio = document.getElementById('millennials');
    audio.volume = 0.1;
    audio.play();
  }
  if (seleccion == 3) {
    console.log('Reproduciendo Soundtrack "Spinnin"');
    var audio = document.getElementById('spinnin');
    audio.volume = 0.1;
    audio.play();
  }
  if (seleccion == 4) {
    console.log('Reproduciendo Soundtrack "Sudden Goodbye"');
    var audio = document.getElementById('suddenGoodbye');
    audio.volume = 0.1;
    audio.play();
  }
}

function endGame() {
  console.log('Reproduciendo Soundtrack "Jazzy Sax, Guitar, and Organ at the club"');
  var audio = document.getElementById('jazzySaxGuitarAndOrganAtTheClub');
  audio.volume = 0.1;
  audio.play();
}

function buttonSound() {
  var aud = document.getElementById("buttonPlay");
  console.log('Reproduciendo sonido del boton');
  aud.autoplay = true;
  aud.volume = 0.2;
  aud.load();
}

function lossOfLife() {
  var aud = document.getElementById("lifes");
  console.log('Reproduciendo sonido de muerte');
  aud.autoplay = true;
  aud.volume = 0.1;
  aud.load();
}

function clockSound() {
  var aud = document.getElementById("clock");
  console.log('Reproduciendo sonido del reloj');
  aud.autoplay = true;
  aud.volume = 0.1;
  aud.load();
}
//En duda por posibles molestias
function crunchSound() {
  var aud = document.getElementById("crunch");
  aud.autoplay = true;
  aud.volume = 0.1;
  aud.load();
}
//-------

function musicRandom() {
  return Math.floor((Math.random() * 4) + 1);
}