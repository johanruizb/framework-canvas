/**
 * @author Johan R
 */
document.getElementById('soundtrack').click();
document.addEventListener('click', event => {
  console.log('Reproduciendo Soundtrack');
  var audio = document.getElementById('soundtrack');
  audio.play();
});

function buttonSound() {
  var aud = document.getElementById("buttonPlay");
  console.log('Reproduciendo sonido del boton');
  aud.autoplay = true;
  aud.load();
}