var age = 34;
age = age - 3;
age++;
age--;
age += 10;
age /= 2;

/* alert("sain baina uu \n tanii nas : " + age);

var age = prompt("tanii tursun on hed we?");

var birthDate = prompt("tursun onoo oruulna uu");

var now = new Date().getFullYear();

messageNas = "tanii nas : " + (now - birthDate);

alert(messageNas);
*/

// **** Nuhtsul shalgah butets ****

var birthDate = prompt("tursun onoo oruulna uu");

// cancel darval nullobject

if (birthDate !== null) {
  // end zugeer orj irsen utgiin type iig shalgaj haruuldag
  //   alert(
  //     "birthdate variabliin utga : " +
  //       birthDate +
  //       " " +
  //       typeof birthDate +
  //       " turultei bn"
  //   );
  // end nasiin bodoj bn
  var now = new Date().getFullYear();
  nas = now - birthDate;
  messageNas = "tanii nas : " + nas;

  // end nasand hursen esehiin haruulj bn
  if (nas > 18) {
    // 18s tom buyu nasand hursen hun
    alert("ta nasand hursen hun bn");
  } else if (nas > 15) {
    // 2008 onii huuhed
    alert("ta ahlah angiin suragch bn");
  } else if (nas > 6) {
    // baga nasnii huuhed 2015
    alert("Baga nasnii huuhed bn");
  } else {
    alert("ta nasand hureegui bn");
  }
} else {
  alert("Ta Garaas tursun onoo oruulahdaa NULL utgatai oruulsan bn!");
}
