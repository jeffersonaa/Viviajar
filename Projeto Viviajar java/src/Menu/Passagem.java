package Menu;

import DTO.PassagemDTO;
import Utils.Input;

public class Passagem {

    Integer id, id_cliente, id_destino;
    PassagemDTO Passagem;

    public Passagem() {
        this.Passagem = new PassagemDTO();
    }
   
    public void cadastroPassagem() { 

        System.out.println("Para vincular um destino ao cliente siga os próximos passos:");
    
        this.id_cliente = Integer.parseInt(Input.readString("Digite o id do cliente:"));
        this.Passagem.setId_cliente(this.id_cliente);

        this.id_destino = Integer.parseInt(Input.readString("Digite o id do destino:"));
        this.Passagem.setId_destino(this.id_destino);

    }

    public void removerPassagem() { 

        this.id = Integer.parseInt(Input.readString("Digite o ID do Passagem que deseja excluir:"));
        this.Passagem.setId(this.id);

    }

    public PassagemDTO getPassagem() {
        return this.Passagem;
    }

}
