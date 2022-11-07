function createGame(player1, hour, player2,) {
  return `  
   <li>
    <figure>
      <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
      <figcaption>${player1}</figcaption>
    </figure>
    <strong>${hour}</strong>
    <figure>
      <img src="./assets/flags/icon-${player2}.svg" alt="Bandeira do ${player2}"/>
      <figcaption>${player2}</figcaption>
    <figure>
  </li>
  `
}

let delay = 0
function createCard(date, day, games, group) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h1>${group}</h1>
    <br>
    <h2>${date} <span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `

  <header>
    <img src="./assets/bg/logo-qatar-2022.png" alt="Logo da NLW" />
  </header>
    <main id="cards">
    
    ${createCard( /*card 1  pronto*/
    "20/11",
    "domingo",
    createGame("catar", "13:00", "equador"),
    "grupo a"
    )}

    ${createCard( /* car 2 pronto*/
    "21/11",
    "segunda",
    createGame("senegal", "13:00", "holanda"),
    "grupo a"
    )}

    ${createCard( /* card 3 pronto*/
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "irã") +
    createGame("eua", "16:00", "wales"),
    "grupo b"
    )}

    ${createCard( /* card 4 pronto*/
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arábia-saudita") +
    createGame("méxico", "13:00", "polônia"),
    "grupo c"
    )}

    ${createCard( /* card 5 pronto*/
    "22/11",
    "terça",
    createGame("dinamarca", "10:00", "tunísia") +
    createGame("frança", "16:00", "austrália"),
    "grupo d"
    )}

      ${createCard( /* card 6 pronto*/
    "23/11",
    "quarta",
    createGame("alemanha", "10:00", "japão") +
    createGame("espanha", "13:00", "costa-rica"),
    "grupo e"
    )}

    ${createCard( /* card 7 pronto*/
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croácia") +
    createGame("bélgica", "16:00", "canadá"),
    "grupo f"
    )}

    ${createCard( /* card 8 pronto*/
    "24/11",
    "quinta",
    createGame("suiça", "07:00", "camarões") +
    createGame("brasil", "16:00", "sérvia"),
    "grupo g"
    )}

    ${createCard( /* card 9 pronto*/
    "24/11",
    "quinta",
    createGame("uruguai", "10:00", "coreia-do-sul") +
    createGame("portugal", "13:00", "gana"),
    "grupo h"
    )}

    ${createCard( /* card 10 pronto*/
    "25/11",
    "sexta",
    createGame("catar", "10:00", "senegal") +
    createGame("holanda", "13:00", "equador"),
    "grupo a"
    )}

    ${createCard( /* card 11 pronto*/
    "25/11",
    "sexta",
    createGame("wales", "07:00", "irã") +
    createGame("inglaterra", "16:00", "eua"),
    "grupo b"
    )}

    ${createCard( /* card 12 pronto*/
    "26/11",
    "sábado",
    createGame("polônia", "10:00", "arábia-saudita") +
    createGame("argentina", "16:00", "méxico"),
    "grupo c"
    )}

    ${createCard( /* card 13 pronto*/
    "26/11",
    "sábado",
    createGame("tunísia", "07:00", "austrália") +
    createGame("frança", "13:00", "dinamarca"),
    "grupo d"
    )}

    ${createCard( /* card 14 pronto*/
    "27/11",
    "domingo",
    createGame("japão", "07:00", "costa-rica") +
    createGame("espanha", "16:00", "alemanha"),
    "grupo e"
    )}

    ${createCard( /* card 15 pronto*/
    "27/11",
    "domingo",
    createGame("bélgica", "10:00", "marrocos") +
    createGame("croácia", "13:00", "canadá"),
    "grupo f"
    )}

      ${createCard( /* card 16 pronto*/
    "28/11",
    "segunda",
    createGame("camarões", "07:00", "sérvia") +
    createGame("brasil", "13:00", "suiça"),
    "grupo g"
    )}

    ${createCard( /* card 17 pronto*/
    "28/11",
    "segunda",
    createGame("coreia-do-sul", "10:00", "gana") +
    createGame("portugal", "16:00", "uruguai"),
    "grupo h"
    )}

    ${createCard( /* card 18 pronto*/
    "29/11",
    "terça",
    createGame("equador", "12:00", "senegal") +
    createGame("holanda", "12:00", "catar"),
    "grupo a"
    )}

    ${createCard( /* card 19 pronto*/
    "29/11",
    "terça",
    createGame("irã", "16:00", "eua") +
    createGame("wales", "16:00", "inglaterra"),
    "grupo b"
    )}

    ${createCard( /* card 20 pronto*/
    "30/11",
    "quarta",
    createGame("polônia", "16:00", "argentina") +
    createGame("arábia-saudita", "16:00", "méxico"),
    "grupo c"
    )}

    ${createCard( /* card 21 pronto*/
    "30/11",
    "quarta",
    createGame("tunísia", "12:00", "frança") +
    createGame("austrália", "12:00", "dinamarca"),
    "grupo d"
    )}

    ${createCard( /* card 22 pronto*/
    "01/12",
    "quinta",
    createGame("japão", "16:00", "espanha") +
    createGame("costa-rica", "16:00", "alemanha"),
    "grupo e"
    )}

    ${createCard( /* card 23 pronto*/
    "01/12",
    "quinta",
    createGame("croácia", "12:00", "bélgica") +
    createGame("canadá", "12:00", "marrocos"),
    "grupo f"
    )}

    ${createCard( /* card 24 pronto*/
    "02/12",
    "sexta",
    createGame("sérvia", "16:00", "suiça") +
    createGame("camarões", "16:00", "brasil"),
    "grupo g"
    )}

    ${createCard( /* card 25 pronto*/
    "02/12",
    "sexta",
    createGame("coreia-do-sul", "12:00", "portugal") +
    createGame("gana", "12:00", "uruguai"),
    "grupo h"
    )}
    </main>
`
