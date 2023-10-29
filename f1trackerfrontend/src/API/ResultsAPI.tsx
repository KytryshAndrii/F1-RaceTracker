export default class  ResultsAPI{

    async CheckProxy() {
        return fetch("f1/connection/connect")
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                //console.log(response.text())
                return response
            })
    }
};