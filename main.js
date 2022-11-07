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
    ${createCard(
    "20/11",
    "domingo",
    createGame("brasil", "16:00", "sérvia") +
    createGame("brasil", "16:00", "sérvia"),
    "grupo a"
    )}

      ${createCard(
        "28/11",
        "segunda",
        createGame("brasil", "13:00", "suiça") +
          createGame("brasil", "13:00", "suiça"),
        "grupo a"
      )}

      ${createCard(
        "02/12",
        "sexta",
        createGame("brasil", "16:00", "camaroes") +
          createGame("brasil", "16:00", "camaroes"),
        "grupo a"
      )}

      ${createCard(
        "02/12",
        "sexta",
        createGame("brasil", "16:00", "camaroes") +
          createGame("brasil", "16:00", "camaroes"),
        "grupo a"
      )}
       ${createCard(
         "02/12",
         "sexta",
         createGame("brasil", "16:00", "camaroes") +
           createGame("brasil", "16:00", "camaroes"),
         "grupo a"
       )}
        ${createCard(
          "02/12",
          "sexta",
          createGame("brasil", "16:00", "camaroes") +
            createGame("brasil", "16:00", "camaroes"),
          "grupo a"
        )}
      </main>
`
