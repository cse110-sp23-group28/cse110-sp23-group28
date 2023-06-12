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
    runStory(outputs);
}

// /**
//  * Applies a typing effect to an HTML element.
//  * @param {any} element - The HTML element to apply the typing effect to.
//  * @param {string} text - The text to be typed out.
//  * @param {number} duration - The duration between each character in milliseconds.
//  */
// function typeWriter(element, text, duration) {
//     let i = 0;
//     const interval = setInterval(() => {
//       if (i < text.length) {
//         element.innerHTML += text.charAt(i);
//         i++;
//       } else {
//         clearInterval(interval);
//       }
//     }, duration);
//   }
  
/**
 * Function that runs the story-choosing algorithm and displays output when
 * Button is pressed
 * @author Jackie Piepkorn ,Ka Wing Yan(Terry)
 * Update: Ka Wing Yan(Terry) 6/9/2023
 * change the output and add type effect function into runstory
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
        var outputsStory = document.getElementsByClassName('outputsStory');
        outputsStory[0].innerHTML = '';
        outputsStory[1].innerHTML = '';
        const typetime = 3;
        const wait =3000;
        //one month
        if(outputs[0].value == '1 month' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[0].description;
            outputsStory[1].innerHTML = data.stories[0].description;
            storyText = data.stories[0].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '1 month' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[1].description;
            outputsStory[1].innerHTML = data.stories[1].description;
            storyText = data.stories[1].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '1 month' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[2].description;
            outputsStory[1].innerHTML = data.stories[2].description;
            storyText = data.stories[2].description;
        //     setTimeout(() => {
        //         typeWriter(outputsStory[0], storyText, typetime);
        //         typeWriter(outputsStory[1], storyText, typetime);
        //       }, wait);
        }
        //six months
        else if(outputs[0].value == '6 months' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[3].description;
            outputsStory[1].innerHTML = data.stories[3].description;
            storyText = data.stories[3].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '6 months' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[4].description;
            outputsStory[1].innerHTML = data.stories[4].description;
            storyText = data.stories[4].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '6 months' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[5].description;
            outputsStory[1].innerHTML = data.stories[5].description;
            storyText = data.stories[5].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        //1 year
        else if(outputs[0].value == '1 year' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[6].description;
            outputsStory[1].innerHTML = data.stories[6].description;
            storyText = data.stories[6].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '1 year' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[7].description;
            outputsStory[1].innerHTML = data.stories[7].description;
            storyText = data.stories[7].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '1 year' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[8].description;
            outputsStory[1].innerHTML = data.stories[8].description;
            storyText = data.stories[8].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        //3 years
        else if(outputs[0].value == '3 years' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[9].description;
            outputsStory[1].innerHTML = data.stories[9].description;
            storyText = data.stories[9].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '3 years' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            
            outputsStory[0].innerHTML = data.stories[10].description;
            outputsStory[1].innerHTML = data.stories[10].description;
            storyText = data.stories[10].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '3 years' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[11].description;
            outputsStory[1].innerHTML = data.stories[11].description;
            storyText = data.stories[11].description;
            setTimeout(() => {
                typeWriter(outputsStory[0], storyText, typetime);
                typeWriter(outputsStory[1], storyText, typetime);
              }, wait);
            
        }
        //5 years
        else if(outputs[0].value == '5 years' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[12].description;
            outputsStory[1].innerHTML = data.stories[12].description;
            storyText = data.stories[12].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '5 years' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[13].description;
            outputsStory[1].innerHTML = data.stories[13].description;
            storyText = data.stories[13].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '5 years' && card == 3){
             let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[14].description;
            outputsStory[1].innerHTML = data.stories[14].description;
        storyText = data.stories[14].description;
        // setTimeout(() => {
        //     typeWriter(outputsStory[0], storyText, typetime);
        //     typeWriter(outputsStory[1], storyText, typetime);
        //   }, wait);
        //  }
        }
        //10 years
        else if(outputs[0].value == '10 years' && card == 2){
             let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[15].description;
            outputsStory[1].innerHTML = data.stories[15].description;
            storyText = data.stories[15].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '10 years' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[16].description;
            outputsStory[1].innerHTML = data.stories[16].description;
            storyText = data.stories[16].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == '10 years' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[17].description;
            outputsStory[1].innerHTML = data.stories[17].description;
            storyText = data.stories[17].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        //forever
        else if(outputs[0].value == 'Forever' && card == 3){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[18].description;
            outputsStory[1].innerHTML = data.stories[18].description;
            storyText = data.stories[18].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == 'Forever' && card == 1){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[19].description;
            outputsStory[1].innerHTML = data.stories[19].description;
            storyText = data.stories[19].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        else if(outputs[0].value == 'Forever' && card == 2){
            let outputsStory = document.getElementsByClassName('outputsStory');
            outputsStory[0].innerHTML = data.stories[20].description;
            outputsStory[1].innerHTML = data.stories[20].description;
            storyText = data.stories[20].description;
            // setTimeout(() => {
            //     typeWriter(outputsStory[0], storyText, typetime);
            //     typeWriter(outputsStory[1], storyText, typetime);
            //   }, wait);
        }
        // else if (card==null){
        //     storyText = data.stories[21].description;
        //     setTimeout(() => {
        //         typeWriter(outputsStory[0], storyText, typetime);
        //         typeWriter(outputsStory[1], storyText, typetime);
        //       }, wait);
        // }
      })
      .catch(error => {
        console.error('Error:', error);
      });
}