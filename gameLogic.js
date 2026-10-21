const state = require("./state");
state.questions = [
  { q: "Capital of Kenya?", options: ["Nairobi", "Mombasa"], answer: 0 },
  { q: "Which is an array method?", options: ["map", "print"], answer: 0 },
];
const start = () => { state.current = 0; state.score = 0; state.startTime = Date.now(); };
const check = (i) => {
  const ok = i === state.questions[state.current].answer;
  if (ok) state.score++;
  state.current++;
  return ok;
};
const isOver = () => state.current >= state.questions.length;
