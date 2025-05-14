let colors;

function setup() {
  const canvas = createCanvas(300, 300);
  canvas.parent("canvas-container");
  noLoop();
  drawMondrian();
}

function drawMondrian() {
  background(255);
  strokeWeight(6);
  stroke(0);

  // Paleta inspirada en Mondrian: rojo, azul, amarillo y blanco
  colors = ['#ff4136', '#0074D9', '#ffdc00', '#ffffff'];

  for (let x = 0; x < width; x += random(60, 150)) {
    for (let y = 0; y < height; y += random(60, 150)) {
      const w = random(50, 100);
      const h = random(50, 100);
      fill(random(colors));
      rect(x, y, w, h);
    }
  }
}

