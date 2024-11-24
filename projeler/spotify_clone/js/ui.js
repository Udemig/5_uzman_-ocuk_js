export const elements = {
  list: document.querySelector(".list"),
  form: document.querySelector("form"),
};
// * Şarkı verisine bağlı olarak ekrana cart render eden fonksiyon
export const renderCard = (songs) => {
  // Html kısmındaki cartları sıfırla
  elements.list.innerHTML = "";

  // Her şarkı verisi içn ekrana bir cart render et
  songs.forEach((song) => {
    // Card divini oluştur
    const card = document.createElement("div");
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
