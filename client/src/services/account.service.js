import httpService from "./http.service"

const accountEndpoint = "account/"

const accountService = {
    get: async () => {
        const { data } = await httpService.get(accountEndpoint)
        return data
    }
}
export default accountService
