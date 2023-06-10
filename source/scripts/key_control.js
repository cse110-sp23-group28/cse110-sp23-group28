/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/08/2023
 * Authors: Jiecheng Chen
 * Description: use enter key to navigate through the input fields and the buttons
 */

/**
 * AddEventListener to input fields, listen to keypress
 * event, if the key press is enter go to the next input field or button
 * @author Jiecheng Chen
 * No parameters and No return values 
 */
window.addEventListener('load', function(){
    // Input your name and birthday section
    const yourNameForm = this.document.getElementById('yourNameForm');
    const yourBirthdayForm = this.document.getElementById('yourBirthdayForm');
    const yourNameBirthdayNextBtn = this.document.querySelector('#yourNameBirthdayBtns .nextBtn');
    // Input bae's name and birthday section
    const baeNameForm = this.document.getElementById('baeNameForm');
    const baeBirthdayForm = this.document.getElementById('baeBirthdayForm');
    const baeNameBirthdayNextBtn = this.document.querySelector('#baeNameBirthdayBtns .nextBtn');

    // Your input section
    // From yourNameForm to yourBirthdayForm
    yourNameForm.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            yourBirthdayForm.focus();
        }
    });
    // From yourBirthdayForm to yourNameBirthdayNextBtn
    yourBirthdayForm.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            yourNameBirthdayNextBtn.focus();
        }
    });
    // use enter to click yourNameBirthdayNextBtn
    yourNameBirthdayNextBtn.addEventListener('keyup', function(event){
        if (event.key === 'Enter') {
            yourNameBirthdayNextBtn.click();
        }
    });

    // Bae's input section
    // From baeNameForm to baeBirthdayForm
    baeNameForm.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            baeBirthdayForm.focus();
        }
    });
    // From baeBirthdayForm to baeNameBirthdayNextBtn
    baeBirthdayForm.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            baeNameBirthdayNextBtn.focus();
        }
    });
    // use enter to click baeNameBirthdayNextBtn
    baeNameBirthdayNextBtn.addEventListener('keyup', function(event){
        if (event.key === 'Enter') {
            baeNameBirthdayNextBtn.click();
        }
    });
      
});