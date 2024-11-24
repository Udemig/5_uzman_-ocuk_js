const url = "https://shazam.p.rapidapi.com/search?term=ceza&locale=tr";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export const getPopular = async () => {
  // Api'a istek attık
  const res = await fetch(url, options);
  // Api'dan gelen json tipindeki veriyi js nesnesine çevirdik
  const data = await res.json();

  const formattedData = data.tracks.hits.map((item) => item.track);

  return formattedData;
};

export const searchMusic = async (query) => {
  const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US`;

  const res = await fetch(url, options);

  const data = await res.json();

  const formattedData = data.tracks.hits.map((item) => item.track);

  return formattedData;
};
