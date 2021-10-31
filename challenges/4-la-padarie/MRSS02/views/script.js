

const URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/"


async function tempo() {
  const response = await fetch(URL,
        {
            method: 'GET',
            headers: {},
            credentials: 'same-origin',
        }
  );
  const tempos = await response.json();
  let isitraining;
  console.log(tempos.consolidated_weather[0].weather_state_abbr)
  switch (tempos.consolidated_weather[0].weather_state_abbr) {
    case "sn":
       isitraining = "neve"
      break;
      case "sl":
         isitraining = "neve e/ou chuva"
        break;
      case "h":
         isitraining = "granizo"
      break;
      case "t":
         isitraining = "chuva e trovões"
      break;
      case "hr":
         isitraining = "chuva forte"
      break;
      case "lr":
         isitraining = "chuva leve"
      break;
      case "s":
         isitraining = "pancadas de chuva"
      break;
      case "hc":
         isitraining = "fortemnte nublado"
      break;
      case "lc":
         isitraining = "levemente nublado"
      break;
      case "c":
         isitraining = "céu limpo"
      break;
    default:
         isitraining = "indisponível"
      break;
  }
  document.getElementById("barra").innerHTML = "Previsão do tempo para Salvador: "
  document.getElementById("barra").innerHTML += isitraining
  document.getElementById("barra").innerHTML += "; "
  document.getElementById("barra").innerHTML += `Temperatura: ${Math.floor(tempos.consolidated_weather[0].min_temp)}°C mínima, ${Math.floor(tempos.consolidated_weather[0].max_temp) + 1}°C máxima`

}


tempo()
