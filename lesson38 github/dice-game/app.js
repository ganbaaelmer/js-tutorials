//document.querySelector(".dice") -g bainga duudahgui neg variabled joorloj awaad ashiglaad yawchii.Engevel programm dahin dahin querry hhgui mash hurdan bolno.
var diceDom = document.querySelector(".dice");

//togloom duussan esehiig hadgalah tuluviin huvisagch
var isNewGame;

//toglogchiin eeljiin tuluviig hadgalah huvisagch 1-r toglogch 0; 2-r toglogch 1 gesen utga awna
var activePlayer;

//toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores;

//toglogchiin eeljindee tsugluulj baigaag hadgalah huvisagch
var roundScore;

//---togloomiig shineer ehluuleh function
function initGame() {
  //togloom ehellee gedeg tuluvt oruulna
  isNewGame = true;
  //toglogchiin eeljiin tuluviig hadgalah huvisagch 1-r toglogch 0; 2-r toglogch 1 gesen utga awna
  activePlayer = 0;

  //toglogchdiin tsugluulsan onoog hadgalah huvisagch
  scores = [0, 0];

  //toglogchiin eeljindee tsugluulj baigaag hadgalah huvisagch
  roundScore = 0;

  // program ehlehed beltgii:
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  //toglogchdiin neriig butsaaj gargii:
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  //winnerees bolj toglogchiin ner ulaanaar haragdaad bgaag arilgii:
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  //player 1-n ulaan buurunhiig gargaj irii:
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  // shoonii zuragiig alga bolgoloo:
  diceDom.style.display = "none";
}

//shineer ehluuleh function duudii:
initGame();

// Shoo shiddeg event listener. shooShid -g arilgaad anonymous function nemchlee
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    //shoo ali talaar buusniig hadgalah huvisagch. 1-6 shoo
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // shoonii zurag haruulah:
    diceDom.style.display = "block";

    //buusan sanamsargui hargalzah toonii zurgiig web dr gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";
    //   alert("Shoo buulaa : " + diceNumber);

    //-----------buusan too ni 1-s yalgaatai bol idevhitei toglogchiin eeljiin toog nemegduulne:
    if (diceNumber !== 1) {
      //1 ees yalgaatai too buulaa
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // --Toglogchiin eeljiig solino. ug toglogchiin tsugluulsan onoo 0lono.
      switchToNextPlayer();
    }
  } else {
    alert("btn-roll Event listener - Game OVER");
  }
});

// HOLD tovchnii event Listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame === true) {
    //odoo togloj bga toglogchiin tsugluulsan onoog global onoon deer ni nemej ugnu
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //delgets deer onoog ni haruulii
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //WINNER! ug toglogch hojson esehiig shalgana. win=100 onoo. isGameOver=true
    scores[activePlayer] >= 10
      ? ((document.getElementById("name-" + activePlayer).textContent =
          "Winner!!!"),
        document
          .querySelector(".player-" + activePlayer + "-panel")
          .classList.add("winner"),
        document
          .querySelector(".player-" + activePlayer + "-panel")
          .classList.remove("active"),
        (isNewGame = false))
      : switchToNextPlayer();
  } else {
    alert("HOLD Event listener - Game OVER");
  }
});

//--- DRY-Dont repeat yourself --- olon davtaad bga bolhoor toglogchiin bairiig solidog uildeliig function bolgii
function switchToNextPlayer() {
  // --Toglogchiin eeljiig solino. ug toglogchiin tsugluulsan onoo 0lono.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //1 buusan tul toglogchiin eeljiig nuguu toglogchruu shiljuulne
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //Ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //shoog tur alga bolgoh
  diceDom.style.display = "none";
}

//togloomiig shineer ehluuleh tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
