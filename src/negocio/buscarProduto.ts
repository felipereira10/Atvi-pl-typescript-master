import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Buscar from "./buscar";

export default class BuscarProduto extends Buscar{
    
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(produtos: Produto[]) {

        super();
        this.produtos = produtos;
        this.entrada = new Entrada()
    }

    public buscar(): void {

        console.log("\nBusca de Produto:");

        const codigoProd = this.entrada.receberTexto("Insira o códigodo produto: ");

        const produto = this.encontrarProdutoCodigo(codigoProd);
        
        if (!produto) {
            console.log("\nProduto não encontrado!");
            return;
        }

        console.log("\nDados do produto:\n");
        console.log(`Código do produto: ${produto.codigoProduto}`);
        console.log(`Nome do produto: ${produto.nomeProduto}`);
        console.log(`Descrição do produto: ${produto.descricaoProduto}`);  
        console.log(`Preço do produto: ${produto.precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`);
    }
    
    public encontrarProdutoCodigo(codigo: string): Produto | undefined {
        return this.produtos.find(produto => produto.getCodigoProduto === codigo);
    }
}