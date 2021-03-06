<%-- 
    Document   : login.jsp
    Created on : Apr 19, 2022, 5:35:03 PM
    Author     : Dell
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../CSS/login.css">  
    <title>Pragati | Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"> 
    <script src="https://kit.fontawesome.com/b8a0a5c528.js" crossorigin="anonymous"></script>
</head>
<body>

    <div class="logo"></div>
    

    <div class="Container1">
        <h1 class="Heading">Welcome Back Sathi!</h1>
        
        <form>  
            <input type="text" id="username" name="username" placeholder="Enter Your Username:"/> <br/>
            <div class="indicator"></div> <label for="username"></label>
            <input type="password" id="password" name="password" placeholder="Enter Your Password:"/> <br/>   

            <a href="#ForgotPassword.html"><h5 class="H5Forgot">Forgot Password?</h5></a>

            <!-- <a href="#" class="mainButton">LOGIN</a> -->
            <button type="submit" class="mainButton">login</button>
         </form>

         <p class="Or">Or continue with</p>

        <div class="loginIcons">
            <div class="icon" id="icon1" style="background-image: url('../ASSETS/loginPage/Frame\ 15.svg');">

            </div>
            <div class="icon" id="icon2" style="background-image: url('../ASSETS/loginPage/Frame\ 16.svg');">

            </div>
            <div class="icon" id="icon3" style="background-image: url('../ASSETS/loginPage/Frame\ 17.svg');">

            </div>
        </div>

         <p class="createAccount">Don't have an account? .</p><a href="#ForgotPassword.html"><h5> Create Account</h5></a>
         <div class="spacing"></div>
    </div>

</body>
</html>
