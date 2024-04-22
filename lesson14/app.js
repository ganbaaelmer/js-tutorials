// var name = "Boldoo";
// var job = "bagsh";
// var avgDun = 80;
// // Boldoo
// switch (job) {
//   case "bagsh":
//     console.log(name + " bol bagsh :>> ");
//     break;
//   case "developer":
//     console.log(name + " bol developer :>> ");
//     break;
//   case "zuraach":
//     console.log(name + " bol zuraach :>> ");
//     break;
//   case "batman":
//     console.log(name + " bol batman :>> ");
//     break;
//   default:
//     console.log(name + " bol ali ni ch bish :>> ");
//     break;
// }

// switch (true) {
//   case avgDun >= 90:
//     console.log(name + " bol Onts surlagtan");
//     break;
//   case avgDun >= 60 && avgDun < 90:
//     console.log(name + " bol Dund surlagtan");
//     break;
//   default:
//     console.log(name + " bol Muu surlagtan");
// }

// //Naraa
// name = "Naraa";
// job = "developer";
// var avgDun = 30;

// switch (job) {
//   case "bagsh":
//     console.log(name + " bol bagsh :>> ");
//     break;
//   case "developer":
//     console.log(name + " bol developer :>> ");
//     break;
//   case "zuraach":
//     console.log(name + " bol zuraach :>> ");
//     break;
//   case "batman":
//     console.log(name + " bol batman :>> ");
//     break;
//   default:
//     console.log(name + " bol ali ni ch bish :>> ");
//     break;
// }

// switch (true) {
//   case avgDun >= 90:
//     console.log(name + " bol Onts surlagtan");
//     break;
//   case avgDun >= 60 && avgDun < 90:
//     console.log(name + " bol Dund surlagtan");
//     break;
//   default:
//     console.log(name + " bol Muu surlagtan");
// }

// boldoo bolon naraag hamtad ni
// DRY - Dont repeat yourself

// Medeelel gedeg function bichii
function Medeelel(name, job, avgDun) {
  console.log(" \n --- Function ajillaj ehellee");

  switch (job) {
    case "bagsh":
      console.log(name + " bol bagsh  ");
      break;
    case "developer":
      console.log(name + " bol developer  ");
      break;
    case "zuraach":
      console.log(name + " bol zuraach  ");
      break;
    case "batman":
      console.log(name + " bol batman  ");
      break;
    default:
      console.log(name + " bol ali ni ch bish  ");
      break;
  }
  switch (true) {
    case avgDun >= 90:
      console.log(name + " bol Onts surlagtan");
      break;
    case avgDun >= 60 && avgDun < 90:
      console.log(name + " bol Dund surlagtan");
      break;
    default:
      console.log(name + " bol Muu surlagtan");
  }
}

Medeelel("Bold", "developer", 80);
Medeelel("Saraa", "bagsh", 96);
