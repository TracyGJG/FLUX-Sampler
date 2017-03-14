const STORES = (() => {
  let objSubscribedViews = {}

  // Model: Counter One
  const counter1 = ((init) => {
    let value = init

    DISPATCHER.subscribe((message, data) => {
      if (message === 'counter1') {
        value += data
        objSubscribedViews.counter1(value)
      }
    })
  })(0)

  // Model: Counter Two
  const counter2 = ((init) => {
    let value = init

    DISPATCHER.subscribe((message, data) => {
      if (message === 'counter2') {
        value += data
        objSubscribedViews.counter2(value)
      }
    })
  })(10)

  return {
    subscribe: (model, fnView) => {
      objSubscribedViews[model] = fnView
    }
  }
})()
