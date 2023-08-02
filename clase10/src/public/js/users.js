const socket = io()

socket.on('individual', data => {
  console.log(data)
})

socket.on('broadcast', data => {
  console.log(data)
})

socket.on('todos', data => {
  console.log(data)
})

const form = document.getElementById('createForm')

form.addEventListener('submit', event => {
  event.preventDefault()

  const data = new FormData(form)

  const obj = {}

  data.forEach((value, key) => (obj[key] = value))
  socket.emit('message', obj)

  // fetch('/users', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'Post',
  //   body: JSON.stringify(obj),
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // .catch(err => console.log(err))
})
