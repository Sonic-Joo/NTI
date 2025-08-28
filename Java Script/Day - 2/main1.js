let input = document.getElementById("inp");
let btn = document.getElementById("btn");
let element = document.getElementById("ele");

let securite = Math.floor(Math.random() * 11);

let count = 0;

btn.onclick = function (e) {
  e.preventDefault();
  count++;
  if (securite === Number(input.value)) {
    element.innerHTML = `<p>Correct! Number of Tries: ${count}, The Secret Num: ${securite}</p>`;
  } else {
    element.innerHTML = `<p>Try Again</p>`;
  }
  input.value = "";
};
