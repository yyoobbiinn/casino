const genForm = document.querySelector("#generate-form");
const gueForm = document.querySelector("#guess-form");
let ranNum = 0;

function generateNum() {
    const num = genForm.querySelector("input").value;
    ranNum = Math.floor(Math.random() * (parseInt(num) + 1)); // ceil 함수 사용 시, 0~1 사이의 실수는 조밀하므로 ranNum이 0이 될 확률이 극히 드물다(random값이 0이 되는 경우에만 ranNum의 값이 0 이 된다).
}

function guessNum(event) {
    event.preventDefault();
    if (isNaN(ranNum)) {
        document.querySelector("#compare-comment").innerText = "Enter maximum!";
        document.querySelector("#result-comment").innerText = "";
        return;
    }
    const gueNum = parseInt(gueForm.querySelector("input").value);
    document.querySelector("#compare-comment").innerText = `You chose: ${gueNum}, the machine chose: ${ranNum}`;
    if (gueNum === ranNum) {
        document.querySelector("#result-comment").innerText = "You Won!";
    }
    else {
        document.querySelector("#result-comment").innerText = "You lost!";
    }
}

gueForm.addEventListener("submit", generateNum);
gueForm.addEventListener("submit", guessNum);