let carousel, flyer, textAd;
let origin = 0;
let CW, CH, FW, FH, TW1, TH1, TW2, TH2;
let timer = 0;
let LOOPTIME = 20000, FLYERTIME = 15000;

function preload() {
  carousel = loadImage('./carousel.png');
  flyer = loadImage('./flyer.png')
  textAd = loadImage('./textAd.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  if (width * (flyer.height / flyer.width) > height) {
    FH = height;
    FW = flyer.width * (height / flyer.height);
  }
  else {
    FW = width;
    FH = flyer.height * (width / flyer.width);
  }

  CH = FH * 3 / 4;
  CW = carousel.width * (CH / carousel.height);

  TH1 = height - FH;
  TW1 = textAd.width * (TH1 / textAd.height);

  TH2 = height - CH;
  TW2 = textAd.width * (TH2 / textAd.height);
}

function draw() {
  background(0);
  timer -= deltaTime;


  if (timer <= 0) timer += LOOPTIME + FLYERTIME;
  if (timer < FLYERTIME) {
    image(flyer, (width - FW) / 2, 0, FW, FH);
    image(textAd, (width - TW1) / 2, FH, TW1, TH1);
    return;
  }

  image(carousel, origin, 20, CW, CH);
  image(carousel, origin + CW, 20, CW, CH);

  image(textAd, (width - TW2) / 2, CH, TW2, TH2);

  origin -= width/700 * deltaTime/10;
  if (origin < -CW) origin += CW;
}
