//
const API_KEY = "d9a8de93ed291bc6cf74738f12e1a361";

// Elements
const topDiv = $("#topDiv");
const bottomDiv = $("#bottomDiv");
const sideDiv = $("#sideDiv");
const buttonDiv = $("#cities");
const searchButton = $("#searchButton");

// Variables
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

function RenderTopics() {
  //
  var topic;
  var rowEl, colEl, btnEl;
  //
  buttonDiv.empty();
  //
  rowEl = $("<div>");
  // rowEl.addClass("row row-custom");
  rowEl.addClass("row-cols-auto p-10 m-10");
  //
  for (var i = 0; i < Cities.length; i++) {
    //
    topic = Cities[i];
    //
    colEl = $("<div>");
    // colEl.addClass("col-md-2 col-sm-3 col-4 col-custom");
    colEl.addClass("col-6 p-1");
    //
    btnEl = $("<button>");
    btnEl.text(topic);
    btnEl.attr("image-text", topic);
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

// Set the Giphy API call
function ProcessSearch() {
  //

  //
  var searchText = $("#searchText").val().trim();
  //
  if (searchText != "") {
    //
    var apiUrl = "https://openweathermap.org/find";
    apiUrl = apiUrl + "?q=" + searchText;
    apiUrl = apiUrl + "&api_key=" + API_KEY;
    //
    AddCity(searchText);
    RenderTopics();
    console.log(apiUrl);
    //
  }
  //
}
// Adds topic to the list
function AddCity(searchCity) {
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
searchButton.on("click", ProcessSearch);
RenderTopics();
