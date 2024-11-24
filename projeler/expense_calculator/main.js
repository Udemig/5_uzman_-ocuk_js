// ! Bağlantı Kontrolü
// console.log(`Expense Calculator'dan selamlar !!!`);

// ! Html'deki elemanlara erişme

const form = document.querySelector("#expense-form");
// console.log(form);

const nameInput = document.querySelector("#expense-name");

// console.log(nameInput);

const amountInput = document.querySelector("#expense-amount");

// console.log(amountInput);

const expenseList = document.querySelector("#expense");

// console.log(expenseList);

const totalAmountItem = document.querySelector(".total-amount");

// console.log(totalAmountItem);

// Toplam Fiyat değerini yönetmek için değişken

let totalAmount = 0;

// Harcama adı ve fiyatı için değişkenler tanımla
let expenseName;
let expenseAmount;

// ! Form gönderildiğinde formun değerlerini alarak ekrana harcama elemanı oluşturma
form.addEventListener("submit", (e) => {
  // Form gönderildiğinde sayfa yenilemeyi iptal et
  e.preventDefault();
  // Inputların içerisindeki değerlere eriş
  expenseName = nameInput.value;
  expenseAmount = parseInt(amountInput.value);

  if (!expenseName && !expenseAmount) {
    alert(`İnput alanları boş bırakılamaz !!`);
    // alert verildikten sonra yapıyı durdur
    return;
  }
  // İnputlardaki değerlere bağlı olarak total miktarı güncelle
  totalAmount += expenseAmount;
  totalAmountItem.innerText = ` Toplam Harcama:${totalAmount} TL`;

  // Inputlardaki değerlere eriştikten sonra bunları kullanarak harcama kartı oluşturma

  // Eleman oluşturma
  let expenseDiv = document.createElement("div");

  // Elemana class ekleme

  expenseDiv.classList.add("expense-item");

  // Elemanın içeriğini belirleme

  expenseDiv.innerHTML = `
          <h2>${expenseName}</h2>
          <h3>${expenseAmount} TL</h3>
          <img src="./images/trash.png" id='delete-element' alt="" />
  `;

  // Elemanı Html kısmına ekleme
  expenseList.appendChild(expenseDiv);

  // Inputların içini sıfırla

  nameInput.value = "";
  amountInput.value = "";

  console.log(expenseDiv);
});

// Silme işlevi gerçekleştiren fonksiyon

expenseList.addEventListener("click", (e) => {
  const element = e.target;

  // Eğer delete-element id li elemana tıklanırsa silme işlemi yapılsın

  if (element.id == "delete-element") {
    // parentElement ==> Bir elemanın kapsam elemanına erişmek için kullanılır
    element.parentElement.remove();

    //Total miktarı güncelle
    totalAmount -= expenseAmount;
    totalAmountItem.innerText = ` Toplam Harcama:${totalAmount} TL`;
  }
});
