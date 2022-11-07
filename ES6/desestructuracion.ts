(()=>{

    type Avengers = {
        nick: string;
        iroman: string;
        vission: string;
        activos: boolean;
        poder: number;
    }

    const avengers = {
        nick: "Samuel L. Jackson",
        iroman: "Robert Downey Jr",
        vission: "Paul Bettany",
        activos: true,
        poder: 1500
    }

    // const { poder, vission } = avengers

    // console.log(poder.toFixed(2), vission.toUpperCase())

    const printAvenger = ({ iroman, ...resto }: Avengers)=>{

        console.log(iroman, resto)
    }

    // printAvenger( avengers )

    const avengerArr: string[] = ["Cap America","Iroman","Hulk"]

    const [ , iroman ] = avengerArr
    // console.log({ iroman })
})()