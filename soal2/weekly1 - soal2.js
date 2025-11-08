// fungsi tampilkan tabel perkalian == output
// 1 input parameter besar dari tabel perkalian
// kolom dan baris gunakan looping

const genMultiplicationTable = (tableSize) => {
  let start = 1;

  for (let i = start; i <= tableSize; i++) {
    let table = [];
    for (let j = start; j <= tableSize; j++) {
      table = [...table, i * j];
    }
    console.log(table);
  }
};

genMultiplicationTable(5);
