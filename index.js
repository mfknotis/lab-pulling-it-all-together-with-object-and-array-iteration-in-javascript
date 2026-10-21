const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const questions = [
  { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: 1 },
  { q: "Capital of Kenya?", options: ["Nairobi", "Mombasa", "Kisumu"], answer: 0 },
  { q: "Which is a JS array method?", options: ["map", "print", "loop"], answer: 0 },
];

let current = 0, score = 0, timeLeft = 60;
let timer;

function startGame() {
  console.log("\n🎯 Welcome to the Trivia Quiz! You have 60 seconds.\n");
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) { console.log("\n⏰ Time's up!"); endGame(); }
  }, 1000);
  askQuestion();
}

function askQuestion() {
  if (current >= questions.length) return endGame();
  const { q, options } = questions[current];
  console.log(`Q${current + 1}: ${q}`);
  options.map((o, i) => console.log(` ${i + 1}. ${o}`));
  rl.question("Your answer (number): ", (input) => {
    checkAnswer(Number(input) - 1);
  });
}

function checkAnswer(choice) {
  if (choice === questions[current].answer) {
    score++;
    console.log("✅ Correct!\n");
  } else {
    console.log("❌ Wrong!\n");
  }
  current++;
  askQuestion();
}

function endGame() {
  clearInterval(timer);
  console.log(`🏁 Game over! Score: ${score}/${questions.length}`);
  console.log(`Time used: ${60 - timeLeft}s`);
  rl.close();
  process.exit(0);
