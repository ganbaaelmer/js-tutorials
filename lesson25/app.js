// try catch
try {
  console.log("Program ehellee\n");
  var x = prompt("za ta 1-s 100 hoorond too oruulna uu");

  console.log("tanii oruulsan too bol :>> ", x);
} catch (error) {
  if (error.message === "prompt is not defined") {
    console.log("Uuchlaarai ene code zuvhun browser dr ajillana");
  } else {
    console.log("error.message :>> ", error.message);
  }
}
