/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('dropdown').classList.toggle('show')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var dropdown = document.getElementById('myDropdown')
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show')
    }
  }
}
