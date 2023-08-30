import httpService from "./http.service"

const transactionEndpoint = "transaction/"

const transactionService = {
    get: async () => {
        const { data } = await httpService.get(transactionEndpoint)
        return data
    },
}
export default transactionService
