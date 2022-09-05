package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import DTO.DestinoDTO;

public class DestinoDAO {

    Connection conn;
    PreparedStatement ps;
    ResultSet rs;
    ArrayList<DestinoDTO> lista = new ArrayList<>();

    public void insert(DestinoDTO DestinoDTO) throws Exception {
        String sql = "INSERT INTO Destinos (cidade, estado) VALUES (?,?)";

        conn = new ConnectionFactory().createConnection();

        try {

            ps = conn.prepareStatement(sql);
            ps.setString(1, DestinoDTO.getCidade());
            ps.setString(2, DestinoDTO.getEstado());
            ps.execute();
            ps.close();
            
        } catch (SQLException error) {
            System.out.println("Erro ao cadastrar um Destino" + error.getMessage());
        }
    }

    public ArrayList<DestinoDTO> list(DestinoDTO DestinoDTO) throws Exception {
        String sql = "SELECT * FROM destinos WHERE id = ?";

        conn = new ConnectionFactory().createConnection();

        try {

            ps = conn.prepareStatement(sql);
            ps.setInt(1, DestinoDTO.getId());
            rs = ps.executeQuery();
            

            while(rs.next()){
                DestinoDTO Destino = new DestinoDTO();
                Destino.setId(rs.getInt("id"));
                Destino.setCidade(rs.getString("cidade"));
                Destino.setEstado(rs.getString("estado"));

                lista.add(Destino);
            }
            
        } catch (SQLException error) {
            System.out.println("Erro ao buscar um Destino" + error.getMessage());
        }

        return lista;
    }

    public void update(DestinoDTO DestinoDTO) throws Exception {

        String sql = "UPDATE Destinos SET cidade = ?, estado = ? WHERE id = ?";

        conn = new ConnectionFactory().createConnection();

       try {

            ps = conn.prepareStatement(sql);
            ps.setString(1, DestinoDTO.getCidade());
            ps.setString(2, DestinoDTO.getEstado());
            ps.setInt(3, DestinoDTO.getId());
            ps.execute();

            
        } catch (SQLException error) {
            System.out.println("Erro ao Atualizar um Destino: " + error.getMessage());
        } finally{
            ps.close();
        }
    }

    public void delete(DestinoDTO DestinoDTO) throws Exception {

        String sql = "DELETE FROM Destinos WHERE id = ?";

        conn = new ConnectionFactory().createConnection();

       try {

            ps = conn.prepareStatement(sql);
            ps.setInt(1, DestinoDTO.getId());
            ps.execute();

            
        } catch (SQLException error) {
            System.out.println("Erro ao Deletar um Destino: " + error.getMessage());
        } finally{
            ps.close();
        }
    }
}
