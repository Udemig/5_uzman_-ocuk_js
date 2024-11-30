const url = "https://shazam.p.rapidapi.com/search?term=ceza&locale=tr";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d8b7d9a6c9msh95b988adf85f44fp1721b2jsn54008d431a03",
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
