import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Buscar from "./buscar";
import Busca from "./buscar";

export default class BuscarCliente extends Buscar {
    
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public buscar(): void {
        console.log("\nBuscar Cliente:");

        const cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente que deseja buscar: ");

        const cliente = this.encontrarCPF(cpfCliente);
        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }

        console.log("\nDados do cliente:");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        console.log(`CPF: ${cliente.getCpf.getValor}`);
        console.log(`Data de Emissão do CPF: ${cliente.getCpf.getDataEmissao} \n`);
    }

    public encontrarCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}