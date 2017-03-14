const VIEWS = (() => {

  // Views
  STORES.subscribe('counter1', (val) => {
    document.querySelector('div').textContent = val
  })
  STORES.subscribe('counter2', (val) => {
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
