// DOM 조작하기
const myParagraph = document.getElementById("my-paragraph");

myParagraph.innerHTML = "This is a new paragraph.";
myParagraph.style.color = "red";

// 이벤트 처리 방법
const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function () {
  const actionStatus = document.getElementById("action-status");
  console.log(actionStatus);
  let clickStatus = document.createElement("div");
  console.log(clickStatus);
  clickStatus.innerHTML = "Button clicked!";
  actionStatus.appendChild(clickStatus);
  console.log(myButton);
});
