let url = 'https://reqres.in/api/login'

let user = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
}

;(async () => {
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  })
  let result = await response.json()
  console.log(result)
})()
