package Menu;

import DTO.ClienteDTO;
import Utils.Input;

public class Cliente {

    String nome, endereco, telefone, cpf, email;
    Integer id;
    ClienteDTO cliente;

    public Cliente() {
        this.cliente = new ClienteDTO();
    }
   
    public void cadastroCliente() { 
    
        this.nome = Input.readString("Digite o nome do cliente:");
        this.cliente.setNome(this.nome);

        this.endereco = Input.readString("Digite o endereço do cliente:");
        this.cliente.setEndereco(this.endereco);

        this.telefone = Input.readString("Digite o telefone do cliente:");
        this.cliente.setTelefone(this.telefone);

        this.cpf = Input.readString("Digite o cpf do cliente:");
        this.cliente.setCPF(this.cpf);

        this.email = Input.readString("Digite o email do cliente:");
        this.cliente.setEmail(this.email);

    }

    public void buscarCliente() { 

        this.cpf = Input.readString("Digite o cpf do cliente:");
        this.cliente.setCPF(this.cpf);

    }

    public void atualizarCliente() { 

        this.id = Integer.parseInt(Input.readString("Digite o ID do cliente:"));
        this.cliente.setId(this.id);
    
        this.nome = Input.readString("Digite o nome do cliente:");
        this.cliente.setNome(this.nome);

        this.endereco = Input.readString("Digite o endereço do cliente:");
        this.cliente.setEndereco(this.endereco);

        this.telefone = Input.readString("Digite o telefone do cliente:");
        this.cliente.setTelefone(this.telefone);

        this.cpf = Input.readString("Digite o cpf do cliente:");
        this.cliente.setCPF(this.cpf);

        this.email = Input.readString("Digite o email do cliente:");
        this.cliente.setEmail(this.email);

    }

    public void removerCliente() { 

        this.id = Integer.parseInt(Input.readString("Digite o ID do cliente que deseja remover:"));
        this.cliente.setId(this.id);

    }

    public ClienteDTO getCliente() {
        return this.cliente;
    }

}
