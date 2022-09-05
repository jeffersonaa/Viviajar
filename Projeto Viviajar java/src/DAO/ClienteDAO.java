package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import DTO.ClienteDTO;

public class ClienteDAO {

    Connection conn;
    PreparedStatement ps;
    ResultSet rs;
    ArrayList<ClienteDTO> lista = new ArrayList<>();

    public void insert(ClienteDTO clienteDTO) throws Exception {
        String sql = "INSERT INTO clientes (nome, endereco, telefone, cpf, email) VALUES (?,?,?,?,?)";

        conn = new ConnectionFactory().createConnection();

        try {

            ps = conn.prepareStatement(sql);
            ps.setString(1, clienteDTO.getNome());
            ps.setString(2, clienteDTO.getEndereco());
            ps.setString(3, clienteDTO.getTelefone());
            ps.setString(4, clienteDTO.getCPF());
            ps.setString(5, clienteDTO.getEmail());
            ps.execute();
            ps.close();
            
        } catch (SQLException error) {
            System.out.println("Erro ao cadastrar um cliente" + error.getMessage());
        }
    }

    public ArrayList<ClienteDTO> list(ClienteDTO clienteDTO) throws Exception {
        String sql = "SELECT * FROM clientes WHERE cpf = ?";

        conn = new ConnectionFactory().createConnection();

        try {

            ps = conn.prepareStatement(sql);
            ps.setString(1, clienteDTO.getCPF());
            rs = ps.executeQuery();
            

            while(rs.next()){
                ClienteDTO cliente = new ClienteDTO();
                cliente.setId(rs.getInt("id"));
                cliente.setNome(rs.getString("nome"));
                cliente.setEndereco(rs.getString("endereco"));
                cliente.setTelefone(rs.getString("telefone"));
                cliente.setCPF(rs.getString("cpf"));
                cliente.setEmail(rs.getString("email"));

                lista.add(cliente);
            }
            
        } catch (SQLException error) {
            System.out.println("Erro ao buscar um cliente" + error.getMessage());
        }

        return lista;
    }

    public void update(ClienteDTO clienteDTO) throws Exception {

        String sql = "UPDATE clientes SET nome = ?, endereco = ?, telefone = ?, cpf = ?, email = ? WHERE id = ?";

        conn = new ConnectionFactory().createConnection();

       try {

            ps = conn.prepareStatement(sql);
            ps.setString(1, clienteDTO.getNome());
            ps.setString(2, clienteDTO.getEndereco());
            ps.setString(3, clienteDTO.getTelefone());
            ps.setString(4, clienteDTO.getCPF());
            ps.setString(5, clienteDTO.getEmail());
            ps.setInt(6, clienteDTO.getId());
            ps.execute();

            
        } catch (SQLException error) {
            System.out.println("Erro ao Atualizar um cliente: " + error.getMessage());
        } finally{
            ps.close();
        }
    }

    public void delete(ClienteDTO clienteDTO) throws Exception {

        String sql = "DELETE FROM clientes WHERE id = ?";

        conn = new ConnectionFactory().createConnection();

       try {

            ps = conn.prepareStatement(sql);
            ps.setInt(1, clienteDTO.getId());
            ps.execute();

            
        } catch (SQLException error) {
            System.out.println("Erro ao Deletar um cliente: " + error.getMessage());
        } finally{
            ps.close();
        }
    }
}
