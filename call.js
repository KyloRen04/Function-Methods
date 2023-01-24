var pokemon = {
    firstName: "Pika",
    lastname: "Chu",
    getPokemon: function() {
        var fullname = this.firstName + ' ' + this.lastname
        return fullname
    }
}

var pokemonName = function(snacks, hobby) {
    console.log(this.getPokemon() + ' ' + "I choose you!")
    console.log(this.getPokemon() + ' ' + "loves to eat" + ' ' + snacks + ' ' + "and throw" + ' ' + hobby)
}

pokemonName.call(pokemon, 'carrot', 'electricity')