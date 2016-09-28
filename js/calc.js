document.addEventListener('DOMContentLoaded', function() {

  var dropListArrows = document.querySelectorAll('.list_arrow');
  var dropDownLists = document.querySelectorAll('.drop_down_list');
  var dropItems = document.querySelectorAll('.list_panel li');
  var summaryPanelLeft = document.querySelector('.panel_left');
  var summaryPanelRight = document.querySelector('.panel_right');
  var transportChkBox = document.querySelector('#transport');
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
      chairPatern = dropDownLists[2].children[0].innerText;

      console.log(chairTitle);

      summaryPanelLeft.children[0].innerText = chairTitle;
      if (chairTitle === 'Wybierz rodzaj') {
        summaryPanelLeft.children[0].innerText = 'Twój fotel';
        summaryPanelRight.children[0].innerText = '';
      } else if (chairTitle === 'Clair') {
        summaryPanelRight.children[0].innerText = 200;
      } else if (chairTitle === 'Margarita') {
        summaryPanelRight.children[0].innerText = 300;
      } else {
        summaryPanelRight.children[0].innerText = 400;
      }

      summaryPanelLeft.children[1].innerText = chairColor;
      if (chairColor === 'Wybierz kolor') {
        summaryPanelLeft.children[1].innerText = '';
        summaryPanelRight.children[1].innerText = '';
      } else if (chairColor === 'Czerwony') {
        summaryPanelRight.children[1].innerText = 0;
      } else if (chairColor === 'Czarny') {
        summaryPanelRight.children[1].innerText = 20;
      } else {
        summaryPanelRight.children[1].innerText = 100;
      }

      summaryPanelLeft.children[2].innerText = chairPatern;
      if (chairPatern === 'Wybierz materiał') {
        summaryPanelLeft.children[2].innerText = '';
        summaryPanelRight.children[2].innerText = '';
      } else if (chairPatern === 'Tkanina') {
        summaryPanelRight.children[2].innerText = 250;
      } else {
        summaryPanelRight.children[2].innerText = 300;
      }

    })

  }

  transportChkBox.addEventListener('click', function() {
    if (transportChkBox.checked) {
      summaryPanelLeft.children[3].innerText = 'Transport';
      summaryPanelRight.children[3].innerText = transportChkBox.dataset.transportPrice;
    } else {
      summaryPanelLeft.children[3].innerText = '';
      summaryPanelRight.children[3].innerText = '';
    }

  })

})
