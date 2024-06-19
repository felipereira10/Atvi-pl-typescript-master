import Entrada from "../io/entrada";
import Delete from "./deletar";
import Servico from "../modelo/servico";

export default class DeletarServico extends Delete {
    
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada()
    }
    
    public deletar(): void {

        const codigoServ = this.entrada.receberTexto("Informe o código do serviço que deseja excluir: ");

        const servico = this.encontrarServicoPorCodigo(codigoServ);


        if (servico === -1) {
            console.log("\nServiço não encontrado.\n");
            return;
        }

      
        this.servicos.splice(servico, 1);

        console.log("\nServiço excluído com sucesso!\n");
    }

    private encontrarServicoPorCodigo(codigo: string): number {
        return this.servicos.findIndex(servico => servico.codigoServico === codigo);
    }
        
}