import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastrarServico extends Cadastro {
    public cadastro(): void {
        throw new Error("Method not implemented.");
    }
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviço:`);
        //
        let codigoServico = this.entrada.receberTexto(`Por favor, informe o código do serviço: `)
        let nomeServico = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `)
        let descricaoServico = this.entrada.receberTexto(`Por favor, informe a descrição do serviço: `);
        let precoServico = this.entrada.receberNumero(`Por favor, informe o preço do serviço: `);
        //
        let servico = new Servico(codigoServico, nomeServico, descricaoServico, precoServico);
        this.servicos.push(servico)
        //
        console.log(`\nCadastro de serviço concluído :)\n`);
    }
}