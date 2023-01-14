const names = ["alice", "bob", "charlie", "danielle"]

const result = names.map(x => x[0].toUpperCase() + x.slice(1))
console.log(result)


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]


const soultion = pokemon.map(x => `<p>${x}</p>`)

console.log(soultion)