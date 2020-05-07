let score = 0;

function sketchProc(processing) {

  /** configuración inicial */
  processing.setup = function() {
    processing.frameRate(25);
    processing.size(481, 481);
    processing.state = {
      width: processing.width,
      height: processing.height,
      mapCoors: [
        [10, 10],
        [10, 30],
        [10, 50],
        [10, 70],
        [10, 90],
        [10, 110],
        [10, 130],
        [10, 150],
        [10, 170],
        [10, 190],
        [10, 210],
        [10, 230],
        [10, 250],
        [10, 270],
        [10, 290],
        [10, 310],
        [10, 330],
        [10, 350],
        [10, 370],
        [10, 390],
        [10, 410],
        [10, 430],
        [10, 450],
        [10, 470],
        [30, 470],
        [50, 470],
        [70, 470],
        [90, 470],
        [110, 470],
        [130, 470],
        [170, 470],
        [190, 470],
        [210, 470],
        [150, 470],
        [230, 470],
        [250, 470],
        [270, 470],
        [290, 470],
        [310, 470],
        [330, 470],
        [350, 470],
        [370, 470],
        [390, 470],
        [410, 470],
        [430, 470],
        [450, 470],
        [470, 450],
        [470, 470],
        [470, 430],
        [470, 410],
        [470, 390],
        [470, 370],
        [470, 350],
        [470, 330],
        [470, 310],
        [470, 290],
        [470, 270],
        [470, 250],
        [470, 230],
        [470, 210],
        [470, 190],
        [470, 170],
        [470, 150],
        [470, 130],
        [470, 110],
        [470, 90],
        [470, 70],
        [470, 50],
        [470, 30],
        [470, 10],
        [450, 10],
        [430, 10],
        [410, 10],
        [390, 10],
        [370, 10],
        [350, 10],
        [330, 10],
        [310, 10],
        [290, 10],
        [270, 10],
        [250, 10],
        [230, 10],
        [210, 10],
        [190, 10],
        [170, 10],
        [150, 10],
        [130, 10],
        [110, 10],
        [90, 10],
        [50, 10],
        [30, 10],
        [70, 10],
        [210, 290],
        [230, 290],
        [250, 290],
        [270, 290],
        [290, 290],
        [190, 290],
        [190, 270],
        [190, 250],
        [190, 230],
        [290, 230],
        [290, 270],
        [290, 270],
        [290, 250],
        [190, 230],
        [190, 230],
        [190, 30],
        [190, 50],
        [210, 50],
        [210, 30],
        [270, 30],
        [270, 50],
        [290, 50],
        [290, 30],
        [270, 110],
        [250, 110],
        [230, 110],
        [210, 110],
        [70, 70],
        [90, 70],
        [110, 70],
        [130, 70],
        [130, 90],
        [130, 110],
        [150, 110],
        [330, 110],
        [350, 110],
        [350, 90],
        [350, 70],
        [370, 70],
        [390, 70],
        [410, 70],
        [410, 130],
        [430, 130],
        [450, 130],
        [30, 130],
        [50, 130],
        [70, 130],
        [70, 190],
        [70, 210],
        [70, 230],
        [70, 290],
        [50, 290],
        [30, 290],
        [410, 290],
        [430, 290],
        [450, 290],
        [410, 230],
        [410, 210],
        [410, 190],
        [350, 170],
        [350, 190],
        [350, 210],
        [130, 210],
        [130, 190],
        [130, 170],
        [190, 170],
        [210, 170],
        [230, 170],
        [250, 170],
        [270, 170],
        [290, 170],
        [210, 230],
        [270, 230],
        [130, 270],
        [130, 290],
        [130, 310],
        [130, 330],
        [130, 350],
        [350, 350],
        [350, 330],
        [350, 310],
        [350, 290],
        [350, 270],
        [350, 410],
        [330, 410],
        [310, 410],
        [250, 450],
        [250, 430],
        [230, 430],
        [230, 450],
        [170, 410],
        [150, 410],
        [130, 410],
        [230, 370],
        [250, 370],
        [250, 350],
        [230, 350],
        [210, 350],
        [270, 350],
        [290, 350],
        [190, 350],
        [70, 350],
        [70, 370],
        [70, 390],
        [70, 410],
        [410, 410],
        [410, 390],
        [410, 370],
        [410, 350],
        [410, 350]
      ],
      current_score: 0,
      hight_score: 0,
      cookies: [],
      pacman: {
        mouth: false,
        apertura: 20,
        x: 240,
        y: 400,
        direction: 0,
        NextDirection: 0,
        rotate: 0,
        gluttony_mode: false
      },
      blue: {
        x: 240,
        y: 240,
        direction: 0,
        NextDirection: 0,
        scream_mode: false
      },
      yellow: {
        x: 240,
        y: 240,
        direction: 0,
        NextDirection: 0,
        scream_mode: false
      },
      red: {
        x: 240,
        y: 240,
        direction: 0,
        NextDirection: 0,
        scream_mode: false
      },
      rose: {
        x: 240,
        y: 240,
        direction: 0,
        NextDirection: 0,
        scream_mode: false
      },
      constructor: {
        enable: false,
        direction: 0
      }
    };
  }

  // Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
  processing.drawGame = function(world) {

    // Fondo del canvas
    processing.background(0, 0, 0, 0); // negro con opacidad cero
    processing.stroke(1);
    processing.fill(0, 0, 0, 0); // negro con opacidad cero

    // SÓLO PARA LA CREACIÓN DEL JUEGO
    // dibuja una cuadrícula guía
    for (let y = 0; y < 480; y += 40) {
      for (let x = 0; x < 480; x += 40) {
        processing.rect(x, y, 40, 40);
      }
    }

    processing.noStroke();

    // laberinto actual
    MapPainter(world.mapCoors, processing);
    // galletas
    CookiesPainter(world.cookies, processing);

    // pacman
    processing.fill(255, 250, 90);
    processing.translate(world.pacman.x, world.pacman.y);
    processing.rotate(processing.radians(world.pacman.rotate));
    // movimiento de la boca de pacman
    processing.arc(0, 0, 30, 30, processing.radians(world.pacman.apertura), processing.radians(360 - world.pacman.apertura));

  }


  /**
   * @author Hernando H
   * @template () => Generator<Object>
   * @description   Genera un conjunto de funciones que se usan en la función TIC,
   *                es más limpio que anidar las funciones.
   * @param {Object} character
   * @param {number} NextDirection
   * @returns Generator<Object>
   */
  function* OnTicGenerator() {
    yield CookiesGenerator;
    yield MovingMouth;
    yield ChangeDirection;
    yield ChangePosition;
    return maxScore;
  }
  // Actualiza el mundo despues de cada frame. En este ejemplo, no cambia nada, solo retorna una copia del mundo
  processing.onTic = function func(world, done = false, fn = OnTicGenerator()) {
    if (done) return world;
    const next = fn.next();
    return func(next.value(world), next.done, fn);
  }

  //Implemente esta función si quiere que su programa reaccione a eventos del teclado
  processing.onKeyEvent = function(world, event) {

    // Activa el modo contructor de laberintos
    if (indexOf([107, 187], event) > -1) {
      world = make(world, {
        constructor: make(world.constructor, {
          enable: true
        })
      });
      let c = mapCoors[mapCoors.length - 1];
      mapCoors.push([c[0], c[1]])

      // Desactiva el modo contructor de laberintos
    } else if (event == 10) {
      world = make(world, {
        constructor: false
      });

      // Elimina un elemento del laberinto
    } else if (indexOf([109, 189], event) > -1 && processing.state.constructor.enable) {
      let c = mapCoors[mapCoors.length - 1];
      mapCoors = listDeleter(mapCoors, c);
    }

    // Valida si se está contruyendo o jugando
    if (!world.constructor.enable) {

      // pasa el valor de la tecla presionada (la intención de cambiar de dirección a pacman)
      world = make(world, {
        pacman: SetNextDirection(world.pacman, event)
      });
    } else {

      // se pasa la intención de parar los movimientos de pacman
      world = make(world, {
        pacman: SetNextDirection(world.pacman, 0)
      });

      // SÓLO PARA LA CREACIÓN DEL JUEGO
      // constructor de laberintos
      if (event == 37) {
        let c = world.mapCoors[world.mapCoors.length - 1];
        world.mapCoors.pop();
        world.mapCoors.push([c[0] - 20, c[1]])
        localStorage.setItem('map', world.mapCoors.toString())
      } else if (event == 38) {
        let c = world.mapCoors[world.mapCoors.length - 1];
        world.mapCoors.pop();
        world.mapCoors.push([c[0], c[1] - 20])
      } else if (event == 39) {
        let c = world.mapCoors[world.mapCoors.length - 1];
        world.mapCoors.pop();
        world.mapCoors.push([c[0] + 20, c[1]])
      } else if (event == 40) {
        let c = world.mapCoors[world.mapCoors.length - 1];
        world.mapCoors.pop();
        world.mapCoors.push([c[0], c[1] + 20])
      }
      localStorage.setItem('map', JSON.stringify(world.mapCoors));

    }
    return world;
  }

  //Implemente esta función si quiere que su programa reaccione a eventos del mouse
  processing.onMouseEvent = function(world, event) {
    return make(world, {
      mouseX: event.mouseX,
      mouseY: event.mouseY
    });
  };

  // Añade atributos a un Object y lo retorna
  function make(data, attribute) {
    return Object.assign({}, data, attribute);
  }

  /************************************************************************************/
  /************************************************************************************/
  /************************************************************************************/
  /************************************************************************************/
  // ******************** De aquí hacia abajo no debe cambiar nada. ********************

  // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo.
  // No cambie esta función. Su código debe ir en drawGame
  processing.draw = function() {

    processing.drawGame(processing.state);
    processing.state = processing.onTic(processing.state);
    processing.state.cookies = listDelete(processing.state.cookies, lookPositionCookies(processing.state.pacman, processing.state.cookies, 0));

  };

  // Esta función se ejecuta cada vez que presionamos una tecla.
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.keyPressed = function() {
    processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
  }

  // Esta función se ejecuta cada vez movemos el mouse.
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.mouseMoved = function() {
    processing.state = processing.onMouseEvent(processing.state, {
      action: "move",
      mouseX: processing.mouseX,
      mouseY: processing.mouseY
    });
  }

  // Estas funciones controlan los eventos del mouse.
  // No cambie estas funciones. Su código debe ir en OnMouseEvent
  processing.mouseClicked = function() {
    processing.state = processing.onMouseEvent(processing.state, {
      action: "click",
      mouseX: processing.mouseX,
      mouseY: processing.mouseY,
      mouseButton: processing.mouseButton
    });
  }

  processing.mouseDragged = function() {
    processing.state = processing.onMouseEvent(processing.state, {
      action: "drag",
      mouseX: processing.mouseX,
      mouseY: processing.mouseY,
      mouseButton: processing.mouseButton
    });
  }

  processing.mousePressed = function() {
    processing.state = processing.onMouseEvent(processing.state, {
      action: "press",
      mouseX: processing.mouseX,
      mouseY: processing.mouseY,
      mouseButton: processing.mouseButton
    });
  }

  processing.mouseReleased = function() {
    processing.state = processing.onMouseEvent(processing.state, {
      action: "release",
      mouseX: processing.mouseX,
      mouseY: processing.mouseY,
      mouseButton: processing.mouseButton
    });
  }
  // Fin de los eventos del mouse
}

