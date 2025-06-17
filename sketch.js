function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(135, 206, 235); // céu azul

  // chão
  fill(34, 139, 34);
  rect(0, height * 0.75, width, height * 0.25);

  // sol
  fill(255, 204, 0);
  ellipse(80, 80, 100, 100);

  // árvore
  fill(139, 69, 19); // tronco
  rect(100, 200, 20, 100);
  fill(34, 139, 34); // copa
  ellipse(110, 180, 100, 100);

  // homem do campo - corpo
  fill(255, 220, 180); // rosto
  ellipse(300, 220, 40, 40); // cabeça
  fill(0, 100, 200); // camisa
  rect(280, 240, 40, 60); // corpo
  fill(139, 69, 19); // calça
  rect(280, 300, 15, 50); // perna esquerda
  rect(305, 300, 15, 50); // perna direita

  // braços
  stroke(255, 220, 180);
  strokeWeight(8);
  line(280, 250, 250, 280); // braço esquerdo
  line(320, 250, 350, 280); // braço direito
  noStroke();

  // chapéu de palha
  fill(194, 178, 128);
  rect(285, 200, 30, 10); // topo do chapéu
  rect(270, 210, 60, 5);  // aba do chapéu
}


let homemX = 300;
let direcao = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235); // céu azul

  // chão
  fill(34, 139, 34);
  rect(0, height * 0.75, width, height * 0.25);

  // sol
  fill(255, 204, 0);
  ellipse(80, 80, 100, 100);

  // árvore
  fill(139, 69, 19); // tronco
  rect(100, 200, 20, 100);
  fill(34, 139, 34); // copa
  ellipse(110, 180, 100, 100);

  // cerca
  for (let i = 0; i < width; i += 40) {
    fill(160, 82, 45);
    rect(i, 300, 10, 50);
    rect(i, 320, 40, 5);
    rect(i, 340, 40, 5);
  }

  // vaca
  fill(255);
  rect(450, 270, 60, 40); // corpo
  fill(0);
  ellipse(460, 280, 10, 10); // manchas
  ellipse(490, 285, 15, 15);
  fill(255);
  ellipse(480, 260, 30, 20); // cabeça
  fill(0);
  ellipse(475, 258, 5, 5); // olhos
  ellipse(485, 258, 5, 5);

  // homem do campo
  drawHomem(homemX);

  // movimento
  homemX += direcao * 2;
  homemX = constrain(homemX, 0, width);
}

function drawHomem(x) {
  // corpo
  fill(255, 220, 180); // rosto
  ellipse(x, 220, 40, 40); // cabeça
  fill(0, 100, 200); // camisa
  rect(x - 20, 240, 40, 60); // corpo
  fill(139, 69, 19); // calça
  rect(x - 20, 300, 15, 50); // perna esquerda
  rect(x + 5, 300, 15, 50); // perna direita

  // braços
  stroke(255, 220, 180);
  strokeWeight(8);
  line(x - 20, 250, x - 50, 280); // braço esquerdo
  line(x + 20, 250, x + 50, 280); // braço direito
  noStroke();

  // chapéu de palha
  fill(194, 178, 128);
  rect(x - 15, 200, 30, 10); // topo do chapéu
  rect(x - 30, 210, 60, 5);  // aba do chapéu

  // enxada
  stroke(100);
  strokeWeight(4);
  line(x + 50, 280, x + 70, 220); // cabo
  fill(150);
  noStroke();
  rect(x + 65, 210, 20, 10); // lâmina
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    direcao = -1;
  } else if (keyCode === RIGHT_ARROW) {
    direcao = 1;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    direcao = 0;
  }
}
