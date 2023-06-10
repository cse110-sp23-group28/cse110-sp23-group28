/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/26/2023
 * Authors: Steve Padmanaban, Jackie Piepkorn
 * Description: Javascript Event Listener for Submit Button
 */



/**
 * AddEventListener for Submit Button that passes
 * HTML form values into getScore and chooseStory functions and 
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

    let getCanvas = document.getElementById('canvasArea');
    let canvasContext = getCanvas.getContext('2d');
    let canvasData = canvasContext.getImageData(0, 0, getCanvas.width, getCanvas.height);
    let pixelCount = getCanvasPixels(canvasData);

    let score = getScore(person.name, partner.name, person.bDay, partner.bDay, pixelCount);
    document.querySelector(':root').style.setProperty('--result-score', score);
    document.querySelector(':root').style.setProperty('--result-score', score);
    let result = convertScoreToTime(score);
    let outputs = document.getElementsByClassName('outputs');
    outputs[0].value = result;
    outputs[1].value = result;
    console.log(outputs[0].value);
    runStory(outputs);
}

/**
 * Function that runs the story-choosing algorithm and displays output when
 * Button is pressed
 * @author Jackie Piepkorn
 * @param {Array} outputs
 * No return values
 */
function runStory(outputs) {
    if(cardClicked1){
        var card = 1;
    }
    else if(cardClicked2){
        var card = 2;
    }
    else if(cardClicked3){
        var card = 3;
    }
    fetch('stories.json')
      .then(response => response.json())
      .then(data => {
        //one month
        if(outputs[0].value == '1 month' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[0].description;
            outputsStory[1].innerHTML = data.stories[0].description;
        }
        else if(outputs[0].value == '1 month' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[1].description;
            outputsStory[1].innerHTML = data.stories[1].description;
        }
        else if(outputs[0].value == '1 month' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[2].description;
            outputsStory[1].innerHTML = data.stories[2].description;
        }
        //six months
        else if(outputs[0].value == '6 months' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[3].description;
            outputsStory[1].innerHTML = data.stories[3].description;
        }
        else if(outputs[0].value == '6 months' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[4].description;
            outputsStory[1].innerHTML = data.stories[4].description;
        }
        else if(outputs[0].value == '6 months' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[5].description;
            outputsStory[1].innerHTML = data.stories[5].description;
        }
        //1 year
        else if(outputs[0].value == '1 year' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[6].description;
            outputsStory[1].innerHTML = data.stories[6].description;
        }
        else if(outputs[0].value == '1 year' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[7].description;
            outputsStory[1].innerHTML = data.stories[7].description;
        }
        else if(outputs[0].value == '1 year' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[8].description;
            outputsStory[1].innerHTML = data.stories[8].description;
        }
        //3 years
        else if(outputs[0].value == '3 years' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[9].description;
            outputsStory[1].innerHTML = data.stories[9].description;
        }
        else if(outputs[0].value == '3 years' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[10].description;
            outputsStory[1].innerHTML = data.stories[10].description;
        }
        else if(outputs[0].value == '3 years' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[11].description;
            outputsStory[1].innerHTML = data.stories[11].description;
        }
        //5 years
        else if(outputs[0].value == '5 years' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[12].description;
            outputsStory[1].innerHTML = data.stories[12].description;
        }
        else if(outputs[0].value == '5 years' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[13].description;
            outputsStory[1].innerHTML = data.stories[13].description;
        }
        else if(outputs[0].value == '5 years' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[14].description;
            outputsStory[1].innerHTML = data.stories[14].description;
        }
        //10 years
        else if(outputs[0].value == '10 years' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[15].description;
            outputsStory[1].innerHTML = data.stories[15].description;
        }
        else if(outputs[0].value == '10 years' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[16].description;
            outputsStory[1].innerHTML = data.stories[16].description;
        }
        else if(outputs[0].value == '10 years' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[17].description;
            outputsStory[1].innerHTML = data.stories[17].description;
        }
        //forever
        else if(outputs[0].value == 'Forever' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[18].description;
            outputsStory[1].innerHTML = data.stories[18].description;
        }
        else if(outputs[0].value == 'Forever' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[19].description;
            outputsStory[1].innerHTML = data.stories[19].description;
        }
        else if(outputs[0].value == 'Forever' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[20].description;
            outputsStory[1].innerHTML = data.stories[20].description;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
}