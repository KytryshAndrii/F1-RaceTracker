export default class  F1InfoAPI{

     async Drivers(): Promise<any[]> {
        const result = fetch("http://localhost:8080/f1/info/drivers").then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json().then((value) => {
                    return value.MRData.DriverTable.Drivers;
                })
            })
        var listtoreturn: any[]= []
        result.then((resultvalue) =>{
            setTimeout(()=>{resultvalue.map((elem: any)=> {
                listtoreturn.push({value:elem.driverId, label:elem.givenName + " " + elem.familyName})
            });}, 500)
        })
        return listtoreturn

    }

    async Rounds(year: string): Promise<number>{
         const result = fetch("http://localhost:8080/f1/info/rounds?year=" + year).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value;
            })
        })
        var toreturn: number = 0;
        result.then((resultvalue) =>{
            setTimeout(()=>{
                toreturn = resultvalue
            }, 500)
        })
        return toreturn
    }

    async Constructor(driver: string): Promise<any[]> {
        const result = fetch("http://localhost:8080/f1/info/constructors?driver="+ driver).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.Constructors;
            })
        })
        var listtoreturn: any[]= []
        result.then((resultvalue) =>{
            setTimeout(()=>{resultvalue.map((elem: any)=> {
                listtoreturn.push({value:elem.constructorId, label:elem.name , nation: elem.nationality})
            });}, 500)
        })
        return listtoreturn

    }

    async ConstructorByDate(year: number): Promise<any[]> {
        const result = fetch("http://localhost:8080/f1/info/bydateconstructors?year="+ year).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.Constructors;
            })
        })
        var listtoreturn: any[]= []
        result.then((resultvalue) =>{
            setTimeout(()=>{resultvalue.map((elem: any)=> {
                listtoreturn.push({value:elem.constructorId, label:elem.name , nation: elem.nationality})
            });}, 500)
        })
        return listtoreturn

    }

    async YearsList(): Promise<any[]>{
        var listtoreturn: any[] = []
        const result = fetch("http://localhost:8080/f1/info/yearlist").then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        result.then((resultvalue) =>{
            setTimeout(()=>{resultvalue.map((elem: any)=> {
                listtoreturn.push({value:elem, label:elem.toString().toLocaleUpperCase()})
            });}, 500)
        })
        return listtoreturn

    }


};