const loginForm = document.getElementById('loginForm')
const responseLogin = document.getElementById('responseLogin')

loginForm.addEventListener('submit', async e => {
  try {
    e.preventDefault()

    const data = {}
    const formData = new FormData(loginForm)

    formData.forEach((value, key) => (data[key] = value))

    const headers = {
      'Content-Type': 'application/json',
    }
    const method = 'POST'
    const body = JSON.stringify(data)

    const response = await fetch('/auth/login', {
      headers,
      method,
      body,
    })

    const responseData = await response.json()
    localStorage.setItem('authToken', responseData.token)
  } catch (error) {
    console.log(error)
    responseLogin.innerText = `Tenemos un error ${error.error}`
  }
})
