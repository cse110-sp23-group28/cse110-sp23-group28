/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/08/2023
 * Authors: Jiecheng Chen
 * Description: disable buttons when a necessary input is not filled out
 */

/**
 * AddEventListener to input fields, 
 * disable the button and change its style according to the inputs
 * @author Jiecheng Chen
 * No parameters and No return values 
 */
window.addEventListener('load', function(){
    // Input your name and birthday section
    const yourNameForm = this.document.getElementById('yourNameForm');
    const yourNameBirthdayNextBtn = this.document.querySelector('#yourNameBirthdayBtns .nextBtn');
    // Input bae's name and birthday section
    const baeNameForm = this.document.getElementById('baeNameForm');
    const baeNameBirthdayNextBtn = this.document.querySelector('#baeNameBirthdayBtns .nextBtn');
    // Name and birthday input section
    const testBtn = document.getElementById('testBtn');
    const yourName = this.document.getElementById('yourName');
    const baeName = this.document.getElementById('baeName');
    const heartColor= this.document.getElementById('heartColor');

    // Next button (your name birthday input section)
    yourNameForm.addEventListener('keyup', function(){
        if(yourNameForm.value != ''){
            // yourNameBirthdayNextBtn.removeAttribute('disabled');
            yourNameBirthdayNextBtn.classList.remove('disable');
        }else{
            // yourNameBirthdayNextBtn.setAttribute('disabled', true);
            yourNameBirthdayNextBtn.classList.add('disable');
        }
    })
    // Next button (Bae name birthday input section)
    baeNameForm.addEventListener('keyup', function(){
        if(baeNameForm.value != ''){
            // baeNameBirthdayNextBtn.removeAttribute('disabled');
            baeNameBirthdayNextBtn.classList.remove('disable');
        }else{
            // baeNameBirthdayNextBtn.setAttribute('disabled', true);
            baeNameBirthdayNextBtn.classList.add('disable');
        }
    })

    // Test button
    yourName.addEventListener('keyup', function(){
        if(yourName.value != '' && baeName.value != ''){
            heartColor.setAttribute('fill', 'url(#paint0_linear_264_120)');
            testBtn.classList.remove('disableBtn');            
        }else{
            heartColor.setAttribute('fill', '#dddddd40');
            testBtn.classList.add('disableBtn');
        }
    })
    baeName.addEventListener('keyup', function(){
        if(baeName.value != '' && yourName.value != ''){
            heartColor.setAttribute('fill', 'url(#paint0_linear_264_120)');
            testBtn.classList.remove('disableBtn');            
        }else{
            heartColor.setAttribute('fill', '#dddddd40');
            testBtn.classList.add('disableBtn');
        }
    })
});