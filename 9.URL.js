// Create new URL
new URL(url, [base])

let url1 = new URL('https://javascript.info/profile/admin')
// the same thing as
let url2 = new URL('/profile/admin', 'https://javascript.info')

console.log(url1) // https://javascript.info/profile/admin
console.log(url2) // https://javascript.info/profile/admin

let url_ = new URL('https://javascript.info/profile/admin')
let newUrl = new URL('tester', url_)

console.log(newUrl) // https://javascript.info/profile/tester

let url___ = new URL('https://javascript.info/url')
console.log(url___.protocol) // https:
console.log(url___.host) // javascript.info
console.log(url___.pathname) // /url
