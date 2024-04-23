//toglogchiin eeljiin tuluviig hadgalah huvisagch 1-r toglogch 0; 2-r toglogch 1 gesen utga awna
var activePlayer = 0;

//toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

//toglogchiin eeljindee tsugluulj baigaag hadgalah huvisagch
var roundScore = 0;

//shoo ali talaar buusniig hadgalah huvisagch. 1-6 shoo
// var dice = Math.floor(Math.random() * 6) + 1;
// window.document.querySelector("#score-0").textContent = dice;

// window.document.querySelector("#score-1").innerHTML = "<em>YES!</em>";

// console.log("Shoo engej buulaa :>> ", dice);
// shoonii zuragiig alga bolgoloo:
document.querySelector(".dice").style.display = "none";

// program ehlehed beltgii:
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
