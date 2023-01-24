var pokemon = {
    firstname: "Pika",
    lastname: "Chu",
    getPokemon: function() {
        var fullname = this.firstname + ' ' + this.lastname
        return fullname
    }
}

var pokemonName = function() {
    console.log(this.getPokemon() + ' ' + "I choose you")
}

var logPokemon = pokemonName.bind(pokemon)

logPokemon()