import httpService from "./http.service"

const transactionEndpoint = "transaction/"

const transactionService = {
    getTransaction: async () => {
        const { data } = await httpService.get(transactionEndpoint)
        return data
    },
    createTransaction: async (payload) => {
        const { data } = await httpService.put(transactionEndpoint + payload._id, payload)
        return data
    },
    removeTransaction: async (transactionId) => {
        const { data } = await httpService.delete(transactionEndpoint + transactionId)
        return data
    },
    updateTransaction: async (payload, transactionId) => {
        const { data } = await httpService.patch(transactionEndpoint + transactionId, payload)
        return data
    }
}
export default transactionService
