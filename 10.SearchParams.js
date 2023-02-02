new URL('https://google.com/search?query=JavaScript')

let url = new URL('https://google.com/search')
url.searchParams.set('q', 'test me!') // добавим параметр, содержащий пробел и !

console.log(url) // https://google.com/search?q=test+me%21

url.searchParams.set('tbs', 'qdr:y') // параметр с двоеточием :

// параметры автоматически кодируются
console.log(url) // https://google.com/search?query=test+me%21&tbs=qdr%3Ay

// перебрать параметры (в исходном виде)
for (let [name, value] of url.searchParams) {
  console.log(`${name}=${value}`) // q=test me!, далее tbs=qdr:y
}