var canvas = document.getElementById("canvasGame");

// Adjuntamos nuestro sketch al framework de processing
var processingInstance = new Processing(canvas, sketchProc);

function maxScore(state) {
  if (lookforCookies(state.pacman, state.cookies) == true) {
    scoreGame(state.cookies[lookPositionCookies(state.pacman, state.cookies, 0)]);
    const cookies = listDelete(state.cookies, state.cookies[lookPositionCookies(state.pacman, state.cookies, 0)]);
    return Object.assign({}, state, {
      cookies
    });
  }
  return state;
}
/**pegue la funcion desde businessLogic directamente aqui por que no la estaba reconociendo al momento de hacer el llamado */
/**
 * @author Vitor Alomia
 * @template (Object) => Object
 * @description Esta función busca las galleta mas cercana a pacman
 * @param {Object} pacman
 * @param {Object} cookies
 * @returns {Boolean}
 */
function lookforCookies(pacman, cookies) {
  if (isEmpty(cookies)) {
    return false;
  } else if (pacman.x == first(cookies).x && pacman.y == first(cookies).y) {
    return true;
  } else {
    return lookforCookies(pacman, rest(cookies));
  }
}

/**
 * @author Vitor Alomia
 * @template (Object) => Object
 * @description Esta función suma el valor de la galleta
 * @param {Object} pacman
 * @returns {Boolean}
 */
