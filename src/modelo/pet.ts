export default class Pet {
    
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}

    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }
    public setRaca(novaRaca: string): void {
        this.raca = novaRaca;
    }
    public setGenero(novoGenero: string): void {
        this.genero = novoGenero;
    }
    public setTipo(novoTipo: string): void {
        this.tipo = novoTipo;
    }
}