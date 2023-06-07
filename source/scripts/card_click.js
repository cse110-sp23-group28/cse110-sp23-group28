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
    changeStyle();
}

/**
 * Changes booleans if card is clicked
 * @author Jackie Piepkorn
 */
function card2Clicked() {
    cardClicked2 = true;
    cardClicked1 = false;
    cardClicked3 = false;
    changeStyle();
}

/**
 * Changes booleans if card is clicked
 * @author Jackie Piepkorn
 */
function card3Clicked() {
    cardClicked3 = true;
    cardClicked1 = false;
    cardClicked2 = false;
    changeStyle();
}

/*
 * Event listener to start functions once DOM is loaded
 */
window.addEventListener('DOMContentLoaded', listenForCardClicks);

/**
 * Function to get card elements and add event listeners
 * @author Wesley Hu
 */
function listenForCardClicks() {
    var card1 = document.getElementById('card1Button');
    var card2 = document.getElementById('card2Button');
    var card3 = document.getElementById('card3Button');
    card1.addEventListener('click', card1Clicked);
    card2.addEventListener('click', card2Clicked);
    card3.addEventListener('click', card3Clicked);
}
/**
 * Function to change the style of the cards when selected
 * @author Wesley Hu
 */
function changeStyle() {
    var card1 = document.getElementById('card1Button');
    var card2 = document.getElementById('card2Button');
    var card3 = document.getElementById('card3Button');
    if (cardClicked1) {
        card1.style.transform = 'translateY(-8px)';
        card1.style.boxShadow = '0px 10px 20px 2px rgba(0, 0, 0, 0.25)';
        card2.style.transform = '';
        card2.style.boxShadow = '';
        card3.style.transform = '';
        card3.style.boxShadow = '';
    }
    if (cardClicked2) {
        card2.style.transform = 'translateY(-8px)';
        card2.style.boxShadow = '0px 10px 20px 2px rgba(0, 0, 0, 0.25)';
        card1.style.transform = '';
        card1.style.boxShadow = '';
        card3.style.transform = '';
        card3.style.boxShadow = '';
    }
    if (cardClicked3) {
        card3.style.transform = 'translateY(-8px)';
        card3.style.boxShadow = '0px 10px 20px 2px rgba(0, 0, 0, 0.25)';
        card1.style.transform = '';
        card1.style.boxShadow = '';
        card2.style.transform = '';
        card2.style.boxShadow = '';
    }
}
