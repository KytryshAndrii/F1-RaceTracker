export default class  F1InfoAPI{

     async Drivers(): Promise<any[]> {
         var listtoreturn: any[]= []
         const result = fetch("http://localhost:8080/f1/info/drivers").then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json().then((value) => {
                    return value.MRData.DriverTable.Drivers;
                })
            }).then((resultvalue) =>{
            resultvalue.map((elem: any)=> {
                listtoreturn.push({value:elem.driverId, label:elem.givenName + " " + elem.familyName})
            });
            return listtoreturn
        })
        return result

    }

    async Rounds(year: string): Promise<number>{
        var toreturn: number = 0;
         const result = fetch("http://localhost:8080/f1/info/rounds?year=" + year).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value;
            })
        }).then((resultvalue) =>{
                toreturn = resultvalue
                return toreturn
        })
        return result
    }

    async Constructor(driver: string): Promise<any[]> {
        var listtoreturn: any[]= []
         const result = fetch("http://localhost:8080/f1/info/constructors?driver="+ driver).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.Constructors;
            })
        }).then((resultvalue) =>{
            resultvalue.map((elem: any)=> {
                listtoreturn.push({value:elem.constructorId, label:elem.name , nation: elem.nationality})
            });
            return listtoreturn
        })
        return result

    }

    async ConstructorByDate(year: number): Promise<any[]> {
        var listtoreturn: any[]= []
         const result = fetch("/f1/info/bydateconstructors?year="+ year).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.Constructors;
            })
        }).then((resultvalue) =>{
           resultvalue.map((elem: any)=> {
                listtoreturn.push({value:elem.constructorId, label:elem.name , nation: elem.nationality})
           });
           return listtoreturn

        })
        return result

    }

    async YearsList(): Promise<any[]>{
        var listtoreturn: any[] = []
        const result = fetch("/f1/info/yearlist").then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        }).then((resultvalue) =>{
                resultvalue.map((elem: any)=> {
                    listtoreturn.push({value: elem, label: elem.toString().toLocaleUpperCase()})
                });
                return listtoreturn
        })
        return result

    }
    async RoundsList(year: string): Promise<any[]>{
        let rounds:number = await this.Rounds(year)
        var listtoreturn: any[] = []
        const result: Promise<any[]> = fetch("/f1/info/roundlist?rounds=" + rounds).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        }).then((resultvalue) =>{
           resultvalue.map((elem: any)=> {
                listtoreturn.push({value:elem, label:elem.toString().toLocaleUpperCase()})
            });

           return listtoreturn
        })
        return result
    }


};