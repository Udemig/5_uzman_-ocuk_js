// * Javascript Objeler

// Objeler içerisinde değerleri key-value (anahtar-değer) çiftleri halinde tutan yapılardır.Obje tanımlanırken değişken tanımlarken kullanılan var,let ve const anahtar kelimelerinden biri seçilir sonrasında bu objeye bir isim verilir.Verilen bu isimin devamında = yazılır ve {} açılır.Bu {} içerisinde key:value şeklinde objenin değerleri yazılır.

let öğrenci = {
  ad: "Kerem",
  soyad: "Kılıç",
  yaş: 15,
  öğrenciMi: true,
  hobiler: ["Yazılım", "Spor", "Müzik", "Kitap Okuma"],
  öğrenciTanıtım: function () {
    console.log(
      `Öğrenci Adı: ${this.ad} \nÖğrenci Soyad: ${this.soyad} \nÖğrenci Yaş: ${this.yaş}`
    );
  },
};

let kurum = {
  ad: "Udemig",
  kuruluşYılı: 2017,
  internetSitesi: "www.udemig.com",
};

export { öğrenci, kurum };

// console.log(öğrenci);

// console.log(öğrenci.ad);

// console.log(öğrenci.soyad);

// console.log(öğrenci.hobiler);

// console.log(öğrenci.hobiler[0]);

// öğrenci.öğrenciTanıtım();

// * entries: Bir objeyi diziye çevirir.

// console.log(Object.entries(kurum));

// {
//     ["ad", "Udemig"],
//     [("kuruluşYılı", 2017)],
//     ["internetSitesi", "www.udemig.com"];
// }
