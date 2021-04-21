//
const API_KEY = "d9a8de93ed291bc6cf74738f12e1a361";

// Elements
const topDiv = $(".card-text");
const bottomDiv = $("#images");
const sideDiv = $("#sideDiv");
const buttonDiv = $("#cities");
const searchButton = $("#searchButton");

// Variables
var currentDay = dayjs().format("(MM/DD/YYYY)");
var citySearch = {};

var storedCities = JSON.parse(localStorage.getItem("cities")) || [];

var Cities = [];
var NUMBER_OF_CITIES = Cities.length;

function renderButtons() {
  //
  var topic;
  var rowEl, colEl, btnEl;
  //
  buttonDiv.empty();

  var CombinedCities = [];
  CombinedCities.push(...Cities);
  CombinedCities.push(...storedCities);

  //
  rowEl = $("<div>");
  // rowEl.addClass("row row-custom");
  rowEl.addClass("row-cols-auto p-10 m-10");
  rowEl.attr("id", "cities");
  //
  for (var i = 0; i < CombinedCities.length; i++) {
    //
    topic = CombinedCities[i];
    //
    colEl = $("<div>");
    // colEl.addClass
    colEl.addClass("col-6 p-1");
    //
    btnEl = $("<button>");
    btnEl.text(topic);
    btnEl.attr("id", topic);
    btnEl.addClass("btn btn-block btn-light text-capitalize");
    btnEl.appendTo(colEl);
    //
    colEl.appendTo(rowEl);
    //
  }
  //

  rowEl.appendTo(buttonDiv);
  //
}
// Function to populate the Five Day Forecast
function fiveDayForecast(fiveDay) {
  var $imgEl = $("<img>");
  var ImageSource =
    "http://openweathermap.org/img/wn/" + fiveDay.day1icon + "@2x.png";
  $imgEl.attr("src", ImageSource);

  var $heading = $("<h2>");
  var $divEl = $("<div>");
  var $listEl = $("<ul>");
  var $tempEl = $("<p>");
  var $humidEl = $("<p>");
  var $windEl = $("<p>");
  var $calendar = dayjs.unix(fiveDay.day1date).format("MM/DD/YYYY");

  $divEl.attr("id", "fiveDayForecast");
  $heading.text($calendar);
  $tempEl.text("Temperature: " + fiveDay.day1temp + " °F");
  $humidEl.text("Humidity: " + fiveDay.day1humidity + "%");
  $windEl.text("Wind: " + fiveDay.day1wind + " MPH");

  $heading.appendTo($listEl);
  $imgEl.appendTo($listEl);
  $tempEl.appendTo($listEl);
  $humidEl.appendTo($listEl);
  $windEl.appendTo($listEl);
  $listEl.appendTo($divEl);
  $divEl.appendTo(bottomDiv);

  var $imgEl = $("<img>");
  var ImageSource =
    "http://openweathermap.org/img/wn/" + fiveDay.day2icon + "@2x.png";
  $imgEl.attr("src", ImageSource);

  var $heading = $("<h2>");
  var $divEl = $("<div>");
  var $listEl = $("<ul>");
  var $tempEl = $("<p>");
  var $humidEl = $("<p>");
  var $windEl = $("<p>");
  var $calendar = dayjs.unix(fiveDay.day2date).format("MM/DD/YYYY");

  $divEl.attr("id", "fiveDayForecast");
  $heading.text($calendar);
  $tempEl.text("Temperature: " + fiveDay.day2temp + " °F");
  $humidEl.text("Humidity: " + fiveDay.day2humidity + "%");
  $windEl.text("Wind: " + fiveDay.day2wind + " MPH");

  $heading.appendTo($listEl);
  $imgEl.appendTo($listEl);
  $tempEl.appendTo($listEl);
  $humidEl.appendTo($listEl);
  $windEl.appendTo($listEl);
  $listEl.appendTo($divEl);
  $divEl.appendTo(bottomDiv);

  var $imgEl = $("<img>");
  var ImageSource =
    "http://openweathermap.org/img/wn/" + fiveDay.day3icon + "@2x.png";
  $imgEl.attr("src", ImageSource);

  var $heading = $("<h2>");
  var $divEl = $("<div>");
  var $listEl = $("<ul>");
  var $tempEl = $("<p>");
  var $humidEl = $("<p>");
  var $windEl = $("<p>");
  var $calendar = dayjs.unix(fiveDay.day3date).format("MM/DD/YYYY");

  $divEl.attr("id", "fiveDayForecast");
  $heading.text($calendar);
  $tempEl.text("Temperature: " + fiveDay.day3temp + " °F");
  $humidEl.text("Humidity: " + fiveDay.day3humidity + "%");
  $windEl.text("Wind: " + fiveDay.day3wind + " MPH");

  $heading.appendTo($listEl);
  $imgEl.appendTo($listEl);
  $tempEl.appendTo($listEl);
  $humidEl.appendTo($listEl);
  $windEl.appendTo($listEl);
  $listEl.appendTo($divEl);
  $divEl.appendTo(bottomDiv);

  var $imgEl = $("<img>");
  var ImageSource =
    "http://openweathermap.org/img/wn/" + fiveDay.day4icon + "@2x.png";
  $imgEl.attr("src", ImageSource);

  var $heading = $("<h2>");
  var $divEl = $("<div>");
  var $listEl = $("<ul>");
  var $tempEl = $("<p>");
  var $humidEl = $("<p>");
  var $windEl = $("<p>");
  var $calendar = dayjs.unix(fiveDay.day4date).format("MM/DD/YYYY");

  $divEl.attr("id", "fiveDayForecast");
  $heading.text($calendar);
  $tempEl.text("Temperature: " + fiveDay.day4temp + " °F");
  $humidEl.text("Humidity: " + fiveDay.day4humidity + "%");
  $windEl.text("Wind: " + fiveDay.day4wind + " MPH");

  $heading.appendTo($listEl);
  $imgEl.appendTo($listEl);
  $tempEl.appendTo($listEl);
  $humidEl.appendTo($listEl);
  $windEl.appendTo($listEl);
  $listEl.appendTo($divEl);
  $divEl.appendTo(bottomDiv);

  var $imgEl = $("<img>");
  var ImageSource =
    "http://openweathermap.org/img/wn/" + fiveDay.day5icon + "@2x.png";
  $imgEl.attr("src", ImageSource);

  var $heading = $("<h2>");
  var $divEl = $("<div>");
  var $listEl = $("<ul>");
  var $tempEl = $("<p>");
  var $humidEl = $("<p>");
  var $windEl = $("<p>");
  var $calendar = dayjs.unix(fiveDay.day5date).format("MM/DD/YYYY");

  $divEl.attr("id", "fiveDayForecast");
  $heading.text($calendar);
  $tempEl.text("Temperature: " + fiveDay.day5temp + " °F");
  $humidEl.text("Humidity: " + fiveDay.day5humidity + "%");
  $windEl.text("Wind: " + fiveDay.day5wind + " MPH");

  $heading.appendTo($listEl);
  $imgEl.appendTo($listEl);
  $tempEl.appendTo($listEl);
  $humidEl.appendTo($listEl);
  $windEl.appendTo($listEl);
  $listEl.appendTo($divEl);
  $divEl.appendTo(bottomDiv);
}

