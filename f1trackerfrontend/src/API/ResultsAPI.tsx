export default class  ResultsAPI{
    async Recent(): Promise<any[]> {
        const result = fetch("http://ergast.com/api/f1/current/last/results.json").then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.MRData.RaceTable.Races[0];
            })
        })
        var listtoreturn: any[]= []
        var season: string = ""
        var location: string = ""
        var date: string = ""
        var time: string = ""
        result.then((resultvalue) =>{
            season = resultvalue.season
            location = resultvalue.Circuit.Location.locality + " - " + resultvalue.Circuit.Location.country
            date = resultvalue.date
            time = resultvalue.time.slice(0, -1)
            setTimeout(()=>{resultvalue.Results.map((elem: any)=> {
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
            ;}, 500)
        })
        return listtoreturn

    }
};