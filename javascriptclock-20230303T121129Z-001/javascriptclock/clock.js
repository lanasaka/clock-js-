//kullanıcı adı bilgisini alma
let user = prompt("Adın nedir ???")


function showTime(){


let myName = document.querySelector("#myName")
myName.innerHTML = `${user}`


//tarih bilgisi için js fonsiyonumuzu çağıralım
let tarih = new Date();

var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

//innerHTML ile html sayfamıza dökelim..
let myClock = document.querySelector("#myClock")
myClock.innerHTML =`
${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} ${gunler[tarih.getDay()]} 
`
}
//1 saniyede sayfayı yenile
setInterval(showTime,1000)
  