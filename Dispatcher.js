const DISPATCHER = (() => {
  let arrSubscribers = []

  return {
    subscribe: (model) => {
      arrSubscribers.push(model)
    },
    post: (message, data) => {
      arrSubscribers.forEach((
        (msg, dat) => ((fn) => fn(msg, dat))
      )(message, data))
    }
  }
})()
