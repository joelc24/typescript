(()=>{

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: ()=> string
    }

    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super velocidad','Viajar en el tiempo']
    }

    let Superman: Hero = {
        name: "Clark kent",
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name
        },
    }

})()