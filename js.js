// var makeGIFS =
var instruments = ["violin", "guitar", "drumset", "saxaphone", "oboe", "clarinet", "trumpet"]
var APIkey = "ql0qOrjJuWhVgIEIbjSiUoKOE4qxsmw4"



renderButtons();
function renderButtons() {
    console.log("HELLO");

    $("#buttons-home").empty();
    console.log(instruments);

    for (var i = 0; i < instruments.length; i++) {
      var makeButton = $("<button>");
      makeButton.addClass("instrumentButton");
      makeButton.attr("data-name", instruments[i]);
      makeButton.text(instruments[i]);
      $("#buttons-home").append(makeButton);
    }}



function createNewButton(){
    var newInstrument = $("#text-input").val().trim();
    console.log(newInstrument);
    instruments.push(newInstrument);
    console.log(instruments);
    renderButtons();

}
   
var populateGIFS = function(){
    instrument = $("#")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instrument + "&api_key=" + APIkey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var newGIFdiv = $("<div class='gifDIV'>");
        var rating = response.Rating;
        var GIFpRating = $("<p>").text("Rating:" + rating);
        var allGIFurl = function(){
            for(i=0;i<response.data.length;i++){
                response.data[i].url;
                console.log(response.data[i].url);
                return;
                
            }

        } 
        newGIFdiv.append(GIFpRating);
        var newGIFimg = $("<img>").attr("src", allGIFurl);
        newGIFdiv.append(newGIFimg);
      $(".GIFS-home").prepend(newGIFdiv);
      });
      }

    





$("#submit-button").on("click", createNewButton)

$(".instrumentButton").on("click", function(event){
    var instrumentChoice = event.val
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instrumentChoice + "&api_key=" + APIkey + "&limit=10";
    console.log(instrumentChoice);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var newGIFdiv = $("<div class='gifDIV'>");
        var rating = response.Rating;
        var GIFpRating = $("<p>").text("Rating:" + rating);
        var allGIFurl = function(){
            for(i=0;i<response.data.length;i++){
                response.data[i].url;
                console.log(response.data[i].url);
                return;
                
            }

        } 
        newGIFdiv.append(GIFpRating);
        var newGIFimg = $("<img>").attr("src", allGIFurl);
        newGIFdiv.append(newGIFimg);
      $(".GIFS-home").prepend(newGIFdiv);
      });
      }

)






