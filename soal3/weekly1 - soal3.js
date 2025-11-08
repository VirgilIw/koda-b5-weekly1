// gunakan callback

const celciTofah = (value, cb) => {
  return cb(value);
};

const fahrenheit = (celci) => {
  let celciToFahren = (celci * 9) / 5 + 32;
  return `suhu fahrenheit : ${celciToFahren}`;
};

console.log(celciTofah(25, fahrenheit));
