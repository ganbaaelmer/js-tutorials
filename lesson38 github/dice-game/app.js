//toglogchiin eeljiin tuluviig hadgalah huvisagch 1-r toglogch 0; 2-r toglogch 1 gesen utga awna
var activePlayer = 0;

//toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

//toglogchiin eeljindee tsugluulj baigaag hadgalah huvisagch
var roundScore = 0;

// program ehlehed beltgii:
// document.querySelector("#score-0").textContent = 0;
// document.querySelector("#score-1").textContent = 0;
// document.querySelector("#current-0").textContent = 0;
// document.querySelector("#current-1").textContent = 0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

//document.querySelector(".dice") -g bainga duudahgui neg variabled joorloj awaad ashiglaad yawchii.Engevel programm dahin dahin querry hhgui mash hurdan bolno.
var diceDom = document.querySelector(".dice");

// shoonii zuragiig alga bolgoloo:
diceDom.style.display = "none";

// shooShid -g arilgaad anonymous function nemchlee
document.querySelector(".btn-roll").addEventListener("click", function () {
  //shoo ali talaar buusniig hadgalah huvisagch. 1-6 shoo
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // shoonii zurag haruulah:
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  //   alert("Shoo buulaa : " + diceNumber);
});
