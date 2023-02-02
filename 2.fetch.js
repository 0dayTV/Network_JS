let url = 'https://reqres.in/api/users?page=2'

;(async () => {
  let response = await fetch(url)
  user = await response.json()
  console.log(user.data[0])
})()
// the same thing as

fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json.data[0]))
