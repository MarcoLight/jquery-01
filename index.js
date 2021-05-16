// Import stylesheets
import './style.css';
import $ from "jquery";


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


$(document).ready(function(){
	$("div:last-child").prev().css("background-color", "green");

});

var privato = function(){
  	$(".insert").append('<form action="/action_page.php">');
}

