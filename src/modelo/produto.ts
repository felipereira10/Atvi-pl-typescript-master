export default class Produto {
    public codigoProduto: string;
    public nomeProduto: string;
    public descricaoProduto: string;
    public precoProduto: number;

    constructor(codigoProduto: string, nomeProduto: string, descricaoProduto: string, precoProduto: number) {
        this.codigoProduto = codigoProduto
        this.nomeProduto = nomeProduto
        this.descricaoProduto = descricaoProduto
        this.precoProduto = precoProduto
    }
    public get getCodigoProduto(){return this.codigoProduto}
    public get getNomeProduto(){return this.nomeProduto}
    public get getDescricaoProduto(){return this.descricaoProduto}
    public get getPrecoProduto(){return this.precoProduto}
    
}