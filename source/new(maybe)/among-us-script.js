const questionInput = document.getElementById('question');
const submitButton = document.getElementById('submit');
const answerText = document.getElementById('answer');
const answers = [
    ['It is certain.', 'positive'],
    ['It is decidedly so.', 'positive'],
    ['Without a doubt.', 'positive'],
    ['Yes definitely.', 'positive'],
    ['You may rely on it.', 'positive'],
    ['As I see it, yes.', 'positive'],
    ['Most likely.', 'positive'],
    ['Outlook good.', 'positive'],
    ['Yes.', 'positive'],
    ['Signs point to yes.', 'positive'],
    ['Reply hazy, try again.', 'neutral'],
    ['Ask again later.', 'neutral'],
    ['Better not tell you now.', 'neutral'],
    ['Cannot predict now.', 'neutral'],
    ['Concentrate and ask again.', 'neutral'],
    ["Don't count on it.", 'negative'],
    ['My reply is no.', 'negative'],
    ['My sources say no.', 'negative'],
    ['Outlook not so good.', 'negative'],
    ['Very doubtful.', 'negative'],
];
const firstword = [
  ['Am '],
  ['Is '],
  ['Are '],
  ['Do '],
  ['Does '],
  ['Have '],
  ['Has '],
  ['Can '],
  ['Could '],
  ['Will '],
  ['Would '],
  ['May '],
  ['Might '],
  ['Shall '],
  ['Must '],
];

submitButton.addEventListener('click', function() {
  if (canClick) {
    const question = questionInput.value.toLowerCase();
    submitButton.style.backgroundColor = 'var(--impostor)';

    if (question == "") {
      document.getElementById("answer").style.color = "var(--impostor)"
      showError("It's empty ");
    } else {
      let isValidQuestion = false;
      for (let i = 0; i < firstword.length; i++) {
        if (question.startsWith(firstword[i][0].toLowerCase())) {
          isValidQuestion = true;
          break;
        }
      }

      canClick = false;
      if (isValidQuestion) {
        const answer = generateAnswer();
        answerText.textContent = answer;
      } else {
        document.getElementById("answer").style.color = "var(--impostor)"
        showError("Sorry, I didn't understand that");
      }
    }
    
    // setTimeout(function() {
    //   submitButton.style.backgroundColor = 'var(--crewmate)';
    //   canClick = true;
    // }, 3000);
  }
});


// use enter key to submit
questionInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});

function generateAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  answer = answers[randomIndex]
  answer[1] == "positive" ? (
    document.body.style.backgroundImage = "url('images/crewmate-bg.png')",
    document.getElementById("answer").style.color = "var(--crewmate)"
  ) : (
    document.body.style.backgroundImage = "url('images/impostor-bg.jpg')",
    document.getElementById("answer").style.color = "var(--impostor)"
  )
  return typeEffect(answer[0]);
}

function typeEffect(text) {
  const delay = 50; //clear up redundant code
  let i = 0;
  let result = "";
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      result += text.charAt(i);
      answerText.innerHTML = result;
      i++;
    } else {
      // stop execution when result.length == test.length
      clearInterval(typingInterval);
      // As the execution stopped, make the button clickable immediately (improved UX)
      submitButton.style.backgroundColor = 'var(--crewmate)';
      canClick = true;
    }
  }, delay);
  return result;
}

function showError(message) {
  answerText.innerHTML = typeEffect(message);
  
}

let canClick = true;