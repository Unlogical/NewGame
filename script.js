function element(a,b) { //берем текстовое поле с именем
  b = document.getElementById(a)
}

var nameinput, nameid="name" //не уверена,нужно ли это: объявляем переменные

function getAll() { //функция,в которой мы берем все элементы,которые нам понадобятся
  element(nameid,nameinput)
  
}

window.onload = function () { //то,что выполняется после загрузки страницы
  getAll()
}
if (nameinput==null) {
  nameinput.style.borderColor = rgb(255,0,0)
}
else { nameinput.style.borderColor =  rgb(0,255,0)
}
