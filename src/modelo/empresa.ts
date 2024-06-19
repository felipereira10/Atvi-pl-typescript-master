import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Pet from "./pet"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    public pets: Array<Pet> | undefined
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getPets(){
        return this.clientes
    }
}