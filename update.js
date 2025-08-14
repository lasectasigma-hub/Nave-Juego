
{ tipo: 'color', valor: '#8B0000', desbloqueada: true, nombre: 'Rojo Oscuro' },

// En update.js, agrega o reemplaza la función iniciarJuego con este código
function iniciarJuego(dificultad){
  document.getElementById('menu').style.display = 'none';
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  Tone.Transport.stop();
  if(dificultad === 'facil'){ velocidadObstaculo = 3; velocidadNave = 5; tiempoMeta = 20; }
  else if(dificultad === 'normal'){ velocidadObstaculo = 4.5; velocidadNave = 4; tiempoMeta = 35; }
  else if(dificultad === 'dificil'){ velocidadObstaculo = 6; velocidadNave = 3; tiempoMeta = 40; }
  else if(dificultad === 'imposible'){ velocidadObstaculo = 15; velocidadNave = 3; tiempoMeta = 10; }
  else if(dificultad === 'curtido'){ velocidadObstaculo = 17; velocidadNave = 3; tiempoMeta = 60; }
  else if(dificultad === 'secreto'){ velocidadObstaculo = 20; velocidadNave = 10; tiempoMeta = 60; }
  else if(dificultad === 'demonio'){ velocidadObstaculo = 30; velocidadNave = 20; tiempoMeta = 15; colorNave = skinsDisponibles.find(s => s.valor === 'rgb'); }

  nave = { x: canvas.width/2 - tamañoCubo/2, y: canvas.height/2 - tamañoCubo/2, w: tamañoCubo, h: tamañoCubo };
  obstaculos = [];
  for(let i=0; i<12; i++){ obstaculos.push(crearObstaculo()); }
  tiempoInicio = Date.now();
  juegoActivo = true;
  dificultadActual = dificultad;
  document.getElementById('temporizador').style.display = 'block';
  requestAnimationFrame(actualizar);
}
