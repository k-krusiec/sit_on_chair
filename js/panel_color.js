document.addEventListener('DOMContentLoaded', function() {

  var panels = document.querySelectorAll('.price_panel');
  var basicGreen = '#24ba9f';
  var basicWhite = '#fff';
  var basicGrey = '#f9f9f9';
  var borderGrey = '#d9d9d9';
  var textGrey = '#c2c2c2';
  var tabGrey = '#e4e4e4';

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
    this.style.backgroundColor = basicGrey;
    this.style.borderColor = borderGrey;
    this.firstElementChild.style.backgroundColor = basicWhite;
    this.firstElementChild.style.borderColor = borderGrey;
    this.firstElementChild.firstElementChild.style.backgroundColor = borderGrey;
    this.firstElementChild.firstElementChild.style.borderColor = borderGrey;
    this.children[1].style.color = basicGreen;
    this.children[2].style.borderColor = borderGrey;
    this.children[2].firstElementChild.style.color = textGrey;
    this.children[2].lastElementChild.style.color = textGrey;
    for (var j = 0, len2 = this.children[3].children.length; j < len2; j++) {
      if (!(j % 2)) {
        this.children[3].children[j].style.backgroundColor = tabGrey;
      }
    }
    this.lastElementChild.style.backgroundColor = basicGreen;
    this.lastElementChild.style.color = basicWhite;
  }

  for (var i = 0, len = panels.length; i < len; i++) {
    panels[i].addEventListener('mouseover', mouseOverColor);
    panels[i].addEventListener('mouseout', mouseOutColor);
  }



})
