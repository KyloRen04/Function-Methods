var pokemon = {
    firstname: "Pika",
    lastname: "Chu",
    getPokemon: function() {
        var fullname = this.firstname + ' ' + this.lastname
        return fullname
    }
}

var pokemonName = function(sancks, hobby) {
    console.log(this.getPokemon() + ' ' + 'loves to eat' + ' ' + sancks + ' ' + 'and throw' + ' ' + hobby )
}

pokemonName.apply(pokemon, ['carrot', 'electricity'])