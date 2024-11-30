export const elements = {
  list: document.querySelector(".list"),
  form: document.querySelector("form"),
  player: document.querySelector(".player"),
};
// * Şarkı verisine bağlı olarak ekrana cart render eden fonksiyon
export const renderCard = (songs) => {
  // Html kısmındaki cartları sıfırla
  elements.list.innerHTML = "";

  // Her şarkı verisi içn ekrana bir cart render et
  songs.forEach((song) => {
    // Card divini oluştur
    const card = document.createElement("div");

    // Cardın içerisindeki resim,şarkı adı,şarkıcı adı değerlerine eriş.Card içerisindeki ihtiyaç duyduğumuz verileri dataset özelliğiyle karta aktar
    card.dataset.title = song.title;
    card.dataset.subtitle = song.subtitle;
    card.dataset.img = song.images.coverarthq;
    card.dataset.mp3 = song.hub.actions[1].uri;

    // Oluşturulan elemana card classı ekle
    card.classList.add("card");
    // Card elemanın içeriğini belirle
    card.innerHTML = `
    
         <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt=""
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
        </figure>

              <div class="card-info">
                <h4>${song.title}</h4>
                <h4>${song.subtitle}</h4>
              </div>
    
    
    `;
    // Cardı Html'deki listeye ekle

    elements.list.appendChild(card);
  });
};

// * Ekrana loader render eden fonksiyon

export const renderLoader = () => {
  elements.list.innerHTML = `

             <div class='loader-container'>
              <div class="loader"></div>
              </div>
              `;
};

// Animasyon ekle-çıkar  yapan fonksiyon

const toggleAnimation = () => {
  // Resim elemanına eriş
  const image = elements.player.querySelector(".info img");

  // Erişilen bu resme class ekle-çıkar
  image.classList.toggle("animate");
};

// * Şarkı oynatan fonksiyon

export const renderPlayer = (songs) => {
  elements.player.innerHTML = `
   
  
      <div class="info">
        <img
          src="${songs.img}"
          alt=""
        />
        <div>
          <h5>${songs.title}</h5>
          <p>${songs.subtitle}</p>
        </div>
      </div>

      <audio
        controls autoplay
        src="${songs.mp3}"
      ></audio>
  
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>
  `;
  // Şarkının oynatılma durumunu kontrol ederek animasyon ekleme çıkarma işlemi
  // Audio elemanına eriş
  const audio = elements.player.querySelector("audio");
  // Oynatılma & durdurma olayını izle
  audio.addEventListener("play", () => toggleAnimation());
  audio.addEventListener("pause", () => toggleAnimation());
};
