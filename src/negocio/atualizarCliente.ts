import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";

export default class AtualizarCliente extends Atualizar {
    
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("\nAtualização do Cliente:");
        
        const cpfCliente = this.entrada.receberTexto("CPF do cliente para atualizar: ");
       
        const cliente = this.buscarCPF(cpfCliente);
        if (!cliente) {
            console.log("\nCliente não encontrado!");
            return;
        }

        console.log("\nDados atuais do cliente:");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        console.log(`CPF: ${cliente.getCpf.getValor}`);
        console.log(`Data de Emissão do CPF: ${cliente.getCpf.getDataEmissao}`);
        //
        const novoNome = this.entrada.receberTexto("Novo nome: ");
        const novoNomeSocial = this.entrada.receberTexto("Novo nome social: ");
        const novoCPF = this.entrada.receberTexto("Novo CPF: ");
        const novaData = this.entrada.receberTexto("Nova data de cadastro: ");
        //
        cliente.nome = novoNome;
        cliente.nomeSocial = novoNomeSocial;
        cliente.getCpf.setValor(novoCPF);
        cliente.getCpf.setDataEmissao(new Date(novaData));
        //
        console.log("\nCliente atualizado com sucesso!\n");


    }
    public buscarCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}