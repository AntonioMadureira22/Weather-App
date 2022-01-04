function populate() {
    var cityInput = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"=cityInput.value+"--";

    fetch("api.openweathermap.org/data/2.5/forecast?q=+cityInput&appid=93581f35c2cb6b03c064536e275ff676")
    .then(Response => Response.json())
    .then(data => {

        
    })
}