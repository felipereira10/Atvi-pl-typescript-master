import Cliente from "../modelo/cliente";
import RegistroConsumo from "../negocio/registrarConsumo";
import RegistrarConsumo from "../negocio/registrarConsumo";

export default class ListarClientesMaisConsumiramQuantidade {
    private registrarConsumo: RegistroConsumo;

    constructor(registrarConsumo: RegistroConsumo) {
        this.registrarConsumo = registrarConsumo;
    }

    public exibirQuantClientes(): void {
        const melhoresClientes = this.obterQuantClientes();
        console.log("Top 10 clientes que mais consumiram em quantidade:");
        melhoresClientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nome}`);
        });
    }

    private obterQuantClientes(): Cliente[] {
        const consumoPorCliente = new Map<Cliente, number>();

        this.registrarConsumo.listarTodosOsClientes().forEach(cliente => {
            const consumoPorItem = this.registrarConsumo.listarConsumoPorCliente(cliente);
            if (consumoPorItem) {
                let consumoTotalCliente = 0;
                consumoPorItem.forEach((quantidade) => {
                    consumoTotalCliente += quantidade;
                });
                consumoPorCliente.set(cliente, consumoTotalCliente);
            }
        });

        return Array.from(consumoPorCliente.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(entry => entry[0]);
    }
}