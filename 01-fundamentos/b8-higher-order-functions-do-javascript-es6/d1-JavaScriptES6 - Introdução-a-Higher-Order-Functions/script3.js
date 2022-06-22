const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const points = (rightAnswers, studentAnswers, score) => {
  let result = 0;
  for (i=0; i < rightAnswers.length; i += 1) {
    const finalResult = score(rightAnswers[i], studentAnswers[i]);
    result += finalResult;
  }
  return `Pontuação final: ${result} pontos`
}

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));