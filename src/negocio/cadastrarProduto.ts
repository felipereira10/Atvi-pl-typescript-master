import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastrarProduto extends Cadastro {
    public cadastro(): void {
        throw new Error("Method not implemented.");
    }
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {

        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto:`);

        let codigoProduto = this.entrada.receberTexto(`Por favor, informe o código do produto: `)
        let nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do produto: `)
        let descricaoProduto = this.entrada.receberTexto(`Por, favor informe a descrição do produto: `);
        let precoProduto = this.entrada.receberNumero(`Por favor, informe o preço do produto: `);

        let produto = new Produto(codigoProduto, nomeProduto, descricaoProduto, precoProduto);
        this.produtos.push(produto)

        console.log(`\nCadastro de produto concluído :)`);
    }
    
}