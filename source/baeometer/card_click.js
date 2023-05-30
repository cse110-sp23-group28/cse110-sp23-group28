/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/27/2023
 * Authors: Wesley Hu and Jackie Piepkorn
 * Description: System alert when one of the cards is clicked
 */

/**
 * Puts a system alert when a card is clicked
 * @author Jackie Piepkorn, Wesley Hu
 */
function testEvent() {
    window.alert('hi');
    //get card button elements
    // var card1 = document.getElementById('card1Button');
    // var card2 = document.getElementById('card2Button');
    // var card3 = document.getElementById('card3Button');

    //event listeners for when each card is clicked
    // card1.addEventListener('click', changeBackgroundColor);
    // card2.addEventListener('click', changeBackgroundColor);
    // card3.addEventListener('click', changeBackgroundColor);
}

window.addEventListener('load', function(){
    let card1 = document.getElementById('card1Button');
    let card2 = document.getElementById('card2Button');
    let card3 = document.getElementById('card3Button');
    card1.addEventListener('click', testEvent);
    card2.addEventListener('click', testEvent);
    card3.addEventListener('click', testEvent);
})
