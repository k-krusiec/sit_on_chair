document.addEventListener('DOMContentLoaded', function() {

  var panels = document.querySelectorAll('.price_panel');
  var basicGreen = '#24ba9f';
  var basicWhite = '#fff';

  function mouseOverColor() {
    this.style.backgroundColor = basicGreen;
    this.style.borderColor = basicGreen;
    this.firstElementChild.style.backgroundColor = basicGreen;
    this.firstElementChild.style.borderColor = basicGreen;
    this.firstElementChild.firstElementChild.style.backgroundColor = basicWhite;
    this.firstElementChild.firstElementChild.style.borderColor = basicWhite;
    this.children[1].style.color = basicWhite;
    this.children[2].style.borderColor = basicWhite;
    this.children[2].firstElementChild.style.color = basicGreen;
    this.children[2].lastElementChild.style.color = basicGreen;
    for (var j = 0, len2 = this.children[3].children.length; j < len2; j++) {
      if (!(j % 2)) {
        this.children[3].children[j].style.backgroundColor = basicWhite;
      }
    }
    this.lastElementChild.style.backgroundColor = basicWhite;
    this.lastElementChild.style.color = basicGreen;
  }

  function mouseOutColor() {
    this.style.backgroundColor = '';
    this.style.borderColor = '';
    this.firstElementChild.style.backgroundColor = '';
    this.firstElementChild.style.borderColor = '';
    this.firstElementChild.firstElementChild.style.backgroundColor = '';
    this.firstElementChild.firstElementChild.style.borderColor = '';
    this.children[1].style.color = '';
    this.children[2].style.borderColor = '';
    this.children[2].firstElementChild.style.color = '';
    this.children[2].lastElementChild.style.color = '';
    for (var j = 0, len2 = this.children[3].children.length; j < len2; j++) {
      if (!(j % 2)) {
        this.children[3].children[j].style.backgroundColor = '';
      }
    }
    this.lastElementChild.style.backgroundColor = '';
    this.lastElementChild.style.color = '';
  }

  for (var i = 0, len = panels.length; i < len; i++) {
    panels[i].addEventListener('mouseover', mouseOverColor);
    panels[i].addEventListener('mouseout', mouseOutColor);
  }



})
