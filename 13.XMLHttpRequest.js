xhr.onload = function () {
  alert(`Загружено: ${xhr.status} ${xhr.response}`)
}

xhr.onerror = function () {
  // происходит, только когда запрос совсем не получилось выполнить
  alert(`Ошибка соединения`)
}

xhr.onprogress = function (event) {
  // запускается периодически
  // event.loaded - количество загруженных байт
  // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
  // event.total - количество байт всего (только если lengthComputable равно true)
  alert(`Загружено ${event.loaded} из ${event.total}`)
}
