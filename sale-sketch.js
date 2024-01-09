let pages = [];
let timer = 0;
let FW;

const TIME_PER_PAGE = 10000;

function preload() {
  pages[0] = loadImage('./Page 1.png');
  pages[1] = loadImage('./Page 2.png');
  pages[2] = loadImage('./Page 3.png');
  pages[3] = loadImage('./Page 4.png');
  pages[4] = loadImage('./rewards.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  if (pages[0].width / pages[0].height > width / height) {
    FW = width;
  } else {
    FW = pages[0].width * height / pages[0].height;
  }
}

function draw() {
  background(0);
  timer -= deltaTime;

  translate(timer / TIME_PER_PAGE * (FW + 10), 0);
  pages.forEach((page, ind) => {
    let FH = page.height * (FW / page.width);
    image(page, (FW + 10) * ind, (height - FH) / 2, FW, FH);
    image(page, (FW + 10) * (ind + pages.length), (height - FH) / 2, FW, FH);
  });

  if (timer < -TIME_PER_PAGE * pages.length) timer += TIME_PER_PAGE * pages.length;

}
