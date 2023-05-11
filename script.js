function createSlides(filenames) {
  filenames.forEach(n => {
    $('.carousel')[0].innerHTML += `<div class="slide"><img src="${n.toString()}.jpg"></div>`
  });
}
createSlides([1, 2, 3, 4, 5, 6]);
let slides = $('.slide');

function createDots() {
  let num = $('.slide').length;
  let div = $('.dotContainer')[0];

  for (let i = 0; i < num; i++) {
    div.innerHTML += '<span class="dot"></span>'
  }
}
// createDots();

let si = 1;
nextSlide();

let timer = 7000;
let next = Date.now() + timer;

function nextSlide() {
  // let dots = $('.dot');

  slides[si].style.opacity = '0';
  // dots[si].className = 'dot';

  si++;
  si %= slides.length;

  slides[si].style.opacity = '1';
  // dots[si].className = 'dot active';
}

setInterval(() => {
  let curr = Date.now();
  $('.progress')[0].style.width = (timer - next + curr) / timer * 100 + 'vw';

  if (next > curr) return;
  nextSlide();
  next += timer;

}, 10);
