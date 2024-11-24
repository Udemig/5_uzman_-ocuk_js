// Js Bağlantı
// console.log("Bağlantı Kontrolü");

// * Javascript Değişkenler

// var,let,const

var isim = "Yusuf";
// var isim = "YAMAN"; var anahtar kelimesi değişken tanımlarken aynı değişkeni tekrardan tanımlamamıza olanak tanır.Bundan dolayı güncel projelerde var kullanılmaz.

document.write(isim, "<br/>");

let soyisim = "YAMAN";
// let soyisim = "YAMAN"; let ile tanımlanan bir değişkenin yeniden tanıtılması durumunda hata verir.

document.write(soyisim, "<br/>");

const yaş = 22;
// const yaş = 22; const ile tanımlanan bir değişkenin yeniden tanıtılması durumunda hata verir.

document.write(yaş, "<br/>");

// ? Peki let ve const arasındaki fark nedir ?

// ! let ve const arasındaki fark let ile tanımlanan bir değişkenin içeriği güncellenebilir.Fakat const ile tanımlanan değişkenler doğrudan 'GÜNCELLENEMEZ'.

let takım = "Türkiye";

document.write("Takım: ", takım, "<br/>");

takım = "Almanya";

document.write("Takım-1 : ", takım, "<br/>");

const kurum = "Emaartech";

document.write("Kurum : ", kurum, "<br/>");

// kurum = "Udemig"; const ile tanımlanan değişkenlerin içeriği doğrudan güncellenemez.

document.write("Kurum-1 : ", kurum, "<br/>");

//  Javascript de metin ifadeleri yazarken "" içerisinde yazarız.Sayı ifadeleriniyse direkt yazarız.

// ! typeof ==> Javascript de bulunan yapıların veri tipini belirlemek için kullanılır.Bu metot hangi verinin veri tipi belirlenecekse bunun tespit eder.Kullanımysa verinin öncesinde yazılması şeklindedir.

document.write("Kurumun veri tipi : ", typeof "Udemig", "<br/>");

// * Javascript Fonksiyonlar

// const array = [
//   { id: 1, name: "Yusuf", point: 1234565432 },
//   { id: 2, name: "Kerem", point: 1232 },
//   { id: 3, name: "Mehmet", point: 232 },
// ];

// console.log(array);

// // const newArray = array.filter(function (x) {
// //   return x.point > 1500;
// // });
// const newArray = array.filter((x) => x.point > 1500);

// console.log(newArray);

function toplama() {
  let sayı1 = 4;
  let sayı2 = 10;
  let toplam = sayı1 + sayı2;
  document.write("Toplam:" + toplam + "<br/>");
}

toplama();

function toplama1(a, b) {
  let toplam = a + b;
  document.write("Toplam-1:" + toplam + "<br/>");
}

toplama1(12, 44);

function stokBul(alınan, satılan) {
  let stok = alınan - satılan;

  return stok;
}

const stok = stokBul(1000, 200);

document.write("Stok son durum:", stok, "<br/>");

// * Arrow Functions

// ES6 ile gelen yeniliklerden olan arrow functions(ok fonksiyonları) daha modern fonksiyon tanımlama yöntemidir.

// Normal fonksiyon tanımlarken function anahtar kelimesi kullanılırken arow functionlarda var,let ve const anahtar kelimeleri kullanılır.Sonrasında bu fonksiyona bir isim verilir.Verilen bu isimin sonrasında =()=>{} yapısı oluşturulur.Buradaki () fonksiyonun  parametre alacağı kısımdır. {} içerisiyse fonksiyonun gerçekleştireceği işlem kısımıdır.

// ? Dışarıdan alınan 3 adet sayının toplamını hesaplauyan arrow function oluşturunuz.

let toplamaİşlemi = (a, b, c) => {
  let toplam = a + b + c;

  console.log("Toplam: ", toplam);
};

// toplamaİşlemi(3, 4, 5);

let toplamaİşlemi2 = (x, y, z) => x + y + z;

// console.log(toplamaİşlemi2(1, 2, 3));

// todo: Kullanıcının vize ve final notlarını alan ve bu notlara göre üniversite dönem notunu hesaplayan arrow funciton oluşturunuz.[Üniveriste dönem notu vizenin %40 finalin %60 ile hesaplanır]

let ortalamaHesapla = (vize, final) => {
  let dönemOrtalama = vize * 0.4 + final * 0.6;
  document.write("Dönem Ortalam:", dönemOrtalama, "<br/>");
};

ortalamaHesapla(50, 80);

// * Javascript Class Yapısı

class Kişi {
  // Kurucu Metot
  constructor(yaş) {
    this.isim = "Yusuf";
    this.soyisim = "YAMAN";
    this.yaş = yaş;
  }

  tanıtım() {
    document.write(
      "Kullanıcı isim:",
      this.isim,
      " kullanıcı yaş: ",
      this.yaş,
      "<br/>"
    );
  }
}

const kişi = new Kişi(22);

console.log(kişi);

class Araba {
  constructor(marka, model, yakıtTürü, renk) {
    this.marka = marka;
    this.model = model;
    this.yakıtTürü = yakıtTürü;
    this.renk = renk;
  }

  tanıtım() {
    document.write(
      this.marka,
      " nin",
      this.model,
      " modelinin  ",
      this.yakıtTürü,
      " li arabalarının renk çeşitleri:",
      this.renk
    );
  }
}

const araba = new Araba("BMW", "X5", "benzin", ["Kırmızı", "Mavi", "Beyaz"]);

console.log(araba);

araba.tanıtım();

// todo: Kişi adında bir class oluşturunuz.İsim,soyisim,yaş,okul değişkenlerini dışarıdan alıp bunları bir metot ile ekrana yazdırın.
