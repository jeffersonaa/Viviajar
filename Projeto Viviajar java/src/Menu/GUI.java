package Menu;

import java.util.ArrayList;

import DAO.ClienteDAO;
import DAO.DestinoDAO;
import DAO.PassagemDAO;
import DTO.ClienteDTO;
import DTO.DestinoDTO;
import Utils.Input;

public class GUI {

    ClienteDAO clienteDAO = new ClienteDAO();
    DestinoDAO destinoDAO = new DestinoDAO();
    PassagemDAO passagemDAO = new PassagemDAO();

    public void showMenu() {

        String Option;
        
        System.out.println("######### Bem vindo a Viviajar ############");
        System.out.println("Escolha uma das opções abaixo:");
        System.out.println("1 - Cadastrar Cliente");
        System.out.println("2 - Cadastrar Destino");
        System.out.println("3 - Consultar Cliente");
        System.out.println("4 - Consultar Destino");
        System.out.println("5 - Atualizar Cliente");
        System.out.println("6 - Atualizar Destino");
        System.out.println("7 - Deletar Cliente");
        System.out.println("8 - Deletar Destino");
        System.out.println("9 - Cadastrar Passagem");
        System.out.println("10 - Deletar Passagem");

        Option = Input.readString("");

        this.getOption(Option);

    }

    public void getOption(String option) {

        switch (option) {
            case "1":

                try {
                    Cliente ClienteMenu = new Cliente();
                    ClienteMenu.cadastroCliente();
                    this.clienteDAO.insert(ClienteMenu.getCliente());
                } catch (Exception error) {
                    System.out.println("Erro ao inserir os dados: " + error);
               }
                
            break;

            case "2":
            try {
                Destino DestinoMenu = new Destino();
                DestinoMenu.cadastroDestino();
                this.destinoDAO.insert(DestinoMenu.getDestino());
            } catch (Exception error) {
                System.out.println("Erro ao inserir os dados: " + error);
           }
            break;

            case "3":
                try {
                    Cliente cliente = new Cliente();
                    cliente.buscarCliente();
                    ArrayList<ClienteDTO> lista = this.clienteDAO.list(cliente.getCliente());

                    for(int num = 0; num < lista.size(); num ++) {
                        System.out.println(lista.get(num).getId() + " - Nome: " + lista.get(num).getNome() + " CPF: " + lista.get(num).getCPF());
                    }

                } catch (Exception error) {
                    System.out.println("Erro ao inserir os dados: " + error);
                }
            break;

            case "4":
            try {
                Destino Destino = new Destino();
                Destino.buscarDestino();
                ArrayList<DestinoDTO> lista = this.destinoDAO.list(Destino.getDestino());

                for(int num = 0; num < lista.size(); num ++) {
                    System.out.println(lista.get(num).getId() + " - Cidade: " + lista.get(num).getCidade() + " Estado: " + lista.get(num).getEstado());
                }

            } catch (Exception error) {
                System.out.println("Erro ao inserir os dados: " + error);
            }
            break;

            case "5":
                try {
                    Cliente ClienteMenu = new Cliente();
                    ClienteMenu.atualizarCliente();
                    this.clienteDAO.update(ClienteMenu.getCliente());
                } catch (Exception error) {
                    System.out.println("Erro ao atualizar os dados: " + error.getMessage());
                }
            break;

            case "6":
                try {
                    Destino DestinoMenu = new Destino();
                    DestinoMenu.atualizarDestino();
                    this.destinoDAO.update(DestinoMenu.getDestino());
                } catch (Exception error) {
                    System.out.println("Erro ao atualizar os dados: " + error.getMessage());
                }
            break;

            case "7":
                try {
                    Cliente ClienteMenu = new Cliente();
                    ClienteMenu.removerCliente();
                    this.clienteDAO.delete(ClienteMenu.getCliente());
                } catch (Exception error) {
                    System.out.println("Erro ao remover os dados: " + error.getMessage());
                }
            break;

            case "8":
                try {
                    Destino DestinoMenu = new Destino();
                    DestinoMenu.removerDestino();
                    this.destinoDAO.delete(DestinoMenu.getDestino());
                } catch (Exception error) {
                    System.out.println("Erro ao remover os dados: " + error.getMessage());
                }
            break;

            case "9":
                try {
                    Passagem PassagemMenu = new Passagem();
                    PassagemMenu.cadastroPassagem();
                    this.passagemDAO.insert(PassagemMenu.getPassagem());
                } catch (Exception error) {
                    System.out.println("Erro ao remover os dados: " + error.getMessage());
                }
            break;

            case "10":
                try {
                    Passagem PassagemMenu = new Passagem();
                    PassagemMenu.removerPassagem();
                    this.passagemDAO.delete(PassagemMenu.getPassagem());
                } catch (Exception error) {
                    System.out.println("Erro ao remover os dados: " + error.getMessage());
                }
            break;

            default:
                System.exit(0);
            break;
        }

    }

    
}
