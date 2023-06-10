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
    // Name and birthday input section
    const inputNameBirthday = document.getElementById('inputNameBirthday');
    const testBtn = document.getElementById('testBtn');
    const you = this.document.getElementById('you');
    const bae = this.document.getElementById('bae');
    const yourName = this.document.getElementById('yourName');
    const baeName = this.document.getElementById('baeName');
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

    let btnClicked = false;
    // false == back; true == next
    let backOrNext = false;

    // TEST button
    // On click, fade-out name and birthday input section
    // fade in canvas section
    // Increase thermometer progress bar
    testBtn.addEventListener('click', function(){
        if(yourName.value != '' && baeName.value != ''){
            inputNameBirthday.classList.toggle('fadeOut');
            thermometerProgress.classList.toggle('canvas');
            you.classList.toggle('fade');
            bae.classList.toggle('fade');
            btnClicked = true;    
        }else{
            alert('Please fill out both yours and your bae\'s name! 😀');
        }
    });
    inputNameBirthday.addEventListener('transitionend', function(){
        if(btnClicked){
            inputNameBirthday.style.display='none';
            drawCanvas.style.display='block';
            setTimeout(function(){drawCanvas.classList.toggle('fadeIn')}, 0);
            btnClicked = false;
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
            setTimeout(function(){inputNameBirthday.classList.toggle('fadeOut')}, 0);   
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
            cardsNextBtn.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            cardsNextBtn.style.border = '1px solid var(--pink-border)';
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
        if (cardClicked === false){
            //do nothing if card is clicked
        }
        else {
            // root.style.setProperty("--section-transition", 'ease 5s');
        chooseCards.classList.toggle('fadeIn');
        thermometerProgress.classList.toggle('result');
        thermometer.classList.toggle('result');
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
