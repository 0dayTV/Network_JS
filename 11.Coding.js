let url = new URL('https://ru.wikipedia.org/wiki/Тест')

url.searchParams.set('key', 'ъ')
console.log(url.href) //https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82?key=%D1%8A
