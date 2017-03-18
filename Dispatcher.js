const DISPATCHER = (() => {
  let arrSubscribers = []

  return {
    subscribe: (model) => {
      arrSubscribers.push(model)
    },
    post: (message, data) => {
      arrSubscribers.forEach(fn => fn(message, data))
    }
  }
})()
