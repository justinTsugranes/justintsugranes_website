import bootstrap from 'bootstrap';
// import Lightbox from 'bs5-lightbox';

// const options = {
//   keyboard: true,
//   size: 'fullscreen',
// };

// document.querySelectorAll('.my-lightbox-toggle').forEach((el) =>
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     const lightbox = new Lightbox(el, options);
//     lightbox.show();
//   })
// );

$('#myForm').on('submit', function (e) {
  $('#success').modal('show');
  e.preventDefault();
});
