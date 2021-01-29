
// Start the  
var myFunction = function() {


var citySearch = document.quertySelector('#city-search').value;


document.getElementById('search-button').addEventListener('click', (citySearch)) {
var = fetch (
    'http://api.openweathermap.org/data/2.5/weather?q=' + city-search + 'sorlando&appid=80537c5878d1c4c5e4b0fb4912dedc85'

)

.then (function(response) {
 return response.json();
})

.then(function(data) {
    console.log(data);

})
}

//event listener on load to determine Long and lat


//var for form errors

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
//going to need append icons with loop. 