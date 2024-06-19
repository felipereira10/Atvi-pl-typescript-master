import RegistrarConsumo from "../negocio/registrarConsumo";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class MelhoresProdutosServicos {
    private registrarConsumo: RegistrarConsumo;

    constructor(registrarConsumo: RegistrarConsumo) {
        this.registrarConsumo = registrarConsumo;
    }

    public exibirMelhorProdutosServicos(): void {
        const melhoresProdutosServicos = this.listarMelhoresProdutosServicos();
        console.log("\nProdutos ou serviços mais consumidos:");
        melhoresProdutosServicos.forEach((item, index) => {
            if (item[0] instanceof Produto) {
                console.log(`${index + 1}. Produto: ${item[0].nomeProduto} - Quantidade Consumida: ${item[1]}`);
            } else if (item[0] instanceof Servico) {
                console.log(`${index + 1}. Serviço: ${item[0].nomeServico} - Quantidade Consumida: ${item[1]}`);
            }
            console.log();
        });        
    }

    public listarMelhoresProdutosServicos(): [Produto | Servico, number][] {
        const consumoPorItem = new Map<Produto | Servico, number>();

        this.registrarConsumo.listarTodosOsClientes().forEach(cliente => {
            const consumoPorCliente = this.registrarConsumo.listarConsumoPorCliente(cliente);
            if (consumoPorCliente) {
                consumoPorCliente.forEach((quantidade, item) => {
                    consumoPorItem.set(item, (consumoPorItem.get(item) || 0) + quantidade);
                });
            }
        });

        return Array.from(consumoPorItem.entries())
            .sort((a, b) => b[1] - a[1]);
    }
}