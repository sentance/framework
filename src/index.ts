import axios from "axios";

const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://www.sazka.cz/api/draw-info/draws/universal/extra-renta/154";

axios
  .get(corsProxyUrl + targetUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
