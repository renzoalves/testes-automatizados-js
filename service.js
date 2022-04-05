import { setTimout } from 'timers/promises'
export default class Service {
    async save(params) {
        await setTimout(2000)
        return `${params.id} saved with success!!`
    }
}