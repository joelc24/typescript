(()=>{

    type Avenger = {
        name: string,
        weapon: string
    }

    const iroman: Avenger = {
        name: "Iroman",
        weapon: "Armorsuit"
    }

    const captainAmerica: Avenger = {
        name: "Capitan America",
        weapon: "Shield"
    }

    const thor: Avenger = {
        name: "Thor",
        weapon: "Mjolnir"
    }

    const avengers: Avenger[] = [ iroman, thor, captainAmerica ]

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
    }

})()