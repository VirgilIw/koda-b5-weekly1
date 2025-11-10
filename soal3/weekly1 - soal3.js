// gunakan callback

const celciTofah = (value) => {
  let celciToFahren = (value * 9) / 5 + 32;
  console.log(celciToFahren);
};

const fahrenheitToCelci = (celci) => {
  const c = ((celci - 32) * 5) / 9;
  console.log(`suhu fahrenheit : ${c}`);
};

fahrenheitToCelci(79);

celciTofah(26);
