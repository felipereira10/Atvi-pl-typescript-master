export default class Servico {
    public codigoServico: string;
    public nomeServico: string;
    public descricaoServico: string;
    public precoServico: number;

    constructor(codigoServico: string, nomeServico: string, descricaoServico: string, precoServico: number) {
        this.codigoServico = codigoServico
        this.nomeServico = nomeServico
        this.descricaoServico = descricaoServico
        this.precoServico = precoServico
    }
    public get getCodigoServico(){return this.codigoServico}
    public get getNomeServico(){return this.nomeServico}
    public get getDescricaoServico(){return this.descricaoServico}
    public get getPrecoServico(){return this.precoServico}
    
}