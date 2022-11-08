(()=>{

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log("Constructor Avenger llamado!!")
        }

        protected getFullName(){
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {
        constructor( 
            name: string,
            realName: string,
            public isMutant: boolean 
        ) {
            super( name, realName )
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`
        }

        set fullName(name: string){
            if (name.length < 3) {
                throw new Error("El nombre debe de ser mayor a tres letras")
            }
            this.name = name
        }

        getFullNameDesdeXmen(){
            console.log( super.getFullName() )
        }
    }

    const wolverine = new Xmen("Wolverine","Logan", true)
    // console.log(wolverine.fullName)

    wolverine.fullName = "Joel"
    // wolverine.getFullNameDesdeXmen()

})()