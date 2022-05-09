let name = prompt("Adınızı girininiz:");
document.querySelector("#myName").innerHTML = name;

function showTime(){
    const today = new Date()
    let hours = today.getHours()
    let minute = today.getMinutes()
    let seconds =today.getUTCSeconds()
    let dayNumber = today.getDay()
    let days = [
        'Pazar',
        'Pazartesi',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'  
    ]
   
    minute = checkTime(minute)
    seconds = checkTime(seconds)
    document.getElementById("myClock").innerHTML = `${hours} : ${minute} : ${seconds} ${days[dayNumber]}`
    setTimeout(showTime, 1000)
}

   function checkTime(i) {
       if (i <10){i = "0" + 1} 
       return i 
   }
   showTime()