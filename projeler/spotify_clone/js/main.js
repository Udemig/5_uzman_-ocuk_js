import { getPopular, searchMusic } from "./api.js";
import { elements, renderCard, renderLoader, renderPlayer } from "./ui.js";

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
// Form gönderildiğinde inputtaki değere erişip api'dan ilgili şarkı verisini alarak ekrana kart render et
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

// Şarkı listesindeki elemanlara tıklanma olayını izle ve ilgili şarkıyı render et

elements.list.addEventListener("click", (e) => {
  // Eğer play butonuna tıklanırsa şarkı oynatma özelliğini aktif et
  if (e.target.className === "play") {
    // Tıklanılan play butonunun kapsam elemanı olan card a eriş
    const card = e.target.parentElement.parentElement;
    // Card elemanının sahip olduğu verileri bir değişkene aktar
    const data = card.dataset;
    // Card içerisinden erişilen datayla şarkı oynatma alanını render et
    renderPlayer(data);
  }
});
