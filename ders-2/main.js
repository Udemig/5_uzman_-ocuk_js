import { dersler } from "./second.js";

let name = "Yusuf";

const age = 22;

// typeof ==> Bir verinin veri tipi kontrolünü yapar
// console.log(typeof name);
// console.log(typeof age);

let metin =
  "bilgisayar mühendisi veya adayisindir.. size hala format atabilir misin diye mi soruluyor";

document.write("Metin: ", metin, "<br/>");

// ! Javascript String Metotları

// * includes ==> Bir string içerisinde belirtilen ifade var mı yok mu bunu kontrol eder.Varsa 'true' yoksa 'false' döndürür.

document.write(
  "Metin içerisinde kerem kelimesi var mı ?: ",
  metin.includes("kerem"),
  "<br/>"
);
document.write(
  "Metin içerisinde format kelimesi var mı ?: ",
  metin.includes("format"),
  "<br/>"
);

// * startsWith ==> Bir string ifadenin belirlenen kelime ie başlayıp başlamadığını kontrol eder.Başlıyorsa 'true' başlamıyorsa 'false' döndürür.

document.write(
  "Metin Kerem ile mi başlıyor ?: ",
  metin.startsWith("kerem"),
  "<br/>"
);

document.write(
  "Metin Bilgisayar ile mi başlıyor ? : ",
  metin.startsWith("bilgisayar"),
  "<br/>"
);

// ? HATIRLATMA

// * toLocaleLowerCase ==> Bir string ifadenin her harfini küçük harf yapar.

document.write("Metin her harfi küçük  : ", metin.toLocaleLowerCase(), "<br/>");

// * toLocaleUpperCase ==> Bir string ifadenin her harfini büyük harf yapar.

document.write("Metin her harfi büyük  : ", metin.toLocaleUpperCase(), "<br/>");

// * indexOf ==> Bir string içerisinde belirtilen kelimenin kaçıncı sırada olduğunu bulur.

document.write(
  "Metin içerisinde 'mühendisi' kelimesi kaçıncı sırada   : ",
  metin.indexOf("diye"),
  "<br/>"
);
document.write(
  `--------------------------------------------------------------- <br/>`
);

// ! Javascript Diziler(Array)

// let sayı1 = 1;
// let sayı2 = 2;
// let sayı3 = 3;
// let sayı4 = 4;
// let sayı5 = 5;

let sayılar = [1, 2, 3, 4, 5];

document.write(`Sayılar Dizi: ${sayılar} <br/>`);

document.write(`Sayılar Dizisinin 1. Elemanı: ${sayılar[0]} <br/>`);

// * Javascript Dizi Metotları

// ? Hatırlatama

// * push ==> Bir diziye sondan eleman ekler.Bu metot ekleme yapacağı elemanı () ler içerisinde ister.
sayılar.push(6);

document.write(`Sayılar Dizi-1: ${sayılar} <br/>`);

// * pop ==> Bir dizinin sonundan eleman çıkarır.
sayılar.pop();

document.write(`Sayılar Dizi-2: ${sayılar} <br/>`);

// * unshift ==> Bir dizinin başına eleman ekler.Bu metot ekleme yapacağı elemanı () ler içerisinde ister.
sayılar.unshift(12234);

document.write(`Sayılar Dizi-3: ${sayılar} <br/>`);

// * shift ==> Bir dizinin başından eleman çıkarır.
sayılar.shift();

document.write(`Sayılar Dizi-4: ${sayılar} <br/>`);

let kişiler = ["Yusuf", "YAMAN", "Kerem", "Mehmet"];

// * contact ==> Birden fazla elemanı  birleştirmek için kullanılır.Dizileri,stringleri birlestirmek için kullanılır.

let karmaDizi = sayılar.concat(kişiler, "UDEMİG");

document.write(`Karma Dizi: ${karmaDizi} <br/>`);

// * slice  ==> Bir dizinin belirtilen aralığını almak için kullanılır.

let sliceDizi = karmaDizi.slice(3);

document.write(`Slice Dizi: ${sliceDizi} <br/>`);

// Dizilerde Döngü Metotları

document.write(`Dizi: ${karmaDizi} <br/>`);

// document.write(`Dizi 1. Elemanı: ${karmaDizi[0]} <br/>`);
// document.write(`Dizi 2. Elemanı: ${karmaDizi[1]} <br/>`);
// document.write(`Dizi 3. Elemanı: ${karmaDizi[2]} <br/>`);
document.write(
  `--------------------------------------------------------------- <br/>`
);

// * forEach  ==> Bir dizinin tüm elemanları için işlemler gerçekleştirmek için kullanılır.

karmaDizi.forEach((item, i) => {
  document.write(`Dizinin ${i + 1}. Elemanı: ${item} <br/>`);
});

let karmaDizi1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// * map ==> Bir dizinin her elemanın dönerken geriye yeni bir dizi oluşturur.

// ? Peki map ve forEach arasındaki fark nedir ?

// map bir dizinin elemanlarını değiştirmek için kullanılır.(2 ile çarp) forEach ise bir dizinin elemanlarını sadece döner.Yani bir dizinin elemanları güncellenecekse bu noktada map kullanılır.Sadece dönülecekse ise forEach kullanılır.

let yeniKarmaDizi = karmaDizi1.map((number) => number * 2);

document.write(`Dizi: ${yeniKarmaDizi} <br/>`);

document.write(`Yeni Dizi: ${yeniKarmaDizi} <br/>`);

document.write(
  `--------------------------------------------------------------- <br/>`
);

// * filter ==> Bir dizinin elemanlarını filterelemek için kullanılır

let karışıkDizi = [1, 2, 3, true, "Yusuf", "YAMAN"];

document.write(`Karışık Dizi: ${karışıkDizi} <br/>`);

const newArray = karışıkDizi.filter((item) => {
  if (typeof item === "number") {
    return item;
  } else {
    return "";
  }
});
document.write(`Dizi: ${newArray} <br/>`);

let dizi = [123, 98656, 34564, 97674];

let array = dizi.filter((item) => {
  return item > 500;
});

document.write(`Dizi: ${array} <br/>`);

document.write(
  `--------------------------------------------------------------- <br/>`
);
// * sort ==> Bir dizinin elemanlarını sıralamak için kullanılır.

const sıralıDizi = dizi.sort((a, b) => {
  return b - a;
});

document.write(`Dizi: ${dizi} <br/>`);

document.write(`Sıralı Dizi: ${sıralıDizi} <br/>`);

let iller = ["Malatya", "Konya", "Ankara", "İstanbul", "İzmir"];

document.write(`İller: ${iller.sort()} <br/>`);

// * Javascript Module Yapısı

// Javascript de kodlarımızı daha kolay şekilde yönetmek için module yapısı kullanılır.Bu kullanımda bir tane ana javascript dosyası seçilir.Sonrasında bu dosyanın ana javascript dosyası olduğunu belirtmek için Html de bağlantı kurulurken type='module' yazılır.Bir dosyada oluşturulan veriyi dışarı  çıkartmak için export edilir.Kullanılacağı dosyada ise import edilir.

console.log(dersler);
