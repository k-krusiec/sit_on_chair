document.addEventListener('DOMContentLoaded', function() {

  var dropListArrows = document.querySelectorAll('.list_arrow');
  var dropDownLists = document.querySelectorAll('.drop_down_list');
  var dropItems = document.querySelectorAll('.list_panel li');
  var summaryPanelLeft = document.querySelector('.panel_left');
  var summaryPanelRight = document.querySelector('.panel_right');
  var chairTitle = '';
  var chairColor = '';
  var chairPatern = '';

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
    dropItems[i].addEventListener('click', function() {
      console.log(this.innerText);
      console.log(this.parentElement.parentElement.firstElementChild);
      var dropText = this.parentElement.parentElement.firstElementChild;
      dropText.style.color = 'black';
      dropText.innerText = this.innerText;
      this.parentElement.classList.remove('show');

      chairTitle = dropDownLists[0].children[0].innerText;
      chairColor = dropDownLists[1].children[0].innerText;
      chairPatern = dropDownLists[0].children[0].innerText;

      summaryPanelLeft.children[0].innerText = chairTitle;
    })

  }



})
