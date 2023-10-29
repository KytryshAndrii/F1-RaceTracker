export default class  ConnectionVerifyAPI{
    async CheckProxy() {
        return fetch("f1/connection/connect")
            .then(response => {
                if (!response.ok) {
                    return {"value": false}
                }
                return response.json()
            })
    }
};