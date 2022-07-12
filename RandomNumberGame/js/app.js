const choiceRangeInput = document.querySelector("#choiceRangeInput");
const myChoiceInput = document.querySelector("#myChoiceInput");
const choiceForm = document.querySelector("#choiceForm");
const choiceResult = document.querySelector("#choiceResult");

const USER_CHOICE = "myChoice"
const CHOICE_RANGE = "choiceRange"

choiceForm.addEventListener("submit", choiceComplete);

function choiceComplete(event) {
    event.preventDefault();
    const choiceRange = choiceRangeInput.value;
    const myChoice = myChoiceInput.value;

    localStorage.setItem(CHOICE_RANGE, choiceRange);
    localStorage.setItem(USER_CHOICE, myChoice);

    const dealer_choice = Math.floor(Math.random() * localStorage.getItem(CHOICE_RANGE));
    localStorage.setItem("dealer_choice", dealer_choice);
}



const userNum = localStorage.getItem(USER_CHOICE);
const dealerNum = localStorage.getItem("dealer_choice");

if (dealerNum == null ){
    choiceForm.addEventListener("submit", choiceComplete);

    function choiceComplete(event) {
        event.preventDefault();
        const choiceRange = choiceRangeInput.value;
        const myChoice = myChoiceInput.value;

        localStorage.setItem(CHOICE_RANGE, choiceRange);
        localStorage.setItem(USER_CHOICE, myChoice);

        const dealer_choice = Math.floor(Math.random() * localStorage.getItem(CHOICE_RANGE));
        localStorage.setItem("dealer_choice", dealer_choice);
    }
} else {
    function choiceComplete(event) {
        event.preventDefault();
        const myChoice = myChoiceInput.value;

        localStorage.setItem(USER_CHOICE, myChoice);
    }
}


console.log(userNum, dealerNum);


choiceResult.innerHTML = `You chose: ${userNum}, the machine chose: ${dealerNum}.`

const winOrLose = document.querySelector("#winOrLose");

if (userNum == dealerNum) {
    winOrLose.innerHTML = "You win!"
} else {
    winOrLose.innerHTML = "You lose!"
}