// pakai setTimeOut untuk tampilan delay output

const showUntilN = (angka) => {
  let start = 0;
  for (let i = start; i <= angka; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
};

showUntilN(10);
