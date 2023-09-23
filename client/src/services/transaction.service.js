import httpService from "./http.service"

const transactionEndpoint = "transaction/"
const transactionDemoEndpoint = "demo/"

const transactionService = {
    getTransactions: async (userId) => {
        const { data } = await httpService.get(transactionEndpoint, {
            params: {
                orderBy: 'userId',
                equalTo: `${userId}`,
            },
        })
        return data
    },
    createTransaction: async (payload) => {
        const { data } = await httpService.post(transactionEndpoint, payload)
        return data
    },
    removeTransaction: async (transactionId) => {
        const { data } = await httpService.delete(transactionEndpoint + transactionId)
        return data
    },
    updateTransaction: async (payload, transactionId) => {
        const { data } = await httpService.patch(transactionEndpoint + transactionId, payload)
        return data
    },
    getTransactionsDemo: async () => {
        const { data } = await httpService.get(transactionDemoEndpoint)
        return data
    },
}
export default transactionService
