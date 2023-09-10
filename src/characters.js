function getCharacters() {
  try {
    fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(function (json) {
        let cardsContainer = document.querySelector(".cards");

        json.results.forEach(function (results) {
          let card = document.createElement("div");
          card.classList.add("card");

          card.innerHTML = `
              <img src="${results.image}" alt="${results.name}">
              <h2>${results.name}</h2>
              <p><strong>Status:</strong> <span>${results.status}</span></p>
              <p><strong>Species:</strong> <span>${results.species}</span></p>
              <p><strong>Gender:</strong> <span>${results.gender}</span></p>
              <p><strong>Origin:</strong> <span>${results.origin.name}</span></p>
              <p><strong>Location:</strong> <span>${results.location.name}</span></p>
              <p><strong>Episodes:</strong> <span>${results.episode.length}</span></p>
            `;
          cardsContainer.appendChild(card);
        });
      });
  } catch (error) {}
}

getCharacters();