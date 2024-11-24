// Apı server ile kullanıcı arasında iletişim kurmak için özelleştirilmiş yapılardır.Bu iletişimi belirli kodlar ile yapar.

// Apı lar ana olarak iki yapıdan oluşur.Birinci kısım 'baseUrl' ikinci kısım 'endpoint'.Endpointler kullanıcıların belirlenen verileri alabilmesi için özelleştirilmiş yapılardır.

// Jsonplaceholder api nın user endpoint ine istek atalım

const getUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.table(json));
};

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();
  console.table(data);
};

export { getUser, getPosts };
