import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListarClientes extends Listagem {
    private pet: Array<Cliente>
    constructor(pet: Array<Cliente>) {
        super()
        this.pet = pet
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.pet.forEach(pet => {
            console.log(`Nome: ` + pet.nome);
            console.log(`Nome social: ` + pet.nomeSocial);
            console.log(`CPF: ` + pet.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}