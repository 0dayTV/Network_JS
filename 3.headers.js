let url = 'https://reqres.in/api/users?page=2'

;(async () => {
  let response = await fetch(url)
  console.log(response.headers.get('Content-Type'))
  for (let [key, value] of response.headers) {
    console.log(`${key} = ${value}`)
  }
})()
