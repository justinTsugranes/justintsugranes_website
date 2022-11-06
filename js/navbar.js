/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function dropDown() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

/* Method using addeventlistener */
// const mouseover = document.getElementById('demo').addEventListener('mouseover', mouseOver);
// const mouseout = document.getElementById('demo').addEventListener('mouseout', mouseOut);

// function mouseOver() {
//   document.getElementById('demo').style.color = 'red';
// }

// function mouseOut() {
//   document.getElementById('demo').style.color = 'black';
// }

/* Method using onmouseover*/
// document.getElementById('mouse').onmouseover = function () {
//   mouseOver();
// };
// document.getElementById('mouse').onmouseout = function () {
//   mouseOut();
// };

// function mouseOver() {
//   document.getElementById('mouse').style.color = 'red';
// }

// function mouseOut() {
//   document.getElementById('mouse').style.color = 'black';
// }
