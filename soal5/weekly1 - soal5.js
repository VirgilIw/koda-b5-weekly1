// pakai setTimeOut untuk tampilan delay output

const showUntilN = (angka) => {
  let start = 1;
  for (let i = start; i <= angka; i++) {
    setTimeout(() => {
      console.log(i);
      //
      if (i === angka) {
        setTimeout(() => {
          console.log("finished");
        }, 1000);
      }
    }, i * 1000);
  }
};

showUntilN(10);
