const url = "https://swapi.dev/api/planets";

fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    const planets = data.results;
    
    planets.map((planet) => {
      createPlanetDiv(planet);
      const item = document.createElement("p");
      item.innerHTML=planet;
    })
  })
  .catch((error) => console.log(error.message));

function createPlanetDiv(planet) {
 let div = document.getElementById("target");
 div.appendChild(planet);
}

