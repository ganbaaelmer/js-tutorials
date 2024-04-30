//lecture 59 Closure 1
// function showPost(content) {
//   var editedContent = "Shine medee : " + content + "\n\n";

//   console.log(editedContent);

//   return function () {
//     var email = prompt(
//       editedContent + "\n\n" + "ta email hayagaa oruulval medee turgen hurgii"
//     );

//     document.write(
//       "Bayarlalaa bid tanii oruulsan email haygiig huleej awlaa : " + email
//     );
//   };
// }

// var medee =
//   "Russia now full scale attack on Ukraine. Even forces with conscript soldiers joining battles";

// var askEmailFunction = showPost(medee);

// setTimeout(askEmailFunction, 3000);

// lecture 60 Closure 2

var a = [];
a.push(34);
a.push("Hello");

a.push(function () {
  console.log("hi from array");

  return function () {
    console.log("sainu from function from function");
  };
});

a[2]()();
