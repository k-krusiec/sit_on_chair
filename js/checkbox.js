document.addEventListener('DOMContentLoaded', function() {

  var checkbox = document.querySelector('.checkbox');
  var hidden = document.querySelector('.hidden');

  checkbox.addEventListener('click', function(e) {
    hidden.classList.toggle('hidden');
  })

})
