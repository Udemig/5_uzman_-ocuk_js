import { getPopular, searchMusic } from "./api.js";
import { elements, renderCard, renderLoader } from "./ui.js";

// Sayfanın yüklendiği anı izleyip ilgili verileri alan fonksiyon

document.addEventListener("DOMContentLoaded", async () => {
  // Loader'ı ekrana bas
  renderLoader();
  // Api'a istek atıp verileri aldık
  getPopular()
    .then((data) => renderCard(data))
    .catch((error) => {
      console.log(error);
      alert("Üzgünüz bir hata oluştu");
    });
});

elements.form.addEventListener("submit", async (e) => {
  // Form gönderildiğinde sayfanın yenilenmesini engelle
  e.preventDefault();
  // İnput içerisindeki değere eriş
  const query = e.target[0].value;

  // Eğer input boşsa kullanıcıya uyarı ver
  if (query === "") {
    return alert("Lütfen geçerli bir metin aratın");
  }

  // Ekrana loader bas
  renderLoader();
  // Api'a istek at ve gelen verilerle ekrana card render et
  searchMusic(query)
    .then((data) => renderCard(data))
    .catch((error) => {
      console.log(error);
      alert("Üzgünüz bir hata oluştu");
    });
});
