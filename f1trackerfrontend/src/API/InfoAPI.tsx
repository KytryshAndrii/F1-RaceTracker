export default class  F1InfoAPI{

     async Drivers(url: string): Promise<any[]> {
        const result = fetch(url).then(response => {
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

};