// Function to populate the Current Day forecast
function cityBreakdown(currentWeather) {
  //
  //img created for heading
  var $imgEl = $("<img>");
  var ImageSource =
    "http://openweathermap.org/img/wn/" +
    currentWeather.currentIcon +
    "@2x.png";
  $imgEl.attr("src", ImageSource);

  // headings/list created for my temp/humidity/UVI/Wind
  var $heading = $("<h2>");
  $heading.css("fontSize", "60px");
  var $listEl = $("<ul>");
  $listEl.css("fontSize", "30px");
  var tempEl = $("<p>");
  var humidEl = $("<p>");
  var uvEl = $("<p>");
  var windEl = $("<p>");
  $heading.attr("id", "heading");
  $heading.text(currentWeather.city + " " + currentWeather.stamp);

  tempEl.text("Temperature: " + currentWeather.currentTemp + " °F");
  humidEl.text("Humidity: " + currentWeather.currentHumid + " %");
  uvEl.text("UV Index: " + currentWeather.currentUvi);
  windEl.text("Wind: " + currentWeather.currentWind + " MPH");

  if (currentWeather.currentUvi < 2.01) {
    uvEl.addClass("low");
  } else if (currentWeather.currentUvi < 5.01) {
    uvEl.addClass("medium");
  } else if (currentWeather.currentUvi < 7.01) {
    uvEl.addClass("high");
  } else {
    uvEl.addClass("severe");
  }
  tempEl.appendTo($listEl);
  humidEl.appendTo($listEl);
  windEl.appendTo($listEl);
  uvEl.appendTo($listEl);

  $imgEl.appendTo($heading);
  $heading.appendTo(topDiv);
  $listEl.appendTo(topDiv);
  //
}

