/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/27/2023
 * Authors: Wesley Hu and Jackie Piepkorn
 * Description: System alert when one of the cards is clicked
 */

var cardClicked1 = false;
var cardClicked2 = false;
var cardClicked3 = false;

/**
 * Changes booleans if card is clicked
 * @author Jackie Piepkorn
 */
function card1Clicked() {
    cardClicked1 = true;
    cardClicked2 = false;
    cardClicked3 = false;
}

/**
 * Changes booleans if card is clicked
 * @author Jackie Piepkorn
 */
function card2Clicked() {
    cardClicked2 = true;
    cardClicked1 = false;
    cardClicked3 = false;
}

/**
 * Changes booleans if card is clicked
 * @author Jackie Piepkorn
 */
function card3Clicked() {
    cardClicked3 = true;
    cardClicked1 = false;
    cardClicked2 = false;
}

/*
 * Event listener to start functions once DOM is loaded
 */
window.addEventListener('DOMContentLoaded', listenForCardClicks);

/**
 * Function to get card elements and add event listeners
 */
function listenForCardClicks() {
    let card1 = document.getElementById('card1Button');
    let card2 = document.getElementById('card2Button');
    let card3 = document.getElementById('card3Button');
    card1.addEventListener('click', card1Clicked);
    card2.addEventListener('click', card2Clicked);
    card3.addEventListener('click', card3Clicked);
}
