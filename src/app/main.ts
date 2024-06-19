import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
//
import CadastroCliente from "../negocio/cadastrarCliente.1";
import ListarClientes from "../negocio/listarClientes";
import BuscarCliente from "../negocio/buscarCliente";
import AtualizarCliente from "../negocio/atualizarCliente";
import DeletarCliente from "../negocio/deletarCliente";
//
import CadastrarPet from "../negocio/cadastrarPet";
import BuscarPet from "../negocio/buscarPet";
import AtualizarPet from "../negocio/atualizarPet";
import DeletarPet from "../negocio/deletarPet";
//
import CadastrarProduto from "../negocio/cadastrarProduto";
import BuscarProduto from "../negocio/buscarProduto";
import AtualizarProduto from "../negocio/atualizarProduto";
import DeletarProduto from "../negocio/deletarProduto";
//
import CadastrarServico from "../negocio/cadastrarServico";
import BuscarServico from "../negocio/buscarServico";
import AtualizarServico from "../negocio/atualizarServico";
import DeletarServico from "../negocio/deletarServico";
//
import RegistrarConsumo from "../negocio/registrarConsumo";
import listarClientesMaisConsumiramQuantidade from "../negocio/listarClientesMaisConsumiramQuantidade";
import MelhoresClientesPorValor from "../negocio/listarClientesMaisConsumiramValor";
import ProdutosServicosPorTipoRaca from "../negocio/listarProdutosServicosPorTipoRaca";
import MelhoresProdutosServicos from "../negocio/listarProdutosServicosMaisConsumidos";
import RegistroConsumo from "../negocio/registrarConsumo";
import ListarClientesMaisConsumiramQuantidade from "../negocio/listarClientesMaisConsumiramQuantidade";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`)
let empresa = new Empresa()
let execucao = true
let registroConsumo: RegistroConsumo | undefined;

while (execucao) {
    console.log(`Opções:`);
    console.log(`01 - Cadastrar cliente`);
    console.log(`02 - Listar todos os clientes`);
    console.log(`03 - Buscar cliente`);
    console.log(`04 - Atualizar cliente`);
    console.log(`05 - Deletar cliente`);
    console.log(`06 - Cadastrar pet`);
    console.log(`07 - Buscar pet`);
    console.log(`08 - Atualizar pet`);
    console.log(`09 - Deletar pet`);
    console.log(`10 - Cadastrar produto`);
    console.log(`11 - Buscar produto`);
    console.log(`12 - Atualizar produto`);
    console.log(`13 - Deletar produto`);
    console.log(`14 - Cadastrar serviço`);
    console.log(`15 - Buscar serviço`);
    console.log(`16 - Atualizar serviço`);
    console.log(`17 - Deletar serviço`);

    console.log(`18 - Registrar consumo de produtos ou serviços`);
    console.log(`19 - Lista dos 10 clientes que mais consumiram em quantidade`);
    console.log(`20 - Lista de produtos ou serviços mais consumidos `)
    console.log(`21 - Lista de produtos ou serviços mais consumidos por tipo e raça `)
    console.log(`22 - Lista dos 5 clientes que mais consumiram em valor`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

switch (opcao) {
    case 1:
        let cadastro = new CadastroCliente(empresa.getClientes)
        cadastro.cadastrar()
        break;
    case 2:
        let listagem = new ListarClientes(empresa.getClientes);
        listagem.listar();
        break;
    case 3:
        let buscar = new BuscarCliente(empresa.getClientes);
        buscar.buscar();
        break;
    case 4:
        let atualizarCliente = new AtualizarCliente(empresa.getClientes);
        atualizarCliente.atualizar();
        break;
    case 5:
        let deletarCliente = new DeletarCliente(empresa.getClientes);
        deletarCliente.deletar();
        break;
    case 6:
        let cadastrarPet = new CadastrarPet(empresa.getClientes);
        cadastrarPet.cadastro();
        break;
    case 7:
        let buscarPet = new BuscarPet(empresa.getClientes);
        buscarPet.buscar();
        break;
    case 8:
        let atualizarPet = new AtualizarPet(empresa.getClientes);
        atualizarPet.atualizar();
        break;
    case 9:
        let deletarPet = new DeletarPet(empresa.getClientes);
        deletarPet.deletar();
        break;
    case 10:
        let cadastrarProduto = new CadastrarProduto(empresa.getProdutos);
        cadastrarProduto.cadastrar();
        break;
    case 11:
        let buscarProduto = new BuscarProduto(empresa.getProdutos);
        buscarProduto.buscar();
        break;
    case 12:
        let atualizarProduto = new AtualizarProduto(empresa.getProdutos);
        atualizarProduto.atualizar();
        break;
    case 13:
        let deletarProduto = new DeletarProduto(empresa.getProdutos);
        deletarProduto.deletar();
        break;
    case 14:
        let cadastrarServico = new CadastrarServico(empresa.getServicos);
        cadastrarServico.cadastrar();
        break;
    case 15:
        let buscarServico = new BuscarServico(empresa.getServicos);
        buscarServico.buscar();
        break;
    case 16:
        let atualizarServico = new AtualizarServico(empresa.getServicos);
        atualizarServico.atualizar();
        break;
    case 17:
        let deletarServico = new DeletarServico(empresa.getServicos);
        deletarServico.deletar();
        break;
    case 18:
        //se registroConsumo não está inicializado (!registroConsumo). Se não estiver, ele é inicializado.
        if (!registroConsumo) {
            registroConsumo = new RegistroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
        }
        registroConsumo.registrarConsumo();
        break;
    //Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.    
    case 19:
        if (registroConsumo) {
            let ListarClientesMaisConsumiramQuantidade = new listarClientesMaisConsumiramQuantidade(registroConsumo)
            ListarClientesMaisConsumiramQuantidade.exibirQuantClientes()
        } else {
            console.log("Erro: O registro de consumo ainda não foi inicializado.");

        }
        break;
    //Listagem geral dos serviços ou produtos mais consumidos.    
    case 20:
        if (registroConsumo) {
            const melhoresProdutosServicos = new MelhoresProdutosServicos(registroConsumo);
            melhoresProdutosServicos.exibirMelhorProdutosServicos();
        } else {
            console.log("Erro: O registro de consumo ainda não foi inicializado.");

        }
        break;
    //Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.    
    case 21:
        if (registroConsumo) {
            let ProdutosServicosPorTipo = new ProdutosServicosPorTipoRaca(registroConsumo)
            ProdutosServicosPorTipo.listarProdutosServicosPorTipoRaca()
        } else {
            console.log("Erro: O registro de consumo ainda não foi inicializado.");

        }
        break;
    //Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.    
    case 22:
        if (registroConsumo) {
            let topClientesPorValor = new MelhoresClientesPorValor(registroConsumo)
            topClientesPorValor.exibirMelhoresClientesPorValor()
        } else {
            console.log("Erro: O registro de consumo ainda não foi inicializado.");
        }
        break;

    case 0:
        execucao = false;
        console.log(`Até mais`);
        break;
    default:
        console.log(`Operação não entendida :(`);
}
}