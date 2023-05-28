/**
 
CSE 110 SP23 Team 28, UC Sussy Developers
Date: 05/27/2023
Authors: Wesley Hu and Jackie Piepkorn
Description: System alert when one of the cards is clicked
*/
//get card button elements
var card1 = document.getElementById('card1Button');
var card2 = document.getElementById('card2Button');
var card3 = document.getElementById('card3Button');

//event listeners for when each card is clicked
card1.addEventListener('click', changeBackgroundColor);
card2.addEventListener('click', changeBackgroundColor);
card3.addEventListener('click', changeBackgroundColor);

//test function
function testEvent() {
    window.alert("hi");
}