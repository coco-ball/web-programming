const answer = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkAnswer() {
  const guess = document.getElementById("answer").value;
  // console.log(guess);
  // console.log(typeof guess);
  // if (typeof guess === "number" && 1 <= guess <= 100) {
  count++;
  let recent = document.createElement("div");
  const history = document.getElementById("history");

  if (guess == answer) {
    document.getElementById("hint").innerHTML = "정답입니다!";
    document.getElementById("count").innerHTML = `총 ${count}번 시도했습니다.`;
    disableInput();
  } else if (guess > answer) {
    document.getElementById("hint").innerHTML = "입력한 숫자가 너무 큽니다.";
    recent.innerHTML = `${count}. ${guess}보다 작은 수 입니다.`;
    history.appendChild(recent);
  } else {
    document.getElementById("hint").innerHTML = "입력한 숫자가 너무 작습니다.";
    recent.innerHTML = `${count}. ${guess}보다 큰 수 입니다.`;
    history.appendChild(recent);
  }
  // } else {
  //   alert("1부터 100 사이의 숫자를 넣어주세요.");
  // }
}

function disableInput() {
  document.getElementById("answer").disabled = true;
  document.getElementsByTagName("input")[1].disabled = true;
}
