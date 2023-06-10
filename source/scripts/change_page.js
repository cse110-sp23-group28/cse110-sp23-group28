/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/01/2023
 * Authors: Jiecheng Chen
 * Description: powers test, next and back buttons
 */

/**
 * AddEventListener for test, next and back buttons
 * to change sections will fade transition
 * @author Jiecheng Chen
 * No parameters and No return values 
 */
window.addEventListener('load', function(){   
    // root of document
    const root = this.document.querySelector(':root');
    // Body section
    const body = document.querySelector('body');
    // Input your name and birthday section 
    const yourNameBirthday = this.document.getElementById('yourNameBirthday');
    const yourNameBirthdayNextBtn = document.querySelector('#yourNameBirthdayBtns .nextBtn');    
    const yourNameForm = this.document.getElementById('yourNameForm');
    const yourBirthdayForm = this.document.getElementById('yourBirthdayForm');
    //const yourBirthdayForm = this.document.getElementById('yourBirthdayForm');

    // Input bae's name and birthday section
    const baeNameBirthday = this.document.getElementById('baeNameBirthday');
    const baeNameBirthdayNextBtn = this.document.querySelector('#baeNameBirthdayBtns .nextBtn');
    const baeNameBirthdayBackBtn = this.document.querySelector('#baeNameBirthdayBtns .backBtn');
    const baeNameForm = this.document.getElementById('baeNameForm');
    const baeBirthdayForm = this.document.getElementById('baeBirthdayForm');
    //onst baeNameBirthdayForm = this.document.getElementById('baeNameBirthdayForm');

    // Name and birthday input section
    const inputNameBirthday = document.getElementById('inputNameBirthday');
    const testBtn = document.getElementById('testBtn');
    const you = this.document.getElementById('you');
    const bae = this.document.getElementById('bae');
    const yourName = this.document.getElementById('yourName');
    const yourBirthday = this.document.getElementById('yourBirthday');
    const baeName = this.document.getElementById('baeName');
    const baeBirthday = this.document.getElementById('baeBirthday');
    // Drawing canvas section
    const drawCanvas = document.getElementById('drawCanvas');
    const canvasBackBtn = document.querySelector('#canvasBtns .backBtn');
    const canvasNextBtn = document.querySelector('#canvasBtns .nextBtn');
    // Card selection section
    const chooseCards = document.getElementById('chooseCards');
    const cardsBackBtn = document.querySelector('#cardsBtns .backBtn');
    const cardsNextBtn = document.querySelector('#cardsBtns .nextBtn');
    const card1Button = this.document.getElementById('card1Button');
    const card2Button = this.document.getElementById('card2Button');
    const card3Button = this.document.getElementById('card3Button');
    const cardClick1 = document.getElementById('card1Button');
    const cardClick2 = document.getElementById('card2Button');
    const cardClick3 = document.getElementById('card3Button');
    let cardClicked = false;
    // Result section
    const result = document.getElementById('result');

    //ThermometerProgress
    const thermometerProgress = document.getElementById('progressFill');
    const thermometer = document.getElementById('progressThermometer');
    // the result class of thermometer hides the thermometer on load
    //thermometer.classList.toggle('result');    

    // Check is variabel to prevent transitionend gets triggered without button clicking
    let btnClicked = false;
    // Check whether this button is a next or back button
    // to prevent transitionend gets triggered by a different button clicking
    // false == back; true == next
    let backOrNext = false;


    // Next button (your name birthday input section)
    yourNameBirthdayNextBtn.addEventListener('click', function(){
        yourNameBirthday.classList.toggle('fadeOut');
        // set your name and birthday value on inputNameBirthday section
        yourName.value = yourNameForm.value;
        yourBirthday.value = yourBirthdayForm.value
        btnClicked = true;
    });
    yourNameBirthday.addEventListener('transitionend', function(){
        if(btnClicked){
            yourNameBirthday.style.display='none';
            baeNameBirthday.style.display='flex';
            baeNameForm.focus();
            setTimeout(function(){baeNameBirthday.classList.toggle('fadeIn')}, 0);

            
            btnClicked = false;
        }
    });
    // Back button (bae's name birthday input section)
    baeNameBirthdayBackBtn.addEventListener('click', function(){
        baeNameBirthday.classList.toggle('fadeIn');
        btnClicked = true;
        backOrNext = false;
    });
    baeNameBirthday.addEventListener('transitionend', function(){
        if(btnClicked && backOrNext==false){
            baeNameBirthday.style.display='none';
            yourNameBirthday.style.display='flex';
            setTimeout(function(){yourNameBirthday.classList.toggle('fadeOut')}, 0);
            btnClicked = false;
        }
    });
    // Next button (bae's name birthday input section)
    baeNameBirthdayNextBtn.addEventListener('click', function(){
        baeNameBirthday.classList.toggle('fadeIn');
        btnClicked = true;
        backOrNext = true;
        // set your name and birthday value on inputNameBirthday section
        baeName.value = baeNameForm.value;
        baeBirthday.value = baeBirthdayForm.value
    });
    baeNameBirthday.addEventListener('transitionend', function(){
        if(btnClicked && backOrNext){
            baeNameBirthday.style.display='none';
            inputNameBirthday.style.display='flex';
            setTimeout(function(){inputNameBirthday.classList.toggle('fadeIn')}, 0);
            thermometer.classList.toggle('fadeIn');
            testBtn.focus();
            btnClicked = false;
        }
    });


    // TEST button
    // On click, fade-out name and birthday input section
    // fade in canvas section
    // Increase thermometer progress bar
    testBtn.addEventListener('click', function(){
        if(yourName.value != '' && baeName.value != ''){
            inputNameBirthday.classList.toggle('fadeIn');
            thermometerProgress.classList.toggle('canvas');
            you.classList.toggle('fade');
            bae.classList.toggle('fade');
            btnClicked = true;    
        }
        else if(yourName.value === ''){
            yourName.focus();
        }
        else if(baeName.value === ''){
            baeName.focus();
        }
    });
    inputNameBirthday.addEventListener('transitionend', function(){
        if(btnClicked){
            inputNameBirthday.style.display='none';
            drawCanvas.style.display='block';
            setTimeout(function(){drawCanvas.classList.toggle('fadeIn')}, 0);
            btnClicked = false;
            // inputNameBirthday section has absolute positioning
            // so the body height and weidth were set to 100vh and 100vw
            // to set background gadient to the entire viewport
            // body size can be set back to auto after we move away from inputNameBirthday
            body.classList.toggle('auto');
        }
    });

    // Back Button (canvas section)
    // On clicked, fade-out canvas section
    // fade in name and birthday input section
    // Decrease thermometer progress bar
    canvasBackBtn.addEventListener('click', function(){
        body.classList.toggle('auto');
        drawCanvas.classList.toggle('fadeIn');
        thermometerProgress.classList.toggle('canvas');
        you.classList.toggle('fade');
        bae.classList.toggle('fade');
        btnClicked = true;
        backOrNext = false;
    });
    drawCanvas.addEventListener('transitionend', function(){
        if(btnClicked && backOrNext==false){
            drawCanvas.style.display='none';
            inputNameBirthday.style.display='flex';
            setTimeout(function(){inputNameBirthday.classList.toggle('fadeIn')}, 0);   
            btnClicked = false; 
        }       
    });

    // Next Button (canvas page)
    // On clicked, fade-out canvas page
    // fade in cards selection page
    // Increase thermometer progress bar
    canvasNextBtn.addEventListener('click', function(){
        drawCanvas.classList.toggle('fadeIn');
        thermometerProgress.classList.toggle('cards');
        // card1Button.classList.toggle('fade');
        // card2Button.classList.toggle('fade');
        // card3Button.classList.toggle('fade');
        btnClicked = true;
        backOrNext = true;
        if (cardClicked === false) {
            cardsNextBtn.style.backgroundColor = 'var(--grey)';
            cardsNextBtn.style.border = '1px solid var(--grey-border)';
            //cardsBackBtn.style.borderRadius = '10px';
        }
    });
    drawCanvas.addEventListener('transitionend', function(){
        if(btnClicked && backOrNext){
            drawCanvas.style.display='none';
            chooseCards.style.display='block';
            setTimeout(function(){chooseCards.classList.toggle('fadeIn')}, 0);   
            btnClicked = false;
        }       
    });

    // Back Button (Cards section)
    // On clicked, fade-out cards section
    // fade in canvas section
    // Decrease thermometer progress bar
    cardsBackBtn.addEventListener('click', function(){
        chooseCards.classList.toggle('fadeIn');
        thermometerProgress.classList.toggle('cards');
        btnClicked = true;
        backOrNext = false;
    });
    chooseCards.addEventListener('transitionend', function(){
        if(btnClicked && backOrNext==false){
            chooseCards.style.display='none';
            drawCanvas.style.display='block';
            setTimeout(function(){drawCanvas.classList.toggle('fadeIn')}, 0);   
            btnClicked = false;
        }       
    });

    // Next Button (Cards section)
    // On clicked, fade-out cards page
    // fade in result section (slower than the previous ones)
    cardClick1.addEventListener('click', function(){
        cardClicked = true;
        //can add code to make button style clickable
        cardsNextBtn.style.backgroundColor = '';
        cardsNextBtn.style.border = '';
    })
    cardClick2.addEventListener('click', function(){
        cardClicked = true;
        //can add code to make button style clickable
        cardsNextBtn.style.backgroundColor = '';
        cardsNextBtn.style.border = '';
    })
    cardClick3.addEventListener('click', function(){
        cardClicked = true;
        //can add code to make button style clickable
        cardsNextBtn.style.backgroundColor = '';
        cardsNextBtn.style.border = '';
    })
    cardsNextBtn.addEventListener('click', function(){
        //Checks a card has been selected first
        if (cardClicked === true){
            // root.style.setProperty("--section-transition", 'ease 5s');
            chooseCards.classList.toggle('fadeIn');
            thermometerProgress.classList.toggle('result');
            thermometer.classList.toggle('fadeIn');
            btnClicked = true;
            backOrNext = true;

            body.style.overflowY = 'scroll';
        }
    });
    chooseCards.addEventListener('transitionend', function(){
        if(btnClicked && backOrNext){
            chooseCards.style.display='none';
            result.style.display='block';
            setTimeout(function(){result.classList.toggle('fadeIn')}, 0);   
            btnClicked = false; 
        }       
    });

});


// safe guard user from clicking browser back button
// window.addEventListener("beforeunload", function (e) {
//     e.preventDefault();
//     e.returnValue = '';
// });
