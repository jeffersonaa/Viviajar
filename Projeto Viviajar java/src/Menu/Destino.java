package Menu;

import DTO.DestinoDTO;
import Utils.Input;

public class Destino {

    String cidade, estado;
    Integer id;
    DestinoDTO Destino;

    public Destino() {
        this.Destino = new DestinoDTO();
    }
   
    public void cadastroDestino() { 
    
        this.cidade = Input.readString("Digite o cidade do destino:");
        this.Destino.setCidade(this.cidade);

        this.estado = Input.readString("Digite o estado do destino:");
        this.Destino.setEstado(this.estado);

    }

    public void buscarDestino() { 

        this.id = Integer.parseInt(Input.readString("Digite o cpf do Destino:"));
        this.Destino.setId(this.id);

    }

    public void atualizarDestino() { 

        this.id = Integer.parseInt(Input.readString("Digite o ID do Destino:"));
        this.Destino.setId(this.id);
    
        this.cidade = Input.readString("Digite a cidade de destino:");
        this.Destino.setCidade(this.cidade);

        this.estado = Input.readString("Digite o estado de destino:");
        this.Destino.setEstado(this.estado);

    }

    public void removerDestino() { 

        this.id = Integer.parseInt(Input.readString("Digite o ID do Destino que deseja remover:"));
        this.Destino.setId(this.id);

    }

    public DestinoDTO getDestino() {
        return this.Destino;
    }

}
