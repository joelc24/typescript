(()=>{

    class Apocalipsis {
        
        static instance: Apocalipsis

        private constructor( public name: string) {
            
        }

        static callApocalipsis(): Apocalipsis{

            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy el unico")
            }

            return Apocalipsis.instance
        }

        changeName(newName: string) : void {
            this.name = newName
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()

    // const apocalipsis = new Apocalipsis("Soy Apocalipsis....  el unico")
    // console.log(apocalipsis)

})()