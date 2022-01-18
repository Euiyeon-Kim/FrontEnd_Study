const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date()
    const timeDesc = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`
    clock.innerText = timeDesc
}

getClock() // 얘가 없으면 1초 있다가 첫 시계가 등장
setInterval(getClock, 1000)