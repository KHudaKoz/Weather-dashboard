
var citySearch = document.querySelector('#citySearch').value;

// VAR SET TO THE FUNCTION OF SETTING SELTECTED CITY TO STORAGE.
var memory = function(){
    localStorage.setitem("cityHistory", JSON.stringify(cityHistory))
var cityHistory = [];
// API CONNETION
function myFunction() {

}

fetch (
    'http://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&units=Imperial&appid=80537c5878d1c4c5e4b0fb4912dedc85'

)

.then (function(response) {
 return response.json();
})

.then(function(data) {
    // Name of City Returned
    var CityImput = data.name;
    cityHistory.push(CityImput)
    console.log(data.name);
    Save ()


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