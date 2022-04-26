package createAccountPackage;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Sadhana Sapkota
 */
public class createAccount extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
        }
    }

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
         processRequest(request, response);
    }
    
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
    PrintWriter out = response.getWriter();
    
        String fullname = request.getParameter("fullname");        
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        String phoneNumber = request.getParameter("phoneNumber");
        String password = request.getParameter("password");
        String coupon = request.getParameter("coupon");
        
        try{
            Connection con;
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(  
            "jdbc:mysql://localhost:3306/pragati","root","");
            System.out.println("Connected");
    }catch(ClassNotFoundException | SQLException e){
            System.out.println("ERROR :: e"+e.getMessage());
    }
        
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }
}