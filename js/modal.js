/* TODO: create mouseover / mouseout effect */
// element.addEventListener('mouseover', myFunction);
// element.addEventListener('click', mySecondFunction);
// element.addEventListener('mouseout', myThirdFunction);

// Get the modal
const modalOne = document.getElementById('modal-one');
const modalTwo = document.getElementById('modal-two');
const modalThree = document.getElementById('modal-three');
const modalFour = document.getElementById('modal-four');
const modalFive = document.getElementById('modal-five');
const modalSix = document.getElementById('modal-six');

// Get the button that opens the modal
const btnOne = document.getElementById('modal-btn-one');
const btnTwo = document.getElementById('modal-btn-two');
const btnThree = document.getElementById('modal-btn-three');
const btnFour = document.getElementById('modal-btn-four');
const btnFive = document.getElementById('modal-btn-five');
const btnSix = document.getElementById('modal-btn-six');

// Get the <span> element that closes the modal
const spanOne = document.getElementById('close-one');
const spanTwo = document.getElementById('close-two');
const spanThree = document.getElementById('close-three');
const spanFour = document.getElementById('close-four');
const spanFive = document.getElementById('close-five');
const spanSix = document.getElementById('close-six');

// When the user clicks the button, open the modal
btnOne.addEventListener('click', function () {
  modalOne.style.display = 'block';
});
btnTwo.addEventListener('click', function () {
  modalTwo.style.display = 'block';
});
btnThree.addEventListener('click', function () {
  modalThree.style.display = 'block';
});
btnFour.addEventListener('click', function () {
  modalFour.style.display = 'block';
});
btnFive.addEventListener('click', function () {
  modalFive.style.display = 'block';
});
btnSix.addEventListener('click', function () {
  modalSix.style.display = 'block';
});

// Close the modal when the user clicks the X
spanOne.addEventListener('click', function () {
  modalOne.style.display = 'none';
});
spanTwo.addEventListener('click', function () {
  modalTwo.style.display = 'none';
});
spanThree.addEventListener('click', function () {
  modalThree.style.display = 'none';
});
spanFour.addEventListener('click', function () {
  modalFour.style.display = 'none';
});
spanFive.addEventListener('click', function () {
  modalFive.style.display = 'none';
});
spanSix.addEventListener('click', function () {
  modalSix.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (e) {
  if (e.target == modalSix) {
    modalSix.style.display = 'none';
  }
});
