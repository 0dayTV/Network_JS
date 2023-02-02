let url = 'https://reqres.in/api/users?page=2'

;(async () => {
  let response = await fetch(url, {
    headers: {
      Authentication: 'secret',
    },
  })
})()
