export default class  ResultsAPI{

    async DataArrayFiller(elem: any, listtoreturn: any[]): Promise<any[]>{
        listtoreturn.push(
                {number: elem.number, position: elem.position, points: elem.points,
                    driver: elem.Driver.givenName + " " + elem.Driver.familyName, constructor: elem.Constructor.name,
                    status: elem.status, url: elem.Driver.url,
                    fastesttime: elem.FastestLap.Time.time, averspeed: elem.FastestLap.AverageSpeed.speed
                })
        return listtoreturn
    }

    async ExceptionDataArrayFiller(elem: any,  listtoreturn: any[]): Promise<any[]>{
        listtoreturn.push(
            {number: elem.number, position: elem.position, points: elem.points,
                driver: elem.Driver.givenName + " " + elem.Driver.familyName, constructor: elem.Constructor.name,
                status: elem.status, url: elem.Driver.url
            })
        return listtoreturn
    }

    async Recent(): Promise<any[]> {
        var listtoreturn: any[]= []
        var season: string = ""
        var location: string = ""
        var date: string = ""
        var time: string = ""
        const result = fetch("/f1/results/recent").then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.MRData.RaceTable.Races[0];
            })
        }).then((resultvalue) =>{
            season = resultvalue.season
            location = resultvalue.Circuit.Location.locality + " - " + resultvalue.Circuit.Location.country
            date = resultvalue.date
            time = resultvalue.time.slice(0, -1)
            resultvalue.Results.map((elem: any)=> {
                if(elem.FastestLap){
                    listtoreturn.push(
                        {number: elem.number, position: elem.position, points: elem.points,
                         driver: elem.Driver.givenName + " " + elem.Driver.familyName, constructor: elem.Constructor.name,
                         status: elem.status, url: elem.Driver.url,
                         fastesttime: elem.FastestLap.Time.time, averspeed: elem.FastestLap.AverageSpeed.speed
                        })
                }else{
                    listtoreturn.push(
                        {number: elem.number, position: elem.position, points: elem.points,
                         driver: elem.Driver.givenName + " " + elem.Driver.familyName, constructor: elem.Constructor.name,
                         status: elem.status, url: elem.Driver.url
                        })
                }
            })
            listtoreturn.push({season: season, location: location, date: date, time: time})
            return listtoreturn
        })
        return result
    }

    async ResultsByYearAndRound(year: number, round:number){
        var listtoreturn: any[]= []
        var season: string = ""
        var location: string = ""
        var date: string = ""
        var time: string = ""
        const result = fetch("/f1/results/paramresults?year=" + year + "&round=" + round).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.Races[0];
            }).then((resultvalue) =>{
                season = resultvalue.season
                location = resultvalue.Circuit.Location.locality + " - " + resultvalue.Circuit.Location.country
                date = resultvalue.date
                time = resultvalue.time.slice(0, -1)
                resultvalue.Results.map((elem: any)=> {
                    if(elem.FastestLap){
                        listtoreturn.push(
                            {number: elem.number, position: elem.position, points: elem.points,
                                driver: elem.Driver.givenName + " " + elem.Driver.familyName, constructor: elem.Constructor.name,
                                status: elem.status, url: elem.Driver.url,
                                fastesttime: elem.FastestLap.Time.time, averspeed: elem.FastestLap.AverageSpeed.speed
                            })
                    }else{
                        listtoreturn.push(
                            {number: elem.number, position: elem.position, points: elem.points,
                                driver: elem.Driver.givenName + " " + elem.Driver.familyName, constructor: elem.Constructor.name,
                                status: elem.status, url: elem.Driver.url
                            })
                    }
                })
                listtoreturn.push({season: season, location: location, date: date, time: time})
                return listtoreturn
            })
        })
        return result
    }

    async ResultsByYearAndDriver(year: number, driver:string){
        var listtoreturn: any[]= []
        var season: string = ""
        var location: string = ""
        var date: string = ""
        var time: string = ""
        const result = fetch("/f1/results/driverresult?year=" + year + "&driver=" + driver).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.Races;
            }).then((resultvalue) =>{
                resultvalue.map((elem: any, key: number)=> {
                    season = elem.season
                    location = elem.Circuit.Location.locality + " - " + elem.Circuit.Location.country
                    date = elem.date
                    time = elem.time.slice(0, -1)
                    console.log("elem.Results[0]", elem.Results[0])
                    if(elem.Results[0].FastestLap){
                        this.DataArrayFiller(elem.Results[0], listtoreturn)
                        listtoreturn[key].season= season
                        listtoreturn[key].location= location
                        listtoreturn[key].date= date
                        listtoreturn[key].time= time
                    }else{
                        this.ExceptionDataArrayFiller(elem.Results[0], listtoreturn)
                        listtoreturn[key].season= season
                        listtoreturn[key].location= location
                        listtoreturn[key].date= date
                        listtoreturn[key].time= time
                    }
                })
                return listtoreturn
            })
        })
        return result
    }
};