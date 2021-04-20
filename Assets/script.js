//
const API_KEY = "d9a8de93ed291bc6cf74738f12e1a361";

// Elements
const topDiv = $("#topDiv");
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
function renderImage(data) {
  //
  var rowEl, colEl, imgEl, pEl;
  var fixedImg, animatedImg;
  //
  topDiv.empty();
  // console.log(data);
  //
  rowEl = $("<div>");
  // rowEl.addClass("row d-flex flex-wrap");
  rowEl.addClass("d-flex align-content-stretch flex-wrap row row-cols-auto");
  //
  for (var i = 0, l = data.length; i < l; i++) {
    //
    // fixedImg = data[i].images.fixed_height_small_still.url;
    // animatedImg = data[i].images.original.url;
    fixedImg = data[i].images.original_still.url;
    animatedImg = data[i].images.original.url;

    // Create a colum
    colEl = $("<div>");
    // colEl.addClass("col-md-3 col-sm-3 col-4 text-center col-custom");
    colEl.addClass("col text-center col-custom");
    colEl.attr("col-number");
    //
    // Create an image
    imgEl = $("<img>");
    imgEl.attr("fixed", fixedImg);
    imgEl.attr("animated", animatedImg);
    imgEl.attr("state", "fixed");
    imgEl.attr("src", fixedImg);
    // imgEl.attr("");
    // imgEl.addClass("img-fluid img-thumbnail");
    imgEl.addClass("img-fluid shadow-lg d-block");
    imgEl.appendTo(colEl);
    //
    pEl = $("<p>");
    pEl.addClass("text-uppercase p-custom");
    pEl.text(data[i].rating);
    pEl.appendTo(colEl);
    //
    colEl.appendTo(rowEl);
    //
  }
  //
  rowEl.appendTo(topDiv);
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
    apiUrl = apiUrl + "&appid=" + API_KEY + "&units=imperial";
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
// Call the Weather API
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

          //
          fetch(apiUrl2).then(function (data2) {
            console.log(data2);
            return data2.json();
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
// Adds topic to the list
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
    apiUrl = apiUrl + "?q=" + buttonText + "&units=imperial";
    apiUrl = apiUrl + "&api_key=" + API_KEY;
    //
    console.log(apiUrl);
    getWeather(apiUrl);
    //
  }
});
renderButtons();
