let result = {
  name: "Sajal",
  age: "25",
  proffesion: "It JOB",
  car: "creta",
  address: {
    add1: "279",
    add2: "Vesu",
    City: "Surat",
  },
};

var Keys = Object.keys(result).sort();
var size = Object.keys(result).length;

const sorted = Keys
  .reduce((accumulator, key) => {
    accumulator[key] = result[key];
    return accumulator;
  }, {});

let str = "";

Object.keys(sorted).forEach((key) => {
  if (typeof sorted[key] != typeof result) {
    str += sorted[key];
  }
});

console.log(str)


