  (() => {
  class Pokemonager {

    async findNames(n) {
      try {
        let pokemonArray = [];
        let allData = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=" + n);
        let parsedData = await allData.json();

        parsedData.results.map(pokemonName => pokemonArray.push(pokemonName.name))
        return pokemonArray

      } catch  (error) {
        console.error(error)
      }
    }

    async findUnderWeight(weight) {
      try {
    let pokemonArray = [];
    
    for (let i = 1; i <= 10; i++) {
      let allData = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
      let parsedData = await allData.json();
      if (parsedData.weight < weight) {
        pokemonArray.push(parsedData)
      }
    }
    console.log(pokemonArray);
    return pokemonArray 
      } catch (error) {
        console.error(error)
      }
    }
  }



  window.Pokemonager = Pokemonager;
      })();

