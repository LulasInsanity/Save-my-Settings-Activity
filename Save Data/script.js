let nameOutput = document.getElementById("name");
let usernameInput = document.getElementById("username");
let colorThemeInput = document.getElementById("theme-color");
let storageLocationInput = document.getElementById("storage-choice");
let fontInput = document.getElementById("font");
const settingsForm = document.querySelector("#settings-form");
const saveButton = document.getElementsByTagName("button");
// no need to identify body tag, we can use document.body to identify it using html DOM
initalization();

console.log(usernameInput);
console.log(colorThemeInput);
console.log(storageLocationInput);
console.log(settingsForm);
console.log(saveButton);

settingsForm.addEventListener("submit",function(e){
  e.preventDefault();
  let storageLocation = storageLocationInput.value;

  if(storageLocation === "local"){
    let username = usernameInput.value;
    let colorTheme = colorThemeInput.value;
    let storageType = storageLocationInput.value;
    let font = fontInput.value;
    localStorage.setItem("username", username);
    localStorage.setItem("colorTheme", colorTheme);
    localStorage.setItem("storageType", storageType);
    localStorage.setItem("font", font);

    nameOutput.textContent = 
    "Save My Settings " + localStorage.getItem("username") + "!";
    document.body.style.backgroundColor = localStorage.getItem("colorTheme");
    document.body.style.fontFamily = localStorage.getItem("font")
    nameOutput.style.fontFamily = localStorage.getItem("font");
    
  }
})

function initalization(){
  if (localStorage.length > 0){
  console.log ("logged");
  console.log (localStorage);
  nameOutput.textContent =
    "Save My Settings " + localStorage.getItem("username") + "!";
    document.body.style.backgroundColor = localStorage.getItem("colorTheme");
    document.body.style.fontFamily = localStorage.getItem("font")
    nameOutput.style.fontSize = localStorage.getItem("fontSize");
  }
}

//SPICY CHALLENGE
// Add 2 more types of user input such as font choice, age, font size, etc...
//save the user's choices into local storage using getItem method
//on website load, change the user interface to reflect those choices using .style or .innerHTML methods in js



 
