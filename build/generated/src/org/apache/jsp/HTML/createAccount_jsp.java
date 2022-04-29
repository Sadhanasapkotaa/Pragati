package org.apache.jsp.HTML;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class createAccount_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html lang=\"en\">\n");
      out.write("<head>\n");
      out.write("    <meta charset=\"UTF-8\">\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
      out.write("    <link rel=\"stylesheet\" type=\"text/css\" href=\"../CSS/createAccount.css\">  \n");
      out.write("    <title>Pragati | Create Account</title>\n");
      out.write("    <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\" rel=\"stylesheet\"> \n");
      out.write("    <script src=\"https://kit.fontawesome.com/b8a0a5c528.js\" crossorigin=\"anonymous\"></script>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("\n");
      out.write("    <div class=\"logo\"></div> \n");
      out.write("\n");
      out.write("    <div class=\"Container1\">\n");
      out.write("        <h1 class=\"Heading\">Welcome Back Sathi!</h1>\n");
      out.write("        \n");
      out.write("        <form method=\"post\" action=\"/Pragati/create\" class=\"form\" id=\"form\">  \n");
      out.write("            <input type=\"number\" id=\"id\" name=\"Id\" placeholder=\"Your Id:\"/> <br/>\n");
      out.write("            <input type=\"text\" id=\"fullname\" name=\"fullname\" placeholder=\"Your Name:\"/> <br/>\n");
      out.write("            <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Your Username:\"/> <br/>\n");
      out.write("            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Your E-mail:\"/> <br/>\n");
      out.write("            <input type=\"text\" id=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"Your Phone Number:\"/> <br/>\n");
      out.write("            <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Your Password:\"/> <br/>   \n");
      out.write("            <input type=\"text\" id=\"coupon\" name=\"coupon\" placeholder=\"COUPON (Optional):\"/> <br/>\n");
      out.write("\n");
      out.write("            <button type=\"submit\" class=\"mainButton\">continue</button>\n");
      out.write("         </form>\n");
      out.write("\n");
      out.write("         <p class=\"Or\">Or continue with</p>\n");
      out.write("\n");
      out.write("        <div class=\"loginIcons\">\n");
      out.write("            <div class=\"icon\" id=\"icon1\" style=\"background-image: url('../ASSETS/loginPage/Frame\\ 15.svg');\">\n");
      out.write("\n");
      out.write("            </div>\n");
      out.write("            <div class=\"icon\" id=\"icon2\" style=\"background-image: url('../ASSETS/loginPage/Frame\\ 16.svg');\">\n");
      out.write("\n");
      out.write("            </div>\n");
      out.write("            <div class=\"icon\" id=\"icon3\" style=\"background-image: url('../ASSETS/loginPage/Farame\\ 17.svg');\">\n");
      out.write("\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("         \n");
      out.write("         <p class=\"createAccount\">Already have an account? .</p><a href=\"#ForgotPassword.html\"><h5>Login Here</h5></a>\n");
      out.write("         <div class=\"spacing\"></div>\n");
      out.write("    </div>\n");
      out.write("\n");
      out.write("</body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
