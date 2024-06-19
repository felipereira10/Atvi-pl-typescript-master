import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";

export default class AtualizarPet extends Atualizar {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log("\nAtualização de Pet:");

        const cpfCliente = this.entrada.receberTexto("CPF do cliente para atualizar o pet: ");
        const cliente = this.encontrarCPF(cpfCliente);
        
        if (!cliente) {
            console.log("\nCliente não encontrado!");
            return;
        }

        console.log("\nPets do Cliente:");
        cliente.getPets.forEach((pet, index) => {
            console.log(`${index + 1}. Nome: ${pet.getNome}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}, Gênero: ${pet.getGenero}`);
        });

        const indicePet = this.entrada.receberNumero("Informe o número do pet para atualizar: ");
        const pet = cliente.getPets[indicePet - 1];

        if (!pet) {
            console.log("\nPet não encontrado!");
            return;
        }
        //
        console.log("\nDados atuais do pet:");
        console.log(`Nome: ${pet.getNome}`);
        console.log(`Tipo: ${pet.getTipo}`);
        console.log(`Raça: ${pet.getRaca}`);
        console.log(`Gênero: ${pet.getGenero}`);
        //
        const novoNome = this.entrada.receberTexto("Novo nome: ");
        const novoTipo = this.entrada.receberTexto("Novo tipo: ");
        const novaRaca = this.entrada.receberTexto("Nova raça: ");
        const novoGenero = this.entrada.receberTexto("Nova gênero: ");
        //
        pet.setNome(novoNome);
        pet.setTipo(novoTipo);
        pet.setRaca(novaRaca);
        pet.setGenero(novoGenero);

        console.log("\nPet atualizado com sucesso!");
    }

    public encontrarCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}
    
