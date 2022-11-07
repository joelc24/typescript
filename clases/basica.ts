(()=>{

    //? FORMA TRADICIONAL
    // class Avenger {

    //     private name: string
    //     public team: string
    //     public realName?: string
    //     static avAge: number = 35 

    //     constructor(name: string, team: string, realName?: string){
    //         this.name = name
    //         this.team = team
    //         this.realName = realName
    //     }

    // }

    //?FORMA EN LA QUE PODEMOS DECLARAR EN EL CONSTRUCTOR

    class Avenger {

        static avAge: number = 35
        static getAvAge(){
            return this.avAge
        }
        constructor(
            private name: string, 
            private team: string, 
            public realName?: string
        ){}

        public bio(){
            return `${ this.name } (${ this.team })`
        }
    }


    // const antman: Avenger = new Avenger("Antman", "Capitan")

    // console.log( antman.bio() )
})()