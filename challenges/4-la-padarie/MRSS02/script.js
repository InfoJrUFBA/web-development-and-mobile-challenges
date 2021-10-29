let queue = [
  {
    name: "Antonio figueiredo",
    amount: 3,
  },
  {
    name: "Maria Carolina",
    amount: 1,
  },
  {
    name: "Jão Vitor",
    amount: 2,
  },
  {
    name: "Andressa Silva",
    amount: 27,
  },
];

const URL = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455826/"

function chocolate() {
    for (let x = 0; x < queue.length; x++) {
      document.getElementById("fila").innerHTML += `${queue[x].name.toUpperCase()}\n`+ "<br>" + `Quantidade: ${queue[x].amount} pães` + "<br>" + "<br>"
      document.getElementById("fila1").innerHTML += `${queue[x].name.toUpperCase()}\n`+ "<br>" + `Quantidade: ${queue[x].amount} pães` + "<br>" + "<br>"
    }

};

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

function goiaba() {
    let r = document.querySelector('#item8').value
    document.querySelector('#item8').value = ""
    if (r == "") {
     alert("Diga-me o seu nome!")
     return;
    }
    let f = parseInt(document.querySelector('#item7').value, 10)
    document.querySelector('#item7').value = null
    if (isNaN(f)) {
     alert("Diga-me quantos pães você quer!")
     return;
    }
    let a = {
      name: r,
      amount: f,
    };
    queue.push(a)
    x = queue.length
    x -= 1
    if (queue[x].amount == 71) {
      document.getElementById("fila").innerHTML = ""
      document.getElementById("fila1").innerHTML = ""
      queue.reverse();
      for (let y = 0; y < queue.length; y++) {
        document.getElementById("fila").innerHTML += `${queue[y].name.toUpperCase()}\n`+ "<br>" + `Quantidade: ${queue[y].amount} pães` + "<br>" + "<br>"
        document.getElementById("fila1").innerHTML += `${queue[y].name.toUpperCase()}\n`+ "<br>" + `Quantidade: ${queue[y].amount} pães` + "<br>" + "<br>"
      }
    } else {
    document.getElementById("fila").innerHTML += `${queue[x].name.toUpperCase()}\n`+ "<br>" + `Quantidade: ${queue[x].amount} pães` + "<br>" + "<br>"
    document.getElementById("fila1").innerHTML += `${queue[x].name.toUpperCase()}\n`+ "<br>" + `Quantidade: ${queue[x].amount} pães` + "<br>" + "<br>"
  }
};

tempo()

setInterval(function(){
    queue.shift()
    document.getElementById("fila").innerHTML = ""
    document.getElementById("fila1").innerHTML = ""
    for (let x = 0; x < queue.length; x++) {
      document.getElementById("fila").innerHTML += `${queue[x].name.toUpperCase()}\n`+ "<br>" + `Quantidade: ${queue[x].amount} pães` + "<br>" + "<br>"
      document.getElementById("fila1").innerHTML += `${queue[x].name.toUpperCase()}\n`+ "<br>" + `Quantidade: ${queue[x].amount} pães` + "<br>" + "<br>"
    }
},10000);
