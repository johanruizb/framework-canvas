/**
 * @author Johan R
 */

function startMusic() {
  const seleccion = musicRandom();
  console.log(seleccion);
  document.getElementById('sounds').onclick = "";
  var audio = document.getElementById('sMusic');
  audio.volume = 0.1;
  var casete = document.getElementById("caseteSound");
  casete.volume = 0.2;
  casete.play();
  if (seleccion == 1) {
    console.log('Reproduciendo Soundtrack "Blue Sky Blues"');
    audio.src = "src/sounds/Blue Sky Blues.mp3";
    audio.play();
  }
  if (seleccion == 2) {
    console.log('Reproduciendo Soundtrack "reCreation"');
    audio.src = "src/sounds/reCreation.mp3";
    audio.play();
  }
  if (seleccion == 3) {
    console.log('Reproduciendo Soundtrack "The Stars Look Different"');
    audio.src = "src/sounds/The Stars Look Different.mp3";
    audio.play();
  }
  if (seleccion == 4) {
    console.log('Reproduciendo Soundtrack "Between Worlds"');
    audio.src = "src/sounds/Between Worlds.mp3";
    audio.play();
  }
}

function musicGame() {
  const seleccion = musicRandom();
  console.log(seleccion);
  document.getElementById('sounds').onclick = "";
  var audio = document.getElementById("sMusic");
  audio.volume = 0.1;
  var casete = document.getElementById("caseteSound");
  casete.volume = 0.2;
  casete.play();
  if (seleccion == 1) {
    console.log('Reproduciendo Soundtrack "yellow"');
    audio.src = "sounds/yellow.mp3";
    audio.play();
  }
  if (seleccion == 2) {
    console.log('Reproduciendo Soundtrack "Millennials"');
    audio.src = "sounds/Millennials.mp3";
    audio.play();
  }
  if (seleccion == 3) {
    console.log('Reproduciendo Soundtrack "Spinnin"');
    audio.src = "sounds/Spinnin.mp3";
    audio.play();
  }
  if (seleccion == 4) {
    console.log('Reproduciendo Soundtrack "Sudden Goodbye"');
    audio.src = "sounds/Sudden Goodbye.mp3";
    audio.play();
  }
}

function buttonSound() {
  var aud = document.getElementById("bSound");
  console.log('Reproduciendo sonido del boton');
  aud.autoplay = true;
  aud.volume = 0.2;
  aud.load();
}

function lossOfLife() {
  var aud = document.getElementById("effects");
  console.log('Reproduciendo sonido de muerte');
  aud.src = "sounds/lifes.mp3#t=,1";
  aud.autoplay = true;
  aud.volume = 0.1;
  aud.load();
}

function clockSound() {
  var aud = document.getElementById("effects");
  console.log('Reproduciendo sonido del reloj');
  aud.src = "sounds/clock.mp3#t=,2.5";
  aud.autoplay = true;
  aud.volume = 0.1;
  aud.load();
}

function musicRandom() {
  return Math.floor((Math.random() * 4) + 1);
}

//En duda por posibles molestias
function crunchSound() {
  var aud = document.getElementById("effects");
  aud.src = "sounds/crunch.mp3";
  aud.autoplay = true;
  aud.volume = 0.1;
  aud.load();
}
//-------