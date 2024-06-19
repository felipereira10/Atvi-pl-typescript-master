import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Atualizar from "./atualizar";

export default class AtualizarServico extends Atualizar {
    
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(servicos: Servico[]) {

        super();
        this.servicos = servicos;
        this.entrada = new Entrada()
    }
    
    public atualizar(): void {
        console.log("\nAtualizar Serviço:");
        
        const codigoServ = this.entrada.receberTexto("Insira o código do serviço para atualizar: ");
        const servico = this.encontrarServicoCodigo(codigoServ);
        if (!servico) {
            console.log("\n Serviço não encontrado!");
            return;
        }

        console.log("\nDados atuais do serviço:\n");
        console.log(`Código do serviço: ${servico.codigoServico}`);
        console.log(`Nome do serviço: ${servico.nomeServico}`);
        console.log(`Descrição do serviço: ${servico.descricaoServico}`);
        console.log(`Preço do serviço: ${servico.precoServico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`);
        //
        console.log("\nAtualização de dados do serviço:");
        const novoCodigoServico = this.entrada.receberTexto("Novo código: ");
        const novoNomeServico = this.entrada.receberTexto("Novo nome: ");
        const novoDescricaoServico = this.entrada.receberTexto("Nova descrição: ");
        const novoPrecoServico = this.entrada.receberNumero("Novo preço: ");

        servico.codigoServico = novoCodigoServico;
        servico.nomeServico = novoNomeServico;
        servico.descricaoServico = novoDescricaoServico;
        servico.precoServico = novoPrecoServico;
        
        console.log("\nServiço atualizado!\n");
    } 
    public encontrarServicoCodigo(codigo: string): Servico | undefined {
        return this.servicos.find(servico => servico.codigoServico === codigo);
    }

}
