// palindrom
// nomor 1
let kata = "tidur";

let space = kata.split("");
// console.log(space);
let reverse = space.reverse();
let gabung = reverse.join("");
// console.log(gabung);

if (kata === gabung) {
  console.log(`kata "${kata}" adalah palindrom`);
} else {
  console.log("kata bukan palindrom");
}
