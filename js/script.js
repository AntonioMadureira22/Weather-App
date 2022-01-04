function getInfo() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" = newName.value + "--";


    fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+''&appid=a4aac97ac94b203e4f85929c9eaead8b")
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min - 275.19).toFixed(1) + "°";
            }

            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_Max - 275.44) .toFixed(2) + "°";
            }

            //Display weather icons from api
            for (i = 0; i < 5; i++) {
                document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + 
                data.list[i].weather[0].icon + ".png";
            }

        })

}
//display default city upon open 
function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "Hartford";
    getInfo();
}

const d = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekdays[CheckDay(i)];
}