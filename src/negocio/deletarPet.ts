import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Deletar from "./deletar";

export default class DeletarPet extends Deletar {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public deletar(): void {

        console.log("\nExcluir Pet abaixo:");
        
        const cpfCliente = this.entrada.receberTexto("Insira o CPF e depois o nome do pet para excluir: ");
        const [cpf, nomePet] = cpfCliente.split(" ");

        const clienteIndex = this.encontrarCPF(cpf);
        
        if (clienteIndex === -1) {
            console.log("\nCliente não encontrado!");
            return;
        }
        const cliente = this.clientes[clienteIndex];

        const petIndex = cliente.getPets.findIndex(pet => pet.getNome === nomePet);
        if (petIndex === -1) {
            console.log("\nPet não encontrado!");
            return;
        }

        cliente.getPets.splice(petIndex, 1);
        console.log("\n Pet excluído com sucesso!");
    }
    private encontrarCPF(cpf: string): number {
        return this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf);
    }


}

