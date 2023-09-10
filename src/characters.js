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

          card.addEventListener("click", function () {
            openModal(results);
          });

          cardsContainer.appendChild(card);
        });
      });
  } catch (error) {
    alert("Cannot GET!");
  }
}

getCharacters();

function openModal(character) {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");

  modalContent.innerHTML = `
    <img src="${character.image}" alt="${character.name}">
    <h2>${character.name}</h2>
    <p><strong>Status:</strong> <span>${character.status}</span></p>
    <p><strong>Species:</strong> <span>${character.species}</span></p>
    <p><strong>Gender:</strong> <span>${character.gender}</span></p>
    <p><strong>Origin:</strong> <span>${character.origin.name}</span></p>
    <p><strong>Location:</strong> <span>${character.location.name}</span></p>
    <p><strong>Episodes:</strong> <span>${character.episode.length}</span></p>
  `;

  modal.style.display = "block";
  modalContent.style.background =
    "linear-gradient(0deg, rgba(39,51,40,1) 47%, rgba(25,131,59,1) 100%)";
  modalContent.style.textAlign = "center";
  modalContent.style.fontFamily = 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif';

  modal.addEventListener("click", closeModal);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  modal.removeEventListener("click", closeModal);
}

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchCharacters);

function searchCharacters() {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm.trim() === "") {
    alert("Please enter a character name to search.");
    return;
  }

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
    .then((res) => {
      return res.json();
    })
    .then(function (json) {
      if (!json.results) {
        alert("No characters found with that name.");
        return;
      }

      json.results.forEach(function (character) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
          <p><strong>Status:</strong> <span>${character.status}</span></p>
          <p><strong>Species:</strong> <span>${character.species}</span></p>
          <p><strong>Gender:</strong> <span>${character.gender}</span></p>
          <p><strong>Origin:</strong> <span>${character.origin.name}</span></p>
          <p><strong>Location:</strong> <span>${character.location.name}</span></p>
          <p><strong>Episodes:</strong> <span>${character.episode.length}</span></p>
        `;

        card.addEventListener("click", function () {
          openModal(character);
        });

        cardsContainer.appendChild(card);
      });
    })
    .catch(function (error) {
      alert(error.message);
    });
}