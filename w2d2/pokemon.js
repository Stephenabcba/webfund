var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

//console.log the pokémon objects whose id is evenly divisible by 3
console.log("Pokemon objects whose id is divisible by 3:")
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id % 3 == 0) {
        console.log(pokémon[i])
    }
}

//console.log the pokémon objects that have more than one type
console.log("Pokemon objects who have more than 1 type:")
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length > 1) {
        console.log(pokémon[i])
    }
}

// console.log the names of the pokémon whose only type is "poison"
console.log("Pokemon names whose only type is poison:")
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length == 1 && pokémon[i].types[0] == 'poison') {
        console.log(pokémon[i].name)
    }
}

// console.log the first type of all the pokémon whose second type is "flying"
console.log("Pokemon's first type if their second type is flying:")
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length == 2 && pokémon[i].types[1] == 'flying') {
        console.log(pokémon[i].types[0])
    }
}

// console.log the reverse of the names of the pokémon whose only type is "poison"
console.log("Pokemon's name in reverse if its only type is poison:")
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types.length == 1 && pokémon[i].types[0] == 'poison') {
        // for(var j = 0; j < pokeName.length / 2; j++) {
        //     var temp = pokeName[j];
        //     console.log(temp)
        //     pokeName[j] = pokeName[pokeName.length - 1 - j];
        //     pokeName[pokeName.length - 1 - j] = temp;
        // }
        var splitString =  pokémon[i].name.split("")
        var reverseArray = splitString.reverse()
        console.log(reverseArray.join(""));
    }
}