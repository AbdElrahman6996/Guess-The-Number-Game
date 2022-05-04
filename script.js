/*
👋 Hi, I’m @AbdElrahman6996

👀 I’m interested in Front End Development & Ui/UX Design

🌱 This is one of my projects " Abdoshoes "

🎨 Ui Design : @AbdElrahman6996

📫 How to reach me ?

📧 Email me : abdoamir6996@gmail.com

🔮 Looking forward to create a lot of Projects together , Cheers ;)
*/
// Developer @AbdElrahman6996
let resetElement = document.getElementById('reset')
let guessElemnt = document.getElementById('guess')
let errorElemnt = document.getElementById('error')
let resultTxtElemnt = document.getElementById('Guessing-result')
let userNumberGuess = '';
let numberValue = 0;
let startGuessing = 100;

// Developer @AbdElrahman6996
function generateRandomNumber() {
    const randomNum = Math.random()
    numberValue = Math.floor(randomNum * 100)
}
generateRandomNumber()
// Developer @AbdElrahman6996
guessElemnt.addEventListener('click', async () => {
    userNumberGuess = document.getElementById('inputvalue').value;
    if (isNaN(userNumberGuess)) {
        errorElemnt.innerHTML = 'Error, Only Numbers are allowed !'
        errorElemnt.style.cssText += 'background: #b31217;'
        setTimeout(() => {
            errorElemnt.innerHTML = ''
            errorElemnt.style.cssText -= 'background:#b31217'
        }, 5000)
    }
    // Developer @AbdElrahman6996
    if (userNumberGuess.length < 1) {
        errorElemnt.innerHTML = 'Error, Please input a value !'
        errorElemnt.style.cssText += 'background: #b31217;'
        setTimeout(() => {
            errorElemnt.innerHTML = ''
            errorElemnt.style.cssText -= 'display:none;'
        }, 5000)
    }
// Developer @AbdElrahman6996
    else {
        errorElemnt.style.cssText += 'display:none;'
    }
// Developer @AbdElrahman6996
    function checkRandomNumber() {
        if (numberValue > userNumberGuess) {
            if (userNumberGuess.length < 1) {
                return
            }
            resultTxtElemnt.innerHTML = 'Your guess is too loo'
            resultTxtElemnt.style.cssText += 'border: 3px solid orange;'
        }
        // Developer @AbdElrahman6996
        if (numberValue < userNumberGuess) {
            resultTxtElemnt.innerHTML = 'Your guess is too high'
            resultTxtElemnt.style.cssText += 'border: 3px solid red;'
        }
        if (numberValue == userNumberGuess) {
            resultTxtElemnt.innerHTML = 'Your guessed the right number ;)'
            resultTxtElemnt.style.cssText += 'border: 3px solid green;'
            generateRandomNumber()
        }
    }
    // Developer @AbdElrahman6996
    checkRandomNumber()
})
// Developer @AbdElrahman6996
resetElement.addEventListener('click', () => {
    location.reload()
})
// Developer @AbdElrahman6996
// Developer @AbdElrahman6996
// Developer @AbdElrahman6996

/*
👋 Hi, I’m @AbdElrahman6996

👀 I’m interested in Front End Development & Ui/UX Design

🌱 This is one of my projects " Abdoshoes "

🎨 Ui Design : @AbdElrahman6996

📫 How to reach me ?

📧 Email me : abdoamir6996@gmail.com

🔮 Looking forward to create a lot of Projects together , Cheers ;)
*/