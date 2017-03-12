const VIEWS = (() => {

  // Views
  MODELS.subscribe( 'counter1', (val) => {
    domDiv = document.querySelector('div').textContent = val
  })
  MODELS.subscribe( 'counter2', (val) => {
    document.querySelector('span').textContent = val
  })

  // Actions
  const domBtns = document.querySelectorAll('button')
  const domDir = document.querySelector('input')
  domBtns[0].addEventListener('click', (evt) => {
    DISPATCHER.post('counter1', (2 * (1 * domDir.checked)) - 1)
  })
  domBtns[1].addEventListener('click', (evt) => {
    DISPATCHER.post('counter2', (2 * (1 * domDir.checked)) - 1)
  })

  // Initialise
  DISPATCHER.post('counter1', 0)
  DISPATCHER.post('counter2', 0)
})()
