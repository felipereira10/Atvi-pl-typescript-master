import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Deletar from "./deletar";

export default class DeletarProduto extends Deletar {
    
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(produtos: Produto[]) {

        super();
        this.produtos = produtos;
        this.entrada = new Entrada()
    }
    
    public deletar(): void {

        const codigoProd = this.entrada.receberTexto("Insira o código do produto para excluir: ");
        const produto = this.encontrarProdutoCodigo(codigoProd);

        if (produto === -1) {
            console.log("\nProduto não encontrado!");
            return;
        }
        this.produtos.splice(produto, 1);
        console.log("\nProduto excluído com sucesso!\n");
    }

    private encontrarProdutoCodigo(codigo: string): number {
        return this.produtos.findIndex(produto => produto.codigoProduto === codigo);
    }
        

}