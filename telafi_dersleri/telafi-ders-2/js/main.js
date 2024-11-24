// Bağlantı Kontrolü
// console.log(`Javascripten selamlar`);

// * Javascript DOM ( Document Object Modal)

// Html kısımındaki body etiketin kapladığı alanın javascript'deki karşılığı 'document' dir.

// Bu alana çıktı metotları konusunda gördüğümüz document.write ile yazı yazdırabildiğimizi görmüştük.

// Javascript'de Html tarafında oluşturulan elemanlara erişerek bu elemanlara manpülasyonlar yapabiliriz.

// Html'deki elemanları manipüle edebilmek için önce Javascript kısımında bu elemanları Html'den çekmemiz gerekir.

// document.getElementsByTagName() ==>Bu metot  adı verilen elemanı Htmlden alıp kullanmamızı sağlar

const title4 = document.querySelector("h4");

// console.log(title4);

// document.getElementsByClassName() ==>Bu metot class adı verilen elemanı Htmlden alıp kullanmamızı sağlar.
const title = document.getElementsByClassName("title");

// console.log(title);

// document.getElementById() ==>Bu metot id'si verilen elemanı Htmlden alıp kullanmamızı sağlar.

const educations1 = document.getElementById("educations-1");

// console.log(educations1);

// document.querySelector() ==> Elemanlara class adı,id,tag name gibi özelliklerle erişmek için kullanılır.Fakat bu metot içerisinde girilen class adının başına '.' id nin başına '#' konulmasını ister.

const educations2 = document.querySelector(".educations-2");

const educations3 = document.querySelector("#educations-3");

// console.log(educations2);
// console.log(educations3);

// educations3.style.backgroundColor = "red";
// educations3.style.fontSize = "40px";
// educations3.style.padding = "20px 30px";
// educations3.style.color = "white";
// educations3.style.textTransform = "uppercase";

// * Javascript de bir elemana class ekleme
educations3.classList.add("educations-3");

// * Javascript de bir elemandan class çıkarma
educations2.classList.remove("educations-3");

// * Javascript de bir elemandan class toggle ile ekleme çıkarma

const changeButton = document.querySelector("#change-btn");

changeButton.addEventListener("click", () => {
  educations2.classList.toggle("background");
});

changeButton.addEventListener("click", () => {});
const title6 = document.querySelector("#title-4");

const addButton = document.getElementById("add-btn");

const removeButton = document.getElementById("remove-btn");

addButton.addEventListener("click", () => {
  title6.classList.add("educations-3");
});

removeButton.addEventListener("click", () => {
  title6.classList.remove("educations-3");
});

// todo: Div ekle butonuna tıklayınca container içerisinde eleman ekleyiniz.

// Div ekle butonuna eriş
const addDivButton = document.querySelector(".add-div-btn");

// container eriş

const container = document.querySelector(".container");

// console.log(addDivButton);

addDivButton.addEventListener("click", () => {
  // createElement==> Html'de yeni bir eleman yaratmak için kullanılır.
  const newDiv = document.createElement("div");
  // textContent ==> Bir elemanın içeriğini belirler.
  newDiv.textContent = "Yeni Div";
  // Bu elemana bir class ekle
  newDiv.classList.add("newDiv");
  //  appendChild==>Oluşturulan elemanı bir kapsayıcı içerisine ekler.
  container.appendChild(newDiv);
});

// Div sil butonuan eriş

const deleteDivButton = document.querySelector(".delete-div-btn");

// console.log(deleteDivButton);

deleteDivButton.addEventListener("click", () => {
  if (container.lastChild) {
    // removeChild ==> Bir elemanı kaldırmak için kullanılır.Bu metot bizden hangi elemanın kaldırılacağının index'ini ister
    container.removeChild(container.lastChild);
  }
});

// todo: Bir buton oluşturunuz.Bu butona tıklanınca dark-light mode özelliği çalışsın.

// * Javascript Moduler Dosya Yönetimi

import { userInfo, selamlar } from "./second.js";

console.log(userInfo);

selamlar();

import users from "./info.js";

console.log(users);
