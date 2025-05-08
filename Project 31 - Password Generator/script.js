const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText
    if (!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowerCaseEl.checked;
  const hasUpper = upperCaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
    // console.log(length, hasLower, hasUpper, hasNumber, hasSymbol)

resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
    );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        //   console.log(type);
          const funcName = Object.keys(type)[0]
          generatedPassword += randomFunc[funcName]()          
    });
    }
    const finalPassword = generatedPassword.slice(0, length)
    
    // Need to figure out how to randomize the password so it doesn't always come in order
    
    return shuffleText(finalPassword)
}

function shuffleText(text) {
    const array = text.split('')
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array.join('');
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// console.log(getRandomLower())

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(getRandomUpper())

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// console.log(getRandomNumber())

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomSymbol())

// console.log(getRandomSymbol(), getRandomLower(), getRandomUpper(), getRandomNumber());
