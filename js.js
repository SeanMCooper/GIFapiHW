// vars for array and api key
var instruments = ["violin", "guitar", "drumset", "saxaphone", "oboe", "clarinet", "trumpet"]
var APIkey = "ql0qOrjJuWhVgIEIbjSiUoKOE4qxsmw4"


// INITIAL START TO RENDER INSTRUMENTS LIST
renderButtons();
function renderButtons() {
    console.log("buttons rendered");

    $("#buttons-home").empty();
    console.log(instruments);

    for (var i = 0; i < instruments.length; i++) {
      var makeButton = $("<button>");
      makeButton.addClass("instrumentButton");
      makeButton.attr("data-name", instruments[i]);
      makeButton.text(instruments[i]);
      $("#buttons-home").append(makeButton);
    }}

$("#submit-button").on("click", createNewButton)
// THIS FUNCTION ADDS A NEW BUTTON TO THE ROW 
function createNewButton(){
    var newInstrument = $("#text-input").val().trim();
    if(!newInstrument){
        alert("please specify a value to add");
    }else{
    console.log(newInstrument);
    instruments.push(newInstrument);
    console.log(instruments);
    renderButtons();
    }

}

// THIS WILL HOPEFULLY POPULATE THE GIFS   *update it works now!!!!!!!!!
$(document).on("click", ".instrumentButton", function(){
    // clear old GIFS
    $("#GIFS-home").empty();
    //prepare var's for Query
    var instrumentChoice = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instrumentChoice + "&api_key=" + APIkey + "&limit=10";
    console.log(instrumentChoice);
    console.log(queryURL);
    //request from GIPHY
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var queryResults = response.data;
    //loop through first 10 GIFS pulling their ratings and giving them proper ID's/DIV var's
        for(var i=0;i<queryResults.length;i++){
            var newGIFdiv = $("<div class='gifDIV'>");
            var rating = queryResults[i].rating;
            var GIFpRating = $("<p>").text("Rating:" + rating);
            var GIFurl = response.data[i].url;
            console.log(GIFurl);
            newGIFdiv.append(GIFpRating);
    //creat an img tag and set img attributes so we can do the start/stop of GIFS        
            var img = $("<img>");
            img.attr({
                "src": queryResults[i].images.fixed_height_still.url,
                "data-state": "still",
                "data-still": queryResults[i].images.fixed_height_still.url,
                "data-animate": queryResults[i].images.fixed_height.url,
            });
            img.on("click", function() {
                var dataState = $(this).attr("data-state");
                if (dataState === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            })
    //dropping the img/rating into the HTML
            newGIFdiv.append(img);
        $("#GIFS-home").prepend(newGIFdiv);
        }})})
        
        


