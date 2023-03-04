import confetti from 'canvas-confetti'

// runConfetti function displays confetti animation on the screen
export const runConfetti = () => {
  // duration of the animation in milliseconds
  let duration = 10 * 1000
  // time when the animation should end
  let animationEnd = Date.now() + duration
  // default values for confetti
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  // helper function to get a random number within a range
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  // interval to display confetti every 250 milliseconds
  let interval = setInterval(function () {
    // time left until the end of the animation
    let timeLeft = animationEnd - Date.now()

    // if there is no time left, clear the interval
    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    // calculate the number of particles to display based on the time left
    let particleCount = 50 * (timeLeft / duration)
    // display confetti on the left and right side of the screen
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        // display confetti

        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      }),
    )
  }, 250)
}
