import { EventEmitter } from "events"

export default class Product {

    // cotr: Função 'OnCreate', injeção de dependência: service (lá do service.js)
    constructor( {onCreate, service}) {
        this.service = service
        this.source = new EventEmitter()
        this.source.on('create', onCreate)
    }

    //----------------------------------------------------------------------
    // Private:
    //----------------------------------------------------------------------

    // Função criada com o '#' no início, significa que é uma função Private (privada)

    // data = { descriptoion, id, price }
    #isValid(data) {

    }

    //----------------------------------------------------------------------
    // Public:
    //----------------------------------------------------------------------
    async create(data) {
        this.#isValid(data)


        const message = await this.service.save(data)
        return message.toUpperCase()
    }
}