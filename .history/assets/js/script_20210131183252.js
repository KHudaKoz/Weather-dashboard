
//START OF GLOBAL VAR'S

//STORAGE ARRAY FOR SETTING and GETTING. 
var cityHistory = []

//SET VAR SET CITYHISTORY STORAGE UNIVERSAL VARIBLE 
var memorySet = function () {
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory))
}


//SET VAR MY CITY RETRIEVE
var memoryLoad = function () {
    cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || [];

}

function add(cityName) {
    var element = document.createElement("button");
    element.textContent = cityName;
    element.classList.add('historyChoice');
    element.id = "data-history";
    element.setAttribute('value', cityName),
        document.getElementById('button').appendChild(element);

    console.log(cityName)
}

function card(fiveDw) {
    var container = $('<div>');
    container.addClass("m-3 5para")
    //Date Ele Formating 
    var dDate = new Date(fiveDw.dt * 1000);
    // Date specific by order.   
    var date = $("<p>").text(dDate.getDay() + "/" + dDate.getMonth() + "/" + dDate.getUTCFullYear());
    var symbols = $('<img>').attr("src", "https://openweathermap.org/img/wn/" + fiveDw.weather[0].icon + ".png")
    var humidity = $("<p>").text(fiveDw.humidity)
    var temp = $("<p>").text(fiveDw.temp.day)
    container.append(date, symbols, temp, humidity)
    $('#5day').append(container)
    //console.log(fiveDw)

}

//FUNCTION FOR EVENT HANDLER LOCATED IN HTML

function myFunction(citySearch) {


    // let citySearch = document.querySelector('#citySearch').value;

    // BEGINNING OF API
    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&units=Imperial&appid=80537c5878d1c4c5e4b0fb4912dedc85'
    )
        //PROMISE ONE HANDLING DATA RESPONSE
        .then(function (response) {
            return response.json();
        })
        //PROM TWO WORKING WITH DATA RECEIVED
        .then(function (data) {
            //VAR RETRIEVE

            var cityList = data.name;
            if (!data.name) {
                return;
            }
            //PREPPING FOR MEMORY STORAGE WITH VAR DUPLICATE BOLEAN STATEMENT T/F
            var duplicate = false;
            for (let i = 0; i < cityHistory.length; i++) {
                const element = cityHistory[i];

                if (element == cityList) {
                    duplicate = true;
                }

                //console.log(cityList);
            }
            if (!duplicate) {
                cityHistory.push(cityList);
                add(cityList);
                // SET TO STORGE WITH CITYLIST
                memorySet()
            }

            fetch('http://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&units=imperial&appid=80537c5878d1c4c5e4b0fb4912dedc85')

                .then(function (responseUv) {
                    return responseUv.json();
                })

                .then(function (data1) {
                    var uvPlease = data1.daily[0].uvi;
                    console.log(data1);
                    console.log(data);


                    // ADD VARS FOR DYNAMIC FOR MAIN TEMP
                    $("#current-weather").empty();
                    var mainDate = moment().format('L');
                    var cityNameEl = $("<h2>").text(data.name);
                    var dateDisplay = cityNameEl.append("  " + mainDate);
                    var tempEL = $("<p>").text("Tempature : " + data.main.temp + "&");
                    var humEl = $("<p>").text("Humidity :  " + data.main.humidity);
                    var windEl = $("<p>").text("Wind Speed :  " + data.wind.speed);
                    var UvEl = $("<texta>").text('UVI: ' + uvPlease);

                    // APPEND DYNAMIC MAIN TEMP
                    var newDiv = $('<div>');
                    newDiv.append(dateDisplay, tempEL, humEl, windEl, UvEl);
                    $("#current-weather").html(newDiv);

                  
                    // BACKGROUND COLOR CHANGE USING FOR LOOP> 
                   
                        // LOW
                        if (uvPlease < 4) {
                            UvEl.addClass("fave")
                        }
                        // Mod
                        else if (uvPlease < 8) {
                            UvEl.addClass("mode")
                        }
                        // HIGh
                        else if (uvPlease < 15) {
                            UvEl.addClass("seve")
                        }
    



                    // PREVIOUS HISTORY DISPLAY LEFT SIDE DYNAMICALY CRETAT BUTTON


                    //document.getElementById("5day").innerHTML="";
                    $("#5day").empty();
                    for (var i = 1; i < 6; i++) {
                        card(data1.daily[i])

                    }


                });
        })

}


$(document).on("click", ".historyChoice", function (event) {
    var buttonCity = event.target
    var cityName = buttonCity.textContent;
    myFunction(cityName)
});


$('#search-button').on('click', function () {
    let citySearch = document.querySelector('#citySearch').value;
    myFunction(citySearch)
});


$(document).ready(function () {
    memoryLoad();
    for (let i = 0; i < cityHistory.length; i++) {
        const cityList = cityHistory[i];

        add(cityList)
    }


});


    // LOAD ON READY 


   // var currentweather = data.weather[0].main;
// Create Functions for button

//function () {city


// fetch (
//      'http://api.openweathermap.org/data/2.5/uvi?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&units=imperial&appid=80537c5878d1c4c5e4b0fb4912dedc8')

//    .then (function(response) {
//     return response.json();
//    })

//    .then(function(dataUV) {

//    var data = data.value;
//    if(data.vaule >=0 ,2) {

//    }

//     console.log (value)

//    });

//    docume

//    if(!duplicate){
//     // storage.push(cityName);
//     // save();
//     // var city=document.createElement('li');
//     // city.setAttribute("class","list-group-item");
//     // city.setAttribute("value",cityName);
//     // city.textContent=cityName;
//     // listGroup.appendChild(city);

//     // listGroup.innerHTML="";
//     // for (let i = 0; i < memory.length; i++) {
//     // storage.push(memory[i])        
//     // var city=document.createElement('li');
//     // city.setAttribute("class","list-group-item");
//     // city.setAttribute("value",memory[i]);
//     // city.textContent=memory[i];
//     // listGroup.appendChild(city);

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