const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

passwordOneEl = document.getElementById("password-one")
passwordTwoEl = document.getElementById("password-two")

var character = 15

function characterSwitcher(clicked_id) {
    
    document.querySelectorAll(".char-button").forEach(element => {
    element.style.backgroundColor = "#FFFFFF";
    element.style.color = "#10B981"})
   
    document.getElementById(clicked_id).style.backgroundColor = "#10B981";
    document.getElementById(clicked_id).style.color = "#FFFFFF"
   
    passwordOneEl.textContent = null
    passwordTwoEl.textContent = null 
   
   if (clicked_id == "char-button1") {
       character = 10
   } else if (clicked_id == "char-button2") {
       character = 15
   } else if (clicked_id == "char-button3") {
       character = 20
   } else if (clicked_id == "char-button4") {
       character = 25
   }
   
}

char = document.getElementsByClassName("char-button")

for (i = 0; i < char.length; i++) {
    char[i].addEventListener('click', function () {
    characterSwitcher(this.id)
    })
}

function generatePasswords() {
        
        passwordOneEl.textContent = null
        passwordTwoEl.textContent = null
        
        for (let i=0; i < character ; i++) {
            num1 = Math.floor(Math.random() * characters.length)
            num2 = Math.floor(Math.random() * characters.length)
            passwordOneEl.textContent += characters[num1]
            passwordTwoEl.textContent += characters[num2] 
    
        }
        
}

document.querySelector("#gen-pass").addEventListener('click', generatePasswords)
