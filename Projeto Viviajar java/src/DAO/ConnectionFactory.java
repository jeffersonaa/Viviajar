package DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

    private  String UserName = "root";
    private  String Password = "falcom@123";
    private  String Databasename = "viviajar";
    private  String DatabaseUrl = "jdbc:mysql://localhost:8082/" + Databasename;

    public Connection createConnection() throws Exception {
        Connection conn = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(DatabaseUrl, UserName, Password);
        } catch (SQLException error) {
            System.out.println("Erro ao conectar no banco de dados" + error.getMessage());
        }

        return conn;
    }
}
