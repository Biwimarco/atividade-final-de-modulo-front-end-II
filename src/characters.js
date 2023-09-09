function getCharacters() {
    try {
    fetch('https://rickandmortyapi.com/api/character', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(function(json){

        let containerCards = document.querySelector('.container-cards');

        json.results.map(function(results){
            containerCards.innerHTML += `
            <img src="${results.image}" alt="${results.name}">
            <h2>${results.name}</h2>
            <p>Status: ${results.status}</p>
            <p>Species: ${results.species}</p>
            <p>Type: ${results.type}</p>
            <p>Gender: ${results.gender}</p>
            <p>Origin: ${results.origin.name}</p>
            <p>Location: ${results.location.name}</p>
            <p>Episodes: ${results.episode.length}</p>
            <p>Created: ${results.created}</p>
            `
        })
    })
    } catch (error) {
        
    }
}

getCharacters()