(()=>{

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}

    }

    class Xmen extends Mutante {

        salvarMundo(){
            return "Mundo Salvado"
        }
    }
    class Villan extends Mutante{

        conquistarMubdo(){
            return "Mundo Conquistado"
        }
    }

    const wolverine = new Xmen("Wolverine", "Logan")
    const magneto = new Villan("Magneto", "Magnus")
    // console.log(wolverine.salvarMundo())
    // console.log(magneto.conquistarMubdo())

    const printName = ( character: Mutante ) =>{
        console.log( character.realName )
    }

    printName( wolverine )

})()