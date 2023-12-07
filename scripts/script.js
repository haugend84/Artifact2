/*
Student Name: David Haugen
File Name: script.js
Date: 11/10/2023
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

// Hamburger menu Function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    
    if (menu.style.display === "block" && logo.style.display === "block") {
        menu.style.display = "none";
        logo.style.display = "none";
    } else {
        menu.style.display = "block";
        logo.style.display = "block";
    }
}