// Set the Weather API call
function processSearch(event) {
  //
  event.preventDefault();
  topDiv.empty();
  bottomDiv.empty();
  //
  var searchText = $("#searchText").val().trim();
  //
  if (searchText != "") {
    //
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    apiUrl = apiUrl + "?q=" + searchText;
    apiUrl = apiUrl + "&appid=" + API_KEY + "&units=imperial";
    //
    // getWeather function is called with apiUrl passed into it
    getWeather(apiUrl);
    // we add a city to our button list
    addCity(searchText);

    //
  }
  searchText = $("#searchText").val("");
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
            stamp: currentDay,
          };

          var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall";
          apiUrl2 =
            apiUrl2 + "?lat=" + citySearch.lat + "&lon=" + citySearch.lon;
          apiUrl2 = apiUrl2 + "&appid=" + API_KEY + "&units=imperial";

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
                  currentDate: data2.current.dt,
                  currentTemp: data2.current.temp,
                  currentWind: data2.current.wind_speed,
                  currentHumid: data2.current.humidity,
                  currentUvi: data2.current.uvi,
                  currentIcon: data2.current.weather[0].icon,
                  currentWeather: data2.current.weather[0].main,
                };
                console.log(currentWeather);
                var fiveDay = {
                  city: citySearch.city,
                  lon: citySearch.lon,
                  lat: citySearch.lat,
                  stamp: citySearch.stamp,
                  day1date: data2.daily[1].dt,
                  day1temp: data2.daily[1].temp.day,
                  day1humidity: data2.daily[1].humidity,
                  day1icon: data2.daily[1].weather[0].icon,
                  day1wind: data2.daily[1].wind_speed,
                  day2date: data2.daily[2].dt,
                  day2temp: data2.daily[2].temp.day,
                  day2humidity: data2.daily[2].humidity,
                  day2icon: data2.daily[2].weather[0].icon,
                  day2wind: data2.daily[2].wind_speed,
                  day3date: data2.daily[3].dt,
                  day3temp: data2.daily[3].temp.day,
                  day3humidity: data2.daily[3].humidity,
                  day3icon: data2.daily[3].weather[0].icon,
                  day3wind: data2.daily[3].wind_speed,
                  day4date: data2.daily[4].dt,
                  day4temp: data2.daily[4].temp.day,
                  day4humidity: data2.daily[4].humidity,
                  day4icon: data2.daily[4].weather[0].icon,
                  day4wind: data2.daily[4].wind_speed,
                  day5date: data2.daily[5].dt,
                  day5temp: data2.daily[5].temp.day,
                  day5humidity: data2.daily[5].humidity,
                  day5icon: data2.daily[5].weather[0].icon,
                  day5wind: data2.daily[5].wind_speed,
                };

                cityBreakdown(currentWeather);
                fiveDayForecast(fiveDay);
                // we render the buttons to show the cities
                renderButtons();
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
  topDiv.empty();
  bottomDiv.empty();
  var element = event.target;

  if (element.matches("button")) {
    var buttonText = element.getAttribute("id");
  }

  if (buttonText != "") {
    //
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    apiUrl = apiUrl + "?q=" + buttonText;
    apiUrl = apiUrl + "&appid=" + API_KEY + "&units=imperial";
    //
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
    storedCities.unshift(searchCity);
    NUMBER_OF_CITIES = Cities.length;
    //
    localStorage.setItem("cities", JSON.stringify(storedCities));
  }
  //
}
