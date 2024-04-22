//Boldogo No1: 1-c 1000 hurtleh buh toonii niilberiig ol
var sum = 0;
var limit = 1000;
for (var i = 0; i <= limit; i++) {
  sum = sum + i;
}
console.log("1-s ", limit, " hurtleh toonii niilber ni: ", sum);

//bodlogo No2: 7d huvaagddag toonii niilber
var sum = 0;
var limit = 10;
for (var i = 0; i <= limit; i++) {
  if (i % 7 === 0) {
    sum = sum + i;
    console.log("i :>> ", i);
  }
}
console.log("1-s ", limit, " hurtleh 7d huvaagddag toonii niilber ni: ", sum);

//bodlogo No3: Anhnii toonii niilberuud oloh. 1 bolon uurtuu huvaagddag toog anhnii too gene
var sum = 0;
var limit = 10;

function anhniiTooMunFunction(too) {
  var ahniiTooBish = true;
  for (var x = 2; x < too; x++) {
    if (too % x === 0) {
      ahniiTooBish = false;
      break;
    }
  }
  return ahniiTooBish;
}

console.log("anhniiTooMunFunction() :>> ", anhniiTooMunFunction(11));

for (var i = 2; i <= limit; i++) {
  if (anhniiTooMunFunction(i) === true) {
    sum = sum + i;
    console.log("i too bol anhnii too mun :>> ", i);
  }
}
console.log("1-s ", limit, " hurtleh ahnii toonii niilber ni: ", sum);

//bodlogo No4: 10 elementtei massivt sanamsargui too duurgeed hamgiin ih, hamgiin baga 2 elementiin bairiig soli.

var massivArray = []; // array zarlaj bn
for (var i = 1; i <= 10; i++) {
  var too = Math.random() * 100;
  var FloorToo = Math.floor(too);

  massivArray.push(FloorToo);
}
console.log("massivArray :>> ", massivArray);
//hamgiin bagiin olii
var minToo = 100;
var minTooIndex = -1;
for (var i = 0; i < massivArray.length; i++) {
  if (massivArray[i] < minToo) {
    minToo = massivArray[i];
    minTooIndex = i;
  }
}
console.log("minToo :>> ", minToo, "index ni : ", minTooIndex);
//hamgiin ihiin olii
var maxToo = 0;
var maxTooIndex = -1;
for (var i = 0; i < massivArray.length; i++) {
  if (massivArray[i] > maxToo) {
    maxToo = massivArray[i];
    maxTooIndex = i;
  }
}
console.log("maxToo :>> ", maxToo, "index ni : ", maxTooIndex);
// bairiin solii min max iin
for (i = 0; i < massivArray.length; i++) {
  console.log("bairiin solihoos umnu :>> ", massivArray[i]);
}
var turHadgalsanUtga = massivArray[minTooIndex];
massivArray[minTooIndex] = massivArray[maxTooIndex];
massivArray[maxTooIndex] = turHadgalsanUtga;

console.log(
  "ug array-n hamgiin ih too ni : ",
  massivArray[minTooIndex],
  " hamgiin baga too ni : ",
  massivArray[maxTooIndex]
);
for (i = 0; i < massivArray.length; i++) {
  console.log("bairiin solisonii daraa :>> ", massivArray[i]);
}
