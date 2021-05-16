// Import stylesheets
import './style.css';
import $ from "jquery";


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


$(document).ready(function(){
	$("div:last-child").prev().css("background-color", "green");

});


  	$("#insertPrivato").click(function(){
      $(".insert").text("");
      $(".insert").append('  <label for="fname">Codice Fiscale:</label><br><input type="text" id="fname" name="fname" value="MURTNT78R23H331V"><br>')
      });

        	$("#insertAzienda").click(function(){
      $(".insert").text("");
      $(".insert").append('  <label for="fname">Partita iva:</label><br><input type="text" id="fname" name="fname" value="0987654321"><br>')
      });
