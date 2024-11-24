// * Javascript Değişkenler

// Değişkenler javascript de verileri kolay bir şekilde yönetmke için kullanılan yapılardır. var

var name = "Yusuf";
// var name = "Kerem";

// console.log(name);

// * Javascript in güncel versiyonu (ES6) ile birlikte var anahtar kelimesi kullanılmaz bunun yerine let ve const kullanacağız.

let kurum = "Udemig";
kurum = "Udemig Akademi";
// let kurum = "Udemig";

const ders = "Javascript";
// ders = "Javascript Dersi";

// console.log(kurum);
// console.log(ders);

// const ve let var anahtar kelimesinin eksiklerini gidermek için kullanılır.Bu iki anahtar kelime arasındaki fark ise let ile tanımlanan bir değişkenin değeri sonrasında değiştirebilirken const ile tanımlanan bir değişkenin değeri değiştirilemez.

// * Javascript Fonksiyonlar

// Fonksiyonlar bir işi yapmak için özellştirilmiş kod parçacıklarıdır.

function toplama() {
  let sayı1 = 10;
  let sayı2 = 30;

  let toplam = sayı1 + sayı2;
  console.log(toplam);
}
// toplama();
// toplama();
// toplama();
// toplama();
// toplama();

// Fonksiyonlarda parametre kavramı

function parametreliToplama(a, b) {
  let toplam = a + b;
  console.log(toplam);
}
// parametreliToplama(12, 45);
// parametreliToplama(34, 56);

// Fonksiyonlarda return kavramı

function ürünleriTopla(x, y, z) {
  let ürünToplam = x + y + z;
  return ürünToplam;
}
const ürünler = ürünleriTopla(12, 34, 56);

document.write(`Depodaki ürünlerin toplam sayısı : ${ürünler} <br/>`);

// * Javascript Arrow Functions
// Arrow (ok) functions ES6 sürümü ile gelen güncel bir fonksiyon tanımlama metodur.

// * Javascript Arrow Functions tanımlanırken öncelikle tıpkı bir değişken tanımlar gibi const yada let anahtar kelimesi seçilir sonrasında bu fonksiyona bir isim verilir.Bu isimden sonra = () => { } oluşturulur.Buradaki {} bizim fonksiyonumuzun işlevini gerçekleştireceği kısımdır. () ise bu fonksiyonun parametreleri alacağı kısımdır.

// function toplama() {
//   let sayı1 = 10;
//   let sayı2 = 30;

//   let toplam = sayı1 + sayı2;
//   console.log(toplam);
// }

const toplamaİşlemi = () => {
  let sayı1 = 23;
  let sayı2 = 45;
  let toplam = sayı1 + sayı2;
  console.log(toplam);
};
// toplamaİşlemi();

let toplamaİşlemiParametreli = (sayı1, sayı2) => {
  let sonuç = sayı1 + sayı2;
  console.log(sonuç);
};
// toplamaİşlemiParametreli(44, 98);

// let çarpmaİşlemi = (x, y) => {
//   let çarpım = x * y;
//   return çarpım;
// };
let çarpmaİşlemi = (x, y) => x * y;
const çarpımSonuç = çarpmaİşlemi(4, 3);
document.write(`Çarpım Sonuç ${çarpımSonuç} <br/>`);

// * Spread Operatör

// Spread operatör bir diziyi veya objeyi yaymak için kullanılır.Bir dizinin veya nesnenin elemanlarını başka bir diziye eklemek için kullanılır.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2];
// console.log(newArray);

const kişi = {
  id: 1,
  name: "Yusuf",
  surname: "YAMAN",
};
// console.log(kişi);
// Yeni oluşturulan objeye önceki bir objenin değerlerini almasını ve bunun üzerine yeni değerlere sahip olması gerektiğini Spread Operatör sayesinde söyledik.
const student = {
  ...kişi,
  no: 12345,
};
// console.log(student);
document.write(` -------------------------------------- <br/>`);

// * For of  döngüsü

//  For of döngüsü bir dizinin elemanlarını dönmek için kullanılır

const kişiler = ["Yusuf", "Kerem", "Mehmet", "Hakan"];

for (const kişi of kişiler) {
  document.write(` ${kişi} <br/>`);
}

// * Class Yapısı

// * Javascript de yer alan class yapısı içerisindeki metotlar ve özellikler dolayısıyla kullanılır.

class Araba {
  constructor(marka, model, yıl) {
    this.marka = marka;
    this.model = model;
    this.yıl = yıl;
  }
}

const araba1 = new Araba("Ford", "Mustang", 1970);

console.log(araba1);

// todo: Bir kişi classı oluşturunuz.Bu class dışarından isim,soyisim,yaş şeklinde ifadeleri alsın.Sonrasında bu classın örneğini alıp kullanınız.
