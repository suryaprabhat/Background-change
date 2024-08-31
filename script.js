var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line"); // Fix the typo here

// Set the width of the original image to match the imgBox
originalImg.style.width = imgBox.offsetWidth + "px";

// Get the left offset of the imgBox
var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e) {
    // Calculate the width based on the mouse position
    var boxWidth = (e.pageX - leftSpace) + "px";
    
    // Set the width of imgWrap to reveal the image
    imgWrap.style.width = boxWidth;

    // Move the line to the same position
    line.style.left = boxWidth;
}
