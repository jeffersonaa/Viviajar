package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import DTO.PassagemDTO;

public class PassagemDAO {

    Connection conn;
    PreparedStatement ps;

    public void insert(PassagemDTO PassagemDTO) throws Exception {
        String sql = "INSERT INTO passagens (id_cliente, id_destino) VALUES (?,?)";

        conn = new ConnectionFactory().createConnection();

        try {

            ps = conn.prepareStatement(sql);
            ps.setInt(1, PassagemDTO.getId_cliente());
            ps.setInt(2, PassagemDTO.getId_destino());
            ps.execute();
            ps.close();
            
        } catch (SQLException error) {
            System.out.println("Erro ao cadastrar um Destino" + error.getMessage());
        }
    }

    public void delete(PassagemDTO PassagemDTO) throws Exception {

        String sql = "DELETE FROM Passagens WHERE id_passagem = ?";

        conn = new ConnectionFactory().createConnection();

       try {

            ps = conn.prepareStatement(sql);
            ps.setInt(1, PassagemDTO.getId());
            ps.execute();

            
        } catch (SQLException error) {
            System.out.println("Erro ao Deletar um Passagem: " + error.getMessage());
        } finally{
            ps.close();
        }
    }
}
