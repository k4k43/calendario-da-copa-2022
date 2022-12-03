function createGame(player1, scoreboard, player2,) {
  return `  
   <li>
    <figure>
      <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
      <figcaption>${player1}</figcaption>
    </figure>
    <strong>${scoreboard} </strong>
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
    "03/12",
    "sábado",
    createGame("holanda", "12:00", "eua"),
    "1° oitavas"
    )}

    ${createCard( /* car 2 pronto*/
    "03/12",
    "sábado",
    createGame("argentina", "16:00", "austrália"),
    "2° oitavas"
    )}

    ${createCard( /* card 3 pronto*/
    "04/12",
    "domingo",
    createGame("frança", "12:00", "polônia"),
    "3° oitavas"
    )}

    ${createCard( /* card 4 pronto*/
    "04/12",
    "domingo",
    createGame("inglaterra", "16:00", "senegal"),
    "4° oitavas"
    )}

    ${createCard( /* card 5 pronto*/
    "05/12",
    "segunda",
    createGame("japão", "12:00", "croácia"),
    "5° oitavas"
    )}

      ${createCard( /* card 6 pronto*/
    "05/12",
    "segunda",
    createGame("brasil", "16:00", "coreia-do-sul"),
    "6° oitavas"
    )}

    ${createCard( /* card 7 pronto*/
    "06/12",
    "terça",
    createGame("marrocos", "12:00", "espanha"),
    "7° oitavas"
    )}

    ${createCard( /* card 8 pronto*/
    "06/12",
    "terça",
    createGame("portugal", "16:00", "suiça"),
    "8° oitavas"
    )}
    </main>
`
