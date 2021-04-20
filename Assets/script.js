//
const API_KEY = "d9a8de93ed291bc6cf74738f12e1a361";

// Elements
const topDiv = $(".card-text");
const bottomDiv = $("#bottomDiv");
const sideDiv = $("#sideDiv");
const buttonDiv = $("#cities");
const searchButton = $("#searchButton");

// Variables
var today = dayjs().format("MM_DD_YYYY");
var citySearch = {};
var weather = [];

var Cities = [
  "Omaha",
  "New York City",
  "Boston",
  "Kansas City",
  "Los Angeles",
  "Houston",
  "Atlanta",
];
var NUMBER_OF_CITIES = Cities.length;

function renderButtons() {
  //
  var topic;
  var rowEl, colEl, btnEl;
  //
  buttonDiv.empty();
  //
  rowEl = $("<div>");
  // rowEl.addClass("row row-custom");
  rowEl.addClass("row-cols-auto p-10 m-10");
  rowEl.attr("id", "cities");
  //
  for (var i = 0; i < Cities.length; i++) {
    //
    topic = Cities[i];
    //
    colEl = $("<div>");
    // colEl.addClass
    colEl.addClass("col-6 p-1");
    //
    btnEl = $("<button>");
    btnEl.text(topic);
    btnEl.attr("id", topic);
    btnEl.addClass("btn btn-light text-capitalize");
    btnEl.appendTo(colEl);
    //
    colEl.appendTo(rowEl);
    //
  }
  //
  rowEl.appendTo(buttonDiv);
  //
}
function cityBreakdown(currentWeather) {
  //
  console.log(currentWeather);

  var heading = $("<h2>");
  var $listEl = $("<ul>");
  var tempEl = $("<p>");
  var humidEl = $("<p>");
  var uvEl = $("<p>");
  var windEl = $("<p>");
  heading.attr("id", "heading");
  heading.text(currentWeather.city + " " + currentWeather.stamp);

  tempEl.text("Temperature: " + currentWeather.current_temp);
  humidEl.text("Humidity: " + currentWeather.current_humid);
  uvEl.text("UV Index: " + currentWeather.current_uvi);
  windEl.text("Wind: " + currentWeather.current_wind);
  tempEl.appendTo($listEl);
  humidEl.appendTo($listEl);
  windEl.appendTo($listEl);
  uvEl.appendTo($listEl);

  heading.appendTo(topDiv);
  $listEl.appendTo(topDiv);
  //
}

// Set the Weather API call
function processSearch() {
  //

  //
  var searchText = $("#searchText").val().trim();
  //
  if (searchText != "") {
    //
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    apiUrl = apiUrl + "?q=" + searchText;
    apiUrl = apiUrl + "&appid=" + API_KEY;
    //
    // getWeather function is called with apiUrl passed into it
    getWeather(apiUrl);
    // we add a city to our button list
    addCity(searchText);
    // we render the buttons to show the cities
    renderButtons();
    console.log(apiUrl);
    //
  }
  //
}
// Call the Weather API to retrieve our Information
function getWeather(apiUrl) {
  //
  fetch(apiUrl)
    //
    .then(function (response) {
      //
      if (response.ok) {
        //
        response.json().then(function (data) {
          //
          console.log(data);
          citySearch = {
            city: data.name,
            lon: data.coord.lon,
            lat: data.coord.lat,
            stamp: today,
          };
          console.log(citySearch);
          var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall";
          apiUrl2 =
            apiUrl2 + "?lat=" + citySearch.lat + "&lon=" + citySearch.lon;
          apiUrl2 = apiUrl2 + "&appid=" + API_KEY;
          console.log(apiUrl2);
          //
          fetch(apiUrl2).then(function (response2) {
            if (response2.ok) {
              response2.json().then(function (data2) {
                console.log(data2);
                var currentWeather = {
                  city: citySearch.city,
                  lon: citySearch.lon,
                  lat: citySearch.lat,
                  stamp: citySearch.stamp,
                  current_date: data2.current.dt,
                  current_temp: data2.current.temp,
                  current_wind: data2.current.wind_speed,
                  current_humid: data2.current.humidity,
                  current_uvi: data2.current.uvi,
                  current_icon: data2.current.weather[0].icon,
                  current_weather: data2.current.weather[0].main,
                };
                console.log(currentWeather);

                cityBreakdown(currentWeather);
              });
            }
          });
        });
      } else {
        //
        alert("Error: " + response.statusText);
        //
      }
    })
    .catch(function (error) {
      //
      alert("Unable to connect to Weather Dashboard");
      //
    });
  //
}

// buttonDiv.on("click", "button", ProcessButton);
searchButton.on("click", processSearch);
buttonDiv.on("click", function (event) {
  var element = event.target;

  if (element.matches("button")) {
    var buttonText = element.getAttribute("id");
  }
  console.log(buttonText);

  if (buttonText != "") {
    //
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    apiUrl = apiUrl + "?q=" + buttonText;
    apiUrl = apiUrl + "&appid=" + API_KEY;
    //
    console.log(apiUrl);
    getWeather(apiUrl);
    //
  }
});
renderButtons();

// Adds Buttons to the list
function addCity(searchCity) {
  //
  if (!(Cities.indexOf(searchCity) >= 0)) {
    //
    // Insert it
    Cities.push(searchCity);
    NUMBER_OF_CITIES = Cities.length;
    //
  }
  //
}
