/* https://timnwells.medium.com/enhancing-our-simple-responsive-image-gallery-746549cd2f11 */

let darkBoxVisible = false

window.addEventListener('load', (event) => {
  let images = document.querySelectorAll('img')
  if (images !== null && images !== undefined && images.length > 0) {
    images.forEach(function (img) {
      img.addEventListener('click', (evt) => {
        showDarkbox(img.src)
      })
    })
  }
})

function showDarkbox(url) {
  if (!darkBoxVisible) {
    let x = (window.innerWidth - 1280) / 2
    let y = window.scrollY + 50

    // Create the darkBox
    var div = document.createElement('div')
    div.id = 'darkbox'
    div.innerHTML = '<img class="darkboximg" src="' + url + '" />'
    document.body.appendChild(div)
    let box = document.getElementById('darkbox')
    box.style.left = x.toString() + 'px'
    box.style.top = y.toString() + 'px'
    box.style.height = 'auto'
    box.addEventListener('click', (event) => {
      // Remove it
      let element = document.getElementById('darkbox')
      element.parentNode.removeChild(element)

      darkBoxVisible = false
    })

    darkBoxVisible = true
  } else {
    // Remove it
    let element = document.getElementById('darkbox')
    element.parentNode.removeChild(element)

    darkBoxVisible = false
  }
}
