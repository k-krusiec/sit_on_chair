document.addEventListener('DOMContentLoaded', function() {

  var dropListArrows = document.querySelectorAll('.list_arrow');
  var dropItems = document.querySelectorAll('.list_panel li');

  var dropDownLists = document.querySelectorAll('.drop_down_list');
  var summaryPanelLeft = document.querySelector('.panel_left');
  var summaryPanelRight = document.querySelector('.panel_right');
  var values = document.querySelectorAll('.value');
  var transportChkBox = document.querySelector('#transport');
  var sum = document.querySelector('.sum').firstElementChild;
  var chairTitle = '';
  var chairColor = '';
  var chairPatern = '';
  var total;
  var price;

  sum.innerText = 0;
  for (var i = 0, len = dropListArrows.length; i < len; i++) {
    dropListArrows[i].addEventListener('click', function() {
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
      total = 0;
      var dropText = this.parentElement.parentElement.firstElementChild;
      dropText.style.color = 'black';
      dropText.innerText = this.innerText;
      this.parentElement.classList.remove('show');

      //nazwa zmiennej = nr dropa, tf w dropie, tekst
      chairTitle = dropDownLists[0].children[0].innerText;
      chairColor = dropDownLists[1].children[0].innerText;
      chairPatern = dropDownLists[2].children[0].innerText;
      var x = 0, y = 0, z = 0;
      var type = 0, color = 0, patern = 0;
      summaryPanelLeft.children[0].innerText = chairTitle;
      if (chairTitle === 'Wybierz rodzaj') {
        x = 0;
        summaryPanelLeft.children[0].innerText = 'Twój fotel';
        summaryPanelRight.children[0].innerText = '';
      } else if (chairTitle === 'Clair') {
        x = 200;
        summaryPanelRight.children[0].innerText = x;
      } else if (chairTitle === 'Margarita') {
        x = 300;
        summaryPanelRight.children[0].innerText = x;
      } else {
        x = 400;
        summaryPanelRight.children[0].innerText = x;
      }
      type = x;
      console.log('type' + type);
      summaryPanelLeft.children[1].innerText = chairColor;
      if (chairColor === 'Wybierz kolor') {
        y = 0;
        summaryPanelLeft.children[1].innerText = '';
        summaryPanelRight.children[1].innerText = '';
      } else if (chairColor === 'Czerwony') {
        y = 0;
        summaryPanelRight.children[1].innerText = y;
      } else if (chairColor === 'Czarny') {
        y = 50;
        summaryPanelRight.children[1].innerText = y;
      } else {
        y = 100;
        summaryPanelRight.children[1].innerText = y;
      }
      color = y;
      console.log('color' + color);
      summaryPanelLeft.children[2].innerText = chairPatern;
      if (chairPatern === 'Wybierz materiał') {
        z = 0;
        summaryPanelLeft.children[2].innerText = '';
        summaryPanelRight.children[2].innerText = '';
      } else if (chairPatern === 'Tkanina') {
        z = 250;
        summaryPanelRight.children[2].innerText = z;
      } else {
        z = 300;
        summaryPanelRight.children[2].innerText = z;
      }
      patern = z;
      console.log(patern);
      total = 0;
      total = x + y + z;
      console.log('total: ' + total);
      sum.innerText = total;
    })
  }

  transportChkBox.addEventListener('click', function() {
    var a = 0;
    if (transportChkBox.checked) {
      summaryPanelLeft.children[3].innerText = 'Transport';
      summaryPanelRight.children[3].innerText = transportChkBox.dataset.transportPrice;
      a = transportChkBox.dataset.transportPrice;
      console.log('aaa ' + a);
    } else {
      summaryPanelLeft.children[3].innerText = '';
      summaryPanelRight.children[3].innerText = '';
      a = -1 * transportChkBox.dataset.transportPrice;
    }

    total = Number(total) + Number(a);
    console.log('tttttottttal: ' + total);
    sum.innerText = '';
    sum.innerText = total;
  })

})
