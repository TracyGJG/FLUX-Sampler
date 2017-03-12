const MODELS = (() => {
  let objSubscribedViews = {}

  // Model: Counter One
  const counter1 = ((init) => {
    let value = init

    DISPATCHER.subscribe((message, data) => {
      if (message === 'counter1') {
        counter1.update(data)
        objSubscribedViews.counter1(counter1.value())
      }
    })

    return {
      update: (val) => (value += val),
      value: () => value
    }
  })(0)

  // Model: Counter Two
  const counter2 = ((init) => {
    let value = init

    DISPATCHER.subscribe((message, data) => {
      if (message === 'counter2') {
        counter2.update(data)
        objSubscribedViews.counter2(counter2.value())
      }
    })

    return {
      update: (val) => (value += val),
      value: () => value
    }
  })(10)

  return {
    subscribe: (model, fnView) => {
      objSubscribedViews[model] = fnView
    }
  }
})()
