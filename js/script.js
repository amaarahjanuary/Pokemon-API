fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((pokemonList) => {
        console.log(pokemonList);
        pokemonList.results.forEach((pokemon) => {
            document.querySelector("#list").innerHTML += `
        <button onclick="getData('${pokemon.url}')">${pokemon.name}</button>
      `  ;
        });
    });

function getData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            document.getElementById("pokemon").innerHTML = `
            <img src="${data.sprites.front_default}">
                <h3> ${data.name}</h3>
                <p> type:${data.types[0].type.name} </p>
                <p> ability:${data.abilities[0].ability.name} </p>
                <p> height:${data.height} , weight:${data.weight}</p>
                <p>Statistics:<br> ${data.stats[0].stat.name}: ${data.stats[0].base_stat}
                <br>${data.stats[1].stat.name}: ${data.stats[1].base_stat}
                <br>${data.stats[2].stat.name}: ${data.stats[2].base_stat}
                <br>${data.stats[3].stat.name}: ${data.stats[3].base_stat}
                <br>${data.stats[4].stat.name}: ${data.stats[4].base_stat}
                <br>${data.stats[5].stat.name}: ${data.stats[5].base_stat}
                </p>
                `

        });
}

getData('https://pokeapi.co/api/v2/pokemon/charizard')