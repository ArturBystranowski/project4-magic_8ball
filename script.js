const answers = [
	"yes",
	"no",
	"you don't wanna know",
	"is this your real question?",
	"don't ask me this!",
	"maybe",
	"ask me again",
	"use other words to ask this",
	"no comments...",
	"sure!",
];
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const ballDiv = document.querySelector(".ball-img");
const ballImg = document.querySelector(".ball-img img");

const randomAnswer = () => {
	ballImg.classList.add("shake");
	setTimeout(() => checkIfEmpty(), 1000);
	setTimeout(() => ballImg.classList.remove("shake"), 2000);
};

const checkIfEmpty = () => {
	if (input.value.length === 0) {
		answer.textContent = "";
		error.textContent = "Write you question";
	} else checkIfQuestion();
};

const checkIfQuestion = () => {
	const lastChar = input.value.charAt(input.value.length - 1);
	if (lastChar !== "?") {
		answer.textContent = "";
		error.textContent =
			"You need to end your question with a question mark '?'";
	} else giveAnswer();
};

const giveAnswer = () => {
	error.textContent = "";
	let randomNum = Math.floor(Math.random() * 10);
	answer.textContent = `My answer: ${answers[randomNum]}`;
};

ballDiv.addEventListener("click", randomAnswer);
document.addEventListener("keypress", (e) => {
	if (e.key == "Enter") randomAnswer();
});
