let userName = prompt("Adınız : ")
let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")
let days = [
    "Pazartesi",
    "Salı",
    "Çarşamda",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
]
myName.innerHTML = `${userName[0].toUpperCase()}${userName.slice(1).toLocaleLowerCase()}`
function showTime(){
    let today = new Date()
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let day = today.getDay();
    myClock.innerHTML = `${hour} : ${minute} : ${seconds} ${days[day]}`
    setTimeout(showTime, 1000);
}
showTime()