(()=>{
    
    interface Client {
        name: string,
        age?: number,
        address?: Address,
        getFullAddress( id: string ) : void
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client : Client = {
        name: "Joel",
        age: 21,
        address: {
            id: 152,
            zip: "KY2 SUID",
            city: "Otawa"
        },
        getFullAddress( id: string ){
            return this.address?.city
        }
    }

    const client2 : Client = {
        name: "Melisa",
        age: 30,
        address: {
            id: 120,
            city: "Toronto",
            zip: "K2S U2A"
        },
        getFullAddress( id: string ){
            return this.address?.city
        }
    }

})()