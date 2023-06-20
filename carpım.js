const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hangi sayının çarpım tablosunu görmek istersiniz?: ', (sayi) => {
  // Kullanıcıdan sayıyı aldık

  // Çarpım tablosunu oluşturup ekrana yazdırma işlemi
  console.log(`--- ${sayi}'nin Çarpım Tablosu ---`);
  for (let i = 1; i <= 20; i++) {
    console.log(`${sayi} x ${i} = ${sayi * i}`);
  }

  rl.close();
});
