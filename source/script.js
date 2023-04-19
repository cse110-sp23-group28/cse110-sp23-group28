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
  if (question) {
    const answer = generateAnswer();
    answerText.textContent = answer;
  }
});

function generateAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}
