function compoundMatch(words, target) {
  let answer = [];
  for (let i = 0; i < target.length; i++) {
    let firstSub = [target.slice(0, i), words.indexOf(target.slice(0, i))];
    if(firstSub[1] !== -1 && words.indexOf(target.slice(i)) !== -1) {
      let secondSub = [target.slice(i), words.indexOf(target.slice(i))];
      let indexArr = [firstSub[1], secondSub[1]];
      let intArr = [firstSub, secondSub].sort((a, b) => a[1] - b[1]);
      answer = [intArr[0][0], intArr[1][0], indexArr]
    }
  }
  return answer.length ? answer : null;
}