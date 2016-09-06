document.addEventListener('DOMContentLoaded', function() {

  var imgs = document.querySelectorAll('.gall_img');

  for (var i = 0, len = imgs.length; i < len; i++) {
    imgs[i].addEventListener('mouseover', function(e) {
      this.firstElementChild.style.visibility = 'hidden';
    })
    imgs[i].addEventListener('mouseout', function(e) {
      this.firstElementChild.style.visibility = 'inherit';
    })
  }

})
