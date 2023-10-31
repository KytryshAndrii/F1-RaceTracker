export default class  ResultsAPI{
    async Drivers(): Promise<any[]> {
        const result = fetch("http://ergast.com/api/f1/current/last/results.json").then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then((value) => {
                return value.MRData.RaceTable.Races;
            })
        })
        var listtoreturn: any[]= []
        var season: string = ""
        var location: string = ""
        var date: string = ""
        var time: string = ""
        result.then((resultvalue) =>{
            season = resultvalue.season
            location = resultvalue.Circuit.Location.locality + " " + resultvalue.Circuit.Location.country
            date = resultvalue.date
            time = resultvalue.time
            setTimeout(()=>{resultvalue.Results.map((elem: any)=> {
                listtoreturn.push({number: elem.number, position: elem.position, points: elem.points,
                 driver: elem.Driver.givenName + " " + elem.Driver.familyName,
                })})
                listtoreturn.push({season: season, location: location, date: date, time: time})
            ;}, 500)
        })
        return listtoreturn

    }
};