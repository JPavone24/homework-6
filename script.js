
/* 
==================================================================================================================================
 step 0) create an array of strings, each one related to a topic that interests you. Save it to a variable called "topics"
-----------------------------------------------------------------------------------------------------------------

....Ok, so I couldnt fuigure our how to make a button that links to the gifs, but this code below is supposed to make a searchbar that
searches for the gifs and should show up with ten dog gifs when you click the button next to the imput space. I put it in for a bunch 
of different animals, orinally I was going to assign all the functions to variables and then use those variables for stuff
==================================================================================================================================
*/
function getData(){
    var input = $("#searchtext").val()
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=dogs&api_key=TfFZyAFmVdLwVaqR94hS6NvKxrgIDjtL&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
var jiffs = response.data
for (i in jiffs) {
    $('.inner').append("<img src ='"+jiffs[i].images.url+"'style = 'height;350 px; width;350px '/>")
}
});
}


function getData(){
    var input = $("#searchtext").val()
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=catss&api_key=TfFZyAFmVdLwVaqR94hS6NvKxrgIDjtL&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
var jiffs = response.data
for (i in jiffs) {
    $('.inner').append("<img src ='"+jiffs[i].images.url+"'style = 'height;350 px; width;350px '/>")
}
});
}


function getData(){
    var input = $("#searchtext").val()
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=rabbits&api_key=TfFZyAFmVdLwVaqR94hS6NvKxrgIDjtL&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
var jiffs = response.data
for (i in jiffs) {
    $('.inner').append("<img src ='"+jiffs[i].images.url+"'style = 'height;350 px; width;350px '/>")
}
});
}


function getData(){
    var input = $("#searchtext").val()
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=horsess&api_key=TfFZyAFmVdLwVaqR94hS6NvKxrgIDjtL&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
var jiffs = response.data
for (i in jiffs) {
    $('.inner').append("<img src ='"+jiffs[i].images.url+"'style = 'height;350 px; width;350px '/>")
}
});
}


function getData(){
    var input = $("#searchtext").val()
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=seals&api_key=TfFZyAFmVdLwVaqR94hS6NvKxrgIDjtL&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
var jiffs = response.data
for (i in jiffs) {
    $('.inner').append("<img src ='"+jiffs[i].images.url+"'style = 'height;350 px; width;350px '/>")
}
});
}


function getData(){
    var input = $("#searchtext").val()
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=frogs &api_key=TfFZyAFmVdLwVaqR94hS6NvKxrgIDjtL&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
var jiffs = response.data
for (i in jiffs) {
    $('.inner').append("<img src ='"+jiffs[i].images.url+"'style = 'height;350 px; width;350px '/>")
}
});
}
/* 
==================================================================================================================================
 1) take the topics in this array and create buttons in your HTML.
use a loop that appends a button for each string in the array.

-----------------------------------------------------------------------------------------------------------------

....so the internet said that this is the answer
==================================================================================================================================
*/
for (var i = 0; i < topics.length; i++) { 
    var buttons = $('<button>'+ topics.text + '</button>') 
    buttons.append('topics');
/* 
==================================================================================================================================
Step 3)  When the user clicks one of the still GIPHY images, the gif should animate.
If the user clicks the gif again, it should stop playing.
-----------------------------------------------------------------------------------------------------------------

....is (this) right?
==================================================================================================================================
*/
function playGif() { 
    var state = $(this).attr('data-state');

    if (state == 'still'){
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
  } else{
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    }
/* 
==================================================================================================================================
Step 4)   Add a form to your page takes the value from a user input 
box and adds it into your topics array. 

step 5) Then make a function call 
that takes each topic in the array remakes the buttons on the page.

-----------------------------------------------------------------------------------------------------------------

well the whole of step on is kind similar to step 4. I tried calling the function, I think I got a wrong number

==================================================================================================================================
*/

$(document).on('click', '#add-game', function(){
    if ($('#game-input').val().trim() == ''){
      alert('Input can not be left blank');
   }
   else {
    var games = $('#game-input').val().trim();
    gameGif.push(games);
    $('#game-input').val('');
    renderButtons();
    return false;
