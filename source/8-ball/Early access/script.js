const questionInput = document.getElementById('question');
const submitButton = document.getElementById('submit');
const answerText = document.getElementById('answer');

const answers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
];

submitButton.addEventListener('click', function() {
  const question = questionInput.value;
  if (question == "") {
    showError("It's empty and please type your question!");
  } else {
    const answer = generateAnswer();
    showAnswer(answer);
  }
});

function generateAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  const answer = answers[randomIndex];
  return typeEffect(answer);
}

function showAnswer(answer) {
  answerText.innerHTML = typeEffect(answer);
}

function showError(message) {
  answerText.innerHTML = typeEffect(message, true);
}

function typeEffect(text, isError = false) {
  const delay = isError ? 50 : 50; // Increase delay for error message
  let i = 0;
  let result = "";
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      result += text.charAt(i);
      answerText.innerHTML = result;
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, delay);
  return result;
}
