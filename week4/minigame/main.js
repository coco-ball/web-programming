const answer = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkAnswer() {
  const guess = document.getElementById("answer").value;
  count++;

  if (guess == answer) {
    document.getElementById("hint").innerHTML = "정답입니다!";
    document.getElementById("count").innerHTML = `총 ${count}번 시도했습니다.`;
    disableInput();
  } else if (guess > answer) {
    document.getElementById("hint").innerHTML = "입력한 숫자가 너무 큽니다.";
  } else {
    document.getElementById("hint").innerHTML = "입력한 숫자가 너무 작습니다.";
  }
}

function disableInput() {
  document.getElementById("answer").disabled = true;
  document.getElementsByTagName("input")[1].disabled = true;
}
