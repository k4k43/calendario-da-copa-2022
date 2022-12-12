function createGame(player1, scoreboard, player2) {
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
    "13/12",
    "terça-feira",
    createGame("argentina", "16:00", "croácia"),
    "1° semifinal"
    )}

    ${createCard( /* car 2 pronto*/
    "14/12",
    "quarta-feira",
    createGame("frança", "16:00", "marrocos"),
    "2° semifinal"
    )}
    </main>
`
