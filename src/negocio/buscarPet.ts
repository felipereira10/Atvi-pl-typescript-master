import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Buscar from "./buscar";

export default class BuscarPet extends Buscar {
    
    private clientes: Cliente[];
    private entrada: Entrada;
    
    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    
    public buscar(): void {
        console.log("\nBuscar Pet:");
    
        const cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente para buscar o pet: ");
        const cliente = this.encontrarCPF(cpfCliente);
            
        if (!cliente) {
            console.log("\nCliente não encontrado!");
            return;
        }
    
        console.log("\nPets do Cliente:");
        cliente.getPets.forEach((pet, index) => {
            console.log(`${index + 1}. Nome: ${pet.getNome}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}, Gênero: ${pet.getGenero}`);
        });

        const indicePet = this.entrada.receberNumero("Insira o número do pet para buscar: ");
        const pet = cliente.getPets[indicePet - 1];

        if (!pet) {
            console.log("\nPet não encontrado!");
            return;
        }

        console.log("\nDados atuais do pet:");
        console.log(`Nome: ${pet.getNome}`);
        console.log(`Tipo: ${pet.getTipo}`);
        console.log(`Raça: ${pet.getRaca}`);
        console.log(`Gênero: ${pet.getGenero}\n`);
    }

    public encontrarCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
    
}