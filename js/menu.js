document.addEventListener('DOMContentLoaded', function() {

  var menuItems = document.querySelectorAll('.menu_item');
  var submenu = document.querySelector('.submenu');
  var submenuItems = document.querySelectorAll('.submenu_item');

  function azisLight() {
    this.style.backgroundColor = '#24ba9f';
  }
  function azisNoLight() {
    this.style.backgroundColor = 'inherit';
  }
  function showSubmenu() {
    submenu.style.display = 'block';
  }
  function hideSubmenu() {
    submenu.style.display = 'none';
  }

  for (var i = 0, miLen = menuItems.length; i < miLen; i++) {
    menuItems[i].addEventListener('mouseover', azisLight);
    menuItems[i].addEventListener('mouseout', azisNoLight);
  }
  menuItems[0].addEventListener('mouseover', showSubmenu);
  menuItems[0].addEventListener('mouseout', hideSubmenu);

  for (var j = 0, siLen = submenuItems.length; j < siLen; j++) {
    submenuItems[j].addEventListener('mouseover', azisLight);
    submenuItems[j].addEventListener('mouseout', azisNoLight);
  }

})
