//Statement function
// Medeelel gedeg function bichii
// function Medeelel(name, job, avgDun) {
//   console.log(" \n --- Function ajillaj ehellee");

//   switch (job) {
//     case "bagsh":
//       console.log(name + " bol bagsh  ");
//       break;
//     case "developer":
//       console.log(name + " bol developer  ");
//       break;
//     case "zuraach":
//       console.log(name + " bol zuraach  ");
//       break;
//     case "batman":
//       console.log(name + " bol batman  ");
//       break;
//     default:
//       console.log(name + " bol ali ni ch bish  ");
//       break;
//   }
//   switch (true) {
//     case avgDun >= 90:
//       console.log(name + " bol Onts surlagtan");
//       break;
//     case avgDun >= 60 && avgDun < 90:
//       console.log(name + " bol Dund surlagtan");
//       break;
//     default:
//       console.log(name + " bol Muu surlagtan");
//   }
// }

// Medeelel("Bold", "developer", 80);
// Medeelel("Saraa", "bagsh", 96);

// Toonii modul heldeg function bichii:
// |-15-| = 15, |15| = 15

//Expression Function
var ExpressionFunctionmoduleOldog = function (too) {
  console.log("\n Expression function ajillaa ... " + too);
  var mod;
  if (too < 0) {
    mod = -1 * too;
  } else {
    mod = too;
  }
  //console.log("        moduled huvirgasan ni : ", mod);
  return mod;
};

//Statement Function
function StatementFunctionmoduleOldog(number) {
  console.log("\n Statement function ajillaa ... " + number);
}
//ExpressionFunctionmoduleOldog(-255);

console.log(
  " ExpressionFunctionmoduleOldog Return ajillaa :>> ",
  ExpressionFunctionmoduleOldog(-255)
);
StatementFunctionmoduleOldog(-115);

var addModules = function (x, y, z) {
  var niilber =
    ExpressionFunctionmoduleOldog(x) +
    ExpressionFunctionmoduleOldog(y) +
    ExpressionFunctionmoduleOldog(z);
  return niilber;
};

var sum = addModules(-115, 21, -100);
console.log("sum :>> ", sum);
