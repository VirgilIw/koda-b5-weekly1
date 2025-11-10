// contoh 5 buah build in method

// =================
// reduce

// reduce() itu method array untuk mengubah seluruh array menjadi 1 output akhir (1 nilai final).
// nilai final itu bisa:
// number
// string
// object
// array juga bisa (bisa build ulang array yg baru)
// bahkan nested structure

const price = [10000, 20000, 5000];

const total = price.reduce((acc, curr) => acc + curr, 0);

console.log("output: " + total); // output: 35000

// =================
// includes

// buat validasi UI condition: cek data apakah sudah ada / user sudah pilih item / cek role user.
const roles = ["admin", "user"];
console.log(roles.includes("admin")); // output: true

// =================
// find

// cari data user by id ketika pilih item dropdown, cari produk pas klik detail.
const user = [
  { id: 1, name: "Sheila" },
  { id: 2, name: "Brandon" },
];

const selectedUser = user.find((item) => item.id === 2);
console.log(selectedUser); // output: { id:2, name:"Brandon" }

// =================
// sort

// buat sorting data table, sort product by price sebelum ditampilkan.
const angka = [4, 1, 10, 2];
angka.sort((a, b) => a - b);
console.log(angka); // output: [1,2,4,10]

// =================
// slice

// pagination (ambil hanya 10 data per page), preview data.
const data = ["a", "b", "c", "d", "e"];
const page1 = data.slice(0, 3);
console.log(page1); // output: ["a","b","c"]
