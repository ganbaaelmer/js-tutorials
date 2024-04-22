//object zarlii
var human1 = {
  name: "Bataa",
  job: "programmist",
  hobby: "video gaming",
  address: {
    country: "Mongol",
    city: "Ulaanbaatar",
  },
};

var human2 = {
  name: "Dorjoo",
  job: "designer",
  hobby: "sport",
};

// console.log("human1 :>> ", human1.name, human1.job, human1.hobby);
// console.log("human2 :>> ", human2.name, human2.job, human2.hobby);

var kurs1 = {
  name: "javascript ehnees ni duustal",
  count: 116,
  totalMin: 904,
  author: human1, // object dotor object hiilee,
  price: 119000,
  discount: 26900,
};
var kurs2 = {
  name: "HTML, CSS ehnees ni duustal",
  count: 128,
  totalMin: 1217,
  author: human2, // object dotor object hiilee,
  price: 146000,
  discount: 26900,
  infoFunkts: function () {
    console.log("kurs2 :>> ", kurs2);
  },
  computeHour: function () {
    return Math.round(this.totalMin / 60);
  },
  computeMin: function () {
    return this.totalMin % 60;
  },
};

// kurs2.infoFunkts();
console.log(
  "kurs2.computeHour() +  :>> ",
  kurs2.computeHour() + " tsag " + kurs2.computeMin() + " minut bn"
);

// object dotor baigaa object iin key : value -g duudahdaa:
// console.log(
//   "kurs1.author.name && kurs1.author.address.city :>> ",
//   kurs1.author.name,
//   kurs1.author.address.city
// );

// var aaaa = "author";
// var bbbb = "hobby";
// console.log("/n kurs1.aaaa.bbbb :>> ", kurs1[aaaa][bbbb]);
