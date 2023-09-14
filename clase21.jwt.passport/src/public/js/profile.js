fetch('/profile-info', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
  method: 'GET',
})
  .then(response => response.json())
  .then(data => console.log(data, 'response from backend'))
  .catch(error => console.log(error))
