// todo: Bir buton oluşturunuz.Bu butona tıklanınca dark-light mode özelliği çalışsın.

const changeThemeButton = document.querySelector(".change-theme");

changeThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-body");
});

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let userData = [];

async function getUserData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  userData = data;

  userData.map((user, index) => {
    document.write(`${index + 1}. kullanıcı: ${user.name} <br/>`);
  });
}

// getUserData();

const getData = async (query) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${query}`);

  const data = await response.json();

  console.log(data);
};

const form = document.querySelector("#form");

const queryInput = document.querySelector(".query-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = queryInput.value;
  getData(value);
});

// todo: Placeholder api'dan posts endopintinden istenilen veriyi alınız.Alırken api ya endpoint dışında birde id girmeniz gerekir.
