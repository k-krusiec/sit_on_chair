document.addEventListener('DOMContentLoaded', function() {

  var img = document.querySelector('.slider_img');
  var prevBtn = document.querySelector('.slider_prev');
  var nextBtn = document.querySelector('.slider_next');
  var imagesArr = [
    'images/black_chair.png',
    'images/red.png',
    'images/orange.png'
  ];
  var imagesArrLen = imagesArr.length - 1;
  var counter = 0;

  nextBtn.addEventListener('click', function() {
    //img.style.opacity = '0.5';

    counter++;
    if (counter > imagesArrLen) {
      counter = 0;
    }
    img.src = imagesArr[counter];

  })

  prevBtn.addEventListener('click', function() {
    counter--;
    if (counter < 0) {
      counter = imagesArrLen;
    }
    img.src = imagesArr[counter];
  })

})

//https://codepen.io/zuraizm/pen/vGDHl