function scoreGame(valor) {
  prueba = document.getElementById("cookies");
  prueba.innerHTML = score;
  score += 10;
}

/**
 * @author Vitor Alomia
 * @template (Object) => Object
 * @description buscar la posicion de la galleta
 * @param {Object} pacman
 * @param {Object} pacman
 * @param {Object} indice
 * @returns {Number}
 */
function lookPositionCookies(pacman, cookies, indice) {

  if (isEmpty(cookies)) {
    return -1;
  } else if (pacman.x == first(cookies).x && pacman.y == first(cookies).y) {
    return indice;
  } else {
    return lookPositionCookies(pacman, rest(cookies), indice + 1);
  }
}

//
/**
 * @author Vitor Alomia
 * @template (Array) => Object
 * @description Esta función elimina la galleta a lo que el pacman está en la posicion de n
 * @param {Array} list
 * @param {Number} number
 * @returns {Array} l
 */
function listDelete(list, number) {
  if (number == length(list) - 1) {
    return invertir(allLast(list))
  }

  function allLast(list, aux = []) {
    if (length(list) == 1) {
      return aux;
    } else {
      return allLast(rest(list), cons(first(list), aux))
    }
  }

  function invertir(list, b = []) {
    if (isEmpty(list)) {
      return b;
    } else {
      return invertir(rest(list), cons(first(list), b));
    }
  }

  function functionAux(list, number, lAux = [], indice = 0) {
    if (isEmpty(list)) {
      return invertir(lAux);
    }
    if (number == indice) {
      return functionAux(rest(rest(list)), number, cons(first(rest(list)), lAux), indice + 1)
    } else {
      return functionAux(rest(list), number, cons(first(list), lAux), indice + 1)
    }
  }
  return functionAux(list, number)
}