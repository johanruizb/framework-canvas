/**
 * @author Johan R
 */

function music() {
  document.getElementById('prueba').onclick = "";
  const seleccion = musicRandom()
  console.log(seleccion);
  if (seleccion == 1) {
    document.getElementById('blueSkyBlues').click();
    document.addEventListener('click', event => {
      console.log('Reproduciendo Soundtrack "Blue Sky Blues"');
      var audio = document.getElementById('blueSkyBlues');
      audio.play();
    });
  } else {
    document.getElementById('reCreation').click();
    document.addEventListener('click', event => {
      console.log('Reproduciendo Soundtrack "reCreation"');
      var audio = document.getElementById('reCreation');
      audio.play();
    });
  }
}



function buttonSound() {
  var aud = document.getElementById("buttonPlay");
  console.log('Reproduciendo sonido del boton');
  aud.autoplay = true;
  aud.load();
}

function musicRandom() {
  return Math.floor((Math.random() * 2) + 1)
}