document.addEventListener('DOMContentLoaded', function() {

  var dropListArrows = document.querySelectorAll('.list_arrow');
  var dropLists = document.querySelectorAll('.list_panel');
  var dropItems = document.querySelectorAll('.list_panel li');

  for (var i = 0, len = dropListArrows.length; i < len; i++) {
    dropListArrows[i].addEventListener('click', function() {
      //this.parentElement.lastElementChild.style.display = 'block';
      this.parentElement.lastElementChild.classList.toggle('show');
    })
  }

  for (var i = 0, len = dropItems.length; i < len; i++) {
    dropItems[i].addEventListener('mouseover', function() {
      this.style.color = 'white';
      this.style.background = '#24ba9f';
    })
    dropItems[i].addEventListener('mouseout', function() {
      this.style.color = '';
      this.style.background = '';
    })
  }

})
