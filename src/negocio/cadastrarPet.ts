import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Cadastro from "./cadastro";
import Pet from "../modelo/pet";

export default class CadastrarPet extends Cadastro {
    private clientes : Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastro(): void {
        console.log(`\nInício do cadastro do pet`);
        let cpfDono = this.entrada.receberTexto(`Por favor, entre com o CPF do dono(a): `)
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor, informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor, informe a raça do pet: `)
        let genero = this.entrada.receberTexto(`Por favor, informe o gênero do pet `)

        const cliente = this.encontrarCPF(cpfDono);
        if (cliente) {
            let novoPet = new Pet(nome, raca, genero, tipo)
            cliente.getPets.push(novoPet)
            console.log(`\nCadastro do pet ${nome} para o cliente ${cliente.nome} concluído :)`);
        } else {
            console.log(`\nCPF${cpfDono}não encontrado!`);
        }
    }

    public encontrarCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}