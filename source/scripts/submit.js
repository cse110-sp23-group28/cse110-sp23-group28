/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/26/2023
 * Authors: Steve Padmanaban
 * Description: Javascript Event Listener for Submit Button
 */


/**
 * AddEventListener for Submit Button that passes
 * HTML form values into getScore function and 
 * outputs the result
 * @author Steve Padmanaban
 * No parameters and No return values 
 */
window.addEventListener('load', function(){
    let submit = document.getElementById('submitButton');
    submit.addEventListener('click', runAlgorithm);
});

/**
 * Function that runs the algorithm and displays output when
 * Button is pressed
 * @author Steve Padmanaban
 * No parameters and No return values
 */
function runAlgorithm() {
    let person = {name: document.getElementById('yourName').value, 
    bDay: document.getElementById('yourBirthday').value};

    let partner = {name: document.getElementById('baeName').value, 
    bDay: document.getElementById('baeBirthday').value};

    let score = getScore(person.name, partner.name, person.bDay, partner.bDay);
    let result = convertScoreToTime(score);
    document.getElementById('output').innerHTML = result; 
}


