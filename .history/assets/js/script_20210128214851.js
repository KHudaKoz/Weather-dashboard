
//START OF GLOBAL VAR'S

//STORAGE ARRAY FOR SETTING and GETTING. 
var cityHistory = reloadExisting ? [...reloadExisting]:[]

//SET VAR SET MY CITYHISTORY STORAGE
var memorySet= function () {
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory))
}

// API CONNETION AND EVENT HANDLE FUNCTIONS.  

function myFunction() {

let citySearch = document.querySelector('#citySearch').value;


fetch (
    'http://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&units=Imperial&appid=80537c5878d1c4c5e4b0fb4912dedc85'

)

.then (function(response) {
 return response.json();
})

.then(function(data) {
    var cityList = data.name;
    cityHistory.push(cityList);
    memorySet()
    //console.log(data.name);


$("#current-weather").empty();
       var mainDate = moment().format('L');
        var cityNameEl = $("<h2>").text(data.name);
        var displayMainDate = cityNameEl.append(" " + mainDate);
        var tempEL = $("<p>").text("Tempature: " + data.main.temp);
        var humEl = $("<p>").text("Humidity: " + data.main.humidity);
        var windEl = $("<p>").text("Wind Speed: " + data.wind.speed);
        var currentweather = data.weather[0].main;
        //Conditional 
        //create HTML div to append new elements to render on page....
        var newDiv = $('<div>');
        newDiv.append(displayMainDate, tempEL, humEl, windEl);
        $("#current-weather").html(newDiv);
    });

    var cityHistory = JSON.parse(localStorage.getItem('cityHistory'))
    if (ciyHistory) { 
      //FOR LOOP FOR LOCAL STORAGE INDEX WHICH BEGINS AT ZERO LOOKIG FOR THE VALUE OF CITYHISTORY = CITY NAME
      for (let i = 0; i < array.length; i++) {
      // NESTED FOR LOOP FOR 
      if (array [i].city == j) {
        $("#" + j) .val(array [i].content)

    }


















//we need a var which is as function to retrive input from search term.

//var searchTerm =function () { var searchTerm = document.querySelector('#search-button').value };

//begin the fetch
    //step one we need to fetch the data (Fetch is the call){ 
        // 'url' + searchTerm + :='api key'
            // promise 1 which orignizing incomming
                // .then function (current-weather) {
                //return current-weather.json(); 
            // promise 2 which loads the data
                // .then function (current-weather) {
               //console.log(current-weather.data[0]); 
//nested fetch for 5 day 3hr forcaste begins
    // 'url' + searchTerm + :='api key'
            // promise 1 which orignizing incomming
                // .then function (fiveday) {
                //return fiveday.json(); 
            // promise 2 which loads the data
                // .then function (fiveday) {
               //console.log(fiveday.data[0]);

    // to git appropreate response to the correct ontainer 
           // var the correcto element name = documents.querySelector ('#idname", "3")
           // create functino of the storage and recall. 
    

//going to need a var for conversion of timiture.
//going to meed a for loop for uv ray indexed 
//going to need append icons with loop