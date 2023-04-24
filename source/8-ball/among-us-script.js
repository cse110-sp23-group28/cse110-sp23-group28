const questionInput = document.getElementById('question');
const submitButton = document.getElementById('submit');
const answerText = document.getElementById('answer');

const answers = [
    ['It is certain.','positive'],
    ['It is decidedly so.','positive'],
    ['Without a doubt.','positive'],
    ['Yes definitely.','positive'],
    ['You may rely on it.','positive'],
    ['As I see it, yes.','positive'],
    ['Most likely.','positive'],
    ['Outlook good.','positive'],
    ['Yes.','positive'],
    ['Signs point to yes.','positive'],
    ['Reply hazy, try again.','neutral'],
    ['Ask again later.','neutral'],
    ['Better not tell you now.', 'neutral'],
    ['Cannot predict now.', 'neutral'],
    ['Concentrate and ask again.', 'neutral'],
    ["Don't count on it.",'negative'],
    ['My reply is no.','negative'],
    ['My sources say no.','negative'],
    ['Outlook not so good.','negative'],
    ['Very doubtful.','negative'],
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
  answer = answers[randomIndex]
  answer[1] == "positive" ? (
    document.body.style.backgroundImage = "url('images/crewmate-bg.png')",
    document.getElementById("answer").style.color = "var(--crewmate)"
  ):(
    document.body.style.backgroundImage = "url('images/impostor-bg.jpg')",
    document.getElementById("answer").style.color = "var(--impostor)"
  )
  return answer[0];
}
