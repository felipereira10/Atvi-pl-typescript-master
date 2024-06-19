import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Deletar from "./deletar";


export default class DeletarCliente extends Deletar {
    
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public deletar(): void {

        const cpfCliente = this.entrada.receberTexto("Insira o CPF que deseja excluir: ");

        const indiceCliente = this.encontrarCPF(cpfCliente);


        if (indiceCliente === -1) {
            console.log("\nCliente não encontrado!");
            return;
        }

      
        this.clientes.splice(indiceCliente, 1);

        console.log("\nCliente excluído com sucesso!");
    }

    private encontrarCPF(cpf: string): number {
  
        return this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf);
    }

    
}