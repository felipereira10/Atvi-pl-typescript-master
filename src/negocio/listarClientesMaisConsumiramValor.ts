import RegistroConsumo from "../negocio/registrarConsumo";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class MelhoresClientesPorValor {
    private registroConsumo: RegistroConsumo;

    constructor(registroConsumo: RegistroConsumo) {
        this.registroConsumo = registroConsumo;
    }

    public exibirMelhoresClientesPorValor(): void {
        const melhoresClientes = this.listarMelhoresClientesPorValor();
        console.log("\n5 clientes que mais consumiram em valor:");
        melhoresClientes.forEach(([cliente, valorGasto], index) => {
            console.log(`${index + 1}. ${cliente.nome} - Valor gasto: R$${valorGasto.toFixed(2)}`);
        });
        console.log();
    }

    private listarMelhoresClientesPorValor(): [Cliente, number][] {
        const valorPorCliente = new Map<Cliente, number>();
    
        this.registroConsumo.listarTodosOsClientes().forEach(cliente => {
            const consumoPorItem = this.registroConsumo.listarConsumoPorCliente(cliente);
            if (consumoPorItem) {
                let valorTotalCliente = 0;
                consumoPorItem.forEach((quantidade, item) => {
                    valorTotalCliente += this.calcularPrecoTotal(item, quantidade);
                });
                valorPorCliente.set(cliente, valorTotalCliente);
            }
        });

        return Array.from(valorPorCliente.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5);
    }

    private calcularPrecoTotal(item: Produto | Servico, quantidade: number): number {
        if (item instanceof Produto) {
            return item.precoProduto * quantidade;
        } else if (item instanceof Servico) {
            return item.precoServico * quantidade;
        }
        return 0;
    }
}