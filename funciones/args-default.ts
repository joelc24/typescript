(()=>{

    const fullName = (firstName : string, lastName ? : string, upper : boolean = false) : string =>{

        if (upper) {
            
            return `${firstName} ${lastName || 'No lastname'}`.toUpperCase()
        }

        return `${firstName} ${lastName || 'No lastname'}`

    }

    const name = fullName('Tony')
    

})()